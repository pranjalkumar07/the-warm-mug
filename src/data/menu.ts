import coldCoffeeImg from "../assets/cafe/drinks/cold-coffee.jpg";
import mangoMatchaImg from "../assets/cafe/drinks/mango-matcha.jpg";
import watermelonMojitoImg from "../assets/cafe/drinks/watermelon-mojito.jpg";
import comboPuffImg from "../assets/cafe/food/combo-coffee-puff.jpg";

export interface MenuItem {
  name: string;
  price: number;
  priceMedium?: number;
  description?: string;
  isPopular?: boolean;
  isSignature?: boolean;
  diet?: "veg" | "non-veg" | "egg";
}

export interface MenuCategory {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  items: MenuItem[];
}

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "hot-beverages",
    title: "HOT BEVERAGES",
    subtitle: "Artisanal roasts & comforting warmth",
    iconName: "Coffee",
    items: [
      { name: "Cappuccino", price: 119, description: "Velvety steamed milk over rich espresso with dense foam dusted with cocoa", isPopular: true, diet: "veg" },
      { name: "Laate", price: 129, description: "Smooth espresso tempered with silky textured milk", diet: "veg" },
      { name: "Hot chocolate", price: 149, description: "Rich, warm & comforting melted Belgian chocolate blend", isPopular: true, diet: "veg" },
      { name: "Americano", price: 99, description: "Double shot espresso poured over hot filtered water", diet: "veg" },
      { name: "Espresso", price: 99, description: "Intense, concentrated shot with thick golden crema", diet: "veg" },
      { name: "Caffe mocha", price: 149, description: "Harmonious balance of bold espresso and bittersweet chocolate", diet: "veg" },
      { name: "Matcha cappuccino", price: 179, description: "Japanese ceremonial grade green tea matcha with frothy milk", isSignature: true, diet: "veg" }
    ]
  },
  {
    id: "cold-beverages",
    title: "COLD BEVERAGES",
    subtitle: "Iced brews, frappes & layered matchas",
    iconName: "GlassWater",
    items: [
      { name: "Cold coffee", price: 159, description: "Our iconic thick blended iced coffee crowned with whipped cream and chocolate drizzle", isSignature: true, isPopular: true, diet: "veg" },
      { name: "Iced laate", price: 149, description: "Chilled espresso poured over ice and silky fresh milk", diet: "veg" },
      { name: "Iced cappuccino", price: 149, description: "Cold espresso with frothy whipped milk cloud on ice", diet: "veg" },
      { name: "Vietnamese iced coffee", price: 189, description: "Robust dark roast slow-dripped with sweetened condensed milk over crushed ice", isSignature: true, diet: "veg" },
      { name: "Iced americano", price: 129, description: "Crisp and bold iced black espresso over chilled water", diet: "veg" },
      { name: "Iced matcha", price: 179, description: "Whisked pure green matcha poured over iced milk", diet: "veg" },
      { name: "Blueberry matcha", price: 199, description: "Vibrant layered infusion of wild blueberry compote, milk, and ceremonial matcha", isSignature: true, isPopular: true, diet: "veg" },
      { name: "Mango matcha", price: 189, description: "Sweet tropical mango nectar layered with silky milk and vibrant green matcha foam", isSignature: true, isPopular: true, diet: "veg" },
      { name: "Coconut matcha", price: 199, description: "Creamy coconut milk paired with premium matcha green tea", isSignature: true, diet: "veg" }
    ]
  },
  {
    id: "mocktails",
    title: "MOCKTAILS",
    subtitle: "Crisp, fruity & sparkling refreshers",
    iconName: "Sparkles",
    items: [
      { name: "Watermelon mojito", price: 109, description: "Fresh crushed watermelon, cooling mint sprigs, lime wedge, and fizzy soda", isSignature: true, isPopular: true, diet: "veg" },
      { name: "Mango passion", price: 109, description: "Tropical mango pulp accented with tangy passionfruit zest", isPopular: true, diet: "veg" },
      { name: "Ocean blue", price: 109, description: "Curacao citrus cooler with sparkling bubbles and lemon", diet: "veg" },
      { name: "Lemon ice tea", price: 99, description: "Slow-steeped black tea infused with real lemon citrus over ice", diet: "veg" },
      { name: "Peach ice tea", price: 99, description: "Fragrant sweet orchard peach tea served chilled", diet: "veg" },
      { name: "Fresh lime soda", price: 99, description: "Classic refreshing lime spritzer served sweet, salted, or mixed", diet: "veg" },
      { name: "Green apple", price: 109, description: "Crisp tart green apple soda with mint kick", diet: "veg" },
      { name: "Masala lemonade", price: 109, description: "Tangy desi spiced lemonade with roasted cumin and rock salt", diet: "veg" },
      { name: "Chilli guava", price: 109, description: "Ripe guava nectar rimmed with chilli salt for a sweet spicy punch", diet: "veg" },
      { name: "Aam panna", price: 109, description: "Traditional raw green mango refresher with cooling Indian spices", diet: "veg" }
    ]
  },
  {
    id: "shakes",
    title: "SHAKES",
    subtitle: "Thick, decadent & pure indulgence",
    iconName: "IceCream",
    items: [
      { name: "Blueberry", price: 179, description: "Creamy vanilla ice cream blended with luscious whole blueberries", diet: "veg" },
      { name: "Strawberry", price: 179, description: "Sun-ripened sweet strawberries pureed with rich ice cream", diet: "veg" },
      { name: "Mango", price: 179, description: "Rich Alphonso mango pulp churned into thick velvety bliss", diet: "veg" },
      { name: "Choco brownie", price: 199, description: "Fudge brownie baked in-house blended into chocolate shake", isPopular: true, diet: "veg" },
      { name: "Biscoff", price: 189, description: "Caramelized Lotus Biscoff biscuit butter shake with crunchy bits", isSignature: true, diet: "veg" },
      { name: "Belgium dark chocolate", price: 179, description: "Decadent bittersweet 70% dark Belgian chocolate blend", diet: "veg" },
      { name: "Oreo", price: 189, description: "Classic cookies and cream thick shake loaded with crushed Oreos", diet: "veg" },
      { name: "Kit kat", price: 199, description: "Crisp Kit Kat wafer bars crushed and blended into rich malt milk", diet: "veg" }
    ]
  },
  {
    id: "food",
    title: "FOOD & QUICK BITES",
    subtitle: "Crispy fries, wraps, rolls & nachos",
    iconName: "Utensils",
    items: [
      { name: "Salted fries", price: 99, description: "Golden shoestring potato fries tossed in sea salt", diet: "veg" },
      { name: "Peri Peri fries", price: 109, description: "Crispy hot fries dusted with spicy African bird's eye peri peri", isPopular: true, diet: "veg" },
      { name: "Cheesy fries", price: 129, description: "Loaded golden fries smothered in warm molten cheese sauce", diet: "veg" },
      { name: "Veg sandwich", price: 99, description: "Grilled brown bread layered with fresh garden veggies and herb spread", isPopular: true, diet: "veg" },
      { name: "Paneer sandwich", price: 119, description: "Spiced cottage cheese slices grilled between golden buttered bread", diet: "veg" },
      { name: "Chicken sandwich", price: 139, description: "Tender shredded chicken tikka tossed in mayo and grilled crisp", diet: "non-veg" },
      { name: "Double egg chatpata", price: 129, description: "Fluffy double egg scramble with fiery onions, green chillies and chaat masala", diet: "egg" },
      { name: "Paneer roll", price: 119, description: "Flaky paratha rolled with marinated grilled paneer and mint chutney", diet: "veg" },
      { name: "Kabab wrap", price: 139, description: "Juicy seekh kebab tossed with crunchy pickled onions in soft flatbread", diet: "non-veg" },
      { name: "Chicken fajita wrap", price: 159, description: "Sizzling sauteed chicken strips with bell peppers and spiced salsa", isPopular: true, diet: "non-veg" },
      { name: "Veg quasadilla", price: 199, description: "Toasted tortilla folded with molten cheddar, bell peppers and sweet corn", diet: "veg" },
      { name: "Chicken quasadilla", price: 209, description: "Crispy flour tortilla stuffed with spiced chicken mince and double cheese", diet: "non-veg" },
      { name: "Veg nachos", price: 149, description: "Crunchy corn tortilla chips with warm cheese sauce and jalapeños", diet: "veg" },
      { name: "Non veg nachos", price: 169, description: "Crisp nachos piled high with spiced shredded chicken and melted cheese", diet: "non-veg" }
    ]
  },
  {
    id: "burger",
    title: "BURGER",
    subtitle: "Brioche buns, crispy patties & molten sauces",
    iconName: "Sandwich",
    items: [
      { name: "Veg burger", price: 99, description: "Crisp spiced potato patty with lettuce, tomatoes, and house sauce", diet: "veg" },
      { name: "Crispy aalu crunch burger", price: 109, description: "Deep-fried golden potato croquette with spicy mint mayo and onions", isPopular: true, diet: "veg" },
      { name: "Chilli paneer burger", price: 129, description: "Crispy paneer steak glazed in fiery oriental chilli garlic sauce", isPopular: true, diet: "veg" },
      { name: "Grilled chicken burger", price: 129, description: "Herb marinated grilled chicken breast fillet with melted cheese slice", diet: "non-veg" }
    ]
  },
  {
    id: "garlic-bread",
    title: "GARLIC BREAD",
    subtitle: "Oven-toasted baguette slices with herbs",
    iconName: "Bread",
    items: [
      { name: "Garlic bread", price: 139, description: "Toasted artisan bread brushed with roasted garlic herb butter and melted mozzarella", isPopular: true, diet: "veg" },
      { name: "Stuffed paneer garlic bread", price: 149, description: "Oven-baked crust stuffed with spiced cottage cheese cubes and golden garlic cheese", isSignature: true, diet: "veg" }
    ]
  },
  {
    id: "pasta",
    title: "PASTA",
    subtitle: "Simmered Italian sauces & penne",
    iconName: "Flame",
    items: [
      { name: "White sauce paasta", price: 129, description: "Penne tossed in silky rich garlic parmesan alfredo sauce with sauteed herbs", isPopular: true, diet: "veg" },
      { name: "Red sauce paasta", price: 129, description: "Penne coated in tangy San Marzano plum tomato arrabbiata with fresh basil", diet: "veg" },
      { name: "Mix sauce paasta", price: 149, description: "The best of both worlds: creamy pink sauce blending alfredo and arrabbiata", isSignature: true, isPopular: true, diet: "veg" }
    ]
  },
  {
    id: "pizza",
    title: "PIZZA",
    subtitle: "Freshly rolled crusts baked with mozzarella",
    iconName: "Pizza",
    items: [
      { name: "Classic Margherita", price: 99, priceMedium: 159, description: "Herb tomato reduction, fresh basil leaves and stretchy mozzarella cheese", isPopular: true, diet: "veg" },
      { name: "Corn and paneer", price: 119, priceMedium: 179, description: "Sweet golden American corn kernels paired with soft marinated paneer cubes", diet: "veg" },
      { name: "Veggie delight", price: 129, priceMedium: 189, description: "Crisp capsicum, red onions, mushrooms, black olives and juicy tomatoes", diet: "veg" },
      { name: "Chicken pizza", price: 129, priceMedium: 189, description: "Herbed chicken chunks layered over mozzarella cheese and spicy marinara", diet: "non-veg" },
      { name: "BBQ chicken pizza", price: 139, priceMedium: 199, description: "Smoky sweet barbecue roasted chicken slices with caramelized red onions", isSignature: true, diet: "non-veg" }
    ]
  },
  {
    id: "add-on",
    title: "ADD ON",
    subtitle: "Customize your drink or meal",
    iconName: "PlusCircle",
    items: [
      { name: "Flavour", price: 30, description: "Vanilla, Hazelnut, Caramel, or Irish Cream syrup shot", diet: "veg" },
      { name: "Espresso", price: 99, description: "Additional double extraction shot of freshly ground dark roast", diet: "veg" },
      { name: "Wheat chapati", price: 20, description: "Warm freshly toasted whole wheat flatbread", diet: "veg" },
      { name: "Beetroot chapati", price: 40, description: "Nutritious flatbread naturally kneaded with fresh beetroot puree", diet: "veg" },
      { name: "Spinach chapati", price: 40, description: "Nutritious flatbread naturally infused with garden fresh spinach", diet: "veg" }
    ]
  }
];

export const SIGNATURE_ITEMS = [
  {
    name: "Cold Coffee",
    category: "Cold Beverages",
    price: 159,
    description: "Our signature iced blended coffee crowned with whipped cream and rich dark chocolate drizzle.",
    badge: "Most Loved",
    image: coldCoffeeImg
  },
  {
    name: "Mango Matcha",
    category: "Cold Beverages",
    price: 189,
    description: "Sweet tropical mango nectar layered with velvety milk and vivid green ceremonial Japanese matcha.",
    badge: "Customer Favorite",
    image: mangoMatchaImg
  },
  {
    name: "Watermelon Mojito",
    category: "Mocktails",
    price: 109,
    description: "Fresh crushed watermelon, cooling mint sprigs, lime wedge, and fizzy sparkling soda.",
    badge: "Refreshing Pick",
    image: watermelonMojitoImg
  },
  {
    name: "Cold Coffee + Veg Puff Combo",
    category: "Special Combo",
    price: 179,
    description: "Chill sip + tasty bite. Signature cold coffee paired with warm oven-baked flaky crispy veg puff.",
    badge: "Best Value @ ₹179",
    image: comboPuffImg
  }
];
