function attachSlidingDoors() {

  var doors = document.querySelector('.doors');
  var button = document.querySelector('button');
  var main = document.querySelector('main');

  button.addEventListener('click', toggleOpen);

  // Firefox scrolls on documentElement instead of body. So let's cover that with a feature test
  document.body.scrollTop = 1;
  var scrollElement = document.body.scrollTop === 1 ?
    document.body : document.documentElement;

  var lastScrollTop = scrollElement.scrollTop = 0;
  document.body.onscroll = function() {
    var newTop = scrollElement.scrollTop;
    toggleOpen(newTop > lastScrollTop);
    lastScrollTop = newTop;
  };

  function toggleOpen(open) {
    var setOpen = typeof open === 'boolean' ? open : !doors.classList.contains('open');
    if (setOpen) {
      doors.classList.add('open');
      scrollElement.scrollTop = scrollElement.scrollHeight;
    } else {
      doors.classList.remove('open');
      scrollElement.scrollTop = 0;
    }
  }


}

window.onload = attachSlidingDoors;
