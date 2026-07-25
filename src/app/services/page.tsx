import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services - Diksha Meditronix",
  description:
    "Our services include equipment installation, maintenance, AMC, training, hospital planning, and turnkey project solutions for healthcare facilities.",
};

const services = [
  {
    title: "Equipment Installation & Commissioning",
    description:
      "Professional installation of all medical equipment with proper commissioning, calibration, and testing to ensure optimal performance from day one.",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "Annual Maintenance Contracts (AMC)",
    description:
      "Comprehensive AMC plans covering preventive maintenance, breakdown service, spare parts replacement, and regular calibration of all equipment.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Hospital Planning & Consultancy",
    description:
      "End-to-end hospital planning services including department layout, equipment selection, workflow optimization, and compliance advisory.",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
  {
    title: "Turnkey Project Solutions",
    description:
      "Complete turnkey hospital setup from planning to execution — including civil modifications, gas pipeline, electrical work, and full equipment procurement.",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  },
  {
    title: "Training & Education",
    description:
      "Hands-on training for hospital staff on equipment operation, maintenance procedures, safety protocols, and troubleshooting techniques.",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  },
  {
    title: "Spare Parts & Accessories",
    description:
      "Genuine spare parts and accessories for all medical equipment brands. Quick delivery with competitive pricing and warranty on replacements.",
    icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold">Our Services</h1>
            <p className="mt-6 text-lg text-gray-200 leading-relaxed">
              Beyond equipment supply, we provide comprehensive healthcare
              solutions including installation, maintenance, training, and
              complete turnkey hospital projects.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                  <svg
                    className="w-7 h-7 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={service.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-dark mb-3">
                  {service.title}
                </h3>
                <p className="text-gray leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-gray-light py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark">
              How We Work
            </h2>
            <p className="mt-4 text-gray text-lg">
              Our streamlined process ensures smooth project execution from start
              to finish.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                desc: "Understanding your requirements, budget, and facility specifications.",
              },
              {
                step: "02",
                title: "Planning",
                desc: "Detailed project planning with equipment selection and layout design.",
              },
              {
                step: "03",
                title: "Execution",
                desc: "Timely procurement, delivery, installation, and commissioning.",
              },
              {
                step: "04",
                title: "Support",
                desc: "Ongoing maintenance, training, and after-sales support.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-semibold text-dark mb-2 text-lg">
                  {item.title}
                </h3>
                <p className="text-gray text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Segments Served */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark">
              Segments We Serve
            </h2>
            <p className="mt-4 text-gray text-lg">
              Our equipment and services cater to all major medical specialties.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "General Surgery",
              "Orthopedics",
              "Gynecology",
              "Cardiology",
              "Ophthalmology",
              "ENT",
              "Neurology",
              "Urology",
              "Pediatrics",
              "Plastic Surgery",
              "Dermatology",
              "Dental",
              "Oncology",
              "Emergency Medicine",
              "Radiology",
              "Pathology",
            ].map((segment) => (
              <span
                key={segment}
                className="bg-primary/5 text-primary border border-primary/20 px-4 py-2 rounded-full text-sm font-medium"
              >
                {segment}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Let&apos;s Discuss Your Project
          </h2>
          <p className="text-gray-200 text-lg mb-8">
            Whether you need a single piece of equipment or a complete hospital
            setup, our team is ready to help.
          </p>
          <Link
            href="/contact"
            className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-block"
          >
            Contact Our Team
          </Link>
        </div>
      </section>
    </>
  );
}
