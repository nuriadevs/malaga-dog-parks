import { HeroSection } from "@/components/sections/hero-section";
import { MissionSection } from "@/components/sections/mission-section";
import { Main } from "@/components/layouts/main";

/**
 * Component for the Home page
 */
export default function Home() {
  return (
    <Main ariaLabelKey="main.homeContent">
      <HeroSection />
      <MissionSection />
    </Main>
  );
}