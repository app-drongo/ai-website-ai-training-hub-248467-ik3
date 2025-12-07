'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Zap, Users, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_HERO = {
  title: 'Train, Deploy, and Scale AI Models with Confidence',
  subtitle:
    'The comprehensive super app for AI developers. From data preprocessing to model deployment, streamline your entire machine learning workflow in one powerful platform.',
  ctaText: 'Start Building',
  ctaHref: '/signup',
  secondaryCtaText: 'View Demo',
  secondaryCtaHref: '/demo',
  heroImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
  heroImageAlt: 'AI technology and neural networks visualization',
  metrics: [
    { label: 'Models Trained', value: '50K+', icon: 'zap' },
    { label: 'Active Developers', value: '10K+', icon: 'users' },
    { label: 'Success Rate', value: '99.9%', icon: 'trending' },
  ],
  features: [
    'End-to-end ML pipeline automation',
    'Real-time model monitoring',
    'Collaborative development environment',
  ],
  announcement: 'New: AutoML capabilities now available',
} as const;

type HeroProps = Partial<typeof DEFAULT_HERO>;

export default function Hero(props: HeroProps) {
  const config = { ...DEFAULT_HERO, ...props };
  const navigate = useSmartNavigation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handlePrimaryClick = () => {
    navigate(config.ctaHref);
  };

  const handleSecondaryClick = () => {
    navigate(config.secondaryCtaHref);
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'zap':
        return <Zap className="h-5 w-5" />;
      case 'users':
        return <Users className="h-5 w-5" />;
      case 'trending':
        return <TrendingUp className="h-5 w-5" />;
      default:
        return <Zap className="h-5 w-5" />;
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-background text-foreground overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Announcement Badge */}
            <div
              className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <Badge
                variant="secondary"
                className="bg-primary/20 text-primary border-primary/30 px-6 py-3 backdrop-blur-md shadow-lg hover:bg-primary/30 transition-colors"
              >
                <span data-editable="announcement">{config.announcement}</span>
              </Badge>
            </div>

            {/* Main Heading */}
            <div
              className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground leading-tight">
                <span
                  data-editable="title"
                  className="bg-gradient-to-br from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent"
                >
                  {config.title}
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <div
              className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed font-medium">
                <span data-editable="subtitle">{config.subtitle}</span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <div className="flex flex-col sm:flex-row gap-6">
                <Button
                  size="lg"
                  onClick={handlePrimaryClick}
                  data-editable-href="ctaHref"
                  data-href={config.ctaHref}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-bold group shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105"
                >
                  <span data-editable="ctaText">{config.ctaText}</span>
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleSecondaryClick}
                  data-editable-href="secondaryCtaHref"
                  data-href={config.secondaryCtaHref}
                  className="px-8 py-6 text-lg font-bold border-2 border-border hover:bg-accent hover:text-accent-foreground shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <span data-editable="secondaryCtaText">{config.secondaryCtaText}</span>
                </Button>
              </div>
            </div>

            {/* Feature List */}
            <div
              className={`transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <div className="space-y-3">
                {config.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-4 animate-pulse"></div>
                    <span data-editable={`features[${idx}]`} className="font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div
            className={`transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl transform rotate-6"></div>
              <Image
                src={config.heroImage}
                alt={config.heroImageAlt}
                data-editable-src="heroImage"
                width={800}
                height={600}
                className="relative z-10 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105"
                priority
              />
            </div>
          </div>
        </div>

        {/* Metrics Cards */}
        <div
          className={`mt-20 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {config.metrics.map((metric, idx) => (
              <Card
                key={idx}
                className="bg-card text-card-foreground border-border hover:bg-accent/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                    {getIcon(metric.icon)}
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold mb-2 text-foreground">
                    <span data-editable={`metrics[${idx}].value`}>{metric.value}</span>
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    <span data-editable={`metrics[${idx}].label`}>{metric.label}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
