import { Instagram, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const footerLinks = {
  palestra: [
    { label: "Servizi", href: "#servizi" },
    { label: "Orari", href: "#orari" },
    { label: "Team", href: "#team" },
    { label: "Contatti", href: "#contatti" },
  ],
  servizi: [
    { label: "Powerlifting", href: "#servizi" },
    { label: "Streetlifting", href: "#servizi" },
    { label: "Personal Training", href: "#servizi" },
    { label: "Functional Training", href: "#servizi" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/images/c49b1405-9474-486c-9869-05fe5764ba30.jpeg"
                alt="Mina Vagante Logo"
                width={50}
                height={50}
                className="rounded"
              />
              <span className="text-xl font-bold uppercase tracking-wider text-primary">Mina Vagante</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Primo centro personal training sulla forza a Bagheria. Specializzati in powerlifting e streetlifting.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/minavagantbagheria"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-card rounded-full hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="tel:3924638538"
                className="p-2 bg-card rounded-full hover:bg-primary transition-colors"
                aria-label="Telefono"
              >
                <Phone className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold uppercase tracking-wide mb-4 text-primary">Palestra</h3>
            <ul className="space-y-2">
              {footerLinks.palestra.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold uppercase tracking-wide mb-4 text-primary">Servizi</h3>
            <ul className="space-y-2">
              {footerLinks.servizi.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Quick Info */}
          <div>
            <h3 className="font-bold uppercase tracking-wide mb-4 text-primary">Contatti</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Via F.B. Mazzarella 2B</li>
              <li>Bagheria (PA)</li>
              <li className="pt-2">
                <a href="tel:3924638538" className="hover:text-primary transition-colors">
                  392 463 8538
                </a>
              </li>
              <li>
                <a href="tel:3299420134" className="hover:text-primary transition-colors">
                  329 942 0134
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Mina Vagante SSD. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  )
}
