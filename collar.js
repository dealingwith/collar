function collarTrello() {
  if ($('.collar-button').length) return;

  $('.list-header-extras').prepend('<span class="collar-button dark-hover"></span>');

  $('.collar-button').click(function() {
    $(this).closest('.list-wrapper').toggleClass('collared');
  });
}

function keepCollars() {
  const targetNode = document.getElementById('board');
  if (!targetNode) {
    // The node does not exist yet. Wait 500ms and try again.
    window.setTimeout(keepCollars, 500);
    return;
  }
  const observer = new MutationObserver(collarTrello);
  observer.observe(targetNode, {
    childList: true
  });
}

$(function () {
  collarTrello();
  keepCollars();
});
