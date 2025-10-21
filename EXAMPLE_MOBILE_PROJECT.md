# Example: Adding a Mobile App Project

This is a complete example showing how to add a mobile app project with screenshots to your portfolio.

## Step 1: Prepare Your Screenshots

For a mobile app, prepare screenshots with these specifications:

- **Resolution**: 1080x1920px (9:16 aspect ratio)
- **Format**: PNG (for best quality with UI elements)
- **File size**: < 200KB each (compress if needed)

Example screenshots you might want:

1. Home/Dashboard screen
2. Main feature screens
3. Settings/Profile screen
4. Any unique features

## Step 2: Organize Files

Create a directory structure:

```
public/
  assets/
    png/
      projects/
        my-health-app/
          home-screen.png
          tracker-screen.png
          profile-screen.png
          settings-screen.png
          overview.png
```

## Step 3: Add Project Data

Edit `gowthamaanp.github.io/constants/projects.ts` and add your project:

```typescript
{
  title: "HealthTracker - Personal Wellness App",
  type: "mobile",
  status: "completed", // or "in-progress" or "published"
  date: "2024",

  tags: ["React Native", "Mobile", "Health Tech", "Firebase"],
  tagBgColors: [
    colorMap["keyword"],
    colorMap["keyword"],
    colorMap["keyword"],
    colorMap["keyword"]
  ],

  description: [
    "A comprehensive mobile application for tracking personal health metrics including exercise, nutrition, and sleep patterns.",
    "Features real-time synchronization, personalized insights, and integration with popular fitness devices."
  ],

  // Main thumbnail - usually the home screen
  thumbnail: "/assets/png/projects/my-health-app/home-screen.png",

  // Additional screenshots shown in gallery
  screenshots: [
    "/assets/png/projects/my-health-app/home-screen.png",
    "/assets/png/projects/my-health-app/tracker-screen.png",
    "/assets/png/projects/my-health-app/profile-screen.png",
    "/assets/png/projects/my-health-app/settings-screen.png",
  ],

  // Optional: Overview/marketing images
  images: [
    "/assets/png/projects/my-health-app/overview.png"
  ],

  techStack: [
    "React Native",
    "TypeScript",
    "Firebase",
    "Redux",
    "React Navigation",
    "AsyncStorage",
    "Jest",
    "Detox"
  ],

  features: [
    "Daily activity and exercise tracking with customizable goals",
    "Nutrition logging with barcode scanning and calorie counter",
    "Sleep pattern analysis with quality metrics",
    "Real-time sync across multiple devices",
    "Integration with Apple Health and Google Fit",
    "Personalized insights and recommendations based on ML models",
    "Social features for sharing achievements",
    "Push notifications for reminders and milestones"
  ],

  // Links
  code: "https://github.com/yourusername/health-tracker",
  preview: "https://apps.apple.com/app/health-tracker",
  demo: "https://www.youtube.com/watch?v=your-demo",

  links: [
    {
      label: "App Store",
      url: "https://apps.apple.com/app/health-tracker"
    },
    {
      label: "Play Store",
      url: "https://play.google.com/store/apps/details?id=com.healthtracker"
    },
    {
      label: "Case Study",
      url: "https://yourblog.com/health-tracker-case-study"
    }
  ]
}
```

## Step 4: Result

Your project will now display with:

### Initial View:

- Project title with type badge ("mobile")
- Status indicator (completed/in-progress/published)
- Date
- Action buttons (Code, Preview, Demo, custom links)
- Main screenshot/thumbnail
- Description
- Technology tags

### Expanded View (Click "Show More Details"):

- **Tech Stack**: All technologies listed as chips
- **Key Features**: Bulleted list of main features
- **Screenshots Gallery**:
  - 2-4 column grid (responsive)
  - Portrait orientation optimized for mobile
  - Click any screenshot to view it larger
  - Smooth navigation between screenshots

## Tips for Mobile App Projects

### Screenshot Selection

1. **Home Screen**: Always include as thumbnail - first impression
2. **Core Features**: 2-3 screens showing main functionality
3. **Unique Features**: What makes your app special?
4. **Settings/Profile**: Shows polish and completeness

### Screenshot Preparation

```bash
# Compress screenshots (example using ImageMagick)
magick input.png -resize 1080x1920 -quality 85 output.png

# Or use online tools:
# - TinyPNG (https://tinypng.com)
# - Squoosh (https://squoosh.app)
```

### Best Practices

- Use consistent device frames (or no frames at all)
- Show actual content, not placeholder text
- Include diverse screens that tell a story
- Ensure UI is polished in screenshots
- Remove any sensitive/test data
- Use light mode OR dark mode consistently

### Adding Device Frames (Optional)

You can add device frames to screenshots using tools like:

- [Mockuphone](https://mockuphone.com)
- [Screely](https://www.screely.com)
- [Facebook Design Devices](https://design.facebook.com/toolsandresources/devices/)

## Example for Different Project Types

### Web Application

```typescript
{
  type: "web",
  thumbnail: "/assets/jpg/projects/my-web-app/hero.jpg",
  images: [
    "/assets/jpg/projects/my-web-app/dashboard.jpg",
    "/assets/jpg/projects/my-web-app/features.jpg",
  ]
}
```

### Desktop Application

```typescript
{
  type: "desktop",
  thumbnail: "/assets/png/projects/my-desktop-app/main-window.png",
  images: [
    "/assets/png/projects/my-desktop-app/editor.png",
    "/assets/png/projects/my-desktop-app/settings.png",
  ]
}
```

### Research Project

```typescript
{
  type: "research",
  thumbnail: "/assets/jpg/projects/my-research/overview.jpg",
  images: [
    "/assets/jpg/projects/my-research/architecture.jpg",
    "/assets/jpg/projects/my-research/results-chart.jpg",
    "/assets/jpg/projects/my-research/comparison.jpg",
  ]
}
```

## Testing Your Changes

1. Save all files
2. Run the development server:
   ```bash
   cd gowthamaanp.github.io
   npm run dev
   ```
3. Navigate to `http://localhost:3000/projects`
4. Check:
   - Images load correctly
   - Layout looks good on mobile and desktop
   - "Show More Details" expands properly
   - Screenshot gallery works
   - All links function

## Troubleshooting

### Images Not Showing

- Verify file path: `/assets/png/...` (starts with `/`, no `public/`)
- Check file exists in correct location
- Check browser DevTools console for 404 errors
- Ensure filename matches exactly (case-sensitive)

### Layout Issues

- For mobile screenshots, confirm 9:16 aspect ratio
- Compress large images (> 500KB)
- Test on different screen sizes

### Performance Issues

- Compress all images before adding
- Use JPG for photos, PNG for UI screenshots
- Lazy loading is automatic with Next.js Image
