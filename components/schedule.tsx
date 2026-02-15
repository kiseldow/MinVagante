import { Card, CardContent } from "@/components/ui/card";
import { Clock, Calendar } from "lucide-react";

const schedule = [
  {
    day: "Lunedì - Venerdì",
    hours: "8:00 - 22:00",
  },
  {
    day: "Sabato",
    hours: "8:00 - 19:00",
  },
  {
    day: "Domenica",
    hours: "15:00 - 19:00",
  },
];

export function Schedule() {
  return (
    <section id="orari" className="py-24">
      <div id="download-app" className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold uppercase tracking-widest mb-4">
            Orari di Apertura
          </p>
          <h2 className="text-3xl md:text-5xl font-bold uppercase mb-4 text-balance">
            Quando <span className="text-primary">allenarsi</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Prenota il tuo allenamento su App Palestre
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-3 mb-8">
                <Calendar className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold uppercase">
                  Orari Settimanali
                </h3>
              </div>
              <div className="space-y-4">
                {schedule.map((item) => (
                  <div
                    key={item.day}
                    className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg"
                  >
                    <span className="font-semibold uppercase tracking-wide">
                      {item.day}
                    </span>
                    <div className="flex items-center gap-2 text-primary">
                      <Clock className="h-5 w-5" />
                      <span className="font-bold text-lg">{item.hours}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <h3 className="text-2xl text-center md:text-3xl font-bold uppercase tracking-wide">
                  Scarica <span className="text-primary">App Palestre</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
                  {/* iOS */}
                  <a
                    href="https://apps.apple.com/it/app/ID_APP_IOS"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 p-4 bg-card border border-border rounded-xl 
                 hover:border-primary hover:shadow-md transition-all duration-300 group"
                  >
                    {/* Apple icon */}
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-foreground group-hover:text-primary transition-colors"
                    >
                      <path d="M16.365 1.43c0 1.14-.417 2.21-1.112 3.044-.73.87-1.94 1.54-3.05 1.45-.14-1.09.44-2.26 1.12-3.02.74-.86 2.03-1.5 3.04-1.47zM20.97 17.07c-.54 1.26-.8 1.82-1.5 2.9-.98 1.52-2.36 3.42-4.06 3.43-1.52.02-1.92-.98-3.99-.97-2.07.01-2.51.99-4.03.98-1.7-.01-3-1.73-3.98-3.24C.55 16.9-.63 12.16 1.9 8.5c1.26-1.84 3.52-3 5.66-3.02 1.5-.02 2.9 1.02 3.99 1.02 1.08 0 3.09-1.26 5.22-1.07.9.04 3.42.36 5.04 2.72-4.43 2.43-3.71 8.76 1.16 10.92z" />
                    </svg>

                    <span className="font-semibold uppercase tracking-wide">
                      App Store
                    </span>
                  </a>

                  {/* Google Play */}
                  <a
                    href="https://play.google.com/store/apps/details?id=ID_APP_ANDROID"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 p-4 bg-card border border-border rounded-xl 
                 hover:border-primary hover:shadow-md transition-all duration-300 group"
                  >
                    {/* Google Play triangle icon */}
                    <svg viewBox="0 0 24 24" className="w-5 h-5">
                      <polygon points="3,2 21,12 3,22" fill="#34A853" />
                      <polygon points="3,2 14,12 3,22" fill="#4285F4" />
                      <polygon points="14,12 21,12 17,9" fill="#FBBC05" />
                      <polygon points="14,12 21,12 17,15" fill="#EA4335" />
                    </svg>

                    <span className="font-semibold uppercase tracking-wide">
                      Google Play
                    </span>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
