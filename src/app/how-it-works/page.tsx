import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, DollarSign, Upload, Star, Play, MessageCircle, TrendingUp, Camera, Shield } from "lucide-react"
import Link from "next/link"

export default function HowItWorksPage() {
  const creatorSteps = [
    {
      step: 1,
      title: "Create Your Profile",
      description: "Sign up as a creator and build your profile with photos, bio, and content categories.",
      icon: Camera,
      details: ["Choose your creator name", "Upload profile photo", "Write engaging bio", "Select your category"]
    },
    {
      step: 2,
      title: "Set Your Pricing",
      description: "Choose subscription tiers and pricing that work for your content and audience.",
      icon: DollarSign,
      details: ["Free, Basic, Premium, or VIP tiers", "Set monthly subscription prices", "Offer exclusive content per tier", "Flexible pricing options"]
    },
    {
      step: 3,
      title: "Upload Content",
      description: "Share videos, photos, articles, and live streams with your subscribers.",
      icon: Upload,
      details: ["Videos and livestreams", "Photo galleries", "Written articles", "Exclusive behind-the-scenes content"]
    },
    {
      step: 4,
      title: "Engage & Earn",
      description: "Build relationships with your fans and earn recurring revenue from subscriptions.",
      icon: TrendingUp,
      details: ["Direct messaging with fans", "Live Q&A sessions", "Community building", "Monthly recurring revenue"]
    }
  ]

  const fanSteps = [
    {
      step: 1,
      title: "Discover Creators",
      description: "Browse our diverse community of creators across all categories and interests.",
      icon: Star,
      details: ["Search by category", "Filter by price and rating", "Read creator bios", "Preview free content"]
    },
    {
      step: 2,
      title: "Subscribe",
      description: "Choose subscription tiers that fit your budget and interests.",
      icon: Heart,
      details: ["Multiple subscription options", "Cancel anytime", "Secure payment processing", "Instant access to content"]
    },
    {
      step: 3,
      title: "Enjoy Content",
      description: "Access exclusive content, participate in live streams, and engage with creators.",
      icon: Play,
      details: ["Exclusive videos and photos", "Live streaming access", "Early content previews", "Download for offline viewing"]
    },
    {
      step: 4,
      title: "Connect",
      description: "Build relationships with your favorite creators through direct messaging and community features.",
      icon: MessageCircle,
      details: ["Direct creator messaging", "Join exclusive communities", "Priority access to events", "Special fan recognition"]
    }
  ]

  const features = [
    {
      title: "Secure Payments",
      description: "All transactions are secured with industry-standard encryption and fraud protection.",
      icon: Shield
    },
    {
      title: "Mobile Optimized",
      description: "Access BellaAmour anywhere with our responsive web platform and upcoming mobile apps.",
      icon: Users
    },
    {
      title: "Creator Tools",
      description: "Professional-grade analytics, content management, and fan engagement tools.",
      icon: TrendingUp
    },
    {
      title: "Content Protection",
      description: "Advanced security measures protect creator content and subscriber privacy.",
      icon: Shield
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
            <Link href="/pricing" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
              Pricing
            </Link>
            <Link href="/how-it-works" className="text-purple-600 font-medium">
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
            How BellaAmour Works
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-3xl mx-auto">
            BellaAmour connects creators with fans through subscription-based content sharing.
            Whether you're creating or consuming content, we make it simple and rewarding.
          </p>
        </div>

        {/* For Creators Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
              For Creators
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Turn your passion into a sustainable income stream
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {creatorSteps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <Card key={index} className="relative border-zinc-200 dark:border-zinc-800">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <Badge className="absolute top-4 right-4 bg-purple-500 text-white">
                      Step {step.step}
                    </Badge>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                    <CardDescription>{step.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="text-sm text-zinc-600 dark:text-zinc-400 flex items-center">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-8 py-4 text-lg" asChild>
              <Link href="/auth/signup">Start Creating Today</Link>
            </Button>
          </div>
        </div>

        {/* For Fans Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
              For Fans
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Support your favorite creators and get exclusive content
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {fanSteps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <Card key={index} className="relative border-zinc-200 dark:border-zinc-800">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <Badge className="absolute top-4 right-4 bg-blue-500 text-white">
                      Step {step.step}
                    </Badge>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                    <CardDescription>{step.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="text-sm text-zinc-600 dark:text-zinc-400 flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 px-8 py-4 text-lg" asChild>
              <Link href="/discover">Start Exploring</Link>
            </Button>
          </div>
        </div>

        {/* Platform Features */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
              Platform Features
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Everything you need for a successful creator-fan relationship
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card key={index} className="text-center border-zinc-200 dark:border-zinc-800">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zinc-600 dark:text-zinc-400">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
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
                question: "How do I get paid as a creator?",
                answer: "Creators receive monthly payouts directly to their bank account. Payments are processed within 3-7 business days depending on your plan tier."
              },
              {
                question: "Can I cancel my subscription anytime?",
                answer: "Yes! Both creators and fans can cancel subscriptions at any time. There are no long-term contracts or cancellation fees."
              },
              {
                question: "Is my content protected?",
                answer: "We use advanced security measures to protect creator content, including watermarking, access controls, and piracy detection."
              },
              {
                question: "How do subscription tiers work?",
                answer: "Creators can offer multiple tiers (Basic, Premium, VIP) with different pricing and content access levels. Fans choose the tier that fits their budget."
              },
              {
                question: "What types of content can I share?",
                answer: "You can share videos, photos, articles, live streams, audio content, and more. All content must comply with our community guidelines."
              },
              {
                question: "How do I build my audience?",
                answer: "Use our discovery features, engage with fans through messaging, create consistent quality content, and leverage our promotional tools."
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
            Join thousands of creators and fans who are already building meaningful connections on BellaAmour.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-zinc-100 px-8 py-4 text-lg" asChild>
              <Link href="/auth/signup">Join as Creator</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg" asChild>
              <Link href="/discover">Explore Creators</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
