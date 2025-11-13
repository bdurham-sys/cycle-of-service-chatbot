# Apprenti Cycle of Service™ Builder 🚀

An AI-powered tool following the **Cycles of Service™ framework** by Ruby Newell-Legner (7 Star Service) for creating comprehensive SOPs that map customer touchpoints, define measurable standards, and highlight Apprenti WOW practices.

## Features ✨

### Framework Compliance
- **Official Cycles of Service™ implementation** - follows 7 Star Service principles
- **Two intelligent modes** - Guided (step-by-step) or Notes (analyze existing content)
- **Automatic validation** - ensures steps start with action words from customer perspective
- **Template-matched output** - 3-column format matching official Word template

### Analysis & Creation
- **Smart document upload** - Word (.docx), Excel (.xlsx, .xls), CSV, and text files
- **AI-powered analysis** - identifies gaps and suggests improvements
- **Measurable standards** - converts vague language to specific, observable behaviors
- **Concrete WOW practices** - suggests actionable ways to exceed expectations

### Visual Design
- **Table format** - matches official template exactly
- **Color-coded sections** - Purple for WOW practices, Green for measurements
- **Framework checklist** - validates compliance at a glance
- **Professional output** - ready to share with stakeholders

### Interactive Features
- **Chat refinement** - iterate through conversation
- **Brainstorming support** - helps when users are vague
- **Gap identification** - finds missing touchpoints
- **Export options** - Word document or Notion-ready format

## Quick Start 🎯

### Important: Read These First!
- **UPDATES_SUMMARY.md** - What changed and why (start here!)
- **FRAMEWORK_INTEGRATION.md** - Complete framework implementation details
- **DEPLOYMENT.md** - Step-by-step Vercel deployment

### Framework Principles

This tool implements the **Cycles of Service™ framework** by Ruby Newell-Legner:

**Core Requirements:**
- Each step starts with an ACTION WORD (Receive, Submit, Attend, etc.)
- Each step from CUSTOMER'S VIEWPOINT (not staff/internal)
- Each step describes ONE touchpoint only
- Standards must be SPECIFIC and MEASURABLE
- WOW practices must be CONCRETE and ACTIONABLE
- Language simple with minimal verbiage

**Output Format:**
Matches official 3-column template:
1. Customer's Steps (from their perspective)
2. Measurable Standards (with Apprenti WOW & Measurements)
3. Regulations/Compliance

### Prerequisites

