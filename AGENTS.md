## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## This project (dorsalia-website)

Official site of 合同会社Dorsalia Arcs (Dorsalia Arcs LLC), https://dorsaliaarcs.com
Repo: github.com/dorsalia-arcs/dorsalia-website (public). Deploy: push to `main` → GitHub Actions → GitHub Pages.

- Conversation language with the owner is Japanese.
- Company facts live in `src/data/site.ts` (must match the registry). News = 1 Markdown per post in `src/content/news/` (`title`, `date`, `brand`, `draft`).
- Privacy policy text: `src/texts/privacy.md`.
- `_design/` holds the owner's mockups; it is git-ignored. The visual design comes from there — don't invent a new look.
- Repo is public: never commit secrets, and don't push unpublished news to `main` (it becomes readable immediately).
- Pushes must use the company GitHub account already set via `credential.https://github.com.username` in this repo, not a personal account. Don't change that setting.
- DNS: dorsaliaarcs.com uses the お名前メール nameservers (ns-rs1/ns-rs2.gmoserver.jp). Add A/CNAME records in that panel; never change nameservers (mail MX/SPF would break).
- Do not use the copy 「つくる、ひろげる、まだ見ぬ景色へ」.
- Subagents in `.claude/agents/`: `news-writer` (お知らせ), `design-integrator` (_design → pages), `release-checker` (run before every push to main).
- Company background and decisions are in the owner's private notes outside this repo (read-only; §3 company facts, §14-1〜14-3 site/GitHub policy). Ask the owner for them if needed.
