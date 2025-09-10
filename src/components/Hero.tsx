import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import profileAvatar from "@/assets/profile-avatar.jpg";

const Hero = () => {
  const handleResumeDownload = () => {
    // Create a direct download link to the Google Drive file
    const resumeUrl = "https://drive.google.com/uc?export=download&id=1HRsjILgap7LrRBl5P5DAnrsGf5jKhhyJ";
    window.open(resumeUrl, "_blank");
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-project-highlight/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-3/4 left-1/2 w-48 h-48 bg-tech-accent/20 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Profile Image */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <img 
              src={profileAvatar} 
              alt="Sudarshan Ganwani - Full Stack Developer"
              className="w-32 h-32 rounded-full border-4 border-primary shadow-hero animate-glow"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-hero opacity-30 animate-pulse"></div>
          </div>
        </div>

        {/* Main content */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground">
          <span className="block">Hi, I'm</span>
          <span className="gradient-text">Sudarshan Ganwani</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-4 text-primary-foreground/90 font-medium">
          Full Stack Developer
        </p>
        
        <p className="text-lg mb-8 text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
          Passionate about creating modern web applications with cutting-edge technologies. 
          Specializing in React, TypeScript, Node.js, and cloud solutions.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => scrollToSection("projects")}
            className="text-lg px-8 py-3"
          >
            View My Work
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            variant="contact" 
            size="lg"
            onClick={handleResumeDownload}
            className="text-lg px-8 py-3"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <Button 
            variant="ghost" 
            size="icon"
            className="text-primary-foreground hover:text-primary hover:bg-primary-foreground/10 h-12 w-12"
            asChild
          >
            <a href="https://github.com/Sudarshanganwani9" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
              <Github className="h-6 w-6" />
            </a>
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon"
            className="text-primary-foreground hover:text-primary hover:bg-primary-foreground/10 h-12 w-12"
            asChild
          >
            <a href="https://linkedin.com/in/sudarshanganwani" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
              <Linkedin className="h-6 w-6" />
            </a>
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon"
            className="text-primary-foreground hover:text-primary hover:bg-primary-foreground/10 h-12 w-12"
            asChild
          >
            <a href="mailto:sidkushwah9@gmail.com" aria-label="Send Email">
              <Mail className="h-6 w-6" />
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary-foreground/60" />
      </div>
    </section>
  );
};

export default Hero;