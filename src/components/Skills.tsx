import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      icon: "🎨",
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Vite", level: 80 }
      ]
    },
    {
      title: "Backend Technologies",
      icon: "⚙️",
      skills: [
        { name: "Java", level: 85 },
        { name: "Advanced Java", level: 80 },
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "RESTful APIs", level: 85 },
        { name: "Authentication", level: 80 },
        { name: "Server Architecture", level: 75 }
      ]
    },
    {
      title: "Database & Cloud",
      icon: "💾",
      skills: [
        { name: "PostgreSQL", level: 80 },
        { name: "Supabase", level: 85 },
        { name: "Database Design", level: 80 },
        { name: "Cloud Services", level: 75 },
        { name: "SQL", level: 85 }
      ]
    },
    {
      title: "Tools & Frameworks",
      icon: "🛠️",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "npm/yarn", level: 85 },
        { name: "ESLint/Prettier", level: 80 },
        { name: "Responsive Design", level: 90 }
      ]
    }
  ];

  const technologies = [
    "React", "TypeScript", "JavaScript", "Java", "Advanced Java", "Node.js", "Express.js", 
    "PostgreSQL", "Supabase", "Tailwind CSS", "HTML5", "CSS3",
    "Git", "RESTful APIs", "Responsive Design", "Vite", "ESLint"
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and the technologies I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="group hover:shadow-hero hover:scale-105 transition-all duration-300 border-border/50 hover:border-primary/50"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <span className="text-2xl">{category.icon}</span>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-muted group-hover:bg-primary/10 transition-colors"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Tags */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8 text-foreground">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <Badge 
                key={index}
                variant="outline"
                className="px-4 py-2 text-sm font-medium border-primary/30 text-primary hover:bg-gradient-hero hover:text-primary-foreground hover:border-transparent transition-all duration-300 cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;