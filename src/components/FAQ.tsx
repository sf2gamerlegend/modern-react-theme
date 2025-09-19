import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Minus, HelpCircle, MessageCircle } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does ViralAI's viral prediction algorithm work?",
      answer: "Our AI analyzes millions of viral posts across platforms, identifying patterns in engagement, timing, content structure, and audience behavior. It considers factors like trending topics, optimal posting times, hashtag performance, and platform-specific algorithms to generate a viral score (0-100) for each post."
    },
    {
      question: "Which social media platforms does ViralAI support?",
      answer: "ViralAI supports all major platforms including Twitter/X, Instagram, LinkedIn, TikTok, YouTube, Facebook, Pinterest, and Snapchat. Each platform has tailored optimization strategies based on their unique algorithms and audience behaviors."
    },
    {
      question: "Can I customize the AI to match my brand voice?",
      answer: "Absolutely! ViralAI learns from your existing content and allows you to set custom tone preferences (professional, casual, humorous, etc.), brand guidelines, and target audience demographics. The AI adapts to maintain consistency with your brand identity."
    },
    {
      question: "What's included in the free plan?",
      answer: "The free plan includes 5 viral posts per month, basic viral score analysis, access to one platform (Twitter), standard templates, and community support. Perfect for testing our capabilities before upgrading."
    },
    {
      question: "How accurate is the viral score prediction?",
      answer: "Our viral score has a 94% accuracy rate in predicting content performance. Posts scoring 80+ have a 92% chance of exceeding average engagement, while posts scoring 90+ have an 87% chance of going viral (10x+ average engagement)."
    },
    {
      question: "Can I schedule posts directly from ViralAI?",
      answer: "Yes! ViralAI integrates with major scheduling tools like Hootsuite, Buffer, and Later. We also have native scheduling features that optimize posting times based on your audience's activity patterns and platform algorithms."
    },
    {
      question: "Is there an API for developers?",
      answer: "Yes, we offer a comprehensive REST API with full documentation, SDKs for popular programming languages, webhook support, and rate limiting. Perfect for integrating ViralAI into your existing workflows or building custom applications."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer 24/7 chat support for all users, priority email support for Pro users, and dedicated account managers for Agency plan customers. Plus access to our active community of 50K+ creators and extensive knowledge base."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes, you can cancel your subscription anytime with no penalties. Your account remains active until the end of your billing period, and you can export all your generated content and analytics data."
    },
    {
      question: "Do you offer team collaboration features?",
      answer: "Our Agency plan includes team collaboration with role-based permissions, shared workspaces, content approval workflows, team analytics, and bulk operations. Perfect for agencies and marketing teams managing multiple brands."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block font-mono text-sm text-muted-foreground mb-4 px-4 py-2 bg-background/50 backdrop-blur-sm rounded-full border border-primary/20">
            &gt; FAQ.answers()
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="font-mono text-3xl md:text-4xl text-muted-foreground block mb-2">
              Got
            </span>
            <span className="bg-gradient-text bg-clip-text text-transparent">
              Questions?
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about ViralAI and how it can transform your social media presence.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <Card 
              key={index}
              className="bg-background/70 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between group"
              >
                <h3 className="font-semibold text-lg pr-4 group-hover:text-primary transition-colors">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="h-5 w-5 text-primary transition-transform duration-300" />
                  ) : (
                    <Plus className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 animate-fade-in-up">
                  <p className="text-muted-foreground leading-relaxed border-t border-border/50 pt-4">
                    {faq.answer}
                  </p>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Still have questions */}
        <Card className="p-8 bg-gradient-mesh border border-border/50 animate-fade-in-up">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl">
              <HelpCircle className="h-8 w-8 text-white" />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold font-mono mb-2">Still have questions?</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our team is here to help. Get in touch and we'll respond within 24 hours.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="hover:bg-muted/50 group">
                <MessageCircle className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Start Live Chat
              </Button>
              <Button className="bg-gradient-primary hover:bg-gradient-cta shadow-glow">
                Contact Support
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default FAQ;