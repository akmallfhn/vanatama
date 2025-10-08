import GlobalSupplyCompany from "./components/templates/GlobalSupplyCompany";
import HomeHeroBanner from "./components/templates/HomeHeroBanner";
import OverviewCompany from "./components/templates/OverviewCompany";

export default function Home() {
  return (
    <div>
      <HomeHeroBanner />
      <OverviewCompany />
      <GlobalSupplyCompany />
    </div>
  );
}
