import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/soumya27062005",
    icon: Github,
  },
  {
    name: "LinkedIn", 
    href: "https://www.linkedin.com/in/soumya-harishbhai-gupta-0b113a308/",
    icon: Linkedin,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/its_soumya_verse",
    icon: Instagram,
  },
];

export function Footer() {
  return (
    <footer className="relative bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center space-y-8">
          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {socialLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="h-12 w-12 rounded-full hover:glow-primary transition-smooth"
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                  >
                    <link.icon className="h-5 w-5" />
                  </a>
                </Button>
              </motion.div>
            ))}
          </motion.div>

          {/* Quote */}
          <motion.div
            className="max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-muted-foreground italic">
              "The future belongs to those who learn more skills and combine them in creative ways."
            </p>
          </motion.div>

          {/* Copyright */}
          <motion.div
            className="pt-8 border-t border-border"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              Made by Soumya Gupta
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 neural-lines opacity-20 pointer-events-none" />
    </footer>
  );
}
