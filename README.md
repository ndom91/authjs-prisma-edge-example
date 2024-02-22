<p align="center">
   <br/>
   <a href="https://authjs.dev" target="_blank"><img width="150px" src="https://authjs.dev/img/logo/logo-sm.png" /></a>
   <h3 align="center">Auth.js + Prisma Edge Example App</h3>
   <p align="center">
   Open Source. Full Stack. Own Your Data.
   </p>
   <p align="center" style="align: center;">
      <a href="https://npm.im/next-auth">
        <img alt="npm" src="https://img.shields.io/npm/v/next-auth?color=green&label=next-auth">
      </a>
      <a href="https://bundlephobia.com/result?p=next-auth-example">
        <img src="https://img.shields.io/bundlephobia/minzip/next-auth?label=next-auth" alt="Bundle Size"/>
      </a>
      <a href="https://www.npmtrends.com/next-auth">
        <img src="https://img.shields.io/npm/dm/next-auth?label=next-auth%20downloads" alt="Downloads" />
      </a>
      <a href="https://npm.im/next-auth">
        <img src="https://img.shields.io/badge/npm-TypeScript-blue" alt="TypeScript" />
      </a>
   </p>
</p>

## Overview

This is an example application showing Auth.js (`5.0.0-beta.13`) and Prisma (`5.10.0-dev.10`) working together in edge runtimes, like Vercel's middleware.

## Getting Started

### 1. Clone the repository and install dependencies

```bash
git clone https://github.com/ndom91/authjs-prisma-edge-example.git
cd authjs-prisma-edge-example
pnpm install
```

### 2. Configure your local environment

Copy the .env.local.example file in this directory to .env.local (which will be ignored by Git):

```bash
cp .env.example .env
```

Make sure to add an `AUTH_SECRET` as well as your Prisma database connection string. Also don't forget to add environment variables to setup any of the [supported providers](https://authjs.dev/reference/core/providers) as well.

### 3. Database

For this example, we'll of course need a Prisma Edge compatible database. These include:

- **PlanetScale** serverless driver with `@prisma/adapter-planetscale`
- **Neon** serverless driver with `@prisma/adapter-neon`
- **Turso** with `@prisma/adapter-libsql`

See their documentation for more details.

### 4. Start the application

To run your site locally, use:

```bash
pnpm dev
```

## License

MIT
