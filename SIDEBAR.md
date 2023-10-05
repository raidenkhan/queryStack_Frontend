# queryStack_Frontend

# Peace Branch


# QueryStack Sidebar

Welcome to the QueryStack Sidebar project! This README file gives you a brief overview of the project, including the code structure and functionality of the sidebar.

## Description

The QueryStack Sidebar is a responsive and interactive sidebar component. It's designed to provide users with various category options for easy navigation through the website. The sidebar also includes a section for news feed or announcements.

## Structure

The sidebar is structured in HTML with CSS for styling. The HTML structure is divided into several parts:

- The top part of the sidebar which is further divided into three sections, each containing different category options for the users. 
- The bottom part is reserved for news feed or announcements.

The CSS is separated into two files:
- `sidebar.css` for structuring and layout
- `sidebar_style.css` for design elements

All icons used in the sidebar are from [Font Awesome](https://fontawesome.com/).

Here's a brief overview of the code:

```html
<aside class="sidebar__container">
    <nav id="sidebar">
        <ul class="sidebar__menu-first item-flex">
            <!-- Category Options -->
        </ul>
        <hr>
        <ul class="sidebar__menu-second item-flex">
            <!-- Category Options -->
        </ul>
        <hr>
        <ul class="sidebar__menu-third item-flex">
            <!-- Category Options -->
        </ul>
    </nav>
    <hr>
    <br>
    <article class="sidebar__card-info">
        <!-- News Feed or Announcements -->
    </article>
</aside>
```

```css
.sidebar__container {
    /* Styling for the sidebar */
}

#sidebar ul {
    /* Styling for the category options */
}

.sidebar__card-info {
    /* Styling for the news feed or announcements */
}
```

## Responsiveness

The sidebar is designed to be responsive. For screen sizes less than 768px, the sidebar takes up the full width of the screen and the news feed or announcements section is hidden.

```css
@media screen and (max-width: 768px) {
    .sidebar__container {
        position: static;
        width: 100%;
    }

    .sidebar__card-info {
        display: none;
    }
}
```
