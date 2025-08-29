'use client'

import { useState } from 'react'
import Navigation from '@/components/shared/Navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Search, 
  Filter, 
  MapPin, 
  Star,
  Calendar,
  Clock,
  Users,
  Heart,
  Share2,
  Utensils,
  Music,
  Car,
  Palette,
  PartyPopper,
  Moon
} from 'lucide-react'

export default function LeisurePage() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const experiences = [
    {
      id: 1,
      title: "The Michelin Star Experience",
      category: "Restaurant",
      location: "Dublin, Ireland",
      rating: 4.9,
      reviews: 234,
      price: 85,
      currency: "€",
      duration: "2-3 hours",
      availability: "Limited",
      image: "/api/placeholder/400/300",
      description: "Exquisite fine dining experience with innovative cuisine and impeccable service.",
      features: ["Michelin Star", "Wine Pairing", "Private Dining"]
    },
    {
      id: 2,
      title: "Ed Sheeran Live in Concert",
      category: "Event",
      location: "London, UK",
      rating: 4.8,
      reviews: 1567,
      price: 75,
      currency: "£",
      duration: "3 hours",
      availability: "Limited",
      image: "/api/placeholder/400/300",
      description: "Unforgettable live performance by one of the world's biggest music stars.",
      features: ["VIP Seating", "Meet & Greet", "Merchandise"]
    },
    {
      id: 3,
      title: "Premium BMW X5 Rental",
      category: "Rental",
      location: "Barcelona, Spain",
      rating: 4.7,
      reviews: 89,
      price: 120,
      currency: "€",
      duration: "Per day",
      availability: "Available",
      image: "/api/placeholder/400/300",
      description: "Luxury SUV rental perfect for exploring the city and countryside in style.",
      features: ["GPS Navigation", "Insurance Included", "24/7 Support"]
    },
    {
      id: 4,
      title: "Contemporary Art Exhibition",
      category: "Art & Culture",
      location: "Paris, France",
      rating: 4.6,
      reviews: 156,
      price: 25,
      currency: "€",
      duration: "2 hours",
      availability: "Available",
      image: "/api/placeholder/400/300",
      description: "Immersive contemporary art exhibition featuring works by emerging European artists.",
      features: ["Audio Guide", "Private Tours", "Artist Talks"]
    },
    {
      id: 5,
      title: "Rooftop Jazz Night",
      category: "Entertainment",
      location: "Amsterdam, Netherlands",
      rating: 4.8,
      reviews: 203,
      price: 45,
      currency: "€",
      duration: "4 hours",
      availability: "Available",
      image: "/api/placeholder/400/300",
      description: "Intimate jazz performance on a stunning rooftop venue with city views.",
      features: ["Live Music", "Cocktails", "City Views"]
    },
    {
      id: 6,
      title: "Exclusive Nightclub Experience",
      category: "Nightlife",
      location: "Madrid, Spain",
      rating: 4.5,
      reviews: 312,
      price: 60,
      currency: "€",
      duration: "All night",
      availability: "Available",
      image: "/api/placeholder/400/300",
      description: "VIP access to Madrid's hottest nightclub with world-class DJs and premium service.",
      features: ["VIP Table", "Bottle Service", "Skip the Line"]
    }
  ]

  const categories = [
    { id: 'all', label: 'All Leisure', icon: PartyPopper },
    { id: 'restaurants', label: 'Restaurants', icon: Utensils },
    { id: 'events', label: 'Events', icon: Music },
    { id: 'entertainment', label: 'Entertainment', icon: PartyPopper },
    { id: 'rentals', label: 'Car Rentals', icon: Car },
    { id: 'culture', label: 'Art & Culture', icon: Palette },
    { id: 'nightlife', label: 'Nightlife', icon: Moon }
  ]

  const filteredExperiences = selectedCategory === 'all' 
    ? experiences 
    : experiences.filter(e => {
        if (selectedCategory === 'restaurants') return e.category === 'Restaurant'
        if (selectedCategory === 'events') return e.category === 'Event'
        if (selectedCategory === 'entertainment') return e.category === 'Entertainment'
        if (selectedCategory === 'rentals') return e.category === 'Rental'
        if (selectedCategory === 'culture') return e.category === 'Art & Culture'
        if (selectedCategory === 'nightlife') return e.category === 'Nightlife'
        return true
      })

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Header */}
      <div className="bg-white border-b pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Leisure & Entertainment</h1>
              <p className="text-gray-600">Discover amazing experiences, dining, and entertainment worldwide</p>
            </div>
            
            {/* Search Bar */}
            <div className="flex-1 max-w-2xl">
              <div className="flex gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input 
                    placeholder="Search experiences..."
                    className="pl-12 pr-4 py-3 text-base rounded-xl border-gray-200 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <Input 
                  placeholder="Location..."
                  className="w-48 py-3 text-base rounded-xl border-gray-200 focus:ring-2 focus:ring-blue-500"
                />
                <Input 
                  type="date"
                  className="w-48 py-3 text-base rounded-xl border-gray-200 focus:ring-2 focus:ring-blue-500"
                />
                <Button className="px-6 py-3 rounded-xl">
                  <Search className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="flex items-center space-x-2 rounded-full"
                >
                  <Icon className="w-4 h-4" />
                  <span>{category.label}</span>
                </Button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">{filteredExperiences.length} experiences found</p>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              More Filters
            </Button>
            <select className="px-3 py-2 border border-gray-200 rounded-lg text-sm">
              <option>Recommended</option>
              <option>Highest Rated</option>
              <option>Lowest Price</option>
              <option>Most Popular</option>
            </select>
          </div>
        </div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExperiences.map((experience) => (
            <Card key={experience.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
              <div className="relative">
                <div className="h-48 bg-gradient-to-br from-purple-100 to-pink-100 group-hover:scale-105 transition-transform duration-300"></div>
                <Badge 
                  className={`absolute top-4 left-4 shadow-lg ${
                    experience.category === 'Restaurant' ? 'bg-orange-600' :
                    experience.category === 'Event' ? 'bg-purple-600' :
                    experience.category === 'Rental' ? 'bg-blue-600' :
                    'bg-green-600'
                  }`}
                >
                  {experience.category}
                </Badge>
                {experience.availability === 'Limited' && (
                  <Badge variant="destructive" className="absolute top-4 right-4 shadow-lg">
                    Limited
                  </Badge>
                )}
                <div className="absolute bottom-4 right-4 flex space-x-2">
                  <Button variant="ghost" size="sm" className="bg-white/90 hover:bg-white shadow-sm">
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="bg-white/90 hover:bg-white shadow-sm">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1 line-clamp-2">{experience.title}</h3>
                    <p className="text-gray-600 flex items-center text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      {experience.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-bold text-blue-600">
                      {experience.currency}{experience.price}
                    </span>
                    <p className="text-xs text-gray-500">{experience.duration}</p>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{experience.description}</p>

                {/* Features */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {experience.features.map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Rating and Actions */}
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold text-sm">{experience.rating}</span>
                      <span className="text-gray-500 text-xs">({experience.reviews})</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      Details
                    </Button>
                    <Button size="sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      Book
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            Load More Experiences
          </Button>
        </div>
      </main>
    </div>
  )
}
