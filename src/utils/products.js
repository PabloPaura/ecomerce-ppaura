
import {addDoc, collection, doc, getDoc, getDocs, getFirestore, query, where} from 'firebase/firestore';


const productos = [
  {
    title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    price: 64,
    description:
      "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7",
    category: "discos-externos",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    count: 203,
  },
  {
    title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    price: 109,
    description:
      "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores)",
    category: "discos-internos",
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    count: 470,
  },
  {
    title:
      "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    price: 109,
    description:
      "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance.",
    category: "discos-internos",
    image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    count: 319,
  },
  {
    title:
      "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    price: 114,
    description:
      "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    category: "discos-externos",
    image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    count: 400,
  },
  {
    title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    price: 599,
    description:
      "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz",
    category: "monitores",
    image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    count: 250,
  },
  {
    title:
      "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
    price: 999.99,
    description:
      "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY",
    category: "monitores",
    image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    count: 140,
  },
];


export const getProducts = () => {
  const database = getFirestore();
  const collectionReference = collection(database, 'item')

  return getDocs(collectionReference)
  .then(snapshot => {
    const list = snapshot
    .docs
    .map((doc) => ({
        id: doc.id,
        ...doc.data()
    }));
    return list;
  })
  .catch(error => console.warn(error)); 
};

export const getProduct = (id) => {
  const database = getFirestore();
  const itemReference = doc(database, 'item', id);
  return getDoc(itemReference)
    .then(snapshot => {
      if(snapshot.exists()){
        const item = {
          id: snapshot.id,
          ...snapshot.data()
        };
        return item;
      }
    })
  }
       
export const getProductByCategory = (categoryName) => {
  const database = getFirestore();
  const collectionReference = collection(database, 'item');
  const collectionQuery = query(collectionReference, where('category', '==', categoryName));
  return getDocs(collectionQuery)
  .then(snapshot => {
    const list = snapshot
    .docs
    .map((doc) =>({
      id: doc.id,
      ...doc.data()
    }));
    return list;
    
    })
    .catch(error => console.warn(error));
}

export const createAllProducts = () => {
  try {
    const database = getFirestore();

    const collectionReference = collection(database, 'item');
    productos.forEach(product => addDoc(collectionReference, product))
   
  } catch (error){
    console.warn(error)
  }
}