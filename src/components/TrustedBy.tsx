import { Card } from "@/components/ui/card";
import { Star, TrendingUp, Users, Award } from "lucide-react";

const TrustedBy = () => {
  const companies = [
    {
      name: "TechCorp",
      logo: "T",
      industry: "Technology",
      growth: "+450%",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "StartupHub",
      logo: "S", 
      industry: "Startup",
      growth: "+320%",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "CreativeAgency",
      logo: "C",
      industry: "Marketing",
      growth: "+280%",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "GrowthLabs",
      logo: "G",
      industry: "Consulting", 
      growth: "+390%",
      color: "from-orange-500 to-red-500"
    },
    {
      name: "MediaFlow",
      logo: "M",
      industry: "Media",
      growth: "+510%",
      color: "from-indigo-500 to-purple-500"
    },
    {
      name: "BrandBoost",
      logo: "B",
      industry: "Branding",
      growth: "+340%",
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const achievements = [
    {
      icon: Users,
      title: "Fortune 500 Companies",
      value: "150+",
      description: "Trust ViralAI for their social media strategy"
    },
    {
      icon: Award,
      title: "Industry Awards",
      value: "25+",
      description: "Recognition for innovation and results"
    },
    {
      icon: TrendingUp,
      title: "Average Growth",
      value: "400%",
      description: "Increase in engagement for enterprise clients"
    },
    {
      icon: Star,
      title: "Client Satisfaction",
      value: "98%",
      description: "Would recommend ViralAI to others"
    }
  ];

  return (
    <section id="trusted-by" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block font-mono text-sm text-muted-foreground mb-4 px-4 py-2 bg-muted/50 rounded-full">
            &gt; TRUSTED_BY.enterprises()
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="font-mono text-3xl md:text-4xl text-muted-foreground block mb-2">
              Trusted by
            </span>
            <span className="bg-gradient-text bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From startups to Fortune 500 companies, businesses worldwide trust ViralAI to scale their social presence.
          </p>
        </div>

        {/* Company Logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {companies.map((company, index) => (
            <Card 
              key={index}
              className="p-6 bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:shadow-medium transition-all duration-300 hover:scale-105 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center space-y-3">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${company.color} flex items-center justify-center mx-auto`}>
                  <span className="text-white font-bold text-xl">{company.logo}</span>
                </div>
                
                <div>
                  <h4 className="font-semibold font-mono text-sm">{company.name}</h4>
                  <p className="text-xs text-muted-foreground">{company.industry}</p>
                </div>
                
                <div className="inline-flex items-center gap-1 text-xs bg-success/10 text-success px-2 py-1 rounded-full font-mono">
                  <TrendingUp className="h-3 w-3" />
                  {company.growth}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card 
                key={index}
                className="p-8 bg-gradient-card border border-border/50 hover:shadow-large transition-all duration-500 hover:-translate-y-1 text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="space-y-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  
                  <div>
                    <div className="font-bold text-3xl font-mono bg-gradient-text bg-clip-text text-transparent">
                      {achievement.value}
                    </div>
                    <h4 className="font-semibold font-mono mt-2">
                      {achievement.title}
                    </h4>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Enterprise Quote */}
        <Card className="p-8 bg-gradient-mesh border border-border/50 animate-fade-in-up">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-warning text-warning" />
              ))}
            </div>
            
            <blockquote className="text-2xl italic text-muted-foreground leading-relaxed">
              "ViralAI transformed our social media ROI by 400%. The enterprise features and dedicated support made the difference. Our best marketing investment to date."
            </blockquote>
            
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                <span className="text-white font-bold">J</span>
              </div>
              <div className="text-left">
                <div className="font-semibold">Jennifer Martinez</div>
                <div className="text-sm text-muted-foreground">CMO, TechCorp Global</div>
                <div className="text-xs text-primary font-mono">Fortune 100 Company</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default TrustedBy;