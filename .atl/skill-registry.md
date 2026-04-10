# Skill Registry

Generated: Wed Mar 18 2026  
Project: chini

## Available Skills

### Core SDD Workflow
- **sdd-explore** (`~/.config/opencode/skills/sdd-explore/SKILL.md`)  
  Explore and investigate ideas before committing to a change.

- **sdd-propose** (`~/.config/opencode/skills/sdd-propose/SKILL.md`)  
  Create a change proposal with intent, scope, and approach.

- **sdd-spec** (`~/.config/opencode/skills/sdd-spec/SKILL.md`)  
  Write specifications with requirements and scenarios.

- **sdd-design** (`~/.config/opencode/skills/sdd-design/SKILL.md`)  
  Create technical design document with architecture decisions.

- **sdd-tasks** (`~/.config/opencode/skills/sdd-tasks/SKILL.md`)  
  Break down a change into an implementation task checklist.

- **sdd-apply** (`~/.config/opencode/skills/sdd-apply/SKILL.md`)  
  Implement tasks from the change, writing actual code.

- **sdd-verify** (`~/.config/opencode/skills/sdd-verify/SKILL.md`)  
  Validate that implementation matches specs, design, and tasks.

- **sdd-archive** (`~/.config/opencode/skills/sdd-archive/SKILL.md`)  
  Sync delta specs to main specs and archive a completed change.

### Expo & React Native
- **expo-tailwind-setup** (`~/.agents/skills/expo-tailwind-setup/SKILL.md`)  
  Set up Tailwind CSS v4 in Expo with react-native-css and NativeWind v5.

- **building-native-ui** (`~/.agents/skills/building-native-ui/SKILL.md`)  
  Complete guide for building beautiful apps with Expo Router. Covers fundamentals, styling, components, navigation, animations, patterns, and native tabs.

- **native-data-fetching** (`~/.agents/skills/native-data-fetching/SKILL.md`)  
  Use when implementing or debugging ANY network request, API call, or data fetching. Covers fetch API, React Query, SWR, error handling, caching, offline support, and Expo Router data loaders.

- **expo-deployment** (`~/.agents/skills/expo-deployment/SKILL.md`)  
  Deploying Expo apps to iOS App Store, Android Play Store, web hosting, and API routes.

- **expo-dev-client** (`~/.agents/skills/expo-dev-client/SKILL.md`)  
  Build and distribute Expo development clients locally or via TestFlight.

- **expo-cicd-workflows** (`~/.agents/skills/expo-cicd-workflows/SKILL.md`)  
  Helps understand and write EAS workflow YAML files for Expo projects.

- **expo-api-routes** (`~/.agents/skills/expo-api-routes/SKILL.md`)  
  Guidelines for creating API routes in Expo Router with EAS Hosting.

- **use-dom** (`~/.agents/skills/use-dom/SKILL.md`)  
  Use Expo DOM components to run web code in a webview on native and as-is on web.

- **upgrading-expo** (`~/.agents/skills/upgrading-expo/SKILL.md`)  
  Guidelines for upgrading Expo SDK versions and fixing dependency issues.

### React Best Practices
- **vercel-react-native-skills** (`~/.agents/skills/vercel-react-native-skills/SKILL.md`)  
  React Native and Expo best practices for building performant mobile apps. Use when building React Native components, optimizing list performance, implementing animations, or working with native modules.

- **vercel-react-best-practices** (`~/.agents/skills/vercel-react-best-practices/SKILL.md`)  
  React and Next.js performance optimization guidelines from Vercel Engineering. Use when writing, reviewing, or refactoring React/Next.js code to ensure optimal performance patterns.

- **vercel-composition-patterns** (`~/.agents/skills/vercel-composition-patterns/SKILL.md`)  
  React composition patterns that scale. Use when refactoring components with boolean prop proliferation, building flexible component libraries, or designing reusable APIs.

### Design & Deployment
- **web-design-guidelines** (`~/.agents/skills/web-design-guidelines/SKILL.md`)  
  Review UI code for Web Interface Guidelines compliance. Use when asked to "review my UI", "check accessibility", "audit design", "review UX", or "check my site against best practices".

- **vercel-deploy** (`~/.claude/skills/agent/skills/claude.ai/vercel-deploy-claimable/SKILL.md`)  
  Deploy applications and websites to Vercel. Use when user requests deployment actions.

### Other
- **find-skills** (`~/.agents/skills/find-skills/SKILL.md`)  
  Helps users discover and install agent skills when they ask questions like "how do I do X", "find a skill for X", "is there a skill that can...".

- **astro** (`~/.agents/skills/astro/SKILL.md`)  
  Skill for using Astro projects. Includes CLI commands, project structure, core config options, and adapters.

- **swiftui-expert-skill** (`~/.agents/skills/swiftui-expert-skill/SKILL.md`)  
  Write, review, or improve SwiftUI code following best practices for state management, view composition, performance, modern APIs, Swift concurrency, and iOS 26+ Liquid Glass adoption.

- **remotion-best-practices** (`~/.agents/skills/remotion-best-practices/SKILL.md`)  
  Best practices for Remotion - Video creation in React.

## Project Conventions

No project-level convention files found (agents.md, AGENTS.md, CLAUDE.md, .cursorrules, GEMINI.md, copilot-instructions.md).

## Usage

Skills are automatically discovered by the orchestrator. Sub-agents receive skill paths in their launch prompts.
