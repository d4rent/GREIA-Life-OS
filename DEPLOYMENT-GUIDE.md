# GREIA Platform Deployment Guide

## 🚀 Production Deployment Instructions

This guide provides comprehensive instructions for deploying the GREIA platform to production environments.

**Current Live Platform:** [https://greia-platform-2.lindy.site/](https://greia-platform-2.lindy.site/)

---

## Prerequisites

### System Requirements
- Node.js 18+ or Bun runtime
- PostgreSQL 14+ database
- Git version control
- Domain with SSL certificate capability

### Environment Setup
```bash
# Clone the repository
git clone https://github.com/d4rent/GREIA-Life-OS.git
cd GREIA-Life-OS

# Install dependencies
npm install
# or
bun install
```

---

## Environment Configuration

### Required Environment Variables

Create a `.env.local` file in the root directory:

```env
# Database Configuration
DATABASE_URL="postgresql://username:password@localhost:5432/greia_db"

# NextAuth.js Configuration
NEXTAUTH_URL="https://your-domain.com"
NEXTAUTH_SECRET="your-secure-random-secret-key"

# OAuth Providers (Optional)
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Email Configuration (Optional)
EMAIL_SERVER_HOST="smtp.your-provider.com"
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER="your-email@domain.com"
EMAIL_SERVER_PASSWORD="your-email-password"
EMAIL_FROM="noreply@your-domain.com"

# Analytics (Optional)
NEXT_PUBLIC_GA_ID="your-google-analytics-id"

# API Keys (Optional)
NEXT_PUBLIC_MAPBOX_TOKEN="your-mapbox-token"
```

### Database Setup

1. **Create PostgreSQL Database:**
```sql
CREATE DATABASE greia_db;
CREATE USER greia_user WITH PASSWORD 'secure_password';
GRANT ALL PRIVILEGES ON DATABASE greia_db TO greia_user;
```

2. **Run Database Migrations:**
```bash
npx prisma generate
npx prisma db push
```

3. **Seed Initial Data (Optional):**
```bash
npx prisma db seed
```

---

## Deployment Options

### Option 1: Vercel Deployment (Recommended)

1. **Connect Repository:**
   - Fork the repository to your GitHub account
   - Connect your Vercel account to GitHub
   - Import the GREIA-Life-OS repository

2. **Configure Environment Variables:**
   - Add all required environment variables in Vercel dashboard
   - Ensure `NEXTAUTH_URL` matches your Vercel domain

3. **Deploy:**
   - Vercel will automatically deploy on push to main branch
   - Custom domain can be configured in Vercel settings

### Option 2: Docker Deployment

1. **Create Dockerfile:**
```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

2. **Build and Run:**
```bash
docker build -t greia-platform .
docker run -p 3000:3000 --env-file .env.local greia-platform
```

### Option 3: Traditional Server Deployment

1. **Build the Application:**
```bash
npm run build
```

2. **Start Production Server:**
```bash
npm start
```

3. **Process Manager (PM2):**
```bash
npm install -g pm2
pm2 start npm --name "greia" -- start
pm2 startup
pm2 save
```

---

## SSL Certificate Setup

### Using Let's Encrypt (Certbot)
```bash
# Install certbot
sudo apt install certbot python3-certbot-nginx

# Obtain certificate
sudo certbot --nginx -d your-domain.com

# Auto-renewal
sudo crontab -e
# Add: 0 12 * * * /usr/bin/certbot renew --quiet
```

### Using Cloudflare
1. Add your domain to Cloudflare
2. Update nameservers
3. Enable SSL/TLS encryption
4. Configure DNS records

---

## Performance Optimization

### Next.js Configuration
```javascript
// next.config.ts
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['your-image-domain.com'],
    formats: ['image/webp', 'image/avif'],
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  httpAgentOptions: {
    keepAlive: true,
  },
}

export default nextConfig
```

### Database Optimization
```sql
-- Create indexes for better performance
CREATE INDEX idx_properties_location ON properties(location);
CREATE INDEX idx_properties_price ON properties(price);
CREATE INDEX idx_properties_type ON properties(type);
CREATE INDEX idx_users_email ON users(email);
```

---

## Monitoring and Logging

### Application Monitoring
```javascript
// lib/monitoring.ts
import { NextRequest } from 'next/server'

