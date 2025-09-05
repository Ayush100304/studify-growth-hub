import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      course: "JEE Main & Advanced",
      image: "PS",
      rating: 5,
      text: "Studify transformed my understanding of Physics and Mathematics. The faculty's teaching methods are exceptional, and their doubt-clearing sessions helped me crack JEE Advanced with AIR 245!"
    },
    {
      id: 2,
      name: "Arjun Patel",
      course: "NEET Preparation",
      image: "AP",
      rating: 5,
      text: "The NEET program at Studify is comprehensive and well-structured. Regular mock tests and performance analysis helped me secure admission in my dream medical college. Thank you, Studify!"
    },
    {
      id: 3,
      name: "Sneha Reddy",
      course: "Class 12 CBSE",
      image: "SR",
      rating: 5,
      text: "Studify's board exam preparation program is outstanding. I scored 96% in my Class 12 boards and also cleared multiple entrance exams. The faculty is supportive and motivating."
    },
    {
      id: 4,
      name: "Rohit Kumar",
      course: "Foundation Course",
      image: "RK",
      rating: 5,
      text: "Starting early with Studify's foundation course was the best decision. It built my fundamentals strong, and now I'm confident about tackling any competitive exam in the future."
    },
    {
      id: 5,
      name: "Ananya Singh",
      course: "English & Communication",
      image: "AS",
      rating: 5,
      text: "The communication skills program boosted my confidence tremendously. I can now speak fluently and cleared all my college interviews with ease. Highly recommended!"
    },
    {
      id: 6,
      name: "Vikram Joshi",
      course: "Class 10 CBSE",
      image: "VJ",
      rating: 5,
      text: "Studify's Class 10 program helped me score 98% in boards. The teachers explain concepts so clearly, and the study materials are excellent. Great learning experience!"
    }
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            What Our{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Students Say
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Real stories from students who achieved their academic goals with Studify's guidance and support.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="relative overflow-hidden transition-smooth hover:shadow-elevated group">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Quote className="h-5 w-5 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Student Info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.course}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Stats */}
        <div className="mt-20 bg-gradient-primary rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Join Our Success Story
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">5000+</div>
              <div className="text-white/80">Happy Students</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
              <div className="text-white/80">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div className="text-white/80">Top Ranks</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">15+</div>
              <div className="text-white/80">Years Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;