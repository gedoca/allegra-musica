import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import MusicaPage from "./pages/MusicaPage";
import TerapeutaPage from "./pages/TerapeutaPage";
import SoltarElAirePage from "./pages/SoltarElAirePage";
import CircleSingingPage from "./pages/CircleSingingPage";
import TravesiaVincularPage from "./pages/TravesiaVincularPage";
import SesionesPage from "./pages/SesionesPage";
import ContactoPage from "./pages/ContactoPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/musica" element={<MusicaPage />} />
            <Route path="/terapeuta" element={<TerapeutaPage />} />
            <Route path="/terapeuta/soltar-el-aire" element={<SoltarElAirePage />} />
            <Route path="/terapeuta/circle-singing" element={<CircleSingingPage />} />
            <Route path="/sesiones" element={<SesionesPage />} />
            <Route path="/contacto" element={<ContactoPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
