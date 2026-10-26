// Bean & Byte Café: JavaScript for the Order page

// TODO 10: Find the four elements you need, each with document.querySelector:
//   form          → '#order-form'
//   itemSelect    → '#item'
//   quantityInput → '#quantity'
//   totalOutput   → '#total'
// Use const for each, e.g.  const form = document.querySelector('#order-form');


// TODO 11: Write a function updateTotal() that works out the total and shows it.
//   1. If no item is chosen (itemSelect.value === ''): show 'RM 0.00' and return.
//   2. const itemPrice = Number(itemSelect.selectedOptions[0].dataset.price);
//   3. The chosen size is the radio button that is :checked:
//        const size = document.querySelector('input[name="size"]:checked');
//        const sizePrice = Number(size.dataset.price);
//   4. Add up the ticked extras: let extrasPrice = 0; then go through
//        document.querySelectorAll('input[name="extras"]:checked') and add each Number(extra.dataset.price)
//   5. const quantity = Number(quantityInput.value);
//      const total = (itemPrice + sizePrice + extrasPrice) * quantity;
//   6. totalOutput.textContent = 'RM ' + total.toFixed(2);     (toFixed(2) = 2 decimal places)


// TODO 12: Run updateTotal whenever anything in the form changes:
//   form.addEventListener('input', updateTotal);
// And when the form is cleared (the 'reset' event), set totalOutput's text back to 'RM 0.00'.


// TODO 13: No pickups on Sunday.
//   const dateInput = document.querySelector('#pickup_date');
//   On its 'change' event:
//     const day = new Date(dateInput.value).getDay();       // 0 = Sunday
//     if day === 0: dateInput.setCustomValidity('Sorry, we are closed on Sundays. Please pick another day.');
//                   dateInput.reportValidity();
//     otherwise:    dateInput.setCustomValidity('');        (empty means "no problem")
// setCustomValidity blocks the form, just like a required field.


// TODO 14: Ask before sending. On the form's 'submit' event (write event => { ... }):
//   const ok = confirm('Place this order? Total: ' + totalOutput.textContent);
//   if (!ok) { event.preventDefault(); }     ← stops the form from being sent
