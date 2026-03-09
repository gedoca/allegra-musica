import { Link } from "react-router-dom";
import { ArrowRight, Wind, Users, Heart } from "lucide-react";
import sesionesBg from "@/assets/sesiones-bg.jpg";

const approaches = [
  {
    icon: <User className="w-8 h-8" />,
    title: "Sesión Individual",
    subtitle: "Programa de 8 semanas",
    desc: "Un espacio íntimo para explorar tu historia personal desde la voz, el cuerpo y tu conexión con el sonido.",
    link: "/sesiones",
  },
  {
    icon: <Wind className="w-8 h-8" />,
    title: "Soltar el Aire",
    subtitle: "Programa de 8 semanas",
    desc: "Exploración profunda a través de la voz, donde la palabra, la vibración y la conciencia se entrelazan para soltar viejas estructuras.",
    link: "/terapeuta/soltar-el-aire",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Circle Singing",
    subtitle: "Canto circular comunitario",
    desc: "Improvisación vocal colectiva: un ritual sonoro donde las voces se encuentran sin partitura, creando comunidad desde el sonido.",
    link: "/terapeuta/circle-singing",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Travesía Vincular",
    subtitle: "Autoconocimiento a través del vínculo",
    desc: "Un dispositivo vivencial y terapéutico co-dirigido por Germán Doin y Cintia Alegre, donde el vínculo es nuestro verdadero maestro y espejo.",
    link: "/terapeuta/travesia-vincular",
  },
];

const TerapeutaPage = () => {
  return (
    <div>
      <section className="relative py-32 px-6 overflow-hidden">
        <img src={sesionesBg} alt="Terapia vocal" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative allegra-container">
          <span className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-primary">Voz y Terapia</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mt-2 mb-4">Terapeuta</h1>
          <p className="text-lg text-muted-foreground font-body max-w-2xl">
            El punto de partida: La voz es aire. Aire que transforma, que sana, que conecta.
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
            Cada sonido que emitimos es entonces la prueba irrefutable de nuestra capacidad innata de transformarnos, de resignificar, de construir a partir de lo que ya no es para nosotros.
          </p>
          <blockquote className="border-l-4 border-primary pl-6 italic text-foreground/80 font-display text-xl my-8">
            "Soltar para mutar, soltar para transformarse."
          </blockquote>
        </div>
      </section>

      <section className="allegra-section bg-muted/30">
        <div className="allegra-container">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-4">Mis Propuestas Terapéuticas</h2>
          <p className="text-center text-muted-foreground font-body mb-12 max-w-2xl mx-auto">
            Espacios de encuentro con la voz, la vibración y la conciencia.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {approaches.map((a, i) => (
              <Link key={i} to={a.link} className="allegra-card p-8 group text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                  {a.icon}
                </div>
                <span className="text-xs font-body font-semibold tracking-widest uppercase text-primary">{a.subtitle}</span>
                <h3 className="font-display text-xl font-bold text-foreground mt-2 mb-3">{a.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">{a.desc}</p>
                <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold font-body group-hover:underline">
                  Explorar <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default TerapeutaPage;
