import { Card } from "@/components/ui/card";
import { Bot, TrendingUp, Target, Zap, Brain, BarChart3 } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Bot,
      title: "Generate Viral Posts Instantly",
      description: "AI analyzes millions of viral posts to create content that resonates with your audience and drives engagement.",
      gradient: "from-primary to-accent"
    },
    {
      icon: Brain,
      title: "AI-Powered Trend Hooks",
      description: "Smart algorithm identifies trending topics and viral patterns to craft posts that catch the wave of popularity.",
      gradient: "from-accent to-primary-glow"
    },
    {
      icon: BarChart3,
      title: "Viral Score Predictor",
      description: "Every post gets a viral score (0-100) based on proven engagement factors, so you know what will perform.",
      gradient: "from-primary-glow to-success"
    }
  ];

  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary/50 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="h-4 w-4" />
            <span>Powered by Advanced AI</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything You Need to
            <span className="bg-gradient-text bg-clip-text text-transparent"> Go Viral</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our AI doesn't just generate content—it creates viral sensations backed by data science.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 bg-gradient-card border-0 shadow-medium hover:shadow-large transition-all duration-300 hover:-translate-y-2 group">
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.gradient} mb-6 shadow-glow group-hover:shadow-accent transition-all duration-300`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Secondary features */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-16">
          <div className="flex items-start gap-4">
            <div className="bg-secondary p-2 rounded-lg">
              <Target className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold mb-2">Multi-Platform Support</h4>
              <p className="text-sm text-muted-foreground">
                Optimized content for Twitter, LinkedIn, Instagram, and more.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="bg-secondary p-2 rounded-lg">
              <TrendingUp className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold mb-2">Real-Time Trends</h4>
              <p className="text-sm text-muted-foreground">
                Stay ahead with content that rides the latest viral waves.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;