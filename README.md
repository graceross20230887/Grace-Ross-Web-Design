# Web-Design
Final Assignment 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kneads and Nibbles</title>
    <link rel="stylesheet" href="styles.css">
    <script defer src="script.js"></script>
</head>
<body>
    <header>
        <img src="images/logo.png" alt="Kneads and Nibbles Logo" class="logo">
        <h1>Welcome to Kneads and Nibbles</h1>
        <nav>
            <ul class="nav-menu">
                <li><a href="index.html">Home</a></li>
                <li class="dropdown">
                    <a href="about.html" class="dropbtn">About Us</a>
                    <div class="dropdown-content">
                        <a href="about.html#history">Our History</a>
                        <a href="about.html#team">Meet the Team</a>
                        <a href="about.html#mission">Our Mission</a>
                    </div>
                </li>
                <li class="dropdown">
                    <a href="products.html" class="dropbtn">Products</a>
                    <div class="dropdown-content">
                        <a href="products.html#wedding-cakes">Wedding Cakes</a>
                        <a href="products.html#birthday-cakes">Birthday Cakes</a>
                        <a href="products.html#cupcakes">Cupcakes</a>
                        <a href="products.html#cookies">Cookies</a>
                        <a href="products.html#gourmet-items">Gourmet Items</a>
                        <a href="products.html#doughnuts">Doughnuts</a>
                        <a href="products.html#pastries">Pastries</a>
                        <a href="products.html#custom">Customize Your Order</a>
                    </div>
                </li>
                <li><a href="contact.html">Contact Us</a></li>
                <li><a href="signup.html">Sign Up</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section class="hero">
            <h2>Freshly Baked Goods with Love</h2>
            <p>Indulge in our handcrafted pastries, breads, and sweet treats made from locally sourced ingredients.</p>
            <a href="products.html" class="cta">Shop Now</a>
        </section>
        <section class="intro">
            <h2>Why Choose Kneads and Nibbles?</h2>
            <p>We combine tradition, passion, and quality ingredients to create irresistible bakery delights.</p>
            <a href="about.html" class="cta-secondary">Learn More About Us</a>
        </section>
        <section class="preview-gallery">
            <h2>Delicious Previews</h2>
            <div class="gallery">
                <img src="images/wedding_cakes.jpg" alt="Wedding Cakes">
                <img src="images/cupcakes.jpg" alt="Cupcakes">
                <img src="images/cookies.jpg" alt="Cookies">
                <img src="images/doughnuts.jpg" alt="Doughnuts">
            </div>
            <a href="products.html" class="cta">Explore Full Menu</a>
        </section>
        <section class="call-section">
            <h2>Want to Stay in the Loop?</h2>
            <p>Sign up for our newsletter or create a membership to receive exclusive offers and bakery news!</p>
            <a href="signup.html" class="cta">Sign Up</a>
        </section>
        <section class="contact-preview">
            <h2>Have Questions?</h2>
            <p>We're happy to chat! Contact us for orders, questions, or collaborations.</p>
            <a href="contact.html" class="cta-secondary">Contact Us</a>
        </section>
    </main>
    <footer>
        <p>&copy; 2025 Kneads and Nibbles. All Rights Reserved.</p>
    </footer>
</body>
</html>
