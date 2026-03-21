# 🚀 Deploy StudyDeck to GitHub Pages - Step by Step

## What You'll Get
- **Free hosting** forever ✅
- **Live URL:** `https://yourusername.github.io`
- **Automatic HTTPS** (secure) ✅
- **Custom domain** (optional, paid)

---

## ⚙️ Prerequisites

You need:
1. **GitHub account** (free) - https://github.com
2. **Git installed** (or use GitHub Desktop)
3. **Your 3 files:**
   - `studydeck-v5.html`
   - `manifest.json`
   - `sw.js`

---

## 📋 Step-by-Step Guide

### STEP 1: Create GitHub Account
1. Go to **https://github.com**
2. Click **"Sign up"**
3. Enter email, password, username
4. Verify email
5. ✅ **Account created**

**Save your username!** You'll need it for your URL.

---

### STEP 2: Create Repository

1. Go to **https://github.com/new**
2. **Repository name:** Enter exactly:
   ```
   yourusername.github.io
   ```
   (Replace `yourusername` with YOUR GitHub username)
   
   **Example:** If your username is `john`, type: `john.github.io`

3. **Description (optional):** "StudyDeck - Flashcard Learning App"

4. **Public** (must be public for GitHub Pages)

5. **Initialize with README** (check the box)

6. Click **"Create repository"**

7. ✅ **Repository created!**

---

### STEP 3: Upload Your Files

#### Option A: Web Interface (Easiest)

1. Go to your new repo (should auto-open)
2. Click **"Add file"** → **"Upload files"**
3. **Drag & drop** these 3 files:
   - `studydeck-v5.html`
   - `manifest.json`
   - `sw.js`
4. At bottom, click **"Commit changes"**
5. ✅ **Files uploaded!**

#### Option B: Git Command (If you have Git installed)

```bash
# Navigate to your folder with the 3 files
cd /path/to/your/files

# Initialize git
git init

# Add files
git add .

# Commit
git commit -m "Initial StudyDeck upload"

# Add remote
git remote add origin https://github.com/yourusername/yourusername.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

### STEP 4: Enable GitHub Pages

1. Go to your repo: `https://github.com/yourusername/yourusername.github.io`
2. Click **"Settings"** (top right)
3. In left menu, click **"Pages"**
4. Under "Source", select:
   - Branch: **`main`**
   - Folder: **`/ (root)`**
5. Click **"Save"**
6. ✅ **GitHub Pages enabled!**

**You'll see:** "Your site is published at `https://yourusername.github.io`"

---

### STEP 5: Access Your Live App

Your app is now live at:
```
https://yourusername.github.io
```

**Example:** If username is `john`:
```
https://john.github.io
```

✅ **YOUR APP IS NOW PUBLIC!** 🎉

---

## ✅ Verify It Works

1. **Open in browser:** `https://yourusername.github.io`
2. Should see StudyDeck app loading
3. **Test on phone:** Open same URL on mobile
4. Should work perfectly!

---

## 🔧 Important Notes

### File Access
- Main file: `https://yourusername.github.io/studydeck-v5.html`
- Or just: `https://yourusername.github.io` (if default)

### IMPORTANT: Update HTML File Path

Your `manifest.json` references file paths. If needed, update:

In `studydeck-v5.html`, the manifest link should be:
```html
<link rel="manifest" href="./manifest.json">
```

And in `manifest.json`, start_url should be:
```json
"start_url": "./studydeck-v5.html",
```

These are already correct! ✅

---

## 🔄 How to Update Your App

After deploying, if you want to **update the app:**

### Option A: Web Interface
1. Go to your repo
2. Click file you want to update (e.g., `studydeck-v5.html`)
3. Click **pencil icon** (Edit)
4. Make changes
5. Click **"Commit changes"**
6. Changes live in 1-2 minutes! ✅

### Option B: Git Command
```bash
# Make changes to files
# Then:
git add .
git commit -m "Updated StudyDeck"
git push
```

---

## 📱 Share Your App

Your app is now accessible worldwide!

**Share this link:**
```
https://yourusername.github.io
```

People can:
- ✅ Open in browser (desktop/mobile)
- ✅ Install as PWA (add to home screen)
- ✅ Use offline
- ✅ All data saved locally

---

## 📊 What's Next?

### 1. **Test on Different Devices**
   - Desktop browser ✅
   - iPhone Safari ✅
   - Android Chrome ✅
   - Tablet ✅

### 2. **Test Offline**
   - Open app
   - Go offline (airplane mode)
   - Should still work! ✅

### 3. **Share**
   - Send link to friends
   - Post on social media
   - Get feedback

### 4. **Convert to Android** (Optional)
   - Follow DEPLOYMENT_GUIDE.md
   - Submit to Google Play
   - 2-3 days till live

---

## 🎯 Troubleshooting

### "Page not found (404)"
- Check repo name is `yourusername.github.io`
- Check files are in root folder
- Wait 1-2 minutes for GitHub to process

### "App loads but styles missing"
- Check manifest.json is in root folder
- Check sw.js is in root folder
- Clear browser cache (Ctrl+Shift+Delete)

### "Offline not working"
- Service Worker needs HTTPS (GitHub Pages has this ✅)
- Clear cache and reload
- Service Worker takes 24 hours to fully activate

### "Can't upload files"
- Repository must be public
- Make sure you have write access
- Try using Git command instead

---

## 🔐 Security & Privacy

- ✅ HTTPS enabled automatically
- ✅ All data stored locally (no servers)
- ✅ No tracking or analytics
- ✅ No ads or external calls
- ✅ Completely private

---

## 💡 Pro Tips

1. **Custom Domain** (optional, paid)
   - Buy domain from GoDaddy/Namecheap ($12/year)
   - Point to GitHub Pages
   - Your site at `yourstudydeck.com`

2. **Custom README**
   - Edit `README.md` on GitHub
   - Describe your app
   - Add screenshot

3. **GitHub Actions** (advanced)
   - Auto-deploy from main branch
   - Already enabled! ✅

4. **Stats**
   - GitHub shows traffic stats
   - See who uses your app

---

## 🎉 You're Done!

Your StudyDeck app is now:
- ✅ Live on the web
- ✅ Free forever
- ✅ Works offline
- ✅ Accessible worldwide
- ✅ Can be installed as app

**Share your URL:** `https://yourusername.github.io`

---

## 📞 Next Steps

1. **Create your GitHub account** (5 min)
2. **Follow steps 1-5 above** (10 min)
3. **Test on phone** (5 min)
4. **Share with friends!** (ongoing)
5. **Celebrate!** 🎉

---

## 🚀 Ready to Launch?

Let me know when you've deployed! Then we can:
- Monitor user feedback
- Plan Android launch
- Add new features
- Implement monetization

**Happy launching!** 🚀
