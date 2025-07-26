import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Heart,
  Users,
  MessageCircle,
  Star,
  Calendar,
  Trophy,
  Zap,
  Globe,
  Camera,
  Palette,
  Dumbbell,
  ChefHat,
  Music,
  Book,
  Shield
} from "lucide-react"
import Link from "next/link"

export default function CommunityPage() {
  const communityStats = [
    { label: "Active Creators", value: "10,000+", icon: Users },
    { label: "Happy Subscribers", value: "500,000+", icon: Heart },
    { label: "Monthly Posts", value: "1.2M+", icon: MessageCircle },
    { label: "Community Events", value: "150+", icon: Calendar }
  ]

  const featuredCreators = [
    {
      name: "Sarah Chen",
      category: "Fitness",
      avatar: "SC",
      subscribers: "12.5K",
      achievement: "Top Creator 2024",
      quote: "BellaAmour has given me the freedom to create content I'm passionate about while building a sustainable income."
    },
    {
      name: "Alex Rivera",
      category: "Art",
      avatar: "AR",
      subscribers: "8.3K",
      achievement: "Rising Star",
      quote: "The community here is incredible. My fans are genuinely interested in my art journey and growth."
    },
    {
      name: "Maya Patel",
      category: "Cooking",
      avatar: "MP",
      subscribers: "15.2K",
      achievement: "Community Choice",
      quote: "I love how BellaAmour lets me share my recipes and connect with food lovers from around the world."
    }
  ]

  const communityHighlights = [
    {
      title: "Creator Success Stories",
      description: "Inspiring journeys from creators who've built thriving businesses",
      icon: Trophy,
      count: "500+"
    },
    {
      title: "Community Events",
      description: "Virtual meetups, workshops, and collaborative sessions",
      icon: Calendar,
      count: "Weekly"
    },
    {
      title: "Creator Support Groups",
      description: "Peer-to-peer support and mentorship programs",
      icon: Users,
      count: "50+ Groups"
    },
    {
      title: "Fan Communities",
      description: "Dedicated spaces for fans to connect and share",
      icon: Heart,
      count: "200+ Communities"
    }
  ]

  const categoryGroups = [
    { name: "Fitness & Wellness", icon: Dumbbell, members: "45K", color: "from-green-500 to-emerald-500" },
    { name: "Art & Design", icon: Palette, members: "32K", color: "from-purple-500 to-pink-500" },
    { name: "Cooking & Food", icon: ChefHat, members: "28K", color: "from-orange-500 to-red-500" },
    { name: "Music & Audio", icon: Music, members: "38K", color: "from-blue-500 to-cyan-500" },
    { name: "Education", icon: Book, members: "41K", color: "from-indigo-500 to-purple-500" },
    { name: "Photography", icon: Camera, members: "25K", color: "from-pink-500 to-rose-500" }
  ]

  const upcomingEvents = [
    {
      title: "Creator Masterclass: Building Your Brand",
      date: "Feb 15, 2025",
      time: "2:00 PM PST",
      attendees: 500,
      type: "Workshop"
    },
    {
      title: "Community Showcase: Art & Design",
      date: "Feb 20, 2025",
      time: "6:00 PM PST",
      attendees: 300,
      type: "Showcase"
    },
    {
      title: "Fan Meet & Greet with Top Creators",
      date: "Feb 25, 2025",
      time: "7:00 PM PST",
      attendees: 800,
      type: "Social"
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
            <Link href="/community" className="text-purple-600 font-medium">
              Community
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
          <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Users className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
            Join Our Amazing Community
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-3xl mx-auto">
            Connect with creators and fans from around the world. Share experiences, learn from each other,
            and be part of something bigger than yourself.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {communityStats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <Card key={index} className="text-center border-zinc-200 dark:border-zinc-800">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{stat.value}</CardTitle>
                  <CardDescription>{stat.label}</CardDescription>
                </CardHeader>
              </Card>
            )
          })}
        </div>

        {/* Featured Creator Stories */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
              Creator Success Stories
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Real stories from creators who've found success on BellaAmour
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCreators.map((creator, index) => (
              <Card key={index} className="border-zinc-200 dark:border-zinc-800">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white text-lg">
                        {creator.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{creator.name}</CardTitle>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">{creator.category}</Badge>
                        <Badge className="bg-yellow-500 text-white">{creator.achievement}</Badge>
                      </div>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                        {creator.subscribers} subscribers
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-zinc-600 dark:text-zinc-400 italic">
                    "{creator.quote}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Community Highlights */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
              Community Highlights
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Discover what makes our community special
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityHighlights.map((highlight, index) => {
              const IconComponent = highlight.icon
              return (
                <Card key={index} className="border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-lg">{highlight.title}</CardTitle>
                    <Badge className="bg-green-500 text-white">{highlight.count}</Badge>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm">{highlight.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Category Communities */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
              Category Communities
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Find your tribe in specialized creator communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryGroups.map((group, index) => {
              const IconComponent = group.icon
              return (
                <Card key={index} className="border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${group.color} rounded-lg flex items-center justify-center`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{group.name}</CardTitle>
                        <p className="text-zinc-600 dark:text-zinc-400">{group.members} members</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">Join Community</Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
              Upcoming Events
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Join our community events and connect with fellow creators and fans
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="border-zinc-200 dark:border-zinc-800">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className={
                      event.type === "Workshop" ? "bg-blue-500" :
                      event.type === "Showcase" ? "bg-purple-500" :
                      "bg-green-500"
                    }>
                      {event.type}
                    </Badge>
                    <div className="text-right text-sm text-zinc-600 dark:text-zinc-400">
                      <p>{event.date}</p>
                      <p>{event.time}</p>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                    <Users className="w-4 h-4" />
                    <span>{event.attendees} registered</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">Register Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Community Guidelines */}
        <div className="mb-20">
          <Card className="border-zinc-200 dark:border-zinc-800">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl">Community Guidelines</CardTitle>
              <CardDescription>
                Help us maintain a positive and inclusive environment for everyone
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3 text-green-600">✅ Do:</h3>
                  <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                    <li>• Be respectful and kind to all community members</li>
                    <li>• Share constructive feedback and support</li>
                    <li>• Respect intellectual property and content rights</li>
                    <li>• Follow platform terms and conditions</li>
                    <li>• Report inappropriate behavior or content</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-red-600">❌ Don't:</h3>
                  <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                    <li>• Engage in harassment, bullying, or hate speech</li>
                    <li>• Share personal information without consent</li>
                    <li>• Spam or engage in deceptive practices</li>
                    <li>• Share inappropriate or illegal content</li>
                    <li>• Violate others' privacy or intellectual property</li>
                  </ul>
                </div>
              </div>
              <div className="text-center mt-6">
                <Button variant="outline" asChild>
                  <Link href="/terms">Read Full Guidelines</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center py-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl">
          <Users className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Become part of a supportive community where creators and fans connect,
            learn, and grow together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-zinc-100 px-8 py-4 text-lg" asChild>
              <Link href="/auth/signup">Join BellaAmour</Link>
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
