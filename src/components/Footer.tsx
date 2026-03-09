import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import allegraLogo from "@/assets/allegra-logo.png";

const WHATSAPP_URL = "https://wa.me/5491153130624";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={allegraLogo} alt="Allegra" className="w-6 h-6 rounded-full object-cover" />
              <span className="font-display text-lg font-bold text-foreground">ALLEGRA</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed font-body">
              Voz, música y exploración. Un espacio de Cintia Alegre para conectar con tu voz auténtica.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-foreground mb-4">Navegación</h4>
            <div className="flex flex-col gap-2">
              <Link to="/musica" className="text-sm text-muted-foreground hover:text-primary transition-colors font-body">Música</Link>
              <Link to="/terapeuta" className="text-sm text-muted-foreground hover:text-primary transition-colors font-body">Terapeuta</Link>
              <Link to="/terapeuta/soltar-el-aire" className="text-sm text-muted-foreground hover:text-primary transition-colors font-body pl-3">— Soltar el Aire</Link>
              <Link to="/terapeuta/circle-singing" className="text-sm text-muted-foreground hover:text-primary transition-colors font-body pl-3">— Circle Singing</Link>
              <Link to="/sesiones" className="text-sm text-muted-foreground hover:text-primary transition-colors font-body">Sesiones</Link>
              <Link to="/campaña" className="text-sm text-muted-foreground hover:text-primary transition-colors font-body">Campaña</Link>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors font-body">Contacto (WhatsApp)</a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-foreground mb-4">Redes</h4>
            <div className="flex gap-4">
              <a href="https://www.youtube.com/channel/UCTD2M0c2AaOuLHywo1UV4UQ" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">YouTube</a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">Instagram</a>
              <a href="https://open.spotify.com/album/0f2h1hZ2lhqqBrm5H8NgDV" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">Spotify</a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex items-center justify-center gap-1 text-xs text-muted-foreground font-body">
          <span>Hecho con</span>
          <Heart className="w-3 h-3 text-primary fill-primary" />
          <span>por Allegra © {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
