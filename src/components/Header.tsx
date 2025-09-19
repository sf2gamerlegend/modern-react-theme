import { Button } from "@/components/ui/button";
import { Sparkles, Menu, X, Zap, TrendingUp, Target, Users, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Features", href: "#features", icon: Zap },
    { name: "How it Works", href: "#how-it-works", icon: Target },
    { name: "Success Stories", href: "#testimonials", icon: TrendingUp },
    { name: "Analytics", href: "#analytics", icon: BarChart3 },
    { name: "Community", href: "#community", icon: Users },
    { name: "Pricing", href: "#pricing", icon: Sparkles }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-soft">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative bg-gradient-primary p-2.5 rounded-xl shadow-glow group-hover:shadow-accent transition-all duration-300">
              <Sparkles className="h-7 w-7 text-white animate-pulse-glow" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold bg-gradient-text bg-clip-text text-transparent font-mono">
              GenerateTitle.io
            </span>
            <span className="text-xs text-muted-foreground tracking-wider uppercase">
              AI Content Studio
            </span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <a 
                key={index}
                href={item.href} 
                className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-all duration-200 group"
              >
                <Icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm" className="hover:bg-muted/50">
            Login
          </Button>
          <Button variant="hero" size="sm" className="shadow-glow hover:shadow-accent transition-all duration-300" asChild>
            <Link to="/dashboard">Start Free Trial</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 hover:bg-muted/50 rounded-lg transition-colors"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background/98 backdrop-blur-xl border-b border-border/50 animate-fade-in-up">
          <div className="container mx-auto px-4 py-6 space-y-4">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <a 
                  key={index}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-muted-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-all duration-200"
                >
                  <Icon className="h-5 w-5" />
                  {item.name}
                </a>
              );
            })}
            <div className="flex flex-col gap-3 pt-4 border-t border-border/50">
              <Button variant="ghost" className="justify-center">
                Login
              </Button>
              <Button variant="hero" className="justify-center shadow-glow" asChild>
                <Link to="/dashboard">Start Free Trial</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;