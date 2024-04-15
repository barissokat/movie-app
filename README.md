# Getting Started with Movie App

This project is a **React.js** project. You can access the project page [here](https://movie-app-ruddy-eta.vercel.app/).

In this project, **React Redux** is simply used for pagination. Real-time pagination has been implemented for pagination. With every page change, a new request is sent live. This way, it has been attempted to prevent data bloating locally.

The lists fetched from the service are held within **React Context**. Thus, the latest state of the lists is preserved even when navigating to the detail page. The data has been fetched from [OMDbapi](https://www.omdbapi.com/).

While designing the components, an **atomic structure** was considered. Thus, the simplest components can be found in the atoms folder, while the complexity of the components increases, they are divided into folders such as molecules, organisms, templates.

Different types of CSS coding have been given while styling the components. In addition to **globally defined CSS class** declarations, **Bootstrap**, **inline styling**, **module.css** and **styled components** have also been used.

The main page is defined as App.js, while the Movie.js component is used for the detail page.

In using the page, the user must first search by movie title. Subsequently, movies will be listed in grid based on the search. More specific searches can be performed using filters. In addition, a detailed search can be performed based on the type of movie or year. Pressing the enter key after filling in the inputs will initiate the search.

On the detail page, other information about the movie is available.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.