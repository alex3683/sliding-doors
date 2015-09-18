var slidingDoors = (function() {

  var doors = document.querySelector('.doors');

  doors.addEventListener('click', toggleOpen);

  document.body.addEventListener('scroll', function() {});


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
