// Bean & Byte Café: JavaScript for the Home page
// Open the Console to see messages and errors: F12 (Windows) or Cmd+Option+J (Mac).

// TODO 2: Check that this file is connected. Write:
//   console.log('home.js is running');
// Save, refresh the page and look in the Console. No message? Check TODO 1 in index.html.


// TODO 3: Greet visitors depending on the time of day.
//   1. const now = new Date();
//      const hour = now.getHours();        // a number from 0 to 23
//   2. const greeting = document.querySelector('#greeting');
//   3. if hour < 12       → greeting.textContent = 'Good morning! Breakfast and fresh coffee are ready.';
//      else if hour < 17  → 'Good afternoon! Time for a study break.'
//      else               → 'Good evening! Grab a coffee before we close.'


// TODO 4: Open now or closed? Fill in the empty badge next to "Opening hours".
//   1. const day = now.getDay();           // 0 = Sunday, 1 = Monday ... 6 = Saturday
//      const openStatus = document.querySelector('#open-status');
//      let isOpen = false;
//   2. Monday to Friday (day >= 1 && day <= 5): isOpen = hour >= 8 && hour < 20;
//      Saturday (day === 6):                    isOpen = hour >= 9 && hour < 18;
//      Sunday: closed, so isOpen stays false.
//   3. If isOpen: openStatus.textContent = 'Open now' and openStatus.classList.add('text-bg-success');
//      otherwise: 'Closed now' and the class 'text-bg-secondary'.
