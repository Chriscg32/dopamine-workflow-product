# 🔄 Notion Template - Copy-Paste Ready

## 📋 Database Structure (Copy This)

### **Main Tasks Database**
```json
{
  "title": "ADHD Dopamine Tasks",
  "properties": {
    "Task": {
      "type": "title",
      "title": []
    },
    "Sprint Time": {
      "type": "select",
      "select": {
        "options": [
          {"name": "5 min", "color": "green"},
          {"name": "10 min", "color": "yellow"},
          {"name": "15 min", "color": "orange"},
          {"name": "25 min", "color": "red"}
        ]
      }
    },
    "Status": {
      "type": "select",
      "select": {
        "options": [
          {"name": "Ready", "color": "gray"},
          {"name": "In Progress", "color": "yellow"},
          {"name": "Done", "color": "green"},
          {"name": "Emergency", "color": "red"}
        ]
      }
    },
    "Reward": {
      "type": "rich_text",
      "rich_text": []
    },
    "Date": {
      "type": "date",
      "date": {}
    },
    "Mood": {
      "type": "select",
      "select": {
        "options": [
          {"name": 😊, "color": "green"},
          {"name": 😐, "color": "yellow"},
          {"name": 😢, "color": "red"}
        ]
      }
    }
  }
}
```

### **Pre-Built Views (Copy These Settings)**

#### **1. Today View**
- **Filter:** Date is today
- **Sort:** Status ascending
- **Group:** Status
- **Properties shown:** Task, Sprint Time, Reward

#### **2. Weekly Wins**
- **Filter:** Status is Done AND Date is within past week
- **Sort:** Date descending
- **View:** Gallery view with celebration emoji

#### **3. Emergency Mode**
- **Filter:** Status is Emergency
- **Sort:** Date descending
- **View:** Minimal - only Task visible

#### **4. All Tasks**
- **Filter:** None
- **Sort:** Date descending
- **Group:** Date

---

## 📱 Quick Setup Steps

### **Step 1: Create Database**
1. **New Page** in Notion
2. **Table - Inline**
3. **Name:** "ADHD Dopamine Tasks"
4. **Copy properties** from JSON above

### **Step 2: Add Pre-Built Tasks**
Copy-paste these rows:

| Task | Sprint Time | Status | Reward | Date | Mood |
|------|-------------|---------|---------|------|------|
| Take morning meds | 2 min | Ready | Coffee break | Today | 😊 |
| Check urgent emails | 10 min | Ready | 5-min scroll | Today | 😐 |
| Start work project | 25 min | Ready | YouTube video | Today | 😊 |
| Drink water | 1 min | Ready | Stretch break | Today | 😊 |
| Plan tomorrow | 5 min | Ready | Netflix episode | Tomorrow | 😊 |

### **Step 3: Create Views**
1. **Today View:** Click "+ New" → Name "Today" → Filter: Date is today
2. **Weekly Wins:** Click "+ New" → Name "Wins" → Filter: Status is Done
3. **Emergency:** Click "+ New" → Name "Emergency" → Filter: Status is Emergency

### **Step 4: Share as Template**
1. **Share** button (top right)
2. **Share to web**
3. **Allow duplicate as template**
4. **Copy link** - this is your template URL

---

## 🔗 Template URLs (Replace with Yours)

### **Your Template Links** (Update these in index.html)
```
Demo Template: https://www.notion.so/your-username/adhd-dopamine-workflow
Emergency Mode: https://www.notion.so/your-username/adhd-emergency-mode
Mobile Version: https://www.notion.so/your-username/adhd-mobile-workflow
```

---

## 🎯 One-Click Import Button

### **For Your Landing Page**
```html
<a href="https://www.notion.so/templates/adhd-dopamine-workflow" 
   class="cta-button" 
   target="_blank" 
   rel="noopener">
   📈 Import Template Now (30 seconds)
</a>
```

### **For Social Media**
```
🧠 ADHD friends: Try this 2-minute task system I built
🔗 notion.so/templates/adhd-dopamine-workflow
No setup overwhelm, just click and start.
```

---

## 🚀 Ready-to-Use Template

**Copy this entire structure into a new Notion page, then share as template.**

**Time to create:** 5 minutes
**User import time:** 30 seconds
**First sprint time:** 2 minutes

**The automation is complete - users just click and start!**