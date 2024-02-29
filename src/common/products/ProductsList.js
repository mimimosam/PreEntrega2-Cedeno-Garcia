export const products = [
  {
    id: 1,
    name: "Carrots",
    img: "../../../public/photos/carrots.jpg",
    alt: "carrots",
    price: 5,
    category: "vegetables",
    description: "Fresh carrots to re-plant or to eat",
    stock: 20,
  },
  {
    id: 2,
    name: "Onions",
    img: "../../../public/photos/onions.jpg",
    alt: "onions",
    price: 20,
    category: "vegetables",
    description: "White onions because the purple one is more expensive",
    stock: 10,
  },
  {
    id: 3,
    name: "Lettuce",
    img: "../../../public/photos/lettuce.jpg",
    alt: "lettuce",
    price: 15,
    category: "vegetables",
    description: "Fresh green lettuce to make any salad",
    stock: 10,
  },
  {
    id: 4,
    name: "Potatoes",
    img: "../../../public/photos/potatoes.jpg",
    alt: "potatoes",
    price: 25,
    category: "vegetables",
    description: "Everybody's best friend, yummy potatoes",
    stock: 50,
  },
  {
    id: 5,
    name: "Strawberries",
    img: "../../../public/photos/strawberries.jpg",
    alt: "strawberries",
    price: 20,
    category: "fruits",
    description: "Sweet and juicy strawberries",
    stock: 20,
  },
  {
    id: 6,
    name: "Coconuts",
    img: "../../../public/photos/coconuts.jpg",
    alt: "coconuts",
    price: 40,
    category: "fruits",
    description: "Refreshing tropical fruit that can be a drink or a snack",
    stock: 15,
  },
  {
    id: 7,
    name: "Passion Fruits",
    img: "../../../public/photos/passionfurit.jpg",
    alt: "passion fruits",
    price: 35,
    category: "fruits",
    description: "Ugly looking but delicious on the inside",
    stock: 5,
  },
  {
    id: 8,
    name: "Pears",
    img: "../../../public/photos/pears.jpg",
    alt: "pears",
    price: 15,
    category: "fruits",
    description: "The softest and most delicious pears you've ever tasted",
    quantity: 30,
  },
  {
    id: 9,
    name: "Straw Hat",
    img: "../../../public/photos/strawhat.jpg",
    alt: "straw hat",
    price: 200,
    category: "headwear",
    description: "A certain little guy owns one like this",
    quantity: 1,
  },
  {
    id: 10,
    name: "Cowboy Hat",
    img: "../../../public/photos/cowboyhat.jpg",
    alt: "cowboy hat",
    price: 150,
    category: "headwear",
    description: "Do you want to feel like a cowboy while farming, buy this!",
    quantity: 1,
  },
];

export const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    if (products.lenght > 0) {
      const item = products.find((product) => product.id === id);

      if (item) {
        setTimeout(() => {
          resolve(item);
        }, 1500);
      } else {
        reject(`${id} not found on stock`);
      }
    }
  });
};
