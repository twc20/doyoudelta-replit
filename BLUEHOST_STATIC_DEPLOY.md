# 🚀 Delta Tire - Bluehost Shared Hosting Deployment

## ✅ Your Site is Now Static HTML - Works on Any Hosting!

Your website has been converted to static HTML/CSS/JavaScript and will work perfectly on Bluehost shared hosting (no Node.js needed).

---

## 📦 Step 1: Download Your Files from Replit

**In Replit's Files panel (left side):**

1. **Download the `dist/public` folder:**
   - Navigate to `dist` → `public` folder
   - Right-click on `public` → Download
   - This contains your entire website

2. **Download `.htaccess` file:**
   - Find `.htaccess` in the root folder
   - Right-click → Download

3. **Extract the files:**
   - Unzip `public.zip` to your computer
   - You should have: `index.html`, `assets/`, `images/`, `logos/`

---

## 📤 Step 2: Upload to Bluehost

### **Using cPanel File Manager (Recommended):**

1. **Log into Bluehost:**
   - Go to https://my.bluehost.com
   - Click "Advanced" or "cPanel"

2. **Open File Manager:**
   - In cPanel, click "File Manager"
   - Navigate to `public_html` folder

3. **Upload ALL files from public folder:**
   - Click "Upload" button
   - Upload everything from inside the `public` folder:
     - ✅ `index.html`
     - ✅ `assets/` folder (contains CSS & JS)
     - ✅ `images/` folder (all images)
     - ✅ `logos/` folder (brand logos)

4. **Upload `.htaccess` file:**
   - Upload the `.htaccess` file to `public_html`

Your `public_html` folder should look like:
```
public_html/
├── .htaccess
├── index.html
├── assets/
│   ├── index-DNCm2R2g.js
│   └── index-DuK49T6e.css
├── images/
│   └── delta-tire-logo.png
└── logos/
    ├── armstrong.png
    ├── bfgoodrich.png
    └── ...
```

---

### **Using FTP (Alternative):**

1. **Get FTP credentials:**
   - In cPanel → "FTP Accounts"
   - Use your main account or create new FTP account

2. **Connect with FileZilla:**
   - Host: `ftp.deltatire.com` (or your domain)
   - Username: Your FTP username
   - Password: Your FTP password
   - Port: 21

3. **Upload files:**
   - Navigate to `public_html` folder
   - Upload all files from the `public` folder
   - Upload `.htaccess` file

---

## 🔐 Step 3: Enable SSL (HTTPS)

1. **In cPanel, go to "SSL/TLS Status":**
   - Find your domain in the list
   - Click "Run AutoSSL"
   - Wait 10-15 minutes for activation

2. **Your site will be secure at:**
   - https://deltatire.com

---

## ✅ Step 4: Test Your Live Website

Visit these pages to verify everything works:

- ✅ https://deltatire.com (homepage)
- ✅ https://deltatire.com/locations
- ✅ https://deltatire.com/services
- ✅ https://deltatire.com/tire-pros-warranty
- ✅ https://deltatire.com/blog
- ✅ https://deltatire.com/appointments

**Test these features:**
- Click "Call or Text Now" buttons → Opens phone/SMS app
- Test location selector dialog → Shows all 4 locations
- Resize browser → Mobile menu works
- Check all images load correctly
- Test SMS appointment booking

---

## 🎯 What Changed?

Your site is now **100% static** - no server needed:
- ✅ All pages work exactly the same
- ✅ All features work (SMS, location selector, blog, etc.)
- ✅ Works on ANY hosting (Bluehost, GoDaddy, Namecheap, etc.)
- ✅ Faster loading (no server processing)
- ✅ More reliable (no server to crash)

**What you CAN'T do with static hosting:**
- ❌ Form submissions to database
- ❌ User authentication/login
- ❌ Server-side processing

**But you CAN still:**
- ✅ Contact via phone/SMS (works perfectly)
- ✅ All informational content
- ✅ Location pages, blog, services
- ✅ Link to external booking systems

---

## 🆘 Troubleshooting

### **Problem: Images not loading**
**Solution:**
- Check that `images/` and `logos/` folders uploaded correctly
- Verify folder structure matches above
- Check file permissions: 755 for folders, 644 for files

### **Problem: CSS looks broken**
**Solution:**
- Make sure `assets/` folder uploaded with both CSS and JS files
- Clear browser cache: `Ctrl + Shift + R` (or `Cmd + Shift + R` on Mac)
- Check `.htaccess` file is in `public_html`

### **Problem: Pages show 404 error**
**Solution:**
- Make sure `.htaccess` file uploaded correctly
- The `.htaccess` enables SPA routing (all pages redirect to index.html)
- Contact Bluehost to ensure mod_rewrite is enabled

### **Problem: "Not Secure" warning**
**Solution:**
- SSL certificate may still be activating (wait 15 minutes)
- Check SSL/TLS Status in cPanel
- Run AutoSSL again if needed

### **Problem: Phone/SMS buttons don't work**
**Solution:**
- This is normal on desktop computers
- Test on an actual mobile phone
- Or use browser's mobile device emulator (F12 → toggle device toolbar)

---

## 🔄 Updating Your Website Later

When you need to make changes:

1. **Make changes in Replit**
2. **Run in Replit Shell:**
   ```bash
   npm run build
   ```
3. **Download new `dist/public` folder**
4. **Upload to Bluehost** (overwrite old files)
5. **Clear browser cache** to see changes

---

## 📊 Post-Deployment: Local SEO

Now that your website is live, maximize your visibility:

### **1. Google Business Profile (Critical!)**
- Go to https://business.google.com
- Add all 4 locations separately:
  - Grants, NM: (505) 287-7946
  - Gallup, NM: (505) 722-2945
  - Farmington, NM: (505) 325-4500
  - Eagar, AZ: (928) 333-3730
- Use exact same name/address/phone as website
- Add photos, hours, services
- Get customer reviews!

### **2. Submit to Google Search Console**
- Go to https://search.google.com/search-console
- Add property: deltatire.com
- Verify ownership (use HTML file method)
- Your SEO is already optimized!

### **3. Monitor Performance**
- Google Search Console: Track rankings
- Google Analytics: Track visitors (optional)
- Google Business: Monitor reviews

---

## 📞 Support

**Bluehost Support:**
- Phone: 1-888-401-4678
- Live Chat: In cPanel
- Help: https://my.bluehost.com/hosting/help

---

## ✨ You're Done!

**Your professional automotive website is now LIVE!**

Visit **https://deltatire.com** to see it in action! 🎉

All features work perfectly:
- ✅ 4 location pages with maps
- ✅ 6 service pages
- ✅ Tire Pros warranty info
- ✅ Blog with 12 articles
- ✅ SMS appointment booking
- ✅ Mobile-responsive design
- ✅ Enterprise-level local SEO
