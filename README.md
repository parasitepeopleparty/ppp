# Parasite People Party

A React single-page satirical campaign website for **Parasite People Party**.

## Local Development

```powershell
npm install
npm run dev
```

Open `http://localhost:5173`.

## Production Build

```powershell
npm run build
```

The deployable static files are generated in `dist/`.

This project intentionally does not use Vite or another bundler. The local server is a small Node static server, and the React page runs as browser modules.

## Deploy From GitHub

This repo includes a GitHub Pages workflow at `.github/workflows/deploy.yml`.

1. Push the code to a GitHub repository.
2. In GitHub, open `Settings > Pages`.
3. Set `Build and deployment` source to `GitHub Actions`.
4. Push to the `main` branch.

The workflow installs dependencies with `npm ci`, builds the Vite app, and deploys `dist/` to GitHub Pages.
