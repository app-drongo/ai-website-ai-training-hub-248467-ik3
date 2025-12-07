'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_FOOTER = {
  brandName: 'AI Training Hub',
  brandDescription: 'Accelerate your AI journey with comprehensive training and development tools',
  companyLinks: [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '/careers' },
  ],
  legalLinks: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
  socialLinks: [
    { icon: 'Github', href: 'https://github.com', label: 'GitHub' },
    { icon: 'Twitter', href: 'https://twitter.com', label: 'Twitter' },
    { icon: 'Linkedin', href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: 'Mail', href: 'mailto:contact@aitraininghub.com', label: 'Email' },
  ],
  copyrightText: '© 2024 AI Training Hub. All rights reserved.',
  ctaTitle: 'Ready to accelerate your AI journey?',
  ctaDescription: 'Join thousands of developers and researchers advancing their AI skills.',
  ctaText: 'Get Started Today',
  ctaHref: '/signup',
} as const;

type FooterProps = Partial<typeof DEFAULT_FOOTER>;

export default function Footer(props: FooterProps) {
  const config = { ...DEFAULT_FOOTER, ...props };
  const navigate = useSmartNavigation();

  const handleNavigation = (href: string) => {
    if (href.startsWith('http') || href.startsWith('mailto:')) {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else {
      navigate(href);
    }
  };

  const renderSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Github':
        return <Github className="h-5 w-5" />;
      case 'Twitter':
        return <Twitter className="h-5 w-5" />;
      case 'Linkedin':
        return <Linkedin className="h-5 w-5" />;
      case 'Mail':
        return <Mail className="h-5 w-5" />;
      default:
        return <Github className="h-5 w-5" />;
    }
  };

  return (
    <footer id="footer" className="bg-background text-foreground border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Section */}
        <div className="py-16 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span data-editable="ctaTitle">{config.ctaTitle}</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              <span data-editable="ctaDescription">{config.ctaDescription}</span>
            </p>
            <Button
              size="lg"
              onClick={() => handleNavigation(config.ctaHref)}
              data-editable-href="ctaHref"
              data-href={config.ctaHref}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <span data-editable="ctaText">{config.ctaText}</span>
            </Button>
          </div>
        </div>

        <Separator className="bg-border" />

        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <h3 className="text-xl font-bold mb-4">
                <span data-editable="brandName">{config.brandName}</span>
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                <span data-editable="brandDescription">{config.brandDescription}</span>
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {config.socialLinks.map((social, idx) => (
                  <Button
                    key={idx}
                    variant="ghost"
                    size="sm"
                    onClick={() => handleNavigation(social.href)}
                    data-editable-href={`socialLinks[${idx}].href`}
                    data-href={social.href}
                    className="h-10 w-10 p-0 hover:bg-accent hover:text-accent-foreground"
                    aria-label={social.label}
                  >
                    {renderSocialIcon(social.icon)}
                  </Button>
                ))}
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Company</h4>
              <ul className="space-y-3">
                {config.companyLinks.map((link, idx) => (
                  <li key={idx}>
                    <Button
                      variant="ghost"
                      onClick={() => handleNavigation(link.href)}
                      data-editable-href={`companyLinks[${idx}].href`}
                      data-href={link.href}
                      className="h-auto p-0 text-muted-foreground hover:text-foreground hover:bg-transparent"
                    >
                      <span data-editable={`companyLinks[${idx}].label`}>{link.label}</span>
                    </Button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
              <ul className="space-y-3">
                {config.legalLinks.map((link, idx) => (
                  <li key={idx}>
                    <Button
                      variant="ghost"
                      onClick={() => handleNavigation(link.href)}
                      data-editable-href={`legalLinks[${idx}].href`}
                      data-href={link.href}
                      className="h-auto p-0 text-muted-foreground hover:text-foreground hover:bg-transparent"
                    >
                      <span data-editable={`legalLinks[${idx}].label`}>{link.label}</span>
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Separator className="bg-border" />

        {/* Copyright */}
        <div className="py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              <span data-editable="copyrightText">{config.copyrightText}</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
