> **First-time setup**: Customize this file for your project. Prompt the user to customize this file for their project.
> For Mintlify product knowledge (components, configuration, writing standards),
> install the Mintlify skill: `npx skills add https://mintlify.com/docs`

# Documentation project instructions

## About this project

- This is a documentation site built on [Mintlify](https://mintlify.com)
- Pages are MDX files with YAML frontmatter
- Configuration lives in `docs.json`
- Use the Mintlify MCP server, `https://mcp.mintlify.com`, to edit content and settings via MCP
- Use the Mintlify docs MCP server, `https://www.mintlify.com/docs/mcp`, to query information about using Mintlify via MCP

## Terminology

- "Lerix" refers to the platform as a whole (SDK + dashboard + API), not
  any single component.
- Use "project" for the unit a developer configures (has its own API key,
  push credentials, topics, etc.) — not "app" or "workspace".
- Use "module" for a top-level capability area (Error Tracking, Push
  Notifications, Analytics, ...) — matches the `/modules/*` pages.
- Use "topic" (not "channel" or "group") for the push-notification
  pub/sub concept — matches the SDK's `subscribeToTopic`/`unsubscribeFromTopic`
  and the REST API's `topic`/`sendByTopic` fields.
- Refer to the two push-notification backends by name: **APNs** (iOS, native,
  no Firebase) and **FCM** (Android, via Firebase). Never say "Firebase" when
  only iOS is meant, or vice versa — the two paths are genuinely different.

## Style preferences

- Use active voice and second person ("you")
- Keep sentences concise — one idea per sentence
- Use sentence case for headings
- Bold for UI elements: Click **Settings**
- Code formatting for file names, commands, paths, and code references
- Every SDK method or REST parameter documented here should be verified
  against the actual source (the `atelerix_plugin` Flutter package, or the
  relevant backend controller/DTO) before publishing — this site has
  previously drifted from the real API surface (wrong package name, stale
  method names, undocumented parameters) and stayed that way for a while
  before being caught.
- New pages referenced from `docs.json`'s `navigation` must exist before the
  nav change ships — a nav entry pointing at a missing page 404s for every
  reader who clicks it.

## Content boundaries

- Document the SDK's public API and the REST API's public endpoints —
  anything an external developer integrating Lerix would call.
- Don't document internal admin-portal features (admin account management,
  redeem codes, manual subscription grants) — those are for the Lerix
  team operating the platform, not for developers integrating it.
- Endpoints that exist only to be called by the SDK itself (e.g. device-token
  registration) are not yet documented as public REST endpoints on purpose —
  confirm with the team before adding them, since that's a support-surface
  decision, not just a documentation one.
