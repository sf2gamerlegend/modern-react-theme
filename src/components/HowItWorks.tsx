import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, PenTool, Sparkles, Target, BarChart3 } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      title: "Choose Your Platform",
      description: "Select from Twitter, LinkedIn, Instagram, TikTok, or YouTube. Each platform has tailored optimization.",
      icon: Target,
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/20"
    },
    {
      step: "02", 
      title: "Define Your Style",
      description: "Pick your tone: Funny, Motivational, Educational, or Storytelling. AI adapts to your brand voice.",
      icon: PenTool,
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent/20"
    },
    {
      step: "03",
      title: "AI Magic Happens",
      description: "Our advanced AI analyzes viral patterns and generates 5 optimized posts tailored to your audience.",
      icon: Sparkles,
      color: "text-success",
      bgColor: "bg-success/10", 
      borderColor: "border-success/20"
    },
    {
      step: "04",
      title: "Track & Optimize",
      description: "Monitor performance with real-time analytics and continuously improve your viral score.",
      icon: BarChart3,
      color: "text-warning",
      bgColor: "bg-warning/10",
      borderColor: "border-warning/20"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block font-mono text-sm text-muted-foreground mb-4 px-4 py-2 bg-muted/50 rounded-full">
            &gt; HOW_IT_WORKS.process()
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="font-mono text-3xl md:text-4xl text-muted-foreground block mb-2">
              From Idea to 
            </span>
            <span className="bg-gradient-text bg-clip-text text-transparent">
              Viral in 4 Steps
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our AI-powered system makes going viral simple, fast, and scientifically-backed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card 
                key={index}
                className={`p-8 bg-background/50 backdrop-blur-sm border-2 ${step.borderColor} hover:shadow-large transition-all duration-500 hover:-translate-y-2 group animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-center space-y-6">
                  <div className="relative">
                    <div className={`inline-flex items-center justify-center w-16 h-16 ${step.bgColor} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`h-8 w-8 ${step.color}`} />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-gradient-primary text-white text-xs font-mono px-2 py-1 rounded-full">
                      {step.step}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold font-mono">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Button size="lg" className="bg-gradient-primary hover:bg-gradient-cta shadow-glow group">
            Try It Free Now
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;