import { useState } from "react";
import { z } from "zod";
import { Send, CheckCircle } from "lucide-react";

const contactSchema = z.object({
  name: z.string().trim().min(1, "El nombre es requerido").max(100),
  email: z.string().trim().email("Email inválido").max(255),
  subject: z.string().trim().min(1, "El asunto es requerido").max(200),
  message: z.string().trim().min(1, "El mensaje es requerido").max(2000),
});

type ContactForm = z.infer<typeof contactSchema>;

const ContactoPage = () => {
  const [form, setForm] = useState<ContactForm>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors(prev => ({ ...prev, [e.target.name]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: typeof errors = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) fieldErrors[err.path[0] as keyof ContactForm] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    // In production, send to backend
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-6">
        <div className="text-center animate-fade-in-up">
          <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
          <h1 className="font-display text-3xl font-bold text-foreground mb-2">¡Mensaje enviado!</h1>
          <p className="text-muted-foreground font-body">Gracias por escribir. Te responderé lo antes posible.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <section className="relative py-32 px-6 bg-muted/30">
        <div className="allegra-container">
          <span className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-primary">Escribime</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mt-2 mb-4">Contacto</h1>
          <p className="text-lg text-muted-foreground font-body max-w-2xl">
            ¿Tenés consultas sobre sesiones, el programa o la campaña del disco? Escribime y te respondo.
          </p>
        </div>
      </section>

      <section className="allegra-section">
        <div className="allegra-container max-w-xl">
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            {([
              { name: "name" as const, label: "Nombre", type: "text", placeholder: "Tu nombre" },
              { name: "email" as const, label: "Email", type: "email", placeholder: "tu@email.com" },
            ]).map((field) => (
              <div key={field.name}>
                <label className="block text-sm font-body font-semibold text-foreground mb-1.5">{field.label}</label>
                <input
                  type={field.type}
                  name={field.name}
                  value={form[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                />
                {errors[field.name] && <p className="text-sm text-destructive font-body mt-1">{errors[field.name]}</p>}
              </div>
            ))}

            <div>
              <label className="block text-sm font-body font-semibold text-foreground mb-1.5">Asunto</label>
              <select
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
              >
                <option value="">Seleccioná un tema</option>
                <option value="Sesiones individuales">Sesiones individuales</option>
                <option value="Sesiones grupales">Sesiones grupales</option>
                <option value="Programa Soltar el Aire">Programa Soltar el Aire</option>
                <option value="Campaña Todas las Partes">Campaña Todas las Partes</option>
                <option value="Otro">Otro</option>
              </select>
              {errors.subject && <p className="text-sm text-destructive font-body mt-1">{errors.subject}</p>}
            </div>

            <div>
              <label className="block text-sm font-body font-semibold text-foreground mb-1.5">Mensaje</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="Escribí tu consulta..."
                className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none"
              />
              {errors.message && <p className="text-sm text-destructive font-body mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-body font-semibold hover:opacity-90 transition-opacity"
            >
              <Send className="w-4 h-4" />
              Enviar mensaje
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactoPage;
