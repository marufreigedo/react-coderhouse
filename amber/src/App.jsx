import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import Cart from './components/cart/cart';
import CartWidget from './components/cartWidget/cartWidget';

function App() {
  const [cart, setCart] = useState([]);
  const itemCount = cart.reduce((count, item) => count + item.quantity, 0);
  const [products, setProducts] = useState([
    
    {
      id: 1,
      title: 'Taza de El grinch',
      description: 'Taza navideña original Diseño de la cabeza del Grinch',
      price: 4500,
      category: 'Tazas de ceramica',
      image: 'https://i.pinimg.com/564x/96/72/1f/96721fefea99d090530cae6364910aa1.jpg',
      details: '¡Lleva la diversión y el espíritu navideño del Grinch a tu rutina diaria con esta encantadora taza! La "Taza de El Grinch" es la compañera perfecta para tu café matutino o tu bebida caliente favorita durante la temporada navideña. Con un diseño vibrante y festivo que presenta al gruñón pero entrañable Grinch junto a elementos icónicos de la historia.'
      },
      {
      id: 2,
      title: 'Taza de Mickey Mouse',
      description: 'Taza de ceramica con diseño',
      price: 3900,
      category: 'Tazas de ceramica',
      image: 'https://i.pinimg.com/564x/6a/37/2e/6a372e6a90f4422552fc8031797361fe.jpg',
      details: 'Fabricada con materiales de alta calidad, esta taza es resistente y duradera, lo que la hace apta para un uso diario y una excelente adición a tu colección de tazas. Ya sea que la uses en casa, en la oficina o la exhibas en tu vitrina, esta "Taza de Mickey Mouse" es un tributo a un ícono de la animación y una forma encantadora de inyectar un poco de alegría de Disney en tu vida cotidiana.'
    },
    {
      id: 3 ,
      title: 'Taza de Winnie Pooh',
      description: 'Taza de ceramica con diseño de Winnie Pooh',
      price: 4500,
      category: 'Tazas de ceramica',
      image: 'https://i.pinimg.com/564x/fe/bd/47/febd478f65af30349639515aaecb4fee.jpg',
      details: 'Fabricada con materiales de alta calidad, esta taza es resistente y duradera, lo que la hace adecuada para un uso diario y un valioso elemento de tu colección de tazas. Ya sea que la uses en casa mientras te relajas con un buen libro o en la oficina para alegrar tu día, esta "Taza de Winnie Pooh" es una manera encantadora de recordar los valores y las aventuras de este entrañable personaje.'
    },
    {
      id: 4 ,
      title: 'Taza Arcoiris',
      description: 'Taza de vidrio con diseño de arcoiris',
      price: 3500,
      category: 'Tazas de vidrio',
      image: 'https://i.pinimg.com/564x/08/4d/22/084d22a5e3ca00e4d4e417dc89e341ff.jpg',
      details: 'La transparencia del vidrio permite apreciar la apariencia de tus bebidas y disfrutar de la danza de colores a medida que se mezclan con el líquido. Además, su asa ergonómica facilita su agarre y la hace cómoda de sostener.'
    },
    {
      id: 5 ,
      title: 'Taza de Margaritas',
      description: 'Taza de Porcelana con diseño de margaritas',
      price: 4000,
      category: 'Tazas de Porcelana',
      image: 'https://i.pinimg.com/564x/c2/24/71/c2247199135f3d899a198bc0efdb7c00.jpg',
      details: 'El diseño de la taza presenta un patrón floral de margaritas en colores vivos y detalles intrincados, que evocan la belleza de un jardín en plena primavera. La porcelana de alta calidad le confiere un aspecto elegante y una sensación suave al tacto. Su capacidad generosa es perfecta para servir margaritas heladas, cócteles u otras bebidas refrescantes.'
    }
  ]);
  
  function agregarAlCarrito(producto) {
    setCart((carritoActual) => {
      const productoEnCarrito = carritoActual.find((item) => item.id === producto.id);
   if (productoEnCarrito) {
         productoEnCarrito.quantity += 1;
      } else {
        
        carritoActual.push({ ...producto, quantity: 1 });
      }
    return [...carritoActual];
    });
  }

  function eliminarDelCarrito(idProducto) {
  setCart((carritoActual) => {
    
    const productoEnCarrito = carritoActual.find((item) => item.id === idProducto);

if (productoEnCarrito) {
      if (productoEnCarrito.quantity > 1) {
        productoEnCarrito.quantity -= 1;
      } else {
        return carritoActual.filter((item) => item.id !== idProducto);
      }
    }
return [...carritoActual];
  });
}

return (
  <div>
    <Routes>
      <Route path="/" element={<ItemListContainer products={products} agregarAlCarrito={agregarAlCarrito} />} />
      <Route path="/category/:categoryid" element={<ItemListContainer products={products} agregarAlCarrito={agregarAlCarrito} />} />
      <Route path="/item/:itemid" element={<ItemDetailContainer cart={cart} agregarAlCarrito={agregarAlCarrito} />} />
      <Route path="/cart" element={<Cart cart={cart} eliminarDelCarrito={eliminarDelCarrito} />} />
    </Routes>
    <CartWidget itemCount={itemCount} /> 
  </div>
);
}

export default App;