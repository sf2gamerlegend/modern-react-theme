import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  TrendingUp, 
  Eye, 
  Heart, 
  Share, 
  BarChart3, 
  Calendar,
  Target,
  Zap,
  Download,
  Filter,
  RefreshCw
} from "lucide-react";

const Analytics = () => {
  const stats = [
    { label: "Total Views", value: "2.4M", change: "+12.5%", icon: Eye, positive: true },
    { label: "Engagement Rate", value: "8.7%", change: "+2.3%", icon: Heart, positive: true },
    { label: "Shares", value: "45.2K", change: "+18.9%", icon: Share, positive: true },
    { label: "Click Rate", value: "4.2%", change: "-0.8%", icon: Target, positive: false }
  ];

  const topContent = [
    { title: "AI productivity hacks that changed my life", platform: "Twitter", views: "342K", engagement: "12.4%" },
    { title: "Why remote work is the future", platform: "LinkedIn", views: "189K", engagement: "9.8%" },
    { title: "Coding tips for beginners", platform: "YouTube", views: "567K", engagement: "15.2%" },
    { title: "Morning routine optimization", platform: "Instagram", views: "234K", engagement: "11.7%" }
  ];

  return (
    <div className="min-h-screen bg-gradient-section p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-2">
              <div className="bg-gradient-primary p-2 rounded-xl">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <span className="font-mono">&gt;</span> Analytics
            </h1>
            <p className="text-muted-foreground mt-1">Track your content performance and optimize for better results</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button variant="outline" size="sm">
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 bg-background/80 backdrop-blur-sm border-0 shadow-large hover:shadow-glow transition-all">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                  <p className="text-2xl font-bold font-mono mt-1">{stat.value}</p>
                  <div className="flex items-center gap-1 mt-2">
                    <TrendingUp className={`h-3 w-3 ${stat.positive ? 'text-success' : 'text-destructive'}`} />
                    <span className={`text-sm font-medium ${stat.positive ? 'text-success' : 'text-destructive'}`}>
                      {stat.change}
                    </span>
                    <span className="text-xs text-muted-foreground">vs last month</span>
                  </div>
                </div>
                <div className={`p-2 rounded-xl ${stat.positive ? 'bg-success/10' : 'bg-destructive/10'}`}>
                  <stat.icon className={`h-5 w-5 ${stat.positive ? 'text-success' : 'text-destructive'}`} />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Charts and Content Performance */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-background/50 backdrop-blur-sm">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="engagement">Engagement</TabsTrigger>
            <TabsTrigger value="platforms">Platforms</TabsTrigger>
            <TabsTrigger value="content">Top Content</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Performance Chart */}
              <Card className="p-6 bg-background/80 backdrop-blur-sm border-0 shadow-large">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Performance Trend
                </h3>
                <div className="h-64 bg-gradient-subtle rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Chart visualization would be here</p>
                </div>
              </Card>

              {/* Platform Distribution */}
              <Card className="p-6 bg-background/80 backdrop-blur-sm border-0 shadow-large">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  Platform Distribution
                </h3>
                <div className="space-y-4">
                  {[
                    { platform: "Twitter", percentage: 35, color: "bg-blue-500" },
                    { platform: "LinkedIn", percentage: 28, color: "bg-blue-600" },
                    { platform: "YouTube", percentage: 22, color: "bg-red-500" },
                    { platform: "Instagram", percentage: 15, color: "bg-pink-500" }
                  ].map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{item.platform}</span>
                        <span className="font-mono">{item.percentage}%</span>
                      </div>
                      <div className="w-full bg-muted/20 rounded-full h-2">
                        <div 
                          className={`${item.color} h-2 rounded-full transition-all duration-500`}
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="content" className="space-y-6">
            <Card className="p-6 bg-background/80 backdrop-blur-sm border-0 shadow-large">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                Top Performing Content
              </h3>
              <div className="space-y-4">
                {topContent.map((content, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-colors">
                    <div className="flex-1">
                      <h4 className="font-medium">{content.title}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="secondary" className="text-xs">
                          {content.platform}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          {content.views} views
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-success font-medium">{content.engagement}</p>
                      <p className="text-xs text-muted-foreground">engagement</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="engagement" className="space-y-6">
            <Card className="p-6 bg-background/80 backdrop-blur-sm border-0 shadow-large">
              <h3 className="text-lg font-semibold mb-4">Engagement Analytics</h3>
              <div className="h-64 bg-gradient-subtle rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Engagement metrics visualization</p>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="platforms" className="space-y-6">
            <Card className="p-6 bg-background/80 backdrop-blur-sm border-0 shadow-large">
              <h3 className="text-lg font-semibold mb-4">Platform Performance</h3>
              <div className="h-64 bg-gradient-subtle rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Platform comparison charts</p>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Analytics;