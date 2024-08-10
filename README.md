# DeckGLGIS

A project to show POC of volume computation happening in react + DeckGL Web app for CrystallBall company.

## Local developments

In the project directory, you can either prepare below for local developments:

1. Node.js
2. Docker Desktop + wsl2 (Ubuntu recommended)

### NPM commands

Runs the app in the development mode. Open [http://localhost:3000/](http://localhost:3000/) to view it in the browser.

```
npm install
npm run dev
```

The page will reload if you make edits.
You will also see any lint errors in the console.

### Typing issues message

The `Vite Checker` is constantly checking if any typing issues exist in
our TypeScript codes by prompting messages in runtime.

### Found issues in code style?

To fix all formatting and linting using `prettier`:

```
npm run format
```

### Check if build error exists?

To see if any errors prevent production build compilation:

```
npm run build
```

### Prepare enviroment variables for app use

To define env, create an `.env` file:

`VITE_APP_API_BASE_PATH`: The backend api to point to, for example `http://localhost:8000/api`

`VITE_APP_API_GEOSERVER`: Point to `http://localhost:8080/geoserver/`

### Generating code from the OpenAPI 3.0 schemas of the backends

To ensure that we test consistent with the latest backend changes, we grab the latest apis via its provided OpenAPI 3.0 spec.

#### Generating mocks from the DMS using `openapi client generator`

Command below will ensure that we have up-to-date mocks of the backend:

```
npm run gnerate-api
```
