# Quantum Metric Code Challenge

@TODO

## Quick Start

1. Clone this repository.
2. Install the dependencies by running `npm install`.
3. Run `npm start` to start the development server and watch for changes.

_Note: Browsersync will automatically find an available port and open it up in your web browser._

## Project Structure

- `public/` - **Final build, for both development and production (see notes below).**
  - `assets/` - All static assets, organized by filetype.
  - `index.html` - The single static webpage that should be served.
- `src/` - **React app source files.**
  - `assets/` - Assets like images, SCSS, etc, organized by filetype.
  - `components/` - React components.
  - `index.js` - Entry point for Webpack to compile final build.
  - `index.html` - HTML template for single page.
- `server.js` - Runs the development server.

## Terminal Commands

### Primary Commands

These are the commands you'll use the most.

- `npm start` - Start development server, watch for changes & continuously build into the `/public` directory.
- `npm run build:prod` - Re-build the `/public` directory for production.

### Additional Commands

Here are some additional commands that come in handy.

- `npm run watch` - Watch for changes & continuously build into the `/public` directory.
- `npm run build` - Build development files once.
- `npm run server` - Run the development server.
- `npm run format` - Apply stylistic code formatting to project files.
- `npm run js-lint` - Check for JavaScript linting errors.
- `npm run js-lint:fix` - Allow JavaScript linter to fix what it can, automatically.
- `npm run report` - Generates `./report.txt` with stats about module use from Webpack build.

_Note: `npm start` essentially encompasses the first three commands above. But when debugging issues, it may be helpful to know you can run those commands separately._

_Note: If you're wanting to test the production build, you'll want to run `npm run build:prod` and then `npm run server`. You do NOT want to run `npm start` because that would re-build your files in development mode before starting the server._
