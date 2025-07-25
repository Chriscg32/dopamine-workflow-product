#!/bin/bash
# 🧠 ADHD Sprint - GitHub Repository Setup Script

echo "🚀 ADHD Sprint - GitHub Repository Setup"
echo "=========================================="

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install git first:"
    echo "  - macOS: brew install git"
    echo "  - Ubuntu: sudo apt install git"
    echo "  - Windows: Download from git-scm.com"
    exit 1
fi

# Get GitHub username
echo "Enter your GitHub username:"
read GITHUB_USERNAME

# Get repository name (default: adhd-sprint-zero-cost)
REPO_NAME="adhd-sprint-zero-cost"
echo "Repository name [$REPO_NAME]:"
read CUSTOM_NAME
if [ ! -z "$CUSTOM_NAME" ]; then
    REPO_NAME=$CUSTOM_NAME
fi

# Initialize git repository
echo "🔄 Initializing git repository..."
git init
git branch -M main

# Create .gitignore
cat > .gitignore << EOF
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
lerna-debug.log*

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Coverage directory used by tools like istanbul
coverage
*.lcov

# nyc test coverage
.nyc_output

# Dependency directories
node_modules/
jspm_packages/

# Optional npm cache directory
.npm

# Optional eslint cache
.eslintcache

# Microbundle cache
.rpt2_cache/
.rts2_cache_cjs/
.rts2_cache_es/
.rts2_cache_umd/

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# dotenv environment variables file
.env
.env.test

# parcel-bundler cache (https://parceljs.org/)
.cache
.parcel-cache

# Stores VSCode versions used for testing VSCode extensions
.vscode-test

# Mac
.DS_Store

# Windows
Thumbs.db
EOF

# Add all files
echo "📦 Adding files..."
git add .

# Create initial commit
echo "📝 Creating initial commit..."
git commit -m "🧠 Initial commit: Zero-cost ADHD task system

Complete zero-cost ADHD productivity system featuring:
- Zero setup - open and use immediately
- Works offline - no internet required
- Mobile responsive - works on all devices
- Local storage - data stays on device
- Emergency mode - for bad brain days
- Celebrations - instant dopamine hits
- Completely free - no signup, no ads

Technical details:
- Pure HTML/CSS/JavaScript
- Zero dependencies
- 23KB total size
- Mobile optimized
- Ready for deployment

Built by ADHD brain, for ADHD brains 💖"

# Add remote repository
echo "🔗 Adding remote repository..."
git remote add origin https://github.com/$GITHUB_USERNAME/$REPO_NAME.git

# Push to GitHub
echo "🚀 Pushing to GitHub..."
git push -u origin main

echo ""
echo "✅ Repository setup complete!"
echo ""
echo "📈 Your repository is now live at:"
echo "   https://github.com/$GITHUB_USERNAME/$REPO_NAME"
echo ""
echo "📱 GitHub Pages URL:"
echo "   https://$GITHUB_USERNAME.github.io/$REPO_NAME"
echo ""
echo "🚀 Next steps:"
echo "1. Go to your repository settings"
echo "2. Scroll down to 'GitHub Pages'"
echo "3. Select 'main' branch as source"
echo "4. Your site will be live in 2 minutes!"
echo ""
echo "💡 Alternative deployment:"
echo "1. Go to netlify.com"
echo "2. Drag & drop this folder"
echo "3. Get instant URL"
echo ""
echo "💡 To make changes later:"
echo "git add ."
echo "git commit -m 'Your changes'"
echo "git push"