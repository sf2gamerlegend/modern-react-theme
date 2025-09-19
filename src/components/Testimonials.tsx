import { Card } from "@/components/ui/card";
import { Star, Quote, TrendingUp, Users, Heart } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Content Creator",
      company: "@sarahcreates",
      followers: "2.1M",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content: "ViralAI transformed my content strategy completely. My engagement rate went from 2% to 15% in just 3 months. The AI understands my audience better than I do!",
      metrics: {
        growth: "+650%",
        metric: "Engagement"
      },
      platform: "Instagram"
    },
    {
      name: "Marcus Johnson",
      role: "Marketing Director",
      company: "TechFlow Inc",
      followers: "500K",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "We increased our LinkedIn reach by 400% using ViralAI. The platform-specific optimization is incredible. Our B2B content now consistently hits 100K+ impressions.",
      metrics: {
        growth: "+400%",
        metric: "Reach"
      },
      platform: "LinkedIn"
    },
    {
      name: "Emma Rodriguez",
      role: "Influencer",
      company: "@emmalifestyle",
      followers: "3.5M",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "The viral score feature is a game-changer. I can predict which posts will perform before publishing. My average likes per post went from 10K to 150K!",
      metrics: {
        growth: "+1400%",
        metric: "Likes"
      },
      platform: "TikTok"
    },
    {
      name: "David Park",
      role: "Agency Owner",
      company: "Digital Growth Co",
      followers: "1.2M",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "Managing 50+ client accounts became effortless with ViralAI. We're delivering 10x better results with half the time investment. ROI speaks for itself.",
      metrics: {
        growth: "+1000%",
        metric: "ROI"
      },
      platform: "Multi-platform"
    },
    {
      name: "Lisa Wong",
      role: "YouTuber",
      company: "@lisatech",
      followers: "890K",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      content: "The trend analysis helped me identify viral topics before they exploded. My subscriber growth rate doubled, and my videos consistently trend in my niche.",
      metrics: {
        growth: "+200%",
        metric: "Subscribers"
      },
      platform: "YouTube"
    },
    {
      name: "Alex Thompson",
      role: "Startup Founder",
      company: "InnovateLab",
      followers: "250K",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      content: "As a non-marketer, ViralAI made me look like a social media expert. Our startup's visibility increased 500%, leading to successful Series A funding round.",
      metrics: {
        growth: "+500%",
        metric: "Visibility"
      },
      platform: "Twitter"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-mesh">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block font-mono text-sm text-muted-foreground mb-4 px-4 py-2 bg-background/50 backdrop-blur-sm rounded-full border border-success/20">
            &gt; SUCCESS_STORIES.load()
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="font-mono text-3xl md:text-4xl text-muted-foreground block mb-2">
              Real Creators,
            </span>
            <span className="bg-gradient-text bg-clip-text text-transparent">
              Real Results
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of creators who've transformed their social media presence with ViralAI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-8 bg-background/70 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:shadow-large transition-all duration-500 hover:-translate-y-1 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-primary font-mono">{testimonial.company}</p>
                    </div>
                  </div>
                  <Quote className="h-6 w-6 text-primary/30 group-hover:text-primary/50 transition-colors" />
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed text-sm">
                  "{testimonial.content}"
                </p>

                {/* Metrics */}
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-accent" />
                    <span className="text-muted-foreground">{testimonial.followers} followers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-success" />
                    <span className="font-bold text-success font-mono">{testimonial.metrics.growth}</span>
                    <span className="text-sm text-muted-foreground">{testimonial.metrics.metric}</span>
                  </div>
                </div>

                {/* Platform */}
                <div className="text-xs text-center py-2 px-3 bg-muted/50 rounded-full text-muted-foreground font-mono">
                  {testimonial.platform}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
          {[
            { icon: Heart, value: "50K+", label: "Happy Creators" },
            { icon: TrendingUp, value: "10M+", label: "Posts Generated" },
            { icon: Star, value: "94%", label: "Success Rate" },
            { icon: Users, value: "2.1B+", label: "Total Impressions" }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center space-y-3 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-xl">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="font-bold text-2xl font-mono">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;