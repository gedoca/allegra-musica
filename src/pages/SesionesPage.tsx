import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import sesionesBg from "@/assets/sesiones-bg.jpg";

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

      <section className="allegra-section">
        <div className="allegra-container max-w-3xl space-y-6 text-muted-foreground font-body leading-relaxed">
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

          <div className="pt-8">
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">Sesiones Disponibles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Sesión Individual", desc: "Un espacio íntimo para explorar tu voz, tu respiración y tu conexión con el sonido." },
                { title: "Sesión Grupal", desc: "La potencia del vínculo: exploración vocal colectiva para descubrir la propia voz a través de las demás." },
              ].map((s, i) => (
                <div key={i} className="allegra-card p-6">
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground font-body mb-4">{s.desc}</p>
                  <Link to="/contacto" className="inline-flex items-center gap-2 text-primary text-sm font-semibold font-body hover:underline">
                    Reservar <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SesionesPage;
