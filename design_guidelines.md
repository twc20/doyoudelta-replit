# Delta Tire - Design Guidelines

## Design Approach
**Reference-Based Strategy**: Drawing from industry leaders (Discount Tire, Firestone Complete Auto Care, Tesla Service) combined with modern SaaS clarity. Automotive service requires trust-building through professional presentation, clear service showcasing, and strong calls-to-action.

## Core Design Principles
1. **Trust Through Clarity**: Clean layouts, obvious CTAs, transparent pricing indicators
2. **Service Accessibility**: Easy navigation to services and locations
3. **Professional Authority**: Balanced use of red for urgency without overwhelming

---

## Color Palette

**Primary Red**: `0 79% 51%` (#dc2626)
- Use for: Primary CTAs, accents, headings, active states
- Limit to 15-20% of visual space for impact

**Neutral Grays**:
- Dark: `220 13% 18%` - Primary text, headers
- Medium: `220 9% 46%` - Secondary text, borders
- Light: `220 13% 91%` - Backgrounds, cards
- Surface: `0 0% 98%` - Page background

**Supporting**:
- White: Pure white for cards, contrast sections
- Black: `0 0% 9%` - Footer, high-contrast text

---

## Typography

**Font Stack**: 
- **Headings**: 'Inter' (700, 600) - Strong, modern, automotive-appropriate
- **Body**: 'Inter' (400, 500) - Excellent readability

**Scale**:
- Hero H1: text-5xl md:text-6xl lg:text-7xl font-bold
- Section H2: text-3xl md:text-4xl font-bold
- Card H3: text-xl md:text-2xl font-semibold
- Body: text-base md:text-lg
- Small: text-sm

---

## Layout System

**Spacing Units**: Tailwind 4, 6, 8, 12, 16, 20, 24 (p-4, gap-6, my-8, py-12, etc.)

**Container Strategy**:
- Full sections: w-full with max-w-7xl mx-auto px-6
- Content blocks: max-w-6xl
- Text content: max-w-3xl

**Grid Patterns**:
- Services: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
- Locations: grid-cols-1 md:grid-cols-2 gap-8
- Stats: grid-cols-2 md:grid-cols-4 gap-4

---

## Component Library

### Navigation
- Sticky header, white background, subtle shadow
- Logo left, navigation center, CTA button right
- Mobile: Hamburger with slide-in menu
- Links: Medium gray, hover to red transition
- "Schedule Service" CTA button (red, rounded-lg px-6 py-3)

### Hero Section
- Full-width image background (mechanics working, tire close-up, modern shop)
- Dark overlay (bg-black/50)
- Left-aligned content on md+, centered on mobile
- H1 + supporting text + dual CTAs (primary red solid, secondary white outline with backdrop-blur-sm)
- Height: min-h-[600px] lg:min-h-[700px]

### Service Cards
- White background, rounded-lg, shadow-sm hover:shadow-lg transition
- Icon top (red, size-12), title, description, "Learn More" link
- Padding: p-6, gap-4

### Location Cards
- White card with border-l-4 border-red-600
- Location name (text-xl font-semibold), address, phone, hours
- "Get Directions" button (outline variant)
- Interactive map integration area

### Trust Elements Section
- 4-column stats: "Years Experience", "Locations", "Satisfied Customers", "Services"
- Large numbers (text-4xl font-bold text-red-600), labels below
- Light gray background section (bg-gray-100)

### Testimonial Cards
- Gray-100 background, rounded-xl, p-6
- 5-star rating display, quote, customer name/location
- Grid: 2-3 columns on desktop

### Footer
- Dark background (bg-gray-900 text-gray-300)
- 4 columns: Services, Locations, Company, Contact
- Social icons, certifications (ASE, BBB)
- Bottom bar with copyright, privacy links

---

## Page Structure (6 Core Sections)

1. **Hero** (min-h-[600px]): Large image, headline "Expert Tire & Auto Service Across NM & AZ", dual CTAs
2. **Services Grid** (py-20): 6 service cards (Tire Sales, Wheel Alignment, Brake Service, Oil Change, Suspension, Diagnostics)
3. **Location Finder** (py-20 bg-gray-50): Interactive dropdown + map preview, list of all locations
4. **Trust Stats** (py-16 bg-gray-100): 4 metrics in bold display
5. **Testimonials** (py-20): "What Our Customers Say" + 3-column testimonial grid
6. **CTA Banner** (py-16 bg-red-600 text-white): "Ready to Schedule?" + booking button

---

## Images Section

**Required Images**:
1. **Hero Background**: Professional automotive shop interior or mechanic working on tire installation - bright, clean, modern facility (1920x1080 min)
2. **Service Icons/Photos**: High-quality tire close-up, brake disc, alignment machine, oil change (use icon library + optional photos)
3. **Location Thumbnails**: Storefront photos for each location (400x300)
4. **Testimonial Avatars**: Customer placeholder images or initials

**Image Treatment**: 
- Hero: Dark overlay for text contrast
- Service sections: Optional supporting imagery, not required
- Maintain professional, clean aesthetic throughout

---

## Interactions

**Minimal Animation**: 
- Smooth hover states on cards (shadow elevation)
- Button hover: slight scale (scale-105) and brightness
- Link underlines on hover
- No scroll animations or excessive motion

**CTAs Throughout**:
- Header: "Schedule Service"
- Hero: "Book Appointment" + "Find Location"
- Services: "Learn More" per service
- Locations: "Get Directions"
- Footer: Phone numbers clickable

---

**Overall Vision**: Professional automotive service website balancing urgency (red) with trustworthiness (clean grays), emphasizing accessibility of services across multiple locations with clear booking pathways throughout user journey.