- Node.js 18+ installed
- An Anthropic API key ([Get one here](https://console.anthropic.com/))
- A GitHub account
- A Vercel account (free)

### Step 1: Get Your Anthropic API Key

1. Go to [https://console.anthropic.com/](https://console.anthropic.com/)
2. Sign up or log in
3. Navigate to API Keys
4. Create a new API key and copy it

### Step 2: Deploy to Vercel (Easiest Method)

#### Option A: Deploy with GitHub (Recommended)

1. **Push this code to GitHub:**
   ```bash
   # In your terminal, navigate to this folder
   cd cycle-of-service-chatbot
   
   # Initialize git (if not already done)
   git init
   
   # Add all files
   git add .
   
   # Commit
   git commit -m "Initial commit"
   
   # Create a new repository on GitHub, then:
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [https://vercel.com](https://vercel.com)
   - Click "Add New" → "Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Add your environment variable:
     - Name: `ANTHROPIC_API_KEY`
     - Value: [Your API key from Step 1]
   - Click "Deploy"
   - Wait 2-3 minutes for deployment to complete
   - Your app will be live at: `https://your-project-name.vercel.app`

#### Option B: Deploy with Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow prompts and add your ANTHROPIC_API_KEY when asked
```

### Step 3: Use the Application

1. Open your deployed URL
2. Upload a Word or Excel document containing your service process
3. Wait for AI analysis
4. Use the chat to refine and improve
5. Export as Word document or copy for Notion

## Local Development 💻

If you want to run locally before deploying:

```bash
# Install dependencies
npm install

# Create .env.local file
cp .env.example .env.local

# Edit .env.local and add your API key
# ANTHROPIC_API_KEY=your_key_here

# Run development server
npm run dev

# Open http://localhost:3000 in your browser
```

## How It Works 🔧

### Two Intelligent Modes

The chatbot automatically detects which mode users need:

**GUIDED MODE** - For starting from scratch:
1. User uploads minimal content or basic notes
2. AI walks through step-by-step with specific questions
3. Helps craft each customer step following framework
4. Suggests standards and WOW practices together
5. Ensures compliance throughout process

**NOTES MODE** - For refining existing work:
1. User uploads detailed document or draft
2. AI analyzes and identifies customer steps
3. Reframes from customer perspective with action words
4. Creates specific measurable standards
5. Suggests concrete WOW practices
6. Identifies gaps and provides recommendations

### Workflow

1. **Upload**: User uploads a document with service information
2. **Analysis**: AI analyzes and determines appropriate mode
3. **Review**: User reviews initial output
4. **Refinement**: User chats with AI to improve and iterate
5. **Validation**: Built-in framework compliance check
6. **Export**: Download formatted Word document or copy for Notion

## Visual Design 🎨

The application uses distinct visual styles to make different elements stand out:

- **🔵 Customer Touchpoints**: Blue-highlighted sections
- **⭐ WOW Moments**: Purple-highlighted with star icon
- **📊 Measurable Actions**: Green-highlighted with chart icon
- **⚠️ Gaps**: Yellow-highlighted with warning icon

## File Support 📁

- **Word Documents** (.docx): Full text extraction
- **Excel/Sheets** (.xlsx, .xls, .csv): Converts to text format
- **Text Files** (.txt): Direct processing

## Troubleshooting 🔍

### Deployment Issues

**Error: Missing API Key**
- Make sure you added `ANTHROPIC_API_KEY` in Vercel environment variables
- Go to Project Settings → Environment Variables
- Add the variable and redeploy

**Error: Build Failed**
- Check the build logs in Vercel
- Make sure all files are committed to Git
- Try clearing Vercel cache and redeploying

**Error: API Calls Failing**
- Verify your API key is valid
- Check if you have API credits remaining at Anthropic Console
- Look at the Function Logs in Vercel for detailed errors

### Usage Issues

**File Upload Not Working**
- Ensure file is .docx, .xlsx, .xls, .csv, or .txt
- Check file size is under 10MB
- Try a different file

**AI Not Responding**
- Check browser console for errors (F12)
- Verify API key is set correctly
- Check Anthropic API status

## Project Structure 📂

```
cycle-of-service-chatbot/
├── app/
│   ├── api/
│   │   ├── analyze/route.ts      # Document analysis endpoint
│   │   ├── chat/route.ts         # Chat interaction endpoint
│   │   └── export-word/route.ts  # Word export endpoint
│   ├── components/
│   │   ├── FileUpload.tsx        # File upload component
│   │   ├── ChatInterface.tsx     # Chat UI component
│   │   └── OutputDisplay.tsx     # Results display component
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # App layout
│   └── page.tsx                  # Main page
├── package.json                  # Dependencies
├── tsconfig.json                 # TypeScript config
├── tailwind.config.js            # Tailwind CSS config
└── next.config.js                # Next.js config
```

## Customization 🎨

### Change Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  'apprenti-blue': '#0066CC',    // Primary blue
  'apprenti-orange': '#FF6B35',  // Accent orange
  'wow-purple': '#9333EA',       // WOW moments
  'measure-green': '#10B981',    // Measurable actions
}
```

### Modify AI Instructions

Edit the prompts in:
- `app/api/analyze/route.ts` - Initial analysis
- `app/api/chat/route.ts` - Chat interactions

## Support 💬

For issues or questions:
1. Check the Troubleshooting section above
2. Review Vercel deployment logs
3. Check Anthropic API console for usage/errors

## Tech Stack 🛠️

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS
- **AI**: Anthropic Claude API
- **Document Processing**: mammoth (Word), xlsx (Excel)
- **Document Generation**: docx
- **Deployment**: Vercel

## License 📄

Built for internal use at Apprenti Education Team.

---

**Ready to deploy?** Follow Step 2 above to get your Cycle of Service Builder live in minutes! 🚀
