# 🎨 Visual Design Reference

This document describes the visual appearance and user interface of your Cycle of Service Builder.

## Color Palette

### Primary Colors (Apprenti Branding)
- **Apprenti Blue**: #0066CC - Used for headers, buttons, primary actions
- **Apprenti Orange**: #FF6B35 - Used for accents and highlights

### Feature Colors
- **WOW Purple**: #9333EA - Highlights WOW moments and exceptional experiences
- **Metrics Green**: #10B981 - Highlights measurable actions and KPIs
- **Warning Yellow**: #FCD34D - Indicates gaps and areas needing attention
- **Info Blue**: #3B82F6 - Shows customer touchpoints and general information

### Neutral Colors
- **White**: #FFFFFF - Backgrounds and cards
- **Gray 50-900**: Various shades for text, borders, and backgrounds

## Interface Components

### 1. Header
```
┌─────────────────────────────────────────────────┐
│  [A]  Cycle of Service Builder                  │
│       Powered by Apprenti Education Team        │
└─────────────────────────────────────────────────┘
```
- Blue "A" logo in a rounded square
- White background with subtle shadow
- Spans full width

### 2. Upload Screen (Initial View)
```
┌─────────────────────────────────────────────────┐
│          Create Your Cycle of Service SOP        │
│                                                  │
│     Upload your draft document and let AI...     │
│                                                  │
│  ┌─────────────────────────────────────────┐   │
│  │                                          │   │
│  │         [Upload Icon]                    │   │
│  │                                          │   │
│  │     Upload a file or drag and drop       │   │
│  │   Word (.docx), Excel (.xlsx), CSV...    │   │
│  │                                          │   │
│  └─────────────────────────────────────────┘   │
│                                                  │
│  What this tool does:                            │
│  [✓] Identify Gaps    [★] Highlight WOW Moments │
│  [📊] Track Metrics    [↓] Export Easily         │
└─────────────────────────────────────────────────┘
```

### 3. Analysis View (After Upload)
```
┌─────────────────────────────────────────────────┐
│ [📄] filename.docx     [Upload New File]        │
│      1,234 characters uploaded                  │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│ AI Assistant                                     │
│ Ask questions or request refinements...         │
├─────────────────────────────────────────────────┤
│                                                  │
│  [AI] I've analyzed your document...            │
│                                                  │
│        User message goes here        [You]      │
│                                                  │
│  [AI] Here's my response...                     │
│                                                  │
├─────────────────────────────────────────────────┤
│  [                                    ] [Send]  │
│  [Find gaps] [Add WOW moments] [Add metrics]    │
└─────────────────────────────────────────────────┘
```

### 4. Cycle of Service Display
```
┌─────────────────────────────────────────────────┐
│ Your Cycle of Service                           │
│                    [📋 Copy] [↓ Export Word]   │
├─────────────────────────────────────────────────┤
│                                                  │
│  ┌───┐                                          │
│  │ 1 │  Step 1: Initial Contact                │
│  └───┘                                          │
│         Customer Touchpoint (Blue box)          │
│         First interaction with apprentice       │
│                                                  │
│         ⭐ Apprenti WOW Moments (Purple box)    │
│         • Personal welcome video                │
│         • Customized program overview           │
│                                                  │
│         📊 Measurable Actions (Green box)       │
│         • Response time: < 24 hours             │
│         • Contact completion: 100%              │
│                                                  │
│  ┌───┐                                          │
│  │ 2 │  Step 2: Orientation                    │
│  └───┘                                          │
│         [Similar structure repeats...]          │
│                                                  │
├─────────────────────────────────────────────────┤
│  ⚠️ Identified Gaps (Yellow box)                │
│  • No follow-up between days 15-30             │
│  • Missing escalation process                  │
├─────────────────────────────────────────────────┤
│  💡 Suggestions (Blue box)                      │
│  • Add weekly check-ins                        │
│  • Create mentor matching process              │
└─────────────────────────────────────────────────┘
```

## Visual Hierarchy

### Typography
- **Headers (H1)**: 2rem (32px), Bold, Gray 900
- **Sub-headers (H2)**: 1.5rem (24px), Semibold, Gray 900
- **Body**: 1rem (16px), Regular, Gray 700
- **Small text**: 0.875rem (14px), Regular, Gray 600

### Spacing
- **Section gaps**: 1.5rem (24px)
- **Card padding**: 1.5rem (24px)
- **Element margins**: 0.5-1rem (8-16px)

