import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, MessageCircle, Award, Calendar, Rocket, Star, ArrowRight, ExternalLink } from "lucide-react";

const Community = () => {
  const events = [
    {
      title: "Viral Content Masterclass",
      date: "Dec 15, 2024",
      type: "Webinar",
      attendees: "2.1K",
      status: "Upcoming"
    },
    {
      title: "Creator Success Stories",
      date: "Dec 22, 2024", 
      type: "Panel",
      attendees: "850",
      status: "Upcoming"
    },
    {
      title: "Platform Algorithm Updates",
      date: "Jan 5, 2025",
      type: "Workshop",
      attendees: "1.5K",
      status: "Register"
    }
  ];

  const features = [
    {
      icon: Users,
      title: "50K+ Active Members",
      description: "Connect with creators, marketers, and influencers from around the world.",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: MessageCircle,
      title: "24/7 Support Chat",
      description: "Get instant help from our community and expert moderators.",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: Award,
      title: "Exclusive Rewards",
      description: "Earn badges, unlock premium features, and get recognition for your success.",
      color: "text-success",
      bgColor: "bg-success/10"
    },
    {
      icon: Rocket,
      title: "Beta Access",
      description: "Be the first to try new features and shape the future of ViralAI.",
      color: "text-warning",
      bgColor: "bg-warning/10"
    }
  ];

  const highlights = [
    { metric: "50K+", label: "Community Members" },
    { metric: "10K+", label: "Monthly Posts Shared" },
    { metric: "95%", label: "Member Satisfaction" },
    { metric: "24/7", label: "Active Support" }
  ];

  return (
    <section id="community" className="py-24 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block font-mono text-sm text-muted-foreground mb-4 px-4 py-2 bg-background/50 backdrop-blur-sm rounded-full border border-primary/20">
            &gt; COMMUNITY.connect()
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="font-mono text-3xl md:text-4xl text-muted-foreground block mb-2">
              Join the
            </span>
            <span className="bg-gradient-text bg-clip-text text-transparent">
              Creator Community
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with like-minded creators, share success stories, and learn from the best in the industry.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
          {highlights.map((stat, index) => (
            <Card 
              key={index}
              className="p-6 bg-background/70 backdrop-blur-sm border border-border/50 hover:border-primary/30 text-center transition-all duration-300 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-2">
                <div className="font-bold text-3xl font-mono bg-gradient-text bg-clip-text text-transparent">
                  {stat.metric}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </Card>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="p-6 bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:shadow-large transition-all duration-500 hover:-translate-y-1 group text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="space-y-4">
                  <div className={`inline-flex items-center justify-center w-14 h-14 ${feature.bgColor} rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-7 w-7 ${feature.color}`} />
                  </div>
                  
                  <h3 className="font-bold font-mono">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold font-mono text-center mb-8">
            Upcoming Community Events
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {events.map((event, index) => (
              <Card 
                key={index}
                className="p-6 bg-background/70 backdrop-blur-sm border border-border/50 hover:border-accent/30 hover:shadow-medium transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-mono rounded-full">
                      {event.type}
                    </span>
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                  </div>
                  
                  <h4 className="font-semibold">{event.title}</h4>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{event.date}</span>
                    <div className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      <span>{event.attendees}</span>
                    </div>
                  </div>
                  
                  <Button variant="outline" size="sm" className="w-full">
                    {event.status}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Community Showcase */}
        <Card className="p-8 mb-16 bg-gradient-mesh border border-border/50 animate-fade-in-up">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-2">
              <Star className="h-6 w-6 text-warning fill-warning" />
              <Star className="h-6 w-6 text-warning fill-warning" />
              <Star className="h-6 w-6 text-warning fill-warning" />
              <Star className="h-6 w-6 text-warning fill-warning" />
              <Star className="h-6 w-6 text-warning fill-warning" />
            </div>
            
            <blockquote className="text-xl italic text-muted-foreground max-w-2xl mx-auto">
              "The ViralAI community is incredible. I've learned more in 3 months here than in years of trying to figure out social media on my own."
            </blockquote>
            
            <div className="flex items-center justify-center gap-3">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                alt="Community member"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="text-left">
                <div className="font-semibold">Alex Rivera</div>
                <div className="text-sm text-muted-foreground">Content Creator • 1.2M followers</div>
              </div>
            </div>
          </div>
        </Card>

        {/* CTAs */}
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <Button size="lg" className="bg-gradient-primary hover:bg-gradient-cta shadow-glow group">
            Join Community
            <Users className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
          </Button>
          
          <Button variant="outline" size="lg" className="hover:bg-muted/50 group">
            Browse Discussions
            <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Community;