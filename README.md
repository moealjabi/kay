<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="packages/core/admin/admin/src/assets/images/logo-kayona.svg">
    <source media="(prefers-color-scheme: light)" srcset="packages/core/admin/admin/src/assets/images/logo-kayona.svg">
    <img alt="Kayona" src="packages/core/admin/admin/src/assets/images/logo-kayona.svg" height="80">
  </picture>
</p>

<h1 align="center">Kayona</h1>
<p align="center">An open-source headless CMS platform — forked from Strapi, built for speed.</p>

---

## 🚀 What is Kayona?

Kayona is a rebranded, enhanced fork of [Strapi](https://github.com/strapi/strapi) — the leading open-source headless CMS. It provides a powerful admin panel, content management API, and an extensible plugin system for building modern websites and applications.

### Key Features

- **Headless CMS** — Manage content with a beautiful admin panel, deliver via REST or GraphQL
- **Plugin Ecosystem** — Extend with custom plugins built on the same architecture
- **Media Library** — Upload, manage, and optimize images and files
- **Role-Based Access Control** — Granular permissions for team collaboration
- **Internationalization** — Multi-language content out of the box
- **Content Versioning** — Draft, publish, and schedule content
- **Built on Koa** — Fast, modern Node.js HTTP server

---

## 📦 Getting Started

```bash
# Create a new Kayona project
npx create-kayona-app my-project

# Start development server
cd my-project
npm run develop
```

---

## 🛠 Development

```bash
# Clone the repository
git clone https://github.com/moealjabi/kay.git
cd kay

# Install dependencies
yarn install

# Setup and build
yarn setup

# Start dev sandbox
cd examples/getstarted
yarn develop
```

---

## 🧪 Testing

```bash
# Unit tests
yarn test:unit

# Frontend tests
yarn test:front

# API integration tests
yarn test:api

# TypeScript checks
yarn test:ts
```

---

## 🤝 License

Kayona is based on Strapi, which is licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

## 🙏 Credits

Kayona is a fork of [Strapi](https://github.com/strapi/strapi) — we're grateful for their amazing work on the open-source headless CMS ecosystem.