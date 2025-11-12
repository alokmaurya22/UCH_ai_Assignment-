# Deployment Guide

## Vercel Deployment (Recommended)

### Option 1: Deploy via Vercel Dashboard

1. Go to [Vercel](https://vercel.com)
2. Sign in with your GitHub account
3. Click "Add New Project"
4. Import this repository: `alokmaurya22/UCH_ai_Assignment-`
5. Configure project:
   - Framework Preset: Next.js
   - Root Directory: `./` (or leave default)
   - Build Command: `npm run build`
   - Output Directory: `.next`
6. Click "Deploy"

Your app will be live in minutes!

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

## Netlify Deployment

1. Go to [Netlify](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub and select this repository
4. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Click "Deploy site"

## Manual Deployment

### Build for Production

```bash
# Install dependencies
npm install

# Build the application
npm run build

# Start production server
npm start
```

The app will run on `http://localhost:3000`

### Docker Deployment (Optional)

Create a `Dockerfile`:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t tender-tasks .
docker run -p 3000:3000 tender-tasks
```

## Environment Variables

No environment variables required for basic deployment. The app uses local state management.

## Post-Deployment Checklist

- ✅ Verify all pages load correctly
- ✅ Test drag and drop functionality
- ✅ Check task detail pages
- ✅ Test comment system
- ✅ Verify responsive design on mobile

## Troubleshooting

### Build Errors
- Ensure Node.js version is 18 or higher
- Clear `.next` folder and rebuild: `rm -rf .next && npm run build`

### Deployment Issues
- Check build logs for errors
- Verify all dependencies are in `package.json`
- Ensure TypeScript types are correct

## Live Demo

Once deployed, your app will be accessible at:
- Vercel: `https://your-project.vercel.app`
- Netlify: `https://your-project.netlify.app`

## Support

For issues, please check:
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- GitHub Issues in this repository
