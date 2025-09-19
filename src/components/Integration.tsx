import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, ArrowRight, CheckCircle, Plug, Globe, Smartphone } from "lucide-react";

const Integration = () => {
  const platforms = [
    {
      name: "Twitter/X",
      logo: "https://abs.twimg.com/responsive-web/client-web/icon-ios.b1fc727a.png",
      users: "450M+",
      features: ["Thread optimization", "Hashtag analysis", "Viral timing"],
      color: "from-blue-400 to-blue-600"
    },
    {
      name: "Instagram", 
      logo: "https://static.cdninstagram.com/rsrc.php/v3/yv/r/6JqvJ6H_bFT.png",
      users: "2B+",
      features: ["Story templates", "Reel optimization", "Hashtag research"],
      color: "from-pink-400 to-purple-600"
    },
    {
      name: "LinkedIn",
      logo: "https://static.licdn.com/aero-v1/sc/h/al2o9zrvru7aqj8e1x2rzsrca",
      users: "900M+", 
      features: ["B2B targeting", "Professional tone", "Industry insights"],
      color: "from-blue-600 to-blue-800"
    },
    {
      name: "TikTok",
      logo: "https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/webapp/main/webapp-desktop/8152caf0c8e8bc67ae0d.png",
      users: "1B+",
      features: ["Trend analysis", "Music suggestions", "Effect optimization"],
      color: "from-black to-gray-800"
    },
    {
      name: "YouTube",
      logo: "https://www.youtube.com/s/desktop/f506bd45/img/favicon_32x32.png",
      users: "2.7B+",
      features: ["Title optimization", "Thumbnail advice", "SEO keywords"],
      color: "from-red-500 to-red-700"
    },
    {
      name: "Facebook",
      logo: "https://static.xx.fbcdn.net/rsrc.php/yV/r/hzMapiNYYpW.ico",
      users: "3B+",
      features: ["Audience insights", "Ad integration", "Group optimization"],
      color: "from-blue-500 to-blue-700"
    }
  ];

  const tools = [
    {
      name: "Zapier",
      description: "Connect ViralAI with 5000+ apps",
      icon: Zap,
      category: "Automation"
    },
    {
      name: "Hootsuite",
      description: "Schedule and manage posts",
      icon: Globe,
      category: "Management"
    },
    {
      name: "Buffer",
      description: "Social media scheduling",
      icon: Smartphone,
      category: "Scheduling"
    },
    {
      name: "Canva",
      description: "Visual content creation", 
      icon: Plug,
      category: "Design"
    }
  ];

  return (
    <section id="integrations" className="py-24 bg-gradient-aurora">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block font-mono text-sm text-muted-foreground mb-4 px-4 py-2 bg-background/50 backdrop-blur-sm rounded-full border border-accent/20">
            &gt; INTEGRATIONS.connect()
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="font-mono text-3xl md:text-4xl text-muted-foreground block mb-2">
              Works with
            </span>
            <span className="bg-gradient-text bg-clip-text text-transparent">
              Every Platform
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Seamlessly integrate with all major social media platforms and your favorite tools.
          </p>
        </div>

        {/* Platform Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {platforms.map((platform, index) => (
            <Card 
              key={index}
              className="p-8 bg-background/70 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:shadow-large transition-all duration-500 hover:-translate-y-1 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${platform.color} flex items-center justify-center p-2`}>
                    <img 
                      src={platform.logo} 
                      alt={platform.name}
                      className="w-8 h-8 object-contain filter brightness-0 invert"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{platform.name}</h3>
                    <p className="text-sm text-muted-foreground font-mono">{platform.users} users</p>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {platform.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-success" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4 border-t border-border/50">
                  <div className="inline-flex items-center gap-2 text-xs text-primary font-mono bg-primary/10 px-3 py-1 rounded-full">
                    <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                    Connected
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Popular Tools */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold font-mono text-center mb-8">
            Popular Tool Integrations
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 bg-background/50 backdrop-blur-sm border border-border/50 hover:border-accent/30 hover:shadow-medium transition-all duration-300 text-center group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="space-y-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    
                    <div>
                      <h4 className="font-semibold font-mono">{tool.name}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{tool.category}</p>
                    </div>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* API Section */}
        <Card className="p-8 bg-gradient-card border border-border/50 animate-fade-in-up">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl">
              <Plug className="h-8 w-8 text-white" />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold font-mono mb-2">Developer API</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Build custom integrations with our powerful REST API. Full documentation, 
                SDKs for popular languages, and webhook support included.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="hover:bg-muted/50">
                View Documentation
              </Button>
              <Button className="bg-gradient-primary hover:bg-gradient-cta shadow-glow group">
                Get API Key
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Integration;