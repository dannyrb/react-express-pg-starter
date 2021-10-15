# Getting Started with Create React App


## Available Scripts

In the project directory, you can run:

```bash
# Runs the app in the development mode
npm start

# Launches the test runner in the interactive watch mode.
npm test

# npm run build
Builds the app for production to the `build` folder.
```

## Steps to setup from scratch

1. [Setup React using CRA](https://create-react-app.dev/docs/getting-started/)

- Create a new directory
- `npx create-react-app .`
- `npm start`

2. [Setup Server](https://medium.com/@MajikMan/starting-a-node-project-from-scratch-with-sqlite3-knex-and-express-fb4b765aca)

- Create `server/` directory
- `npm i -D nodemon`
- `npm i express sqlite3 knex`

3. [Setup DB](https://medium.com/@MajikMan/starting-a-node-project-from-scratch-with-sqlite3-knex-and-express-fb4b765aca)

- `npx knex init`
- Create `data/db-config.js` file
