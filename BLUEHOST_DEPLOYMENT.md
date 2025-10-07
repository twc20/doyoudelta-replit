# Delta Tire - Bluehost Deployment Guide

## Prerequisites

Before you begin, make sure you have:
- ✅ Active Bluehost hosting account with Node.js support
- ✅ cPanel access credentials
- ✅ Domain name configured (deltatire.com)
- ✅ FTP/SFTP client (FileZilla recommended) or use cPanel File Manager
- ✅ Your GitHub repository access

---

## Step 1: Build Your Website for Production

### Option A: Build on Your Local Computer

1. **Download your project from GitHub:**
   - Go to https://github.com/twc20/LindyAI-Doyoudelta
   - Click the green "Code" button → "Download ZIP"
   - Extract the ZIP file to your computer

2. **Install Node.js (if not already installed):**
   - Download from https://nodejs.org (use LTS version 18 or higher)
   - Install with default settings

3. **Open Terminal/Command Prompt:**
   - **Windows:** Press `Win + R`, type `cmd`, press Enter
   - **Mac:** Press `Cmd + Space`, type `terminal`, press Enter

4. **Navigate to your project folder:**
   ```bash
   cd path/to/LindyAI-Doyoudelta
   ```

5. **Install dependencies:**
   ```bash
   npm install
   ```

6. **Build the production version:**
   ```bash
   npm run build
   ```

This creates a `dist` folder with your production-ready website.

### Option B: Download Pre-Built Files from Replit

If building locally is difficult, you can download directly from Replit:
1. Run `npm run build` in Replit
2. Download the entire `dist` folder
3. Skip to Step 2

---

## Step 2: Access Bluehost cPanel

1. **Log into Bluehost:**
   - Go to https://my.bluehost.com
   - Enter your credentials

2. **Access cPanel:**
   - Click "Advanced" or "cPanel" from the dashboard
   - You'll see the control panel interface

---

## Step 3: Set Up Node.js in Bluehost

1. **In cPanel, find "Setup Node.js App":**
   - Look in the "Software" section
   - Click "Setup Node.js App"

2. **Create New Application:**
   - Click "Create Application" button
   - **Node.js version:** Select 18.x or 20.x (latest available)
   - **Application mode:** Production
   - **Application root:** `deltatire` (or your preferred folder name)
   - **Application URL:** Select your domain (deltatire.com)
   - **Application startup file:** `server/index.js`
   - Click "Create"

3. **Note the command displayed:**
   - Bluehost will show a command like `source /home/username/nodevenv/...`
   - Copy this - you'll need it later

---

## Step 4: Upload Your Files

### Using cPanel File Manager (Easier):

1. **In cPanel, open "File Manager":**
   - Navigate to the folder you created (e.g., `deltatire`)

2. **Upload your files:**
   - Click "Upload" button
   - Upload these folders/files from your `dist` folder:
     - `public/` folder → Upload entire folder with all images/logos
     - `server.js` → Your built server file
     - `package.json` → Your package file
   
3. **Create `.htaccess` file:**
   - In File Manager, click "New File"
   - Name it `.htaccess`
   - Edit and paste the content (see Step 5)

### Using FTP (Alternative):

1. **Get FTP credentials from cPanel:**
   - cPanel → "FTP Accounts" → Use your main account credentials

2. **Connect with FileZilla:**
   - Host: ftp.yourdomain.com
   - Username: Your cPanel username
   - Password: Your cPanel password
   - Port: 21

3. **Upload files:**
   - Navigate to your application folder
   - Upload all files from the `dist` folder

---

## Step 5: Configure Apache (.htaccess)

Create a `.htaccess` file in your application root:

```apache
# Force HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Proxy requests to Node.js
RewriteEngine On
RewriteRule ^$ http://127.0.0.1:YOURPORT/ [P,L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ http://127.0.0.1:YOURPORT/$1 [P,L]
```

**Replace `YOURPORT` with the port number shown in your Node.js app setup.**

---

## Step 6: Install Dependencies on Bluehost

1. **In cPanel, open "Terminal":**
   - Look for "Terminal" in cPanel (in Advanced section)
   - Click to open

2. **Navigate to your app folder:**
   ```bash
   cd deltatire
   ```

3. **Activate Node.js environment:**
   ```bash
   source /home/USERNAME/nodevenv/deltatire/18/bin/activate
   ```
   (Replace USERNAME with your actual username and adjust path as shown in Step 3)

