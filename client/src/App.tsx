import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Services from "@/pages/services";
import Locations from "@/pages/locations";
import GrantsLocation from "@/pages/locations/grants";
import GallupLocation from "@/pages/locations/gallup";
import FarmingtonLocation from "@/pages/locations/farmington";
import EagarLocation from "@/pages/locations/eagar";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Appointments from "@/pages/appointments";
import FAQ from "@/pages/faq";
import VIP from "@/pages/vip";
import Fleet from "@/pages/fleet";
import TiresService from "@/pages/services/tires";
import OilChangeService from "@/pages/services/oil-change";
import BrakesService from "@/pages/services/brakes";
import AlignmentService from "@/pages/services/alignment";
import AutoRepairService from "@/pages/services/auto-repair";
import TruckAccessoriesService from "@/pages/services/truck-accessories";
import BatteriesService from "@/pages/services/batteries";
import ACHeaterService from "@/pages/services/ac-heater";
import TireBrandsPage from "@/pages/tire-brands";
import Blog from "@/pages/blog";
import BlogArticle from "@/pages/blog-article";
import Careers from "@/pages/careers";
import TireProsWarranty from "@/pages/tire-pros-warranty";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/services/tires" component={TiresService} />
      <Route path="/services/oil-change" component={OilChangeService} />
      <Route path="/services/brakes" component={BrakesService} />
      <Route path="/services/alignment" component={AlignmentService} />
      <Route path="/services/auto-repair" component={AutoRepairService} />
      <Route path="/services/truck-accessories" component={TruckAccessoriesService} />
      <Route path="/services/batteries" component={BatteriesService} />
      <Route path="/services/ac-heater" component={ACHeaterService} />
      <Route path="/tire-brands" component={TireBrandsPage} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogArticle} />
      <Route path="/careers" component={Careers} />
      <Route path="/tire-pros-warranty" component={TireProsWarranty} />
      <Route path="/locations/grants" component={GrantsLocation} />
      <Route path="/locations/gallup" component={GallupLocation} />
      <Route path="/locations/farmington" component={FarmingtonLocation} />
      <Route path="/locations/eagar" component={EagarLocation} />
      <Route path="/locations" component={Locations} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/appointments" component={Appointments} />
      <Route path="/faq" component={FAQ} />
      <Route path="/vip" component={VIP} />
      <Route path="/fleet" component={Fleet} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
