var slidingDoors = (function() {

  var doors = document.querySelector('.doors');
  var button = document.querySelector('button');
  var main = document.querySelector('main');

  button.addEventListener('click', toggleOpen);

  var lastScrollTop = document.body.scrollTop;
  document.body.onscroll = function(event) {
    var newTop = document.body.scrollTop;
    if (newTop > lastScrollTop) {
      document.body.scrollTop = document.body.scrollHeight;
      toggleOpen(true);
    } else if (newTop < lastScrollTop) {
      document.body.scrollTop = 0;
      toggleOpen(false);
    }
    lastScrollTop = newTop;
  };


  function toggleOpen(open) {
    var isOpen = doors.classList.contains('open');
    var setOpen = typeof open === 'boolean' ? open : !isOpen;
    if (setOpen) {
      doors.classList.add('open');
    } else {
      doors.classList.remove('open');
    }
  }

})();
