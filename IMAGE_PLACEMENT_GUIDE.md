# Image Placement Guide

## Images to Add to Your Portfolio

I've updated the code to reference your new images. Now you need to save the actual image files to the correct locations.

### Directory Structure

All images should be placed in: `public/images/modeling/`

### Image File Names and Placement

Please save your images with these exact filenames in the `public/images/modeling/` folder:

1. **hero-main.jpg** - The first image (blue patterned dress with beige background)
   - This will be the main hero image on the homepage

2. **portrait-blue-dress.jpg** - Same as above (blue patterned dress)
   - Used in portfolio gallery

3. **window-silhouette.jpg** - The silhouette by the window
   - Used in portfolio gallery

4. **white-hijab-indoor.jpg** - Indoor portrait with white hijab
   - Used in portfolio gallery (appears twice in your uploads, use either)

5. **red-crown-outdoor.jpg** - Outdoor photo with red dress and crown
   - Used in portfolio gallery

6. **sunset-africa-shirt.jpg** - Sunset photo with Africa print shirt (contemplative pose)
   - Used in portfolio gallery

7. **lake-beige-dress.jpg** - Photo by the lake in beige dress
   - Used in portfolio gallery

8. **bridge-checkered-top.jpg** - Bridge photo with checkered blue top
   - Used in portfolio gallery

9. **sunset-smile.jpg** - Sunset photo with Africa print shirt (smiling)
   - Used in portfolio gallery

### How to Add the Images

1. Open your file explorer
2. Navigate to: `C:\Users\pc\Documents\portfolio\public\images\modeling\`
3. Copy each image from your downloads/source folder
4. Rename them according to the list above
5. Paste them into the `modeling` folder

### After Adding Images

Once you've placed all the images:
1. The dev server will automatically detect them
2. Refresh your browser to see the images
3. The homepage hero section will show the main portrait
4. The portfolio page will display all 8 images in a masonry grid

### Image Format Notes

- All images should be in JPG format
- The code includes error handling for missing images
- If an image fails to load, a placeholder will be shown

### Testing

After placing the images, visit:
- Homepage: `http://localhost:9001/` - Check the hero section
- Portfolio: `http://localhost:9001/#/portfolio` - Check the modeling gallery

---

**Note:** The image files themselves are not included in the code repository. You need to manually place them in the correct folder as described above.
