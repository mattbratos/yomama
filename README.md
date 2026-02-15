# 👩 yomama

> Your mom. $10/hr. From your terminal.

She said she was "working late." She is. On our platform.

```bash
$ npx yomama rent --type "emotional support" --hours 2

✓ matched: Linda M. ★4.2 · 11,847 bookings · "no kissing"
✓ rate: $10/hr · eta: 4 min · she's bringing leftovers
✓ session active. don't tell your father.
```

## 🔥 Services

- **"Emotional Support"** — $10/hr. Tissues not included.
- **Home Cooked Meals** — She judges your apartment for free.
- **Code Reviews** — "I didn't raise you to write code like this."
- **Guilt Trips** — She sacrificed everything. You can't even ship a PR.
- **The Girlfriend Experience** — Pinches your cheeks. Asks about grandchildren. $15/hr.
- **Enterprise** — She attends your standups. Calls your CEO "sweetie."

## 💸 Pricing

| Tier | Price | Vibe |
|------|-------|------|
| Quickie | $10/hr | In and out. No cuddling. |
| Full Experience | $25/hr | She stays. She cooks. She has opinions. |
| Mama-as-a-Service | $420/mo | She moves in. Good luck. |

## ❓ FAQ

**Is this legal?** We have lawyers and they said "technically."

**Cancellation policy?** She'll say "it's fine." It's not fine.

## 🏗️ Monorepo Structure

Powered by [Turborepo](https://turbo.build/) + pnpm workspaces.

```
apps/
  web/   — Next.js landing page (@yomama/web)
  cli/   — CLI tool published as "yomama" on npm
packages/  — shared packages (empty for now)
```

## 🚀 Run locally

```bash
pnpm install
pnpm build
```

### Run the web app

```bash
pnpm --filter @yomama/web dev
```

Open `http://localhost:3000` and witness the future of maternal infrastructure.

### Run the CLI

```bash
node apps/cli/dist/index.js --help
```

## Scripts

| Command       | Description                        |
| ------------- | ---------------------------------- |
| `pnpm build`  | Build all apps and packages        |
| `pnpm dev`    | Start all apps in dev mode         |
| `pnpm lint`   | Lint all apps and packages         |
| `pnpm clean`  | Remove build artifacts             |

## 📜 License

MIT — She loves you unconditionally. Her rates are not.

---

*Not a Brothel™*

*PS: this entire thing was built at 3 AM to test [openclaw.ai](https://openclaw.ai) cool shit 😂
