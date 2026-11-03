# AUREA RESIDENCE

### Modern Residential Development Website

AUREA RESIDENCE is a responsive website designed to present a contemporary residential development through architectural visualizations, apartment layouts, project information, and an interactive 3D building model.

The website focuses on combining elegant visual presentation with practical functionality, allowing visitors to explore the building, browse available apartments, discover the surrounding location, and experience the project in 3D.

---

## 🌐 Live Website

**Website:** [AUREA RESIDENCE](https://atanas-hristozov.netlify.app/)

---

## ✨ Features

- **Responsive Design** – Optimized for desktop, tablet, and mobile devices.
- **Interactive 3D Building Model** – Explore the residential building directly in the browser.
- **Apartment Explorer** – Browse floor plans and explore individual apartments.
- **Architectural Visualizations** – High-quality exterior and interior renders showcasing the development.
- **Gallery** – A dedicated space for architectural imagery and project visuals.
- **Location Page** – Information about the building's location and surrounding environment.
- **Contact Page** – Easy access to project contact information.
- **Custom 404 Page** – Branded error page for unavailable or incorrect URLs.
- **Loading Experience** – Custom loading animation for the interactive 3D model.

---

## 🛠️ Technologies

The project is built using:

- **HTML5** – Semantic website structure.
- **CSS3** – Styling, layouts, and responsive design.
- **LESS** – Modular and maintainable stylesheets.
- **JavaScript (ES6+)** – Interactive elements and website functionality.
- **Google Model Viewer** – Browser-based interactive 3D model presentation.
- **SVG** – Scalable interface icons and visual elements.
- **Netlify** – Website hosting and deployment.

---

## 📁 Project Structure

```text
AUREA-RESIDENCE/
│
├── index.html
├── apartments.html
├── apartment.html
├── gallery.html
├── location.html
├── contacts.html
├── 404.html
│
├── assets/
│   ├── images/
│   │   ├── exterior/
│   │   ├── interior/
│   │   ├── floor-plans/
│   │   └── gallery/
│   │
│   ├── models/
│   │   └── building.glb
│   │
│   └── logo/
│
├── less/
│   ├── base/
│   ├── components/
│   └── layout/
│
├── public/
│   └── css/
│       └── main.min.css
│
└── js/
    ├── header.js
    └── pages/
        ├── gallery.js
        └── model.js
```

*Note: The structure above represents the main project organization. Individual asset folders and JavaScript modules may vary as development progresses.*

---

## 🏢 Website Sections

| Page | Description |
|---|---|
| Home | Project introduction and main architectural presentation. |
| Apartments | Overview of apartment layouts and building floors. |
| Apartment Details | Individual apartment information and visualizations. |
| Gallery | Architectural imagery and interactive 3D experience. |
| Location | Building location and surrounding environment. |
| Contacts | Project contact information. |
| 404 | Custom branded error page. |

---

## 🧊 Interactive 3D Model

One of the main features of the website is the interactive 3D building model.

The model is displayed directly in the browser using Google's `<model-viewer>` component.

Visitors can:
- Rotate the building.
- Explore the architectural design from different angles.
- Zoom in and out.
- Interact with the 3D presentation without installing additional software.

The model is provided in GLB format.

---

## 🎨 Design Approach

The visual identity of AUREA RESIDENCE is based on a minimal and contemporary architectural aesthetic.

Key design principles include:

- Clean typography and generous whitespace.
- Neutral, warm color palette.
- Large architectural imagery.
- Subtle interface animations.
- Consistent visual hierarchy.
- Responsive layouts across different screen sizes.

The website aims to communicate the architectural character and quality of the residential development through a refined digital experience.

---

## 🚀 Local Development

To run the project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
   ```

2. Open the project folder.

3. Run the website using a local development server, such as the **Live Server** extension in Visual Studio Code.

4. Open the local address provided by the server in your browser.

### LESS Compilation

The project uses LESS for modular stylesheet development.

After modifying the LESS files, compile them into the main CSS file:

```text
less/ → public/css/main.min.css
```

Make sure the compiled CSS is updated before deploying the website.

---

## 📱 Responsive Experience

The website is designed to work across:

- Desktop computers.
- Laptops.
- Tablets.
- Smartphones.

Special attention is given to mobile navigation, responsive architectural imagery, and the performance of the interactive 3D model.

---

## 📦 Deployment

The website is hosted on **Netlify**.

Deployment can be configured by connecting the GitHub repository to Netlify and publishing the project from the repository's root directory.

---

## 👨‍💻 Author

**Atanas Hristozov**

Architect | CG Artist | Web Developer

- Portfolio: [atanas-hristozov.netlify.app](https://atanas-hristozov.netlify.app/)
- GitHub: [Atanas Hristozov](https://github.com/atanas-hristozov)

---

© AUREA RESIDENCE. All rights reserved.