4. **Install dependencies:**
   ```bash
   npm install --production
   ```

---

## Step 7: Configure Environment Variables

1. **In Node.js App Manager:**
   - Find your app in the list
   - Click "Edit" (pencil icon)
   - Scroll to "Environment variables"

2. **Add these variables:**
   ```
   NODE_ENV=production
   PORT=YOURPORT (use the port shown in app setup)
   SESSION_SECRET=your-secret-key-here
   ```

   To generate a secure SESSION_SECRET:
   - Use: https://passwordsgenerator.net
   - Generate a 32-character random string

---

## Step 8: Start Your Application

1. **In Node.js App Manager:**
   - Click "Run NPM Install" button (if available)
   - Click "Restart" button
   - Status should show "Running"

2. **Check if it's working:**
   - Click "Open" or visit your domain
   - You should see your Delta Tire website!

---

## Step 9: Configure Your Domain

1. **Point domain to application:**
   - In cPanel → "Domains"
   - Make sure deltatire.com points to your application folder

2. **Set up SSL (HTTPS):**
   - In cPanel → "SSL/TLS Status"
   - Enable "AutoSSL" for your domain
   - Wait 10-15 minutes for certificate activation

---

## Step 10: Verify Everything Works

### Test These Pages:
- ✅ Homepage: https://deltatire.com
- ✅ Services: https://deltatire.com/services
- ✅ Locations: https://deltatire.com/locations
- ✅ Warranty: https://deltatire.com/tire-pros-warranty
- ✅ Blog: https://deltatire.com/blog
- ✅ Appointments: https://deltatire.com/appointments

### Test These Features:
- ✅ Click "Call or Text Now" buttons
- ✅ Test location selector
- ✅ Test mobile menu (resize browser)
- ✅ Check all images load
- ✅ Test SMS appointment booking

---

## Troubleshooting

### Problem: "502 Bad Gateway" or "503 Service Unavailable"
**Solution:** 
- Node.js app isn't running
- Go to Node.js App Manager → Restart the app
- Check Terminal for error messages: `npm start`

### Problem: Images not loading
**Solution:**
- Ensure `public` folder uploaded correctly
- Check file permissions (755 for folders, 644 for files)
- Verify image paths in browser console (F12)

### Problem: "Module not found" errors
**Solution:**
- Run `npm install --production` in Terminal
- Make sure package.json uploaded correctly

### Problem: CSS/styling looks broken
**Solution:**
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check if Vite built correctly
- Ensure all files in `dist/public` uploaded

### Problem: Site loads but phone numbers don't work
**Solution:**
- This is normal on desktop - phone numbers work on mobile devices
- Test on actual phone or use browser mobile emulator

---

## Post-Deployment: Set Up Google Business

Now that your website is live, complete your local SEO:

1. **Claim Google Business Profiles:**
   - Go to https://business.google.com
   - Add all 4 locations separately
   - Use exact same name/address/phone as on website

2. **Submit Sitemap to Google:**
   - Go to https://search.google.com/search-console
   - Add your property (deltatire.com)
   - Submit sitemap: https://deltatire.com/sitemap.xml

3. **Monitor Performance:**
   - Google Search Console: Track search rankings
   - Google Analytics: Track visitor behavior
   - Google Business: Monitor reviews and questions

---

## Updating Your Website Later

When you need to make changes:

1. **Update code on Replit or locally**
2. **Run `npm run build`**
3. **Upload new files to Bluehost (overwrite old ones)**
4. **Restart Node.js app in cPanel**

Or use GitHub deployment:
1. **Push changes to GitHub**
2. **SSH into Bluehost**
3. **Run `git pull` in your app folder**
4. **Run `npm run build`**
5. **Restart app**

---

## Support Contacts

**Bluehost Support:**
- Phone: 1-888-401-4678
- Live Chat: Available in cPanel
- Knowledge Base: https://my.bluehost.com/hosting/help

**Your Website Support:**
- Replit workspace: https://replit.com
- GitHub repo: https://github.com/twc20/LindyAI-Doyoudelta

---

## Quick Reference Commands

```bash
# Navigate to app folder
cd deltatire

# Activate Node.js environment
source /home/USERNAME/nodevenv/deltatire/18/bin/activate

# Install dependencies
npm install --production

# Start app (if not using Node.js App Manager)
npm start

# Check app status
pm2 status

# View logs
tail -f logs/app.log
```

---

**Your website is now live! 🎉**

Visit https://deltatire.com to see it in action!
