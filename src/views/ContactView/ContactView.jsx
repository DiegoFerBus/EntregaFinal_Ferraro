import { useEffect } from 'react';

export default function ContactView() {
  useEffect(() => {
    document.title = "Tienda Drinks | Contacto";
  }, []);

  return (
    <>
      <h2>Contacto</h2>
    </>
  );
}
