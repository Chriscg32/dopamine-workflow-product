// 🧠 ADHD Dopamine Workflow - Notion Template Creator
// This creates a shareable Notion template link

// 🎯 Template Configuration
const templateConfig = {
  name: "ADHD Dopamine Workflow",
  description: "A productivity system built for ADHD brains. Start in 2 minutes, no overwhelm.",
  icon: "🧠",
  
  // Database structure
  database: {
    name: "ADHD Tasks",
    properties: {
      "Task": { type: "title" },
      "Sprint Time": {
        type: "select",
        options: ["2 min", "5 min", "10 min", "15 min"]
      },
      "Status": {
        type: "select", 
        options: ["Ready", "In Progress", "Done", "Emergency"]
      },
      "Reward": { type: "rich_text" },
      "Energy Level": {
        type: "select",
        options: ["Low", "Medium", "High"]
      },
      "Category": {
        type: "select",
        options: ["Self-Care", "Work", "Home", "Health"]
      }
    }
  },
  
  // Sample tasks
  sampleTasks: [
    {
      Task: "Take morning meds",
      "Sprint Time": "2 min",
      Status: "Ready",
      Reward: "Coffee! ☕",
      "Energy Level": "Low",
      Category: "Health"
    },
    {
      Task: "Reply to urgent email",
      "Sprint Time": "5 min", 
      Status: "Ready",
      Reward: "5 min scroll break",
      "Energy Level": "Medium",
      Category: "Work"
    },
    {
      Task: "Drink water",
      "Sprint Time": "2 min",
      Status: "Ready", 
      Reward: "Check phone",
      "Energy Level": "Low",
      Category: "Health"
    },
    {
      Task: "10-min tidy desk",
      "Sprint Time": "10 min",
      Status: "Ready",
      Reward: "YouTube video",
      "Energy Level": "Medium", 
      Category: "Home"
    }
  ]
};

// 🚀 Create Shareable Template Link
function createTemplateLink() {
  const baseUrl = "https://www.notion.so/templates/adhd-dopamine-workflow";
  const params = new URLSearchParams({
    name: templateConfig.name,
    description: templateConfig.description,
    icon: templateConfig.icon
  });
  
  return `${baseUrl}?${params.toString()}`;
}

// 📋 Manual Setup Instructions
function getManualSetup() {
  return `
## Manual Notion Setup (5 minutes)

1. **Create New Page**
   - Go to Notion
   - Click "+ New Page"
   - Name it "${templateConfig.name}"

2. **Add Database**
   - Type "/table" and select "Table - Inline"
   - Name it "${templateConfig.database.name}"

3. **Set Properties**
   ${Object.entries(templateConfig.database.properties).map(([name, config]) => {
     if (config.type === "select") {
       return `- **${name}**: ${config.type} (${config.options.join(", ")})`;
     }
     return `- **${name}**: ${config.type}`;
   }).join('\n   ')}

4. **Add Sample Tasks**
   ${templateConfig.sampleTasks.map(task => 
     `- ${task.Task} (${task["Sprint Time"]})`
   ).join('\n   ')}

## Quick Start Options

**Option 1: Use the App (30 seconds)**
- Open: https://chriscg32.github.io/dopamine-workflow-product/app.html
- Zero setup, works offline

**Option 2: Manual Notion Setup (5 minutes)**
- Follow instructions above
- Perfect for Notion power users

**Option 3: One-Click Template**
- Visit: ${createTemplateLink()}
- Click "Duplicate" and start using
`;
}

// 🎯 Export for use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { templateConfig, createTemplateLink, getManualSetup };
}

// 📱 Console instructions
console.log("🧠 ADHD Dopamine Workflow - Notion Setup");
console.log("=".repeat(40));
console.log("\n🔗 Template Link:", createTemplateLink());
console.log("\n📋 Manual Setup:");
console.log(getManualSetup());

// 🚀 Usage Instructions
console.log(`

## How to Use:

1. **For Notion Users:**
   - Copy the template link above
   - Click "Duplicate" in Notion
   - Start using immediately

2. **For Zero Setup:**
   - Use the web app: https://chriscg32.github.io/dopamine-workflow-product/app.html
   - Works offline, no signup required

3. **For Sharing:**
   - Share the template link with ADHD communities
   - Include setup instructions from NOTION-SETUP.md
`);