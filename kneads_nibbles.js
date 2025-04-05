<script>
    document.querySelector('form').onsubmit = function(event) {
        event.preventDefault();  // Prevent form submission to keep on the page

        // Get customizations
        var cakeDesign = document.getElementById("cake-design").value;
        var cakeQuantity = document.getElementById("cake-quantity").value;
        var cookieDesign = document.getElementById("cookie-design").value;
        var cookieQuantity = document.getElementById("cookie-quantity").value;

        // Store data in localStorage
        localStorage.setItem('cakeDesign', cakeDesign);
        localStorage.setItem('cakeQuantity', cakeQuantity);
        localStorage.setItem('cookieDesign', cookieDesign);
        localStorage.setItem('cookieQuantity', cookieQuantity);

        // Redirect to checkout page
        window.location.href = "Checkout.html";
    };
</script>
