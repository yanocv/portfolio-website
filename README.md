# Portfolio Website

This is the source code for my personal portfolio website, showcasing my skills, projects, and professional experience. The site is built using **Next.js** and **React** with **TypeScript**, designed to provide a responsive, engaging user experience.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [License](#license)

## Project Overview

The portfolio site serves as a platform to highlight my work and skillset, providing information about my projects, technical abilities, and contact information. It is designed to be scalable, easily maintained, and visually appealing across all devices.

## Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop devices.
- **Interactive UI**: Smooth animations and transitions for a modern user experience.
- **Reusable Components**: Built with modular, reusable components using React.
- **Dynamic Content**: Content dynamically fetched from JSON files to make updates straightforward.

## Technologies Used

- **Next.js** - React framework with server-side rendering and optimized performance
- **React** - Component-based library for building user interfaces
- **TypeScript** - Statically typed JavaScript for enhanced code quality and readability
- **CSS Modules** - Scoped styling for each component to maintain modularity
- **GitHub Pages** - Deployed using GitHub Pages for reliable and fast static hosting

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yanocv/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

## Usage

- **Development**: Make edits in the codebase, save, and the changes will automatically reflect on the site via hot reloading.
- **Building for Production**: Run `npm run build` to generate a static version of the site, which can be deployed to GitHub Pages or any static hosting service.

## Project Structure

The project structure is organized as follows:

```
portfolio-website/
├── public/                 # Public assets, including images and icons
├── src/                    # Source code
│   ├── components/         # Reusable components (e.g., Navbar, Footer)
│   ├── pages/              # Next.js pages (e.g., About, Projects, Contact)
│   ├── styles/             # CSS Modules for component-level styling
│   └── utils/              # Utility functions and helpers
├── .gitignore              # Git ignore file
├── README.md               # Project documentation
├── package.json            # NPM dependencies and scripts
└── tsconfig.json           # TypeScript configuration
```

## Deployment

The website is automatically deployed on **GitHub Pages**. Each push to the `main` branch triggers a workflow to build and publish the site.

To manually build and deploy:

1. Run `npm run build` to create the optimized production build.
2. Deploy the `out` folder to GitHub Pages or a static hosting service of your choice.

## License

This project is open-source and available under the MIT License.
