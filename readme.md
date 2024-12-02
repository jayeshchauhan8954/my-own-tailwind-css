# Complete CSS Utility Classes

This is a comprehensive list of utility-first CSS classes inspired by Tailwind CSS, designed to speed up styling and layout development. Each class serves a specific purpose and can be combined with others to achieve complex designs without writing custom CSS.

## Table of Contents
- [Complete CSS Utility Classes](#complete-css-utility-classes)
  - [Table of Contents](#table-of-contents)
    - [Base Reset](#base-reset)
    - [Display Utilities](#display-utilities)
    - [Flexbox Utilities](#flexbox-utilities)
    - [Spacing Utilities](#spacing-utilities)
    - [Typography Utilities](#typography-utilities)
    - [Color Utilities](#color-utilities)
    - [Border Utilities](#border-utilities)
    - [Usage Example](#usage-example)
    - [Extending the CSS](#extending-the-css)

---

### Base Reset
- **Description**: Provides a clean slate for styling.
  ```css
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
  }
  ```

---

### Display Utilities
- `.hidden`: Hides the element.
- `.block`: Displays element as a block.
- `.inline-block`: Displays element as an inline-block.
- `.flex`: Applies a flexbox layout.

---

### Flexbox Utilities
- **Justify Content**:
  - `.justify-start`: Align items to the start.
  - `.justify-end`: Align items to the end.
  - `.justify-center`: Center items horizontally.
  - `.justify-between`: Distribute items evenly.

- **Align Items**:
  - `.items-start`: Align items at the start of the cross-axis.
  - `.items-center`: Center items along the cross-axis.
  - `.items-end`: Align items at the end of the cross-axis.

---

### Spacing Utilities
- **Padding**:
  - `.p-0`: No padding.
  - `.p-4`: Padding of 1rem.
  - `.p-8`: Padding of 2rem.

- **Margin**:
  - `.m-0`: No margin.
  - `.m-4`: Margin of 1rem.
  - `.m-8`: Margin of 2rem.

---

### Typography Utilities
- **Font Sizes**:
  - `.text-sm`: Small text (0.875rem).
  - `.text-base`: Base text (1rem).
  - `.text-lg`: Large text (1.125rem).

- **Font Weights**:
  - `.font-light`: Light font weight.
  - `.font-bold`: Bold font weight.

- **Text Alignment**:
  - `.text-left`: Align text to the left.
  - `.text-center`: Center align text.
  - `.text-right`: Align text to the right.

---

### Color Utilities
- **Text Colors**:
  - `.text-black`: Black text.
  - `.text-white`: White text.

- **Background Colors**:
  - `.bg-black`: Black background.
  - `.bg-white`: White background.
  - `.bg-gray`: Gray background (#fafafa).
  - `.bg-blue`: Blue background (#007bff).

---

### Border Utilities
- `.border`: Adds a 1px solid border (#ccc).
- `.rounded`: Small border-radius (0.25rem).
- `.rounded-full`: Full border-radius (circular).

---

### Usage Example

1. Link the CSS file in your HTML:
   ```html
   <link rel="stylesheet" href="http://localhost:3000">
   ```

2. Add the utility classes to your HTML elements:
   ```html
   <div class="flex justify-between items-center bg-gray p-4 rounded border">
     <h1 class="text-lg font-bold text-black">Welcome</h1>
     <button class="bg-blue text-white rounded p-4">Click Me</button>
   </div>
   ```

This will create a flexbox container with justified and aligned items, styled text, and a button with background color, padding, and border radius.

---

### Extending the CSS
You can expand this utility file by adding more classes for:
- Advanced layouts (grid systems, z-index).
- Hover effects.
- Responsive design (media queries).

Feel free to customize the classes to match your project's requirements!

