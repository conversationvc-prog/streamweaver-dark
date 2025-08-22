import { Check, Zap, Crown, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export const PlansSection = () => {
  const plans = [
    {
      id: "free",
      name: "FREE",
      price: "$0",
      period: "forever",
      description: "Access to basic content with ads",
      icon: Star,
      gradient: "from-gray-500 to-slate-600",
      features: [
        "Limited movie library",
        "Standard quality (720p)",
        "Ads during content",
        "1 device at a time",
        "Basic live TV channels"
      ],
      limitations: [
        "Advertisement breaks",
        "Limited content access",
        "Standard resolution only"
      ]
    },
    {
      id: "premium",
      name: "PREMIUM",
      price: "$9.99",
      period: "per month",
      description: "Ad-free experience with full access",
      icon: Crown,
      gradient: "from-purple-500 to-pink-500",
      popular: true,
      features: [
        "Full movie & series library",
        "Ultra HD quality (4K)",
        "No advertisements",
        "5 devices simultaneously",
        "All live TV channels",
        "Offline downloads",
        "Priority streaming",
        "Exclusive content"
      ]
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
            Choose Your Plan
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start with our free plan or upgrade to premium for the ultimate streaming experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => {
            const IconComponent = plan.icon;
            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl border-2 p-8 transition-all duration-300 hover:scale-[1.02] ${
                  plan.popular
                    ? "border-primary shadow-2xl shadow-primary/20 bg-gradient-to-b from-primary/5 to-transparent"
                    : "border-border/50 bg-background/50 backdrop-blur-sm hover:border-primary/30"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-primary to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      ⭐ MOST POPULAR
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${plan.gradient} mb-4`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">/{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>

                <div className="space-y-4 mb-8">
                  <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
                    What's included:
                  </h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {plan.limitations && (
                    <div className="pt-4 border-t border-border/50">
                      <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-3">
                        Limitations:
                      </h4>
                      <ul className="space-y-2">
                        {plan.limitations.map((limitation) => (
                          <li key={limitation} className="flex items-center gap-3">
                            <div className="h-2 w-2 bg-amber-500 rounded-full flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <Button
                  className={`w-full py-3 rounded-xl font-semibold transition-all duration-200 ${
                    plan.popular
                      ? "bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90 text-white shadow-lg hover:shadow-xl"
                      : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                  }`}
                >
                  {plan.id === "free" ? "Get Started Free" : "Upgrade to Premium"}
                </Button>

                {plan.id === "premium" && (
                  <div className="mt-4 text-center">
                    <p className="text-xs text-muted-foreground">
                      Cancel anytime • No hidden fees
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full border border-primary/20">
            <Zap className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">30-day money-back guarantee on Premium</span>
          </div>
        </div>
      </div>
    </section>
  );
};