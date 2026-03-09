import { Link } from "react-router-dom";
import { CheckCircle2, Circle } from "lucide-react";
import { Progress } from "@/components/ui/progress";

// EDITABLE: Change this value to update the campaign progress
const CAMPAIGN_PROGRESS = 25; // Percentage (0-100)

const milestones = [
  { id: 1, title: "Producción y lanzamiento de Fractura", completed: true },
  { id: 2, title: "Producción de Movimiento", completed: false },
  { id: 3, title: "Producción de Apertura", completed: false },
  { id: 4, title: "Producción de Integración", completed: false },
];

const contributionLevels = [
  {
    amount: "$500",
    title: "Semilla",
    desc: "Tu nombre en los agradecimientos del disco digital + acceso anticipado a las canciones.",
  },
  {
    amount: "$1,500",
    title: "Raíz",
    desc: "Todo lo anterior + disco físico firmado + invitación a un encuentro virtual exclusivo.",
  },
  {
    amount: "$3,000",
    title: "Tronco",
    desc: "Todo lo anterior + sesión individual de exploración vocal (online) + poster firmado.",
  },
  {
    amount: "$5,000",
    title: "Copa",
    desc: "Todo lo anterior + participación en el videoclip de una canción + entrada doble al show de lanzamiento.",
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {contributionLevels.map((level, i) => (
              <div
                key={i}
                className="allegra-card p-6 flex flex-col hover:border-primary/50 transition-colors"
              >
                <span className="font-display text-3xl font-bold text-primary mb-2">
                  {level.amount}
                </span>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {level.title}
                </h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed mb-6 flex-1">
                  {level.desc}
                </p>
                <Link
                  to="/contacto"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-body font-semibold text-sm"
                >
                  Aportar
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About the Project */}
      <section className="allegra-section">
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
          <p className="text-primary font-semibold text-center pt-6">
            Gracias por ser parte de este proceso. 💛
          </p>
        </div>
      </section>
    </div>
  );
};

export default CampañaPage;
