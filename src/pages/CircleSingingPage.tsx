import { Link } from "react-router-dom";
import { ArrowRight, Mic2, Heart, Users, Waves } from "lucide-react";
import circleSingingBg from "@/assets/circle-singing-bg.png";

const CircleSingingPage = () => {
  return (
    <div>
      <section className="relative py-32 px-6 overflow-hidden">
        <img src={circleSingingBg} alt="Circle Singing" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-background/80 opacity-30" />
        <div className="relative allegra-container">
          <span className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-primary">Práctica Colectiva</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mt-2 mb-4">Circle Singing</h1>
          <p className="text-lg text-muted-foreground font-body max-w-2xl">
            Canto circular, improvisación colectiva y comunidad sonora.
          </p>
        </div>
      </section>

      <section className="allegra-section">
        <div className="allegra-container max-w-3xl space-y-6 text-muted-foreground font-body leading-relaxed">
          <p>
            El <strong className="text-foreground">Circle Singing</strong> es una práctica de improvisación vocal colectiva donde un grupo de personas se reúne en círculo para crear música en tiempo real, sin partitura, sin ensayo previo, sin necesidad de experiencia musical.
          </p>
          <p>
            Una persona propone un patrón melódico o rítmico, y el resto se suma, capa a capa, construyendo una trama sonora viva que se transforma momento a momento. No hay errores: cada voz encuentra su lugar.
          </p>
          <blockquote className="border-l-4 border-primary pl-6 italic text-foreground/80 font-display text-xl my-8">
            "No necesitás saber cantar. Solo necesitás estar dispuesto a escuchar y a dejarte escuchar."
          </blockquote>
          <p>
            Esta práctica, popularizada por Bobby McFerrin, es al mismo tiempo un ejercicio musical, un ritual comunitario y una experiencia terapéutica. Al cantar juntos sin estructura fija, se disuelven las jerarquías y aparece algo que va más allá de la suma de las partes.
          </p>
        </div>
      </section>

      <section className="allegra-section bg-muted/30">
        <div className="allegra-container max-w-4xl">
          <h2 className="font-display text-2xl font-bold text-foreground text-center mb-10">¿Qué sucede en un Circle Singing?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
            { icon: <Mic2 className="w-6 h-6" />, title: "Improvisación guiada", desc: "Una facilitadora propone melodías y ritmos que el grupo toma, transforma y hace propios." },
            { icon: <Users className="w-6 h-6" />, title: "Comunidad sonora", desc: "El círculo genera un espacio de confianza donde cada voz es bienvenida tal como es." },
            { icon: <Waves className="w-6 h-6" />, title: "Vibración compartida", desc: "La resonancia de las voces en conjunto produce una experiencia física y emocional profunda." },
            { icon: <Heart className="w-6 h-6" />, title: "Sanación colectiva", desc: "El canto circular permite soltar tensiones, conectar con las emociones y sentirse parte de algo mayor." }].
            map((item, i) =>
            <div key={i} className="allegra-card p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="font-display text-base font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-body">{item.desc}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="allegra-section text-center">
        <div className="allegra-container">
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">¿Querés participar?</h2>
          <p className="text-muted-foreground font-body mb-8 max-w-lg mx-auto">
            Escribime para conocer las próximas fechas de Circle Singing o para organizar una sesión en tu ciudad.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-body font-semibold hover:opacity-90 transition-opacity">
            
            Contacto
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>);

};

export default CircleSingingPage;