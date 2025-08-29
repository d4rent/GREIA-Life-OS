import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Users, MapPin, Star } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Your Global Gateway to Properties & Services
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect with properties, services, and professionals worldwide. Your one-stop platform for global opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/properties">Explore Properties</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services">Browse Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Platform Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Building2 className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <CardTitle>Properties</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Discover and list properties globally with our comprehensive property marketplace.
                </CardDescription>
                <Button asChild variant="link" className="mt-4">
                  <Link href="/properties">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 mx-auto text-green-600 mb-4" />
                <CardTitle>Services</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Connect with trusted service providers and professionals worldwide.
                </CardDescription>
                <Button asChild variant="link" className="mt-4">
                  <Link href="/services">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <MapPin className="h-12 w-12 mx-auto text-purple-600 mb-4" />
                <CardTitle>Leisure</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Explore and book leisure activities and experiences around the globe.
                </CardDescription>
                <Button asChild variant="link" className="mt-4">
                  <Link href="/leisure">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Star className="h-12 w-12 mx-auto text-orange-600 mb-4" />
                <CardTitle>Connect</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Build your network and connect with other professionals in the industry.
                </CardDescription>
                <Button asChild variant="link" className="mt-4">
                  <Link href="/connect">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Join GREIA today and unlock a world of opportunities in properties, services, and professional connections.
          </p>
          <Button size="lg" variant="secondary">
            Create Your Account
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Platform</h3>
              <ul className="space-y-2">
                <li><Link href="/properties" className="hover:text-blue-400">Properties</Link></li>
                <li><Link href="/services" className="hover:text-blue-400">Services</Link></li>
                <li><Link href="/leisure" className="hover:text-blue-400">Leisure</Link></li>
                <li><Link href="/connect" className="hover:text-blue-400">Connect</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">About</a></li>
                <li><a href="#" className="hover:text-blue-400">Careers</a></li>
                <li><a href="#" className="hover:text-blue-400">Press</a></li>
                <li><a href="#" className="hover:text-blue-400">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-400">Terms of Service</a></li>
                <li><a href="#" className="hover:text-blue-400">Cookie Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Social</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">Twitter</a></li>
                <li><a href="#" className="hover:text-blue-400">LinkedIn</a></li>
                <li><a href="#" className="hover:text-blue-400">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p>&copy; 2025 GREIA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}