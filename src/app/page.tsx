import HeroSection from "@/components/home/HeroSection";
import TrustValueStrip from "@/components/home/TrustValueStrip";
import ServicesOverview from "@/components/home/ServicesOverview";
import WhyUsSection from "@/components/home/WhyUsSection";
import ProcessSection from "@/components/home/ProcessSection";
import SeoFeatureSection from "@/components/home/SeoFeatureSection";
import SoftwareFeatureSection from "@/components/home/SoftwareFeatureSection";
import CustomWebApplicationSection from "@/components/home/CustomWebApplicationSection";
import SelectedWorkSection from "@/components/home/SelectedWorkSection";
import PreFooterCta from "@/components/PreFooterCta";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustValueStrip />
      <ServicesOverview />
      <WhyUsSection />
      <ProcessSection />
      <SeoFeatureSection />
      <SoftwareFeatureSection />
      <CustomWebApplicationSection />
      <SelectedWorkSection />
      <PreFooterCta />
    </>
  );
}
