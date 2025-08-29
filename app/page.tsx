import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Users, Briefcase, Coffee } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="border-b">
        <nav className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">GREIA</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <Link href="/properties">
              <Button variant="ghost">Properties</Button>
            </Link>
            <Link href="/services">
              <Button variant="ghost">Services</Button>
            </Link>
            <Link href="/leisure">
              <Button variant="ghost">Leisure</Button>
            </Link>
            <Link href="/connect">
              <Button variant="ghost">Connect</Button>
            </Link>
            <Link href="/auth/login">
              <Button>Login</Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Your Global Gateway to
          <span className="text-primary"> Properties & Services</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Connect with properties, services, and professionals worldwide. Your one-stop platform for global opportunities.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/properties">
            <Button size="lg">
              Explore Properties
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/services">
            <Button size="lg" variant="outline">
              Browse Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Platform Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-sm">
              <Building2 className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Properties</h3>
              <p className="text-muted-foreground">Discover and list properties globally with our comprehensive property marketplace.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-sm">
              <Briefcase className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Services</h3>
              <p className="text-muted-foreground">Connect with trusted service providers and professionals worldwide.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-sm">
              <Coffee className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Leisure</h3>
              <p className="text-muted-foreground">Explore and book leisure activities and experiences around the globe.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-sm">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Connect</h3>
              <p className="text-muted-foreground">Build your network and connect with other professionals in the industry.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join GREIA today and unlock a world of opportunities in properties, services, and professional connections.
          </p>
          <Link href="/auth/signup">
            <Button size="lg" className="font-semibold">
              Create Your Account
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t mt-auto">
        <div className="container py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2">
                <li><Link href="/properties" className="hover:underline">Properties</Link></li>
                <li><Link href="/services" className="hover:underline">Services</Link></li>
                <li><Link href="/leisure" className="hover:underline">Leisure</Link></li>
                <li><Link href="/connect" className="hover:underline">Connect</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="hover:underline">About</Link></li>
                <li><Link href="/careers" className="hover:underline">Careers</Link></li>
                <li><Link href="/press" className="hover:underline">Press</Link></li>
                <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="hover:underline">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:underline">Terms of Service</Link></li>
                <li><Link href="/cookies" className="hover:underline">Cookie Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Social</h3>
              <ul className="space-y-2">
                <li><a href="https://twitter.com/GREIA" target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter</a></li>
                <li><a href="https://linkedin.com/company/GREIA" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a></li>
                <li><a href="https://instagram.com/GREIA" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} GREIA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}