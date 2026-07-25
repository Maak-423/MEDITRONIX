import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products - Diksha Meditronix",
  description:
    "Explore our comprehensive range of medical equipment including OT equipment, ICU setups, NICU systems, physiotherapy equipment, patient monitors, and more.",
};

const productCategories = [
  {
    id: "ot-equipment",
    title: "Operation Theatre Equipment",
    description:
      "Complete Operation Theatre solutions designed for precision, reliability, and surgeon comfort.",
    items: [
      "LED Surgical Lights",
      "OT Tables (Hydraulic & Electric)",
      "Surgical Pendants",
      "Electrosurgical Units",
      "Anesthesia Workstations",
      "OT Room Sterilizers",
    ],
  },
  {
    id: "icu-setup",
    title: "ICU Equipment",
    description:
      "Advanced Intensive Care Unit equipment for critical patient monitoring and care.",
    items: [
      "ICU Beds (Motorized)",
      "Ventilators",
      "Patient Monitors",
      "Infusion Pumps",
      "Syringe Pumps",
      "Defibrillators",
    ],
  },
  {
    id: "nicu-equipment",
    title: "NICU Equipment",
    description:
      "Specialized neonatal intensive care equipment for newborn critical care.",
    items: [
      "Baby Warmers (Radiant)",
      "Phototherapy Units",
      "Infant Incubators",
      "Neonatal Ventilators",
      "Pulse Oximeters (Neonatal)",
      "Transport Incubators",
    ],
  },
  {
    id: "physiotherapy",
    title: "Physiotherapy Equipment",
    description:
      "Complete physiotherapy and rehabilitation equipment for recovery and wellness.",
    items: [
      "Short Wave Diathermy",
      "Ultrasound Therapy Units",
      "TENS / EMS Machines",
      "Cervical & Lumbar Traction",
      "Exercise Equipment",
      "Wax Bath Units",
    ],
  },
  {
    id: "patient-monitors",
    title: "Patient Monitoring Systems",
    description:
      "Real-time patient monitoring systems for accurate vital sign tracking.",
    items: [
      "Multi-Parameter Monitors",
      "ECG Machines (12 Channel)",
      "Pulse Oximeters",
      "Blood Pressure Monitors",
      "Fetal Monitors",
      "Central Monitoring Systems",
    ],
  },
  {
    id: "surgical-instruments",
    title: "Surgical & Diagnostic Instruments",
    description:
      "Precision surgical instruments and diagnostic equipment for various specialties.",
    items: [
      "Suction Machines",
      "Cautery Machines",
      "Boyles Apparatus",
      "Autoclave Sterilizers",
      "Surgical Instrument Sets",
      "ENT Diagnostic Sets",
    ],
  },
  {
    id: "hospital-furniture",
    title: "Hospital Furniture",
    description:
      "Ergonomic and durable hospital furniture for patient comfort and staff efficiency.",
    items: [
      "Hospital Beds (Manual & Electric)",
      "Examination Tables",
      "Stretchers & Trolleys",
      "Bedside Lockers",
      "IV Stands & Instrument Trolleys",
      "Wheelchairs",
    ],
  },
  {
    id: "lab-equipment",
    title: "Laboratory Equipment",
    description:
      "Modern laboratory equipment for accurate diagnostics and testing.",
    items: [
      "Microscopes",
      "Centrifuges",
      "Blood Analyzers",
      "Biochemistry Analyzers",
      "Refrigerators (Medical Grade)",
      "Water Bath Units",
    ],
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold">Our Products</h1>
            <p className="mt-6 text-lg text-gray-200 leading-relaxed">
              Comprehensive range of medical equipment for hospitals, clinics,
              and healthcare facilities. From Operation Theatre to Laboratory,
              we cover every department.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {productCategories.map((category, index) => (
              <div
                key={category.id}
                id={category.id}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <h2 className="text-2xl md:text-3xl font-bold text-dark mb-4">
                    {category.title}
                  </h2>
                  <p className="text-gray leading-relaxed mb-6">
                    {category.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
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
                        <span className="text-dark text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`bg-gray-light rounded-2xl p-12 flex items-center justify-center ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg
                      className="w-16 h-16 text-primary"
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
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-light py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-dark mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-gray text-lg mb-8">
            We offer customized equipment packages tailored to your hospital&apos;s
            specific requirements. Contact us for a detailed consultation.
          </p>
          <Link
            href="/contact"
            className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-200 inline-block"
          >
            Get a Custom Quote
          </Link>
        </div>
      </section>
    </>
  );
}
