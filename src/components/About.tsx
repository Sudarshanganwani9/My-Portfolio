import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Server, Smartphone } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces with modern frameworks"
    },
    {
      icon: Server,
      title: "Backend Development", 
      description: "Building robust server-side applications and RESTful APIs"
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Designing efficient database schemas and optimizing queries"
    },
    {
      icon: Smartphone,
      title: "Full Stack Solutions",
      description: "End-to-end application development from conception to deployment"
    }
  ];

  const interests = [
    "Web Development",
    "Software Engineering", 
    "Cloud Computing",
    "DevOps",
    "UI/UX Design",
    "Artificial Intelligence"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background, skills, and what drives my passion for technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Full Stack Developer & Technology Enthusiast
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate full stack developer with expertise in modern web technologies. 
                  My journey in software development has been driven by a curiosity to solve complex 
                  problems and create meaningful digital experiences.
                </p>
                <p>
                  With a strong foundation in both frontend and backend development, I specialize 
                  in building scalable web applications using cutting-edge technologies like React, 
                  TypeScript, Node.js, and various cloud platforms.
                </p>
                <p>
                  I believe in writing clean, maintainable code and following best practices in 
                  software development. My goal is to create applications that not only function 
                  well but also provide exceptional user experiences.
                </p>
              </div>
            </div>

            {/* Interests */}
            <div>
              <h4 className="text-lg font-semibold mb-3 text-foreground">Areas of Interest</h4>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="px-3 py-1 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                  >
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <Card 
                  key={index}
                  className="group hover:shadow-hero hover:scale-105 transition-all duration-300 border-border/50 hover:border-primary/50"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className="p-3 rounded-full bg-gradient-hero group-hover:shadow-glow transition-all duration-300">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {highlight.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;