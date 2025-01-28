# GDG-Website

## Structure of Directory
```
    ├── node_modules/
    ├── public/
    │   ├── ...
    ├── src/
    │   ├── assets/         // Other assets like fonts, etc.
    │   ├── components/     // Reusable UI components
    │   │   ├── Button/
    │   │   │   ├── Button.jsx
    │   │   │   └── Button.module.css
    │   │   ├── ...
    │   ├── images/         // Images used in the application
    │   │   ├── logo.png
    │   │   ├── ...
    │   ├── api/            // API interaction logic
    │   │   ├── users.js
    │   │   ├── products.js
    │   │   └── ...
    │   ├── App.css
    │   ├── App.jsx
    │   ├── index.css
    │   ├── main.jsx
    │   ├── template.jsx
    │   ├── template.module.css
    ├── .gitignore
    ├── eslint.config.js
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── README.md
    └── vite.config.js
```

## Steps to Create your Webpages and Organize them
🔹We are using the TemplatePage as our base template with the SideNavbar component inside and the rest of the right section is for the pages to be displayed<br>
🔹Create your Respective Page Folders and create your jsx and module.css files there<br>
🔹Import your Page from your respective Page folder to TemplatePage.jsx and place it accordingly in the order of icons in the SideNavBar<br>
