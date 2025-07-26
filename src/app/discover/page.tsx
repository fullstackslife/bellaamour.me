import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Heart, Users, Search, Filter, Star, Camera, Palette, Dumbbell, ChefHat, Music, Book, Gamepad2 } from "lucide-react"
import Link from "next/link"

export default function DiscoverPage() {
  const categories = [
    { name: "Fitness", icon: Dumbbell, count: "1.2K creators" },
    { name: "Art", icon: Palette, count: "850 creators" },
    { name: "Cooking", icon: ChefHat, count: "640 creators" },
    { name: "Music", icon: Music, count: "920 creators" },
    { name: "Education", icon: Book, count: "1.1K creators" },
    { name: "Gaming", icon: Gamepad2, count: "780 creators" }
  ]

  const creators = [
    {
      name: "Sarah Chen",
      category: "Fitness Coach",
      subscribers: "12.5K",
      avatar: "SC",
      description: "Helping you build strength and confidence through personalized workout plans.",
      price: "$19.99/month",
      rating: 4.9,
      verified: true
    },
    {
      name: "Alex Rivera",
      category: "Art Tutorials",
      subscribers: "8.3K",
      avatar: "AR",
      description: "Digital art techniques and traditional painting methods for all skill levels.",
      price: "$14.99/month",
      rating: 4.8,
      verified: true
    },
    {
      name: "Maya Patel",
      category: "Cooking Classes",
      subscribers: "15.2K",
      avatar: "MP",
      description: "Authentic recipes and cooking techniques from around the world.",
      price: "$24.99/month",
      rating: 4.9,
      verified: true
    },
    {
      name: "James Wilson",
      category: "Photography",
      subscribers: "9.7K",
      avatar: "JW",
      description: "Master the art of photography with professional tips and techniques.",
      price: "$16.99/month",
      rating: 4.7,
      verified: false
    },
    {
      name: "Elena Rodriguez",
      category: "Music Production",
      subscribers: "11.4K",
      avatar: "ER",
      description: "Learn music production, mixing, and mastering in your home studio.",
      price: "$22.99/month",
      rating: 4.8,
      verified: true
    },
    {
      name: "David Kim",
      category: "Language Learning",
      subscribers: "18.9K",
      avatar: "DK",
      description: "Master new languages with interactive lessons and cultural insights.",
      price: "$18.99/month",
      rating: 4.9,
      verified: true
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
            <Link href="/discover" className="text-purple-600 font-medium">
              Discover
            </Link>
            <Link href="/pricing" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
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

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
            Discover Amazing Creators
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8">
            Find creators who inspire you and subscribe to exclusive content.
          </p>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-zinc-400" />
              <Input
                placeholder="Search creators, categories, or topics..."
                className="pl-10 h-12"
              />
            </div>
            <Button variant="outline" className="h-12 px-6">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <Card key={index} className="cursor-pointer hover:shadow-lg transition-shadow border-zinc-200 dark:border-zinc-800">
                  <CardHeader className="text-center pb-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{category.name}</CardTitle>
                    <CardDescription className="text-sm">{category.count}</CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Featured Creators */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Featured Creators</h2>
            <Button variant="outline">View All</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {creators.map((creator, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-lg transition-shadow border-zinc-200 dark:border-zinc-800">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white text-lg">
                        {creator.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <CardTitle className="text-lg">{creator.name}</CardTitle>
                        {creator.verified && (
                          <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="secondary">{creator.category}</Badge>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{creator.rating}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 mt-2 text-sm text-zinc-600">
                        <Users className="w-4 h-4" />
                        {creator.subscribers} subscribers
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">
                    {creator.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                      {creator.price}
                    </div>
                    <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                      Subscribe
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Top Rated */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">Top Rated This Week</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {creators.slice(0, 4).map((creator, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white text-lg">
                      {creator.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-lg">{creator.name}</CardTitle>
                  <div className="flex items-center justify-center gap-2">
                    <Badge variant="secondary">{creator.category}</Badge>
                  </div>
                  <div className="flex items-center justify-center gap-1 mt-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{creator.rating}</span>
                    <span className="text-zinc-500">({creator.subscribers})</span>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center py-16">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
            Ready to Start Creating?
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
            Join our community of creators and start building your own subscription business today.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-8 py-4 text-lg" asChild>
            <Link href="/auth/signup">Become a Creator</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
