# DCM-Portfolio

DCM-Portfolio is a React-based portfolio website designed to showcase services, projects, testimonials, and FAQs. It features a responsive design, smooth animations, and reusable components.

## Features

### Hero Section
- **Dynamic Text Reveal**: Smooth animations for text and images.
- **Call-to-Action**: Includes a "Contact Us" button for user engagement.

### About Section
- **Story Section**: Highlights the company's story and mission.
- **Image Integration**: Displays relevant images alongside text.

### Portfolio Section
- **Project Cards**: Interactive cards with hover effects.
- **Dynamic Filtering**: Filter projects by categories.

### Services Section
- **Service Details**: Provides detailed information about services.
- **Step-by-Step Process**: Visualizes the workflow with numbered steps.

### Testimonials Section
- **Slider**: Displays client testimonials in a carousel format.
- **Interactive Cards**: Hover effects for testimonial cards.

### FAQs Section
- **Accordion Style**: Expandable questions for better user experience.
- **Common Queries**: Answers to frequently asked questions.

### Contact Section
- **Contact Form**: Collects user inquiries with validation.
- **Dynamic Icons**: Displays contact details with icons.

## Technologies Used

### Frontend
- **React.js**: Component-based architecture for building the user interface.
- **React Router**: Dynamic routing for navigation between pages.
- **Bootstrap**: Responsive design framework.
- **SASS**: Modular styling with variables and mixins.

### Tools
- **Vite**: Build tool for fast development.
- **ESLint**: Code quality and linting.

## Project Structure

```
DCM-Portfolio/
├── .gitignore
├── package.json
├── README.md
├── public/
│   ├── favicon.ico
│   ├── index.html
├── src/
│   ├── App.jsx
│   ├── index.js
│   ├── assets/
│   │   ├── icons/
│   │   ├── logo/
│   ├── common/
│   │   ├── Footer.jsx
│   │   ├── HeaderLight.jsx
│   │   ├── NavbarDark.jsx
│   │   ├── NavbarLight.jsx
│   │   ├── TextRevealAnimation.jsx
│   ├── components/
│   │   ├── faqs.jsx
│   │   ├── Testimonials.jsx
│   │   ├── about/
│   │   ├── contact/
│   │   ├── faqs/
│   │   ├── hero/
│   │   ├── portoflio/
│   │   ├── services/
│   ├── data/
│   │   ├── faqs.jsx
│   │   ├── testimonials.jsx
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   ├── Portfolio.jsx
│   │   ├── ProjectDetails.jsx
│   │   ├── ServiceDetails.jsx
│   │   ├── Services.jsx
│   ├── styles/
│       ├── css/
│       │   ├── main.css
│       ├── sass/
│           ├── components/
│           │   ├── _testimonial.scss
│           │   ├── _heroSection.scss
```

## MVC Architecture

The project follows a component-based architecture inspired by MVC principles:

- **Model**: JSON files in the `data` directory serve as the data source for components.
- **View**: React components in the `components` directory render the user interface.
- **Controller**: Logic within components handles user interactions and updates the view dynamically.

## How to Run

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the application in your browser at `http://localhost:3000`.