### Borders and Shadows
- **Card borders**: 1px solid Gray 200
- **Card shadows**: Subtle shadow on hover
- **Rounded corners**: 0.5rem (8px) for cards, 0.375rem (6px) for buttons

## Component Styling

### Touchpoint Cards
```
┌─────────────────────────────────────────────┐
│ [1] Step Name                                │
│                                              │
│ ┌─────────────────────────────────────────┐ │
│ │ Customer Touchpoint (Blue left border)  │ │
│ │ Description of touchpoint               │ │
│ └─────────────────────────────────────────┘ │
│                                              │
│ ⭐ WOW Moments (Purple left border)         │
│ • Point 1                                    │
│ • Point 2                                    │
│                                              │
│ 📊 Measurable Actions (Green left border)   │
│ • Metric 1                                   │
│ • Metric 2                                   │
└─────────────────────────────────────────────┘
```

### WOW Moment Box
- **Background**: Light purple (#F3E8FF)
- **Left border**: 4px solid Purple (#9333EA)
- **Padding**: 1rem
- **Border radius**: 0.5rem (right side only)
- **Icon**: ⭐ (star emoji)

### Measurable Action Box
- **Background**: Light green (#D1FAE5)
- **Left border**: 4px solid Green (#10B981)
- **Padding**: 1rem
- **Border radius**: 0.5rem (right side only)
- **Icon**: 📊 (chart emoji)

### Gap Warning Box
- **Background**: Light yellow (#FEF3C7)
- **Border**: 1px solid Yellow (#FCD34D)
- **Padding**: 1.5rem
- **Border radius**: 0.5rem
- **Icon**: ⚠️ (warning emoji)

### Suggestion Box
- **Background**: Light blue (#DBEAFE)
- **Border**: 1px solid Blue (#3B82F6)
- **Padding**: 1.5rem
- **Border radius**: 0.5rem
- **Icon**: 💡 (lightbulb emoji)

## Button Styles

### Primary Button (Send, Export)
- **Background**: Apprenti Blue (#0066CC)
- **Text**: White
- **Padding**: 0.75rem 1.5rem
- **Border radius**: 0.5rem
- **Hover**: Darker blue (#0052A3)

### Secondary Button (Copy, Upload New)
- **Background**: White
- **Text**: Gray 700
- **Border**: 1px solid Gray 300
- **Padding**: 0.5rem 1rem
- **Border radius**: 0.5rem
- **Hover**: Gray 50

### Quick Action Pills
- **Background**: Feature color at 10% opacity
- **Text**: Feature color at 70% opacity
- **Padding**: 0.25rem 0.75rem
- **Border radius**: 9999px (full rounded)
- **Hover**: Feature color at 20% opacity

## Icons and Emojis

Throughout the interface, we use emojis for quick visual recognition:
- ⭐ WOW Moments
- 📊 Measurable Actions
- 📄 Documents
- ⚠️ Warnings/Gaps
- 💡 Suggestions
- ✓ Success/Completion
- ↓ Download/Export

## Responsive Behavior

### Desktop (1024px+)
- Full layout with side-by-side sections
- Chat and output display both visible
- Maximum width: 1280px

### Tablet (768px - 1023px)
- Stacked layout
- Full-width components
- Slightly reduced padding

### Mobile (< 768px)
- Single column layout
- Touch-friendly buttons (larger)
- Condensed spacing
- Collapsible sections

## Animations

### Loading States
- Spinning circle for document processing
- Bouncing dots for AI thinking
- Smooth fade-ins for new content

### Interactions
- Smooth color transitions on hover (200ms)
- Shadow increases on card hover
- Button press effects

### Transitions
- Smooth scrolling to new messages
- Fade in/out for modals and alerts
- Slide in for notifications

## Accessibility Features

- **High contrast**: All text meets WCAG AA standards
- **Focus states**: Clear focus indicators on all interactive elements
- **Alt text**: Descriptive labels for screen readers
- **Keyboard navigation**: Full keyboard support
- **Color independence**: Information not conveyed by color alone

## States and Feedback

### Success State
- Green checkmark
- Fade out after 2 seconds
- "Copied!" or "Exported!" message

### Error State
- Red border on inputs
- Error message in red text
- Suggestion for resolution

### Loading State
- Disabled controls
- Loading spinner
- "Processing..." text

### Empty State
- Centered content
- Encouraging message
- Clear call-to-action

---

This visual design creates a clean, professional, and user-friendly interface that makes complex SOP creation feel simple and approachable!
