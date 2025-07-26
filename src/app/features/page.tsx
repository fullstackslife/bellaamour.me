import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  Users,
  DollarSign,
  Shield,
  Zap,
  Star,
  Upload,
  BarChart3,
  MessageCircle,
  Video,
  Image,
  FileText,
  Headphones,
  Download,
  Globe,
  Smartphone,
  Lock,
  CreditCard,
  Clock,
  Bell,
  Search,
  Filter,
  Bookmark,
  Share2,
  Camera,
  Play,
  Mic
} from "lucide-react"
import Link from "next/link"

export default function FeaturesPage() {
  const creatorFeatures = [
    {
      title: "Content Management",
      description: "Professional tools for creating, organizing, and publishing your content",
      icon: Upload,
      features: [
        "Multiple content types (video, audio, images, text)",
        "Bulk upload and scheduling",
        "Content organization and tagging",
        "Draft and preview modes",
        "Version control and history"
      ]
    },
    {
      title: "Subscriber Analytics",
      description: "Detailed insights into your audience and content performance",
      icon: BarChart3,
      features: [
        "Real-time subscriber count",
        "Revenue tracking and forecasting",
        "Content engagement metrics",
        "Audience demographics",
        "Growth trends and patterns"
      ]
    },
    {
      title: "Revenue Management",
      description: "Flexible pricing and multiple income streams",
      icon: DollarSign,
      features: [
        "Multiple subscription tiers",
        "Pay-per-view content",
        "Tips and donations",
        "Promotional pricing",
        "Revenue sharing options"
      ]
    },
    {
      title: "Fan Engagement",
      description: "Build meaningful relationships with your audience",
      icon: MessageCircle,
      features: [
        "Direct messaging system",
        "Live streaming capabilities",
        "Community features",
        "Q&A sessions",
        "Fan polls and surveys"
      ]
    }
  ]

  const fanFeatures = [
    {
      title: "Content Discovery",
      description: "Find creators and content that match your interests",
      icon: Search,
      features: [
        "Advanced search and filters",
        "Category browsing",
        "Personalized recommendations",
        "Trending content",
        "Creator verification badges"
      ]
    },
    {
      title: "Subscription Management",
      description: "Easy-to-manage subscriptions with flexible options",
      icon: CreditCard,
      features: [
        "Multiple subscription tiers",
        "Cancel anytime",
        "Pause subscriptions",
        "Billing management",
        "Payment history"
      ]
    },
    {
      title: "Content Access",
      description: "Seamless content consumption across all devices",
      icon: Play,
      features: [
        "Unlimited streaming",
        "Offline downloads",
        "Watch history",
        "Bookmarking and favorites",
        "Content sharing"
      ]
    },
    {
      title: "Creator Interaction",
      description: "Connect directly with your favorite creators",
      icon: Heart,
      features: [
        "Direct messaging",
        "Live chat during streams",
        "Exclusive events access",
        "Priority support",
        "Special recognition"
      ]
    }
  ]

  const contentTypes = [
    {
      title: "Video Content",
      description: "HD video streaming with professional playback controls",
      icon: Video,
      features: ["4K video support", "Adaptive streaming", "Subtitles/captions", "Playback speed control"]
    },
    {
      title: "Live Streaming",
      description: "Real-time streaming with interactive features",
      icon: Camera,
      features: ["HD live streaming", "Chat integration", "Recording options", "Multi-platform streaming"]
    },
    {
      title: "Audio Content",
      description: "High-quality audio content and podcasting",
      icon: Headphones,
      features: ["Lossless audio quality", "Podcast management", "Audio waveforms", "Background playback"]
    },
    {
      title: "Photos & Galleries",
      description: "Beautiful photo galleries and image sharing",
      icon: Image,
      features: ["High-resolution images", "Gallery organization", "Slideshow mode", "Image protection"]
    },
    {
      title: "Written Content",
      description: "Rich text articles and blog posts",
      icon: FileText,
      features: ["Rich text editor", "Markdown support", "Media embedding", "Reading time estimates"]
    },
    {
      title: "Audio Experiences",
      description: "Immersive audio content and voice messages",
      icon: Mic,
      features: ["Voice messages", "Audio stories", "Sound effects", "Audio quality optimization"]
    }
  ]

  const securityFeatures = [
    {
      title: "Content Protection",
      description: "Advanced security to protect creator intellectual property",
      icon: Shield,
      features: [
        "Digital watermarking",
        "Download protection",
        "Screenshot blocking",
        "Piracy detection",
        "DMCA protection"
      ]
    },
    {
      title: "Payment Security",
      description: "Bank-level security for all financial transactions",
      icon: Lock,
      features: [
        "SSL encryption",
        "PCI DSS compliance",
        "Fraud detection",
        "Secure payment processing",
        "Identity verification"
      ]
    },
    {
      title: "Privacy Controls",
      description: "Complete control over your data and privacy",
      icon: Globe,
      features: [
        "GDPR compliance",
        "Data portability",
        "Privacy settings",
        "Anonymous browsing",
        "Account deletion"
      ]
    },
    {
      title: "Platform Security",
      description: "Enterprise-grade infrastructure and monitoring",
      icon: Zap,
      features: [
        "99.9% uptime guarantee",
        "DDoS protection",
        "Regular security audits",
        "Data backup",
        "24/7 monitoring"
      ]
    }
  ]

  const platformFeatures = [
    {
      title: "Mobile Optimized",
      description: "Full-featured mobile experience",
      icon: Smartphone,
      badge: "Available Now"
    },
    {
      title: "Real-time Notifications",
      description: "Stay updated with instant notifications",
      icon: Bell,
      badge: "Available Now"
    },
    {
      title: "Advanced Search",
      description: "Powerful search and discovery tools",
      icon: Filter,
      badge: "Available Now"
    },
    {
      title: "Analytics Dashboard",
      description: "Comprehensive analytics and insights",
      icon: BarChart3,
      badge: "Available Now"
    },
    {
      title: "API Access",
      description: "Developer tools and integrations",
      icon: Globe,
      badge: "Coming Soon"
    },
    {
      title: "Mobile Apps",
      description: "Native iOS and Android applications",
      icon: Download,
      badge: "Coming Soon"
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
            <Link href="/how-it-works" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
              How it Works
            </Link>
            <Link href="/features" className="text-purple-600 font-medium">
              Features
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
            Powerful Features for Creators & Fans
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-3xl mx-auto">
            Everything you need to build, grow, and monetize your creator business or support your favorite creators.
          </p>
        </div>

        {/* Creator Features */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
              For Creators
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Professional tools to build and grow your creator business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {creatorFeatures.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card key={index} className="border-zinc-200 dark:border-zinc-800">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                        <CardDescription>{feature.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.features.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-zinc-600 dark:text-zinc-400">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Fan Features */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
              For Fans
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Discover, support, and engage with your favorite creators
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {fanFeatures.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card key={index} className="border-zinc-200 dark:border-zinc-800">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                        <CardDescription>{feature.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.features.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-zinc-600 dark:text-zinc-400">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Content Types */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
              Content Types
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Support for all types of creative content
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentTypes.map((type, index) => {
              const IconComponent = type.icon
              return (
                <Card key={index} className="border-zinc-200 dark:border-zinc-800">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-lg">{type.title}</CardTitle>
                    <CardDescription>{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1">
                      {type.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-zinc-600 dark:text-zinc-400 flex items-center">
                          <div className="w-1 h-1 bg-green-500 rounded-full mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Security & Privacy */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
              Security & Privacy
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Enterprise-grade security protecting creators and fans
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityFeatures.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card key={index} className="border-zinc-200 dark:border-zinc-800">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                        <CardDescription>{feature.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.features.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-zinc-600 dark:text-zinc-400">
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Platform Features */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
              Platform Features
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Built for the modern creator economy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformFeatures.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card key={index} className="border-zinc-200 dark:border-zinc-800">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                      <Badge variant={feature.badge === "Available Now" ? "default" : "secondary"}>
                        {feature.badge}
                      </Badge>
                    </div>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center py-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Experience All Features?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join BellaAmour today and access all these powerful features to grow your creator business or support your favorite creators.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-zinc-100 px-8 py-4 text-lg" asChild>
              <Link href="/auth/signup">Get Started Free</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg" asChild>
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
