import Link from "next/link";

const stats = [
  { number: "500+", label: "Installations" },
  { number: "200+", label: "Hospital Partners" },
  { number: "15+", label: "Years Experience" },
  { number: "50+", label: "Products" },
];

const products = [
  {
    title: "Operation Theatre Equipment",
    slug: "ot-equipment",
    description:
      "Complete OT setup including surgical lights, tables, pendants, and sterilization systems.",
    icon: (
      <svg
        className="w-12 h-12 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "ICU Setup",
    slug: "icu-setup",
    description:
      "State-of-the-art ICU beds, ventilators, patient monitors, and infusion systems.",
    icon: (
      <svg
        className="w-12 h-12 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
  {
    title: "NICU Equipment",
    slug: "nicu-equipment",
    description:
      "Baby warmers, phototherapy units, incubators, and neonatal care systems.",
    icon: (
      <svg
        className="w-12 h-12 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  },
  {
    title: "Physiotherapy Equipment",
    slug: "physiotherapy",
    description:
      "Comprehensive physiotherapy setups including electrotherapy, traction, and exercise equipment.",
    icon: (
      <svg
        className="w-12 h-12 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "Patient Monitors",
    slug: "patient-monitors",
    description:
      "Multi-parameter monitors, pulse oximeters, ECG machines, and vital sign monitors.",
    icon: (
      <svg
        className="w-12 h-12 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
  {
    title: "Surgical Instruments",
    slug: "surgical-instruments",
    description:
      "High-quality surgical tools, suction machines, and sterilization equipment.",
    icon: (
      <svg
        className="w-12 h-12 text-primary"
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
    ),
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Advanced Medical
                <span className="text-secondary"> Equipment </span>
                Solutions
              </h1>
              <p className="mt-6 text-lg text-gray-200 leading-relaxed max-w-lg">
                Diksha Meditronix is one of the leading companies in the field of
                healthcare in India, manufacturing and distributing hospital
                equipment for OT, ICU, NICU, Physiotherapy &amp; more.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/products"
                  className="bg-secondary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary-dark transition-colors duration-200 inline-block"
                >
                  Explore Products
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors duration-200 inline-block"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <div className="relative w-96 h-96">
                <div className="absolute inset-0 bg-secondary/20 rounded-full animate-pulse" />
                <div className="absolute inset-8 bg-secondary/30 rounded-full" />
                <div className="absolute inset-16 bg-white/10 rounded-full flex items-center justify-center">
                  <svg
                    className="w-32 h-32 text-white/80"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-light py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary">
                  {stat.number}
                </p>
                <p className="text-gray mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Overview */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark">
              Our Product Range
            </h2>
            <p className="mt-4 text-gray text-lg">
              We provide a comprehensive range of medical equipment for
              hospitals, clinics, and healthcare facilities.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link
                key={product.title}
                href={`/products/${product.slug}`}
                className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="mb-4">{product.icon}</div>
                <h3 className="text-xl font-semibold text-dark mb-2 group-hover:text-primary transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray leading-relaxed">
                  {product.description}
                </p>
                <span className="inline-flex items-center gap-1 mt-4 text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/products"
              className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-200 inline-block"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-light py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark">
              Why Choose Diksha Meditronix?
            </h2>
            <p className="mt-4 text-gray text-lg">
              We are committed to delivering reliable, high-quality healthcare
              solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Quality Assured",
                desc: "All products are rigorously tested to meet international quality standards.",
              },
              {
                title: "Expert Support",
                desc: "Dedicated technical team for installation, training, and after-sales service.",
              },
              {
                title: "Wide Range",
                desc: "Comprehensive portfolio covering all departments of a modern hospital.",
              },
              {
                title: "Trusted Partner",
                desc: "Serving 200+ hospitals and healthcare institutions across India.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 text-center shadow-sm"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-primary"
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
                </div>
                <h3 className="font-semibold text-dark mb-2">{item.title}</h3>
                <p className="text-gray text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Equip Your Healthcare Facility?
          </h2>
          <p className="mt-4 text-gray-200 text-lg">
            Get in touch with us for customized solutions tailored to your
            hospital&apos;s needs.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-block"
            >
              Request a Quote
            </Link>
            <a
              href="tel:+919773354994"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors duration-200 inline-block"
            >
              Call: +91 97733 54994
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
