import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { 
  Check, 
  Crown, 
  Zap, 
  Star, 
  Sparkles,
  Users,
  Building,
  Rocket,
  Shield,
  HeadphonesIcon
} from "lucide-react";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Free",
      description: "Perfect for getting started",
      price: { monthly: 0, yearly: 0 },
      icon: Zap,
      features: [
        "5 generations per day",
        "Basic templates",
        "3 platforms supported",
        "Standard quality",
        "Community support"
      ],
      limitations: [
        "Limited customization",
        "No priority support",
        "Basic analytics"
      ],
      cta: "Get Started Free",
      variant: "outline" as const,
      popular: false
    },
    {
      name: "Pro",
      description: "Best for content creators",
      price: { monthly: 19, yearly: 190 },
      icon: Star,
      features: [
        "Unlimited generations",
        "Premium templates",
        "All platforms supported",
        "High-quality AI models",
        "Advanced customization",
        "Priority support",
        "Detailed analytics",
        "Export options",
        "Team collaboration"
      ],
      limitations: [],
      cta: "Start Pro Trial",
      variant: "hero" as const,
      popular: true
    },
    {
      name: "Business",
      description: "For growing teams and agencies",
      price: { monthly: 49, yearly: 490 },
      icon: Building,
      features: [
        "Everything in Pro",
        "Team management",
        "Brand guidelines",
        "Custom templates",
        "API access",
        "White-label options",
        "Advanced analytics",
        "Dedicated support",
        "Custom integrations"
      ],
      limitations: [],
      cta: "Contact Sales",
      variant: "outline" as const,
      popular: false
    },
    {
      name: "Enterprise",
      description: "Custom solutions for large organizations",
      price: { monthly: 99, yearly: 990 },
      icon: Crown,
      features: [
        "Everything in Business",
        "Custom AI training",
        "On-premise deployment",
        "SLA guarantee",
        "24/7 phone support",
        "Custom contracts",
        "Advanced security",
        "Unlimited users",
        "Custom features"
      ],
      limitations: [],
      cta: "Contact Us",
      variant: "outline" as const,
      popular: false
    }
  ];

  const faqs = [
    {
      q: "Can I switch plans anytime?",
      a: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
    },
    {
      q: "What happens to my content if I cancel?",
      a: "Your generated content remains yours forever. You can export all your data before canceling."
    },
    {
      q: "Is there a free trial for paid plans?",
      a: "Yes, all paid plans come with a 14-day free trial. No credit card required."
    },
    {
      q: "Do you offer refunds?",
      a: "We offer a 30-day money-back guarantee for all paid plans if you're not satisfied."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-section">
      {/* Header */}
      <div className="container mx-auto px-4 pt-20 pb-12">
        <div className="text-center max-w-3xl mx-auto">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            <Crown className="h-3 w-3 mr-1" />
            Simple, Transparent Pricing
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="font-mono text-2xl md:text-3xl block mb-2 text-muted-foreground">
              &gt; Choose Your Plan
            </span>
            Start Creating Today
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            From free to enterprise, we have a plan that grows with your content needs.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={!isYearly ? "font-semibold" : "text-muted-foreground"}>Monthly</span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-primary"
            />
            <span className={isYearly ? "font-semibold" : "text-muted-foreground"}>
              Yearly
              <Badge className="ml-2 bg-success/10 text-success border-success/20">
                Save 17%
              </Badge>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-20">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative p-6 bg-background/80 backdrop-blur-sm border-0 shadow-large hover:shadow-glow transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-primary/50 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-primary text-white px-4 py-1">
                    <Sparkles className="h-3 w-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className={`inline-flex p-3 rounded-2xl mb-4 ${
                  plan.popular ? 'bg-gradient-primary text-white' : 'bg-primary/10 text-primary'
                }`}>
                  <plan.icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mt-1">{plan.description}</p>
              </div>

              <div className="text-center mb-6">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold font-mono">
                    ${isYearly ? plan.price.yearly : plan.price.monthly}
                  </span>
                  {plan.price.monthly > 0 && (
                    <span className="text-muted-foreground">
                      /{isYearly ? 'year' : 'month'}
                    </span>
                  )}
                </div>
                {isYearly && plan.price.monthly > 0 && (
                  <p className="text-sm text-muted-foreground mt-1">
                    ${(plan.price.monthly * 12).toFixed(0)} billed annually
                  </p>
                )}
              </div>

              <div className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
                {plan.limitations.map((limitation, limitIndex) => (
                  <div key={limitIndex} className="flex items-start gap-2 opacity-60">
                    <div className="w-4 h-4 mt-0.5 flex-shrink-0 flex items-center justify-center">
                      <div className="w-1 h-1 bg-muted-foreground rounded-full" />
                    </div>
                    <span className="text-sm text-muted-foreground">{limitation}</span>
                  </div>
                ))}
              </div>

              <Button 
                className="w-full" 
                variant={plan.variant}
                size="lg"
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>

        {/* Features Comparison */}
        <div className="max-w-4xl mx-auto mb-20">
          <Card className="p-8 bg-background/80 backdrop-blur-sm border-0 shadow-large">
            <h2 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              Why Choose GenerateTitle.io?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 p-4 rounded-2xl w-fit mx-auto mb-4">
                  <Rocket className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Lightning Fast</h3>
                <p className="text-muted-foreground text-sm">Generate high-quality content in seconds, not hours</p>
              </div>
              <div className="text-center">
                <div className="bg-success/10 p-4 rounded-2xl w-fit mx-auto mb-4">
                  <Users className="h-8 w-8 text-success" />
                </div>
                <h3 className="font-semibold mb-2">Trusted by 50K+</h3>
                <p className="text-muted-foreground text-sm">Join thousands of creators who trust our platform</p>
              </div>
              <div className="text-center">
                <div className="bg-accent/10 p-4 rounded-2xl w-fit mx-auto mb-4">
                  <HeadphonesIcon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">24/7 Support</h3>
                <p className="text-muted-foreground text-sm">Get help whenever you need it from our expert team</p>
              </div>
            </div>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="font-mono text-lg block mb-2 text-muted-foreground">&gt; FAQ</span>
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6 bg-background/80 backdrop-blur-sm border-0 shadow-large">
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-muted-foreground text-sm">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;