import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Database, Users, Heart, DollarSign } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Electronic Health Record System",
      description: "A comprehensive healthcare management system with secure authentication, patient/doctor directories, appointment scheduling, and medical records management.",
      icon: Heart,
      technologies: ["React", "TypeScript", "Supabase", "Tailwind CSS", "PostgreSQL"],
      features: [
        "Role-based authentication (patient, doctor, admin)",
        "CRUD operations for patients, doctors, appointments",
        "Medical records management",
        "Appointment status tracking",
        "Secure data handling with Supabase"
      ],
      github: "https://github.com/Sudarshanganwani9/Electronic-Health-Record-System",
      liveDemo: null,
      color: "text-red-500"
    },
    {
      title: "Finance Management System",
      description: "Modern finance management web application built for tracking budgets, transactions, and financial analytics with interactive dashboards.",
      icon: DollarSign,
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase"],
      features: [
        "User authentication with Supabase Auth",
        "Dashboard with income/expense overview",
        "Budget creation and tracking",
        "Transaction management and filtering",
        "Analytics with charts and insights",
        "Responsive UI with ShadCN components"
      ],
      github: "https://github.com/Sudarshanganwani9/Finance-Management-System-",
      liveDemo: null,
      color: "text-green-500"
    },
    {
      title: "College Event Management System",
      description: "A comprehensive platform for managing college events, registrations, and student activities with real-time updates and notifications.",
      icon: Users,
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Event Management"],
      features: [
        "Event creation and management",
        "Student registration system",
        "Real-time notifications",
        "Event calendar and scheduling",
        "Admin dashboard for organizers",
        "Responsive design for mobile access"
      ],
      github: "https://github.com/Sudarshanganwani9/College-Event-management-system",
      liveDemo: null,
      color: "text-blue-500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore some of my recent work showcasing modern web development practices and innovative solutions
          </p>
        </div>

        <div className="grid gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-hero hover:scale-105 transition-all duration-300 border-border/50 hover:border-primary/50 overflow-hidden"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-gradient-hero group-hover:shadow-glow transition-all duration-300`}>
                        <Icon className={`h-6 w-6 text-primary-foreground`} />
                      </div>
                      <div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          variant="secondary"
                          className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <Button 
                      variant="project" 
                      asChild
                      className="flex-1"
                    >
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                    
                    {project.liveDemo && (
                      <Button 
                        variant="outline" 
                        asChild
                        className="flex-1 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        <a 
                          href={project.liveDemo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* GitHub Profile Link */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            asChild
            className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <a 
              href="https://github.com/Sudarshanganwani9" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;