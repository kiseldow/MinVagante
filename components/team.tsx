import { Card, CardContent } from "@/components/ui/card";
import { Instagram, Award } from "lucide-react";

const trainers = [
  {
    name: "Dario Blando",
    role: "Atleta & Allenatore Powerlifting",
    certifications: "Certificato FIPE",
    image: "/images/img-8041.jpeg",
    objectPosition: "center 30%",
    bio: "Atleta da 5 anni di powerlifting con numerosi successi e medaglie nazionali. Campione italiano di panca junior e vicecampione italiano di powerlifting subjunior. Allenatore di powerlifting e personal trainer, trasmette la passione verso l'allenamento della forza.",
    instagram: "https://instagram.com/minavagantebagheria",
  },
  {
    name: "Alessio Cirrincione",
    role: "Istruttore Sala Pesi & Forza",
    certifications: "Certificato AIF",
    image: "/images/img-8040.jpeg",
    objectPosition: "center 30%",
    bio: "Istruttore di sala pesi dal 2022, allenatore della forza certificato AIF (Accademia Italiana Forza) e specializzato in functional training nell utilizzo di attrezzature non convenzionali (kettlebell, TRX, power band) volto alla preparazione atletica.",
    instagram: "https://instagram.com/minavagantebagheria",
  },
];

export function Team() {
  return (
    <section id="team" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold uppercase tracking-widest mb-4">
            Il Nostro Team
          </p>
          <h2 className="text-3xl md:text-5xl font-bold uppercase mb-4 text-balance">
            Trainer <span className="text-primary">Certificati</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Professionisti della forza pronti a guidarti verso i tuoi obiettivi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {trainers.map((trainer) => (
            <Card
              key={trainer.name}
              className="bg-card border-border overflow-hidden group"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={trainer.image || "/placeholder.svg"}
                  alt={trainer.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ objectPosition: trainer.objectPosition }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-card/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <a
                    href={trainer.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 p-2 bg-background/80 rounded-full hover:bg-primary transition-colors"
                    aria-label={`${trainer.name} Instagram`}
                  >
                    <Instagram className="h-4 w-4" />
                    <span className="text-sm">@minavagantebagheria</span>
                  </a>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold uppercase text-primary mb-1">
                  {trainer.name}
                </h3>
                <p className="text-foreground font-semibold mb-2">
                  {trainer.role}
                </p>
                <div className="flex items-center gap-2 text-accent mb-4">
                  <Award className="h-4 w-4" />
                  <span className="text-sm font-medium">
                    {trainer.certifications}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {trainer.bio}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
