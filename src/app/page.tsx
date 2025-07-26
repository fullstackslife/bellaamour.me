import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Star, Users, DollarSign, Shield, Zap, Heart } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-zinc-900">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-md dark:bg-zinc-950/80">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Heart className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold text-zinc-900 dark:text-zinc-100">BellaAmour</span>
          </div>
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
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
            Turn Your
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"> Passion </span>
            into Profit
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-3xl mx-auto">
            Build a direct relationship with your fans and earn recurring revenue from your content.
            Whether you're an educator, artist, fitness trainer, or content creator - we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg" asChild>
              <Link href="/auth/signup">Start Creating</Link>
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg" asChild>
              <Link href="/discover">Browse Creators</Link>
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">10K+</div>
              <div className="text-zinc-600 dark:text-zinc-400">Active Creators</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">500K+</div>
              <div className="text-zinc-600 dark:text-zinc-400">Happy Subscribers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">$2M+</div>
              <div className="text-zinc-600 dark:text-zinc-400">Creator Earnings</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white dark:bg-zinc-900">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-zinc-900 dark:text-zinc-100 mb-16">
            Everything You Need to Succeed
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-zinc-200 dark:border-zinc-800">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Subscriber Management</CardTitle>
                <CardDescription>
                  Easily manage your subscriber base with detailed analytics and engagement tools.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-zinc-200 dark:border-zinc-800">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Multiple Revenue Streams</CardTitle>
                <CardDescription>
                  Offer subscription tiers, pay-per-view content, and tips to maximize your earnings.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-zinc-200 dark:border-zinc-800">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Content Protection</CardTitle>
                <CardDescription>
                  Advanced security measures to protect your content and maintain subscriber privacy.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-zinc-200 dark:border-zinc-800">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Lightning Fast</CardTitle>
                <CardDescription>
                  Optimized platform for quick content uploads and seamless streaming experiences.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-zinc-200 dark:border-zinc-800">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Creator Tools</CardTitle>
                <CardDescription>
                  Professional-grade tools for content creation, scheduling, and audience engagement.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-zinc-200 dark:border-zinc-800">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Community Building</CardTitle>
                <CardDescription>
                  Foster deeper connections with your audience through interactive features and messaging.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Creators */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-zinc-900 dark:text-zinc-100 mb-16">
            Featured Creators
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Sarah Chen", category: "Fitness Coach", subscribers: "12.5K", avatar: "SC" },
              { name: "Alex Rivera", category: "Art Tutorials", subscribers: "8.3K", avatar: "AR" },
              { name: "Maya Patel", category: "Cooking Classes", subscribers: "15.2K", avatar: "MP" },
              { name: "James Wilson", category: "Photography", subscribers: "9.7K", avatar: "JW" }
            ].map((creator, index) => (
              <Card key={index} className="border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-shadow cursor-pointer">
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
                  <CardDescription className="flex items-center justify-center gap-1 mt-2">
                    <Users className="w-4 h-4" />
                    {creator.subscribers} subscribers
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Creators
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-500 to-pink-500">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Creator Journey?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of creators who are already building sustainable income streams
            doing what they love.
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-zinc-100 px-8 py-4 text-lg" asChild>
            <Link href="/auth/signup">Start Creating Today</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 text-zinc-400 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Heart className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-bold text-white">BellaAmour</span>
              </div>
              <p className="text-sm">
                Empowering creators to build sustainable businesses through direct fan support.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-3">Platform</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/features" className="hover:text-white">Features</Link></li>
                <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
                <li><Link href="/security" className="hover:text-white">Security</Link></li>
                <li><Link href="/api" className="hover:text-white">API</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-3">Support</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/help" className="hover:text-white">Help Center</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
                <li><Link href="/community" className="hover:text-white">Community</Link></li>
                <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-3">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
                <li><Link href="/cookies" className="hover:text-white">Cookie Policy</Link></li>
                <li><Link href="/dmca" className="hover:text-white">DMCA</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-zinc-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2025 BellaAmour. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
