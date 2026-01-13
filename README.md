# rev'ive - Weaving Roots

A Next.js static website for a reverend elder specializing in social and organizational work.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building for Production

To build the static site:

```bash
npm run build
```

This will create an `out` directory with the static files ready for deployment.

## Deployment

This project is configured for static export and can be deployed to Vercel:

1. Push your code to a Git repository
2. Import the project in Vercel
3. Vercel will automatically detect Next.js and deploy

## Images

Add the following images to `public/images/`:
- `landing-bg.jpg` - Background image for the landing section
- `ceremonies.jpg` - Image for the ceremonies section
- `conversations.jpg` - Image for the conversations section
- `communities.jpg` - Image for the communities section

## Form Submission

The inquiry form currently logs to the console. To enable form submissions, integrate with a service like:
- Formspree
- EmailJS
- A custom API route (requires removing static export)

