import { BookOpen, Users, Video } from "lucide-react";
import programaBg from "@/assets/programa-bg.jpg";

const ProgramaPage = () => {
  return (
    <div>
      <section className="relative py-32 px-6 overflow-hidden">
        <img src={programaBg} alt="Programa Soltar el Aire" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative allegra-container">
          <span className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-primary">Programa de Exploración</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mt-2 mb-4">Soltar el Aire</h1>
          <p className="text-lg text-muted-foreground font-body max-w-2xl">
            Explorar la voz, su poder transformador y su conexión con el ser profundo.
          </p>
        </div>
      </section>

      <section className="allegra-section">
        <div className="allegra-container max-w-3xl">
          <p className="text-muted-foreground font-body leading-relaxed mb-8">
            Soltar el Aire es un espacio de exploración profunda a través de la voz, donde la palabra, la vibración y la conciencia se entrelazan para soltar viejas estructuras y acercarse a nuestro ser auténtico. Al ser grupal, este proceso nos mostrará la potencia de la vincularidad en pos de ser conscientes de nuestra propia voz.
          </p>
          <blockquote className="border-l-4 border-primary pl-6 italic text-foreground/80 font-display text-xl mb-12">
            "Es al encontrarnos en las voces de los demás que descubrimos la nuestra."
          </blockquote>

          <h2 className="font-display text-2xl font-bold text-foreground mb-2">Programa de 8 semanas</h2>
          <p className="text-muted-foreground font-body leading-relaxed mb-10">
            Durante 8 semanas trabajaremos sobre distintos aspectos de la vivencia personal utilizando la voz como método de expresión para exteriorizar y transformar aquello que sucede dentro.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: <BookOpen className="w-6 h-6" />, title: "Librito", desc: "Una bitácora en papel que servirá de guía para la indagación personal mediante preguntas y ejercicios." },
              { icon: <Users className="w-6 h-6" />, title: "Grupo WhatsApp", desc: "Información, acompañamiento y ejercicios en audio, como espacio de apoyo y comunidad." },
              { icon: <Video className="w-6 h-6" />, title: "Encuentros", desc: "Sesiones presenciales o virtuales para practicar, compartir y profundizar en la exploración vocal." },
            ].map((item, i) => (
              <div key={i} className="allegra-card p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="font-display text-base font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramaPage;
