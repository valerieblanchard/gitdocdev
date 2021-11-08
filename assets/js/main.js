( function() {
  var container,  burger, menu, links, i, len, header;

  container = document.getElementById( 'header-navmenu' );
  if ( ! container ) {
      return;
  }

  header = document.getElementById( 'header');

  burger = document.getElementById( 'burger-menu' );
  if ( ! burger) {
      return;
  }

  menu = container.getElementsByTagName( 'ul' )[0];

  // Hide menu toggle button if menu is empty and return early.
  if ( 'undefined' === typeof menu ) {
    burger.style.display = 'none';
    return;
  }

  // add aria-expanded false to site-navigation ul
  menu.setAttribute( 'aria-expanded', 'false' );
  // indexOf = searching for nav-menu if not found : add class name nav-menu to ul
  if ( -1 === menu.className.indexOf( 'nav-menu' ) ) {
      menu.className += ' nav-menu';
  }

  burger.onclick = function() {
    // if main navigation has class burger-toggled
    if ( -1 !== container.className.indexOf( 'burger-toggled' ) ) {
        // Delete this class
        container.className = container.className.replace( ' burger-toggled', '' );
        // Delete class active on burger
        burger.className = burger.className.replace( ' active', '' );
        // Add aria-expanded false to button and main-navigation ul, if already exists it doesn't matter
        burger.setAttribute( 'aria-expanded', 'false' );
        menu.setAttribute( 'aria-expanded', 'false' );
        // Delete class menu-open
        header.className = header.className.replace(' menu-open', '') ;
    } else {
        container.className += ' burger-toggled';
        burger.setAttribute( 'aria-expanded', 'true' );
        burger.className += ' active';
        menu.setAttribute( 'aria-expanded', 'true' );
        // Add a class to header container to modify his max-width
        header.className += ' menu-open';
    }
  };

  // Get all the link elements within the menu.
  links = menu.getElementsByTagName( 'a' );

  // Each time a menu link is focused or blurred, toggle focus.
  for ( i = 0, len = links.length; i < len; i++ ) {
      links[i].addEventListener( 'focus', toggleFocus, true );
      links[i].addEventListener( 'blur', toggleFocus, true );
  }

  /**
   * Sets or removes .focus class on an element.
   */
    function toggleFocus() {
    var self = this;

    // Move up through the ancestors of the current link until we hit .nav-menu.
    while ( -1 === self.className.indexOf( 'nav-menu' ) ) {

        // On li elements toggle the class .focus.
        if ( 'li' === self.tagName.toLowerCase() ) {
            if ( -1 !== self.className.indexOf( 'focus' ) ) {
                self.className = self.className.replace( ' focus', '' );
            } else {
                self.className += ' focus';
            }
        }

        self = self.parentElement;
    }
  }

} )();

/**
 * Sticky header on scroll and resize it
 * Back to top
 */
window.onscroll = function() {scrollFunction()};
var header = document.getElementById("header");
var logo = document.getElementById("logo");
var burger = document.getElementById("burger-menu");
var btn = document.getElementById("backtotop");

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btn.classList.add("show");
  } else if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    header.classList.add("sticky");
    header.style.padding = "15px 0";
    logo.style.width = "30px";
    burger.style.top = "18px";
  } else {
    header.classList.remove("sticky");
    header.style.padding = "25px 0";
    logo.style.width = "60px";
    burger.style.top = "44px";
    btn.classList.remove('show');
  }
}

btn.onclick = function() {toTop()};
function toTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
