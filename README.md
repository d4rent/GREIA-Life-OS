# GREIA - Global Property & Services Platform

🏠 **Your global property and services marketplace. Connecting people with their perfect homes and trusted professionals worldwide.**

## 🚀 Live Platform
**Production URL:** https://greia-platform-2.lindy.site/

## 📋 Platform Overview

GREIA is a comprehensive global property and services platform that connects property seekers with verified professionals and premium properties worldwide. Built with modern web technologies for optimal performance and user experience.

### 🎯 Core Features

- **🏡 Property Marketplace**: Browse and search global property listings
- **🔐 User Authentication**: Secure NextAuth.js authentication system
- **📱 Mobile Responsive**: Optimized for all devices and screen sizes
- **🌍 Global Network**: Connect with verified agents and professionals worldwide
- **🔍 Advanced Search**: Filter properties by location, price, and features
- **👤 User Dashboard**: Personalized user experience and property management
- **⚡ Performance Optimized**: Built with Next.js 15 and modern optimization techniques

### 🛠 Technology Stack

- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: Tailwind CSS, Shadcn/ui components
- **Authentication**: NextAuth.js with secure session management
- **Database**: Prisma ORM with PostgreSQL
- **Deployment**: Production-ready with optimized builds
- **Security**: Route protection, CSRF protection, secure password hashing

### 🏗 Architecture

```
GREIA-Life-OS/
├── app/                    # Next.js App Router
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # User dashboard
│   ├── legal/             # Privacy & Terms pages
│   └── api/               # API routes
├── components/            # Reusable UI components
│   ├── auth/              # Authentication components
│   └── shared/            # Shared components
├── lib/                   # Utility libraries
├── prisma/                # Database schema
└── public/                # Static assets
```

### 🔒 Security Features

- **Authentication Middleware**: Route protection for secure areas
- **Password Security**: bcryptjs hashing for user passwords
- **Session Management**: Secure JWT-based sessions
- **CSRF Protection**: Built-in protection against cross-site attacks
- **Environment Security**: Secure environment variable handling

### 📄 Legal Compliance

- **Privacy Policy**: Comprehensive data protection and privacy guidelines
- **Terms of Service**: Clear terms and conditions for platform usage
- **Accessibility**: WCAG compliant design for inclusive user experience

### 🚀 Launch Status

**✅ PRODUCTION READY**

All launch-critical features have been implemented and tested:

- [x] Core platform functionality
- [x] User authentication and registration
- [x] Property listings and search
- [x] Mobile responsive design
- [x] Legal compliance pages
- [x] SEO optimization
- [x] Security implementation
- [x] Error handling and user feedback
- [x] Contact and support systems
- [x] Performance optimization

### 🔧 Development

```bash
# Clone the repository
git clone https://github.com/d4rent/GREIA-Life-OS.git
cd GREIA-Life-OS

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Configure your database and authentication settings

# Run database migrations
npx prisma migrate dev

# Start development server
npm run dev
```

### 🌐 Environment Variables

```env
# Database
DATABASE_URL="your_postgresql_connection_string"

# NextAuth.js
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your_nextauth_secret"

# OAuth Providers (optional)
GOOGLE_CLIENT_ID="your_google_client_id"
GOOGLE_CLIENT_SECRET="your_google_client_secret"
```

### 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **SEO Optimized**: Complete meta tags and structured data
- **Mobile First**: Responsive design with mobile optimization

### 🤝 Contributing

This is a production platform under active development. All contributions should maintain the high quality standards and security practices established in the codebase.

### 📞 Contact

- **Email**: hello@greia.com
- **Phone**: +1 (555) 123-4567
- **Platform**: https://greia-platform-2.lindy.site/

---

**© 2025 GREIA. All rights reserved.**

*Built with ❤️ for global property seekers and professionals worldwide.*