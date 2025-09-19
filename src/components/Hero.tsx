import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, TrendingUp, Play, Sparkles, Star, Code2, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import heroDashboard from "@/assets/hero-dashboard-modern.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Motion Background Effects */}
      <div className="absolute inset-0 bg-gradient-motion opacity-10 animate-motion-bg"></div>
      <div className="absolute inset-0 bg-gradient-mesh"></div>
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-orb-1 rounded-full animate-orb-float opacity-60"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-orb-2 rounded-full animate-orb-float opacity-40" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-32 left-32 w-20 h-20 bg-gradient-orb-3 rounded-full animate-orb-float opacity-50" style={{ animationDelay: '4s' }}></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-10 animate-float">
        <div className="bg-primary/10 p-3 rounded-2xl backdrop-blur-sm border border-primary/20">
          <TrendingUp className="h-6 w-6 text-primary" />
        </div>
      </div>
      <div className="absolute top-60 left-16 animate-float" style={{ animationDelay: '1s' }}>
        <div className="bg-accent/10 p-3 rounded-2xl backdrop-blur-sm border border-accent/20">
          <Code2 className="h-6 w-6 text-accent" />
        </div>
      </div>
      <div className="absolute bottom-40 right-20 animate-float" style={{ animationDelay: '3s' }}>
        <div className="bg-success/10 p-3 rounded-2xl backdrop-blur-sm border border-success/20">
          <Rocket className="h-6 w-6 text-success" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          
          {/* Left Content */}
          <div className="animate-slide-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-background/60 backdrop-blur-sm border border-primary/30 text-primary px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-glow hover:shadow-accent transition-all duration-300 group cursor-default">
              <Zap className="h-4 w-4 group-hover:scale-110 transition-transform" />
              <span className="font-mono">Try our new Title, description and tags generator</span>
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            </div>
            
            {/* Main headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="font-mono text-2xl md:text-4xl lg:text-5xl block mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-x">
                &gt; Create & Scale
              </span>
              <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                Viral Content
              </span>
              <br />
              <span className="font-mono text-2xl md:text-4xl lg:text-5xl bg-gradient-to-r from-accent via-success to-primary bg-clip-text text-transparent">
                in &lt;5s with AI
              </span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              Transform your social media presence with AI-generated content that's 
              <span className="text-primary font-semibold"> scientifically optimized</span> to go viral. 
              Get engagement rates that actually matter.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                variant="viral" 
                size="lg" 
                className="text-lg px-8 py-6 h-auto shadow-glow hover:shadow-accent group transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 hover:shadow-primary/50 animate-pulse" 
                asChild
              >
                <Link to="/generate">
                  <Sparkles className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  Start Creating Now
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 h-auto border-2 hover:bg-primary/5 backdrop-blur-sm group bg-background/60"
              >
                <Play className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>
            
            {/* Social proof stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 text-2xl font-bold text-primary mb-1">
                  <TrendingUp className="h-5 w-5" />
                  <span className="font-mono">10M+</span>
                </div>
                <span className="text-sm text-muted-foreground">Posts Generated</span>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 text-2xl font-bold text-success mb-1">
                  <Star className="h-5 w-5" />
                  <span className="font-mono">94%</span>
                </div>
                <span className="text-sm text-muted-foreground">Higher Engagement</span>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 text-2xl font-bold text-accent mb-1">
                  <Sparkles className="h-5 w-5" />
                  <span className="font-mono">50K+</span>
                </div>
                <span className="text-sm text-muted-foreground">Happy Creators</span>
              </div>
            </div>
          </div>

          {/* Right Content - Dashboard Image */}
          <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-2xl rounded-3xl"></div>
              
              {/* Main dashboard image */}
              <div className="relative bg-background/80 backdrop-blur-sm rounded-2xl p-4 border border-primary/20 shadow-2xl hover:shadow-glow transition-all duration-500 group">
                <img 
                  src={heroDashboard} 
                  alt="GenerateTitle.io Dashboard Preview" 
                  className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-xl shadow-large group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Floating elements over image */}
                <div className="absolute -top-4 -right-4 bg-success text-success-foreground px-3 py-1 rounded-full text-sm font-medium shadow-glow animate-pulse">
                  Live Preview
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium shadow-glow">
                  AI Powered
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;