import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, BookOpen, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-students.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>

      <div className="container mx-auto px-4 lg:px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Unlock Your{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Academic Potential
                </span>{" "}
                with Studify
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                Excellence in education through personalized coaching, expert faculty, and proven methodologies. Join thousands of successful students who achieved their dreams with us.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-2 mx-auto">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary">5000+</div>
                <div className="text-sm text-muted-foreground">Students</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-lg mb-2 mx-auto">
                  <Award className="h-6 w-6 text-secondary" />
                </div>
                <div className="text-2xl font-bold text-secondary">98%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-2 mx-auto">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Courses</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-lg mb-2 mx-auto">
                  <TrendingUp className="h-6 w-6 text-secondary" />
                </div>
                <div className="text-2xl font-bold text-secondary">15+</div>
                <div className="text-sm text-muted-foreground">Years</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                Start Your Journey
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl">
                Explore Courses
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-in-left">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={heroImage}
                alt="Students learning at Studify"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-primary/20"></div>
            </div>
            
            {/* Floating Achievement Card */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-4 shadow-elevated border animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                  <Award className="h-5 w-5 text-secondary-foreground" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Top Rated</div>
                  <div className="text-xs text-muted-foreground">Coaching Institute</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;