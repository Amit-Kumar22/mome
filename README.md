# Momentus Motion Corporation - Static Website

This is a **static export version** of the Momentus Motion Corporation website, built with Next.js 15. This version contains only the public-facing pages without any backend functionality, authentication, or dynamic features.

## Features

- ✅ **Static Pages Only**: Home, About, Projects, and Contact pages
- ✅ **No Backend**: Removed all server-side functionality, API routes, and database connections
- ✅ **No Authentication**: Removed login, signup, and all auth-protected pages
- ✅ **Optimized Build**: Static HTML export for easy deployment
- ✅ **Modern UI**: Beautiful gradient themes and animations
- ✅ **Responsive Design**: Mobile-first approach with Tailwind CSS
- ✅ **Type Safety**: Full TypeScript implementation
- ✅ **Dummy Data**: All sections use static/dummy data for demonstration

## What's Included

### Pages
- **Home** (`/`): Landing page with hero, services, expert advisors, and recent contributors
- **About** (`/about`): Company mission, vision, and service offerings
- **Projects** (`/projects`): Showcase of success stories with static data
- **Contact** (`/contact`): Contact information and social media links

### Components
- **Navbar**: Simplified navigation with Momentus Motion branding
- **UI Components**: Button and Card components with consistent styling
- **Layout**: Root layout with Google Fonts integration

### Dummy Data Sections
- **Recent Contributors**: Scrollable carousel with 5 sample contributors
- **Expert Advisors**: 6 business advisors with profiles and LinkedIn links
- **Success Stories**: 4 major project case studies
- **Statistics**: Client count, revenue, projects, and satisfaction metrics

## What's Been Removed

- ❌ Authentication system (login, signup, password reset)
- ❌ Admin dashboard and protected routes
- ❌ Blog system and blog pages
- ❌ Backend API routes
- ❌ Database connections (MongoDB)
- ❌ Redux state management
- ❌ Email functionality
- ❌ Real donation system (replaced with dummy data)
- ❌ User profiles and membership management

## Tech Stack

- **Framework**: Next.js 15.4.5 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3.4.16
- **UI Components**: Custom components with class-variance-authority
- **Icons**: Lucide React
- **Fonts**: Inter and Poppins via Google Fonts

## Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd yen-nextjs-static
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3001](http://localhost:3001) in your browser

### Build for Production

Generate static HTML files:

```bash
npm run build
```

The static files will be exported to the `/out` directory, ready for deployment to any static hosting service.

## Available Scripts

- `npm run dev` - Start development server on port 3001
- `npm run build` - Create production build and export static files
- `npm start` - Start production server (for testing the build)
- `npm run lint` - Run ESLint for code quality checks

## Deployment

The `/out` directory contains the complete static website and can be deployed to:

- **Netlify**: Drag and drop the `/out` folder
- **Vercel**: Connect your repository or upload `/out`
- **GitHub Pages**: Copy `/out` contents to your gh-pages branch
- **AWS S3**: Upload `/out` to an S3 bucket configured for static hosting
- **Any Static Host**: Simply upload the `/out` directory contents

## Project Structure

```
yen-nextjs-static/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page with dummy data
│   │   ├── globals.css         # Global styles
│   │   ├── about/              # About page
│   │   ├── projects/           # Projects page
│   │   └── contact/            # Contact page
│   ├── components/
│   │   ├── layout/
│   │   │   └── Navbar.tsx      # Navigation component
│   │   └── ui/                 # UI components
│   └── lib/
│       └── utils.ts            # Utility functions
├── public/                     # Static assets
│   └── logo/                   # Logo files
├── out/                        # Generated static export
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
└── package.json                # Dependencies and scripts
```

## Customization

### Updating Content
- Edit page content in `src/app/[page]/page.tsx` files
- Modify dummy data arrays in `src/app/page.tsx` (dummyDonations, dummyMentors)
- Update global styles in `src/app/globals.css`
- Update navigation in `src/components/layout/Navbar.tsx`

### Styling
- Tailwind utility classes for quick styling
- CSS custom properties for theme colors in `globals.css`
- Gradient utilities: `gradient-purple-pink`, `text-yen-purple`, etc.

### Adding New Pages
1. Create a new directory in `src/app/`
2. Add a `page.tsx` file in that directory
3. Add navigation link in `Navbar.tsx`
4. Rebuild to regenerate static files

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Company Information

**Momentus Motion Corporation**
- Driving innovation and excellence in business solutions
- Strategic consulting, digital transformation, and partnership solutions
- Global presence with offices in India and USA

## License

This project is created for Momentus Motion Corporation.

---

**Note**: This is a static demonstration website using dummy data. For actual business inquiries, please contact info@momentusmotion.com
