# 🚀 Delta Tire - Bluehost Deployment Quick Start

## What You Need
1. ✅ Bluehost account with Node.js support
2. ✅ Domain: deltatire.com
3. ✅ Files from this project

## 3-Step Deployment

### Step 1: Build Your Website
```bash
npm install
npm run build
```
This creates a `dist` folder with everything you need.

### Step 2: Upload to Bluehost

**Via cPanel File Manager:**
1. Log into Bluehost → cPanel
2. File Manager → Create folder `deltatire`
3. Upload ALL files from `dist` folder:
   - `index.js` (your server)
   - `public/` folder (all your images/assets)
   - `package.json`
4. Upload `.htaccess` from project root

### Step 3: Configure Node.js

**In cPanel:**
1. "Setup Node.js App" → Create Application
   - Node version: 18.x or 20.x
   - App root: `deltatire`
   - App URL: deltatire.com
   - Startup file: `index.js`
   - Mode: Production

2. Terminal → Navigate to folder:
   ```bash
   cd deltatire
   source /home/USERNAME/nodevenv/deltatire/18/bin/activate
   npm install --production
   ```

3. Add Environment Variables:
   ```
   NODE_ENV=production
   PORT=(use port from Node.js setup)
   SESSION_SECRET=(generate random 32-char string)
   ```

4. Click "Restart" in Node.js App Manager

### Step 4: Enable SSL
1. cPanel → SSL/TLS Status
2. Enable AutoSSL for deltatire.com
3. Wait 10-15 minutes

## ✅ Test Your Site

Visit: https://deltatire.com

Test these pages:
- Homepage
- /locations
- /services
- /tire-pros-warranty
- /blog
- /appointments

## 🆘 Quick Troubleshooting

**502 Error?** → Restart Node.js app in cPanel
**Images missing?** → Verify `public` folder uploaded
**CSS broken?** → Clear browser cache (Ctrl+Shift+R)

## 📚 Full Instructions

See `BLUEHOST_DEPLOYMENT.md` for detailed step-by-step guide.

## Port Configuration

**Important:** After creating your Node.js app in Bluehost:
1. Note the port number shown (e.g., 3000, 3001, etc.)
2. Edit `.htaccess` file
3. Replace `PORT_NUMBER` with your actual port
4. Save and upload

Example:
```apache
RewriteRule ^(.*)$ http://127.0.0.1:3001/$1 [P,L]
```

---

**Your website will be live at https://deltatire.com! 🎉**
