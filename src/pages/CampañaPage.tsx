import { Link } from "react-router-dom";
import { CheckCircle2, Circle } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import fracturaCover from "@/assets/fractura-cover.jpg";

// EDITABLE: Change this value to update the campaign progress
const CAMPAIGN_PROGRESS = 25; // Percentage (0-100)

const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSejVQc7snxR16e14sT1i6SLHSnPYt8sxEQT8Pdr7UCH-dNUyA/viewform";

const milestones = [
  { id: 1, title: "Producción y lanzamiento de Fractura", completed: true },
  { id: 2, title: "Producción de Movimiento", completed: false },
  { id: 3, title: "Producción de Apertura", completed: false },
  { id: 4, title: "Producción de Integración", completed: false },
];

const contributionLevels = [
  {
    amount: "20 USD",
    ars: "~24.000 ARS",
    col: "~84.000 COL",
    title: "Coproductor INICIAL",
    desc: "Tu nombre en los créditos del disco.",
    accent: false,
  },
  {
    amount: "50 USD",
    ars: "~60.000 ARS",
    col: "~210.000 COL",
    title: "Coproductor BRONCE",
    desc: "Acceso a 1 Clase grupal + Crédito en el disco.",
    accent: false,
  },
  {
    amount: "100 USD",
    ars: "~120.000 ARS",
    col: "~420.000 COL",
    title: "Coproductor PLATA",
    desc: "1 sesión de canto individual + Clase grupal + Créditos.",
    accent: false,
  },
  {
    amount: "250 USD",
    ars: "~300.000 ARS",
    col: "~1.050.000 COL",
    title: "Coproductor ORO",
    desc: "Proceso de 4 sesiones individuales + Clase grupal + Créditos.",
    accent: true,
  },
  {
    amount: "500 USD",
    ars: "~600.000 ARS",
    col: "~2.100.000 COL",
    title: "Coproductor PLATINO",
    desc: "Cover grabado por Cintia + Sesión individual + clase grupal + Crédito en el disco.",
    accent: true,
  },
  {
    amount: "1000 USD",
    ars: "~1.200.000 ARS",
    col: "~4.200.000 COL",
    title: "Coproductor DIAMANTE",
    desc: "Canción personalizada + Sesión individual + clase grupal + Crédito destacado.",
    accent: true,
  },
];

const CampañaPage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-32 px-6 bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
        <div className="allegra-container max-w-4xl text-center">
          <span className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-primary">
            Financiamiento Colectivo
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mt-2 mb-4">
            Todas las Partes
          </h1>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed">
            Un disco completo que nace de la fractura. Cuatro canciones que exploran el movimiento, la apertura y la integración de todas mis partes.
          </p>
        </div>
      </section>

      {/* Progress Bar */}
      <section className="allegra-section bg-muted/30">
        <div className="allegra-container max-w-3xl">
          <div className="allegra-card p-8 md:p-12">
            <div className="flex justify-between items-baseline mb-4">
              <h2 className="font-display text-2xl font-bold text-foreground">Recaudación</h2>
              <span className="font-display text-4xl font-bold text-primary">{CAMPAIGN_PROGRESS}%</span>
            </div>
            <Progress value={CAMPAIGN_PROGRESS} className="h-4 mb-6" />
            <p className="text-sm text-muted-foreground font-body text-center">
              Cada aporte nos acerca a completar este viaje sonoro. Gracias por ser parte.
            </p>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="allegra-section">
        <div className="allegra-container max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-center">
            Objetivos del Proyecto
          </h2>
          <div className="space-y-4">
            {milestones.map((milestone) => (
              <div
                key={milestone.id}
                className={`allegra-card p-6 flex items-center gap-4 ${
                  milestone.completed ? "bg-primary/5 border-primary/30" : ""
                }`}
              >
                {milestone.completed ? (
                  <CheckCircle2 className="w-8 h-8 text-primary flex-shrink-0" />
                ) : (
                  <Circle className="w-8 h-8 text-muted-foreground/40 flex-shrink-0" />
                )}
                <div className="flex-1">
                  <h3
                    className={`font-display text-lg font-bold ${
                      milestone.completed ? "text-primary" : "text-foreground"
                    }`}
                  >
                    Objetivo {milestone.id}
                  </h3>
                  <p className="text-muted-foreground font-body">{milestone.title}</p>
                </div>
                {milestone.completed && (
                  <span className="text-xs font-body font-semibold tracking-widest uppercase text-primary">
                    Logrado
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contribution Levels */}
      <section className="allegra-section bg-muted/30">
        <div className="allegra-container">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-4">
            Niveles de Aporte
          </h2>
          <p className="text-center text-muted-foreground font-body mb-12 max-w-2xl mx-auto">
            Elegí cómo querés acompañar este proyecto. Cada nivel incluye recompensas especiales como muestra de gratitud.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {contributionLevels.map((level, i) => (
              <div
                key={i}
                className={`allegra-card p-6 flex flex-col transition-colors ${
                  level.accent
                    ? "border-primary/40 bg-primary/5 hover:border-primary/60"
                    : "hover:border-primary/30"
                }`}
              >
                <span className="font-display text-3xl font-bold text-primary mb-1">
                  {level.amount}
                </span>
                <div className="text-xs text-muted-foreground font-body mb-3 space-y-0.5">
                  <p>{level.ars}</p>
                  <p>{level.col}</p>
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-3">
                  {level.title}
                </h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed mb-6 flex-1">
                  {level.desc}
                </p>
                <a
                  href={FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-body font-semibold text-sm uppercase tracking-wider"
                >
                  Colaborar
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Album Cover */}
      <section className="allegra-section">
        <div className="allegra-container max-w-md mx-auto text-center">
          <img
            src={fracturaCover}
            alt="Portada del disco Fractura — Allegra"
            className="w-full rounded-xl shadow-lg mb-6"
            loading="lazy"
          />
          <p className="text-muted-foreground font-body text-sm italic">
            Fractura — El primer paso de "Todas las Partes"
          </p>
        </div>
      </section>

      {/* About the Project */}
      <section className="allegra-section bg-muted/30">
        <div className="allegra-container max-w-3xl space-y-6 text-muted-foreground font-body leading-relaxed">
          <h2 className="font-display text-3xl font-bold text-foreground mb-6">
            ¿Por qué financiamiento colectivo?
          </h2>
          <p>
            Porque <strong className="text-foreground">Todas las Partes</strong> no es solo un disco mío. Es un proyecto que nace del encuentro, de las voces que me acompañaron, de las personas que sostuvieron mi quiebre y mi reconstrucción.
          </p>
          <p>
            Fractura fue el primer paso: la canción que abrió la puerta. Ahora necesito tu apoyo para seguir adelante y darle forma a las otras tres partes de este collage sonoro.
          </p>
          <blockquote className="border-l-4 border-primary pl-6 italic text-foreground/80 font-display text-xl my-8">
            "Cada aporte es un gesto de confianza en que las historias que no se cuentan, merecen ser cantadas."
          </blockquote>
          <p>
            Con tu ayuda, vamos a poder grabar, producir y lanzar las canciones que completan este viaje: <strong className="text-foreground">Movimiento</strong>, <strong className="text-foreground">Apertura</strong> e <strong className="text-foreground">Integración</strong>.
          </p>
          <div className="text-center pt-6">
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-body font-semibold"
            >
              Quiero ser Coproductor/a 💛
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CampañaPage;
