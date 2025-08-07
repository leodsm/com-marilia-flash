import { Facebook, Instagram, Twitter, Youtube, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  const footerLinks = [
    {
      title: "Sobre",
      links: [
        { name: "Quem Somos", href: "#" },
        { name: "Equipe", href: "#" },
        { name: "Anuncie Conosco", href: "#" },
        { name: "Contato", href: "#" }
      ]
    },
    {
      title: "Seções",
      links: [
        { name: "Notícias", href: "#" },
        { name: "Cultura Pop", href: "#" },
        { name: "Comunidade", href: "#" },
        { name: "Curiosidades", href: "#" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Política de Privacidade", href: "#" },
        { name: "Termos de Uso", href: "#" },
        { name: "Código de Ética", href: "#" },
        { name: "Direitos Autorais", href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        {/* Newsletter Section */}
        <div className="bg-gradient-hero rounded-2xl p-8 mb-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-2">
            Fique por dentro de tudo!
          </h3>
          <p className="text-white/90 mb-6">
            Receba as principais notícias de Marília direto no seu email
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input 
              placeholder="Seu melhor email"
              className="bg-white border-0 flex-1"
            />
            <Button className="bg-coral hover:bg-coral/90 text-white">
              <Mail className="w-4 h-4 mr-2" />
              Inscrever
            </Button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <h4 className="text-2xl font-bold text-primary mb-4">
              Com<span className="text-coral">Marília</span>
            </h4>
            <p className="text-gray-warm text-sm mb-4">
              O seu portal de notícias local, conectando você com tudo que acontece 
              em Marília e região. Cultura, comunidade e entretenimento em um só lugar.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Link Columns */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h5 className="font-semibold text-foreground mb-4">
                {section.title}
              </h5>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-gray-warm hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-warm">
          <p>
            © 2024 ComMarília. Todos os direitos reservados.
          </p>
          <p className="mt-2 sm:mt-0">
            Feito com ❤️ para a comunidade mariliense
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;