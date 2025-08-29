'use client'

import { useState } from 'react'
import Navigation from '@/components/shared/Navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Textarea } from '@/components/ui/textarea'
import { 
  MapPin, 
  Star,
  MessageCircle,
  Plus,
  Heart,
  Share2,
  ThumbsUp,
  MessageSquare,
  Send,
  Image as ImageIcon,
  Video,
  Link,
  TrendingUp,
  UserPlus,
  Settings,
  MoreHorizontal,
  Eye,
  Bookmark,
  Flag
} from 'lucide-react'

export default function ConnectPage() {
  const [activeTab, setActiveTab] = useState('feed')
  const [newPost, setNewPost] = useState('')

  const posts = [
    {
      id: 1,
      author: {
        name: "Sarah O'Connor",
        title: "Real Estate Agent",
        location: "Dublin, Ireland",
        avatar: "/api/placeholder/40/40",
        verified: true
      },
      content: "Just closed on a beautiful penthouse in Dublin City Centre! The market is showing strong signs of recovery. What are you seeing in your local markets? #RealEstate #Dublin #PropertyMarket",
      timestamp: "2 hours ago",
      likes: 24,
      comments: 8,
      shares: 3,
      image: "/api/placeholder/500/300",
      type: "post"
    },
    {
      id: 2,
      author: {
        name: "GREIA News",
        title: "Official News",
        location: "Global",
        avatar: "/greia-logo.png",
        verified: true,
        official: true
      },
      content: "🏠 MARKET UPDATE: European property prices show 3.2% growth in Q3 2025. Ireland leads with 5.8% increase, followed by Spain at 4.1%. Full report available in our insights section.",
      timestamp: "4 hours ago",
      likes: 156,
      comments: 23,
      shares: 45,
      type: "news",
      category: "Market Update"
    },
    {
      id: 3,
      author: {
        name: "Michael Chen",
        title: "Property Developer",
        location: "London, UK",
        avatar: "/api/placeholder/40/40",
        verified: true
      },
      content: "Excited to announce our new sustainable housing project in East London! 200 eco-friendly homes with solar panels, rainwater harvesting, and green roofs. The future of housing is here! 🌱",
      timestamp: "6 hours ago",
      likes: 89,
      comments: 15,
      shares: 12,
      image: "/api/placeholder/500/300",
      type: "post"
    }
  ]

  const suggestedConnections = [
    {
      id: 1,
      name: "David Wilson",
      title: "Mortgage Broker",
      location: "Manchester, UK",
      mutualConnections: 12,
      avatar: "/api/placeholder/60/60"
    },
    {
      id: 2,
      name: "Lisa Martinez",
      title: "Architect",
      location: "Madrid, Spain",
      mutualConnections: 8,
      avatar: "/api/placeholder/60/60"
    },
    {
      id: 3,
      name: "James Murphy",
      title: "Property Investor",
      location: "Cork, Ireland",
      mutualConnections: 15,
      avatar: "/api/placeholder/60/60"
    }
  ]

  const trendingTopics = [
    { tag: "#PropertyMarket", posts: 1234 },
    { tag: "#SustainableHomes", posts: 856 },
    { tag: "#SmartHomes", posts: 743 },
    { tag: "#RealEstateInvesting", posts: 692 },
    { tag: "#PropertyDevelopment", posts: 567 }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Main Content */}
      <main className="pt-20 pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left Sidebar */}
            <div className="lg:col-span-3 space-y-6">
              {/* Profile Card */}
              <Card className="shadow-sm">
                <CardContent className="p-6 text-center">
                  <Avatar className="w-16 h-16 mx-auto mb-4">
                    <AvatarImage src="/api/placeholder/64/64" />
                    <AvatarFallback className="text-lg font-semibold">JD</AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold text-lg mb-1">John Doe</h3>
                  <p className="text-gray-600 text-sm mb-1">Property Professional</p>
                  <p className="text-gray-500 text-xs mb-4">Dublin, Ireland</p>
                  
                  <div className="grid grid-cols-3 gap-3 text-center mb-4">
                    <div>
                      <p className="font-bold text-blue-600 text-lg">156</p>
                      <p className="text-xs text-gray-500">Connections</p>
                    </div>
                    <div>
                      <p className="font-bold text-green-600 text-lg">23</p>
                      <p className="text-xs text-gray-500">Posts</p>
                    </div>
                    <div>
                      <p className="font-bold text-purple-600 text-lg">4.8</p>
                      <p className="text-xs text-gray-500">Rating</p>
                    </div>
                  </div>
                  
                  <Button variant="outline" size="sm" className="w-full">
                    <Settings className="w-4 h-4 mr-2" />
                    Edit Profile
                  </Button>
                </CardContent>
              </Card>

              {/* Trending Topics */}
              <Card className="shadow-sm">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-blue-600" />
                    Trending
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    {trendingTopics.map((topic, index) => (
                      <div key={index} className="cursor-pointer hover:bg-gray-50 p-2 rounded-md -m-2">
                        <p className="font-medium text-blue-600 hover:underline text-sm">
                          {topic.tag}
                        </p>
                        <p className="text-xs text-gray-500">{topic.posts.toLocaleString()} posts</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Feed */}
            <div className="lg:col-span-6 space-y-6">
              {/* Create Post */}
              <Card className="shadow-sm">
                <CardContent className="p-4">
                  <div className="flex space-x-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src="/api/placeholder/40/40" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <Textarea
                        placeholder="Share your thoughts with the GREIA community..."
                        value={newPost}
                        onChange={(e) => setNewPost(e.target.value)}
                        className="min-h-[80px] resize-none border-0 focus:ring-0 p-0 text-sm"
                      />
                      <div className="flex justify-between items-center mt-3">
                        <div className="flex space-x-3">
                          <Button variant="ghost" size="sm" className="text-xs">
                            <ImageIcon className="w-4 h-4 mr-1" />
                            Photo
                          </Button>
                          <Button variant="ghost" size="sm" className="text-xs">
                            <Video className="w-4 h-4 mr-1" />
                            Video
                          </Button>
                          <Button variant="ghost" size="sm" className="text-xs">
                            <Link className="w-4 h-4 mr-1" />
                            Link
                          </Button>
                        </div>
                        <Button size="sm" disabled={!newPost.trim()}>
                          <Send className="w-4 h-4 mr-1" />
                          Post
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Feed Tabs */}
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-3 mb-4">
                  <TabsTrigger value="feed" className="text-sm">Feed</TabsTrigger>
                  <TabsTrigger value="news" className="text-sm">News</TabsTrigger>
                  <TabsTrigger value="insights" className="text-sm">Insights</TabsTrigger>
                </TabsList>

                <TabsContent value="feed" className="space-y-4">
                  {/* Posts */}
                  {posts.map((post) => (
                    <Card key={post.id} className="shadow-sm hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        {/* Post Header */}
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex space-x-3">
                            <Avatar className="w-10 h-10">
                              <AvatarImage src={post.author.avatar} />
                              <AvatarFallback className="text-sm">
                                {post.author.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="flex items-center space-x-2 mb-1">
                                <h4 className="font-semibold text-sm">{post.author.name}</h4>
                                {post.author.verified && (
                                  <Badge variant="secondary" className="text-xs px-2 py-0">
                                    ✓ Verified
                                  </Badge>
                                )}
                                {post.author.official && (
                                  <Badge className="text-xs px-2 py-0 bg-blue-600">
                                    Official
                                  </Badge>
                                )}
                              </div>
                              <p className="text-xs text-gray-600">{post.author.title}</p>
                              <p className="text-xs text-gray-500 flex items-center">
                                <MapPin className="w-3 h-3 mr-1" />
                                {post.author.location} • {post.timestamp}
                              </p>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm" className="p-1">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </div>

                        {/* Post Content */}
                        <div className="mb-3">
                          {post.category && (
                            <Badge variant="outline" className="mb-2 text-xs">
                              {post.category}
                            </Badge>
                          )}
                          <p className="text-gray-800 text-sm leading-relaxed">{post.content}</p>
                        </div>

                        {/* Post Image */}
                        {post.image && (
                          <div className="mb-3 rounded-lg overflow-hidden">
                            <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100"></div>
                          </div>
                        )}

                        {/* Post Actions */}
                        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                          <div className="flex space-x-4">
                            <Button variant="ghost" size="sm" className="flex items-center space-x-1 text-xs">
                              <ThumbsUp className="w-4 h-4" />
                              <span>{post.likes}</span>
                            </Button>
                            <Button variant="ghost" size="sm" className="flex items-center space-x-1 text-xs">
                              <MessageSquare className="w-4 h-4" />
                              <span>{post.comments}</span>
                            </Button>
                            <Button variant="ghost" size="sm" className="flex items-center space-x-1 text-xs">
                              <Share2 className="w-4 h-4" />
                              <span>{post.shares}</span>
                            </Button>
                          </div>
                          <div className="flex space-x-1">
                            <Button variant="ghost" size="sm" className="p-1">
                              <Bookmark className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="p-1">
                              <Flag className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="news" className="space-y-6">
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MessageCircle className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Industry News</h3>
                    <p className="text-gray-600 text-sm">Stay updated with the latest property market news and insights</p>
                  </div>
                </TabsContent>

                <TabsContent value="insights" className="space-y-6">
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Market Insights</h3>
                    <p className="text-gray-600 text-sm">Access detailed market analysis and professional insights</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-3 space-y-6">
              {/* Suggested Connections */}
              <Card className="shadow-sm">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center">
                    <UserPlus className="w-5 h-5 mr-2 text-green-600" />
                    People You May Know
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    {suggestedConnections.map((connection) => (
                      <div key={connection.id} className="flex items-center space-x-3">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={connection.avatar} />
                          <AvatarFallback className="text-sm">
                            {connection.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm truncate">{connection.name}</h4>
                          <p className="text-xs text-gray-600 truncate">{connection.title}</p>
                          <p className="text-xs text-gray-500">{connection.mutualConnections} mutual</p>
                        </div>
                        <Button size="sm" variant="outline" className="shrink-0">
                          <UserPlus className="w-3 h-3" />
                        </Button>
                      </div>
                    ))}
                  </div>
                  <Button variant="ghost" className="w-full mt-4" size="sm">
                    See All Suggestions
                  </Button>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card className="shadow-sm">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center">
                    <Eye className="w-5 h-5 mr-2 text-purple-600" />
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3 text-sm">
                    <p className="text-gray-600">
                      <span className="font-medium">Sarah O'Connor</span> liked your post
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">Michael Chen</span> commented on your listing
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">Emma Thompson</span> shared your article
                    </p>
                    <p className="text-gray-600">
                      You have <span className="font-medium text-blue-600">3 new</span> connection requests
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
