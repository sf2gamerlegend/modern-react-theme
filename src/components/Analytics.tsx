import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, TrendingUp, Eye, Users, Clock, Target, Zap, ArrowRight } from "lucide-react";

const Analytics = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Real-Time Performance",
      description: "Track engagement, reach, and viral score in real-time across all platforms.",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: TrendingUp,
      title: "Viral Trend Analysis",
      description: "Identify trending topics and hashtags before they explode with AI-powered predictions.",
      color: "text-success",
      bgColor: "bg-success/10"
    },
    {
      icon: Eye,
      title: "Competitor Insights",
      description: "Analyze what's working for competitors and adapt their successful strategies.",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: Users,
      title: "Audience Analysis",
      description: "Deep dive into your audience demographics, behavior, and engagement patterns.",
      color: "text-warning",
      bgColor: "bg-warning/10"
    },
    {
      icon: Clock,
      title: "Optimal Timing",
      description: "AI determines the best times to post for maximum engagement on each platform.",
      color: "text-destructive",
      bgColor: "bg-destructive/10"
    },
    {
      icon: Target,
      title: "ROI Tracking",
      description: "Measure the business impact of your viral content with conversion analytics.",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    }
  ];

  const metrics = [
    { label: "Avg. Engagement Increase", value: "+347%", trend: "+12%" },
    { label: "Viral Posts Created", value: "10.2M", trend: "+89%" },
    { label: "Creator Success Rate", value: "94.2%", trend: "+5%" },
    { label: "Platforms Supported", value: "8+", trend: "New" }
  ];

  return (
    <section id="analytics" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block font-mono text-sm text-muted-foreground mb-4 px-4 py-2 bg-muted/50 rounded-full">
            &gt; ANALYTICS.dashboard()
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="font-mono text-3xl md:text-4xl text-muted-foreground block mb-2">
              Data-Driven
            </span>
            <span className="bg-gradient-text bg-clip-text text-transparent">
              Viral Success
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Make informed decisions with comprehensive analytics that reveal what makes content go viral.
          </p>
        </div>

        {/* Metrics Dashboard Preview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
          {metrics.map((metric, index) => (
            <Card 
              key={index}
              className="p-6 bg-gradient-card border border-border/50 hover:shadow-medium transition-all duration-300 text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-2">
                <div className="font-bold text-2xl font-mono text-primary">{metric.value}</div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
                <div className="text-xs text-success font-mono">{metric.trend}</div>
              </div>
            </Card>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="p-8 bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:shadow-large transition-all duration-500 hover:-translate-y-1 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="space-y-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 ${feature.bgColor} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-bold font-mono">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Interactive Chart Preview */}
        <Card className="p-8 mb-16 bg-gradient-card border border-border/50 hover:shadow-large transition-all duration-300 animate-fade-in-up">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold font-mono mb-2">Viral Score Analytics</h3>
              <p className="text-muted-foreground">Track your content's viral potential over time</p>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <span className="text-muted-foreground">Viral Score</span>
              <div className="w-3 h-3 rounded-full bg-success ml-4"></div>
              <span className="text-muted-foreground">Engagement</span>
            </div>
          </div>
          
          {/* Simulated Chart */}
          <div className="h-64 bg-gradient-mesh rounded-lg border border-border/30 flex items-center justify-center">
            <div className="text-center space-y-4">
              <BarChart3 className="h-16 w-16 text-primary/50 mx-auto animate-pulse" />
              <p className="text-muted-foreground font-mono">Interactive analytics dashboard</p>
              <Button variant="outline" size="sm">
                <Zap className="h-4 w-4 mr-2" />
                View Live Demo
              </Button>
            </div>
          </div>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="bg-gradient-primary hover:bg-gradient-cta shadow-glow group">
            Start Tracking Your Success
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Analytics;