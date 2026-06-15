import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { certificates } from "@/data/certificates";

export function Certificates() {
  return (
    <section id="certificates" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="">Certificates</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            A collection of certifications earned across AI, Data Science, and Programming.
          </p>
          <div className="h-1 w-20 mx-auto gradient-accent rounded-full" />
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full border-border/50 hover:border-primary/30 transition-all duration-300 hover:glow-primary">
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {cert.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {cert.issuer} • {cert.date}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Certificate Image */}
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full rounded-xl shadow-md border border-border/30"
                  />

                  {/* Description */}
                  {cert.description && (
                    <p className="text-sm text-muted-foreground">{cert.description}</p>
                  )}

                  {/* Verify Button */}
                  {cert.verificationLink && (
                    <Button
                      size="sm"
                      className="w-full gradient-primary group"
                      asChild
                    >
                      <a
                        href={cert.verificationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2 group-hover:animate-bounce-gentle" />
                        Verify Certificate
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View More Certificates */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Button
            variant="outline"
            size="lg"
            className="border-primary/30 hover:border-primary hover:bg-primary/5 group"
            asChild
          >
            <a
              href="https://drive.google.com/drive/folders/1Clds88fGk_1zOPmbOd5NV0E7k_AA_ySB?usp=drive_link" // 🔹 Replace with your full certificates link
              target="_blank"
              rel="noopener noreferrer"
            >
              <Award className="h-5 w-5 mr-2 group-hover:animate-bounce-gentle" />
              View More Certificates
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
