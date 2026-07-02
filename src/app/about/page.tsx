import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Meditronix",
  description:
    "Learn about Meditronix - a leading manufacturer and distributor of medical equipment in India with expertise in OT, ICU, NICU, and Physiotherapy setups.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold">About Meditronix</h1>
            <p className="mt-6 text-lg text-gray-200 leading-relaxed">
              One of the leading companies in the field of healthcare in India,
              with a wide range of products and services catering to multiple
              medical segments.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-dark mb-6">Our Story</h2>
              <div className="space-y-4 text-gray leading-relaxed">
                <p>
                  Meditronix Electronics Pvt. Ltd. was founded with a vision to
                  revolutionize healthcare infrastructure in India. Starting from
                  our headquarters in Maharashtra, we have grown into one of the
                  most trusted names in medical equipment manufacturing and
                  distribution.
                </p>
                <p>
                  We specialize in manufacturing and distributing hospital
                  equipment including Operation Theatre Equipment, ICU setups,
                  NICU systems, and Physiotherapy equipment. Our products serve
                  hospitals across General Surgery, Orthopedics, Gynecology,
                  Ophthalmology, Plastic Surgery, and many more specialties.
                </p>
                <p>
                  With a commitment to quality and innovation, we continuously
                  strive to provide cutting-edge solutions that help healthcare
                  professionals deliver better patient outcomes.
                </p>
              </div>
            </div>
            <div className="bg-gray-light rounded-2xl p-8 lg:p-12">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "2008", label: "Founded" },
                  { number: "500+", label: "Installations" },
                  { number: "200+", label: "Hospital Partners" },
                  { number: "50+", label: "Products" },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <p className="text-2xl md:text-3xl font-bold text-primary">
                      {item.number}
                    </p>
                    <p className="text-sm text-gray mt-1">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-light py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-dark mb-4">Our Mission</h3>
              <p className="text-gray leading-relaxed">
                To provide affordable, reliable, and innovative medical
                equipment that empowers healthcare institutions to deliver
                world-class patient care. We aim to bridge the gap between
                advanced medical technology and accessible healthcare
                infrastructure.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-secondary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-dark mb-4">Our Vision</h3>
              <p className="text-gray leading-relaxed">
                To become India&apos;s most trusted medical equipment company by
                setting new standards in quality, innovation, and customer
                service. We envision a future where every healthcare facility has
                access to the latest medical technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark">
              Our Core Values
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality Excellence",
                desc: "We never compromise on quality. Every product undergoes rigorous testing and meets international standards before reaching our customers.",
                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
              },
              {
                title: "Customer First",
                desc: "Our customers are at the heart of everything we do. From consultation to after-sales support, we ensure complete satisfaction.",
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
              },
              {
                title: "Innovation",
                desc: "We continuously invest in R&D to bring the latest medical technology and innovative solutions to the Indian healthcare market.",
                icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
              },
            ].map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={value.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-dark mb-3">
                  {value.title}
                </h3>
                <p className="text-gray leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Certifications &amp; Compliance
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["ISO 13485", "CE Certified", "FDA Registered", "BIS Standards"].map(
              (cert) => (
                <div
                  key={cert}
                  className="bg-white/10 rounded-xl p-6 backdrop-blur-sm"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <p className="font-semibold">{cert}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}
