'use client';

import { useState } from 'react';
import { Search, Filter, Star, MapPin, Clock, CheckCircle, Phone, Mail, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';
import Link from 'next/link';

interface ServiceProvider {
  id: string;
  name: string;
  company: string;
  category: string;
  specialties: string[];
  rating: number;
  reviewCount: number;
  location: string;
  availability: 'available' | 'busy' | 'unavailable';
  responseTime: string;
  verified: boolean;
  avatar: string;
  coverImage: string;
  description: string;
  services: string[];
  pricing: {
    type: 'hourly' | 'fixed' | 'consultation';
    rate: string;
  };
  experience: string;
  languages: string[];
  certifications: string[];
}

const mockProviders: ServiceProvider[] = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    company: 'Elite Property Inspections',
    category: 'inspection',
    specialties: ['Structural Assessment', 'Electrical Systems', 'Plumbing'],
    rating: 4.9,
    reviewCount: 127,
    location: 'Dublin, Ireland',
    availability: 'available',
    responseTime: '< 2 hours',
    verified: true,
    avatar: '/images/inspector-1.jpg',
    coverImage: '/images/inspection-cover.jpg',
    description: 'Certified property inspector with 15+ years experience in residential and commercial properties.',
    services: ['Pre-purchase Inspection', 'Building Survey', 'Structural Assessment', 'Compliance Check'],
    pricing: {
      type: 'fixed',
      rate: '€350-€750'
    },
    experience: '15+ years',
    languages: ['English', 'Irish'],
    certifications: ['RICS Certified', 'Building Control Inspector']
  },
  {
    id: '2',
    name: 'Marcus Thompson',
    company: 'Thompson Legal Services',
    category: 'legal',
    specialties: ['Property Law', 'Contract Review', 'Due Diligence'],
    rating: 4.8,
    reviewCount: 89,
    location: 'London, UK',
    availability: 'available',
    responseTime: '< 1 hour',
    verified: true,
    avatar: '/images/lawyer-1.jpg',
    coverImage: '/images/legal-cover.jpg',
    description: 'Specialized property lawyer with expertise in international real estate transactions.',
    services: ['Contract Review', 'Legal Due Diligence', 'Title Search', 'Closing Services'],
    pricing: {
      type: 'hourly',
      rate: '£250/hour'
    },
    experience: '12+ years',
    languages: ['English', 'French'],
    certifications: ['Solicitor of England & Wales', 'Property Law Specialist']
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    company: 'Barcelona Home Finance',
    category: 'finance',
    specialties: ['Mortgage Advisory', 'Investment Analysis', 'Tax Planning'],
    rating: 4.9,
    reviewCount: 156,
    location: 'Barcelona, Spain',
    availability: 'busy',
    responseTime: '< 4 hours',
    verified: true,
    avatar: '/images/advisor-1.jpg',
    coverImage: '/images/finance-cover.jpg',
    description: 'Independent mortgage advisor specializing in international property financing.',
    services: ['Mortgage Advisory', 'Investment Analysis', 'Tax Optimization', 'Portfolio Review'],
    pricing: {
      type: 'consultation',
      rate: 'Free consultation'
    },
    experience: '10+ years',
    languages: ['Spanish', 'English', 'Catalan'],
    certifications: ['CeMAP Qualified', 'Investment Advisory License']
  },
  {
    id: '4',
    name: 'James Wilson',
    company: 'Wilson Property Management',
    category: 'management',
    specialties: ['Rental Management', 'Maintenance', 'Tenant Relations'],
    rating: 4.7,
    reviewCount: 203,
    location: 'Manchester, UK',
    availability: 'available',
    responseTime: '< 3 hours',
    verified: true,
    avatar: '/images/manager-1.jpg',
    coverImage: '/images/management-cover.jpg',
    description: 'Full-service property management with focus on maximizing rental yields.',
    services: ['Rental Management', 'Property Maintenance', 'Tenant Screening', 'Financial Reporting'],
    pricing: {
      type: 'fixed',
      rate: '8-12% of rental income'
    },
    experience: '8+ years',
    languages: ['English'],
    certifications: ['ARLA Propertymark', 'Property Management Qualified']
  },
  {
    id: '5',
    name: 'Sophie Laurent',
    company: 'Riviera Renovations',
    category: 'renovation',
    specialties: ['Luxury Renovations', 'Interior Design', 'Project Management'],
    rating: 4.8,
    reviewCount: 94,
    location: 'Nice, France',
    availability: 'available',
    responseTime: '< 2 hours',
    verified: true,
    avatar: '/images/renovator-1.jpg',
    coverImage: '/images/renovation-cover.jpg',
    description: 'Award-winning renovation specialist for luxury properties on the French Riviera.',
    services: ['Complete Renovations', 'Interior Design', 'Kitchen & Bath Remodeling', 'Luxury Finishes'],
    pricing: {
      type: 'consultation',
      rate: '€150 consultation'
    },
    experience: '12+ years',
    languages: ['French', 'English', 'Italian'],
    certifications: ['Licensed Contractor', 'Interior Design Certified']
  },
  {
    id: '6',
    name: 'David Chen',
    company: 'Chen Insurance Solutions',
    category: 'insurance',
    specialties: ['Property Insurance', 'Liability Coverage', 'International Policies'],
    rating: 4.6,
    reviewCount: 78,
    location: 'Hong Kong',
    availability: 'available',
    responseTime: '< 1 hour',
    verified: true,
    avatar: '/images/insurance-1.jpg',
    coverImage: '/images/insurance-cover.jpg',
    description: 'International property insurance specialist with global coverage expertise.',
    services: ['Property Insurance', 'Liability Coverage', 'Portfolio Insurance', 'Claims Management'],
    pricing: {
      type: 'consultation',
      rate: 'Free quote'
    },
    experience: '9+ years',
    languages: ['English', 'Mandarin', 'Cantonese'],
    certifications: ['Insurance Broker License', 'International Insurance Specialist']
  }
];

