import { Card, CardContent } from "@/components/ui/card"
import { Dumbbell, Target, Users, Flame } from "lucide-react"

const services = [
  {
    icon: Dumbbell,
    name: "Powerlifting",
    description:
      "Allenamento specifico per le tre alzate: squat, panca piana e stacco da terra.",
  },
  {
    icon: Target,
    name: "Streetlifting",
    description: "Disciplina che combina forza a corpo libero con sovraccarichi. Trazioni e dip zavorrate.",
  },
  {
    icon: Users,
    name: "Personal Training",
    description: "Sessioni individuali con trainer certificati per raggiungere i tuoi obiettivi di forza.",
  },
  {
    icon: Flame,
    name: "Functional Training",
    description: "Allenamento funzionale con kettlebell e resistance training per migliorare forza e condizionamento.",
  },
]

export function Services() {
  return (
    <section id="servizi" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold uppercase tracking-widest mb-4">I Nostri Servizi</p>
          <h2 className="text-3xl md:text-5xl font-bold uppercase mb-4 text-balance">
            Allenamento della <span className="text-primary">Forza</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Centro specializzato in resistance training con trainer certificati FIPE e AIF.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card
              key={service.name}
              className="bg-card border-border overflow-hidden group hover:border-primary/50 transition-colors"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold uppercase mb-3 text-primary">{service.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-4 mt-12">
          <div className="aspect-[3/4] rounded-lg overflow-hidden">
            <img
              src="/images/AleCirrStacchi.jpeg"
              alt="Overhead press con bilanciere"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              style={{ objectPosition: "center 30%" }}
            />
          </div>
          <div className="aspect-[3/4] rounded-lg overflow-hidden">
            <img
              src="/images/img-8042.jpeg"
              alt="Panca piana con assistenza"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              style={{ objectPosition: "center top" }}
            />
          </div>
          <div className="aspect-[3/4] rounded-lg overflow-hidden">
            <img
              src="/images/img-8044.jpeg"
              alt="Trazioni zavorrate"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              style={{ objectPosition: "center 30%" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
