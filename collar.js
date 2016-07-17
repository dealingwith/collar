$(function () {
  new MutationObserver(function (mutations) { collarTrello(); }).observe(document.querySelector('body'), { attributes: true });
  collarTrello();
});

function collarTrello() {
  if ($('.collar-button').length) return;

  $('.list-header-extras').prepend('<span class="collar-button dark-hover"></span>');

  $('.collar-button').click(function() {
    $(this).closest('.list-wrapper').toggleClass('collared');
  });
}
