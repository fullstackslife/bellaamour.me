"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  Search,
  ChevronDown,
  ChevronRight,
  Book,
  User,
  CreditCard,
  Shield,
  Upload,
  MessageCircle,
  Settings,
  HelpCircle,
  Star,
  Clock,
  CheckCircle
} from "lucide-react"
import Link from "next/link"

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const helpCategories = [
    {
      title: "Getting Started",
      description: "Learn the basics of using BellaAmour",
      icon: Book,
      articles: 12,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Account Management",
      description: "Manage your profile, settings, and preferences",
      icon: User,
      articles: 8,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Payments & Billing",
      description: "Subscriptions, payments, and billing questions",
      icon: CreditCard,
      articles: 15,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Creator Tools",
      description: "Content creation, monetization, and analytics",
      icon: Upload,
      articles: 20,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Security & Privacy",
      description: "Account security and privacy settings",
      icon: Shield,
      articles: 6,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Community & Support",
      description: "Guidelines, reporting, and getting help",
      icon: MessageCircle,
      articles: 10,
      color: "from-indigo-500 to-purple-500"
    }
  ]

  const popularArticles = [
    {
      title: "How to create your first creator profile",
      category: "Getting Started",
      readTime: "3 min",
      views: "12.5K",
      helpful: 98
    },
    {
      title: "Setting up subscription tiers and pricing",
      category: "Creator Tools",
      readTime: "5 min",
      views: "8.3K",
      helpful: 96
    },
    {
      title: "Understanding payment schedules and fees",
      category: "Payments & Billing",
      readTime: "4 min",
      views: "15.2K",
      helpful: 94
    },
    {
      title: "How to upload and organize your content",
      category: "Creator Tools",
      readTime: "6 min",
      views: "9.7K",
      helpful: 97
    },
    {
      title: "Enabling two-factor authentication",
      category: "Security & Privacy",
      readTime: "2 min",
      views: "6.1K",
      helpful: 99
    },
    {
      title: "Managing your subscription preferences",
      category: "Account Management",
      readTime: "3 min",
      views: "11.4K",
      helpful: 95
    }
  ]

  const faqs = [
    {
      question: "How do I cancel my subscription?",
      answer: "You can cancel your subscription at any time by going to your account settings and clicking 'Manage Subscriptions'. Your access will continue until the end of your current billing period."
    },
    {
      question: "How much does BellaAmour cost?",
      answer: "BellaAmour is free to join for fans. Creator subscriptions vary by creator, typically ranging from $4.99 to $49.99 per month. Creators can also offer free content."
    },
    {
      question: "How do creators get paid?",
      answer: "Creators receive monthly payouts directly to their bank account. Payment processing time depends on your plan: Starter (7 days), Pro (3 days), Enterprise (instant)."
    },
    {
      question: "Is my content protected from piracy?",
      answer: "Yes, we use advanced content protection including digital watermarking, download prevention, and piracy detection to protect creator intellectual property."
    },
    {
      question: "Can I change my subscription tier?",
      answer: "Yes, you can upgrade or downgrade your creator plan at any time. Changes take effect at your next billing cycle, and you can also change your fan subscriptions instantly."
    },
    {
      question: "What types of content can I share?",
      answer: "You can share videos, photos, articles, audio content, live streams, and more. All content must comply with our community guidelines and terms of service."
    },
    {
      question: "How do I report inappropriate content?",
      answer: "You can report content by clicking the report button on any post or contacting our support team. We review all reports within 24 hours."
    },
    {
      question: "Is there a mobile app?",
      answer: "Our mobile app is coming soon! Currently, you can access BellaAmour through your mobile browser with full functionality."
    }
  ]

  const recentUpdates = [
    {
      title: "New Creator Analytics Dashboard",
      date: "2024-01-15",
      type: "Feature Update"
    },
    {
      title: "Improved Mobile Experience",
      date: "2024-01-10",
      type: "Enhancement"
    },
    {
      title: "Enhanced Security Features",
      date: "2024-01-05",
      type: "Security Update"
    }
  ]

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

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
            <Link href="/help" className="text-purple-600 font-medium">
              Help Center
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
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
            Help Center
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-3xl mx-auto">
            Find answers to your questions, learn how to use BellaAmour, and get the most out of your creator or fan experience.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-zinc-400" />
            <Input
              placeholder="Search for help articles, guides, and FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 text-lg"
            />
          </div>
        </div>

        {/* Help Categories */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
              Browse by Category
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Find help articles organized by topic
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {helpCategories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <Card key={index} className="border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{category.title}</CardTitle>
                      <Badge variant="secondary">{category.articles}</Badge>
                    </div>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Popular Articles */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
              Popular Articles
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Most helpful articles from our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {popularArticles.map((article, index) => (
              <Card key={index} className="border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">{article.title}</CardTitle>
                      <div className="flex items-center gap-4 text-sm text-zinc-600 dark:text-zinc-400">
                        <Badge variant="outline">{article.category}</Badge>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {article.readTime}
                        </span>
                        <span>{article.views} views</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-zinc-600 dark:text-zinc-400">{article.helpful}%</span>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Quick answers to common questions
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-zinc-200 dark:border-zinc-800">
                <CardHeader
                  className="cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                    {expandedFaq === index ? (
                      <ChevronDown className="w-5 h-5 text-zinc-500" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-zinc-500" />
                    )}
                  </div>
                </CardHeader>
                {expandedFaq === index && (
                  <CardContent className="pt-0">
                    <p className="text-zinc-600 dark:text-zinc-400">{faq.answer}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Updates */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
              Recent Updates
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Latest platform improvements and features
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-4">
            {recentUpdates.map((update, index) => (
              <Card key={index} className="border-zinc-200 dark:border-zinc-800">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">{update.title}</CardTitle>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">{update.date}</p>
                    </div>
                    <Badge className={
                      update.type === "Feature Update" ? "bg-blue-500" :
                      update.type === "Enhancement" ? "bg-green-500" :
                      "bg-red-500"
                    }>
                      {update.type}
                    </Badge>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <div className="mb-20">
          <Card className="border-zinc-200 dark:border-zinc-800">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl">Still Need Help?</CardTitle>
              <CardDescription>
                Can't find what you're looking for? Our support team is here to help.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg">
                  <MessageCircle className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                  <h3 className="font-medium">Live Chat</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">Available 9 AM - 6 PM PST</p>
                </div>
                <div className="p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg">
                  <Settings className="w-6 h-6 text-green-500 mx-auto mb-2" />
                  <h3 className="font-medium">Email Support</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">Response within 24 hours</p>
                </div>
                <div className="p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg">
                  <Book className="w-6 h-6 text-purple-500 mx-auto mb-2" />
                  <h3 className="font-medium">Community Forum</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">Get help from other users</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600" asChild>
                  <Link href="/contact">Contact Support</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/community">Visit Community</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Account Settings", description: "Manage your profile and preferences", icon: User },
            { title: "Billing & Payments", description: "View subscriptions and payment history", icon: CreditCard },
            { title: "Security Settings", description: "Update password and security options", icon: Shield },
            { title: "Creator Dashboard", description: "Access your creator tools and analytics", icon: Upload }
          ].map((action, index) => {
            const IconComponent = action.icon
            return (
              <Card key={index} className="border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-zinc-500 to-zinc-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{action.title}</CardTitle>
                  <CardDescription className="text-sm">{action.description}</CardDescription>
                </CardHeader>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}
