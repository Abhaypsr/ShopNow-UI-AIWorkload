# ShopNow UI AI Workload

A modern React + TypeScript shopping experience with product discovery, cart management, filtering, and an integrated chatbot assistant.

## Overview

ShopNow is a single-page storefront built with React and styled-components. The app displays products, allows users to filter and add items to the cart, and includes a chat overlay that connects to a local chat API for guided recommendations.

## Features

- Product grid with responsive layout
- Category and price filtering
- Cart drawer with add/remove functionality
- Chatbot overlay for interactive assistance
- GitHub corner and star button UI elements
- Local product catalog sourced from `src/static/json/products.json`

## Tech Stack

- React 18
- TypeScript
- styled-components
- Axios
- Firebase Hosting (deploy script)
- React Scripts
- Jest + React Testing Library

## Getting Started

### Prerequisites

- Node.js 14.17.3 (matching `package.json` engines)
- npm
- Optional: Firebase CLI for deploys

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm start
```

Open `http://localhost:3000` to view the app.

### Run tests

```bash
npm test
```

Watch mode:

```bash
npm run test:watch
```

Generate coverage:

```bash
npm run test:coverage
```

### Build for production

```bash
npm run build
```

### Deploy

```bash
npm run deploy
```

> Firebase deploy requires a configured Firebase project and valid `firebase.json` setup.

## Chatbot Assistant

The chatbot uses a local API endpoint at `http://127.0.0.1:8000/chat`.
If no backend is available, the chat window will display an error message.

## Project Structure

- `src/components` — UI components for App, Cart, Products, Filter, Chatbot, Loader, GitHub links
- `src/contexts` — React context providers for products and cart state
- `src/services` — product data loading and API helpers
- `src/static/json/products.json` — seed product data
- `src/utils` — shared utilities like price formatting

## Notes

- The chatbot is implemented in `src/components/Chatbot/Chatbot.tsx`
- Product fetching is handled through `useProducts` and a local JSON data source
- Cart state is managed with context hooks in `src/contexts/cart-context`

## Contributing

Contributions are welcome. Open issues or submit pull requests for bug fixes, improvements, or feature additions.

## License

This repository does not currently include a license file.
