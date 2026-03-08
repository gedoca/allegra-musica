import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import AutoraPage from "./pages/AutoraPage";
import ProgramaPage from "./pages/ProgramaPage";
import SesionesPage from "./pages/SesionesPage";
import RecursosPage from "./pages/RecursosPage";
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
            <Route path="/autora" element={<AutoraPage />} />
            <Route path="/programa" element={<ProgramaPage />} />
            <Route path="/sesiones" element={<SesionesPage />} />
            <Route path="/recursos" element={<RecursosPage />} />
            <Route path="/recursos/:categoria" element={<RecursosPage />} />
            <Route path="/contacto" element={<ContactoPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
