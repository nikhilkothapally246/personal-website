# Personal Website

A modern, responsive personal website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern and beautiful UI design
- 📱 Fully responsive layout
- ⚡ Fast and optimized with Next.js
- 🎯 Smooth scrolling navigation
- 💼 Project showcase section
- 📧 Contact form
- 🌙 Ready for dark mode (can be extended)

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Customization

### Personal Information

1. **Hero Section** (`components/Hero.tsx`):
   - Update your name
   - Change the tagline
   - Update social media links (GitHub, LinkedIn, Email)

2. **About Section** (`components/About.tsx`):
   - Modify the about text
   - Update skills list

3. **Projects Section** (`components/Projects.tsx`):
   - Replace the example projects with your own
   - Update project descriptions, technologies, and links

4. **Contact Section** (`components/Contact.tsx`):
   - Update email, phone, and location
   - Connect the form to your email service (e.g., Formspree, EmailJS, or your backend)

5. **Metadata** (`app/layout.tsx`):
   - Update the title and description

### Styling

- Colors can be customized in `tailwind.config.js`
- Global styles are in `app/globals.css`
- Component-specific styles use Tailwind utility classes

## Building for Production

```bash
npm run build
npm start
```

## Deployment

This project can be easily deployed on:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any platform that supports Node.js

## Project Structure

```
personal-website/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/
│   ├── Navbar.tsx       # Navigation bar
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── Projects.tsx     # Projects section
│   └── Contact.tsx      # Contact section
├── public/              # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── README.md
```

## License

This project is open source and available under the MIT License.

## Support

Feel free to open an issue if you have any questions or suggestions!
