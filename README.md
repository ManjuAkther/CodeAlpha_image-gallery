# 📸 Filterable Image Gallery

A modern and responsive **Filterable Image Gallery** built using **HTML5, CSS3, and JavaScript (ES6)**. This project allows users to browse images by category and view them in an interactive lightbox with smooth animations and responsive design.

---

## 🚀 Live Demo

🔗 Live Site: https://filterable-gallery-image.netlify.app/

🔗 GitHub Repository: https://github.com/yourusername/filterable-image-gallery

---

## 📖 Project Overview

The Filterable Image Gallery is a frontend project that demonstrates JavaScript DOM manipulation, event handling, responsive layouts, and interactive UI design without using any external libraries or frameworks.

Users can:

- Browse images in a responsive gallery
- Filter images by category
- Open images in a fullscreen lightbox
- Navigate between images using Previous & Next buttons
- Use keyboard shortcuts (Left Arrow, Right Arrow, Escape)
- Enjoy smooth hover effects and animations

---

## ✨ Features

- 📱 Responsive Grid Layout
- 🔍 Category Filtering
- 🖼️ Fullscreen Lightbox
- ⬅️ Previous & Next Image Navigation
- ⌨️ Keyboard Navigation
- 🎨 Modern Glassmorphism UI
- ⚡ Smooth CSS Animations
- 📷 Hover Zoom Effect
- 🌐 Mobile Friendly

---

## 🛠️ Technologies Used

### HTML5

- Semantic HTML
- Data Attributes

### CSS3

- CSS Grid
- Flexbox
- CSS Animations
- CSS Transitions
- Glassmorphism Design
- Responsive Design

### JavaScript (ES6)

- DOM Manipulation
- Event Listeners
- Event Delegation
- Array Methods
- Keyboard Events
- Dynamic Filtering

---

## 📂 Folder Structure

```text
Filterable Image Gallery
│
├── index.html
├── style.css
├── script.js
│
└── Images
    ├── Nature
    ├── Food
    ├── Flower
    └── Travel
```

---

## ⚙️ How It Works

### Image Filtering

Each image contains a custom data attribute.

```html
<div class="gallery-item" data-category="nature">
```

When a user clicks a filter button, JavaScript compares the selected category with each image's `data-category` value and displays only the matching images.

---

### Lightbox

Clicking an image opens it in a fullscreen lightbox.

Users can:

- View larger images
- Navigate using Previous & Next buttons
- Use Left and Right Arrow keys
- Close using the Escape key or the close button

---

### Responsive Design

The gallery uses CSS Grid to automatically adjust the number of columns based on screen size.

```css
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
```

---

## 💡 Challenges Faced

### Challenge 1

Maintaining image navigation after filtering.

### Solution

Created a separate `visibleImages` array so the lightbox only navigates through currently visible images.

---

### Challenge 2

Building a fully responsive layout.

### Solution

Used CSS Grid with `auto-fit` and `minmax()`.

---

### Challenge 3

Improving the user experience while the lightbox is open.

### Solution

Disabled background scrolling using JavaScript.

```javascript
document.body.style.overflow = "hidden";
```

---

## 📚 What I Learned

Through this project, I improved my understanding of:

- HTML Semantic Structure
- CSS Grid & Flexbox
- Responsive Design
- DOM Manipulation
- JavaScript Event Handling
- Keyboard Events
- Array Methods (`filter()`, `map()`, `indexOf()`)
- Writing Clean and Organized Code

---

## 🔮 Future Improvements

- Image Lazy Loading
- Search Functionality
- Image Captions
- Dark Mode
- Image Download Option
- Touch Swipe Support
- Favorite Images Feature

---

## 👩‍💻 Author

**Manju Akther**

Frontend Developer

📧 Email: manjuakther47@gmail.com

💼 LinkedIn: linkedin.com/in/manju-akther-7639022a7

🌐 Portfolio: https://manju-frontend-portfolio.netlify.app

🐙 GitHub: https://github.com/ManjuAkther/CodeAlpha_image-gallery.git

---

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub.
