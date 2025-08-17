import { ParksMapsSection } from "@/components/sections/parks-section";
import { Main } from "@/components/layouts/main"


/**
 * Component for the Parks page
 */
export default function ParksPage() {

  return (
    <Main ariaLabelKey="main.parksContent">
      <ParksMapsSection />
    </Main>
  );
}
