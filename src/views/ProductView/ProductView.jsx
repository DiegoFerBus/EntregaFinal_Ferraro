import AddItemButton from '../../components/AddItemButton'; // Asegúrate de que la ruta sea correcta

export default function ProductView({ product }) {
  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p>${product.price}</p>
      {/* Agregar el componente AddItemButton y pasar el producto como prop */}
      <AddItemButton product={product} />
    </div>
  );
}
