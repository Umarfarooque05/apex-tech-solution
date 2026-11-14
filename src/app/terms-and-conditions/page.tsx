import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Apex Tech Solution",
  description: "Terms and conditions governing the use of Apex Tech Solution's website and digital technology services.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-white py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-slate-800">
        
        <div className="border-b border-slate-200 pb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2">Terms & Conditions</h1>
          <p className="text-xs text-slate-500 font-mono">Last Updated: January 2026 | Apex Tech Solution (apextechsolution.in)</p>
        </div>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900">1. Acceptance of Terms</h2>
          <p className="text-sm leading-relaxed text-slate-600">
            By accessing or using apextechsolution.in or engaging Apex Tech Solution for SEO, digital marketing, web development, custom software, or custom web application services, you agree to comply with these Terms & Conditions.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900">2. Service Delivery & Agreements</h2>
          <p className="text-sm leading-relaxed text-slate-600">
            All service deliverables, scope of work, timelines, and payment terms will be explicitly agreed upon in a written proposal or client agreement prior to project commencement.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900">3. Intellectual Property</h2>
          <p className="text-sm leading-relaxed text-slate-600">
            Upon full payment of agreed fees, client-specific custom code, designs, and deliverables created by Apex Tech Solution will belong to the client as specified in the service contract.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900">4. Contact Information</h2>
          <p className="text-sm leading-relaxed text-slate-600">
            For inquiries regarding our terms, reach out to us at <a href="mailto:info@apextechsolution.in" className="text-brand-600 underline font-semibold">info@apextechsolution.in</a>.
          </p>
        </section>

      </div>
    </div>
  );
}
