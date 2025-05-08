
   
    function showCategory(category) {
      
      const categories = document.querySelectorAll('.category-content');
      categories.forEach(function (category) {
        category.classList.remove('active-category');
      });

      
      const activeCategory = document.getElementById(category);
      activeCategory.classList.add('active-category');

      const menuItems = document.querySelectorAll('.menu-item');
      menuItems.forEach(function (item) {
        item.classList.remove('active');
      });
      document.querySelector(`.menu-item[href="#${category}"]`).classList.add('active');
    }
