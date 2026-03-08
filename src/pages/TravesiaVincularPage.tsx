import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Users, BookOpen, MessageCircle, FileText } from "lucide-react";
import sesionesBg from "@/assets/sesiones-bg.jpg";

const TravesiaVincularPage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-32 px-6 overflow-hidden">
        <img src={sesionesBg} alt="Travesía Vincular" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-background/85" />
        <div className="relative allegra-container">
          <Link to="/terapeuta" className="inline-flex items-center gap-2 text-primary text-sm font-body font-semibold mb-6 hover:underline">
            <ArrowLeft className="w-4 h-4" /> Terapeuta
          </Link>
          <span className="block text-xs font-body font-semibold tracking-[0.3em] uppercase text-primary">Germán Doin & Cintia Alegre</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mt-2 mb-4">Travesía Vincular</h1>
          <p className="text-lg text-muted-foreground font-body max-w-2xl">
            Un dispositivo vivencial y terapéutico para profundizar en el autoconocimiento a través del vínculo con otros. Porque el vínculo es nuestro verdadero maestro y espejo.
          </p>
        </div>
      </section>

      {/* Concepto */}
      <section className="allegra-section">
        <div className="allegra-container max-w-3xl space-y-6 text-muted-foreground font-body leading-relaxed">
          <p>
            <strong className="text-foreground">Travesía Vincular</strong> es un espacio de encuentro profundo donde la Inteligencia Vincular se convierte en el eje de la transformación personal. Aquí, el grupo opera como un campo de resonancia donde cada participante puede verse reflejado, sostenido y desafiado por el otro.
          </p>
          <p>
            Creemos que los vínculos son el territorio donde se revelan nuestras luces y sombras. No buscamos respuestas individuales, sino la sabiduría que emerge cuando nos exponemos auténticamente al encuentro.
          </p>
          <blockquote className="border-l-4 border-primary pl-6 italic text-foreground/80 font-display text-xl my-8">
            "El vínculo es nuestro verdadero maestro y espejo."
          </blockquote>
          <p>
            Desde un abordaje que integra herramientas de la psicología social, la Gestalt, la educación popular y la exploración vocal, cada travesía es una invitación a soltar certezas y habitar la pregunta junto a otros.
          </p>
        </div>
      </section>

      {/* Cofacilitadores */}
      <section className="allegra-section bg-muted/30">
        <div className="allegra-container max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">Cofacilitadores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="allegra-card p-8 text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-5">
                <Users className="w-10 h-10" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-1">Germán Doin</h3>
              <span className="text-xs font-body font-semibold tracking-widest uppercase text-primary">Educador & Acompañante</span>
              <p className="text-sm text-muted-foreground font-body leading-relaxed mt-4">
                Educador, comunicador y acompañante en procesos de autoconocimiento. Cofundador de <strong className="text-foreground">Arka</strong>, con más de 15 años de experiencia facilitando grupos y formación en Gestalt. Su mirada integra la educación popular, la comunicación consciente y la investigación vincular.
              </p>
            </div>
            <div className="allegra-card p-8 text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-5">
                <Users className="w-10 h-10" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-1">Cintia Alegre</h3>
              <span className="text-xs font-body font-semibold tracking-widest uppercase text-primary">Música & Terapeuta Vocal</span>
              <p className="text-sm text-muted-foreground font-body leading-relaxed mt-4">
                Música, cantautora y terapeuta vocal. Especializada en la exploración de la voz y psicología social, con más de 10 años acompañando procesos expresivos. Su trabajo conecta el cuerpo, la vibración y la palabra como vías de transformación.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Grupo de Autoconocimiento */}
      <section className="allegra-section">
        <div className="allegra-container max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">Grupo de Autoconocimiento Vincular</h2>
          <p className="text-muted-foreground font-body leading-relaxed mb-8">
            Un proceso grupal de <strong className="text-foreground">4 meses (16 encuentros)</strong> diseñado para quienes desean ir más allá de la superficie y sumergirse en un viaje de autodescubrimiento a través del espejo vincular.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
            {[
              { title: "Autobiografía", desc: "Revisitar la propia historia para comprender los patrones que nos habitan." },
              { title: "Heridas Infantiles", desc: "Reconocer y abrazar las marcas fundantes que moldean nuestra forma de vincularnos." },
              { title: "Eneagrama Vivo", desc: "El eneagrama como mapa vivencial, no teórico: reconocer el propio carácter en acción." },
              { title: "Inteligencia Vincular", desc: "Desarrollar la capacidad de habitar relaciones más conscientes, honestas y nutritivas." },
            ].map((tema, i) => (
              <div key={i} className="allegra-card p-6">
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{tema.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{tema.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTAs */}
      <section className="allegra-section bg-muted/30">
        <div className="allegra-container max-w-2xl text-center">
          <h2 className="font-display text-2xl font-bold text-foreground mb-3">Sumate a la Travesía</h2>
          <p className="text-muted-foreground font-body mb-10">
            Conectá con la comunidad, leé nuestras reflexiones o inscribite en los grupos vigentes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://travesiavincular.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-sm hover:bg-primary/90 transition-colors"
            >
              <BookOpen className="w-4 h-4" /> Substack
            </a>
            <a
              href="https://chat.whatsapp.com/travesiavincular"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-background text-foreground font-body font-semibold text-sm hover:bg-muted transition-colors"
            >
              <MessageCircle className="w-4 h-4" /> Grupo de WhatsApp
            </a>
            <a
              href="https://forms.gle/travesiavincular"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-background text-foreground font-body font-semibold text-sm hover:bg-muted transition-colors"
            >
              <FileText className="w-4 h-4" /> Inscripciones
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TravesiaVincularPage;
