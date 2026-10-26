# Class 4: JavaScript

**This class the café website starts to react:** a greeting that fits the time of day, a menu you can filter, and an order form that adds up your total as you choose.

| Part | Files | You'll practise |
|---|---|---|
| A | `js/home.js` (+ one line in `index.html`) | Linking a script, `console.log`, variables, `if` / `else`, changing the page |
| B | `js/menu.js` (+ one line in `menu.html`) | Events, functions, lists and loops, `data-` attributes |
| C | `js/order.js` (+ one line in `order.html`) | Reading a form, numbers, a live total, your own form checks |

The HTML and CSS are ready. The ids and `data-` attributes you need are already in the pages, so today is all JavaScript.

## Before you start

1. **Get this class's files:** on GitHub, open your fork → **Sync fork → Update branch**. Then in VS Code: Source Control → **⋯** → **Pull**.
2. Open `class-04/starter/` in the sidebar. New: `js/home.js`, `js/menu.js` and `js/order.js`, full of TODOs.
3. Right-click `index.html` → **Open with Live Server**.
4. **Open the Console and keep it open:** **F12** (Windows) or **Cmd+Option+J** (Mac) → **Console** tab. Your messages and every error appear here.

## Part A: the Home page (`js/home.js`)

Do **TODO 1** in `index.html`, then **TODO 2 to TODO 4** in `js/home.js`.

```js
const cafe = 'Bean & Byte Café';   // const: can't change. Text goes in quotes.
let total = 0;                     // let: can change later
console.log('total is', total);    // writes to the Console

if (hour < 12) {
  // runs only when the condition is true
} else if (hour < 17) {
  // ...
} else {
  // ...
}

const greeting = document.querySelector('#greeting');   // find an element (CSS selector!)
greeting.textContent = 'Good morning!';                   // change its text
badge.classList.add('text-bg-success');                   // add a class
```

- Compare with `<` `>` `<=` `>=` and `===` (equal). Combine with `&&` (and) and `||` (or).
- `new Date().getHours()` is the hour now (0–23); `.getDay()` is the day (0 = Sunday).
- **Test other times:** change `const hour = now.getHours();` to `const hour = 9;` for a moment, then change it back.

## Part B: filter the menu (`js/menu.js`)

Do **TODO 5** in `menu.html`, then **TODO 6 to TODO 8** in `js/menu.js`.

```js
const items = document.querySelectorAll('.menu-item');   // EVERY match, as a list

items.forEach(item => {               // a loop: runs once for each item
  console.log(item.dataset.category); // reads data-category="..."
});

function showCategory(category) {     // a function: named steps
  // ...
}
showCategory('food');                 // call (run) it

button.addEventListener('click', () => {
  // runs every time the button is clicked
});
```

- Already in `menu.html`: each button has `data-filter="all"`, `"drinks"` or `"food"`. Each card's column has `class="menu-item"` and `data-category`.
- `d-none` is Bootstrap's class for "hide this". Adding it hides an item; removing it shows it again.
- **Test your function before wiring up the buttons:** type `showCategory('food')` in the Console and press Enter.

## Part C: the live total (`js/order.js`)

Do **TODO 9** in `order.html`, then **TODO 10 to TODO 14** in `js/order.js`.

- Everything you read from a form is **text**: `'2' + 1` is `'21'`! Use `Number(input.value)` first.
- `total.toFixed(2)` shows two decimal places: `13.5` → `"13.50"`.
- The prices are already in the HTML as `data-price` on every item, size and extra.
- `form.addEventListener('input', updateTotal)` runs `updateTotal` whenever anything in the form changes. Note: no `()` after the name, because you're *handing over* the function, not running it now.
- `input.setCustomValidity('message')` adds your own rule: the form won't send, and the browser shows your message. `setCustomValidity('')` clears it.
- `event.preventDefault()` in a `submit` listener stops the form from being sent.

**Test it:** Latte + Large + Extra shot, quantity 2 = **RM 30.00**.

## When it doesn't work

| The Console says | It means | Check |
|---|---|---|
| `Cannot read properties of null` | `querySelector` found nothing | The selector's spelling, `#` vs `.`, and that the `<script>` is at the end of `<body>` |
| `… is not defined` | A name that doesn't exist | Spelling and capitals (`textContent`, not `textcontent`) |
| `Unexpected token` / `missing )` | Brackets or quotes don't match | Every `(` `{` `'` needs its partner |
| `Assignment to constant variable` | You changed a `const` | Use `let` |
| *Nothing at all* | The script isn't running | Is it linked? Add `console.log('here')` lines to see how far it gets |

The error names the **file and line**, like `order.js:14`. Click it to jump there. Fix the **first** error first.

## Check your work

- [ ] No red errors in the Console on any page
- [ ] Home: the greeting and the Open/Closed badge change (try a few hours)
- [ ] Menu: All / Drinks / Food show the right cards, and the clicked button looks active
- [ ] Order: the total updates whenever you change anything; Clear form sets it back to RM 0.00
- [ ] Order: a Sunday pickup date is refused; Cancel in the "Place this order?" box stops the order
- [ ] You submitted your work (see below)

## How to submit

Same steps as before: **Source Control → message → Commit → Sync Changes**, check your files on GitHub, then paste the link to your `class-04` folder into the **class Google Form**:
`https://github.com/YOUR-USERNAME/web-programming-lab-2026/tree/main/class-04`

## Stretch challenges (finished early?)

1. **Search the menu:** add `<input type="search" id="search" class="form-control" placeholder="Search the menu">` above the cards. On its `input` event, hide every card whose title doesn't include the text typed: `title.toLowerCase().includes(text.toLowerCase())`.
2. **Order from the menu:** link each card's Order button to `order.html?item=latte` (and so on). In `order.js`, read it with `new URLSearchParams(location.search).get('item')`, set `itemSelect.value` to it, and call `updateTotal()`.
3. **Count the cups:** show "3 items" next to the filter buttons, updated on every click. (Hint: count the items without `d-none`.)
4. **Food has no size:** when a food item is chosen, disable the size radio buttons (`radio.disabled = true`) and leave the size out of the total.
5. **Dark mode:** add a 🌙 button to the navbar that toggles a `dark` class on `<body>`, plus a few `.dark` rules in `style.css`. Remember the choice with `localStorage.setItem('theme', 'dark')`.
6. **Countdown:** on the Home page, show "We close in 2 hours 15 minutes" (or "We open at 8 am") using the current time.
