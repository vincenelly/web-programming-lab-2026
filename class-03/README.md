# Class 3: CSS and Bootstrap

**This class the café website gets its look:** colours, fonts, boxes and a layout that works on phones.

| Part | Files | You'll practise |
|---|---|---|
| A | `css/style.css` (+ one line in `index.html`) | **CSS**: rules, selectors, colours, fonts, the box model, Flexbox |
| B | `index.html` (+ `css/style.css`) | **Bootstrap**: the grid, the navbar, buttons, utility classes |
| C | `menu.html`, `order.html` (+ `css/style.css`) | **Bootstrap** cards and forms |

The HTML content stays the same as Class 2. CSS only changes how it looks.

## Before you start

1. **Get this class's files:** on GitHub, open your fork → **Sync fork → Update branch**. Then in VS Code: Source Control → **⋯** → **Pull**.
2. Open `class-03/starter/` in the sidebar. New: a `css/` folder (your `style.css`, plus a copy of Bootstrap) and a `js/` folder.
3. Right-click `index.html` → **Open with Live Server**.

## Part A: your own CSS (`css/style.css`)

Do **TODO 1** in `index.html`, then **TODO 2 to TODO 7** in `css/style.css`.

```css
selector {
  property: value;
}
```

- **Selectors:** `p` = every `<p>` · `.box` = everything with `class="box"` · `#hours` = the one element with `id="hours"` · `nav a` = every `<a>` inside a `<nav>`
- **The box model:** `padding` = space inside the border · `border` · `margin` = space outside
- **Flexbox:** `display: flex` on the parent puts its children in a row. `justify-content` spreads them along the row, `align-items` lines them up across it.
- **Which rule wins?** An id beats a class, and a class beats an element. When two rules are equally strong, the one that comes **last** wins.

**Nothing changes?** Right-click the element → **Inspect**. If your rule isn't listed, check the `<link>` path and the spelling of the selector. If it's ~~crossed out~~, another rule wins.

## Part B: Bootstrap on the Home page (`index.html`)

Work through **TODO 8 to TODO 13**.

**TODO 8:** put this in the `<head>`, **above** your `style.css` link, so your rules win:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
```

…and this just before `</body>` (it makes the phone menu button work):

```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
```

> `integrity` is a fingerprint of the file: the browser refuses it if someone changed it.
> **No internet?** Use the copies in your starter instead: `href="css/bootstrap.min.css"` and `src="js/bootstrap.bundle.min.js"` (without `integrity` and `crossorigin`).

**TODO 9:** replace the whole `<header>` with this navbar, then change `bg-dark` to `bg-espresso` (your own class, TODO 11):

```html
<header>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand d-flex align-items-center gap-2" href="index.html">
        <img src="images/logo.svg" alt="" width="40" height="40">
        Bean &amp; Byte Café
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-menu" aria-controls="main-menu" aria-expanded="false" aria-label="Show the menu">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="main-menu">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link active" aria-current="page" href="index.html">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="menu.html">Menu</a></li>
          <li class="nav-item"><a class="nav-link" href="order.html">Order</a></li>
        </ul>
      </div>
    </div>
  </nav>
</header>
```

(The logo has `alt=""` because the café's name is written right next to it. A screen reader doesn't need to read it twice.)

**The grid:** `container` → `row` → columns. A row has **12** columns. `col-md-6` = half the width from **md** (768px, tablets) and up; full width on phones.

| Breakpoint | | Screen width |
|---|---|---|
| (none) | `col-12` | all sizes, phones first |
| `sm` | `col-sm-6` | ≥ 576px |
| `md` | `col-md-6` | ≥ 768px |
| `lg` | `col-lg-4` | ≥ 992px |

**Useful classes:** `text-center` · `mt-3` (margin-top) · `p-4` (padding) · `mb-0` · `rounded` · `img-fluid` (an image that shrinks to fit) · `btn btn-…` · `lead` (a bigger intro paragraph)

**Check it on a phone:** DevTools phone view: **Ctrl+Shift+M** (Windows) or **Cmd+Shift+M** (Mac). The two boxes should stack, and the menu should fold into ☰.

## Part C: the Menu and Order pages

Work through **TODO 14 to TODO 20** in `menu.html`, `css/style.css` and `order.html`.

- Every page needs the same three things: the Bootstrap `<link>`, the navbar (with its own page marked `active`) and the `<script>`. Copy them from your `index.html`.
- **Cards:** `card` → `card-img-top`, `card-body` (`card-title`, `card-text`) and `card-footer`. Each card sits in a column: `col-12 col-sm-6 col-lg-4` = 1 per row on phones, 2 on tablets, 3 on laptops.
- **Forms:** each field is a `<div class="mb-3">` with a `form-label` and a `form-control` (`form-select` for a dropdown). Radios and checkboxes: `form-check`, `form-check-input` and `form-check-label`.
- Bootstrap only changes the look. Everything from Class 2 still matters: `label for` = `input id`, the `name` attribute, `required`.

## Check your work

- [ ] All 3 pages: cream background, brown serif headings, white boxes and the footer bar
- [ ] The navbar is on every page, with the current page marked active
- [ ] Opening hours: the day on the left, the time on the right
- [ ] Phone view: the boxes and cards stack, and ☰ opens the menu
- [ ] Menu: 6 cards (3 drinks, 3 food) with photos and prices; the old table is gone
- [ ] Order: the form still sends every field (check the address bar after **Place order**)
- [ ] You submitted your work (see below)

## How to submit

Same steps as before: **Source Control → message → Commit → Sync Changes**, check your files on GitHub, then paste the link to your `class-03` folder into the **class Google Form**:
`https://github.com/YOUR-USERNAME/web-programming-lab-2026/tree/main/class-03`

## Stretch challenges (finished early?)

1. **Hover effect:** make the menu cards lift when you point at them: `.card:hover { transform: translateY(-4px); box-shadow: 0 8px 20px rgba(0, 0, 0, .15); }`. Add `transition: transform .2s;` to `.card` to make it smooth.
2. **Google Fonts:** pick a heading font at <https://fonts.google.com>, add its `<link>` to every page, and use it in your `h1, h2, h3` rule.
3. **Your own colour variable:** at the top of `style.css`, write `:root { --espresso: #3b2418; }`, then use `color: var(--espresso);` everywhere instead of the hex code. Change it once, and the whole site changes.
4. **A Bootstrap component:** add a dismissible alert ("Free Wi-Fi password at the counter!") or a carousel of the menu photos. Copy one from <https://getbootstrap.com/docs/5.3/components/alerts/>.
5. **Footer columns:** split the footer into three columns (hours, address, contact) with `row` and `col-md-4`.
6. **Validator:** check your CSS at <https://jigsaw.w3.org/css-validator/#validate_by_input> and fix any errors.
