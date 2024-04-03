<p align="center">
   <br/>
   <a href="https://authjs.dev" target="_blank"><img width="150px" src="https://authjs.dev/img/logo/logo-sm.png" /></a>
   <h3 align="center">Auth.js + Prisma Edge Example App</h3>
   <p align="center">
   Open Source. Full Stack. Own Your Data.
   </p>
   <p align="center" style="align: center;">
     <img align="center" alt="npm" src="https://img.shields.io/npm/v/next-auth/beta?label=next-auth&style=for-the-badge&color=black&labelColor=black">
     <img align="center" src="https://img.shields.io/bundlephobia/minzip/next-auth/next?label=next-auth&style=for-the-badge&color=black&labelColor=black" alt="Bundle Size"/>
     <img align="center" src="https://img.shields.io/badge/npm-TypeScript-blue?style=for-the-badge&color=black&labelColor=black" alt="TypeScript" />
   </p>
</p>

## 🧭 Overview

This is an example application showing [Auth.js](https://authjs.dev) (`next-auth@5.0.0-beta.15`) and [Prisma](https://prisma.io) (`@prisma/client@5.12.0`) working together in edge runtimes, like Vercel's middleware or Cloudflare Workers.

This had previously only been possible with significant workarounds and limitations. As of `@prisma/client@5.9.1` Prisma began making changes to their client, for example, to error out at query-time, not instantiation. So you could begin using Prisma with `next-auth` in Edge runtimes, as long as you didn't actually execute any queries on the edge. This implied using the Auth.js setting `session: { strategy: 'jwt' }`, as the `strategy: 'database'` didn't work because we couldn't update the expiry time of a database-based session in the `middleware` handler.

Prisma has now rolled out edge-compatible clients and adapters which communicate via HTTP, making them much more straightforward to run under any JavaScript runtime. You can check out their [edge deployment](https://www.prisma.io/docs/orm/prisma-client/deployment/edge/overview#which-database-drivers-are-edge-compatible) page for a current list of supported adapters and platforms.

As this example shows, however, using Prisma + Auth.js with an Edge-compatible database provider and adapter like Neon (Vercel Postgres), PlanetScale or Turso is beginning to become much more straightforward!

## 🚀 Getting Started

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

Make sure to fill out the `AUTH_SECRET` env var as well as your Prisma database connection string(s). Also, don't forget to add environment variables to configure any of the [supported providers](https://authjs.dev/reference/core/providers) for Auth.js login.

### 3. Database

This example is configured to use a [Neon Postgres](https://neon.tech) database ([Vercel Postgres](https://vercel.com/storage/postgres) also works). Any Prisma Edge compatible database driver should work with a bit of tweaking though, these currently include:

- **PlanetScale** serverless driver with `@prisma/adapter-planetscale`
- **Neon** serverless driver with `@prisma/adapter-neon`
- **Turso** with `@prisma/adapter-libsql`
- **Cloudflare D1** with `@prisma/adapter-d1`
- **PostgreSQL** with `@prisma/adapter-pg`

See Prisma's Edge compatible driver [documentation](https://www.prisma.io/docs/orm/prisma-client/deployment/edge/overview) for more details.

### 4. Start the application

To run your site locally, use:

```bash
pnpm dev
```

## 📝 License

MIT
