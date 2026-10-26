// Bean & Byte Café: JavaScript for the Menu page

// TODO 6: Find the filter buttons and all the menu items. querySelectorAll gives you a list.
//   const filterButtons = document.querySelectorAll('#filters button');
//   const menuItems = document.querySelectorAll('.menu-item');
// Check with console.log(menuItems): you should see 6 items.


// TODO 7: Write a function showCategory(category) that shows only the items in that category.
//   Go through every item with menuItems.forEach(item => { ... });
//   If category === 'all' OR item.dataset.category === category:
//     item.classList.remove('d-none');     (d-none is Bootstrap's "display: none")
//   otherwise:
//     item.classList.add('d-none');
// Test it in the Console: type showCategory('food') and press Enter.


// TODO 8: When a filter button is clicked, show its category.
//   filterButtons.forEach(button => {
//     button.addEventListener('click', () => {
//       1. Remove 'active' from every button, then add it to this button
//       2. showCategory(button.dataset.filter);
//     });
//   });
