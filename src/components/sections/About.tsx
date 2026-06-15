import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { skills, skillCategories } from "@/data/skills";
import profileImage from "@/assets/profile.jpg";

export function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="">Me</span>
          </h2>
          <div className="h-1 w-20 mx-auto gradient-primary rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 glow-primary">
                <img
                  src={profileImage}
                  alt="Soumya Gupta"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating decoration */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-pulse-glow" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary rounded-full animate-pulse-glow" />
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                Computer Engineering Graduate & AI Enthusiast
              </h3>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I recently completed my Diploma in Computer Engineering and am currently 
                  pursuing advanced studies in AI & Data Science. My journey in technology 
                  began with a curiosity about how computers work, which evolved into a 
                  passion for creating intelligent systems.
                </p>
                
                <p>
                  From developing IoT solutions with ESP32 to building Android applications, 
                  I love exploring different aspects of technology. Currently, I'm focused 
                  on machine learning algorithms, neural networks, and data analytics.
                </p>
                
                <p>
                  When I'm not coding, you'll find me exploring the latest AI research papers, 
                  contributing to open-source projects, or working on personal projects that 
                  solve real-world problems.
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="text-center p-4 hover:glow-primary transition-all duration-300">
                <CardContent className="p-0">
                  <div className="text-2xl font-bold ">
                    15+
                  </div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </CardContent>
              </Card>
              
              <Card className="text-center p-4 hover:glow-accent transition-all duration-300">
                <CardContent className="p-0">
                  <div className="text-2xl font-bold ">
                    20+
                  </div>
                  <div className="text-sm text-muted-foreground">Certificates</div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-center mb-12">
            Technical <span className="">Skills</span>
          </h3>
          
          <div className="space-y-8">
            {Object.entries(skillCategories).map(([key, categoryName], categoryIndex) => {
              const categorySkills = skills.filter(skill => skill.category === key);
              
              if (categorySkills.length === 0) return null;
              
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                >
                  <h4 className="text-lg font-semibold mb-4 text-primary">{categoryName}</h4>
                  <div className="flex flex-wrap gap-2">
                    {categorySkills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge
                          variant={skill.level === "advanced" ? "default" : "secondary"}
                          className={`
                            ${skill.level === "advanced" ? "gradient-primary text-primary-foreground" : ""}
                            ${skill.level === "intermediate" ? "border-accent text-accent" : ""}
                            hover:glow-primary transition-all duration-300
                          `}
                        >
                          {skill.name}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
