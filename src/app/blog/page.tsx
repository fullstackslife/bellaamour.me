import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Heart,
  Calendar,
  Clock,
  User,
  ArrowRight,
  BookOpen,
  TrendingUp,
  Star,
  MessageCircle,
  Search
} from "lucide-react"
import Link from "next/link"

export default function BlogPage() {
  const featuredPost = {
    title: "The Future of Creator Economy: Trends and Predictions for 2025",
    excerpt: "Discover the emerging trends shaping the creator economy and how BellaAmour is leading the way in empowering creators with innovative tools and features.",
    author: "BellaAmour Team",
    date: "January 20, 2025",
    readTime: "8 min read",
    category: "Industry Insights",
    image: "/blog/featured-post.jpg"
  }

  const blogPosts = [
    {
      title: "10 Tips for Growing Your Subscriber Base",
      excerpt: "Learn proven strategies to attract and retain subscribers on your creator journey.",
      author: "Sarah Chen",
      date: "January 18, 2025",
      readTime: "5 min read",
      category: "Creator Tips",
      views: "2.1K",
      comments: 23
    },
    {
      title: "Building Authentic Connections with Your Audience",
      excerpt: "Discover how to create meaningful relationships that go beyond transactional interactions.",
      author: "Alex Rivera",
      date: "January 15, 2025",
      readTime: "6 min read",
      category: "Community Building",
      views: "1.8K",
      comments: 19
    },
    {
      title: "Maximizing Your Earnings: Pricing Strategies That Work",
      excerpt: "A comprehensive guide to setting subscription prices that attract fans while maximizing revenue.",
      author: "Maya Patel",
      date: "January 12, 2025",
      readTime: "7 min read",
      category: "Monetization",
      views: "3.2K",
      comments: 45
    },
    {
      title: "Content Creation Tools Every Creator Should Know",
      excerpt: "Essential tools and resources to elevate your content quality and streamline your workflow.",
      author: "James Wilson",
      date: "January 10, 2025",
      readTime: "4 min read",
      category: "Tools & Tech",
      views: "2.7K",
      comments: 31
    },
    {
      title: "The Psychology of Fan Engagement",
      excerpt: "Understanding what motivates fans to subscribe and stay engaged with creator content.",
      author: "Dr. Emily Rodriguez",
      date: "January 8, 2025",
      readTime: "9 min read",
      category: "Psychology",
      views: "1.9K",
      comments: 16
    },
    {
      title: "Platform Updates: New Features This Month",
      excerpt: "Explore the latest BellaAmour features designed to enhance your creator and fan experience.",
      author: "BellaAmour Team",
      date: "January 5, 2025",
      readTime: "3 min read",
      category: "Platform Updates",
      views: "4.1K",
      comments: 67
    }
  ]

  const categories = [
    { name: "Creator Tips", count: 24 },
    { name: "Platform Updates", count: 12 },
    { name: "Industry Insights", count: 18 },
    { name: "Success Stories", count: 15 },
    { name: "Community Building", count: 21 },
    { name: "Monetization", count: 19 },
    { name: "Tools & Tech", count: 14 },
    { name: "Psychology", count: 8 }
  ]

  const popularPosts = [
    {
      title: "How I Made $10K in My First Month",
      author: "Top Creator",
      views: "15.2K"
    },
    {
      title: "Content Strategy That Actually Works",
      author: "Strategy Expert",
      views: "12.8K"
    },
    {
      title: "Building a Loyal Fan Community",
      author: "Community Manager",
      views: "11.4K"
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
            <Link href="/blog" className="text-purple-600 font-medium">
              Blog
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
            <BookOpen className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
            BellaAmour Blog
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-3xl mx-auto">
            Insights, tips, and stories from the creator economy. Learn how to grow your audience,
            monetize your content, and build a sustainable creator business.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-zinc-400" />
            <input
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-3 border border-zinc-200 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800"
            />
          </div>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <Card className="border-zinc-200 dark:border-zinc-800 overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="h-64 md:h-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <BookOpen className="w-20 h-20 text-white opacity-50" />
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <Badge className="bg-purple-500 text-white mb-4">Featured</Badge>
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-zinc-600 dark:text-zinc-400 mb-6">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </div>
                </div>
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                  Read Full Article
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">Latest Articles</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogPosts.map((post, index) => (
                  <Card key={index} className="border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <div className="h-40 bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-700 rounded-lg mb-4 flex items-center justify-center">
                        <BookOpen className="w-12 h-12 text-zinc-400" />
                      </div>
                      <Badge variant="outline" className="w-fit mb-2">{post.category}</Badge>
                      <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                      <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            {post.author}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {post.date}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-zinc-600 dark:text-zinc-400">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </span>
                          <span>{post.views} views</span>
                          <span className="flex items-center gap-1">
                            <MessageCircle className="w-3 h-3" />
                            {post.comments}
                          </span>
                        </div>
                        <Button variant="ghost" size="sm">
                          Read More
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Button variant="outline" size="lg">
                  Load More Articles
                </Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Categories */}
            <Card className="border-zinc-200 dark:border-zinc-800">
              <CardHeader>
                <CardTitle>Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {categories.map((category, index) => (
                    <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 cursor-pointer">
                      <span className="text-zinc-900 dark:text-zinc-100">{category.name}</span>
                      <Badge variant="secondary">{category.count}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Popular Posts */}
            <Card className="border-zinc-200 dark:border-zinc-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Popular Posts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {popularPosts.map((post, index) => (
                    <div key={index} className="border-b border-zinc-200 dark:border-zinc-700 last:border-0 pb-4 last:pb-0">
                      <h3 className="font-medium text-zinc-900 dark:text-zinc-100 mb-2 hover:text-purple-600 cursor-pointer">
                        {post.title}
                      </h3>
                      <div className="flex items-center justify-between text-sm text-zinc-600 dark:text-zinc-400">
                        <span>by {post.author}</span>
                        <span>{post.views} views</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card className="border-zinc-200 dark:border-zinc-800 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-purple-500" />
                  Stay Updated
                </CardTitle>
                <CardDescription>
                  Get the latest creator tips and platform updates delivered to your inbox.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-3 py-2 border border-zinc-200 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800"
                  />
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center py-16 mt-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Creator Journey?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of creators who are already building successful businesses on BellaAmour.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-zinc-100 px-8 py-4 text-lg" asChild>
              <Link href="/auth/signup">Start Creating</Link>
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
