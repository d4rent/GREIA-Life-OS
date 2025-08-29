const __basePath__ = process.env.NEXT_PUBLIC_BASE_PATH || "";
'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/shared/Navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
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
  Building,
  Users,
  Coffee,
  Briefcase,
  Play
} from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section - Fixed image display and perfect centering */}
      <section className="relative h-screen bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center">
        <div className="text-center text-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Text Image - Using background image approach for better loading */}
          <div 
            className="mb-12 flex justify-center items-center h-96 bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(${__basePath__}/hero-text.png)',
              maxWidth: '1200px',
              margin: '0 auto'
            }}
          >
            {/* Fallback text in case image doesn't load */}
            <span className="sr-only">My Home Worldwide</span>
          </div>

          {/* Category Buttons - Better contrast and spacing */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link href="/properties">
              <Button 
                size="lg" 
                className="bg-white/95 text-blue-600 hover:bg-white hover:shadow-lg px-8 py-4 rounded-full font-semibold text-base transition-all duration-200"
              >
                <Building className="w-5 h-5 mr-2" />
                Properties
              </Button>
            </Link>
            <Link href="/connect">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white bg-white/20 backdrop-blur-sm text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-semibold text-base transition-all duration-200 shadow-lg"
              >
                <Users className="w-5 h-5 mr-2" />
                Connect
              </Button>
            </Link>
            <Link href="/services">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white bg-white/20 backdrop-blur-sm text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-semibold text-base transition-all duration-200 shadow-lg"
              >
                <Star className="w-5 h-5 mr-2" />
                Services
              </Button>
            </Link>
            <Link href="/leisure">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white bg-white/20 backdrop-blur-sm text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-semibold text-base transition-all duration-200 shadow-lg"
              >
                <Coffee className="w-5 h-5 mr-2" />
                Leisure
              </Button>
            </Link>
          </div>

          {/* Search Bar - Better contrast and spacing */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex-1 relative w-full">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                <Input 
                  placeholder="Search properties, locations, or agents..."
                  className="pl-12 pr-4 py-4 text-base border-0 focus:ring-2 focus:ring-blue-500 bg-gray-50/50 rounded-xl"
                />
              </div>
              <Button variant="outline" size="lg" className="px-6 py-4 rounded-xl border-gray-200">
                <Filter className="w-5 h-5" />
              </Button>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-10 py-4 rounded-xl font-semibold">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Properties Section */}
          <section className="mb-24">
            <div className="text-center mb-16">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Featured Properties</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover handpicked properties from our global network of trusted partners
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Property Card 1 */}
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative">
                  <div className="h-96 bg-gradient-to-br from-blue-100 to-teal-100 group-hover:scale-105 transition-transform duration-300"></div>
                  <Badge className="absolute top-4 left-4 bg-blue-600 shadow-lg">Featured</Badge>
                  <div className="absolute top-4 right-4 flex space-x-2">
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
                    <h3 className="text-lg font-semibold">Modern Apartment in Dublin</h3>
                    <span className="text-xl font-bold text-blue-600">€450,000</span>
                  </div>
                  <p className="text-gray-600 mb-4 flex items-center text-sm">
                    <MapPin className="w-4 h-4 mr-2" />
                    Dublin City Centre, Ireland
                  </p>
                  <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                    <span className="flex items-center">
                      <Bed className="w-4 h-4 mr-1" />
                      2 beds
                    </span>
                    <span className="flex items-center">
                      <Bath className="w-4 h-4 mr-1" />
                      2 baths
                    </span>
                    <span className="flex items-center">
                      <Square className="w-4 h-4 mr-1" />
                      850 sq ft
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                      <span className="text-sm font-medium">Sarah O'Connor</span>
                    </div>
                    <Button size="sm" className="rounded-full">View Details</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Property Card 2 */}
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative">
                  <div className="h-96 bg-gradient-to-br from-purple-100 to-pink-100 group-hover:scale-105 transition-transform duration-300"></div>
                  <Badge className="absolute top-4 left-4 bg-purple-600 shadow-lg">Featured</Badge>
                  <div className="absolute top-4 right-4 flex space-x-2">
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
                    <h3 className="text-lg font-semibold">Luxury Villa in Barcelona</h3>
                    <span className="text-xl font-bold text-purple-600">€1,200,000</span>
                  </div>
                  <p className="text-gray-600 mb-4 flex items-center text-sm">
                    <MapPin className="w-4 h-4 mr-2" />
                    Eixample, Barcelona, Spain
                  </p>
                  <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                    <span className="flex items-center">
                      <Bed className="w-4 h-4 mr-1" />
                      4 beds
                    </span>
                    <span className="flex items-center">
                      <Bath className="w-4 h-4 mr-1" />
                      3 baths
                    </span>
                    <span className="flex items-center">
                      <Square className="w-4 h-4 mr-1" />
                      2,100 sq ft
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                      <span className="text-sm font-medium">Emma Thompson</span>
                    </div>
                    <Button size="sm" className="rounded-full">View Details</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Property Card 3 */}
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative">
                  <div className="h-96 bg-gradient-to-br from-green-100 to-blue-100 group-hover:scale-105 transition-transform duration-300"></div>
                  <Badge className="absolute top-4 left-4 bg-green-600 shadow-lg">Featured</Badge>
                  <div className="absolute top-4 right-4 flex space-x-2">
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
                    <h3 className="text-lg font-semibold">Penthouse in London</h3>
                    <span className="text-xl font-bold text-green-600">£850,000</span>
                  </div>
                  <p className="text-gray-600 mb-4 flex items-center text-sm">
                    <MapPin className="w-4 h-4 mr-2" />
                    Canary Wharf, London, UK
                  </p>
                  <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                    <span className="flex items-center">
                      <Bed className="w-4 h-4 mr-1" />
                      3 beds
                    </span>
                    <span className="flex items-center">
                      <Bath className="w-4 h-4 mr-1" />
                      2 baths
                    </span>
                    <span className="flex items-center">
                      <Square className="w-4 h-4 mr-1" />
                      1,200 sq ft
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                      <span className="text-sm font-medium">Michael Chen</span>
                    </div>
                    <Button size="sm" className="rounded-full">View Details</Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-16">
              <Link href="/properties">
                <Button variant="outline" size="lg" className="rounded-full px-8">
                  View All Properties
                </Button>
              </Link>
            </div>
          </section>

          {/* Why Choose GREIA Section */}
          <section className="mb-24">
            <div className="text-center mb-16">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose GREIA</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Experience the future of property services with our comprehensive platform
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Global Property Network</h3>
                <p className="text-gray-600">Access properties worldwide with local expertise and trusted partners</p>
              </Card>

              <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Verified Professionals</h3>
                <p className="text-gray-600">Connect with certified agents and service providers you can trust</p>
              </Card>

              <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Premium Concierge</h3>
                <p className="text-gray-600">White-glove service for your complete property journey</p>
              </Card>
            </div>
          </section>

          {/* CTA Section - Fixed button text and styling */}
          <section className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-3xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Home?</h2>
            <p className="text-lg mb-8 opacity-90">
              Join thousands of satisfied clients who found their dream properties through GREIA
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold">
                Get Started Free
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full font-semibold transition-all duration-200"
              >
                <Play className="w-4 h-4 mr-2" />
                Watch Demo
              </Button>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <Image 
                src="/greia-logo.png" 
                alt="GREIA" 
                width={120} 
                height={40}
                className="h-10 w-auto mb-4 filter brightness-0 invert"
              />
              <p className="text-gray-400 leading-relaxed">
                Your global property and services marketplace. Connecting people with their perfect homes and trusted professionals worldwide.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Email</h4>
              <p className="text-gray-400">hello@greia.com</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Phone</h4>
              <p className="text-gray-400">+1 (555) 123-4567</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Location</h4>
              <p className="text-gray-400">Global Headquarters</p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2025 GREIA. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