const serviceCategories = [
  { id: 'all', name: 'All Services', icon: '🏠' },
  { id: 'inspection', name: 'Property Inspection', icon: '🔍' },
  { id: 'legal', name: 'Legal Services', icon: '⚖️' },
  { id: 'finance', name: 'Finance & Mortgage', icon: '💰' },
  { id: 'management', name: 'Property Management', icon: '🏢' },
  { id: 'renovation', name: 'Renovation & Design', icon: '🔨' },
  { id: 'insurance', name: 'Insurance', icon: '🛡️' }
];

export default function ServicesPage() {
  const [providers, setProviders] = useState<ServiceProvider[]>(mockProviders);
  const [filteredProviders, setFilteredProviders] = useState<ServiceProvider[]>(mockProviders);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('rating');
  const [showFilters, setShowFilters] = useState(false);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    filterProviders(term, selectedCategory, sortBy);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    filterProviders(searchTerm, category, sortBy);
  };

  const handleSortChange = (sort: string) => {
    setSortBy(sort);
    filterProviders(searchTerm, selectedCategory, sort);
  };

  const filterProviders = (search: string, category: string, sort: string) => {
    let filtered = providers;

    // Search filter
    if (search) {
      filtered = filtered.filter(provider =>
        provider.name.toLowerCase().includes(search.toLowerCase()) ||
        provider.company.toLowerCase().includes(search.toLowerCase()) ||
        provider.specialties.some(specialty => 
          specialty.toLowerCase().includes(search.toLowerCase())
        ) ||
        provider.location.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Category filter
    if (category !== 'all') {
      filtered = filtered.filter(provider => provider.category === category);
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sort) {
        case 'rating':
          return b.rating - a.rating;
        case 'reviews':
          return b.reviewCount - a.reviewCount;
        case 'name':
          return a.name.localeCompare(b.name);
        case 'availability':
          const availabilityOrder = { available: 0, busy: 1, unavailable: 2 };
          return availabilityOrder[a.availability] - availabilityOrder[b.availability];
        default:
          return 0;
      }
    });

    setFilteredProviders(filtered);
  };

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'available':
        return 'bg-green-100 text-green-800';
      case 'busy':
        return 'bg-yellow-100 text-yellow-800';
      case 'unavailable':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Professional Property Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with verified professionals for all your property needs - from inspections to legal services
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Search by service, location, or professional name..."
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="pl-10 h-12 text-lg"
                />
              </div>
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="h-12 px-6"
              >
                <Filter className="h-5 w-5 mr-2" />
                Filters
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Service Categories */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Tabs value={selectedCategory} onValueChange={handleCategoryChange}>
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-7">
              {serviceCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="text-xs sm:text-sm">
                  <span className="mr-1">{category.icon}</span>
                  <span className="hidden sm:inline">{category.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sort By
                </label>
                <Select value={sortBy} onValueChange={handleSortChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sort by..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="reviews">Most Reviews</SelectItem>
                    <SelectItem value="name">Name A-Z</SelectItem>
                    <SelectItem value="availability">Availability</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            Showing {filteredProviders.length} of {providers.length} professionals
          </p>
        </div>

        {/* Providers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProviders.map((provider) => (
            <Card key={provider.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-32 bg-gradient-to-r from-blue-500 to-purple-600">
                <Image
                  src={provider.coverImage || '/images/placeholder-cover.jpg'}
                  alt={`${provider.company} cover`}
                  fill
                  className="object-cover opacity-80"
                />
                <div className="absolute top-4 right-4">
                  <Badge className={getAvailabilityColor(provider.availability)}>
                    {provider.availability}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <Image
                    src={provider.avatar || '/images/placeholder-avatar.jpg'}
                    alt={provider.name}
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-full border-4 border-white -mt-8 relative z-10"
                  />
                  <div className="flex-1 pt-2">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {provider.name}
                      </h3>
                      {provider.verified && (
                        <CheckCircle className="h-5 w-5 text-blue-500" />
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-1">{provider.company}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                        <span className="font-medium">{provider.rating}</span>
                        <span className="ml-1">({provider.reviewCount} reviews)</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {provider.location}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-2">
                  {provider.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Specialties</h4>
                  <div className="flex flex-wrap gap-2">
                    {provider.specialties.slice(0, 3).map((specialty, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                    {provider.specialties.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{provider.specialties.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <span className="text-gray-500">Experience:</span>
                    <span className="ml-2 font-medium">{provider.experience}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Response:</span>
                    <span className="ml-2 font-medium">{provider.responseTime}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Pricing:</span>
                    <span className="ml-2 font-medium">{provider.pricing.rate}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Languages:</span>
                    <span className="ml-2 font-medium">{provider.languages.join(', ')}</span>
                  </div>
                </div>

                <div className="flex space-x-3 pt-4 border-t">
                  <Button asChild className="flex-1">
                    <Link href={`/services/${provider.id}`}>
                      View Profile
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm">
                    <Phone className="h-4 w-4 mr-1" />
                    Call
                  </Button>
                  <Button variant="outline" size="sm">
                    <Mail className="h-4 w-4 mr-1" />
                    Email
                  </Button>
                  <Button variant="outline" size="sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    Book
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProviders.length === 0 && (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No professionals found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search criteria or filters to find more professionals.
              </p>
            </div>
          </div>
        )}

        {/* Load More */}
        {filteredProviders.length > 0 && filteredProviders.length >= 6 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Professionals
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}