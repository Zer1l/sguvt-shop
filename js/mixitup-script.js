var mixer = mixitup('.main__cards');

var categoryFilter = document.querySelector('.main__sorting');

categoryFilter.addEventListener('change', function () {
  var selectedCategory = categoryFilter.value;
  mixer.filter(selectedCategory);
});
