/* const products = [
  {
    id: 1,
    title: 'Monster',
    category: 'Energizante',
    price: '120',
    description: 'Monster Energy contiene 23 ingredientes en total. Contiene 3 diferentes tipos de azúcares (sacarosa, glucosa, maltodextrina), además de sucralosa como endulzante no calórico.',
    image: 'https://www.masmusculo.com/100941-home_default/monster-energy.jpg',
  },
  {
    id: 2,
    title: 'Prime',
    price: '160',
    category: 'Energizante',
    description: 'Cada botella contiene 200 mg de cafeína, cero azúcar, 300 mg de electrolitos, sabor natural y vegano, en cinco opciones de sabor.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOxjUNCcYZIwayd-2kCP9963l5GickWXTCHg&s',
  },
  {
    id: 3,
    title: 'Red Bull',
    price: '110',
    category: 'Energizante',
    description: 'Red Bull Energy Drink es una bebida funcional que contiene, principalmente agua, azúcar (sacarosa, glucosa), cafeína, taurina, así como diferentes vitaminas.',
    image: 'https://www.bgrup.es/img_prod/200-200/89132.jpg',
  },
  {
    id: 4,
    title: 'Coca Cola',
    price: '110',
    category: 'Sin alcohol',
    description: 'Coca-Cola: bebida carbonatada a base de agua, azúcar y un sabor distintivo. Refrescante y clásica, es perfecta para cualquier ocasión.',
    image: 'https://static.compreloadomicilio.com/comercialjj/products/01128/63cef32c8dc44186412641.webp',
  },
  
  {
    id: 5,
    title: 'Pepsi Black',
    price: '110',
    category: 'Sin alcohol',
    description: 'Bebida carbonatada sin azúcar, con un sabor intenso y refrescante. Ideal para quienes buscan disfrutar de una cola con un toque más ligero.',
    image: 'https://www.terranovaalimenti.it/wp-content/uploads/BB1315.jpg',
  },

  {
    id: 6,
    title: 'Speed',
    price: '99',
    category: 'Energizante',
    description: 'Bebida energética carbonatada, diseñada para impulsar tu energía y mantenerte activo. Con un sabor refrescante y una mezcla de ingredientes energizantes, es ideal para un impulso rápido durante el día.',
    image: 'https://www.josimar.com.ar/arquivos/ids/168510-300-300/Energizante-Zero-Speed-Unlimited-Lata-269-cc-1-14683.jpg?v=638527017676930000',
  },

  {
    id: 7,
    title: 'Heineken',
    price: '96',
    category: 'Sin alcohol',
    description: 'Cerveza de sabor suave y refrescante, elaborada con los mismos ingredientes de la clásica Heineken. Disfruta de su sabor distintivo y de la experiencia de una cerveza sin alcohol en cualquier momento.',
    image: 'https://devotouy.vtexassets.com/arquivos/ids/1506013/Cerveza-sin-alcohol-HEINEKEN-00---330-ml-0.jpg?v=638619288773070000',
  },

  {
    id: 8,
    title: 'Pomelo',
    price: '60',
    category: 'Sin alcohol',
    description: 'Bebida refrescante levemente gasificada, sabor pomelo.',
    image: 'https://devotouy.vtexassets.com/arquivos/ids/1418818/Refresco-PASO-DE-LOS-TOROS-1-L-1.jpg?v=638542039555100000',
  },

  {
    id: 9,
    title: 'Rockstar',
    price: '65',
    category: 'Energizante',
    description: 'Bebida energética carbonatada, diseñada para impulsar tu energía y mantenerte activo.',
    image: 'https://tatauy.vtexassets.com/arquivos/ids/636024/Energizante-Rockstar-500-Ml-1-36867.jpg?v=638297085832300000',
  },

  {
    id: 10,
    title: 'Jugo Citric',
    price: '194',
    category: 'Sin alcohol',
    description: 'Refrescante y 100% natural, este jugo de naranja está lleno de sabor y vitamina C.',
    image: 'https://tumayorista.uy/wp-content/uploads/jugo-citric-naranja-1-litro.jpg',
  },

];


export const getProducts = new Promise((resolve) => {
  setTimeout(() => {
    resolve(products);
  }, 2000);
});


export const getProduct = (id) => {
  return products.find((prod) => prod.id == id);
};


export const getCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((product) => product.category === category));
    }, 2000);
  });
};
 */