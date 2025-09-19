import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  PenTool, 
  CreditCard, 
  Settings, 
  Menu,
  X,
  Sparkles,
  Home
} from "lucide-react";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: Home },
    { name: "Generate", href: "/generate", icon: PenTool },
    { name: "Analytics", href: "/analytics", icon: BarChart3 },
    { name: "Pricing", href: "/pricing", icon: CreditCard },
    { name: "Settings", href: "/settings", icon: Settings },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      {/* Mobile overlay */}
      {!isCollapsed && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsCollapsed(true)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full bg-background border-r shadow-large z-50 transition-all duration-300 ${
        isCollapsed ? "-translate-x-full lg:translate-x-0 lg:w-16" : "w-64"
      }`}>
        
        {/* Header */}
        <div className="p-4 border-b flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex items-center gap-2">
              <div className="bg-gradient-primary p-2 rounded-xl shadow-glow">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-text bg-clip-text text-transparent">
                ViralAI
              </span>
            </div>
          )}
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="lg:hidden"
          >
            {isCollapsed ? <Menu className="h-4 w-4" /> : <X className="h-4 w-4" />}
          </Button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                isActive(item.href)
                  ? "bg-primary text-primary-foreground shadow-medium"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              {!isCollapsed && (
                <span className="font-medium">{item.name}</span>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Bottom section */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-gradient-primary p-4 rounded-xl text-white text-center shadow-glow">
            {!isCollapsed && (
              <>
                <h3 className="font-bold mb-1">Upgrade to Pro</h3>
                <p className="text-xs text-white/80 mb-3">
                  Unlock unlimited viral posts
                </p>
              </>
            )}
            <Button 
              variant="secondary" 
              size={isCollapsed ? "sm" : "default"}
              className="w-full"
            >
              {isCollapsed ? "Pro" : "Upgrade Now"}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile trigger */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsCollapsed(false)}
        className="fixed top-4 left-4 z-30 lg:hidden"
      >
        <Menu className="h-4 w-4" />
      </Button>
    </>
  );
};

export default Sidebar;