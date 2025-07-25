// 🧠 Automated Notion Template Creator
// This script creates the ADHD Dopamine Workflow template
// Copy this into Notion's template creator

const templateStructure = {
  name: "ADHD Dopamine Workflow",
  description: "A productivity system built for ADHD brains. Start in 2 minutes, no overwhelm.",
  icon: "🧠",
  cover: {
    type: "external",
    external: {
      url: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800"
    }
  },
  
  // Main database structure
  databases: [
    {
      name: "ADHD Tasks",
      type: "table",
      properties: {
        "Task": {
          type: "title",
          title: {}
        },
        "Sprint Time": {
          type: "select",
          select: {
            options: [
              { name: "5 min", color: "green" },
              { name: "10 min", color: "yellow" },
              { name: "15 min", color: "orange" },
              { name: "25 min", color: "red" }
            ]
          }
        },
        "Status": {
          type: "select",
          select: {
            options: [
              { name: "Ready", color: "gray" },
              { name: "In Progress", color: "yellow" },
              { name: "Done", color: "green" },
              { name: "Emergency", color: "red" }
            ]
          }
        },
        "Reward": {
          type: "rich_text",
          rich_text: {}
        },
        "Date": {
          type: "date",
          date: {}
        },
        "Mood": {
          type: "select",
          select: {
            options: [
              { name: "😊", color: "green" },
              { name: "😐", color: "yellow" },
              { name: "😢", color: "red" }
            ]
          }
        }
      },
      
      // Pre-loaded example tasks
      rows: [
        {
          "Task": "Take morning meds",
          "Sprint Time": "2 min",
          "Status": "Ready",
          "Reward": "Coffee break ☕",
          "Date": new Date().toISOString().split('T')[0],
          "Mood": "😊"
        },
        {
          "Task": "Check urgent emails",
          "Sprint Time": "10 min",
          "Status": "Ready",
          "Reward": "5-min social media scroll",
          "Date": new Date().toISOString().split('T')[0],
          "Mood": "😐"
        },
        {
          "Task": "Start work project",
          "Sprint Time": "25 min",
          "Status": "Ready",
          "Reward": "YouTube video break",
          "Date": new Date().toISOString().split('T')[0],
          "Mood": "😊"
        },
        {
          "Task": "Drink water",
          "Sprint Time": "1 min",
          "Status": "Done",
          "Reward": "Stretch break",
          "Date": new Date().toISOString().split('T')[0],
          "Mood": "😊"
        },
        {
          "Task": "Plan tomorrow",
          "Sprint Time": "5 min",
          "Status": "Ready",
          "Reward": "Netflix episode",
          "Date": new Date(Date.now() + 86400000).toISOString().split('T')[0],
          "Mood": "😊"
        }
      ]
    }
  ],
  
  // Views setup
  views: [
    {
      name: "Today",
      type: "table",
      filter: {
        property: "Date",
        date: {
          equals: new Date().toISOString().split('T')[0]
        }
      },
      sort: [
        {
          property: "Status",
          direction: "ascending"
        }
      ]
    },
    {
      name: "Weekly Wins",
      type: "gallery",
      filter: {
        and: [
          {
            property: "Status",
            select: {
              equals: "Done"
            }
          },
          {
            property: "Date",
            date: {
              on_or_after: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
            }
          }
        ]
      },
      sort: [
        {
          property: "Date",
          direction: "descending"
        }
      ]
    },
    {
      name: "Emergency Mode",
      type: "table",
      filter: {
        property: "Status",
        select: {
          equals: "Emergency"
        }
      }
    }
  ]
};

// Instructions for manual creation
console.log(`🧠 ADHD Dopamine Workflow - Setup Instructions

1. Go to Notion.so
2. Create New Page
3. Add Database: Table - Inline
4. Name: "ADHD Dopamine Tasks"
5. Add these properties:
   - Task (Title)
   - Sprint Time (Select: 5, 10, 15, 25 min)
   - Status (Select: Ready, In Progress, Done, Emergency)
   - Reward (Text)
   - Date (Date)
   - Mood (Select: 😊, 😐, 😢)

6. Add example tasks:
   - Take morning meds | 2 min | Ready | Coffee break
   - Check emails | 10 min | Ready | 5-min scroll
   - Start project | 25 min | Ready | YouTube break

7. Create views:
   - Today: Filter Date = Today
   - Wins: Filter Status = Done
   - Emergency: Filter Status = Emergency

8. Share → Share to web → Allow duplicate
9. Copy template URL

Template URL will be: https://www.notion.so/your-username/adhd-dopamine-workflow
`);

// Export for use
module.exports = templateStructure;