This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# React Review - Movies App

The plan is to go through a review of React by making a movies app will show a list of favourite movies. By the end of the review this app will have full CRUD capabilities. Navigate through each challenge branch till you reach the end.

### 1 - Setup

- Clone the app and switch to the 1-setup branch
- Setup the src directory how we have done in class
- Create a components directory subfolder then add an App component
- Make sure everything is working properly and the App component is rendering "Hello World" on the screen

### 2 - Component Creation

- At this stage, we'll need the following components for our app: header, movieInput and movieList
- The header will render a title "My Favourite Movies"
- The movieInput component will be an input field where eventually we will type in a movie and it will add that to our favourite movie list
- The movieList component renders out our favourite films
- For this challenge, create the necessary components and just add some dummy text if required. They don't need to be functional yet then import them into the App component to render. Please also make them function-based as opposed to class components

### 3 - Controlled MovieInput

- In the MovieInput component, implement state so the input element is now controlled

### 4 - API Call

- We now want to have the ability to make an API call to the OMDb API by searching for a movie and having that movie's details render on the page
- We will implement a simpler version first then refactor later but for now make the API call from your MovieInput component. The user should type in the input field then press enter and the relevant movie details should render below
- Sign up for a free API key at http://www.omdbapi.com/apikey.aspx
- IMPORTANT: do not upload your API key to GitHub. Use an environment variable to store your API key. In the root of your project create a .env file. In that file create an environment variable like this REACT_APP_OMDB_API_KEY=yourAPIkey. Replace yourAPIkey with the actual key. ALSO IMPORTANT then add .env to your gitignore file. Now you can use your API key with process.env.REACT_APP_OMDB_API_KEY anywhere in your app. See https://create-react-app.dev/docs/adding-custom-environment-variables/ for more details. You may have to restart the server to get your environment variable working.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
