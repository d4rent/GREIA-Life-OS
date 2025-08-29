'use client'

import { useState } from 'react'
import Navigation from '@/components/shared/Navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { 
  Search, 
  Filter, 
  MapPin, 
  Star,
  Calendar,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  Award,
  Briefcase,
  Hammer,
  PaintBucket,
  Calculator,
  Scale,
  Home,
  Users
} from 'lucide-react'

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const professionals = [
    {
      id: 1,
      name: "John Smith",
      title: "Licensed Architect",
      company: "Smith Architecture Studio",
      location: "Dublin, Ireland",
      rating: 4.9,
      reviews: 127,
      hourlyRate: 85,
      availability: "Available",
      verified: true,
      specialties: ["Residential Design", "Sustainable Architecture", "Planning Permission"],
      description: "Award-winning architect specializing in sustainable residential and commercial design.",
      avatar: "/api/placeholder/80/80"
    },
    {
      id: 2,
      name: "David Chen",
      title: "Mortgage Broker",
      company: "Chen Financial Solutions",
      location: "London, UK",
      rating: 4.9,
      reviews: 89,
      hourlyRate: 0,
      availability: "Available",
      verified: true,
      consultation: "Free",
      specialties: ["First-time Buyers", "Investment Properties", "Remortgaging"],
      description: "Experienced mortgage broker helping clients secure the best rates and terms.",
      avatar: "/api/placeholder/80/80"
    },
    {
      id: 3,
      name: "Sarah Wilson",
      title: "Interior Designer",
      company: "Wilson Design Studio",
      location: "Barcelona, Spain",
      rating: 4.8,
      reviews: 156,
      hourlyRate: 75,
      availability: "Available",
      verified: true,
      specialties: ["Modern Design", "Space Planning", "Color Consultation"],
      description: "Creative interior designer with expertise in modern and contemporary spaces.",
      avatar: "/api/placeholder/80/80"
    },
    {
      id: 4,
      name: "Michael O'Brien",
      title: "General Contractor",
      company: "O'Brien Construction",
      location: "Cork, Ireland",
      rating: 4.7,
      reviews: 203,
      hourlyRate: 65,
      availability: "Busy",
      verified: true,
      specialties: ["Home Renovation", "Kitchen Remodeling", "Bathroom Renovation"],
      description: "Reliable contractor with 15+ years experience in residential renovations.",
      avatar: "/api/placeholder/80/80"
    },
    {
      id: 5,
      name: "Emma Thompson",
      title: "Property Lawyer",
      company: "Thompson Legal",
      location: "Manchester, UK",
      rating: 4.9,
      reviews: 98,
      hourlyRate: 120,
      availability: "Available",
      verified: true,
      specialties: ["Property Transactions", "Contract Review", "Dispute Resolution"],
      description: "Experienced property lawyer specializing in residential and commercial transactions.",
      avatar: "/api/placeholder/80/80"
    },
    {
      id: 6,
      name: "Lisa Martinez",
      title: "Home Inspector",
      company: "Martinez Inspections",
      location: "Madrid, Spain",
      rating: 4.8,
      reviews: 134,
      hourlyRate: 95,
      availability: "Available",
      verified: true,
      specialties: ["Pre-purchase Inspections", "New Construction", "Commercial Properties"],
      description: "Certified home inspector providing comprehensive property assessments.",
      avatar: "/api/placeholder/80/80"
    }
  ]

  const categories = [
    { id: 'all', label: 'All Services', icon: Briefcase },
    { id: 'construction', label: 'Construction & Trades', icon: Hammer },
    { id: 'architecture', label: 'Architecture & Design', icon: PaintBucket },
    { id: 'financial', label: 'Financial Services', icon: Calculator },
    { id: 'legal', label: 'Legal Services', icon: Scale },
    { id: 'maintenance', label: 'Home Maintenance', icon: Home },
    { id: 'consulting', label: 'Consulting', icon: Users }
  ]

  const filteredProfessionals = selectedCategory === 'all' 
    ? professionals 
    : professionals.filter(p => {
        // Simple category filtering logic
        if (selectedCategory === 'construction') return p.title.includes('Contractor') || p.title.includes('Inspector')
        if (selectedCategory === 'architecture') return p.title.includes('Architect') || p.title.includes('Designer')
        if (selectedCategory === 'financial') return p.title.includes('Mortgage')
        if (selectedCategory === 'legal') return p.title.includes('Lawyer')
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
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Professional Services</h1>
              <p className="text-gray-600">Connect with verified professionals for all your property needs</p>
            </div>
            
            {/* Search Bar */}
            <div className="flex-1 max-w-2xl">
              <div className="flex gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input 
                    placeholder="Search services or professionals..."
                    className="pl-12 pr-4 py-3 text-base rounded-xl border-gray-200 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <Input 
                  placeholder="Location..."
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
          <p className="text-gray-600">{filteredProfessionals.length} professionals found</p>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              More Filters
            </Button>
            <select className="px-3 py-2 border border-gray-200 rounded-lg text-sm">
              <option>Highest Rated</option>
              <option>Lowest Price</option>
              <option>Most Reviews</option>
              <option>Recently Active</option>
            </select>
          </div>
        </div>

        {/* Professionals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProfessionals.map((professional) => (
            <Card key={professional.id} className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={professional.avatar} />
                    <AvatarFallback className="text-lg font-semibold">
                      {professional.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="text-xl font-semibold truncate">{professional.name}</h3>
                      {professional.verified && (
                        <Badge variant="secondary" className="text-xs">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Verified
                        </Badge>
                      )}
                    </div>
                    <p className="text-gray-600 font-medium">{professional.title}</p>
                    <p className="text-gray-500 text-sm">{professional.company}</p>
                    <p className="text-gray-500 text-sm flex items-center mt-1">
                      <MapPin className="w-3 h-3 mr-1" />
                      {professional.location}
                    </p>
                  </div>

                  <div className="text-right">
                    <div className="flex items-center space-x-1 mb-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{professional.rating}</span>
                      <span className="text-gray-500 text-sm">({professional.reviews})</span>
                    </div>
                    <Badge 
                      variant={professional.availability === 'Available' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {professional.availability}
                    </Badge>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{professional.description}</p>

                {/* Specialties */}
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Specialties:</p>
                  <div className="flex flex-wrap gap-1">
                    {professional.specialties.map((specialty, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Pricing and Actions */}
                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    {professional.consultation === 'Free' ? (
                      <div className="text-green-600 font-semibold">Free Consultation</div>
                    ) : (
                      <div>
                        <span className="text-2xl font-bold text-blue-600">€{professional.hourlyRate}</span>
                        <span className="text-gray-500 text-sm">/hour</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Phone className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Mail className="w-4 h-4" />
                    </Button>
                    <Button size="sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Now
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
            Load More Professionals
          </Button>
        </div>
      </main>
    </div>
  )
}
