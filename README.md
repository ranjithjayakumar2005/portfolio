# Ranjithkumar J - Portfolio 🚀

A modern, premium developer portfolio designed for recruiters. Built with a focus on speed, aesthetics, and smooth user experience.

## Features
- **Glassmorphism UI**: Sleek, modern cards with blur effects.
- **Classic Animations**: Smooth entrance reveals and typing effects.
- **Interactive Contact Form**: Fully functional using EmailJS.
- **Responsive Layout**: Optimized for all devices (Mobile, Tablet, Desktop).
- **Floating Particles**: Dynamic background elements.
- **Dark Mode**: High-contrast, easy-on-the-eyes design.

## Setup Instructions

### 1. Contact Form (EmailJS)
To make the contact form work, follow these steps:
1. Go to [EmailJS](https://www.emailjs.com/) and create a free account.
2. Add a **Email Service** (e.g., Gmail).
3. Create a **Email Template** with these variable names:
   - `user_name`
   - `user_email`
   - `user_project` (this maps to the message field)
4. Go to `script.js` and replace the following with your actual keys from the dashboard:
   ```javascript
   emailjs.sendForm('YOUR_SERVICE_ID','YOUR_TEMPLATE_ID','#contact-form','YOUR_PUBLIC_KEY')
   ```

### 2. GitHub Pages Deployment
1. Push your code to a GitHub repository.
2. Go to **Settings** > **Pages**.
3. Select `main` branch as the source.
4. Your site will be live at `https://yourusername.github.io/your-repo-name/`.

## Technology Stack
- HTML5 (Semantic Structure)
- CSS3 (Vanilla CSS, Glassmorphism, Fixed Variables)
- JavaScript (Interactivity, Typed.js, AOS, EmailJS)

## Personal Information Used
- **Name**: Ranjithkumar J
- **Education**: B.Tech - IT (Batch of 2028)
- **Location**: Coimbatore, Tamil Nadu
- **Contact**: +91 6369104542 | ranjithjayakumar42005@gmail.com
