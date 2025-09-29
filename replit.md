# Delta Tire - Professional Automotive Services

## Overview

Delta Tire is a multi-location automotive service business operating across New Mexico and Arizona. The application serves as a comprehensive web presence featuring service information, location details, and customer engagement tools. The platform provides information about tire services, auto repair, maintenance, and specialized programs including VIP school fundraising and fleet services. With four physical locations (Grants, Gallup, Farmington NM, and Eagar AZ), the application emphasizes local SEO, customer communication, and service transparency.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Tooling**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server
- Wouter for lightweight client-side routing (alternative to React Router)
- TanStack Query (React Query) for server state management and data fetching

**UI Component System**
- shadcn/ui component library based on Radix UI primitives
- Tailwind CSS for utility-first styling with custom design tokens
- CSS variables for theming (supports light mode with extensibility for dark mode)
- Class Variance Authority (CVA) for component variant management
- "New York" style variant from shadcn/ui

**State Management Strategy**
- TanStack Query handles all server state with infinite stale time and disabled automatic refetching
- React hooks for local component state
- Form state managed via React Hook Form with Zod validation
- Toast notifications for user feedback

**Directory Structure**
- `/client/src/pages/*` - Route-based page components
- `/client/src/components/shared/*` - Reusable business components (Header, Footer, SEO, etc.)
- `/client/src/components/ui/*` - shadcn/ui component library
- `/client/src/lib/*` - Utility functions and shared logic
- `/client/src/hooks/*` - Custom React hooks

### Backend Architecture

**Server Framework**
- Express.js with TypeScript for API routes and middleware
- HTTP server creation for potential WebSocket support
- Custom request logging middleware tracking response times and payloads

**Development vs Production**
- Development: Vite middleware integration for HMR and module transformation
- Production: Pre-built static assets served from `/dist/public`
- Environment-based configuration via NODE_ENV

**API Design Pattern**
- RESTful API endpoints under `/api/*` namespace
- JSON request/response format
- Error handling middleware with status code normalization
- Response truncation in logs (80 character limit) for cleaner debugging

**Storage Layer**
- In-memory storage implementation (`MemStorage`) for user data
- Interface-based storage abstraction (`IStorage`) for future database integration
- Current implementation uses Maps for data persistence during runtime
- Designed for eventual migration to PostgreSQL via Drizzle ORM

### External Dependencies

**Database (Configured but Not Active)**
- **Drizzle ORM** configured for PostgreSQL with schema-first approach
- **Neon Database** serverless PostgreSQL driver (`@neondatabase/serverless`)
- Schema location: `/shared/schema.ts`
- Migration output: `/migrations` directory
- Note: Database structure defined but may not be actively connected

**GitHub Integration**
- **Octokit REST API** client for GitHub repository interactions
- Token-based authentication using Replit Connectors
- Dynamic token refresh via Replit's connector API
- Repository management: `twc20/LindyAI-Doyoudelta`
- Uncached client pattern (new client per request due to token expiration)

**Form Validation & Schema**
- **Zod** for runtime type validation and schema definition
- **Drizzle-Zod** integration for database schema validation
- Shared schemas between frontend and backend (`/shared/schema.ts`)
- React Hook Form resolver integration via `@hookform/resolvers`

**Styling & UI**
- **Tailwind CSS** with PostCSS for processing
- **Radix UI** primitives for accessible components
- **Lucide React** for icon components
- **date-fns** for date formatting and manipulation
- Google Fonts (Inter) loaded via CDN

**Replit-Specific Integrations**
- Runtime error overlay for development
- Cartographer plugin for code navigation
- Development banner plugin
- Connector system for OAuth (GitHub) with auto-refresh tokens

**Build & Development Tools**
- **esbuild** for server-side bundling in production
- **tsx** for TypeScript execution in development
- **Vite plugins** for React, error overlays, and Replit integrations

### Authentication & Sessions

- Basic user schema defined with username/password fields
- No active authentication middleware implemented
- Session infrastructure prepared via `connect-pg-simple` (PostgreSQL session store)
- Ready for implementation of authentication flows

### SEO & Analytics

- Custom SEO component with dynamic meta tag management
- Open Graph protocol support for social sharing
- Structured data (JSON-LD) capability for local business schema
- Canonical URL support
- Per-page SEO customization

### Content & Data Structure

**Location Data**
- Four physical locations with distinct addresses, phone numbers, and hours
- Google Maps integration via direct URL links
- Structured for local SEO optimization

**Service Categories**
- Tire & Wheel Sales/Service
- Auto Repair
- Oil Change & Maintenance
- Brake Repair
- Wheel Alignment & Suspension
- Truck Accessories
- Battery & Electrical
- Heating & A/C

**Special Programs**
- VIP School Fundraising Program
- Fleet Services for businesses
- Both implemented as informational pages