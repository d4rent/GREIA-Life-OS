'use client';

import { useState } from 'react';
import { Search, Filter, MapPin, Star, Calendar, Clock, Users, Heart, Phone, Mail, Globe, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';
import Link from 'next/link';

interface LeisureExperience {
  id: string;
  title: string;
  category: string;
  location: string;
  country: string;
  description: string;
  images: string[];
  rating: number;
  reviewCount: number;
  duration: string;
  groupSize: string;
  price: {
    amount: number;
    currency: string;
    per: string;
  };
  highlights: string[];
  included: string[];
  provider: {
    name: string;
    avatar: string;
    verified: boolean;
    rating: number;
  };
  availability: 'available' | 'limited' | 'booked';
  tags: string[];
  featured: boolean;
  propertyConnection?: {
    propertyId: string;
    propertyName: string;
    distance: string;
  };
}

const mockExperiences: LeisureExperience[] = [
  {
    id: '1',
    title: 'Private Wine Tasting in Tuscany Villa',
    category: 'wine',
    location: 'Florence',
    country: 'Italy',
    description: 'Exclusive wine tasting experience in a historic Tuscan villa with panoramic vineyard views. Learn about traditional winemaking while sampling premium Chianti and Brunello wines.',
    images: ['/images/tuscany-wine.jpg', '/images/villa-terrace.jpg'],
    rating: 4.9,
    reviewCount: 87,
    duration: '4 hours',
    groupSize: '2-8 people',
    price: {
      amount: 180,
      currency: '€',
      per: 'person'
    },
    highlights: [
      'Private villa setting',
      'Expert sommelier guide',
      'Premium wine selection',
      'Traditional Italian lunch'
    ],
    included: [
      'Wine tasting (6 varieties)',
      'Traditional lunch',
      'Transportation from Florence',
      'Professional guide'
    ],
    provider: {
      name: 'Marco Rossi',
      avatar: '/images/guide-marco.jpg',
      verified: true,
      rating: 4.8
    },
    availability: 'available',
    tags: ['luxury', 'food-wine', 'cultural'],
    featured: true,
    propertyConnection: {
      propertyId: 'prop-123',
      propertyName: 'Villa Bella Vista',
      distance: '2.5km'
    }
  },
  {
    id: '2',
    title: 'Sunset Yacht Charter in Barcelona',
    category: 'marine',
    location: 'Barcelona',
    country: 'Spain',
    description: 'Luxury yacht charter along the Barcelona coastline with stunning sunset views. Includes premium drinks, tapas, and swimming stops at secluded coves.',
    images: ['/images/barcelona-yacht.jpg', '/images/sunset-sailing.jpg'],
    rating: 4.8,
    reviewCount: 124,
    duration: '3 hours',
    groupSize: '2-12 people',
    price: {
      amount: 150,
      currency: '€',
      per: 'person'
    },
    highlights: [
      'Luxury yacht experience',
      'Sunset sailing',
      'Premium drinks included',
      'Swimming stops'
    ],
    included: [
      'Yacht charter',
      'Professional captain',
      'Premium drinks & tapas',
      'Snorkeling equipment'
    ],
    provider: {
      name: 'Captain Elena',
      avatar: '/images/captain-elena.jpg',
      verified: true,
      rating: 4.9
    },
    availability: 'available',
    tags: ['luxury', 'marine', 'sunset'],
    featured: true
  },
  {
    id: '3',
    title: 'Private Chef Experience in London Penthouse',
    category: 'culinary',
    location: 'London',
    country: 'UK',
    description: 'Michelin-starred chef creates a bespoke dining experience in your luxury accommodation. Multi-course tasting menu with wine pairings.',
    images: ['/images/london-chef.jpg', '/images/fine-dining.jpg'],
    rating: 4.9,
    reviewCount: 56,
    duration: '3.5 hours',
    groupSize: '2-10 people',
    price: {
      amount: 250,
      currency: '£',
      per: 'person'
    },
    highlights: [
      'Michelin-starred chef',
      'Bespoke menu creation',
      'Premium wine pairings',
      'In-home dining'
    ],
    included: [
      'Private chef service',
      '7-course tasting menu',
      'Wine pairings',
      'All ingredients & equipment'
    ],
    provider: {
      name: 'Chef James Wilson',
      avatar: '/images/chef-james.jpg',
      verified: true,
      rating: 4.9
    },
    availability: 'limited',
    tags: ['luxury', 'culinary', 'exclusive'],
    featured: true
  },
  {
    id: '4',
    title: 'Helicopter Tour of French Riviera',
    category: 'adventure',
    location: 'Nice',
    country: 'France',
    description: 'Breathtaking helicopter tour over the French Riviera coastline. See Monaco, Cannes, and stunning Mediterranean views from above.',
    images: ['/images/helicopter-riviera.jpg', '/images/monaco-aerial.jpg'],
    rating: 4.7,
    reviewCount: 93,
    duration: '45 minutes',
    groupSize: '1-3 people',
    price: {
      amount: 320,
      currency: '€',
      per: 'person'
    },
    highlights: [
      'Aerial coastline views',
      'Monaco flyover',
      'Professional pilot',
      'Photo opportunities'
    ],
    included: [
      'Helicopter flight',
      'Professional pilot guide',
      'Safety equipment',
      'Complimentary photos'
    ],
    provider: {
      name: 'Riviera Helicopters',
      avatar: '/images/helicopter-company.jpg',
      verified: true,
      rating: 4.8
    },
    availability: 'available',
    tags: ['adventure', 'aerial', 'luxury'],
    featured: false
  },
  {
    id: '5',
    title: 'Private Art Gallery Tour in Paris',
    category: 'cultural',
    location: 'Paris',
    country: 'France',
    description: 'Exclusive after-hours tour of renowned Parisian galleries with art historian guide. Skip the crowds and enjoy intimate access to masterpieces.',
    images: ['/images/paris-gallery.jpg', '/images/art-tour.jpg'],
    rating: 4.8,
    reviewCount: 67,
    duration: '2.5 hours',
    groupSize: '2-6 people',
    price: {
      amount: 120,
      currency: '€',
      per: 'person'
    },
    highlights: [
      'After-hours access',
      'Expert art historian',
      'Skip the crowds',
      'Exclusive insights'
    ],
    included: [
      'Private gallery access',
      'Art historian guide',
      'Skip-the-line entry',
      'Refreshments'
    ],
    provider: {
      name: 'Dr. Marie Dubois',
      avatar: '/images/art-historian.jpg',
      verified: true,
      rating: 4.9
    },
    availability: 'available',
    tags: ['cultural', 'art', 'exclusive'],
    featured: false
  },
  {
    id: '6',
    title: 'Spa & Wellness Retreat in Swiss Alps',
    category: 'wellness',
    location: 'Zermatt',
    country: 'Switzerland',
    description: 'Luxury spa day with Alpine views. Includes massage treatments, thermal baths, and healthy gourmet lunch in mountain setting.',
    images: ['/images/alpine-spa.jpg', '/images/mountain-wellness.jpg'],
    rating: 4.9,
    reviewCount: 78,
    duration: '6 hours',
    groupSize: '1-4 people',
    price: {
      amount: 280,
      currency: 'CHF',
      per: 'person'
    },
    highlights: [
      'Alpine spa setting',
      'Thermal bath access',
      'Professional treatments',
      'Healthy gourmet lunch'
    ],
    included: [
      'Spa facility access',
      '90-minute massage',
      'Thermal baths',
      'Healthy lunch'
    ],
    provider: {
      name: 'Alpine Wellness Resort',
      avatar: '/images/spa-resort.jpg',
      verified: true,
      rating: 4.8
    },
    availability: 'available',
    tags: ['wellness', 'luxury', 'mountain'],
    featured: false
  }
];

const categories = [
  { id: 'all', name: 'All Experiences', icon: '🌟' },
  { id: 'culinary', name: 'Culinary', icon: '🍷' },
  { id: 'cultural', name: 'Cultural', icon: '🎨' },
  { id: 'adventure', name: 'Adventure', icon: '🚁' },
  { id: 'wellness', name: 'Wellness', icon: '🧘' },
  { id: 'marine', name: 'Marine', icon: '⛵' },
  { id: 'wine', name: 'Wine & Dining', icon: '🍾' }
];

export default function LeisurePage() {
  const [experiences, setExperiences] = useState<LeisureExperience[]>(mockExperiences);
  const [filteredExperiences, setFilteredExperiences] = useState<LeisureExperience[]>(mockExperiences);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    filterExperiences(term, selectedCategory, selectedLocation, sortBy);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    filterExperiences(searchTerm, category, selectedLocation, sortBy);
  };

  const handleLocationChange = (location: string) => {
    setSelectedLocation(location);
    filterExperiences(searchTerm, selectedCategory, location, sortBy);
  };

  const handleSortChange = (sort: string) => {
    setSortBy(sort);
    filterExperiences(searchTerm, selectedCategory, selectedLocation, sort);
  };

  const filterExperiences = (search: string, category: string, location: string, sort: string) => {
    let filtered = experiences;

    // Search filter
    if (search) {
      filtered = filtered.filter(exp =>
        exp.title.toLowerCase().includes(search.toLowerCase()) ||
        exp.description.toLowerCase().includes(search.toLowerCase()) ||
        exp.location.toLowerCase().includes(search.toLowerCase()) ||
        exp.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
      );
    }

    // Category filter
    if (category !== 'all') {
      filtered = filtered.filter(exp => exp.category === category);
    }

    // Location filter
    if (location !== 'all') {
      filtered = filtered.filter(exp => 
        exp.location.toLowerCase().includes(location.toLowerCase()) ||
        exp.country.toLowerCase().includes(location.toLowerCase())
      );
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sort) {
        case 'featured':
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return b.rating - a.rating;
        case 'rating':
          return b.rating - a.rating;
        case 'price-low':
          return a.price.amount - b.price.amount;
        case 'price-high':
          return b.price.amount - a.price.amount;
        case 'duration':
          return parseInt(a.duration) - parseInt(b.duration);
        default:
          return 0;
      }
    });

    setFilteredExperiences(filtered);
  };

  const toggleFavorite = (experienceId: string) => {
    setFavorites(prev => 
      prev.includes(experienceId) 
        ? prev.filter(id => id !== experienceId)
        : [...prev, experienceId]
    );
  };

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'available':
        return 'bg-green-100 text-green-800';
      case 'limited':
        return 'bg-yellow-100 text-yellow-800';
      case 'booked':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const locations = ['all', 'florence', 'barcelona', 'london', 'nice', 'paris', 'zermatt'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Luxury Leisure Experiences
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover curated experiences that complement your property stays - from private dining to exclusive tours
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Search experiences, locations, or activities..."
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

      {/* Category Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Tabs value={selectedCategory} onValueChange={handleCategoryChange}>
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-7">
              {categories.map((category) => (
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
                  Location
                </label>
                <Select value={selectedLocation} onValueChange={handleLocationChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Locations" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map(location => (
                      <SelectItem key={location} value={location}>
                        {location === 'all' ? 'All Locations' : location.charAt(0).toUpperCase() + location.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sort By
                </label>
                <Select value={sortBy} onValueChange={handleSortChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sort by..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured First</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="duration">Duration</SelectItem>
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
            Showing {filteredExperiences.length} of {experiences.length} experiences
          </p>
        </div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredExperiences.map((experience) => (
            <Card key={experience.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src={experience.images[0] || '/images/placeholder-experience.jpg'}
                  alt={experience.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  {experience.featured && (
                    <Badge className="bg-yellow-500 text-white">
                      Featured
                    </Badge>
                  )}
                </div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => toggleFavorite(experience.id)}
                    className="p-2"
                  >
                    <Heart 
                      className={`h-4 w-4 ${
                        favorites.includes(experience.id) 
                          ? 'fill-red-500 text-red-500' 
                          : 'text-gray-600'
                      }`} 
                    />
                  </Button>
                  <Badge className={getAvailabilityColor(experience.availability)}>
                    {experience.availability}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                    {experience.title}
                  </h3>
                </div>

                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {experience.location}, {experience.country}
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                    <span className="font-medium">{experience.rating}</span>
                    <span className="ml-1">({experience.reviewCount})</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-2">
                  {experience.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-gray-400 mr-2" />
                    <span>{experience.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 text-gray-400 mr-2" />
                    <span>{experience.groupSize}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Highlights</h4>
                  <div className="space-y-1">
                    {experience.highlights.slice(0, 3).map((highlight, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>

                {experience.propertyConnection && (
                  <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center text-sm text-blue-800">
                      <Globe className="h-4 w-4 mr-2" />
                      <span>Near {experience.propertyConnection.propertyName}</span>
                      <span className="ml-auto">{experience.propertyConnection.distance}</span>
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center space-x-3">
                    <Image
                      src={experience.provider.avatar || '/images/placeholder-avatar.jpg'}
                      alt={experience.provider.name}
                      width={32}
                      height={32}
                      className="w-8 h-8 rounded-full"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {experience.provider.name}
                      </p>
                      <div className="flex items-center">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                        <span className="text-xs text-gray-500">{experience.provider.rating}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-gray-900">
                      {experience.price.currency}{experience.price.amount}
                    </p>
                    <p className="text-xs text-gray-500">per {experience.price.per}</p>
                  </div>
                </div>

                <div className="flex space-x-2 mt-4">
                  <Button asChild className="flex-1">
                    <Link href={`/leisure/${experience.id}`}>
                      View Details
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm">
                    <Phone className="h-4 w-4 mr-1" />
                    Call
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

        {filteredExperiences.length === 0 && (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No experiences found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search criteria or filters to find more experiences.
              </p>
            </div>
          </div>
        )}

        {/* Load More */}
        {filteredExperiences.length > 0 && filteredExperiences.length >= 6 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Experiences
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}