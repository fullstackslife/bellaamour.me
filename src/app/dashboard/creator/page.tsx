import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Heart,
  Users,
  DollarSign,
  TrendingUp,
  Upload,
  Settings,
  Bell,
  Search,
  Plus,
  MoreHorizontal,
  Calendar,
  Eye,
  MessageCircle,
  Share2,
  Edit,
  Trash2
} from "lucide-react"
import Link from "next/link"

export default function CreatorDashboard() {
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
                  placeholder="Search content, subscribers..."
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
              <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                SC
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
            Welcome back, Sarah! 👋
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Here's what's happening with your creator business today.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Subscribers</CardTitle>
              <Users className="h-4 w-4 text-zinc-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12,543</div>
              <p className="text-xs text-green-600">+180 from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-zinc-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$8,432</div>
              <p className="text-xs text-green-600">+12% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Content Views</CardTitle>
              <Eye className="h-4 w-4 text-zinc-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">45.2K</div>
              <p className="text-xs text-green-600">+8% from last week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Engagement Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-zinc-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">94.5%</div>
              <p className="text-xs text-green-600">+2.1% from last week</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="content" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="subscribers">Subscribers</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="earnings">Earnings</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
          </TabsList>

          <TabsContent value="content" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Content Library</h2>
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500">
                <Plus className="w-4 h-4 mr-2" />
                Upload Content
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Morning Yoga Flow", type: "Video", views: "2.3K", likes: "189", date: "2 days ago" },
                { title: "Nutrition Tips for Beginners", type: "Article", views: "1.8K", likes: "156", date: "3 days ago" },
                { title: "Live Q&A Session", type: "Live", views: "4.2K", likes: "298", date: "1 week ago" },
                { title: "Workout Routine Guide", type: "PDF", views: "1.5K", likes: "127", date: "1 week ago" },
                { title: "Meditation for Stress Relief", type: "Audio", views: "3.1K", likes: "234", date: "2 weeks ago" },
                { title: "Healthy Recipe Collection", type: "Gallery", views: "2.7K", likes: "201", date: "2 weeks ago" }
              ].map((content, index) => (
                <Card key={index} className="cursor-pointer hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{content.title}</CardTitle>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge variant="secondary">{content.type}</Badge>
                          <span className="text-sm text-zinc-500">{content.date}</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-4 text-sm text-zinc-600">
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {content.views}
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          {content.likes}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Share2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="subscribers" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Subscribers</h2>
              <Button variant="outline">Export List</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Emma Johnson", tier: "Premium", joined: "Jan 2024", avatar: "EJ" },
                { name: "Michael Chen", tier: "Basic", joined: "Feb 2024", avatar: "MC" },
                { name: "Sarah Williams", tier: "VIP", joined: "Mar 2024", avatar: "SW" },
                { name: "David Brown", tier: "Premium", joined: "Mar 2024", avatar: "DB" },
                { name: "Lisa Davis", tier: "Basic", joined: "Apr 2024", avatar: "LD" },
                { name: "James Wilson", tier: "VIP", joined: "Apr 2024", avatar: "JW" }
              ].map((subscriber, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src="" />
                        <AvatarFallback className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
                          {subscriber.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{subscriber.name}</CardTitle>
                        <div className="flex items-center gap-2">
                          <Badge
                            variant={subscriber.tier === 'VIP' ? 'default' : subscriber.tier === 'Premium' ? 'secondary' : 'outline'}
                          >
                            {subscriber.tier}
                          </Badge>
                          <span className="text-sm text-zinc-500">Since {subscriber.joined}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        Message
                      </Button>
                      <Button variant="outline" size="sm">
                        View Profile
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Analytics Overview</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Revenue Trend</CardTitle>
                  <CardDescription>Monthly revenue over the last 6 months</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-48 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg flex items-center justify-center">
                    <p className="text-zinc-600 dark:text-zinc-400">Chart placeholder - Revenue trending upward</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Subscriber Growth</CardTitle>
                  <CardDescription>New subscribers over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-48 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg flex items-center justify-center">
                    <p className="text-zinc-600 dark:text-zinc-400">Chart placeholder - Steady growth pattern</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="earnings" className="space-y-6">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Earnings & Payouts</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Available Balance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-600">$2,847.32</div>
                  <Button className="mt-4 w-full">Request Payout</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>This Month</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">$8,432.10</div>
                  <p className="text-sm text-zinc-600 mt-2">+12% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Total Lifetime</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">$47,829.45</div>
                  <p className="text-sm text-zinc-600 mt-2">Since joining</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="messages" className="space-y-6">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Messages</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-1">
                <CardHeader>
                  <CardTitle>Recent Conversations</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { name: "Emma Johnson", message: "Thanks for the workout tips!", time: "2m ago", unread: true },
                    { name: "Michael Chen", message: "When is the next live session?", time: "1h ago", unread: false },
                    { name: "Sarah Williams", message: "Love your content!", time: "3h ago", unread: false }
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
                  <CardTitle>Chat with Emma Johnson</CardTitle>
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
