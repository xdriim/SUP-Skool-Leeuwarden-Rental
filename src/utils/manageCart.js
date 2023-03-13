function addToCart(item) {
    // Get existing cart items from local storage or create an empty array
    const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    // Add the new item to the cart
    existingCartItems.push(item);
    // Save the updated cart to local storage
    localStorage.setItem('cartItems', JSON.stringify(existingCartItems));
  }

function ShoppingCart() {
    // Get the cart items from local storage or create an empty array
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    // Render the cart items
    return (
      <div>
        <h2>Shopping Cart</h2>
        {cartItems.map(item => (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    );
  }

function clearCart() {
    localStorage.removeItem('cartItems');
  }