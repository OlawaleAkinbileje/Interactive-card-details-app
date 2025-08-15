# Interactive Card Details Form

## Overview

This project is an interactive card details form built with React and TailwindCSS, based on a Frontend Mentor challenge. Users can enter their card details, see a live preview of the card, and receive instant validation feedback. Upon successful submission, a confirmation screen is displayed.

## Features

- **Live Card Preview:** Card details update in real-time as the user types.
- **Form Validation:** Checks for empty fields and correct formats for card number, expiry date, and CVC.
- **Responsive Design:** Works seamlessly on mobile and desktop screens.
- **Accessible:** Uses semantic HTML and accessible form controls.
- **Confirmation Screen:** Displays a thank you message after successful submission.

## Technologies Used

- [React](https://react.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/) (for development/build)
- [Frontend Mentor](https://www.frontendmentor.io/) design assets

## Getting Started

### Prerequisites

- Node.js and npm installed

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/OlawaleAkinbileje/Interactive-card-details-app.git
   cd interactive-card-details
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Folder Structure

```
src/
  Components/
    CardFront.tsx
    CardBack.tsx
    PaymentForm.tsx
    CardSubmitted.tsx
    Layout/
      CardLayout.tsx
  assets/
    BgImages/
      bg-card-front.png
      bg-card-back.png
      bg-main-desktop.png
      bg-main-mobile.png
      card-logo.svg
      icon-complete.svg
  App.tsx
  App.css
  main.tsx
public/
  card-logo.svg
  favicon-32x32.png
  vite.svg
```

## Usage

1. Fill in the cardholder name, card number, expiry date, and CVC.
2. See your card details update in the preview cards on the left.
3. Click **Confirm** to submit. If all fields are valid, you'll see a confirmation screen.
4. Click **Continue** to reset the form and enter new details.

## Credits

- Challenge by [Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-UYPaTd6UX).
- Design assets from Frontend Mentor.

## License

This project is open source and available under the [MIT License](LICENSE).
