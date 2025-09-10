import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Sudarshanganwani9",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/sudarshanganwani",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:sidkushwah9@gmail.com",
      label: "Email"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-card border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <Button
              variant="ghost"
              onClick={scrollToTop}
              className="text-2xl font-bold gradient-text hover:bg-transparent p-0 mb-2"
            >
              Sudarshan Ganwani
            </Button>
            <p className="text-muted-foreground">
              Full Stack Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <a 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                </Button>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Sudarshan Ganwani
            </p>
            <p className="text-muted-foreground text-sm flex items-center justify-center md:justify-end gap-1 mt-1">
              Made with <Heart className="h-4 w-4 text-red-500" /> using React & TypeScript
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/50 mt-8 pt-8">
          <div className="text-center">
            <p className="text-muted-foreground text-sm">
              "Code is poetry in motion, and every line tells a story."
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;