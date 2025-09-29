import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Services from "@/pages/services";
import Locations from "@/pages/locations";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Appointments from "@/pages/appointments";
import FAQ from "@/pages/faq";
import VIP from "@/pages/vip";
import Fleet from "@/pages/fleet";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
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
