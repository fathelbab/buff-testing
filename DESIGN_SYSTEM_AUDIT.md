# Design System Audit — Buffalo Burger Mockup

## Defined Theme Tokens (`App.css:4-14`)

| Token | Hex Value | Purpose |
|---|---|---|
| `surface-brand` | `#FF5F00` | Primary brand orange |
| `surface-light` | `#FFDFCC` | Light orange tint (Promos bg) |
| `surface-dark` | `#0A0A0A` | Near-black surface |
| `page` | `#F7F7F7` | Page background |
| `action-hover` | `#CC4C00` | Brand hover state (dark orange) |
| `action-hover-light` | `#FFEFE5` | Light hover tint |
| `page-dark` | `#1A1A1A` | Dark section background (Footer) |
| `headings-light` | `#FAFAFA` | Light text on dark backgrounds |
| `font-sans` | `"Inter", ...` | Typography stack |

---

## 1. Hardcoded Colors NOT Using Theme Tokens

### 1.1 Colors that match existing tokens but use raw hex/Tailwind instead

| Hardcoded | Used In | Should Be |
|---|---|---|
| `#FAFAFA` | AddressBox:7, FanFavorites:27,49, Promos:30,44, App.css:50 | `headings-light` (identical value) |
| `#1A1A1A` | Promos:25,40, BuffaloAppAd:40, Footer:63-65, LanguageSelect:25, App.css:69,87,148 | `page-dark` (identical value) |
| `orange-500` | Navbar:42,76, AddressBox:33, BuffaloAppAd:27 | `surface-brand` (#FF5F00) |
| `orange-700` | Navbar:42 (hover), AddressBox:33 (hover), Promos:44 (hover) | `action-hover` (#CC4C00) |
| `orange-600` | OurMenu:44,66, FanFavorites:28,50 (hover) | `action-hover` (#CC4C00) |
| `bg-surface-brand` used correctly | OurMenu:44, FanFavorites:28, Promos:44 | ✅ Correct |

### 1.2 Colors with NO theme token — need new tokens

| Hardcoded Hex | Used In | Frequency | Suggested Token Name |
|---|---|---|---|
| `#E8E8E8` | Navbar:26,31,38,62,67,72, AddressBox:17,28, OurMenu:66, FanFavorites:27,49, Promos:30, Home:21,41,55 | 15+ | `border-default` |
| `#151515` | Promos:30, BuffaloAppAd:30, Home:21,41,55 | 8+ | `text-primary` |
| `#3A3A3A` | Promos:51, BuffaloAppAd:35 | 2 | `text-secondary` |
| `#B0B0B0` | Navbar:38,72 | 2 | `border-light` |
| `#D8D8D8` | AddressBox:28 | 1 | `border-input` |
| `#F5E6D8` | OurMenu:38,60, FanFavorites:22,44 | 4 | `surface-warm` |
| `#F4F4F4` | BuffaloAppAd:25 | 1 | `surface-neutral` |
| `#898989` | Footer:58 | 1 | `text-muted` |
| `#f5f5f5` | LocationSelect:21 | 1 | `surface-input` |
| `#d9d9d9` | App.css:49,56 | 2 | `border-default` (same as #E8E8E8) |
| `#9b9b9b` | App.css:138 (swiper) | 1 | `pagination-inactive` |
| `#f3f3f3` | App.css:92 (react-select) | 1 | `surface-hover` |

---

## 2. Inconsistent Brand Color Usage

The brand color `#FF5F00` (`surface-brand`) is applied via **three different methods**:

1. **`bg-surface-brand`** (correct) — OurMenu:44, FanFavorites:28, Promos:44
2. **`bg-orange-500`** (wrong) — Navbar:42,76, AddressBox:33, BuffaloAppAd:27
3. **`hover:bg-orange-700`** (wrong) — Navbar:42, AddressBox:33, Promos:44
4. **`hover:bg-orange-600`** (wrong) — OurMenu:44, FanFavorites:28

`orange-500` (#f97316) ≠ `surface-brand` (#FF5F00). These are **visually different oranges**. The brand color is not Tailwind's orange-500.

---

## 3. Duplicated Patterns (DRY Violations)

### 3.1 Section Heading — repeated 3x in Home.tsx
Lines 19-29, 39-49, 54-64 — identical outline + label pattern.

### 3.2 Mobile Scroll + Desktop Grid — repeated 4x
OurMenu, FanFavorites, Promos, and Footer all duplicate JSX for mobile (flex scroll) vs desktop (grid).

### 3.3 Button Variants — 8+ inline button styles
No two buttons share the same className string despite many being visually identical.

### 3.4 App Store Download Badges — duplicated in BuffaloAppAd + Footer

### 3.5 Scrollbar-hiding CSS — `[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden` repeated 4x

---

## 4. Semantic / Structural Issues

| Issue | Location | Detail |
|---|---|---|
| `<a href="">` | Promos:43,55 | Empty href — invalid link. Use `<button>` for actions. |
| `<div>` as button | Promos:44,57 | Clickable `<div>` inside `<a>` — use `<button>`. |
| `<h3>` for non-headings | AddressBox:38,39 | "or" and "LOGIN" are not h3 content. |
| `<nav>` used correctly | Navbar:15 | ✅ |
| `<main>` used correctly | App.tsx:6 | ✅ |
| Missing `alt` text | Footer:15 | Logo image missing `alt`. |
| Missing `aria-expanded` | Navbar:48-53 | Hamburger button has no aria attributes. |

---

## 5. CSS Issues in App.css

### 5.1 `!important` overuse — 15+ instances (lines 48-57, 61, 68-73, 87, 92, 141)
All react-select overrides use `!important`. Should use `@layer` or higher specificity.

### 5.2 External font CDN (line 1)
`@import url('https://rsms.me/inter/inter.css')` — runtime network dependency.

### 5.3 Box-sizing reset (lines 36-40)
Unnecessary — Tailwind v4 already includes this reset.

### 5.4 Body background uses CSS var directly (line 43)
Should use Tailwind class `bg-page` (which already exists as a token).

---

## 6. Dead Code & Unused Dependencies

| Item | Location |
|---|---|
| Empty `index.css` | `src/index.css` — all content commented out |
| Empty `Button.tsx` | `src/components/Button.tsx` — stub |
| Backup CSS files | `src/App - backup.css`, `src/index - backup.css` |
| `@fortawesome/*` | package.json — installed but never imported |
| Import of `.tsx` extension | `main.tsx:4` — should omit extension |
| Swiper coverflow CSS | `Carousel.tsx:8` — imported but effect-coverflow not used |

---

## 7. Accessibility Gaps

| Issue | Location |
|---|---|
| No `aria-expanded` on hamburger | `Navbar.tsx:48` |
| No `aria-label` on icon-only buttons | `Navbar.tsx:26,31` |
| `color` prop on icon components | `Footer.tsx:63-65` — should use className for theming |
| No `role="banner"` / `role="contentinfo"` | Navbar, Footer |
| Input has no `label` | `AddressBox.tsx:27` |
| No focus management for mobile menu | `Navbar.tsx:57` |

---

## Fix Plan (Priority Order)

1. **Add missing theme tokens** to `App.css @theme` block
2. **Create `@utility hide-scrollbar`** in App.css
3. **Create `SectionHeading` component** — replace 3 instances in Home.tsx
4. **Implement `Button` component** with variants (`primary`, `secondary`, `outlined`, `ghost`)
5. **Replace all hardcoded hex** with theme tokens across all components
6. **Replace `orange-500`/`orange-600`/`orange-700`** with `surface-brand`/`action-hover`
7. **Create `AppStoreButtons` shared component**
8. **Clean up dead code** (backup files, empty imports, unused deps)
9. **Fix accessibility** (aria attributes, semantic HTML)
10. **Remove `!important`** from react-select CSS using `@layer`
