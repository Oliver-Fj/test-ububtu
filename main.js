document.addEventListener("DOMContentLoaded", () => {
    
    const navItems = document.querySelectorAll('.nav-item');
   
    const toggleSiblingClass = (items, index, offset, className, add) => {
      const sibling = items[index + offset];
      if (sibling) {
        sibling.classList.toggle(className, add);
      }
    };
    // Event listeners to toggle classes on hover
    navItems.forEach((item, index) => {
      item.addEventListener('mouseenter', () => {
        item.classList.add('hover'); 
        // Toggle classes for siblings
        toggleSiblingClass(navItems, index, -1, 'sibling-close', true);
        toggleSiblingClass(navItems, index, 1, 'sibling-close', true); 
        toggleSiblingClass(navItems, index, -2, 'sibling-far', true);   
        toggleSiblingClass(navItems, index, 2, 'sibling-far', true);    
      });
      item.addEventListener('mouseleave', () => {
        item.classList.remove('hover'); // Remove .hover from current item
        // Toggle classes for siblings
        toggleSiblingClass(navItems, index, -1, 'sibling-close', false); 
        toggleSiblingClass(navItems, index, 1, 'sibling-close', false);  
        toggleSiblingClass(navItems, index, -2, 'sibling-far', false);   
        toggleSiblingClass(navItems, index, 2, 'sibling-far', false);    
      });
    });
  });