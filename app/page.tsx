import Hero from "@/components/sections/Hero";
import StatsSection from "@/components/sections/StatsSection";
import CategoriesSection from "@/components/sections/CategoriesSection";
import FeaturedAttractions from "@/components/sections/FeaturedAttractions";
import AIAssistantPreview from "@/components/sections/AIAssistantPreview";
import RoutesPreview from "@/components/sections/RoutesPreview";
import EventsPreview from "@/components/sections/EventsPreview";
import GalleryPreview from "@/components/sections/GalleryPreview";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <CategoriesSection />
      <FeaturedAttractions />
      <AIAssistantPreview />
      <RoutesPreview />
      <EventsPreview />
      <GalleryPreview />
      <CTASection />
    </>
  );
}
