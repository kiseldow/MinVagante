"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Instagram, MessageCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { FaWhatsapp } from "react-icons/fa";

const contactInfo = [
  {
    icon: MapPin,
    title: "Indirizzo",
    content: "Via F.B. Mazzarella 2B, Bagheria",
  },
  {
    icon: Phone,
    title: "Telefono - Dario",
    content: "392 463 8538",
    link: "tel:3924638538",
    whatsapp: "https://wa.me/393924638538?text=Ciao%20vorrei%20ricevere%20informazioni",
  },
  {
    icon: Phone,
    title: "Telefono - Alessio",
    content: "329 942 0134",
    link: "tel:3299420134",
    whatsapp: "https://wa.me/393299420134?text=Ciao%20vorrei%20ricevere%20informazioni",
  },
  {
    icon: Instagram,
    title: "Instagram",
    content: "@minavagantebagheria",
    link: "https://instagram.com/minavagantebagheria",
  },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      )
      .then(
        () => {
          alert("Messaggio inviato correttamente!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          console.error("EmailJS error:", error);
          alert("Errore durante l'invio. Riprova.");
        },
      );
  };

  return (
    <section id="contatti" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold uppercase tracking-widest mb-4">
            Contattaci
          </p>
          <h2 className="text-3xl md:text-5xl font-bold uppercase mb-4 text-balance">
            Vieni a <span className="text-primary">trovarci</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Il primo centro personal training sulla forza a Bagheria ti aspetta.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {contactInfo.map((item, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardContent className="p-4 flex items-start gap-4 justify-between">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm uppercase">
                        {item.title}
                      </h3>

                      <div className="flex items-center gap-1 leading-none">
                        {item.link ? (
                          <a
                            href={item.link}
                            target={
                              item.link.startsWith("http")
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              item.link.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="text-muted-foreground text-sm hover:text-primary transition-colors"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-muted-foreground text-sm">
                            {item.content}
                          </p>
                        )}
                      </div>  
                    </div>
                    <div className="flex items-center gap-1 leading-none">
                      {item.whatsapp && (
                        <a
                          href={item.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Chat WhatsApp"
                          className="flex items-center text-green-600 hover:text-green-500 transition-colors"
                        >
                          <FaWhatsapp  className="h-7 w-7" />
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="aspect-video bg-secondary rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196.29602320039214!2d13.50170812862759!3d38.07652026694524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1319e2fe95742d5f%3A0xcf3b14af48ec64ee!2sVia%20F.%20B.%20Mazzarella%2C%202B%2C%2090011%20Bagheria%20PA!5e0!3m2!1sit!2sit!4v1770424489543!5m2!1sit!2sit"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mappa Mina Vagante Bagheria"
              />
            </div>
          </div>
          {/* Contact Form */}
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold uppercase mb-6">
                Richiedi Informazioni
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Nome e Cognome"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="bg-input border-border"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="bg-input border-border"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Telefono"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="bg-input border-border"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Il tuo messaggio..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="bg-input border-border min-h-32"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full uppercase tracking-wide font-semibold bg-accent hover:bg-accent/80 text-accent-foreground"
                >
                  Invia Messaggio
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
