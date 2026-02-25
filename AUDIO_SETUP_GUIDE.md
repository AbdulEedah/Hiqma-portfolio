# Audio Setup Guide for Portfolio Website

## Overview
Your portfolio website now has enhanced audio players with custom styling that matches the black, silver, and white theme. The audio players are integrated into both the HomePage and PortfolioPage.

## Where Audio Players Appear

### 1. HomePage - Voice-Over Section
- Located in the "Voice-Over Work" section
- Displays 3 audio samples with descriptions
- Each card includes:
  - Microphone icon
  - Project title
  - Description
  - Audio player

### 2. PortfolioPage - Voice-Over Tab
- Located in the "Voice-Over Projects" section
- Displays 4 detailed audio projects
- Each card includes:
  - Microphone icon
  - Project title
  - Category badge
  - Description
  - Audio player
  - Tags

## How to Add Your Audio Files

### Step 1: Prepare Your Audio Files
1. Convert your audio files to MP3 format (most compatible)
2. Recommended settings:
   - Format: MP3
   - Bitrate: 128-192 kbps (good quality, reasonable file size)
   - Sample Rate: 44.1 kHz
3. Keep file sizes reasonable (under 5MB per file)

### Step 2: Name Your Audio Files
Rename your audio files to match these names:
- `demo-1.mp3` - Commercial Voice-Over
- `demo-2.mp3` - Social Media Ad
- `demo-3.mp3` - Brand Narration
- `demo-4.mp3` - Product Launch Promo (Portfolio page only)

### Step 3: Place Audio Files in the Correct Folder
1. Navigate to: `C:\Users\pc\Documents\portfolio\public\audio\`
2. Copy your renamed audio files into this folder
3. The folder structure should look like:
   ```
   public/
   └── audio/
       ├── demo-1.mp3
       ├── demo-2.mp3
       ├── demo-3.mp3
       └── demo-4.mp3
   ```

## Current Audio Configuration

### HomePage (src/pages/HomePage.vue)
```javascript
const voiceoverProjects = [
  {
    title: 'Commercial Voice-Over',
    description: 'Professional brand commercial with engaging tone',
    audio: '/audio/demo-1.mp3'
  },
  {
    title: 'Social Media Ad',
    description: 'Dynamic social media advertisement voice work',
    audio: '/audio/demo-2.mp3'
  },
  {
    title: 'Brand Narration',
    description: 'Elegant brand story narration with emotional depth',
    audio: '/audio/demo-3.mp3'
  }
]
```

### PortfolioPage (src/pages/PortfolioPage.vue)
```javascript
const voiceProjects = [
  {
    title: 'Luxury Brand Commercial',
    category: 'Commercial',
    description: 'Elegant and sophisticated voice-over for high-end luxury brand campaign.',
    audio: '/audio/demo-1.mp3',
    tags: ['Commercial', 'Luxury', 'Elegant']
  },
  {
    title: 'Social Media Ad Campaign',
    category: 'Advertisement',
    description: 'Dynamic and engaging voice work for viral social media advertisement.',
    audio: '/audio/demo-2.mp3',
    tags: ['Social Media', 'Dynamic', 'Engaging']
  },
  {
    title: 'Brand Story Narration',
    category: 'Narration',
    description: 'Emotional and compelling brand story narration with authentic delivery.',
    audio: '/audio/demo-3.mp3',
    tags: ['Narration', 'Emotional', 'Storytelling']
  },
  {
    title: 'Product Launch Promo',
    category: 'Promotional',
    description: 'Energetic and persuasive voice-over for exciting product launch.',
    audio: '/audio/demo-4.mp3',
    tags: ['Promo', 'Energetic', 'Persuasive']
  }
]
```

## Audio Player Features

### Styling
- Custom black, silver, and white theme
- Rounded corners matching the glass card design
- Glassmorphism background effect
- Silver-toned controls
- Smooth hover effects

### Functionality
- Play/Pause button
- Timeline scrubber
- Current time display
- Remaining time display
- Volume control
- Download option (browser default)

### Browser Compatibility
- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Full support

## Customizing Audio Projects

### To Change Titles or Descriptions:
1. Open `src/pages/HomePage.vue` or `src/pages/PortfolioPage.vue`
2. Find the `voiceoverProjects` or `voiceProjects` array
3. Edit the `title`, `description`, `category`, or `tags` fields
4. Save the file - changes will hot-reload

### To Add More Audio Files:
1. Add your new audio file to `public/audio/` folder
2. Add a new object to the array:
```javascript
{
  title: 'Your Project Title',
  description: 'Your project description',
  audio: '/audio/your-file.mp3'
}
```

### To Remove Audio Projects:
Simply delete the corresponding object from the array.

## Testing Your Audio

### After Adding Audio Files:
1. Run `npm run dev`
2. Navigate to `http://localhost:9000/`
3. Scroll to the "Voice-Over Work" section
4. Click play on each audio player to test
5. Navigate to Portfolio page → Voice-Over tab
6. Test all audio players there as well

### Troubleshooting:
- **Audio doesn't play**: Check file path and ensure file is in `/public/audio/` folder
- **Wrong audio plays**: Verify filename matches the path in the code
- **Audio player doesn't appear**: Check browser console for errors
- **Styling looks off**: Clear browser cache and refresh

## Supported Audio Formats

### Primary (Recommended):
- MP3 (.mp3) - Best compatibility

### Alternative Formats:
- WAV (.wav) - Larger file size, uncompressed
- OGG (.ogg) - Good compression, not supported in Safari
- M4A (.m4a) - Good quality, limited support

### Multiple Format Support:
For maximum compatibility, you can provide multiple formats:
```html
<audio controls class="audio-player">
  <source src="/audio/demo-1.mp3" type="audio/mpeg">
  <source src="/audio/demo-1.ogg" type="audio/ogg">
  Your browser does not support the audio element.
</audio>
```

## Performance Tips

1. **Optimize File Size**: Keep audio files under 5MB
2. **Use Lazy Loading**: Audio files only load when the page loads
3. **Compress Audio**: Use tools like Audacity to reduce file size
4. **Consider Streaming**: For longer audio files, consider using a streaming service

## Next Steps

1. Record or prepare your voice-over samples
2. Convert them to MP3 format
3. Rename them as specified above
4. Place them in the `public/audio/` folder
5. Test the audio players
6. Customize titles and descriptions as needed

---

**Note**: The audio players are fully functional and styled. You just need to add your actual audio files to the `/public/audio/` folder!
