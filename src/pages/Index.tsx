import { Link } from "react-router-dom";
import { ArrowRight, Music2, Mic2, BookOpen } from "lucide-react";
import heroCollage from "@/assets/hero-collage.jpg";

const videoIds = ["ffIm50MJTtg", "X4w4qAeF09Q", "Tp5QOr2cTDQ", "rLmifbry6qM"];
const videoTitles = [
  "Campaña "Todas las partes"",
  "Pozo - Lisandro Aristimuño (cover)",
  "Al lado del camino - Fito Páez (cover)",
  "Alfonsina y el mar (cover)",
];

const proposals = [
  {
    icon: <Mic2 className="w-8 h-8" />,
    title: "Soltar el Aire",
    subtitle: "Programa de 8 semanas",
    desc: "Exploración profunda a través de la voz, donde la palabra, la vibración y la conciencia se entrelazan.",
    link: "/programa",
  },
  {
    icon: <Music2 className="w-8 h-8" />,
    title: "Sesiones",
    subtitle: "Individuales y grupales",
    desc: "Sesiones de exploración vocal para conectar con tu voz auténtica y transformar tu relación con el sonido.",
    link: "/sesiones",
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Nuevo Disco",
    subtitle: "Todas las Partes",
    desc: "Un álbum conceptual dividido en cuatro etapas que recorren un proceso emocional y creativo.",
    link: "/#campania",
  },
];

const tiers = [
  { price: 20, name: "Inicial", perks: ["Tu nombre en los créditos del disco"], count: 0 },
  { price: 50, name: "Bronce", perks: ["Acceso a 1 clase grupal", "Crédito en el disco"], count: 1 },
  { price: 100, name: "Plata", perks: ["1 sesión de canto individual", "Clase grupal", "Créditos"], count: 2 },
  { price: 250, name: "Oro", perks: ["Proceso de 4 sesiones individuales", "Clase grupal", "Créditos"], count: 0 },
  { price: 500, name: "Platino", perks: ["Cover grabado por Cintia", "Sesión individual + clase grupal", "Crédito en el disco"], count: 0 },
  { price: 1000, name: "Diamante", perks: ["Canción personalizada", "Sesión individual + clase grupal", "Crédito destacado"], count: 1 },
];

const HomePage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <img
          src={heroCollage}
          alt="Allegra Música — collage artístico"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
        <div className="relative z-10 text-center px-6 animate-fade-in-up">
          <p className="text-sm font-body font-semibold tracking-[0.3em] uppercase text-primary mb-4">
            Campaña de Financiamiento
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight">
            Todas las Partes
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 font-body max-w-xl mx-auto mb-8">
            El primer disco solista de Cintia Alegre. Un collage de canciones y textos donde conviven pedazos que antes estaban escondidos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#campania"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-body font-semibold hover:opacity-90 transition-opacity animate-pulse-glow"
            >
              Colaborá con el disco
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              to="/autora"
              className="inline-flex items-center gap-2 border border-foreground/20 text-foreground px-8 py-3 rounded-full font-body font-semibold hover:bg-foreground/5 transition-colors"
            >
              Conocé a Allegra
            </Link>
          </div>
        </div>
      </section>

      {/* Proposals */}
      <section className="allegra-section">
        <div className="allegra-container">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            Mis Propuestas
          </h2>
          <p className="text-center text-muted-foreground font-body mb-12 max-w-2xl mx-auto">
            Espacios de encuentro con la voz, la música y el ser.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {proposals.map((p, i) => (
              <Link key={i} to={p.link} className="allegra-card p-8 group text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                  {p.icon}
                </div>
                <span className="text-xs font-body font-semibold tracking-widest uppercase text-primary">{p.subtitle}</span>
                <h3 className="font-display text-xl font-bold text-foreground mt-2 mb-3">{p.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{p.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign */}
      <section id="campania" className="allegra-section bg-muted/30">
        <div className="allegra-container">
          <div className="flex items-center gap-3 justify-center mb-2">
            <span className="text-2xl">🎶</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Campaña — Todas las Partes
            </h2>
          </div>
          <p className="text-center text-muted-foreground font-body mb-8 max-w-2xl mx-auto">
            Estamos grabando el primer EP del disco "Todas las Partes" y queremos invitarte a ser coproductor.
          </p>

          {/* Progress */}
          <div className="max-w-md mx-auto mb-12">
            <div className="flex justify-between text-sm font-body mb-2">
              <span className="text-foreground font-semibold">$1,275 USD</span>
              <span className="text-muted-foreground">$5,000 USD</span>
            </div>
            <div className="h-3 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full transition-all" style={{ width: "25.5%" }} />
            </div>
            <p className="text-center text-xs text-muted-foreground font-body mt-2">4 coproductores · 25% alcanzado</p>
          </div>

          {/* Tiers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tiers.map((tier) => (
              <div key={tier.name} className="allegra-card p-6">
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="font-display text-3xl font-bold text-foreground">${tier.price}</span>
                  <span className="text-sm text-muted-foreground font-body">USD</span>
                </div>
                <span className="text-xs font-body font-bold tracking-widest uppercase text-primary">
                  Coproductor {tier.name}
                </span>
                <ul className="mt-4 space-y-2">
                  {tier.perks.map((perk, j) => (
                    <li key={j} className="text-sm text-muted-foreground font-body flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>{j === 0 ? <strong className="text-foreground">{perk}</strong> : perk}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSejVQc7snxR16e14sT1i6SLHSnPYt8sxEQT8Pdr7UCH-dNUyA/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 w-full inline-flex items-center justify-center bg-primary/10 text-primary px-4 py-2.5 rounded-lg text-sm font-semibold font-body hover:bg-primary/20 transition-colors"
                >
                  Colaborar
                </a>
                {tier.count > 0 && (
                  <p className="text-xs text-muted-foreground font-body mt-2 text-center">
                    {tier.count} coproductor{tier.count > 1 ? "es" : ""}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos */}
      <section className="allegra-section">
        <div className="allegra-container">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Mis últimos videos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videoIds.map((id, i) => (
              <div key={id} className="allegra-card overflow-hidden">
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${id}`}
                    title={videoTitles[i]}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm font-body font-medium text-foreground">{videoTitles[i]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="allegra-section bg-muted/30 text-center">
        <div className="allegra-container">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            ¿Querés explorar tu voz?
          </h2>
          <p className="text-muted-foreground font-body mb-8 max-w-lg mx-auto">
            Escribime para conocer más sobre las sesiones, el programa Soltar el Aire o la campaña del disco.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-body font-semibold hover:opacity-90 transition-opacity"
          >
            Contacto
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
