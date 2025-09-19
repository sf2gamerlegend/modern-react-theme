import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Star, Zap } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "0",
      description: "Perfect for testing the waters",
      features: [
        "5 posts per month",
        "Basic viral score",
        "1 platform (Twitter)",
        "Standard templates"
      ],
      cta: "Start Free",
      variant: "outline" as const,
      popular: false
    },
    {
      name: "Pro",
      price: "29",
      description: "For serious content creators",
      features: [
        "500 posts per month",
        "Advanced viral score",
        "All platforms",
        "Premium templates",
        "Trend analytics",
        "Priority support"
      ],
      cta: "Go Pro",
      variant: "hero" as const,
      popular: true
    },
    {
      name: "Agency",
      price: "99",
      description: "For teams and agencies",
      features: [
        "Unlimited posts",
        "AI viral score",
        "All platforms + custom",
        "White-label solution",
        "Team collaboration",
        "Dedicated manager",
        "Custom integrations"
      ],
      cta: "Scale Up",
      variant: "gradient" as const,
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary/50 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="h-4 w-4" />
            <span>Simple, Transparent Pricing</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your
            <span className="bg-gradient-text bg-clip-text text-transparent"> Viral Journey</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start free, scale as you grow. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`p-8 bg-background border-0 shadow-medium hover:shadow-large transition-all duration-300 relative ${
                plan.popular ? 'ring-2 ring-primary shadow-glow scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-primary text-white px-4 py-1 rounded-full text-sm font-medium shadow-glow">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-5xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <div className="bg-success/10 p-1 rounded-full">
                      <Check className="h-3 w-3 text-success" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.variant} 
                className="w-full justify-center"
                size="lg"
              >
                {plan.cta}
                {plan.popular && <Zap className="ml-2 h-4 w-4" />}
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            All plans include 14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;