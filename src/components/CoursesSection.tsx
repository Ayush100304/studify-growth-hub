import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, BookOpen, Calculator, Microscope, Globe, PenTool, Brain } from "lucide-react";

const CoursesSection = () => {
  const courses = [
    {
      id: 1,
      title: "JEE Main & Advanced",
      description: "Comprehensive preparation for Engineering entrance exams with Physics, Chemistry, and Mathematics.",
      icon: Calculator,
      duration: "24 months",
      students: "1200+",
      rating: 4.9,
      price: "₹85,000",
      features: ["Live Classes", "Mock Tests", "Doubt Sessions", "Study Materials"],
      popular: true
    },
    {
      id: 2,
      title: "NEET Preparation",
      description: "Complete Medical entrance exam preparation covering Physics, Chemistry, and Biology.",
      icon: Microscope,
      duration: "18 months",
      students: "800+",
      rating: 4.8,
      price: "₹75,000",
      features: ["Expert Faculty", "Practice Tests", "Performance Analysis", "Digital Library"],
      popular: false
    },
    {
      id: 3,
      title: "Class 10 CBSE",
      description: "Foundation building program for Class 10 students covering all core subjects.",
      icon: BookOpen,
      duration: "12 months",
      students: "1500+",
      rating: 4.9,
      price: "₹45,000",
      features: ["Regular Tests", "Board Exam Focus", "Concept Building", "Project Guidance"],
      popular: false
    },
    {
      id: 4,
      title: "Class 12 CBSE",
      description: "Advanced program for Class 12 students with board exam and competitive exam focus.",
      icon: PenTool,
      duration: "12 months",
      students: "1300+",
      rating: 4.8,
      price: "₹55,000",
      features: ["Board Preparation", "Competitive Focus", "Career Guidance", "University Prep"],
      popular: false
    },
    {
      id: 5,
      title: "Foundation Course",
      description: "Early preparation program for Classes 8-9 students to build strong fundamentals.",
      icon: Brain,
      duration: "10 months",
      students: "900+",
      rating: 4.7,
      price: "₹35,000",
      features: ["Concept Clarity", "Skill Development", "Interactive Learning", "Progress Tracking"],
      popular: false
    },
    {
      id: 6,
      title: "English & Communication",
      description: "Comprehensive English language and communication skills development program.",
      icon: Globe,
      duration: "6 months",
      students: "600+",
      rating: 4.8,
      price: "₹25,000",
      features: ["Speaking Practice", "Grammar Focus", "Personality Development", "Interview Prep"],
      popular: false
    }
  ];

  return (
    <section id="courses" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Our{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Course Programs
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive courses designed to meet every student's academic needs, from foundation building to competitive exam preparation.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => {
            const Icon = course.icon;
            return (
              <Card
                key={course.id}
                className={`relative overflow-hidden transition-smooth hover:shadow-elevated group ${
                  course.popular ? "ring-2 ring-primary" : ""
                }`}
              >
                {course.popular && (
                  <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground">
                    Most Popular
                  </Badge>
                )}

                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {course.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Course Details */}
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      {course.students}
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      {course.rating}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    {course.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Price & CTA */}
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-2xl font-bold text-primary">{course.price}</div>
                        <div className="text-xs text-muted-foreground">Complete Program</div>
                      </div>
                      <Button variant={course.popular ? "hero" : "default"} size="sm">
                        Enroll Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Can't find the right course? We offer customized programs to meet your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Request Custom Course
            </Button>
            <Button variant="outline" size="lg">
              Schedule Counseling
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;