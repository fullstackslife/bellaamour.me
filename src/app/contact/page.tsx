"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Headphones,
  Shield,
  HelpCircle,
  User,
  Building,
  Zap
} from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "general",
    message: ""
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))

    setSubmitted(true)
    setIsSubmitting(false)
    setFormData({
      name: "",
      email: "",
      subject: "",
      category: "general",
      message: ""
    })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactMethods = [
    {
      title: "Email Support",
      description: "Get help via email within 24 hours",
      icon: Mail,
      contact: "support@bellaamour.me",
      availability: "24/7"
    },
    {
      title: "Live Chat",
      description: "Chat with our support team in real-time",
      icon: MessageSquare,
      contact: "Available in app",
      availability: "9 AM - 6 PM PST"
    },
    {
      title: "Phone Support",
      description: "Speak directly with our support team",
      icon: Phone,
      contact: "+1 (555) 123-4567",
      availability: "Business hours"
    },
    {
      title: "Help Center",
      description: "Browse our comprehensive help articles",
      icon: HelpCircle,
      contact: "Self-service",
      availability: "24/7"
    }
  ]

  const supportCategories = [
    {
      title: "Account Support",
      description: "Login issues, account settings, billing questions",
      icon: User,
      responseTime: "< 4 hours"
    },
    {
      title: "Creator Support",
      description: "Content uploads, monetization, analytics",
      icon: Building,
      responseTime: "< 2 hours"
    },
    {
      title: "Technical Issues",
      description: "Platform bugs, performance issues, feature requests",
      icon: Zap,
      responseTime: "< 1 hour"
    },
    {
      title: "Security & Privacy",
      description: "Security concerns, privacy questions, abuse reports",
      icon: Shield,
      responseTime: "< 30 minutes"
    }
  ]

  const officeLocations = [
    {
      city: "San Francisco",
      address: "123 Creator Street, Suite 100",
      postal: "San Francisco, CA 94105",
      type: "Headquarters"
    },
    {
      city: "New York",
      address: "456 Innovation Ave, Floor 15",
      postal: "New York, NY 10001",
      type: "East Coast Office"
    },
    {
      city: "London",
      address: "789 Digital Lane, Level 3",
      postal: "London, UK EC1A 1BB",
      type: "European Office"
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
            <Link href="/help" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
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
          <h1 className="text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-3xl mx-auto">
            Have questions? Need help? Want to provide feedback? We're here to help you succeed on BellaAmour.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Badge className="bg-green-500 text-white">
              <Clock className="w-3 h-3 mr-1" />
              Average response: 2 hours
            </Badge>
            <Badge className="bg-blue-500 text-white">
              <Headphones className="w-3 h-3 mr-1" />
              24/7 Support
            </Badge>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
              Ways to Reach Us
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Choose the method that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon
              return (
                <Card key={index} className="border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-lg">{method.title}</CardTitle>
                    <CardDescription>{method.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="font-medium text-zinc-900 dark:text-zinc-100 mb-1">{method.contact}</p>
                    <p className="text-sm text-zinc-500">{method.availability}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Contact Form and Support Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-zinc-200 dark:border-zinc-800">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                      Thank you for contacting us. We'll get back to you within 24 hours.
                    </p>
                    <Button onClick={() => setSubmitted(false)} variant="outline">
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-zinc-200 dark:border-zinc-700 rounded-md bg-white dark:bg-zinc-800"
                        required
                      >
                        <option value="general">General Inquiry</option>
                        <option value="account">Account Support</option>
                        <option value="creator">Creator Support</option>
                        <option value="technical">Technical Issue</option>
                        <option value="security">Security & Privacy</option>
                        <option value="billing">Billing Question</option>
                        <option value="feedback">Feedback</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Brief description of your inquiry"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Please provide as much detail as possible..."
                        className="w-full px-3 py-2 border border-zinc-200 dark:border-zinc-700 rounded-md bg-white dark:bg-zinc-800 min-h-[120px]"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Support Categories */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Support Categories</h3>
            {supportCategories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <Card key={index} className="border-zinc-200 dark:border-zinc-800">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{category.title}</CardTitle>
                        <Badge className="bg-green-500 text-white text-xs">
                          {category.responseTime}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">{category.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Office Locations */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
              Our Offices
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              BellaAmour offices around the world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {officeLocations.map((office, index) => (
              <Card key={index} className="border-zinc-200 dark:border-zinc-800">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{office.city}</CardTitle>
                  <Badge variant="secondary">{office.type}</Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-zinc-600 dark:text-zinc-400">{office.address}</p>
                  <p className="text-zinc-600 dark:text-zinc-400">{office.postal}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Quick Links */}
        <div className="mb-20">
          <Card className="border-zinc-200 dark:border-zinc-800">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Need Quick Answers?</CardTitle>
              <CardDescription>
                Check out our most popular help articles
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "How to set up your creator profile",
                  "Understanding subscription tiers",
                  "Payment and billing information",
                  "Content upload guidelines",
                  "Account security settings",
                  "Creator payout schedules"
                ].map((article, index) => (
                  <Link key={index} href="/help" className="flex items-center p-3 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                    <HelpCircle className="w-4 h-4 text-purple-500 mr-3 flex-shrink-0" />
                    <span className="text-zinc-900 dark:text-zinc-100">{article}</span>
                  </Link>
                ))}
              </div>
              <div className="text-center mt-6">
                <Button variant="outline" asChild>
                  <Link href="/help">Visit Help Center</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center py-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of creators and fans who are already building amazing communities on BellaAmour.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-zinc-100 px-8 py-4 text-lg" asChild>
              <Link href="/auth/signup">Create Account</Link>
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
