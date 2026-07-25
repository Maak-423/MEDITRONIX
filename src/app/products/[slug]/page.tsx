import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import productsData from "@/data/products.json";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return productsData.categories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = productsData.categories.find((c) => c.slug === slug);

  if (!category) {
    return { title: "Product Not Found - Diksha Meditronix" };
  }

  return {
    title: `${category.title} - Diksha Meditronix`,
    description: category.description,
  };
}

export default async function ProductCategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = productsData.categories.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-gray-300 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/products" className="hover:text-white transition-colors">
              Products
            </Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white">{category.title}</span>
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold">{category.title}</h1>
            <p className="mt-6 text-lg text-gray-200 leading-relaxed">
              {category.description}
            </p>
          </div>
        </div>
      </section>

      {/* Instruments Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark">
              Our {category.title} Range
            </h2>
            <p className="mt-4 text-gray text-lg max-w-2xl mx-auto">
              Explore our comprehensive selection of {category.title.toLowerCase()} designed to meet the highest standards of healthcare delivery.
            </p>
          </div>

          <div className="space-y-16">
            {category.instruments.map((instrument, index) => (
              <div
                key={instrument.id}
                id={instrument.id}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? "" : ""
                }`}
              >
                {/* Image Section */}
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative bg-gray-light rounded-2xl overflow-hidden aspect-[4/3] group">
                    <Image
                      src={`/products/${category.slug}/${instrument.image}`}
                      alt={instrument.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Fallback overlay when image doesn't load */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center">
                      <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                        <svg
                          className="w-12 h-12 text-primary/40"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Premium Quality
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-dark mb-4">
                    {instrument.name}
                  </h3>
                  <p className="text-gray leading-relaxed mb-6">
                    {instrument.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-dark uppercase tracking-wider mb-3">
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {instrument.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <svg
                            className="w-5 h-5 text-secondary shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-dark text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Applications */}
                  <div>
                    <h4 className="text-sm font-semibold text-dark uppercase tracking-wider mb-3">
                      Applications
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {instrument.applications.map((app) => (
                        <span
                          key={app}
                          className="bg-gray-light text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-light py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-dark mb-4">
            Interested in {category.title}?
          </h2>
          <p className="text-gray text-lg mb-8">
            Get detailed specifications, pricing, and customized solutions for your healthcare facility.
            Our team of experts is ready to help you choose the right equipment.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-200 inline-block"
            >
              Request a Quote
            </Link>
            <a
              href="tel:+919773354994"
              className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors duration-200 inline-block"
            >
              Call: +91 97733 54994
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
