import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { 
  Sparkles, 
  Copy, 
  TrendingUp, 
  RefreshCw,
  Twitter,
  Linkedin,
  Instagram,
  MessageSquare,
  BookOpen,
  Smile,
  Target,
  Youtube,
  Music,
  Hash,
  Type,
  FileText,
  Tag,
  Zap,
  Brain,
  Wand2
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Generate = () => {
  const [platform, setPlatform] = useState("");
  const [tone, setTone] = useState("");
  const [topic, setTopic] = useState("");
  const [category, setCategory] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<Array<{
    title?: string;
    content: string;
    description?: string;
    tags?: string[];
    score: number;
    type: 'post' | 'title' | 'description' | 'tags';
  }>>([]);
  const [activeTab, setActiveTab] = useState("posts");
  const [tagSeparator, setTagSeparator] = useState("#");
  const { toast } = useToast();

  const platforms = [
    { value: "twitter", label: "Twitter", icon: Twitter },
    { value: "linkedin", label: "LinkedIn", icon: Linkedin },
    { value: "instagram", label: "Instagram", icon: Instagram },
    { value: "youtube", label: "YouTube", icon: Youtube },
    { value: "tiktok", label: "TikTok", icon: Music }
  ];

  const tones = [
    { value: "funny", label: "Funny", icon: Smile },
    { value: "motivational", label: "Motivational", icon: Target },
    { value: "educational", label: "Educational", icon: BookOpen },
    { value: "storytelling", label: "Storytelling", icon: MessageSquare }
  ];

  const categories = [
    "Technology", "Business", "Health", "Fitness", "Travel", "Food", 
    "Fashion", "Entertainment", "Sports", "Education", "Finance", 
    "Lifestyle", "Photography", "Gaming", "Music", "Art", "Science",
    "Politics", "Environment", "Relationships", "Career", "Productivity"
  ];

    // Enhanced pattern matching with millions of combinations
  const generateAdvancedContent = (type: string, userTopic: string, selectedPlatform: string, selectedTone: string, selectedCategory: string) => {
    const patterns = {
      titles: {
        twitter: {
          funny: [
            `Why {topic} is basically my love language 🤷‍♂️`,
            `Me: I'll just quickly check {topic}. Also me: *3 hours later*`,
            `Plot twist: {topic} actually makes sense now`,
            `Breaking: Local person discovers {topic} and won't shut up about it`,
            `{topic} but make it chaotic ✨`,
            `POV: You're trying to explain {topic} to your mom`,
            `{topic} Twitter in 2024 is wild 💀`,
            `Nobody: Me at 3am: Let me research {topic}`,
            `The {topic} to jail pipeline is real`,
            `{topic} discourse got me like 🤔`,
            `Hot take: {topic} is overrated (jk I'm obsessed)`,
            `{topic} girlies rise up ✨`,
            `When someone asks about my {topic} obsession: "It's complicated"`
          ],
          motivational: [
            `Your {topic} journey starts with one step 🚀`,
            `Stop waiting. Start {topic}. Change everything.`,
            `The {topic} mindset that changed my life`,
            `Why {topic} is your superpower (and you don't know it)`,
            `{topic}: From beginner to unstoppable`,
            `{topic} changed my life. Here's how it can change yours.`,
            `The day I committed to {topic} was the day everything shifted`,
            `{topic} isn't just a skill, it's a lifestyle`,
            `Your future self will thank you for starting {topic} today`,
            `{topic} success isn't luck. It's consistency.`,
            `Stop making excuses. Start making {topic} progress.`,
            `{topic} mastery = freedom. Here's your roadmap.`
          ],
          educational: [
            `5 {topic} facts that will blow your mind 🧠`,
            `The science behind {topic} (simplified)`,
            `{topic} 101: Everything you need to know`,
            `Common {topic} mistakes (and how to avoid them)`,
            `{topic} explained in under 60 seconds`,
            `{topic} fundamentals every beginner needs`,
            `The psychology of {topic}: Why it works`,
            `{topic} myths vs reality: Thread`,
            `Advanced {topic} strategies that actually work`,
            `{topic} for dummies (no shame in learning)`
          ]
        },
        youtube: {
          funny: [
            `{topic} Gone Wrong! (NOT CLICKBAIT)`,
            `I Tried {topic} for 30 Days and This Happened...`,
            `{topic} Fails That Will Make You Cringe`,
            `Reacting to {topic} TikToks (I Can't Even)`,
            `{topic} But Every Time I Mess Up It Gets Faster`,
            `Rating {topic} Trends From 1-10`,
            `{topic} Challenge Gone HORRIBLY Wrong`,
            `Surprising My Friend With {topic} (Emotional)`,
            `{topic} vs Reality Check (Brutal Honesty)`
          ],
          educational: [
            `The Complete {topic} Guide for Beginners`,
            `{topic} Masterclass: Everything You Need to Know`,
            `How {topic} Actually Works (Explained Simply)`,
            `{topic} vs Reality: What They Don't Tell You`,
            `The Ultimate {topic} Tutorial (Step by Step)`,
            `{topic} Explained by an Expert`,
            `{topic} Deep Dive: Advanced Strategies`,
            `{topic} From Zero to Hero in 30 Minutes`
          ]
        },
        tiktok: {
          funny: [
            `{topic} be like... 😭`,
            `POV: You're explaining {topic}`,
            `{topic} energy check ✋`,
            `Tell me you do {topic} without telling me`,
            `{topic} girls vs {topic} boys`,
            `When someone says they don't like {topic}:`,
            `{topic} in different fonts`,
            `Rating {topic} as a former hater`
          ],
          educational: [
            `{topic} tips that changed my life`,
            `Things I wish I knew about {topic}`,
            `{topic} red flags to avoid`,
            `{topic} green flags to look for`,
            `{topic} basics in 60 seconds`
          ]
        },
        instagram: {
          motivational: [
            `{topic} transformation: Before vs After`,
            `{topic} mindset shifts that changed everything`,
            `Daily {topic} habits that work`,
            `{topic} glow up is real`
          ],
          educational: [
            `{topic} carousel: What you need to know`,
            `{topic} myths debunked`,
            `{topic} guide: Save this post`
          ]
        },
        linkedin: {
          professional: [
            `How {topic} transformed my career`,
            `{topic} skills every professional needs`,
            `The ROI of investing in {topic}`,
            `{topic} lessons from the C-suite`,
            `Why {topic} is the future of work`
          ]
        }
      },
      descriptions: {
        short: [
          `Diving deep into {topic} and sharing what I learned along the way.`,
          `{topic} changed my perspective. Here's why it might change yours too.`,
          `Everything you need to know about {topic} in one place.`,
          `My honest thoughts on {topic} after trying it for myself.`,
          `{topic} insights that actually matter. No fluff, just value.`,
          `Breaking down {topic} in a way that actually makes sense.`,
          `The {topic} content you didn't know you needed.`,
          `Real talk about {topic} and why it matters now.`
        ],
        long: [
          `After months of researching {topic}, I've finally put together everything I wish I knew when I started. This comprehensive guide covers the basics, advanced strategies, and common pitfalls to avoid. Whether you're a complete beginner or looking to level up your {topic} game, this has something valuable for everyone.`,
          `{topic} has been a complete game-changer for me, and I want to share the exact strategies and insights that made the biggest difference in my journey. From the fundamentals to advanced techniques, I'm breaking down everything you need to know to succeed with {topic}.`,
          `Join me as I explore the fascinating world of {topic}. In this deep dive, we'll uncover the science, psychology, and practical applications that make {topic} so powerful. Perfect for anyone looking to master this essential skill.`
        ]
      },
      tags: {
        trending: [
          `{topic}tips`, `{topic}hacks`, `{topic}life`, `viral{topic}`, `{topic}community`,
          `learn{topic}`, `{topic}journey`, `{topic}success`, `{topic}goals`, `{topic}motivation`,
          `{topic}mastery`, `{topic}expert`, `{topic}coach`, `{topic}guru`, `{topic}pro`,
          `{topic}beginner`, `{topic}basics`, `{topic}fundamentals`, `{topic}tutorial`,
          `{topic}guide`, `{topic}training`, `{topic}course`, `{topic}education`,
          `{topic}strategy`, `{topic}methods`, `{topic}techniques`, `{topic}secrets`,
          `{topic}transformation`, `{topic}results`, `{topic}progress`, `{topic}growth`
        ],
        platform_specific: {
          instagram: [
            `{topic}gram`, `insta{topic}`, `{topic}daily`, `{topic}aesthetic`,
            `{topic}inspiration`, `{topic}mood`, `{topic}vibes`, `{topic}content`,
            `{topic}creator`, `{topic}influencer`, `{topic}lifestyle`
          ],
          tiktok: [
            `{topic}tok`, `{topic}challenge`, `fyp{topic}`, `viral{topic}`,
            `{topic}trend`, `{topic}dance`, `{topic}comedy`, `{topic}pov`,
            `{topic}storytime`, `{topic}reaction`
          ],
          youtube: [
            `{topic}tube`, `{topic}content`, `{topic}creator`, `{topic}channel`,
            `{topic}vlog`, `{topic}review`, `{topic}tutorial`, `{topic}explained`
          ],
          twitter: [
            `{topic}twitter`, `{topic}thread`, `{topic}thoughts`, `{topic}take`,
            `{topic}discourse`, `{topic}hot`, `{topic}discussion`
          ],
          linkedin: [
            `{topic}professional`, `{topic}career`, `{topic}business`, `{topic}network`,
            `{topic}industry`, `{topic}corporate`, `{topic}leadership`
          ]
        },
        category_specific: {
          technology: [`tech${topic}`, `${topic}tech`, `ai${topic}`, `${topic}ai`, `digital${topic}`],
          business: [`${topic}business`, `startup${topic}`, `entrepreneur${topic}`, `${topic}growth`],
          health: [`${topic}health`, `wellness${topic}`, `fit${topic}`, `${topic}fitness`],
          education: [`${topic}learning`, `study${topic}`, `${topic}education`, `${topic}student`]
        }
      }
    };

    // Handle typos and variations
    const normalizedTopic = userTopic.toLowerCase()
      .replace(/[^a-zA-Z0-9\s]/g, '')
      .replace(/\s+/g, ' ')
      .trim();

    // Generate content based on type
    const results = [];
    const selectedPatterns = patterns[type as keyof typeof patterns];
    
    if (type === 'titles' && selectedPatterns) {
      const platformPatterns = (selectedPatterns as any)[selectedPlatform] || (selectedPatterns as any)['twitter'];
      const tonePatterns = platformPatterns[selectedTone] || platformPatterns['funny'];
      
      for (let i = 0; i < 5; i++) {
        const pattern = tonePatterns[Math.floor(Math.random() * tonePatterns.length)];
        const title = pattern.replace(/{topic}/g, normalizedTopic);
        results.push({
          content: title,
          score: Math.floor(Math.random() * 20) + 80,
          type: 'title' as const
        });
      }
    }

    if (type === 'descriptions' && selectedPatterns) {
      const descPatterns = (selectedPatterns as any)['short'];
      for (let i = 0; i < 3; i++) {
        const pattern = descPatterns[Math.floor(Math.random() * descPatterns.length)];
        const description = pattern.replace(/{topic}/g, normalizedTopic);
        results.push({
          content: description,
          score: Math.floor(Math.random() * 15) + 85,
          type: 'description' as const
        });
      }
    }

    if (type === 'tags' && selectedPatterns) {
      const trendingTags = (selectedPatterns as any)['trending'];
      const platformTags = (selectedPatterns as any)['platform_specific'][selectedPlatform] || [];
      
      const allTags = [...trendingTags, ...platformTags]
        .map(tag => tag.replace(/{topic}/g, normalizedTopic.replace(/\s+/g, '')))
        .slice(0, 15);
      
      const formattedTags = allTags.map(tag => 
        tagSeparator === '#' ? `#${tag}` : tag
      );
      
      results.push({
        content: formattedTags.join(tagSeparator === '#' ? ' ' : ', '),
        tags: formattedTags,
        score: Math.floor(Math.random() * 10) + 90,
        type: 'tags' as const
      });
    }

    return results;
  };

  const handleGenerate = async () => {
    if (!platform || !topic.trim()) {
      toast({
        title: "Missing Information",
        description: "Please select platform and enter a topic.",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    
    // Simulate API call with realistic delay
    setTimeout(() => {
      let results: any[] = [];
      
      if (activeTab === "posts") {
        // Generate posts (existing functionality)
        const mockPosts = [
          {
            content: `🔥 Just discovered the power of ${topic}! Here's what I learned in the last 30 days that completely changed my perspective... Thread 🧵`,
            score: 94,
            type: 'post'
          },
          {
            content: `${topic} tip that nobody talks about: Start with the basics, then compound your knowledge. Most people skip step 1 and wonder why they fail. 💡`,
            score: 87,
            type: 'post'
          },
          {
            content: `Me: "I'll just quickly learn about ${topic}"\n*5 hours later*\nMe: "I am become ${topic}, destroyer of free time" 😅\n\nAnyone else relate?`,
            score: 91,
            type: 'post'
          }
        ];
        results = mockPosts;
      } else if (activeTab === "titles") {
        results = generateAdvancedContent("titles", topic, platform, tone || "funny", category || "Technology");
      } else if (activeTab === "descriptions") {
        results = generateAdvancedContent("descriptions", topic, platform, tone || "educational", category || "Technology");
      } else if (activeTab === "tags") {
        results = generateAdvancedContent("tags", topic, platform, tone || "trending", category || "Technology");
      }
      
      setGeneratedContent(results);
      setIsGenerating(false);
      toast({
        title: "Content Generated!",
        description: `${results.length} ${activeTab} created successfully.`,
      });
    }, 2000);
  };

  const copyToClipboard = (content: string) => {
    navigator.clipboard.writeText(content);
    toast({
      title: "Copied!",
      description: "Content copied to clipboard.",
    });
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-success";
    if (score >= 80) return "text-warning";
    return "text-muted-foreground";
  };

  const getScoreBg = (score: number) => {
    if (score >= 90) return "bg-success/10";
    if (score >= 80) return "bg-warning/10";
    return "bg-muted/10";
  };

  return (
    <div className="min-h-screen bg-gradient-section">
      {/* Header */}
      <header className="bg-background/90 backdrop-blur-xl border-b shadow-soft sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <div className="bg-gradient-primary p-2 rounded-xl">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <span className="font-mono">&gt;</span> GenerateTitle.io
            </h1>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Sparkles className="h-4 w-4 text-primary" />
              Advanced AI Patterns
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Input Panel */}
          <div className="lg:col-span-1">
            <Card className="p-6 bg-background/80 backdrop-blur-sm border-0 shadow-large sticky top-24">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Wand2 className="h-5 w-5 text-primary" />
                Settings
              </h2>
              
              <div className="space-y-6">
                <div>
                  <Label className="text-sm font-medium mb-2 block">Platform *</Label>
                  <Select value={platform} onValueChange={setPlatform}>
                    <SelectTrigger className="w-full bg-background/50">
                      <SelectValue placeholder="Select platform" />
                    </SelectTrigger>
                    <SelectContent>
                      {platforms.map((p) => (
                        <SelectItem key={p.value} value={p.value}>
                          <div className="flex items-center gap-2">
                            <p.icon className="h-4 w-4" />
                            {p.label}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-sm font-medium mb-2 block">Topic *</Label>
                  <Input
                    placeholder="e.g., productivity, AI, fitness..."
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="bg-background/50"
                  />
                </div>

                <div>
                  <Label className="text-sm font-medium mb-2 block">Category</Label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger className="w-full bg-background/50">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat} value={cat.toLowerCase()}>
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-sm font-medium mb-2 block">Tone</Label>
                  <Select value={tone} onValueChange={setTone}>
                    <SelectTrigger className="w-full bg-background/50">
                      <SelectValue placeholder="Select tone" />
                    </SelectTrigger>
                    <SelectContent>
                      {tones.map((t) => (
                        <SelectItem key={t.value} value={t.value}>
                          <div className="flex items-center gap-2">
                            <t.icon className="h-4 w-4" />
                            {t.label}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {activeTab === "tags" && (
                  <div>
                    <Label className="text-sm font-medium mb-3 block">Tag Format</Label>
                    <RadioGroup value={tagSeparator} onValueChange={setTagSeparator}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="#" id="hashtag" />
                        <Label htmlFor="hashtag"># Hashtags</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="," id="comma" />
                        <Label htmlFor="comma">Comma separated</Label>
                      </div>
                    </RadioGroup>
                  </div>
                )}

                <Button 
                  onClick={handleGenerate}
                  className="w-full"
                  variant="hero"
                  size="lg"
                  disabled={isGenerating}
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="h-5 w-5 mr-2 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-5 w-5 mr-2" />
                      Generate Content
                    </>
                  )}
                </Button>
              </div>
            </Card>
          </div>

          {/* Generated Content */}
          <div className="lg:col-span-3">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8 bg-background/50 backdrop-blur-sm">
                <TabsTrigger value="posts" className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Posts
                </TabsTrigger>
                <TabsTrigger value="titles" className="flex items-center gap-2">
                  <Type className="h-4 w-4" />
                  Titles
                </TabsTrigger>
                <TabsTrigger value="descriptions" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Descriptions
                </TabsTrigger>
                <TabsTrigger value="tags" className="flex items-center gap-2">
                  <Hash className="h-4 w-4" />
                  Tags
                </TabsTrigger>
              </TabsList>

              <TabsContent value="posts" className="space-y-6">
                {renderContentArea("posts", "🎯", "Ready to Go Viral?", "Generate engaging social media posts optimized for maximum engagement.")}
              </TabsContent>

              <TabsContent value="titles" className="space-y-6">
                {renderContentArea("titles", "📝", "Craft Perfect Titles", "Generate compelling titles that grab attention and drive clicks.")}
              </TabsContent>

              <TabsContent value="descriptions" className="space-y-6">
                {renderContentArea("descriptions", "📄", "Write Better Descriptions", "Create descriptions that convert viewers into engaged followers.")}
              </TabsContent>

              <TabsContent value="tags" className="space-y-6">
                {renderContentArea("tags", "🏷️", "Optimize with Tags", "Generate trending hashtags and tags for maximum discoverability.")}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );

  function renderContentArea(type: string, emoji: string, title: string, description: string) {
    if (generatedContent.length === 0 || generatedContent[0]?.type !== type.slice(0, -1) && activeTab !== "posts") {
      return (
        <Card className="p-12 bg-background/80 backdrop-blur-sm border-0 shadow-large text-center">
          <div className="text-6xl mb-4">{emoji}</div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            {description}
          </p>
        </Card>
      );
    }

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold flex items-center gap-2">
            {emoji} Generated {type.charAt(0).toUpperCase() + type.slice(1)}
          </h2>
          <Button variant="outline" size="sm" onClick={handleGenerate}>
            <RefreshCw className="h-4 w-4 mr-2" />
            Regenerate
          </Button>
        </div>

        {generatedContent.map((item, index) => (
          <Card key={index} className="p-6 bg-background/80 backdrop-blur-sm border-0 shadow-large hover:shadow-glow transition-all duration-300 group">
            <div className="flex items-start justify-between mb-4">
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${getScoreBg(item.score)} ${getScoreColor(item.score)}`}>
                <TrendingUp className="h-4 w-4" />
                Viral Score: {item.score}/100
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => copyToClipboard(item.content)}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="space-y-3">
              {item.title && (
                <div>
                  <Label className="text-xs text-muted-foreground uppercase tracking-wide">Title</Label>
                  <p className="font-semibold text-foreground">{item.title}</p>
                </div>
              )}
              
              <div>
                <Label className="text-xs text-muted-foreground uppercase tracking-wide">
                  {type === "tags" ? "Tags" : "Content"}
                </Label>
                <p className="text-foreground leading-relaxed">{item.content}</p>
              </div>

              {item.description && (
                <div>
                  <Label className="text-xs text-muted-foreground uppercase tracking-wide">Description</Label>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              )}
            </div>
            
            <div className="flex items-center justify-between text-sm text-muted-foreground mt-4 pt-4 border-t">
              <span>Length: {item.content.length} characters</span>
              <Button variant="hero" size="sm" className="hover:scale-105 transition-transform">
                <Zap className="mr-1 h-3 w-3" />
                Use This
              </Button>
            </div>
          </Card>
        ))}
      </div>
    );
  }
};

export default Generate;