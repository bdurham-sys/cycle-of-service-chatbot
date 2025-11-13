# 🚀 DEPLOYMENT INSTRUCTIONS

Follow these steps exactly to deploy your Cycles of Service™ Builder to Vercel.

**Total Time: 15-20 minutes**

---

## ✅ Prerequisites Check

Before starting, make sure you have:
- [ ] A GitHub account
- [ ] A Vercel account (sign up free at vercel.com)
- [ ] Git installed on your computer OR GitHub Desktop
- [ ] This project folder on your computer

---

## 📝 STEP 1: Get Your Anthropic API Key (5 minutes)

### 1.1 Go to Anthropic Console
Open your browser and go to: **https://console.anthropic.com/**

### 1.2 Sign Up or Log In
- If you don't have an account: Click "Sign Up" and create one
- If you have an account: Log in with your credentials

### 1.3 Create API Key
1. Once logged in, look for **"API Keys"** in the left sidebar
2. Click **"Create Key"**
3. Give it a name like **"Cycle of Service Builder"**
4. Click **"Create Key"**

### 1.4 Copy and Save Your Key
**⚠️ IMPORTANT:** Copy the API key that appears - you can only see it once!

Example format: `sk-ant-api03-...` (it's a long string)

**Save it somewhere safe** - you'll need it in Step 3!

---

## 🔄 STEP 2: Push Code to GitHub (5 minutes)

You have two options: **GitHub Desktop (Easier)** or **Command Line**

### OPTION A: Using GitHub Desktop (Recommended for non-developers)

#### 2.1 Download GitHub Desktop
If you don't have it: Download from **https://desktop.github.com/**

#### 2.2 Add Your Project
1. Open GitHub Desktop
2. Click **"File"** → **"Add Local Repository"**
3. Click **"Choose..."** and select your `cycle-of-service-chatbot` folder
4. If it says "not a git repository", click **"Create a Repository"** instead

#### 2.3 Make Initial Commit
1. You should see all your files listed
2. In the bottom left, add a summary: **"Initial commit"**
3. Click **"Commit to main"**

#### 2.4 Publish to GitHub
1. Click **"Publish repository"** at the top
2. Choose if you want it **Public** or **Private** (either works)
3. Uncheck **"Keep this code private"** if you want it public
4. Click **"Publish Repository"**

**Done!** Your code is now on GitHub. Skip to Step 3.

---

### OPTION B: Using Command Line (For developers)

#### 2.1 Open Terminal
Navigate to your project folder:
```bash
cd /path/to/cycle-of-service-chatbot
```

#### 2.2 Initialize Git (if not already done)
```bash
git init
git add .
git commit -m "Initial commit"
```

#### 2.3 Create GitHub Repository
1. Go to **https://github.com/new**
2. Name it: **cycle-of-service-builder**
3. Make it **Public** or **Private**
4. **Do NOT** initialize with README
5. Click **"Create repository"**

#### 2.4 Push to GitHub
Copy the commands from GitHub (they look like this):
```bash
git remote add origin https://github.com/YOUR_USERNAME/cycle-of-service-builder.git
git branch -M main
git push -u origin main
```

**Done!** Your code is now on GitHub.

---

## ☁️ STEP 3: Deploy on Vercel (5 minutes)

### 3.1 Go to Vercel
Open your browser and go to: **https://vercel.com**

### 3.2 Sign Up with GitHub
1. Click **"Sign Up"** (or **"Log In"** if you have an account)
2. Choose **"Continue with GitHub"**
3. Authorize Vercel to access your GitHub account

### 3.3 Import Your Project
1. Once logged in, click **"Add New..."** in the top right
2. Select **"Project"**
3. Find your **cycle-of-service-builder** repository in the list
4. Click **"Import"**

### 3.4 Configure Project Settings

**Vercel will auto-detect Next.js - don't change these settings!**

The important part is adding your environment variable:

#### 3.4.1 Add Environment Variable
1. Look for the **"Environment Variables"** section
2. Click to expand it
3. Add a new variable:
   - **Name:** `ANTHROPIC_API_KEY`
   - **Value:** [Paste the API key you saved in Step 1.4]
4. Click **"Add"**

**Double-check:** Make sure the name is exactly `ANTHROPIC_API_KEY` (all caps, with underscores)

### 3.5 Deploy!
1. Click the big **"Deploy"** button
2. Wait 2-3 minutes while Vercel builds your app
3. You'll see a progress screen with logs

### 3.6 Success! 🎉
When deployment completes, you'll see:
- **"Congratulations!"** message
- A **screenshot** of your app
- A **URL** like: `https://cycle-of-service-builder-abc123.vercel.app`

### 3.7 Visit Your Live App
1. Click the **"Visit"** button or click the URL
2. Your Cycles of Service™ Builder is now LIVE! 🚀

---

## 🧪 STEP 4: Test Your Deployment (5 minutes)

### 4.1 Test File Upload
1. Open your deployed app
2. Try uploading the `EXAMPLE_DOCUMENT.txt` file
3. Wait 10-30 seconds for analysis
4. Verify the analysis appears

### 4.2 Test Chat Interface
1. Click one of the quick action buttons
2. Or type a message like: "Check if my steps follow the framework"
3. Verify you get a response in 3-10 seconds

### 4.3 Test Export
1. Click **"Export Word"** button
2. Verify a Word document downloads
3. Open it and check the table format matches template

### 4.4 Test with Your Own Document
1. Upload a real document from your team
2. Verify it analyzes properly
3. Test the chat refinement
4. Export and review the output

---

## 📋 Post-Deployment Checklist

After successful deployment:

- [ ] Save your app URL somewhere safe
- [ ] Test all features work
- [ ] Share URL with 1-2 team members for beta testing
- [ ] Gather initial feedback
- [ ] Update team when ready for full rollout

---

## 🔄 Making Updates Later

If you need to make changes to the code:

### Using GitHub Desktop:
1. Make your code changes
2. Open GitHub Desktop
3. Commit your changes (bottom left)
4. Click **"Push origin"** (top right)
5. Vercel automatically redeploys! (takes 2-3 minutes)

### Using Command Line:
```bash
# Make your changes, then:
git add .
git commit -m "Description of changes"
git push
```

Vercel sees the push and automatically redeploys.

---

## ⚙️ Vercel Dashboard Features

After deployment, explore your Vercel dashboard:

### Project Settings
Click **"Settings"** to access:
- **Environment Variables** - Update your API key if needed
- **Domains** - Add a custom domain (like cycles.apprenti.org)
- **General** - Change project name

### Deployments Tab
See all your deployments:
- **Production** - Your live app
- **Preview** - Test deployments (from branches)
- **Logs** - See what happened during build

### Analytics Tab (if enabled)
View usage statistics:
- Page views
- Unique visitors
- Performance metrics

---

## 🐛 Troubleshooting

### Issue: "Missing API Key" Error

**Symptom:** App loads but fails when uploading document

**Fix:**
1. Go to Vercel dashboard
2. Click your project
3. Go to **Settings** → **Environment Variables**
4. Verify `ANTHROPIC_API_KEY` exists and is correct
5. If wrong or missing, delete and re-add it
6. Go to **Deployments** tab
7. Click **"..."** menu on latest deployment
8. Click **"Redeploy"**

### Issue: Build Failed

**Symptom:** Deployment fails during build

**Fix:**
1. Check the build logs in Vercel
2. Look for error messages
3. Common causes:
   - Missing files in GitHub
   - Syntax errors in code
   - Missing dependencies
4. Fix the issue locally
5. Push changes to GitHub
6. Vercel will auto-rebuild

### Issue: Upload Takes Too Long

**Symptom:** Document analysis takes more than 60 seconds

**Fix:**
- This is normal for very large documents
- Try with a smaller document
- Check your internet connection
- Verify Anthropic API status at status.anthropic.com

### Issue: Can't Access App

**Symptom:** URL doesn't work

**Fix:**
1. Check if you're using the correct URL
2. Make sure deployment completed successfully
3. Check Vercel dashboard for deployment status
4. Try in incognito/private browser window

---

## 💰 Cost Information

### Vercel Hosting
- **Free Plan:** Included
- **Limits:** More than enough for your use case
- **No Credit Card Required:** Initially

### Anthropic API
- **Pay As You Go:** Only pay for what you use
- **Cost Per Analysis:** ~$0.01 - $0.03
- **Monthly Estimate:** 
  - 50 documents/month = $0.50 - $1.50
  - 200 chat messages/month = $3 - $5
  - **Total: ~$5-7/month** for moderate use

### Adding Credits to Anthropic
1. Go to console.anthropic.com
2. Click **"Billing"**
3. Add credits or set up auto-recharge
4. Start with $25 (lasts months for internal use)

---

## 🎓 Next Steps After Deployment

### Immediate (Today):
1. ✅ Complete this deployment
2. ✅ Test thoroughly yourself
3. ✅ Note the URL somewhere safe

### Short-term (This Week):
1. Share with 2-3 team members for beta testing
2. Create a quick demo for your team
3. Gather initial feedback
4. Make any needed adjustments

### Long-term (This Month):
1. Train your Education team
2. Print QUICK_REFERENCE.md for everyone
3. Create internal documentation
4. Monitor usage and gather feedback
5. Iterate based on feedback

---

## 📞 Need Help?

### Vercel Support
- Docs: https://vercel.com/docs
- Support: support@vercel.com (if on paid plan)
- Community: vercel.com/community

### Anthropic Support
- Docs: https://docs.anthropic.com
- Support: support@anthropic.com
- Status: status.anthropic.com

### GitHub Support
- Docs: https://docs.github.com
- Help: https://github.com/support

---

## ✅ Deployment Complete!

Congratulations! Your Cycles of Service™ Builder is now live and ready to help your Education team create exceptional customer-focused SOPs.

**Your next action:** Visit your app and create your first Cycle of Service!

**App URL:** `https://your-project-name.vercel.app` (save this!)

---

## 🎉 Success Criteria

You'll know deployment was successful when:
- ✅ App loads at your Vercel URL
- ✅ File upload works
- ✅ Analysis completes in 10-30 seconds
- ✅ Chat interface responds
- ✅ Word export downloads
- ✅ Output matches template format
- ✅ Framework checklist appears

**Everything working?** You're done! Time to share with your team! 🚀
