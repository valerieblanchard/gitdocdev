---
layout: post
title: "Add burger before Main menu"
date: 2021-10-29
last_update: 2021-11-08
categories: snippets-wp
---

Just to test the addition of code in the snippets-wp category for the moment ^^

```php
/**
 * Add Burger before Main menu
 */
function my_burger_menu_button( $menu, $args ) {
  if ( 'primary-menu' == $args->theme_location ) {
    $menu = '<button type="button" id="burger-menu" class="menu-toggle" aria-controls="primary-menu" aria-expanded="false"><span class="menu-bar"></span><span class="screen-reader-text">Dropdown Menu</span></button>' . $menu;
  }
  return $menu;
}
add_action( 'wp_nav_menu', 'my_burger_menu_button', 9, 2 );
```
