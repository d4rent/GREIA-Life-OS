'use client';

import { useState, useEffect } from 'react';
import { Search, Filter, MapPin, Bed, Bath, Square, Heart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import Image from 'next/image';
import Link from 'next/link';

interface Property {
  id: string;
  title: string;
  price: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  type: string;
  status: 'sale' | 'rent';
  featured: boolean;
  images: string[];
  agent: {
    name: string;
    avatar: string;
    rating: number;
  };
  amenities: string[];
  description: string;
}

const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Modern Apartment in Dublin',
    price: '€450,000',
    location: 'Dublin City Centre, Ireland',
    bedrooms: 2,
    bathrooms: 2,
    area: '850 sq ft',
    type: 'apartment',
    status: 'sale',
    featured: true,
    images: ['/images/property-1.jpg', '/images/property-1-2.jpg'],
    agent: {
      name: 'Sarah O\'Connor',
      avatar: '/images/agent-1.jpg',
      rating: 4.9
    },
    amenities: ['Parking', 'Balcony', 'Modern Kitchen', 'City Views'],
    description: 'Stunning modern apartment in the heart of Dublin with premium finishes and city views.'
  },
  {
    id: '2',
    title: 'Luxury Villa in Barcelona',
    price: '€1,200,000',
    location: 'Eixample, Barcelona, Spain',
    bedrooms: 4,
    bathrooms: 3,
    area: '2,100 sq ft',
    type: 'villa',
    status: 'sale',
    featured: true,
    images: ['/images/property-2.jpg', '/images/property-2-2.jpg'],
    agent: {
      name: 'Emma Thompson',
      avatar: '/images/agent-2.jpg',
      rating: 4.8
    },
    amenities: ['Pool', 'Garden', 'Garage', 'Terrace', 'Modern Kitchen'],
    description: 'Exquisite luxury villa with private pool and garden in prestigious Barcelona neighborhood.'
  },
  {
    id: '3',
    title: 'Penthouse in London',
    price: '£850,000',
    location: 'Canary Wharf, London, UK',
    bedrooms: 3,
    bathrooms: 2,
    area: '1,200 sq ft',
    type: 'penthouse',
    status: 'sale',
    featured: true,
    images: ['/images/property-3.jpg', '/images/property-3-2.jpg'],
    agent: {
      name: 'Michael Chen',
      avatar: '/images/agent-3.jpg',
      rating: 4.9
    },
    amenities: ['Thames Views', 'Concierge', 'Gym', 'Roof Terrace'],
    description: 'Spectacular penthouse with panoramic Thames views in prestigious Canary Wharf.'
  },
  {
    id: '4',
    title: 'Cozy Studio in Paris',
    price: '€2,800/month',
    location: 'Le Marais, Paris, France',
    bedrooms: 1,
    bathrooms: 1,
    area: '450 sq ft',
    type: 'studio',
    status: 'rent',
    featured: false,
    images: ['/images/property-4.jpg'],
    agent: {
      name: 'Marie Dubois',
      avatar: '/images/agent-4.jpg',
      rating: 4.7
    },
    amenities: ['Historic Building', 'Central Location', 'Furnished'],
    description: 'Charming studio apartment in the heart of historic Le Marais district.'
  },
  {
    id: '5',
    title: 'Modern Loft in Berlin',
    price: '€3,500/month',
    location: 'Mitte, Berlin, Germany',
    bedrooms: 2,
    bathrooms: 1,
    area: '950 sq ft',
    type: 'loft',
    status: 'rent',
    featured: false,
    images: ['/images/property-5.jpg'],
    agent: {
      name: 'Hans Mueller',
      avatar: '/images/agent-5.jpg',
      rating: 4.6
    },
    amenities: ['High Ceilings', 'Industrial Style', 'Central Location'],
    description: 'Stylish industrial loft in trendy Mitte district with high ceilings and modern amenities.'
  },
  {
    id: '6',
    title: 'Seaside Villa in Nice',
    price: '€2,200,000',
    location: 'French Riviera, Nice, France',
    bedrooms: 5,
    bathrooms: 4,
    area: '3,200 sq ft',
    type: 'villa',
    status: 'sale',
    featured: false,
    images: ['/images/property-6.jpg'],
    agent: {
      name: 'Sophie Laurent',
      avatar: '/images/agent-6.jpg',
      rating: 4.8
    },
    amenities: ['Sea Views', 'Private Beach Access', 'Pool', 'Garden'],
    description: 'Magnificent seaside villa with private beach access and stunning Mediterranean views.'
  }
];

