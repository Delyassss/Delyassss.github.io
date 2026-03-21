# 📱 StudyDeck Deployment Guide

## Files You Have:
- `studydeck-v5.html` - Main app (PWA enabled)
- `manifest.json` - PWA configuration
- `sw.js` - Service Worker (offline support)

---

## 🌐 PART 1: Deploy Web Version

### Option A: **Netlify** (Easiest - Drag & Drop)

1. Go to **https://netlify.com**
2. **Sign up** (free with GitHub/Google)
3. Drag & drop folder with all 3 files
4. ✅ **DONE!** You get a live URL instantly

**Your URL:** `https://your-app-name.netlify.app`

---

### Option B: **Vercel** (Fast, Zero Config)

1. Go to **https://vercel.com**
2. **Sign up** with GitHub
3. Create new project
4. Upload your 3 files
5. Click Deploy
6. ✅ **DONE!** Live in seconds

**Your URL:** `https://your-app-name.vercel.app`

---

### Option C: **GitHub Pages** (Free & Simple)

1. Create GitHub account (if needed)
2. Create new repo: `yourusername.github.io`
3. Upload your 3 files
4. Enable GitHub Pages in Settings
5. ✅ **DONE!**

**Your URL:** `https://yourusername.github.io`

---

## 🎯 Before Deploying - Checklist

- [ ] All 3 files together in same folder
- [ ] `studydeck-v5.html` properly configured
- [ ] `manifest.json` linked in HTML ✅ (already done)
- [ ] `sw.js` for offline support ✅ (already done)

---

## 📱 PART 2: Convert to Android APK

### Step 1: Convert HTML to APK

**Option A: Online Tool (Easiest)**
- Go to **https://www.appstomaker.com** or **https://appsgeyser.com**
- Upload `studydeck-v5.html`
- Get free APK download
- Done in 5 minutes!

**Option B: Android Studio (Professional)**
1. Download Android Studio
2. Create WebView project
3. Load HTML file
4. Build signed APK
5. Takes 30 minutes, more control

**Option C: Capacitor (Advanced)**
```bash
npm install -g @capacitor/cli
capacitor create
capacitor add android
capacitor build android
```

### Step 2: Prepare for Google Play Store

1. **Get Google Play Developer Account**
   - Go to **https://play.google.com/console**
   - Pay $25 one-time fee
   - Takes ~5 minutes

2. **Prepare Store Listing**
   - App name: "StudyDeck"
   - Short description (80 chars)
   - Full description (4000 chars)
   - Category: Education
   - Privacy policy URL

3. **Create Assets**
   - **App icon**: 512×512 PNG (with rounded corners)
   - **Screenshots**: 2-8 images (440×660 or 1080×1920 px)
     - Screenshot 1: Decks screen
     - Screenshot 2: Study mode
     - Screenshot 3: Timer
   - **Feature graphic**: 1024×500 PNG

4. **Create Privacy Policy**
   - Use template from: **https://www.privacypolicygenerator.info**
   - Say: "App uses localStorage, no external data collection"
   - Host on your website or GitHub

### Step 3: Upload to Google Play

1. Click "Create new app"
2. Fill in app details
3. Upload signed APK
4. Add store listing (name, description, screenshots)
5. Add privacy policy link
6. Set content rating (choose "Not required")
7. Click "Submit for review"
8. ⏳ Wait 24-48 hours

---

## 💰 Monetization Options

### For Free Version:
1. Add banner ads (Google AdMob)
2. Add interstitial ads (between actions)
3. Premium features (unlock with $4.99)

### Setup Google AdMob:
```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_ID"
     crossorigin="anonymous"></script>
```

---

## 📋 Quick Launch Checklist

### ✅ Web (Do First - Takes 10 mins)
- [ ] Choose hosting (Netlify/Vercel/GitHub)
- [ ] Upload 3 files
- [ ] Get live URL
- [ ] Test on mobile
- [ ] Share with friends!

### ✅ Android (Do Second - Takes 2-3 days with review)
- [ ] Convert to APK
- [ ] Create Google Play account ($25)
- [ ] Prepare store listing
- [ ] Create screenshots
- [ ] Write privacy policy
- [ ] Upload APK
- [ ] Submit for review
- [ ] Wait for approval (24-48 hours)
- [ ] Live on Play Store! 🎉

---

## 🔥 Launch Timeline

**Day 1:** Web version live ✅
**Day 2:** Android APK ready
**Day 3:** Submitted to Play Store
**Day 4-5:** Approved on Play Store 🎉

---

## 📊 What's Next

Once live:
1. Share on Reddit, Twitter, ProductHunt
2. Add features based on feedback
3. Implement analytics (Mixpanel/Firebase)
4. Add social sharing
5. Consider premium version ($4.99/month)
6. Target: 10,000 downloads → $2,500/month revenue

---

## 🆘 Troubleshooting

**"My app doesn't load"**
- Check all 3 files are in same folder
- Check manifest.json is linked
- Clear browser cache

**"Offline doesn't work"**
- Service Worker may not register on localhost
- Deploy to actual URL first
- Check console for SW errors

**"Play Store says 'Invalid APK'"**
- Make sure APK is signed (not debug)
- Check minimum API level is 21+
- Verify package name is unique

---

## 📞 Support

Need help? Reply with:
- Where you got stuck (web or Android?)
- Screenshot of error
- Which hosting you chose

Good luck! 🚀
