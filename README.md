IRIS
IRIS is a modern, animated, and visually appealing React-based website showcasing professional services with interactive UI components and smooth animations.

Table of Contents
About

Features

Technologies

Installation

Usage

Folder Structure

Contributing

License

Contact

About
IRIS is designed as a professional services portfolio website, focusing on modern UI/UX, responsive layouts, and accessibility. The project includes multiple pages like Home, Services, About Us, and Contact Us, with animated components and interactive elements.

Features
Responsive design supporting desktop and mobile devices

Animated fade-in and hover effects

Service cards with icons and descriptions

Accessible keyboard focus outlines

Modular React components for easy maintenance

Smooth transitions and visual feedback on user interactions

Technologies
React

React Icons

CSS3 with animations and media queries

JavaScript (ES6+)

Poppins font from Google Fonts

Installation
bash
Copy
Edit
git clone https://github.com/sayograi24/IRIS.git
cd IRIS
npm install
npm start
Open your browser and go to http://localhost:3000

Usage
Navigate to the Services page to view available professional services with animated cards.

Hover or tab through service cards to see interactive effects.

Customize services by editing the servicesData array in Services.jsx.

Modify styles in the CSS files under /src/styles/.

Folder Structure
pgsql
Copy
Edit
IRIS/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── Services.jsx
│   ├── styles/
│   │   └── services.css
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
Contributing
Fork the repository

Create a new branch (git checkout -b feature/your-feature)

Commit your changes (git commit -m 'Add your feature')

Push to the branch (git push origin feature/your-feature)

Open a Pull Request

License
MIT License. See the LICENSE file for details.

Contact
Created by sayograi24.