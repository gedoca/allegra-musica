import { Link } from "react-router-dom";
import { Music, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Music className="w-5 h-5 text-primary" />
              <span className="font-display text-lg font-bold text-foreground">ALLEGRA</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed font-body">
              Voz, música y exploración. Un espacio de Cintia Alegre para conectar con tu voz auténtica.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-foreground mb-4">Navegación</h4>
            <div className="flex flex-col gap-2">
              <Link to="/autora" className="text-sm text-muted-foreground hover:text-primary transition-colors font-body">Autora</Link>
              <Link to="/programa" className="text-sm text-muted-foreground hover:text-primary transition-colors font-body">Soltar el Aire</Link>
              <Link to="/sesiones" className="text-sm text-muted-foreground hover:text-primary transition-colors font-body">Sesiones</Link>
              <Link to="/recursos" className="text-sm text-muted-foreground hover:text-primary transition-colors font-body">Recursos</Link>
              <Link to="/contacto" className="text-sm text-muted-foreground hover:text-primary transition-colors font-body">Contacto</Link>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-foreground mb-4">Redes</h4>
            <div className="flex gap-4">
              <a href="https://www.youtube.com/channel/UCTD2M0c2AaOuLHywo1UV4UQ" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">YouTube</a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">Instagram</a>
              <a href="https://open.spotify.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">Spotify</a>
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
