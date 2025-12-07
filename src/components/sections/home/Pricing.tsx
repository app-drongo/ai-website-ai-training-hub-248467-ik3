'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Zap, Star, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_PRICING = {
  title: 'Choose Your AI Training Plan',
  subtitle: 'Accelerate your AI journey with comprehensive training and development tools',
  billingToggle: {
    monthly: 'Monthly',
    yearly: 'Yearly',
    yearlyDiscount: 'Save 20%',
  },
  plans: [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for individuals getting started with AI',
      monthlyPrice: 29,
      yearlyPrice: 23,
      features: [
        '5 AI model training sessions',
        'Basic dataset management',
        'Community support',
        'Standard documentation',
        'Email support',
      ],
      ctaText: 'Start Free Trial',
      ctaHref: '/signup?plan=starter',
      popular: false,
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Advanced tools for professional AI developers',
      monthlyPrice: 99,
      yearlyPrice: 79,
      features: [
        'Unlimited AI model training',
        'Advanced dataset management',
        'Priority support',
        'Advanced analytics',
        'API access',
        'Custom integrations',
      ],
      ctaText: 'Get Started',
      ctaHref: '/signup?plan=professional',
      popular: true,
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Complete solution for large teams and organizations',
      monthlyPrice: 299,
      yearlyPrice: 239,
      features: [
        'Everything in Professional',
        'Dedicated account manager',
        'Custom model architectures',
        'On-premise deployment',
        '24/7 phone support',
        'SLA guarantees',
      ],
      ctaText: 'Contact Sales',
      ctaHref: '/contact?plan=enterprise',
      popular: false,
    },
  ],
} as const;

type PricingProps = Partial<typeof DEFAULT_PRICING>;

export default function Pricing(props: PricingProps) {
  const config = { ...DEFAULT_PRICING, ...props };
  const navigate = useSmartNavigation();
  const [isYearly, setIsYearly] = useState(false);

  const handlePlanSelect = (href: string) => {
    navigate(href);
  };

  return (
    <section id="pricing" className="bg-background text-foreground py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span data-editable="title">{config.title}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-muted text-muted-foreground rounded-lg p-1">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                !isYearly ? 'bg-background text-foreground shadow-sm' : 'hover:text-foreground'
              }`}
            >
              <span data-editable="billingToggle.monthly">{config.billingToggle.monthly}</span>
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all flex items-center gap-2 ${
                isYearly ? 'bg-background text-foreground shadow-sm' : 'hover:text-foreground'
              }`}
            >
              <span data-editable="billingToggle.yearly">{config.billingToggle.yearly}</span>
              <Badge variant="secondary" className="bg-primary text-primary-foreground">
                <span data-editable="billingToggle.yearlyDiscount">
                  {config.billingToggle.yearlyDiscount}
                </span>
              </Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 lg:grid-cols-3 max-w-7xl mx-auto">
          {config.plans.map((plan, idx) => (
            <Card
              key={plan.id}
              className={`relative transition-all duration-300 hover:shadow-lg ${
                plan.popular
                  ? 'border-primary shadow-lg scale-105 bg-card text-card-foreground'
                  : 'bg-card text-card-foreground hover:border-primary/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1 flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <h3 className="text-xl font-semibold mb-2">
                  <span data-editable={`plans[${idx}].name`}>{plan.name}</span>
                </h3>
                <p className="text-muted-foreground mb-4">
                  <span data-editable={`plans[${idx}].description`}>{plan.description}</span>
                </p>

                <div className="mb-4">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold">
                      ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  {isYearly && (
                    <p className="text-sm text-muted-foreground mt-1">Billed annually</p>
                  )}
                </div>

                <Button
                  onClick={() => handlePlanSelect(plan.ctaHref)}
                  className={`w-full ${
                    plan.popular
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  }`}
                  data-editable-href={`plans[${idx}].ctaHref`}
                  data-href={plan.ctaHref}
                >
                  <span data-editable={`plans[${idx}].ctaText`}>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">
                        <span data-editable={`plans[${idx}].features[${featureIdx}]`}>
                          {feature}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-muted text-muted-foreground rounded-lg p-8 max-w-2xl mx-auto">
            <Zap className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Need a custom solution?</h3>
            <p className="text-muted-foreground mb-4">
              Contact our team to discuss enterprise pricing and custom AI training solutions.
            </p>
            <Button
              onClick={() => handlePlanSelect('/contact')}
              variant="outline"
              className="border-border hover:bg-accent hover:text-accent-foreground"
              data-editable-href="contactHref"
              data-href="/contact"
            >
              Contact Sales Team
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
