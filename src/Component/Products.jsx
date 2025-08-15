// //code for product along with sidebar
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const categories = [
//   { label: "Groceries", key: "groceries" },
//   { label: "Mobile Accessories", key: "mobile-accessories" },
//   { label: "Skin Care", key: "skincare" },
// ];

// function Products() {
//   const [activeCategory, setActiveCategory] = useState(categories[0].key);
//   const [products, setProducts] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [showCart, setShowCart] = useState(false);

//   useEffect(() => {
//     axios
//       .get(`https://dummyjson.com/products/category/${activeCategory}?limit=0`)
//       .then((res) => setProducts(res.data.products))
//       .catch((err) => console.log(err));
//   }, [activeCategory]);

//   const addToCart = (product) => {
//     const exists = cart.find((item) => item.id === product.id);
//     if (exists) {
//       setCart(
//         cart.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         )
//       );
//     } else {
//       setCart([...cart, { ...product, quantity: 1 }]);
//     }
//     setShowCart(true);
//   };

//   const updateQty = (id, change) => {
//     setCart((prevCart) =>
//       prevCart
//         .map((item) =>
//           item.id === id ? { ...item, quantity: item.quantity + change } : item
//         )
//         .filter((item) => item.quantity > 0)
//     );
//   };

//   return (
//     <div className="products-wrapper">
//       <div className="category-buttons">
//         {categories.map((cat) => (
//           <button
//             key={cat.key}
//             className={activeCategory === cat.key ? "active" : ""}
//             onClick={() => setActiveCategory(cat.key)}
//           >
//             {cat.label}
//           </button>
//         ))}
//       </div>

//       <h2 className="product-heading">
//         Top {categories.find((c) => c.key === activeCategory).label}
//       </h2>

//       <div className="product-grid">
//         {products.map((item) => (
//           <div className="product-card" key={item.id}>
//             <img src={item.thumbnail} alt={item.title} />
//             <h3>{item.title}</h3>
//             <p className="price">₹ {item.price * 80}</p>
//             <p className="desc">{item.description.slice(0, 50)}...</p>
//             <button onClick={() => addToCart(item)}>Add to Cart</button>
//           </div>
//         ))}
//       </div>

//       {/* Slide-in Cart */}
//       <div className={`cart-sidebar ${showCart ? "visible" : ""}`}>
//         <div className="cart-header">
//           <h3>Your Cart</h3>
//           <button className="close-btn" onClick={() => setShowCart(false)}>
//             ✕
//           </button>
//         </div>
//         {cart.length === 0 ? (
//           <p>No items yet.</p>
//         ) : (
//           cart.map((item) => (
//             <div className="cart-item" key={item.id}>
//               <img src={item.thumbnail} alt={item.title} />
//               <div>
//                 <h4>{item.title}</h4>
//                 <p>₹ {item.price * 80}</p>
//                 <div className="qty-controls">
//                   <button onClick={() => updateQty(item.id, -1)}>-</button>
//                   <span>{item.quantity}</span>
//                   <button onClick={() => updateQty(item.id, 1)}>+</button>
//                 </div>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }

// export default Products;
// Products.jsx

// ======================================================================================================
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const categories = [
  { label: "Groceries", key: "groceries" },
  { label: "Mobile Accessories", key: "mobile-accessories" },
];

function Products() {
  const [activeCategory, setActiveCategory] = useState(categories[0].key);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [fakeOrderId, setFakeOrderId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/category/${activeCategory}?limit=0`)
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err));
  }, [activeCategory]);

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    setShowCart(true);
  };

  const updateQty = (id, change) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + change } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const getTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * 80 * item.quantity, 0);
  };

  const handlePlaceOrder = () => {
    const orderId = "ORD" + Math.floor(Math.random() * 1000000);
    setFakeOrderId(orderId);
    setShowCart(false);
    setShowModal(true);
  };

  const goToHome = () => {
    setShowModal(false);
    navigate("/");
  };

  return (
    <div className="products-wrapper">
      {/* Cart Icon */}
      <div className="cart-icon" onClick={() => setShowCart(!showCart)}>
        <FaShoppingCart />
        {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
      </div>

      <div className="category-buttons">
        {categories.map((cat) => (
          <button
            key={cat.key}
            className={activeCategory === cat.key ? "active" : ""}
            onClick={() => setActiveCategory(cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <h2 className="product-heading">
        Top {categories.find((c) => c.key === activeCategory).label}
      </h2>

      <div className="product-grid">
        {products.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.thumbnail} alt={item.title} />
            <h3>{item.title}</h3>
            <p className="price">₹ {item.price * 80}</p>
            <p className="desc">{item.description.slice(0, 50)}...</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>

      {/* S Cart */}
      <div className={`cart-sidebar ${showCart ? "visible" : ""}`}>
        <div className="cart-header">
          <h3>Your Cart</h3>
          <button
            className="close-btn"
            onClick={() => setShowCart(false)}
          ></button>
        </div>
        {cart.length === 0 ? (
          <p>No items yet.</p>
        ) : (
          <>
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <div>
                  <h4>{item.title}</h4>
                  <p>₹ {item.price * 80}</p>
                  <div className="qty-controls">
                    <button onClick={() => updateQty(item.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQty(item.id, 1)}>+</button>
                  </div>
                </div>
              </div>
            ))}
            <div className="cart-total">
              <h4>Total: ₹ {getTotal()}</h4>
              <button className="checkout-btn" onClick={handlePlaceOrder}>
                Place Order
              </button>
            </div>
          </>
        )}
      </div>

      {/* Order Success  */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>🎉 Order Successful!</h2>
            <p>
              Your Order ID: <strong>{fakeOrderId}</strong>
            </p>
            <button onClick={goToHome}>Go to Home</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
