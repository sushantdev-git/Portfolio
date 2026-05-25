# Sushant Mishra | Software Engineer II — Interactive Portfolio

Welcome to the source repository for my professional developer portfolio. This web application is a highly interactive, responsive, and minimalist interface inspired by the tactile visual design language of **Brilliant.org**.

The codebase is modernized to the absolute state of the art in frontend engineering: powered by **React 19**, bundled with **Vite** (delivering blistering **1.2-second production builds**), built strictly in **TypeScript**, and styled with **Tailwind CSS**.

---

## 🚀 Key Features

* **Gamified Concurrency Teaser:** A home page asynchronous teaser quiz modeled after Brilliant's lesson widgets. It challenges visitors with Node.js concurrency questions, delivering instant correct/incorrect visual states, checkmarks, and interactive learning explanations.
* **Interactive Curriculum Pathways:** Interactive skills tabs categorized into *Web & Distributed Systems*, *GenAI & Orchestration*, and *Systems & Core CS* displaying mastery level metrics and custom tactile badges.
* **Pure CSS Timeline Pathway:** An interactive work history timeline utilizing custom-flex connectors, circles, and checklist timeline items that resize instantly with zero paint latency.
* **Tactile Image Gallery:** A high-fidelity media popup container supporting previous/next arrows, an elegant top-right close (`X`) button, and full cursor `zoom-out` backdrop click-to-close triggers.
* **Bottom Sheet PDF Drawer:** A custom resume modal widget that glides fluidly from the bottom of the viewport (`85vh` height) using CSS transform translations, complete with a drag-handle grip indicator.

---

## 🛠️ Technical Specifications & Stack

* **Framework:** [React 19.0.0](https://react.dev/) (Leveraging Concurrent Mode rendering and strict TypeScript compilation)
* **Build Tooling:** [Vite 5.x](https://vite.dev/) (Replaced the bloated CRA `react-scripts`, reducing audited dependencies from **1,498 down to just 159 packages**)
* **Compiler:** [TypeScript 5.x](https://www.typescriptlang.org/) (Strictly typed schemas, store schemas, component props, and event handlers)
* **Styling:** [Tailwind CSS v3](https://tailwindcss.com/) (Cohesive design tokens, dynamic physical shadow utilities, and full dark/light theme toggles)
* **State Management:** [Redux](https://redux.js.org/) & [Redux-Thunk](https://github.com/reduxjs/redux-thunk) (Typed dispatch actions and central state management)
* **Animation:** [Framer Motion](https://www.framer.com/motion/) (Smooth page transition hooks)
* **Icons:** [Lucide React](https://lucide.dev/) & Inline Vector SVGs

---

## 💻 Getting Started & Commands

Ensure you have [Node.js](https://nodejs.org/) installed, clone the repository, and install the optimized package footprint:

```bash
# Install dependencies
npm install
```

### Running the Development Server
Launches the Vite dev server locally on port `3000` with hot module replacement (HMR):
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Type-Checking & Compiling
Compile the TypeScript files and compile an optimized, minified production build inside the `build` directory:
```bash
npm run build
```

### Previewing the Production Build
Lunches a static server to preview your compiled production bundle locally:
```bash
npm run preview
```
