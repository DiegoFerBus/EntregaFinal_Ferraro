import AddItemButton from '../../components/AddItemButton'; // Asegúrate de que la ruta sea correcta

export default function ProductView({ product }) {
  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p>${product.price}</p>
      
      <AddItemButton product={product} />
    </div>
  );
}
