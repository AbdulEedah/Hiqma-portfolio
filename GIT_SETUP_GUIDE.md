# Git Setup Guide for Portfolio Project

## Why Use Git?

Git helps you:
- Track changes to your code
- Backup your work
- Collaborate with others
- Deploy to hosting platforms (Vercel, Netlify, GitHub Pages)

## Installation Steps

### 1. Download Git for Windows
1. Visit: https://git-scm.com/download/win
2. Download the latest version (64-bit recommended)
3. Run the installer

### 2. Installation Options
Use these settings during installation:
- **Editor**: Use Visual Studio Code (or your preferred editor)
- **PATH environment**: Git from the command line and also from 3rd-party software
- **Line ending conversions**: Checkout Windows-style, commit Unix-style line endings
- **Terminal emulator**: Use Windows' default console window
- **Default branch name**: main (or master)
- All other options: Use defaults

### 3. Verify Installation
After installation:
1. Close all PowerShell/Command Prompt windows
2. Open a new PowerShell window
3. Run: `git --version`
4. You should see something like: `git version 2.x.x`

## Setting Up Git for Your Portfolio

### 1. Configure Git (First Time Only)
```powershell
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### 2. Initialize Repository
Navigate to your portfolio folder and run:
```powershell
cd C:\Users\pc\Documents\portfolio
git init
```

### 3. Create .gitignore File
This tells Git which files to ignore:
```powershell
# Already created in your project
# The .gitignore file excludes node_modules, dist, etc.
```

### 4. Make Your First Commit
```powershell
# Add all files to staging
git add .

# Create your first commit
git commit -m "Initial commit: Portfolio website setup"
```

## Common Git Commands

### Check Status
```powershell
git status
```
Shows which files have changed

### Add Files
```powershell
# Add specific file
git add src/pages/HomePage.vue

# Add all files
git add .
```

### Commit Changes
```powershell
git commit -m "Your commit message describing the changes"
```

### View History
```powershell
git log
```

### Create a Branch
```powershell
git branch feature-name
git checkout feature-name

# Or create and switch in one command
git checkout -b feature-name
```

### Switch Branches
```powershell
git checkout main
```

## Connecting to GitHub (Optional)

### 1. Create GitHub Account
- Go to: https://github.com
- Sign up for a free account

### 2. Create New Repository
- Click "New repository"
- Name it: `portfolio`
- Don't initialize with README (you already have files)
- Click "Create repository"

### 3. Connect Local to GitHub
```powershell
# Add remote repository
git remote add origin https://github.com/yourusername/portfolio.git

# Push your code
git branch -M main
git push -u origin main
```

## Deploying Your Portfolio

### Option 1: Vercel (Recommended)
1. Go to: https://vercel.com
2. Sign up with GitHub
3. Import your repository
4. Vercel will auto-detect Quasar and deploy
5. Your site will be live at: `your-project.vercel.app`

### Option 2: Netlify
1. Go to: https://netlify.com
2. Sign up with GitHub
3. Import your repository
4. Build command: `quasar build`
5. Publish directory: `dist/spa`

### Option 3: GitHub Pages
1. Build your project: `npm run build`
2. Push the `dist/spa` folder to a `gh-pages` branch
3. Enable GitHub Pages in repository settings

## Typical Workflow

### Daily Development
```powershell
# 1. Check what changed
git status

# 2. Add your changes
git add .

# 3. Commit with a message
git commit -m "Added audio players and fixed navigation"

# 4. Push to GitHub (if connected)
git push
```

### Before Making Big Changes
```powershell
# Create a new branch
git checkout -b new-feature

# Make your changes
# Test everything

# Commit changes
git add .
git commit -m "Implemented new feature"

# Switch back to main
git checkout main

# Merge the feature
git merge new-feature
```

## Useful Git Tips

### Undo Last Commit (Keep Changes)
```powershell
git reset --soft HEAD~1
```

### Undo Changes to a File
```powershell
git checkout -- filename.vue
```

### See What Changed
```powershell
git diff
```

### View Commit History (Pretty)
```powershell
git log --oneline --graph --all
```

### Stash Changes Temporarily
```powershell
# Save changes without committing
git stash

# Restore stashed changes
git stash pop
```

## Troubleshooting

### "Git is not recognized"
- Git is not installed or not in PATH
- Solution: Install Git and restart PowerShell

### "Permission denied (publickey)"
- SSH key not set up for GitHub
- Solution: Use HTTPS instead or set up SSH keys

### "Failed to push"
- Remote has changes you don't have locally
- Solution: `git pull` first, then `git push`

### Merge Conflicts
- Two branches changed the same lines
- Solution: Open conflicted files, resolve conflicts, then commit

## Resources

- Git Documentation: https://git-scm.com/doc
- GitHub Guides: https://guides.github.com
- Git Cheat Sheet: https://education.github.com/git-cheat-sheet-education.pdf
- Interactive Git Tutorial: https://learngitbranching.js.org

## Your Portfolio Project Structure

```
portfolio/
├── .git/                 # Git repository data (created after git init)
├── .gitignore           # Files to ignore
├── node_modules/        # Dependencies (ignored by git)
├── public/              # Static assets
│   ├── images/          # Your photos
│   └── audio/           # Your voice-over samples
├── src/                 # Source code
│   ├── pages/           # Vue pages
│   ├── layouts/         # Layout components
│   ├── router/          # Router configuration
│   └── css/             # Global styles
├── package.json         # Project dependencies
└── quasar.config.js     # Quasar configuration
```

## Next Steps After Installing Git

1. Install Git from the link above
2. Restart PowerShell
3. Run `git --version` to verify
4. Configure your name and email
5. Initialize your repository: `git init`
6. Make your first commit: `git add . && git commit -m "Initial commit"`
7. (Optional) Connect to GitHub and deploy

---

**Note**: Git is essential for modern web development and will help you manage your portfolio project professionally!
