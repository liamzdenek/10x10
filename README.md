# 10x10 Job Application Portfolio

This repository contains the 10x10 Job Application Portfolio, a showcase of 10 unique projects created as job applications over a 10-day period.

## Project Overview

The 10x10 Job Application Portfolio is a comprehensive showcase of 10 unique projects created as job applications over a 10-day period for the 2025 job hunt. Each project demonstrates technical skills, problem-solving abilities, and domain knowledge relevant to specific companies and roles.

## Development

### Prerequisites

- Node.js 18+ with npm
- Git

### Setup

```bash
# Clone the repository
git clone <repository-url>
cd 10x10

# Install dependencies
npm install

# Start the development server
npx nx serve ux
```

The development server will be available at http://localhost:4200.

### Build

```bash
# Build the project
npx nx build ux
```

The build output will be in the `dist/packages/ux` directory.

## Deployment

This project is configured to deploy automatically to GitHub Pages using GitHub Actions.

### Automatic Deployment

The site is automatically deployed to GitHub Pages when:

1. Changes are pushed to the `main` branch
2. The GitHub Actions workflow is manually triggered

### Manual Deployment

To manually trigger a deployment:

1. Go to the "Actions" tab in the GitHub repository
2. Select the "Deploy to GitHub Pages" workflow
3. Click "Run workflow"
4. Select the branch to deploy from (usually `main`)
5. Click "Run workflow"

### Deployment Configuration

The deployment is configured in the `.github/workflows/deploy.yml` file. The workflow:

1. Installs dependencies with `npm install`
2. Builds the project with `npx nx build ux`
3. Uploads the `dist/packages/ux` directory as a GitHub Pages artifact
4. Deploys the artifact to GitHub Pages

## Project Structure

```
.
├── .github/                # GitHub configuration
│   └── workflows/          # GitHub Actions workflows
├── memory-bank/            # Portfolio memory bank
├── packages/
│   └── ux/                 # Main portfolio website
│       ├── public/         # Static assets
│       ├── src/            # Source code
│       └── util/           # Utility scripts
├── remote-memory-banks/    # Symbolic links to project memory banks
└── README.md               # This file
```

## License

This project is licensed under the UNLICENSED license.