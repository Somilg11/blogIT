# BLOGIT (blogging application)

## Home

![Demo App](/public/blogITscreenshot_1.png)

## Add Post

![Demo App](/public/blogITscreenshot_2.png)

-   🌟 Learn React + Tailwind + React-redux-toolkit + React-Router-dom
-   🎃 Appwrite as Backed service
-   🚀 Tinymce + React-parser + React-hook-form

# Run Locally

Major dependencies
```
npm i @reduxjs/toolkit react-redux react-router-dom appwrite @tinymce/tinymce-react html-react-parser react-hook-form
```

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Setup .env file

Create an <b>.env</b> file and copy the below variables, then go to the required application websites, and put your <i>keys</i> here. <b>Note : </b> without these <i>keys</i> application won't work, and each user have unique <i>key</i>.
```
VITE_APPWRITE_URL=""
VITE_APPWRITE_PROJECT_ID=""
VITE_APPWRITE_DATABASE_ID=""
VITE_APPWRITE_COLLECTION_ID=""
VITE_APPWRITE_BUCKET_ID=""
```