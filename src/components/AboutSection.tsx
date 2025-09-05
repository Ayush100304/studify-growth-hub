import { Button } from "@/components/ui/button";
import { Target, Eye, Heart, CheckCircle } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To provide world-class education that empowers students to achieve academic excellence and personal growth through innovative teaching methods."
    },
    {
      icon: Eye,
      title: "Our Vision", 
      description: "To be the leading educational institute that transforms lives by nurturing intellectual curiosity and building confident, capable future leaders."
    },
    {
      icon: Heart,
      title: "Our Values",
      description: "We believe in personalized attention, integrity in education, continuous innovation, and creating a supportive learning environment for every student."
    }
  ];

  const features = [
    "Expert Faculty with 10+ Years Experience",
    "Small Batch Sizes for Personal Attention",
    "Comprehensive Study Materials",
    "Regular Mock Tests & Assessments",
    "Doubt Clearing Sessions",
    "Parent-Teacher Interaction"
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            About{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Studify
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            For over 15 years, Studify has been at the forefront of educational excellence, 
            helping students achieve their academic dreams through personalized coaching and innovative teaching methods.
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="text-center p-8 rounded-2xl gradient-card shadow-soft hover:shadow-elevated transition-smooth"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            );
          })}
        </div>

        {/* Features & Approach */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Features List */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Why Choose Studify?
              </h3>
              <p className="text-muted-foreground mb-8">
                Our proven approach combines traditional teaching excellence with modern educational technology to deliver results that speak for themselves.
              </p>
            </div>
            
            <div className="grid gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-4 w-4 text-secondary-foreground" />
                  </div>
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg" className="mt-8">
              Learn More About Us
            </Button>
          </div>

          {/* Stats & Achievements */}
          <div className="space-y-6">
            <div className="bg-gradient-primary p-8 rounded-2xl text-white">
              <h4 className="text-lg font-semibold mb-4">Our Track Record</h4>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold">5000+</div>
                  <div className="text-white/80">Students Coached</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">98%</div>
                  <div className="text-white/80">Success Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-white/80">Course Programs</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-white/80">Years Experience</div>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-soft border">
              <h4 className="font-semibold mb-3">Educational Philosophy</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                "Every student has unique potential. Our role is to identify, nurture, and unlock that potential through personalized guidance, comprehensive support, and innovative teaching methodologies that make learning engaging and effective."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;