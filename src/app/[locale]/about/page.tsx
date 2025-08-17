import { Main } from "@/components/layouts/main";
import { AboutSection } from "@/components/sections/about-section";
import { StackSection } from "@/components/sections/stack-section";

/**
 * Component for the About page
 */
export default function About() {

  return (
    <Main ariaLabelKey="main.aboutContent">
      <AboutSection />
      <StackSection />
    </Main>
  );
}
