'use client';

import { useState } from 'react';
import { Search, Filter, MapPin, Star, MessageCircle, Phone, Mail, Calendar, Users, Award, Globe, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';
import Link from 'next/link';

interface Agent {
  id: string;
  name: string;
  title: string;
  company: string;
  location: string;
  specialties: string[];
  rating: number;
  reviewCount: number;
  propertiesSold: number;
  yearsExperience: number;
  languages: string[];
  avatar: string;
  coverImage: string;
  description: string;
  verified: boolean;
  premium: boolean;
  responseTime: string;
  availability: 'available' | 'busy' | 'unavailable';
  contactInfo: {
    phone: string;
    email: string;
    website?: string;
  };
  recentSales: {
    count: number;
    totalValue: string;
  };
  certifications: string[];
}

const mockAgents: Agent[] = [
  {
    id: '1',
    name: 'Sarah O\'Connor',
    title: 'Senior Property Consultant',
    company: 'Dublin Elite Properties',
    location: 'Dublin, Ireland',
    specialties: ['Luxury Properties', 'City Centre', 'Investment Properties'],
    rating: 4.9,
    reviewCount: 127,
    propertiesSold: 89,
    yearsExperience: 8,
    languages: ['English', 'Irish'],
    avatar: '/images/agent-sarah.jpg',
    coverImage: '/images/dublin-skyline.jpg',
    description: 'Specializing in luxury properties in Dublin\'s most prestigious neighborhoods. With over 8 years of experience, I help clients find their perfect home or investment opportunity.',
    verified: true,
    premium: true,
    responseTime: '< 1 hour',
    availability: 'available',
    contactInfo: {
      phone: '+353 1 234 5678',
      email: 'sarah@dublinelite.ie',
      website: 'www.dublinelite.ie'
    },
    recentSales: {
      count: 12,
      totalValue: '€5.2M'
    },
    certifications: ['PSRA Licensed', 'RICS Member', 'Luxury Property Specialist']
  },
  {
    id: '2',
    name: 'Emma Thompson',
    title: 'International Property Advisor',
    company: 'Barcelona Luxury Homes',
    location: 'Barcelona, Spain',
    specialties: ['Luxury Villas', 'International Clients', 'Eixample District'],
    rating: 4.8,
    reviewCount: 94,
    propertiesSold: 67,
    yearsExperience: 6,
    languages: ['English', 'Spanish', 'French'],
    avatar: '/images/agent-emma.jpg',
    coverImage: '/images/barcelona-view.jpg',
    description: 'International property advisor specializing in luxury homes in Barcelona. I work with clients from around the world to find their dream Mediterranean property.',
    verified: true,
    premium: true,
    responseTime: '< 2 hours',
    availability: 'available',
    contactInfo: {
      phone: '+34 93 123 4567',
      email: 'emma@barcelonaluxury.es',
      website: 'www.barcelonaluxury.es'
    },
    recentSales: {
      count: 8,
      totalValue: '€8.9M'
    },
    certifications: ['API Licensed', 'International Property Specialist', 'Luxury Market Expert']
  },
  {
    id: '3',
    name: 'Michael Chen',
    title: 'Investment Property Specialist',
    company: 'London Prime Properties',
    location: 'London, UK',
    specialties: ['Investment Properties', 'Canary Wharf', 'Commercial Real Estate'],
    rating: 4.9,
    reviewCount: 156,
    propertiesSold: 134,
    yearsExperience: 12,
    languages: ['English', 'Mandarin', 'Cantonese'],
    avatar: '/images/agent-michael.jpg',
    coverImage: '/images/london-canary.jpg',
    description: 'Investment property specialist with extensive experience in London\'s prime markets. I help investors maximize returns through strategic property acquisitions.',
    verified: true,
    premium: true,
    responseTime: '< 30 minutes',
    availability: 'available',
    contactInfo: {
      phone: '+44 20 7123 4567',
      email: 'michael@londonprime.co.uk',
      website: 'www.londonprime.co.uk'
    },
    recentSales: {
      count: 15,
      totalValue: '£12.3M'
    },
    certifications: ['RICS Chartered', 'Investment Property Expert', 'Commercial Property Qualified']
  },
  {
    id: '4',
    name: 'Marie Dubois',
    title: 'Historic Properties Consultant',
    company: 'Paris Heritage Homes',
    location: 'Paris, France',
    specialties: ['Historic Properties', 'Le Marais', 'Renovation Projects'],
    rating: 4.7,
    reviewCount: 78,
    propertiesSold: 45,
    yearsExperience: 9,
    languages: ['French', 'English', 'Italian'],
    avatar: '/images/agent-marie.jpg',
    coverImage: '/images/paris-marais.jpg',
    description: 'Specialist in historic Parisian properties with deep knowledge of renovation regulations and heritage preservation. Perfect for clients seeking authentic Parisian charm.',
    verified: true,
    premium: false,
    responseTime: '< 3 hours',
    availability: 'busy',
    contactInfo: {
      phone: '+33 1 42 12 34 56',
      email: 'marie@parisheritage.fr'
    },
    recentSales: {
      count: 6,
      totalValue: '€3.8M'
    },
    certifications: ['FNAIM Licensed', 'Historic Properties Specialist', 'Renovation Consultant']
  },
  {
    id: '5',
    name: 'Hans Mueller',
    title: 'Modern Living Specialist',
    company: 'Berlin Contemporary',
    location: 'Berlin, Germany',
    specialties: ['Modern Apartments', 'Mitte District', 'Young Professionals'],
    rating: 4.6,
    reviewCount: 89,
    propertiesSold: 78,
    yearsExperience: 5,
    languages: ['German', 'English'],
    avatar: '/images/agent-hans.jpg',
    coverImage: '/images/berlin-modern.jpg',
    description: 'Specializing in modern living spaces for young professionals and international clients. Expert in Berlin\'s trendy neighborhoods and contemporary architecture.',
    verified: true,
    premium: false,
    responseTime: '< 4 hours',
    availability: 'available',
    contactInfo: {
      phone: '+49 30 123 4567',
      email: 'hans@berlincontemporary.de'
    },
    recentSales: {
      count: 11,
      totalValue: '€2.9M'
    },
    certifications: ['IHK Licensed', 'Modern Architecture Specialist']
  },
  {
    id: '6',
    name: 'Sophie Laurent',
    title: 'Luxury Coastal Properties',
    company: 'Riviera Exclusive',
    location: 'Nice, France',
    specialties: ['Coastal Properties', 'Luxury Villas', 'French Riviera'],
    rating: 4.8,
    reviewCount: 112,
    propertiesSold: 56,
    yearsExperience: 10,
    languages: ['French', 'English', 'Italian', 'Russian'],
    avatar: '/images/agent-sophie.jpg',
    coverImage: '/images/nice-coast.jpg',
    description: 'Luxury coastal property specialist on the French Riviera. I help international clients find their perfect Mediterranean retreat with stunning sea views.',
    verified: true,
    premium: true,
    responseTime: '< 2 hours',
    availability: 'available',
    contactInfo: {
      phone: '+33 4 93 12 34 56',
      email: 'sophie@rivieraexclusive.fr',
      website: 'www.rivieraexclusive.fr'
    },
    recentSales: {
      count: 9,
      totalValue: '€15.2M'
    },
    certifications: ['FNAIM Licensed', 'Luxury Property Expert', 'International Client Specialist']
  }
];

export default function ConnectPage() {
  const [agents, setAgents] = useState<Agent[]>(mockAgents);
  const [filteredAgents, setFilteredAgents] = useState<Agent[]>(mockAgents);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');
  const [sortBy, setSortBy] = useState('rating');
  const [showFilters, setShowFilters] = useState(false);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    filterAgents(term, selectedLocation, selectedSpecialty, sortBy);
  };

  const handleLocationChange = (location: string) => {
    setSelectedLocation(location);
    filterAgents(searchTerm, location, selectedSpecialty, sortBy);
  };

  const handleSpecialtyChange = (specialty: string) => {
    setSelectedSpecialty(specialty);
    filterAgents(searchTerm, selectedLocation, specialty, sortBy);
  };

  const handleSortChange = (sort: string) => {
    setSortBy(sort);
    filterAgents(searchTerm, selectedLocation, selectedSpecialty, sort);
  };

  const filterAgents = (search: string, location: string, specialty: string, sort: string) => {
    let filtered = agents;

    // Search filter
    if (search) {
      filtered = filtered.filter(agent =>
        agent.name.toLowerCase().includes(search.toLowerCase()) ||
        agent.company.toLowerCase().includes(search.toLowerCase()) ||
        agent.location.toLowerCase().includes(search.toLowerCase()) ||
        agent.specialties.some(spec => 
          spec.toLowerCase().includes(search.toLowerCase())
        )
      );
    }

    // Location filter
    if (location !== 'all') {
      filtered = filtered.filter(agent => 
        agent.location.toLowerCase().includes(location.toLowerCase())
      );
    }

    // Specialty filter
    if (specialty !== 'all') {
      filtered = filtered.filter(agent =>
        agent.specialties.some(spec => 
          spec.toLowerCase().includes(specialty.toLowerCase())
        )
      );
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sort) {
        case 'rating':
          return b.rating - a.rating;
        case 'experience':
          return b.yearsExperience - a.yearsExperience;
        case 'sales':
          return b.propertiesSold - a.propertiesSold;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    setFilteredAgents(filtered);
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

  const locations = ['all', 'dublin', 'london', 'barcelona', 'paris', 'berlin', 'nice'];
  const specialties = ['all', 'luxury', 'investment', 'historic', 'modern', 'coastal'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Connect with Expert Agents
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find verified property professionals who understand your needs and local markets worldwide
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Search by agent name, company, or location..."
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

      {/* Filters Panel */}
      {showFilters && (
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
                  Specialty
                </label>
                <Select value={selectedSpecialty} onValueChange={handleSpecialtyChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Specialties" />
                  </SelectTrigger>
                  <SelectContent>
                    {specialties.map(specialty => (
                      <SelectItem key={specialty} value={specialty}>
                        {specialty === 'all' ? 'All Specialties' : specialty.charAt(0).toUpperCase() + specialty.slice(1)}
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
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="experience">Most Experience</SelectItem>
                    <SelectItem value="sales">Most Sales</SelectItem>
                    <SelectItem value="name">Name A-Z</SelectItem>
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
            Showing {filteredAgents.length} of {agents.length} agents
          </p>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredAgents.map((agent) => (
            <Card key={agent.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-32 bg-gradient-to-r from-blue-500 to-purple-600">
                <Image
                  src={agent.coverImage || '/images/placeholder-cover.jpg'}
                  alt={`${agent.location} view`}
                  fill
                  className="object-cover opacity-80"
                />
                <div className="absolute top-4 right-4 flex space-x-2">
                  {agent.premium && (
                    <Badge className="bg-yellow-500 text-white">
                      <Award className="h-3 w-3 mr-1" />
                      Premium
                    </Badge>
                  )}
                  <Badge className={getAvailabilityColor(agent.availability)}>
                    {agent.availability}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <Avatar className="w-16 h-16 border-4 border-white -mt-8 relative z-10">
                    <AvatarImage src={agent.avatar} alt={agent.name} />
                    <AvatarFallback>{agent.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 pt-2">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {agent.name}
                      </h3>
                      {agent.verified && (
                        <Badge variant="secondary" className="text-xs">
                          <Star className="h-3 w-3 mr-1 fill-current" />
                          Verified
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-1">{agent.title}</p>
                    <p className="text-sm text-gray-500 mb-2">{agent.company}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                        <span className="font-medium">{agent.rating}</span>
                        <span className="ml-1">({agent.reviewCount})</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {agent.location}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-2">
                  {agent.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 text-gray-400 mr-2" />
                    <span>{agent.propertiesSold} properties sold</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-gray-400 mr-2" />
                    <span>{agent.yearsExperience} years experience</span>
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className="h-4 w-4 text-gray-400 mr-2" />
                    <span>Responds {agent.responseTime}</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="h-4 w-4 text-gray-400 mr-2" />
                    <span>{agent.languages.join(', ')}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Specialties</h4>
                  <div className="flex flex-wrap gap-2">
                    {agent.specialties.map((specialty, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Recent Sales:</span>
                    <span className="font-medium">{agent.recentSales.count} properties</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Total Value:</span>
                    <span className="font-medium text-green-600">{agent.recentSales.totalValue}</span>
                  </div>
                </div>

                <div className="flex space-x-2 pt-4 border-t">
                  <Button asChild className="flex-1">
                    <Link href={`/agents/${agent.id}`}>
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
                    Meet
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredAgents.length === 0 && (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No agents found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search criteria or filters to find more agents.
              </p>
            </div>
          </div>
        )}

        {/* Load More */}
        {filteredAgents.length > 0 && filteredAgents.length >= 6 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Agents
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}