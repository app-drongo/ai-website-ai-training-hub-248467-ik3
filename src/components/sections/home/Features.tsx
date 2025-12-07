'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Brain, Zap, Shield, Code, BarChart3, Rocket, ArrowRight } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_FEATURES = {
  sectionTitle: 'Everything You Need for AI Development',
  sectionSubtitle:
    'From prototype to production, our comprehensive suite of tools accelerates every stage of your AI development lifecycle.',
  ctaText: 'Start Building',
  ctaHref: '/get-started',
  features: [
    {
      icon: 'Brain',
      title: 'Advanced Model Training',
      description:
        'Train state-of-the-art AI models with our distributed computing infrastructure and automated hyperparameter optimization.',
      badge: 'Core',
    },
    {
      icon: 'Zap',
      title: 'Real-time Inference',
      description:
        'Deploy models with lightning-fast inference speeds and auto-scaling capabilities for production workloads.',
      badge: 'Performance',
    },
    {
      icon: 'Shield',
      title: 'Enterprise Security',
      description:
        'Bank-grade security with end-to-end encryption, compliance certifications, and private cloud deployment options.',
      badge: 'Security',
    },
    {
      icon: 'Code',
      title: 'Developer Tools',
      description:
        'Comprehensive SDK, REST APIs, and integrations with popular ML frameworks like TensorFlow and PyTorch.',
      badge: 'Developer',
    },
    {
      icon: 'BarChart3',
      title: 'Analytics & Monitoring',
      description:
        'Track model performance, data drift, and system metrics with real-time dashboards and alerting.',
      badge: 'Insights',
    },
    {
      icon: 'Rocket',
      title: 'One-Click Deployment',
      description:
        'Deploy models to production with a single click. Support for containerization and serverless architectures.',
      badge: 'Deployment',
    },
  ],
} as const;

type FeaturesProps = Partial<typeof DEFAULT_FEATURES>;

export default function Features(props: FeaturesProps) {
  const config = { ...DEFAULT_FEATURES, ...props };
  const navigate = useSmartNavigation();

  const getIcon = (iconName: string) => {
    const icons = {
      Brain,
      Zap,
      Shield,
      Code,
      BarChart3,
      Rocket,
    };
    const IconComponent = icons[iconName as keyof typeof icons] || Brain;
    return <IconComponent className="h-8 w-8" />;
  };

  const handleCTAClick = () => {
    navigate(config.ctaHref);
  };

  return (
    <section id="features" className="bg-background text-foreground py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span data-editable="sectionTitle">{config.sectionTitle}</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            <span data-editable="sectionSubtitle">{config.sectionSubtitle}</span>
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {config.features.map((feature, idx) => (
            <Card
              key={idx}
              className="bg-card text-card-foreground border-border hover:shadow-lg transition-all duration-300 group"
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-primary text-primary-foreground p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    {getIcon(feature.icon)}
                  </div>
                  <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                    <span data-editable={`features[${idx}].badge`}>{feature.badge}</span>
                  </Badge>
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  <span data-editable={`features[${idx}].title`}>{feature.title}</span>
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  <span data-editable={`features[${idx}].description`}>{feature.description}</span>
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 sm:p-12 max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Ready to accelerate your AI development?
            </h3>
            <p className="text-primary-foreground/90 mb-8 text-lg">
              Join thousands of developers building the future with our AI platform.
            </p>
            <Button
              size="lg"
              onClick={handleCTAClick}
              data-editable-href="ctaHref"
              data-href={config.ctaHref}
              className="bg-background text-foreground hover:bg-background/90 font-semibold px-8 py-3"
            >
              <span data-editable="ctaText">{config.ctaText}</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
