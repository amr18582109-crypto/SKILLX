export const programmingRoadmap = {
  frontend: [
    {
      id: 'html_basics',
      title: 'HTML Basics',
      type: 'video',
      field: 'programming',
      track: 'frontend',
      duration: 120,
      completed: false,
      youtubeUrl: 'https://www.youtube.com/playlist?list=PLDoPjvoNmBAw_t_XWUFbBX-c9MafPk9ji',
    },
    {
      id: 'html_exercise',
      title: 'HTML Exercise',
      type: 'coding',
      field: 'programming',
      track: 'frontend',
      duration: 0,
      completed: false,
      challenge: 'Create a basic HTML page with a header, main content, and footer. Use semantic HTML elements.',
      starterCode: `<!DOCTYPE html>
<html>
<head>
  <title>My Page</title>
</head>
<body>
  <!-- Add your header, main, and footer elements here -->
  
</body>
</html>`,
      validation: ['<header>', '<main>', '<footer>'],
    },
    {
      id: 'css_fundamentals',
      title: 'CSS Fundamentals',
      type: 'video',
      field: 'programming',
      track: 'frontend',
      duration: 120,
      completed: false,
      youtubeUrl: 'https://www.youtube.com/playlist?list=PLDoPjvoNmBAzjsz06gkzlSrlev53MGIKe',
    },
    {
      id: 'css_layout',
      title: 'CSS Layout Challenge',
      type: 'coding',
      field: 'programming',
      track: 'frontend',
      duration: 0,
      completed: false,
      challenge: 'Create a responsive layout using Flexbox or Grid. The layout should adapt to different screen sizes.',
      starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Write your CSS here */
    .container {
      /* Use display: flex or display: grid */
      /* Add responsive properties like flex-wrap or grid-template-columns */
    }
    .box {
      padding: 20px;
      background: #3B82F6;
      color: white;
      margin: 10px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="box">Box 1</div>
    <div class="box">Box 2</div>
    <div class="box">Box 3</div>
  </div>
</body>
</html>`,
      validation: ['flex', 'grid'],
    },
    {
      id: 'js_basics',
      title: 'JavaScript Basics',
      type: 'video',
      field: 'programming',
      track: 'frontend',
      duration: 120,
      completed: false,
      youtubeUrl: 'https://www.youtube.com/playlist?list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv',
    },
    {
      id: 'js_dom',
      title: 'JavaScript DOM Exercise',
      type: 'coding',
      field: 'programming',
      track: 'frontend',
      duration: 0,
      completed: false,
      challenge: 'Write JavaScript code to manipulate the DOM.',
      starterCode: '// Your code here\nconst element = document.querySelector("...");',
      validation: ['querySelector', 'addEventListener'],
    },
    {
      id: 'react_intro',
      title: 'React Introduction',
      type: 'video',
      field: 'programming',
      track: 'frontend',
      duration: 120,
      completed: false,
      youtubeUrl: 'https://www.youtube.com/playlist?list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv',
    },
    {
      id: 'react_component',
      title: 'React Component Exercise',
      type: 'coding',
      field: 'programming',
      track: 'frontend',
      duration: 0,
      completed: false,
      challenge: 'Create a React functional component.',
      starterCode: 'import React from "react";\n\nfunction MyComponent() {\n  return (\n    // Your code here\n  );\n}',
      validation: ['function', 'return', 'React'],
    },
    {
      id: 'git_github',
      title: 'Git & GitHub',
      type: 'video',
      field: 'programming',
      track: 'frontend',
      duration: 120,
      completed: false,
      youtubeUrl: 'https://www.youtube.com/playlist?list=PLDoPjvoNmBAw4eOj58MZPakHjaO3frVMF',
    },
    {
      id: 'final_project',
      title: 'Final Project',
      type: 'coding',
      field: 'programming',
      track: 'frontend',
      duration: 0,
      completed: false,
      challenge: 'Build a complete React application with multiple components.',
      starterCode: '// Build your project here',
      validation: ['React', 'component', 'useState'],
    },
  ],
  backend: [
    {
      id: 'node_basics',
      title: 'Node.js Basics',
      type: 'video',
      field: 'programming',
      track: 'backend',
      duration: 120,
      completed: false,
    },
    {
      id: 'express_setup',
      title: 'Express.js Setup',
      type: 'coding',
      field: 'programming',
      track: 'backend',
      duration: 0,
      completed: false,
      challenge: 'Set up an Express.js server with basic routes.',
      starterCode: 'const express = require("express");\nconst app = express();\n\n// Your code here',
      validation: ['express', 'app.get', 'listen'],
    },
    {
      id: 'database_fundamentals',
      title: 'Database Fundamentals',
      type: 'video',
      field: 'programming',
      track: 'backend',
      duration: 120,
      completed: false,
    },
    {
      id: 'mongodb_exercise',
      title: 'MongoDB Exercise',
      type: 'coding',
      field: 'programming',
      track: 'backend',
      duration: 0,
      completed: false,
      challenge: 'Create MongoDB schemas and perform CRUD operations.',
      starterCode: 'const mongoose = require("mongoose");\n\n// Your schema here',
      validation: ['mongoose', 'Schema', 'model'],
    },
    {
      id: 'rest_api',
      title: 'REST API Creation',
      type: 'coding',
      field: 'programming',
      track: 'backend',
      duration: 0,
      completed: false,
      challenge: 'Build a RESTful API with Express and MongoDB.',
      starterCode: '// Create your API endpoints here',
      validation: ['app.get', 'app.post', 'app.put', 'app.delete'],
    },
  ],
};

export const designRoadmap = [
  {
    id: 'design_principles',
    title: 'Design Principles',
    type: 'video',
    field: 'design',
    track: 'design',
    duration: 120,
    completed: false,
  },
  {
    id: 'color_theory',
    title: 'Color Theory',
    type: 'video',
    field: 'design',
    track: 'design',
    duration: 120,
    completed: false,
  },
  {
    id: 'typography_basics',
    title: 'Typography Basics',
    type: 'video',
    field: 'design',
    track: 'design',
    duration: 120,
    completed: false,
  },
  {
    id: 'figma_intro',
    title: 'Figma Introduction',
    type: 'video',
    field: 'design',
    track: 'design',
    duration: 120,
    completed: false,
  },
  {
    id: 'ui_fundamentals',
    title: 'UI Design Fundamentals',
    type: 'video',
    field: 'design',
    track: 'design',
    duration: 120,
    completed: false,
  },
  {
    id: 'ux_research',
    title: 'UX Research Methods',
    type: 'video',
    field: 'design',
    track: 'design',
    duration: 120,
    completed: false,
  },
  {
    id: 'wireframing',
    title: 'Wireframing Techniques',
    type: 'video',
    field: 'design',
    track: 'design',
    duration: 120,
    completed: false,
  },
  {
    id: 'prototyping',
    title: 'Prototyping in Figma',
    type: 'video',
    field: 'design',
    track: 'design',
    duration: 120,
    completed: false,
  },
  {
    id: 'design_systems',
    title: 'Design Systems',
    type: 'video',
    field: 'design',
    track: 'design',
    duration: 120,
    completed: false,
  },
  {
    id: 'portfolio_creation',
    title: 'Portfolio Creation',
    type: 'video',
    field: 'design',
    track: 'design',
    duration: 120,
    completed: false,
  },
];

export const marketingRoadmap = [
  {
    id: 'marketing_fundamentals',
    title: 'Marketing Fundamentals',
    type: 'video',
    field: 'marketing',
    track: 'marketing',
    duration: 120,
    completed: false,
  },
  {
    id: 'seo_basics',
    title: 'SEO Basics',
    type: 'video',
    field: 'marketing',
    track: 'marketing',
    duration: 120,
    completed: false,
  },
  {
    id: 'content_strategy',
    title: 'Content Marketing Strategy',
    type: 'video',
    field: 'marketing',
    track: 'marketing',
    duration: 120,
    completed: false,
  },
  {
    id: 'social_media',
    title: 'Social Media Marketing',
    type: 'video',
    field: 'marketing',
    track: 'marketing',
    duration: 120,
    completed: false,
  },
  {
    id: 'email_marketing',
    title: 'Email Marketing',
    type: 'video',
    field: 'marketing',
    track: 'marketing',
    duration: 120,
    completed: false,
  },
  {
    id: 'google_analytics',
    title: 'Google Analytics',
    type: 'video',
    field: 'marketing',
    track: 'marketing',
    duration: 120,
    completed: false,
  },
  {
    id: 'facebook_ads',
    title: 'Facebook Ads',
    type: 'video',
    field: 'marketing',
    track: 'marketing',
    duration: 120,
    completed: false,
  },
  {
    id: 'copywriting',
    title: 'Copywriting Techniques',
    type: 'video',
    field: 'marketing',
    track: 'marketing',
    duration: 120,
    completed: false,
  },
  {
    id: 'marketing_analytics',
    title: 'Marketing Analytics',
    type: 'video',
    field: 'marketing',
    track: 'marketing',
    duration: 120,
    completed: false,
  },
  {
    id: 'campaign_planning',
    title: 'Campaign Planning',
    type: 'video',
    field: 'marketing',
    track: 'marketing',
    duration: 120,
    completed: false,
  },
];


