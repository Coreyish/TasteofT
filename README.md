# TasteofT

Food Catering Website

This project is a food Catering website built using Bootstrap. It allows users to add multiple food items to a cart and proceed to checkout using Square for payments. The backend is powered by Node.js and Express, with integration of Square's Orders API and Checkout API for order processing and payment collection.
Features

    User-friendly food ordering system
    Dynamic cart to add/remove food items
    Checkout system integrated with Square API
    Responsive design built with Bootstrap

Technologies Used

    Frontend: HTML, CSS, JavaScript (Bootstrap)
    Backend: Node.js, Express.js
    Payment Processing: Square APIs (Orders API & Checkout API)

Project Structure

├── src/
│   ├── css/        # Stylesheets
│   ├── js/         # Frontend JavaScript files
│   └── index.html  # Main HTML file
├── server/
│   ├── app.js      # Express server with Square API integration
├── gulpfile.js     # Gulp task runner configuration
├── package.json    # Node.js project configuration and dependencies
└── README.md       # Project documentation

Getting Started

Prerequisites

    Node.js and npm installed on your machine.
    A Square Developer account with access to the Orders API and Checkout API.

1. Clone the Repository

bash

git clone https://github.com/your-repo/food-delivery-website.git
cd food-delivery-website

2. Install Dependencies

bash

npm install

This will install the required Node.js dependencies including Express.js, Gulp, and Square SDK.

3. Square API Setup

    Sign up for a Square Developer Account.
    Create an application in the Square Developer Dashboard.
    Generate an Access Token and Location ID from the dashboard.
    Add your Square Access Token and Location ID to the backend by replacing the placeholder in app.js:

    javascript

    oauth2.accessToken = 'YOUR_SQUARE_ACCESS_TOKEN';

4. Backend Configuration

The backend is built with Express.js and handles API routes for creating orders and generating Square checkout links. To start the server:

bash

node server/app.js

Your server will run on http://localhost:3000.



5. Run the Project

To run both the backend and frontend:

    Start the Node.js backend server:

    bash

node server/app.js

If you use Gulp for building or watching assets (like CSS/JS), start Gulp with:

bash

    gulp

6. Visit the Site

Visit http://localhost:3000 in your browser to test the site. You should be able to add items to the cart and proceed to checkout.
Future Improvements

    Add more payment options.
    Enhance user authentication and order tracking.
    Improve UI/UX for a more seamless experience.

License

This project is licensed under the MIT License.
