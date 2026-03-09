import { ArrowRight } from "lucide-react";
import sesionesBg from "@/assets/sesiones-bg.jpg";
import bio04 from "@/assets/bio-04.jpg";
import home08 from "@/assets/home-08.jpg";

const WHATSAPP_URL = "https://wa.me/5491153130624";

const SesionesPage = () => {
  return (
    <div>
      <section className="relative py-32 px-6 overflow-hidden">
        <img src={sesionesBg} alt="Sesiones de canto" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative allegra-container">
          <span className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-primary">Exploración Vocal</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mt-2 mb-4">Sesiones</h1>
          <p className="text-lg text-muted-foreground font-body max-w-2xl">
            El punto de partida: La voz es aire.
          </p>
        </div>
      </section>

      {/* Manifesto */}
      <section className="allegra-section">
        <div className="allegra-container max-w-3xl">
          <blockquote className="font-display text-2xl md:text-3xl leading-relaxed text-center text-foreground/90 mb-12 font-light tracking-wide">
            El punto de partida: La voz es aire.
          </blockquote>
          
          <div className="space-y-6 text-muted-foreground font-body leading-relaxed">
            <p>
              Aire que ingresa al cuerpo, llevando oxígeno a la sangre, energizando los músculos, permitiendo la vida. El mismo que luego de realizar su intercambio se convierte en dióxido de carbono y sale del cuerpo llevando consigo lo que ya no necesita.
            </p>
            <p className="font-semibold text-foreground">
              Ese desecho que el cuerpo elimina, es la voz.
            </p>
            <p>
              También es uno de los medios principales con el que los seres nos comunicamos entre nosotros. Moldeamos el aire y lo convertimos en sonido, le damos significados a esos sonidos, nos ponemos de acuerdo, creamos lenguajes, aprendemos, enseñamos, compartimos.
            </p>
            <p>
              Los sonidos vibran dentro y fuera del cuerpo. Percibimos esas vibraciones, nos conmovemos, creamos música, le damos sentido, nos identificamos, atravesamos las barreras de lo tangible.
            </p>
            <blockquote className="border-l-4 border-primary pl-6 italic text-foreground/80 font-display text-xl my-8">
              "Soltar para mutar, soltar para transformarse."
            </blockquote>
            <p>
              Cada sonido que emitimos es entonces la prueba irrefutable de nuestra capacidad innata de transformarnos, de resignificar, de construir a partir de lo que ya no es para nosotros.
            </p>
            <p className="text-primary font-semibold">— Allegra —</p>
          </div>
        </div>
      </section>

      {/* Soltar la Voz with image */}
      <section className="allegra-section bg-muted/30">
        <div className="allegra-container max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8 items-center">
            <div className="allegra-card p-8 md:p-12 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <span className="text-xs font-body font-semibold tracking-widest uppercase text-primary">Propuesta Central</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Soltar la Voz</h2>
              <p className="text-lg text-muted-foreground font-body leading-relaxed mb-6">
                Exploraciones individuales y grupales para descubrir, liberar y transformar tu voz. Un espacio donde el sonido se convierte en puente hacia lo que habita en vos.
              </p>
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-body font-semibold"
              >
                Agendar Sesión <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <img src={bio04} alt="Allegra — exploración vocal" className="rounded-xl w-full object-cover aspect-[3/4] hidden md:block" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Foundations */}
      <section className="allegra-section">
        <div className="allegra-container">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-4">Fundamentos del Trabajo Vocal</h2>
          <p className="text-center text-muted-foreground font-body mb-12 max-w-2xl mx-auto">
            Tres pilares que sostienen mi práctica terapéutica y artística.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="allegra-card p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">Psicología Social</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                La voz situada, el cuerpo como territorio. Entendemos la voz como construcción social y vincular, atravesada por la historia y el contexto.
              </p>
            </div>
            <div className="allegra-card p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">Método Funcional de la Voz</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                Fisiología y conciencia respiratoria. Trabajamos desde el cuerpo, respetando la anatomía vocal y desarrollando una técnica saludable.
              </p>
            </div>
            <div className="allegra-card p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">Herramientas Actorales</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                La escena como laboratorio, "estar siendo". Exploramos la presencia, la verdad escénica y la expresividad desde el juego y la vivencia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ambientación image */}
      <section className="allegra-section bg-muted/30">
        <div className="allegra-container max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 items-center">
            <img src={home08} alt="Allegra — sesiones de canto" className="rounded-xl w-full object-cover aspect-video" loading="lazy" />
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">Modalidades de Sesiones</h2>
              <div className="space-y-6">
                {[
                  { title: "Sesión Individual", desc: "Un espacio íntimo para explorar tu voz, tu respiración y tu conexión con el sonido." },
                  { title: "Sesión Grupal", desc: "La potencia del vínculo: exploración vocal colectiva para descubrir la propia voz a través de las demás." },
                ].map((s, i) => (
                  <div key={i} className="allegra-card p-6">
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground font-body mb-4">{s.desc}</p>
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary text-sm font-semibold font-body hover:underline">
                      Reservar <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SesionesPage;
