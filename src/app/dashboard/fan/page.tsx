import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Heart,
  Users,
  Play,
  Settings,
  Bell,
  Search,
  Star,
  Clock,
  Download,
  MessageCircle,
  Share2,
  Bookmark,
  Eye
} from "lucide-react"
import Link from "next/link"

export default function FanDashboard() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Header */}
      <header className="border-b bg-white dark:bg-zinc-900 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold text-zinc-900 dark:text-zinc-100">BellaAmour</span>
            </Link>
            <div className="hidden md:flex">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-zinc-400" />
                <input
                  type="text"
                  placeholder="Search creators, content..."
                  className="pl-10 pr-4 py-2 w-80 border rounded-lg bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="w-5 h-5" />
            </Button>
            <Avatar>
              <AvatarImage src="" />
              <AvatarFallback className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
                EJ
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
            Welcome back, Emma! ✨
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Discover new content from your favorite creators and explore fresh talent.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Subscriptions</CardTitle>
              <Users className="h-4 w-4 text-zinc-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-zinc-600">Premium creators</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Content Watched</CardTitle>
              <Play className="h-4 w-4 text-zinc-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">127</div>
              <p className="text-xs text-green-600">+12 this week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Spend</CardTitle>
              <Heart className="h-4 w-4 text-zinc-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$156</div>
              <p className="text-xs text-zinc-600">Supporting creators</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="feed" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="feed">My Feed</TabsTrigger>
            <TabsTrigger value="subscriptions">Subscriptions</TabsTrigger>
            <TabsTrigger value="favorites">Favorites</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
          </TabsList>

          <TabsContent value="feed" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Latest Content</h2>
              <Button variant="outline">Mark All Read</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  creator: "Sarah Chen",
                  title: "Morning Yoga Flow",
                  type: "Video",
                  duration: "25 min",
                  thumbnail: "SC",
                  posted: "2 hours ago",
                  likes: "234",
                  isNew: true
                },
                {
                  creator: "Maya Patel",
                  title: "Mediterranean Cooking Tips",
                  type: "Article",
                  duration: "8 min read",
                  thumbnail: "MP",
                  posted: "5 hours ago",
                  likes: "189",
                  isNew: true
                },
                {
                  creator: "Alex Rivera",
                  title: "Digital Art Masterclass",
                  type: "Live Stream",
                  duration: "Live",
                  thumbnail: "AR",
                  posted: "Live now",
                  likes: "456",
                  isNew: false
                },
                {
                  creator: "Elena Rodriguez",
                  title: "Music Production Secrets",
                  type: "Audio",
                  duration: "45 min",
                  thumbnail: "ER",
                  posted: "1 day ago",
                  likes: "312",
                  isNew: false
                },
                {
                  creator: "James Wilson",
                  title: "Portrait Photography Guide",
                  type: "PDF",
                  duration: "15 pages",
                  thumbnail: "JW",
                  posted: "2 days ago",
                  likes: "167",
                  isNew: false
                },
                {
                  creator: "David Kim",
                  title: "Spanish Conversation Practice",
                  type: "Video",
                  duration: "30 min",
                  thumbnail: "DK",
                  posted: "3 days ago",
                  likes: "289",
                  isNew: false
                }
              ].map((content, index) => (
                <Card key={index} className="cursor-pointer hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-3">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src="" />
                        <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white text-sm">
                          {content.thumbnail}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-sm">{content.creator}</p>
                        <p className="text-xs text-zinc-500">{content.posted}</p>
                      </div>
                      {content.isNew && (
                        <Badge className="ml-auto bg-green-500 text-white">New</Badge>
                      )}
                    </div>
                    <div className="aspect-video bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-700 rounded-lg flex items-center justify-center mb-3">
                      <Play className="w-12 h-12 text-zinc-400" />
                    </div>
                    <CardTitle className="text-lg">{content.title}</CardTitle>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{content.type}</Badge>
                      <span className="text-sm text-zinc-500">{content.duration}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-4 text-sm text-zinc-600">
                        <div className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          {content.likes}
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-4 h-4" />
                          24
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          <Bookmark className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Share2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="subscriptions" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">My Subscriptions</h2>
              <Button variant="outline" asChild>
                <Link href="/discover">Find More Creators</Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Sarah Chen", category: "Fitness", tier: "Premium", avatar: "SC", nextBilling: "Jan 15", amount: "$19.99" },
                { name: "Maya Patel", category: "Cooking", tier: "VIP", avatar: "MP", nextBilling: "Jan 18", amount: "$24.99" },
                { name: "Alex Rivera", category: "Art", tier: "Basic", avatar: "AR", nextBilling: "Jan 20", amount: "$14.99" },
                { name: "Elena Rodriguez", category: "Music", tier: "Premium", avatar: "ER", nextBilling: "Jan 22", amount: "$22.99" }
              ].map((creator, index) => (
                <Card key={index}>
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
                    <Badge variant={creator.tier === 'VIP' ? 'default' : 'outline'}>
                      {creator.tier}
                    </Badge>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-sm text-zinc-600 mb-4">
                      <p>Next billing: {creator.nextBilling}</p>
                      <p className="font-medium">{creator.amount}/month</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        Manage
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        Message
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="favorites" className="space-y-6">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Saved Content</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Advanced Yoga Techniques",
                  creator: "Sarah Chen",
                  type: "Video Series",
                  savedDate: "3 days ago",
                  avatar: "SC"
                },
                {
                  title: "Italian Pasta Masterclass",
                  creator: "Maya Patel",
                  type: "Recipe Collection",
                  savedDate: "1 week ago",
                  avatar: "MP"
                },
                {
                  title: "Digital Art Fundamentals",
                  creator: "Alex Rivera",
                  type: "Course",
                  savedDate: "2 weeks ago",
                  avatar: "AR"
                }
              ].map((item, index) => (
                <Card key={index} className="cursor-pointer hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarImage src="" />
                        <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                          {item.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                        <p className="text-sm text-zinc-600">by {item.creator}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{item.type}</Badge>
                        <span className="text-sm text-zinc-500">Saved {item.savedDate}</span>
                      </div>
                      <Button variant="outline" size="sm">
                        <Play className="w-4 h-4 mr-1" />
                        View
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="messages" className="space-y-6">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Messages</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-1">
                <CardHeader>
                  <CardTitle>Conversations</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { name: "Sarah Chen", message: "Thanks for the feedback!", time: "5m ago", unread: true },
                    { name: "Maya Patel", message: "New recipe coming tomorrow", time: "2h ago", unread: false },
                    { name: "Alex Rivera", message: "Check out my latest artwork", time: "1d ago", unread: false }
                  ].map((conversation, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 cursor-pointer">
                      <Avatar className="w-10 h-10">
                        <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white text-sm">
                          {conversation.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center">
                          <p className="font-medium truncate">{conversation.name}</p>
                          <span className="text-xs text-zinc-500">{conversation.time}</span>
                        </div>
                        <p className="text-sm text-zinc-600 truncate">{conversation.message}</p>
                      </div>
                      {conversation.unread && <div className="w-2 h-2 bg-purple-500 rounded-full" />}
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Chat with Sarah Chen</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-zinc-50 dark:bg-zinc-800 rounded-lg p-4 flex items-center justify-center">
                    <p className="text-zinc-600 dark:text-zinc-400">Chat interface placeholder</p>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <input
                      type="text"
                      placeholder="Type your message..."
                      className="flex-1 px-3 py-2 border rounded-lg"
                    />
                    <Button>Send</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
