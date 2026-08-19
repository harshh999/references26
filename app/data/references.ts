export interface WebsiteReference {
  name: string;
  category: string;
  url: string;
  image: string;
}

export const websiteReferences: WebsiteReference[] = [
  { name: "Slight Twist", category: "Drinks", url: "https://www.slight-twist.co.nz/", image: "/references/slight-twist.png" },
  { name: "Ciao Energy", category: "Drinks", url: "https://www.ciaoenergy.com/", image: "/references/ciao-energy.png" },
  { name: "G Drink Me", category: "Drinks", url: "https://gdrinkme.com/", image: "/references/g-drink-me.png" },
  { name: "Di Santino Water", category: "Drinks", url: "https://disantinowater.com/", image: "/references/di-santino-water.png" },
  
  { name: "Taylors Wines", category: "Wine", url: "https://www.taylorswines.com.au/", image: "/references/taylors-wines.png" },
  { name: "Duckhorn", category: "Wine", url: "https://www.duckhorn.com/", image: "/references/duckhorn.png" },
  { name: "Oliver Winery", category: "Wine", url: "https://www.oliverwinery.com/", image: "/references/oliver-winery.png" },
  
  { name: "Bunta Beer", category: "Beer", url: "https://www.buntabeer.com/", image: "/references/bunta-beer.png" },
  { name: "Beer & BBQ Festival", category: "Beer", url: "https://www.beerbbqfest.com.au/", image: "/references/beer-bbq-festival.png" },
  
  { name: "White Coffee", category: "Coffee", url: "https://white-coffee.com/", image: "/references/white-coffee.png" },
  { name: "7 Brew", category: "Coffee", url: "https://7brew.com/", image: "/references/7-brew.png" },
  { name: "Aroma Coffee", category: "Coffee", url: "https://aroma-coffee-business-template.webflow.io/home-1", image: "/references/aroma-coffee.png" },
  { name: "Blue Bottle Coffee", category: "Coffee", url: "https://bluebottlecoffee.com/us/eng", image: "/references/blue-bottle-coffee.png" },
  { name: "Saxbys", category: "Coffee", url: "https://www.saxbyscoffee.com/", image: "/references/saxbys.png" }
];

export const categories = [
  { id: "drinks", name: "Drinks" },
  { id: "wine", name: "Wine" },
  { id: "beer", name: "Beer" },
  { id: "coffee", name: "Coffee" }
];
