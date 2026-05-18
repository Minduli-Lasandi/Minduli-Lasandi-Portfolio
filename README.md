# Minduli Lasandi — Personal Portfolio

A clean, minimal personal portfolio website built with React and TypeScript, deployed on GitHub Pages.

🌐 **Live site:** [minduli-lasandi.github.io/Minduli-Lasandi-Portfolio](https://minduli-lasandi.github.io/Minduli-Lasandi-Portfolio/)

---

## Features

- **Hero** — Profile photo, bio, and links to GitHub, LinkedIn, Google Scholar, Hugging Face, Medium, and email
- **Education** — Academic background with key modules and research project
- **Experience** — Work and internship history with tech stack tags
- **Projects** — 6 most recent projects with links to GitHub, HuggingFace, demos, and publications
- **Publications** — Auto-parsed from BibTeX entries with abstract toggle and DOI/paper links
- **Skills & Certifications** — Separate page with skill groups and course certifications
- **Extracurricular Activities** — Separate page linked from the Experience section
- **Download CV** — Available directly from the navbar

---

## Tech Stack

- React 18 + TypeScript
- Vite
- React Router v6
- CSS Variables (no UI framework)
- GitHub Actions for CI/CD
- GitHub Pages for hosting

---

## Project Structure

```
src/
├── components/        # Navbar, Hero, Education, Experience, Projects, Publications
├── pages/             # SkillsPage, ActivitiesPage
├── data/              # All content lives here as .ts files
│   ├── profile.ts
│   ├── education.ts
│   ├── experience.ts
│   ├── projects.ts
│   ├── publications.ts
│   ├── skills.ts
│   ├── certifications.ts
│   └── extracurricular.ts
├── utils/
│   └── parseBibtex.ts # BibTeX parser for publications
├── App.tsx
├── main.tsx
└── index.css
public/
├── profile.jpg
└── Minduli_Lasandi_Resume.pdf
```

---

## Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Updating Content

All content is managed through the data files in `src/data/`. No need to touch any component files for content updates.

- **Add a project** → `src/data/projects.ts`
- **Add a publication** → paste BibTeX into `src/data/publications.ts`
- **Add a certification** → `src/data/certifications.ts`
- **Update experience** → `src/data/experience.ts`

---

## Deployment

The site auto-deploys to GitHub Pages on every push to `main` via GitHub Actions.

```bash
git add .
git commit -m "your message"
git push
```

---

## License

Feel free to use this as a template for your own portfolio. If you do, a credit would be appreciated!
