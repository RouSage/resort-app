# React Resort App

This is a small React app for finding a room in a resort hotel. It's made using [this](https://youtu.be/l0JbuMVXaTs) tutorial as a base.

## Description

It's a simple React application built using:

- [Create React App](https://github.com/facebook/create-react-app)
- [Contentful](https://app.contentful.com/) for content management and API for fetching data
- React [Context API](https://reactjs.org/docs/context.html) for state management
- [React Hooks](https://reactjs.org/docs/hooks-intro.html)

## Installation

In the project directory, use `npm` package manager to install all required dependencies.

```bash
npm install
```

You also need to create `.env` file in the root of the project and add two environment variables: **Space ID** and **API Access Token** both can be obtained through [Contentful](https://app.contentful.com/) after creating your own space and data model.

```
REACT_APP_API_SPACE=<your_space_id>
REACT_APP_API_ACCESS_TOKEN=<your_access_token>
```

## Available Scripts

In the project directory, you can run:

```bash
npm start
```

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

```bash
npm build
```

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