export function logRequest(req: NextRequest) {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`)
}

export function logError(error: Error, context: string) {
  console.error(`${new Date().toISOString()} - ERROR in ${context}:`, error)
}
```

### Health Check Endpoint
```javascript
// app/api/health/route.ts
export async function GET() {
  return Response.json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    version: process.env.npm_package_version 
  })
}
```

---

## Security Checklist

### Pre-Deployment Security
- [ ] Environment variables secured
- [ ] Database credentials rotated
- [ ] HTTPS enforced
- [ ] CORS properly configured
- [ ] Rate limiting implemented
- [ ] Input validation in place
- [ ] SQL injection protection active
- [ ] XSS protection enabled

### Post-Deployment Security
- [ ] Security headers configured
- [ ] Regular dependency updates
- [ ] Database backups automated
- [ ] Access logs monitored
- [ ] Error tracking implemented
- [ ] Uptime monitoring active

---

## Backup and Recovery

### Database Backup
```bash
# Daily backup script
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
pg_dump -h localhost -U greia_user greia_db > backup_$DATE.sql
aws s3 cp backup_$DATE.sql s3://your-backup-bucket/
```

### Application Backup
```bash
# Backup application files
tar -czf greia_app_backup_$(date +%Y%m%d).tar.gz /path/to/greia-app
```

---

## Troubleshooting

### Common Issues

1. **Database Connection Errors:**
   - Verify DATABASE_URL format
   - Check database server status
   - Confirm network connectivity

2. **Authentication Issues:**
   - Verify NEXTAUTH_SECRET is set
   - Check NEXTAUTH_URL matches domain
   - Confirm OAuth provider settings

3. **Build Failures:**
   - Clear .next directory
   - Delete node_modules and reinstall
   - Check for TypeScript errors

4. **Performance Issues:**
   - Enable database query logging
   - Monitor memory usage
   - Check for N+1 queries

### Debug Commands
```bash
# Check application logs
pm2 logs greia

# Monitor system resources
htop

# Check database connections
psql -h localhost -U greia_user -d greia_db -c "SELECT count(*) FROM pg_stat_activity;"

# Test API endpoints
curl -I https://your-domain.com/api/health
```

---

## Maintenance

### Regular Tasks
- [ ] Weekly dependency updates
- [ ] Monthly security patches
- [ ] Quarterly performance reviews
- [ ] Database maintenance and optimization
- [ ] SSL certificate renewal
- [ ] Backup verification

### Update Process
```bash
# Update dependencies
npm update

# Run tests
npm test

# Build and test locally
npm run build
npm start

# Deploy to staging
# Test staging environment
# Deploy to production
```

---

## Support and Documentation

### Technical Support
- **Repository:** [d4rent/GREIA-Life-OS](https://github.com/d4rent/GREIA-Life-OS)
- **Issues:** GitHub Issues for bug reports
- **Documentation:** README.md and LAUNCH-STATUS.md

### Contact Information
- **Developer:** d4rentseanquinn@gmail.com
- **Platform Support:** hello@greia.com
- **Emergency Contact:** Available through platform

---

## Deployment Checklist

### Pre-Deployment
- [ ] Environment variables configured
- [ ] Database setup complete
- [ ] SSL certificate obtained
- [ ] Domain DNS configured
- [ ] Backup strategy implemented
- [ ] Monitoring tools configured

### Deployment
- [ ] Application built successfully
- [ ] Database migrations applied
- [ ] Static assets uploaded
- [ ] Environment-specific configs applied
- [ ] Health checks passing
- [ ] SSL certificate active

### Post-Deployment
- [ ] All pages loading correctly
- [ ] Authentication working
- [ ] Database connections stable
- [ ] Email notifications working
- [ ] Analytics tracking active
- [ ] Backup systems operational
- [ ] Monitoring alerts configured

---

*Last Updated: August 29, 2025*  
*Platform Version: 1.0.0*  
*Deployment Status: Production Ready*