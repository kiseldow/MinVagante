import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/powerlifting-athlete-barbell-squat-dark-gym-dramat.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <p className="text-accent font-semibold uppercase tracking-widest mb-4">
            Nuova Apertura a Bagheria
          </p>

          <div className="mb-6">
            <Image
              src="/images/3abbe435-5b6c-478f-9a99-884095b116ce.jpeg"
              alt="Mina Vagante - Powerlifting & Streetlifting"
              width={450}
              height={225}
              className="object-contain"
            />
          </div>

          <p className="text-lg md:text-xl text-primary mb-2 font-semibold">
            Specializzati in allenamento della forza e del resistance training
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
            Primo centro personal training sulla forza a Bagheria. Prenota il
            tuo allenamento su App Palestre.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Button
              className="uppercase tracking-wide font-semibold gap-2 bg-accent hover:bg-accent/80 text-accent-foreground"
            >
              Primo Allenamento Gratuito
              <ArrowRight className="h-4 w-4" />
            </Button>

            {/* Pulsante che scrolla alla sezione download */}
            <a href="#download-app">
              <Button
                size="lg"
                variant="outline"
                className="uppercase tracking-wide font-semibold gap-2 
                 border-primary text-primary 
                 hover:bg-primary hover:text-primary-foreground transition-all"
              >
                Scarica App Palestre
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
