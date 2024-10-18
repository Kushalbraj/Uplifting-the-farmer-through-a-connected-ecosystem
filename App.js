import './App.css';

function App() {
  return (
 <>
 <div clas="farmar"> 
  <body>
  <header>
 <h1> Backbone of India     </h1>
        <h4> Empowering Farmers, Nourishing Communities </h4>
        {/* <img src="./images1/buffalo1.jpg"/> */}
        <nav>
            <div class="nav-container">
                <ul>
                    <li><a href="home.html">Home</a></li>
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="products.html">Products</a></li>
                    <li><a href="weather.html">Weather</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </div>
            
        </nav>
    </header>
    <div class="img"><img src="./images1/buffalo1.jpg" />
    </div>
    
<section id="about" class="about">
    <h2>About Us</h2>
    <p>Our platform connects farmers with buyers, suppliers, and experts to enhance productivity and profitability.</p>
</section>

<section id="products" class="products">
    <h2>Available Products</h2>
    <div class="product-list">
        <div class="product">
            <h3>Organic Seeds</h3>
            <p>High-quality organic seeds to boost your yield.</p>
            <ul>
                <li><a href="#Organic Seeds">Organic Seeds</a></li>
            </ul>
        </div>
        <div class="product">
            <h3>Fertilizers</h3>
            <p>Eco-friendly fertilizers for sustainable farming.</p>
            <ul>
                <li><a href="#Fertilizers">Fertilizers</a></li>
            </ul>
        </div>
        {/* Add more products here */}
    </div>
</section>
<section id="weather" class="weather">
        <h2>Weather Updates</h2>
        <p>Stay informed with real-time weather updates for better planning.</p>
        <ul>
        <li><a href="#Weather Updates">Weather Updates</a></li>
    </ul>
    </section>
    <section id="contact" class="contact">
        <h2>Contact Us</h2>
        
        
    </section>
    </body>

    <footer>
        <p>&copy; 2024 Backbone of India. All rights reserved.</p>
    </footer>
  </div>
  </>
  );
}

export default App;
