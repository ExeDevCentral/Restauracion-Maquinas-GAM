<div align="center">

# Taller GAM • Mechanical Horology & Typewriter Conservation
### *Heritage Mechanical Restoration, Kinematic Diagnostics & Digital Atelier Architecture*

[![Vite 6](https://img.shields.io/badge/Vite-6.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![React 18](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-7.x_Strict-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Motion](https://img.shields.io/badge/Motion-12.2-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://motion.dev/)
[![Vitest](https://img.shields.io/badge/Vitest-Property_Testing-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)](https://vitest.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

<p align="center">
  <b>A digital conservation atelier and mechanical diagnostic platform dedicated to the disassembly, kinematic recalibration, ultrasonic chemical cleansing, and horological restoration of 19th and 20th-century typewriters and precision instruments.</b>
</p>

---

</div>

## 1. Abstract & Conservation Taxonomy

Precision historical mechanical artifacts—ranging from manual desktop typewriters (Underwood, Remington, Olivetti) to precision mechanical clocks—present complex conservation challenges: mechanical fatigue in escapement mechanisms, platen rubber hardening, carriage escapement timing drift, and alloy oxidation.

**Taller GAM** establishes an artisanal engineering and client diagnostic interface:
- **Kinematic Restoration Protocols:** Formal diagnostic taxonomy detailing escapement gear meshing, typebar alignment, ribbon oscillator timing, and spring tension calibration.
- **Metallurgical & Polymer Preservation:** Documenting chemical bath degreasing, ultrasonic bath treatments, and vulcanized rubber re-coating processes.
- **Accessible Atelier Interface:** Engineered with React 18, Vite 6, and Radix UI accessible primitives with smooth physics-based motion transitions.

```
┌────────────────────────────────────────────────────────────────────────┐
│                        MECHANICAL TRIAGE & DIAGNOSTIC                  │
│  [Escapement Timing Analysis] ──► [Typebar Linkage Clearance Check]    │
│  [Platen Durometer Testing]   ──► [Sub-Assembly Disassembly Matrix]   │
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │
                                   ▼
┌────────────────────────────────────────────────────────────────────────┐
│               CONSERVATION PROTOCOLS & CHEMICAL TREATMENT              │
│    • Degreasing: Ultrasonic Hydrocarbon & Naphtha Agitation Baths      │
│    • Surface Stabilization: Microcrystalline Wax & Anodic Rust Removal │
│    • Polymer Rejuvenation: Rubber Platen Resurfacing & Durometer Norms │
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │
         ┌─────────────────────────┴─────────────────────────┐
         ▼                                                   ▼
┌──────────────────────────────────┐        ┌──────────────────────────────────┐
│      INTERACTIVE ATELIER UI      │        │     RESTORATION CERTIFICATION    │
│   Motion Kinetic Physics         │        │   Digital Provenance Logging     │
│   Accessible Radix Primitives    │        │   Horological Heritage Telemetry │
└──────────────────────────────────┘        └──────────────────────────────────┘
```

---

## 2. Kinematic & Horological Restoration Engineering

### 2.1. Escapement Mechanism Synchronization
Typewriter and horological escapements require sub-millimeter tolerances. The platform documents and tracks calibration steps:
$$\theta_{\text{trip}} = \arcsin\left(\frac{d_{\text{pawl}}}{r_{\text{escapement}}}\right)$$
Guaranteeing uniform tooth engagement without typebar collisions or carriage slippage during high-speed keystrokes.

### 2.2. Property-Based Testing of Booking & Workshop State
Interactive diagnostic calculators and triage state machines are certified using **Fast-Check** and **Vitest**, verifying that state transformations remain deterministic across all user interaction paths.

---

## 3. Technology Stack & Architectural Taxonomy

| Layer | Technology | Architectural Specification |
| :--- | :--- | :--- |
| **Bundler & Tooling** | Vite 6.3 | Native ESM development server with optimized Rollup production tree-shaking |
| **UI Framework** | React 18.3 | Strictly typed functional components with memoized state transitions |
| **Styling Engine** | Tailwind CSS v4.1 | Utility design tokens with vintage typography pairings |
| **Animation Physics** | Motion 12.2 | Gesture-driven micro-interactions and tactile mechanical feedback |
| **UI Primitives** | Radix UI | Accessible dialogs, accordions, tabs, and tooltips |
| **Verification** | Vitest 4.1 + Fast-Check | Generative property testing and DOM assertion pipelines |

---

## 4. Systems Directory Hierarchy

```text
Taller-Restauracion-GAM/
├── public/                 # High-resolution photographic plates of antique mechanisms
├── src/
│   ├── app/                # Main application composition & layout views
│   ├── components/         # Workshop sections, interactive vitrines & quote modals
│   ├── data/               # Mechanical models database (Remington, Olivetti, Hermes)
│   ├── types/              # Domain models & conservation state interfaces
│   └── utils/              # Kinematic calculators and formatting helpers
├── guidelines/             # Heritage preservation guidelines and ethical standards
└── vite.config.ts          # Rollup bundling and visualizer analyzer configuration
```

---

## 5. Development Runtime & Operational Lifecycle

### Prerequisites
- **Node.js**: $\ge 18.x$ LTS
- **Package Manager**: `npm` $\ge 9.x$

### Installation & Initialization
```bash
# Clone the repository
git clone https://github.com/ExeDevCentral/Restauracion-Maquinas-GAM.git
cd Restauracion-Maquinas-GAM

# Install dependencies deterministically
npm install

# Launch local development environment
npm run dev
```

### Static Analysis & Verification Suite
```bash
# Run unit and generative property test suites
npm test

# Generate production distribution bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 6. License

Distributed under the **MIT License**. Dedicated to the preservation of industrial typography and mechanical engineering heritage.

<div align="center">
  <sub>Preserved with mechanical devotion by <a href="https://github.com/ExeDevCentral">ExeDevCentral</a>.</sub>
</div>
