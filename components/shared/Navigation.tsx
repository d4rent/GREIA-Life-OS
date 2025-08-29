'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { 
  Building,
  Users,
  Briefcase,
  Coffee,
  MessageCircle,
  Bell,
  User,
  Plus
} from 'lucide-react'

export default function Navigation() {
  const pathname = usePathname()

  const leftNavItems = [
    { href: '/properties', label: 'Properties', icon: Building },
    { href: '/services', label: 'Services', icon: Briefcase },
  ]

  const rightNavItems = [
    { href: '/leisure', label: 'Leisure', icon: Coffee },
    { href: '/connect', label: 'Connect', icon: Users },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-blue-500 to-teal-400 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16 relative">
          
          {/* Left Navigation - Perfect spacing from center */}
          <div className="absolute right-1/2 flex items-center space-x-6 mr-20">
            {leftNavItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? 'bg-white/20 text-white shadow-sm backdrop-blur-sm'
                      : 'text-white/95 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              )
            })}
          </div>

          {/* Center Logo - Perfect centering */}
          <div className="flex items-center justify-center">
            <Link href="/" className="flex items-center">
              <Image 
                src="/greia-logo.png" 
                alt="GREIA" 
                width={110} 
                height={36}
                className="h-9 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Right Navigation - Perfect spacing from center */}
          <div className="absolute left-1/2 flex items-center space-x-6 ml-20">
            {rightNavItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? 'bg-white/20 text-white shadow-sm backdrop-blur-sm'
                      : 'text-white/95 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              )
            })}
          </div>

          {/* Action Buttons - Refined spacing */}
          <div className="absolute right-0 flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="text-white hover:text-white hover:bg-white/15 p-2 rounded-lg transition-all duration-200">
              <Plus className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:text-white hover:bg-white/15 p-2 rounded-lg transition-all duration-200">
              <MessageCircle className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:text-white hover:bg-white/15 p-2 rounded-lg transition-all duration-200">
              <Bell className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:text-white hover:bg-white/15 p-2 rounded-lg transition-all duration-200">
              <User className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
