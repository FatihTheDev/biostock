This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

Project repository: [github.com/FatihTheDev/biostock](https://github.com/FatihTheDev/biostock)

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Copy the template and fill in your values:

```bash
cp .env.example .env.local
```

The app requires:

- **MongoDB** — a connection string (`MONGO_URI`) for persisting saved ingredients and generated recipes.
- **Clerk** — publishable + secret keys for authentication, plus the sign-in/sign-up URLs.
- **TheMealDB** — base URL and API key for fetching ingredients and recipes.

Open `.env.local` and replace every placeholder with real values. See `.env.example` for descriptions of each variable. **Never commit `.env.local`** — it is gitignored and may contain secrets.

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Build the production bundle |
| `npm run start` | Serve the production build |
| `npm test` | Run the Vitest unit test suite |
| `npm run test:watch` | Run Vitest in watch mode |
| `npm run test:coverage` | Run the tests and report code coverage |

Test documentation and the coverage report: [`app/tests/docs.md`](app/tests/docs.md)

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

This project uses react-typed library, which can be installed with:

```
npm install react-typed --save
# or
yarn add react-typed
```

Link to the package: [React Typed](https://www.npmjs.com/package/react-typed)
