'use client'

import { useState } from 'react'
import Navigation from '@/components/shared/Navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Slider } from '@/components/ui/slider'
import { 
  Search, 
  Filter, 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  Heart, 
  Share2,
  Star,
  Calendar,
  Phone,
  Mail,
  Grid3X3,
  List,
  Map,
  SlidersHorizontal,
  Home,
  Building,
  Warehouse,
  Store
} from 'lucide-react'

export default function PropertiesPage() {
  const [activeTab, setActiveTab] = useState('buy')
  const [viewMode, setViewMode] = useState('grid')
  const [priceRange, setPriceRange] = useState([100000, 2000000])

  const properties = [
    {
      id: 1,
      title: "Modern Apartment in Dublin City Centre",
      price: 450000,
      currency: "€",
      location: "Dublin City Centre, Ireland",
      beds: 2,
      baths: 2,
      sqft: 850,
      type: "Apartment",
      status: "For Sale",
      featured: true,
      agent: {
        name: "Sarah O'Connor",
        phone: "+353 1 234 5678",
        email: "sarah@greia.com",
        rating: 4.9,
        reviews: 127
      },
      images: ["/api/placeholder/400/300"],
      description: "Stunning modern apartment with panoramic city views, premium finishes, and excellent transport links."
    },
    {
      id: 2,
      title: "Luxury Villa in Barcelona",
      price: 1200000,
      currency: "€",
      location: "Eixample, Barcelona, Spain",
      beds: 4,
      baths: 3,
      sqft: 2100,
      type: "Villa",
      status: "For Sale",
      featured: true,
      agent: {
        name: "Emma Thompson",
        phone: "+34 93 123 4567",
        email: "emma@greia.com",
        rating: 4.8,
        reviews: 89
      },
      images: ["/api/placeholder/400/300"],
      description: "Elegant villa in prime Barcelona location with private garden, modern amenities, and architectural excellence."
    },
    {
      id: 3,
      title: "Penthouse in London",
      price: 850000,
      currency: "£",
      location: "Canary Wharf, London, UK",
      beds: 3,
      baths: 2,
      sqft: 1200,
      type: "Penthouse",
      status: "For Sale",
      featured: false,
      agent: {
        name: "Michael Chen",
        phone: "+44 20 1234 5678",
        email: "michael@greia.com",
        rating: 4.7,
        reviews: 156
      },
      images: ["/api/placeholder/400/300"],
      description: "Spectacular penthouse with Thames views, luxury finishes, and access to premium building amenities."
    },
    {
      id: 4,
      title: "Charming Townhouse in Amsterdam",
      price: 675000,
      currency: "€",
      location: "Jordaan, Amsterdam, Netherlands",
      beds: 3,
      baths: 2,
      sqft: 1100,
      type: "Townhouse",
      status: "For Sale",
      featured: false,
      agent: {
        name: "Lisa van der Berg",
        phone: "+31 20 123 4567",
        email: "lisa@greia.com",
        rating: 4.9,
        reviews: 203
      },
      images: ["/api/placeholder/400/300"],
      description: "Historic townhouse beautifully renovated with modern comforts while preserving original character."
    }
  ]

  const propertyTypes = [
    { id: 'all', label: 'All Properties', icon: Home },
    { id: 'apartment', label: 'Apartments', icon: Building },
    { id: 'house', label: 'Houses', icon: Home },
    { id: 'commercial', label: 'Commercial', icon: Store }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Header */}
      <div className="bg-white border-b pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Properties</h1>
              <p className="text-gray-600">Find your perfect home from our global property network</p>
            </div>
            
            {/* Search Bar */}
            <div className="flex-1 max-w-2xl">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input 
                  placeholder="Search by location, property type, or agent..."
                  className="pl-12 pr-4 py-3 text-base rounded-xl border-gray-200 focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 shadow-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg flex items-center">
                  <SlidersHorizontal className="w-5 h-5 mr-2" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                
                {/* Property Type */}
                <div>
                  <h3 className="font-semibold mb-3">Property Type</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {propertyTypes.map((type) => {
                      const Icon = type.icon
                      return (
                        <Button
                          key={type.id}
                          variant="outline"
                          size="sm"
                          className="justify-start h-auto p-3"
                        >
                          <Icon className="w-4 h-4 mr-2" />
                          <span className="text-xs">{type.label}</span>
                        </Button>
                      )
                    })}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h3 className="font-semibold mb-3">Price Range</h3>
                  <div className="px-2">
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={2000000}
                      min={50000}
                      step={25000}
                      className="mb-4"
                    />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>€{priceRange[0].toLocaleString()}</span>
                      <span>€{priceRange[1].toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Bedrooms */}
                <div>
                  <h3 className="font-semibold mb-3">Bedrooms</h3>
                  <div className="grid grid-cols-4 gap-2">
                    {['1+', '2+', '3+', '4+'].map((beds) => (
                      <Button key={beds} variant="outline" size="sm" className="h-10">
                        {beds}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Bathrooms */}
                <div>
                  <h3 className="font-semibold mb-3">Bathrooms</h3>
                  <div className="grid grid-cols-4 gap-2">
                    {['1+', '2+', '3+', '4+'].map((baths) => (
                      <Button key={baths} variant="outline" size="sm" className="h-10">
                        {baths}
                      </Button>
                    ))}
                  </div>
                </div>

                <Button className="w-full">Apply Filters</Button>
              </CardContent>
            </Card>
          </div>

          {/* Properties List */}
          <div className="lg:col-span-3">
            
            {/* Tabs and View Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-4 max-w-md">
                  <TabsTrigger value="buy" className="text-sm">Buy</TabsTrigger>
                  <TabsTrigger value="rent" className="text-sm">Rent</TabsTrigger>
                  <TabsTrigger value="sell" className="text-sm">Sell</TabsTrigger>
                  <TabsTrigger value="commercial" className="text-sm">Commercial</TabsTrigger>
                </TabsList>
              </Tabs>

              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600 mr-2">{properties.length} properties found</span>
                <div className="flex border rounded-lg">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className="rounded-r-none"
                  >
                    <Grid3X3 className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className="rounded-none"
                  >
                    <List className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'map' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('map')}
                    className="rounded-l-none"
                  >
                    <Map className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Properties Grid */}
            <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
              {properties.map((property) => (
                <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                  <div className="relative">
                    <div className="h-64 bg-gradient-to-br from-blue-100 to-purple-100 group-hover:scale-105 transition-transform duration-300"></div>
                    {property.featured && (
                      <Badge className="absolute top-4 left-4 bg-blue-600 shadow-lg">Featured</Badge>
                    )}
                    <Badge variant="secondary" className="absolute top-4 right-4 bg-white/90">
                      {property.status}
                    </Badge>
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
                        <h3 className="text-xl font-semibold mb-1 line-clamp-2">{property.title}</h3>
                        <p className="text-gray-600 flex items-center text-sm">
                          <MapPin className="w-4 h-4 mr-1" />
                          {property.location}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-blue-600">
                          {property.currency}{property.price.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{property.description}</p>

                    <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                      <span className="flex items-center">
                        <Bed className="w-4 h-4 mr-1" />
                        {property.beds} beds
                      </span>
                      <span className="flex items-center">
                        <Bath className="w-4 h-4 mr-1" />
                        {property.baths} baths
                      </span>
                      <span className="flex items-center">
                        <Square className="w-4 h-4 mr-1" />
                        {property.sqft} sq ft
                      </span>
                    </div>

                    {/* Agent Info */}
                    <div className="border-t pt-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                          <div>
                            <p className="font-medium text-sm">{property.agent.name}</p>
                            <div className="flex items-center space-x-1">
                              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                              <span className="text-xs text-gray-600">
                                {property.agent.rating} ({property.agent.reviews} reviews)
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Phone className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Mail className="w-4 h-4" />
                          </Button>
                          <Button size="sm">View Details</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" className="px-8">
                Load More Properties
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
