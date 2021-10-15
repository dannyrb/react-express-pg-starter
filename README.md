# Getting Started with Create React App

## Getting Started


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

## Migrations Cheat Sheet

```bash
# Create new blank migration
npx knex migrate:make NAME_OF_MIGRATION

# Apply migration
npx knex migrate:latest

# Rollback bad migration
npx knex migrate:rollback

# Create new seed file
npx knex seed:make 001-table-to-seed

# Run seed file
npx knex seed:run
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
- `npx knex migrate:make create-cars`
- Update migration file's `up` and `down` methods
- `npx knex migrate:latest`

4. [Install SQLite Studio](https://sqlitestudio.pl/)

5. Create Seed

- `npx knex seed:make 001-cars`