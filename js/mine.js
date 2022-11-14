document.addEventListener('DOMContentLoaded', function() {
  var search = document.getElementById('search');
  search.addEventListener('click', function() {
      var inputText = document.getElementById("searchInput").value;
      var SearchText = 'https://www.google.com/search?q=' + encodeURIComponent(inputText);
      window.open(SearchText, '_blank');
  });
});


$(document).on('click', '.repeat', function (e) {
  e.preventDefault();
  $('.repeatable').parent('div.parent').append($('.parent').children('div:first').html());
});


