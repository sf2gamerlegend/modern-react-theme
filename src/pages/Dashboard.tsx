import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Zap,
  PenTool,
  Settings,
  Crown
} from "lucide-react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const stats = [
    {
      title: "Posts Generated",
      value: "1,247",
      change: "+23%",
      trend: "up",
      icon: PenTool
    },
    {
      title: "Viral Score Avg",
      value: "87.3",
      change: "+12%",
      trend: "up", 
      icon: TrendingUp
    },
    {
      title: "Engagement Rate",
      value: "12.4%",
      change: "+8%",
      trend: "up",
      icon: Users
    },
    {
      title: "Credits Used",
      value: "432/500",
      change: "86%",
      trend: "neutral",
      icon: Zap
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-card">
      {/* Header */}
      <header className="bg-background/80 backdrop-blur-lg border-b shadow-soft">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
            <Button variant="hero" size="sm">
              <Crown className="h-4 w-4 mr-2" />
              Upgrade to Pro
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 bg-background border-0 shadow-medium hover:shadow-large transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-secondary p-2 rounded-lg">
                  <stat.icon className="h-5 w-5 text-primary" />
                </div>
                <span className={`text-sm font-medium ${
                  stat.trend === 'up' ? 'text-success' : 
                  stat.trend === 'down' ? 'text-destructive' : 
                  'text-muted-foreground'
                }`}>
                  {stat.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
              <p className="text-sm text-muted-foreground">{stat.title}</p>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="p-8 bg-gradient-primary text-white border-0 shadow-glow">
            <div className="flex items-center gap-4 mb-4">
              <PenTool className="h-8 w-8" />
              <div>
                <h3 className="text-xl font-bold mb-1">Generate New Post</h3>
                <p className="text-white/80">Create viral content in seconds</p>
              </div>
            </div>
            <Button variant="secondary" className="w-full" asChild>
              <Link to="/generate">Start Creating</Link>
            </Button>
          </Card>

          <Card className="p-8 bg-background border-0 shadow-medium">
            <div className="flex items-center gap-4 mb-4">
              <BarChart3 className="h-8 w-8 text-primary" />
              <div>
                <h3 className="text-xl font-bold mb-1">Analytics Overview</h3>
                <p className="text-muted-foreground">Track your viral performance</p>
              </div>
            </div>
            <Button variant="outline" className="w-full">
              View Analytics
            </Button>
          </Card>
        </div>

        {/* Recent Posts */}
        <Card className="p-6 bg-background border-0 shadow-medium">
          <h3 className="text-xl font-bold mb-6">Recent Generated Posts</h3>
          <div className="space-y-4">
            {[
              { content: "🔥 Just discovered this AI hack that boosted my engagement by 300%...", score: 94, platform: "Twitter" },
              { content: "The biggest mistake entrepreneurs make (and how to avoid it)", score: 87, platform: "LinkedIn" },
              { content: "POV: You finally understand why your content isn't going viral", score: 91, platform: "Instagram" }
            ].map((post, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
                <div className="flex-1">
                  <p className="text-sm mb-2">{post.content}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{post.platform}</span>
                    <span>•</span>
                    <span>2 hours ago</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                    post.score >= 90 ? 'bg-success/10 text-success' :
                    post.score >= 80 ? 'bg-warning/10 text-warning' :
                    'bg-muted text-muted-foreground'
                  }`}>
                    <TrendingUp className="h-3 w-3" />
                    {post.score}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;