![Portfolio Screenshot](public/images/portfolio-screenshot.png)

# Loren Ndung'u Kamau – Personal Portfolio Website

## Overview

This repository contains the source code for the personal portfolio website of Loren Ndung'u Kamau. It is designed to showcase professional experience, projects, technical skills, and provide a means of contact. The site is built with modern web technologies, optimized for performance, accessibility, and responsive design.

## Table of Contents

- [Live Site](#live-site)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Content Overview](#content-overview)
- [Getting Started](#getting-started)
- [Customization](#customization)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

---

## Live Site

Access the deployed portfolio at:  
[https://ndunguloren.netlify.app/](https://ndunguloren.netlify.app/)

---

## Features

- **Homepage**: Professional introduction, summary, and navigation to key sections.
- **About Page**: Detailed professional background, competencies, and personal growth highlights.
- **Projects Page**: Overview of selected projects, each with descriptions, visuals, and links to source code and demos.
- **Social Media Integration**: Prominent, interactive links to professional social profiles.
- **Responsive Design**: Optimized for desktop, tablet, and mobile viewing.
- **Accessible Navigation**: Well-structured navigation bar and footer across all pages.
- **SEO Optimized**: Includes structured data and metadata for search engines and social sharing.
- **Consistent Theming**: Cohesive visual design with animated transitions and dark mode support.

---

## Technology Stack

- **Astro**: Static site generation and component architecture.
- **Tailwind CSS**: Utility-first CSS framework for rapid, responsive UI development.
- **TypeScript**: Type safety in interactive or complex logic.
- **JavaScript (ES Modules)**: For UI interactions and animation.
- **Flowbite**: UI component enhancements.
- **Deployment**: Hosted on [Netlify](https://www.netlify.com/).

---

## Project Structure

```
my-portfolio-website/
├── public/
│   └── images/                 # Static assets and visuals
├── src/
│   ├── components/             # Reusable UI components (Navbar, Footer, Social Media, ProjectCard, etc.)
│   ├── layouts/                # Main layout templates and metadata management
│   └── pages/                  # Top-level site pages (Home, About, Projects)
├── package.json                # Project dependencies and scripts
├── astro.config.mjs            # Astro configuration
├── tailwind.config.mjs         # Tailwind CSS configuration
└── README.md                   # Project documentation
```

---

## Content Overview

### Home

- Introduction to Loren Ndung'u Kamau, with a call-to-action for more information and project highlights.
- Prominent links to About and Projects sections.
- Social media icons for external professional profiles.

### About

- Professional biography, educational background, and technical expertise.
- Highlights of key skills: Python, Django, Node.js, Next.js, PostgreSQL, Docker, CI/CD.
- "What I Do" section, outlining daily personal development and commitment to innovation.

### Projects

- **Ltronix Shop**: Full-stack e-commerce platform featuring modern architecture, decoupled front/back end, CI/CD automation, and production readiness.  
  [Live Demo](https://ltronix-shop.vercel.app/products)  
  [GitHub](https://github.com/ndunguloren96)

- **University Backend Class Attendance System**: Scalable, user-friendly C-based backend for academic attendance management, supporting multiple roles and units.  
  [GitHub](https://github.com/ndunguloren96/university_class_attendance_system)

### Navigation

- **Navbar**: Direct access to Home, About, Resume, Projects, Contact.
- **Footer**: Quick links and copyright.

### Social Integration

- LinkedIn: [https://www.linkedin.com/in/loren-ndungu/](https://www.linkedin.com/in/loren-ndungu/)
- GitHub: [https://github.com/ndunguloren96](https://github.com/ndunguloren96)
- Instagram: [https://www.instagram.com/ndunguloren/](https://www.instagram.com/ndunguloren/)
- Linktree: [https://linktr.ee/ndunguloren](https://linktr.ee/ndunguloren)

---

## Getting Started

### Prerequisites

- Node.js (version 18 or newer)
- Preferred package manager: `pnpm`, `npm`, or `yarn`

### Installation

```bash
git clone https://github.com/ndunguloren96/my-portfolio-website.git
cd my-portfolio-website
pnpm install   # or npm install or yarn install
```

### Development

```bash
pnpm dev       # or npm run dev or yarn dev
```
Access the local development site at [http://localhost:4321](http://localhost:4321).

### Production Build

```bash
pnpm build     # or npm run build or yarn build
pnpm preview   # or npm run preview or yarn preview
```

---

## Customization

- **Content**: Update textual and project information in `src/pages/` and `src/components/`.
- **Visuals**: Replace or update images in `public/images/`.
- **Styling**: Adjust Tailwind classes and configuration for branding or theming changes.
- **Metadata**: Edit `src/layouts/Layout.astro` to change site metadata and structured data.

---

## License

This project is licensed under the GNU General Public License v3.0.  
See the [LICENSE](LICENSE) file for details.

---

## Contact

For professional inquiries:

- LinkedIn: [https://www.linkedin.com/in/loren-ndungu/](https://www.linkedin.com/in/loren-ndungu/)
- Email and additional links via [Linktree](https://linktr.ee/ndunguloren)

---

## Acknowledgements

- Astro and open-source maintainers
- Tailwind CSS and Flowbite contributors
- The broader web development community for inspiration and tools

---
