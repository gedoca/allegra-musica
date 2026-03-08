import AudioPlayer from "@/components/AudioPlayer";
import ResourceCard from "@/components/ResourceCard";

const sampleTracks = [
  { title: "Una Mañana (demo)", artist: "Allegra", src: "/audio/una-manana-demo.mp3" },
  { title: "Miedo (demo)", artist: "Allegra", src: "/audio/miedo-demo.mp3" },
  { title: "Cristal (demo)", artist: "Allegra", src: "/audio/cristal-demo.mp3" },
];

const resources = [
  {
    title: "Guía de Respiración Vocal",
    description: "Ejercicios prácticos para conectar con tu respiración antes de cantar.",
    downloadUrl: "/recursos/guia-respiracion.pdf",
    type: "PDF",
  },
  {
    title: "Bitácora — Semana 1",
    description: "Material complementario para la primera semana del programa Soltar el Aire.",
    downloadUrl: "/recursos/bitacora-semana1.pdf",
    type: "PDF",
  },
  {
    title: "Ejercicios de Vocalización",
    description: "Fichas con ejercicios para calentar la voz y explorar registros.",
    downloadUrl: "/recursos/vocalizacion.pdf",
    type: "Ficha",
  },
];

const RecursosPage = () => {
  return (
    <div>
      <section className="relative py-32 px-6 bg-muted/30">
        <div className="allegra-container">
          <span className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-primary">Materiales</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mt-2 mb-4">Recursos Musicales</h1>
          <p className="text-lg text-muted-foreground font-body max-w-2xl">
            Escuchá muestras del disco y descargá materiales complementarios.
          </p>
        </div>
      </section>

      <section className="allegra-section">
        <div className="allegra-container">
          <h2 className="font-display text-2xl font-bold text-foreground mb-8">🎧 Reproductor de Muestras</h2>
          <div className="max-w-lg">
            <AudioPlayer tracks={sampleTracks} />
          </div>
          <p className="text-xs text-muted-foreground font-body mt-4">
            * Colocá tus archivos .mp3 en la carpeta <code className="bg-muted px-1 rounded">/public/audio/</code> para activar la reproducción.
          </p>
        </div>
      </section>

      <section className="allegra-section bg-muted/30">
        <div className="allegra-container">
          <h2 className="font-display text-2xl font-bold text-foreground mb-8">📄 Materiales Descargables</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((r, i) => (
              <ResourceCard key={i} {...r} />
            ))}
          </div>
          <p className="text-xs text-muted-foreground font-body mt-6">
            * Colocá tus PDFs en <code className="bg-muted px-1 rounded">/public/recursos/</code> para activar las descargas.
          </p>
        </div>
      </section>
    </div>
  );
};

export default RecursosPage;