export default function PropertiesPage() {
  const [properties, setProperties] = useState<Property[]>(mockProperties);
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(mockProperties);
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([0, 3000000]);
  const [propertyType, setPropertyType] = useState('all');
  const [status, setStatus] = useState('all');
  const [bedrooms, setBedrooms] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    let filtered = properties;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(property =>
        property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Property type filter
    if (propertyType !== 'all') {
      filtered = filtered.filter(property => property.type === propertyType);
    }

    // Status filter
    if (status !== 'all') {
      filtered = filtered.filter(property => property.status === status);
    }

    // Bedrooms filter
    if (bedrooms !== 'all') {
      filtered = filtered.filter(property => property.bedrooms >= parseInt(bedrooms));
    }

    // Sort properties
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'featured':
          return b.featured ? 1 : -1;
        case 'price-low':
          const priceA = parseFloat(a.price.replace(/[€£,]/g, ''));
          const priceB = parseFloat(b.price.replace(/[€£,]/g, ''));
          return priceA - priceB;
        case 'price-high':
          const priceA2 = parseFloat(a.price.replace(/[€£,]/g, ''));
          const priceB2 = parseFloat(b.price.replace(/[€£,]/g, ''));
          return priceB2 - priceA2;
        default:
          return 0;
      }
    });

    setFilteredProperties(filtered);
  }, [properties, searchTerm, priceRange, propertyType, status, bedrooms, sortBy]);

  const toggleFavorite = (propertyId: string) => {
    setFavorites(prev =>
      prev.includes(propertyId)
        ? prev.filter(id => id !== propertyId)
        : [...prev, propertyId]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Discover Your Perfect Property
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse our curated collection of premium properties from trusted partners worldwide
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Search by location, property type, or keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
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

      {/* Filters Panel */}
      {showFilters && (
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Property Type
                </label>
                <Select value={propertyType} onValueChange={setPropertyType}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="villa">Villa</SelectItem>
                    <SelectItem value="penthouse">Penthouse</SelectItem>
                    <SelectItem value="studio">Studio</SelectItem>
                    <SelectItem value="loft">Loft</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Status
                </label>
                <Select value={status} onValueChange={setStatus}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="sale">For Sale</SelectItem>
                    <SelectItem value="rent">For Rent</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bedrooms
                </label>
                <Select value={bedrooms} onValueChange={setBedrooms}>
                  <SelectTrigger>
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Any</SelectItem>
                    <SelectItem value="1">1+</SelectItem>
                    <SelectItem value="2">2+</SelectItem>
                    <SelectItem value="3">3+</SelectItem>
                    <SelectItem value="4">4+</SelectItem>
                    <SelectItem value="5">5+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sort By
                </label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue placeholder="Featured" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
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
            Showing {filteredProperties.length} of {properties.length} properties
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <Image
                  src={property.images[0] || '/images/placeholder-property.jpg'}
                  alt={property.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                {property.featured && (
                  <Badge className="absolute top-3 left-3 bg-blue-600">
                    Featured
                  </Badge>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-3 right-3 bg-white/80 hover:bg-white"
                  onClick={() => toggleFavorite(property.id)}
                >
                  <Heart
                    className={`h-4 w-4 ${
                      favorites.includes(property.id)
                        ? 'fill-red-500 text-red-500'
                        : 'text-gray-600'
                    }`}
                  />
                </Button>
              </div>

              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
                    {property.title}
                  </h3>
                  <Badge variant="outline" className="ml-2">
                    {property.status === 'sale' ? 'Sale' : 'Rent'}
                  </Badge>
                </div>

                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm line-clamp-1">{property.location}</span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Bed className="h-4 w-4 mr-1" />
                      {property.bedrooms}
                    </div>
                    <div className="flex items-center">
                      <Bath className="h-4 w-4 mr-1" />
                      {property.bathrooms}
                    </div>
                    <div className="flex items-center">
                      <Square className="h-4 w-4 mr-1" />
                      {property.area}
                    </div>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {property.description}
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-blue-600">
                      {property.price}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Image
                      src={property.agent.avatar || '/images/placeholder-avatar.jpg'}
                      alt={property.agent.name}
                      width={32}
                      height={32}
                      className="w-8 h-8 rounded-full"
                    />
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">
                        {property.agent.name}
                      </p>
                      <div className="flex items-center">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs text-gray-600 ml-1">
                          {property.agent.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t">
                  <div className="flex space-x-2">
                    <Button asChild className="flex-1">
                      <Link href={`/properties/${property.id}`}>
                        View Details
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm">
                      Contact Agent
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No properties found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search criteria or filters to find more properties.
              </p>
            </div>
          </div>
        )}

        {/* Load More */}
        {filteredProperties.length > 0 && filteredProperties.length >= 6 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Properties
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}