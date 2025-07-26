import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Check, Star, Users, Zap, Shield, Headphones } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  const creatorPlans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for new creators just getting started",
      features: [
        "Up to 100 subscribers",
        "5GB storage",
        "Basic analytics",
        "Email support",
        "Mobile app access",
        "Standard payout (7 days)"
      ],
      limitations: [
        "10% platform fee",
        "Limited customization",
        "No priority support"
      ],
      popular: false,
      buttonText: "Start Free",
      buttonVariant: "outline" as const
    },
    {
      name: "Pro",
      price: "$29",
      period: "/month",
      description: "For growing creators ready to scale their business",
      features: [
        "Up to 10K subscribers",
        "100GB storage",
        "Advanced analytics",
        "Priority email support",
        "Custom branding",
        "Fast payout (3 days)",
        "Live streaming tools",
        "Subscriber management"
      ],
      limitations: [
        "5% platform fee"
      ],
      popular: true,
      buttonText: "Start Pro Trial",
      buttonVariant: "default" as const
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      description: "For established creators with large audiences",
      features: [
        "Unlimited subscribers",
        "1TB storage",
        "White-label platform",
        "24/7 phone support",
        "Custom integrations",
        "Instant payouts",
        "Advanced live streaming",
        "Dedicated account manager",
        "API access",
        "Custom analytics"
      ],
      limitations: [
        "2% platform fee"
      ],
      popular: false,
      buttonText: "Contact Sales",
      buttonVariant: "outline" as const
    }
  ]

  const fanFeatures = [
    {
      icon: Heart,
      title: "Support Your Favorite Creators",
      description: "Directly support creators you love with monthly subscriptions"
    },
    {
      icon: Star,
      title: "Exclusive Content",
      description: "Access premium content, behind-the-scenes material, and creator interactions"
    },
    {
      icon: Users,
      title: "Community Access",
      description: "Join exclusive communities and connect with other fans"
    },
    {
      icon: Zap,
      title: "Early Access",
      description: "Get early access to new content and special releases"
    }
  ]

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Header */}
      <header className="border-b bg-white dark:bg-zinc-900 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Heart className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold text-zinc-900 dark:text-zinc-100">BellaAmour</span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link href="/discover" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
              Discover
            </Link>
            <Link href="/pricing" className="text-purple-600 font-medium">
              Pricing
            </Link>
            <Link href="/how-it-works" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
              How it Works
            </Link>
          </div>

          <div className="flex items-center space-x-3">
            <Button variant="ghost" asChild>
              <Link href="/auth/signin">Sign In</Link>
            </Button>
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600" asChild>
              <Link href="/auth/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-3xl mx-auto">
            Choose the perfect plan to start your creator journey or support your favorite creators.
            No hidden fees, cancel anytime.
          </p>
        </div>

        {/* Creator Pricing */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
              Creator Plans
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Start creating and earning with plans that grow with your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {creatorPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-purple-500 border-2' : 'border-zinc-200 dark:border-zinc-800'}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="flex items-center justify-center gap-1 my-4">
                    <span className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">{plan.price}</span>
                    {plan.period && <span className="text-zinc-600 dark:text-zinc-400">{plan.period}</span>}
                  </div>
                  <CardDescription className="text-center">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-zinc-700 dark:text-zinc-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {plan.limitations.length > 0 && (
                    <div className="mb-6">
                      <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-2">Note:</p>
                      <ul className="space-y-1">
                        {plan.limitations.map((limitation, limitIndex) => (
                          <li key={limitIndex} className="text-sm text-zinc-500 dark:text-zinc-400">
                            • {limitation}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <Button
                    className={`w-full ${plan.popular ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600' : ''}`}
                    variant={plan.buttonVariant}
                    asChild
                  >
                    <Link href="/auth/signup">{plan.buttonText}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Fan Benefits */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
              For Fans
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Support creators and get exclusive access to premium content
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {fanFeatures.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card key={index} className="text-center border-zinc-200 dark:border-zinc-800">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zinc-600 dark:text-zinc-400">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Card className="max-w-md mx-auto border-zinc-200 dark:border-zinc-800">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Fan Subscriptions</CardTitle>
                <CardDescription>
                  Subscribe to individual creators starting from
                </CardDescription>
                <div className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 my-4">
                  $4.99<span className="text-lg text-zinc-600 dark:text-zinc-400">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6 text-left">
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Exclusive content access</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Direct creator messaging</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Community access</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Cancel anytime</span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600" asChild>
                  <Link href="/discover">Browse Creators</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How do payouts work?",
                answer: "Creators receive payouts based on their plan. Starter: 7 days, Pro: 3 days, Enterprise: instant. All payouts are processed securely through our payment partners."
              },
              {
                question: "Can I change my plan anytime?",
                answer: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect at your next billing cycle."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, PayPal, and bank transfers. Payments are processed securely and your information is never stored."
              },
              {
                question: "Is there a free trial?",
                answer: "Yes! Pro and Enterprise plans come with a 14-day free trial. No credit card required to start."
              },
              {
                question: "How does the platform fee work?",
                answer: "Platform fees are deducted from your earnings: Starter 10%, Pro 5%, Enterprise 2%. This covers hosting, payment processing, and platform maintenance."
              },
              {
                question: "Can I cancel anytime?",
                answer: "Absolutely! Both creators and fans can cancel their subscriptions at any time. No long-term contracts or cancellation fees."
              }
            ].map((faq, index) => (
              <Card key={index} className="border-zinc-200 dark:border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-600 dark:text-zinc-400">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center py-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of creators already building sustainable income streams on BellaAmour.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-zinc-100 px-8 py-4 text-lg" asChild>
              <Link href="/auth/signup">Start Creating</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg" asChild>
              <Link href="/discover">Browse Creators</Link>
            </Button>
          </div>
        </div>

        {/* Support */}
        <div className="text-center mt-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Headphones className="w-5 h-5 text-zinc-600" />
            <span className="text-zinc-600 dark:text-zinc-400">Need help choosing a plan?</span>
          </div>
          <Button variant="outline" asChild>
            <Link href="/contact">Contact Our Team</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
