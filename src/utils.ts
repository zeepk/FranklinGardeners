export const getNextMemberMeetingDate = (date: Date) => {
  // gets the 2nd wednesday of the month
  const nextMeetingDate = new Date(date);
  nextMeetingDate.setDate(1);
  nextMeetingDate.setMonth(nextMeetingDate.getMonth() + 1);
  while (nextMeetingDate.getDay() !== 3) {
    nextMeetingDate.setDate(nextMeetingDate.getDate() + 1);
  }
  nextMeetingDate.setDate(nextMeetingDate.getDate() + 7);
  return nextMeetingDate;
};

export type NavLink = {
  text: string;
  href: string;
  logo?: string;
  color?: string;
};

export const links: NavLink[] = [
  {
    text: "Home",
    href: "/",
    color: "text-pink",
  },
  {
    text: "Gardeners",
    href: "/contact",
    color: "text-pink",
  },
  {
    text: "May Garden Mart 2023",
    href: "/mart",
    color: "text-pink",
  },
  {
    text: "Meetings",
    href: "/meetings",
    color: "text-pink",
  },
];

export type Booth = {
  id: number;
  xOffset: number;
  yOffset: number;
  textOverride?: string;
  name?: string;
  description?: string;
  imageOverride?: string;
};

export const booths: Booth[] = [
  {
    id: 1,
    xOffset: 9,
    yOffset: 85,
    name: "Stained Glass & Mosaics",
    description: "Mosaic pots, vases, watering cans, glass suncatchers",
  },
  {
    id: 2,
    xOffset: 14,
    yOffset: 85,
    name: "Wyattville Gardens",
    description: "Shrubs, trees, perennials, annuals, garden décor",
  },
  {
    id: 3,
    xOffset: 19,
    yOffset: 85,
    name: "Wyattville Gardens",
    description: "Shrubs, trees, perennials, annuals, garden décor",
  },
  {
    id: 4,
    xOffset: 46,
    yOffset: 85,
    name: "",
    description: "",
  },
  {
    id: 5,
    xOffset: 52,
    yOffset: 85,
    name: "Anderson's Florist & Greenhouse",
    description: "Annuals, perennials, shrubs, trees, herbs",
  },
  {
    id: 6,
    xOffset: 57,
    yOffset: 86,
    name: "Anderson's Florist & Greenhouse",
    description: "Annuals, perennials, shrubs, trees, herbs",
  },
  {
    id: 7,
    xOffset: 62,
    yOffset: 72,
    name: "Alex Stoll Stainless Steel Art",
    description: "Depictions of plants & animals made of stainless steel",
  },
  {
    id: 8,
    xOffset: 69.5,
    yOffset: 67,
    name: "",
    description: "",
  },
  {
    id: 9,
    xOffset: 73,
    yOffset: 60,
    name: "",
    description: "",
  },
  {
    id: 10,
    xOffset: 73,
    yOffset: 50,
    name: "",
    description: "",
  },
  {
    id: 11,
    xOffset: 76,
    yOffset: 43,
    name: "",
    description: "",
  },
  {
    id: 12,
    xOffset: 83,
    yOffset: 38,
    name: "Ariel's Attic",
    description:
      "Misc. antiques, garden décor, flags, planters, outdoor tables & plant stands",
  },
  {
    id: 13,
    xOffset: 86,
    yOffset: 31,
    name: "Ariel's Attic",
    description:
      "Misc. antiques, garden décor, flags, planters, outdoor tables & plant stands",
  },
  {
    id: 14,
    xOffset: 89,
    yOffset: 24,
    name: "",
    description: "",
  },
  {
    id: 15,
    xOffset: 75,
    yOffset: 16,
    name: "Park Avenue Greenhouse",
    description: 'Hanging baskets, 4" & 6" Pots, Bedding Plants',
  },
  {
    id: 16,
    xOffset: 68,
    yOffset: 19,
    name: "Saylors Farm and Crate",
    description: "Vegetable plants, flowers, succulents, hanging baskets, etc.",
  },
  {
    id: 17,
    xOffset: 62,
    yOffset: 26,
    name: "Moonrise Porcelain & Stoneware",
    description: "Handmade pottery with plant and animal themes",
  },
  {
    id: 18,
    xOffset: 61,
    yOffset: 34,
    name: "The Traveling Greenhouse",
    description:
      "Live succulents & house plants in small containers ready to pot, air plants, potted succulents, watering bottles, plant stakes, macarame hangers",
  },
  {
    id: 19,
    xOffset: 61,
    yOffset: 42,
    name: "The Traveling Greenhouse",
    description:
      "Live succulents & house plants in small containers ready to pot, air plants, potted succulents, watering bottles, plant stakes, macarame hangers",
  },
  {
    id: 20,
    xOffset: 60,
    yOffset: 54,
    name: "Wet Dog Studios",
    description:
      "Decorative and functional gourd art, repurposed metal yard/garden art, home décor",
  },
  {
    id: 21,
    xOffset: 61,
    yOffset: 62,
    name: "Chocolate Moonshine Co. (Wow Fudge)",
    description: "Fudge & Belgian chocolates",
  },
  {
    id: 22,
    xOffset: 53.5,
    yOffset: 61,
    name: "Vase Place",
    description:
      "Glass suction vases, dried florals, wood florals, terrariums, succulents",
  },
  {
    id: 23,
    xOffset: 53,
    yOffset: 53,
    name: "",
    description: "",
  },
  {
    id: 24,
    xOffset: 54,
    yOffset: 43,
    name: "Grows on Main by Secret Plant Co.",
    description:
      "High quality indoor foliage and accessories, best selling succulent bar, design and create  your own succulent arrangement",
  },
  {
    id: 25,
    xOffset: 54.5,
    yOffset: 36,
    name: "Jento Soaps",
    description: "Lawn stakes, solar lights, soaps, dog bandanas",
  },
  {
    id: 26,
    xOffset: 54.5,
    yOffset: 29,
    name: "Country Fancies",
    description: "Lawn ornaments, lawn signs, spinners, yard flags",
  },
  {
    id: 27,
    xOffset: 49,
    yOffset: 34,
    name: "Pampas Creek LLC",
    description: "Annuals, perennials, trees, shrubs, etc.",
  },
  {
    id: 28,
    xOffset: 44,
    yOffset: 39,
    name: "Pampas Creek LLC",
    description: "Annuals, perennials, trees, shrubs, etc.",
  },
  {
    id: 29,
    xOffset: 63,
    yOffset: 14,
    name: "",
    description: "",
  },
  {
    id: 30,
    xOffset: 57,
    yOffset: 17,
    name: "Greenhouse 22",
    description:
      "Hanging baskets, potted plants, succulents, garden dishes, etc.",
  },
  {
    id: 31,
    xOffset: 51,
    yOffset: 22,
    name: "Joey Crafts",
    description:
      "Gardening aprons, catnip plants & toys, framed garden/plant themed art, totes, bags, etc",
  },
  {
    id: 32,
    xOffset: 46,
    yOffset: 26.5,
    name: "",
    description: "",
  },
  {
    id: 33,
    xOffset: 41,
    yOffset: 31.5,
    name: "Fairlamb Lavendar Farm",
    description:
      "Lavendar products, neck wraps, sachets, soaps, lotions, sleep spray, plants, & vintage items",
  },
  {
    id: 34,
    xOffset: 41,
    yOffset: 45,
    name: "",
    description: "",
  },
  {
    id: 35,
    xOffset: 45,
    yOffset: 52,
    name: "Nuckelberry",
    description: "Sun catchers made from copper, Solid seed bird feeders",
  },
  {
    id: 36,
    xOffset: 49,
    yOffset: 57,
    name: "",
    description: "",
  },
  {
    id: 37,
    xOffset: 38,
    yOffset: 71,
    name: "Sunny Sprouts Greenhouse",
    description:
      "Exotic plants, perennials, water garden plants, cactus, succulents, garden art, bonsai, air plants, bulbs",
  },
  {
    id: 38,
    xOffset: 45,
    yOffset: 67,
    name: "Glass Gals",
    description:
      "Glass flowers, bird feeders, solar lanterns, solar mushrooms, tables, bird baths",
  },
  {
    id: 39,
    xOffset: 43,
    yOffset: 61,
    name: "",
    description: "",
  },
  {
    id: 40,
    xOffset: 38,
    yOffset: 59,
    name: "",
    description: "",
  },
  {
    id: 41,
    xOffset: 36,
    yOffset: 65,
    name: "Al's Solars & More (Al's Fountains)",
    description: "Landscape solars, chimes, and yard birds",
  },
  {
    id: 42,
    xOffset: 27,
    yOffset: 70,
    name: "Twigs Tree Nursery",
    description: "Native trees, shrubs, fruits, and houseplants",
  },
  {
    id: 43,
    xOffset: 22,
    yOffset: 67,
    name: "Nature Arts & Crafts",
    description: "Pressed flower pictures, some plants, birdhouses",
  },
  {
    id: 44,
    xOffset: 22,
    yOffset: 62,
    name: "",
    description: "",
  },
  {
    id: 45,
    xOffset: 26.5,
    yOffset: 57.5,
    name: "Brown Stone Studio",
    description: "Pottery",
  },
  {
    id: 46,
    xOffset: 17,
    yOffset: 58,
    name: "",
    description: "",
  },
  {
    id: 47,
    xOffset: 22,
    yOffset: 53,
    name: "",
    description: "",
  },
  {
    id: 48,
    xOffset: 33,
    yOffset: 53,
    name: "",
    description: "",
  },
  {
    id: 49,
    xOffset: 27,
    yOffset: 43,
    name: "",
    description: "",
  },
  {
    id: 50,
    xOffset: 33,
    yOffset: 33,
    name: "",
    description: "",
  },
  {
    id: 51,
    xOffset: 28,
    yOffset: 33,
    name: "DJ's Greenhouse",
    description: "Annuals, perennials, shrubs, conifers",
  },
  {
    id: 52,
    xOffset: 24,
    yOffset: 28,
    name: "JDMii CNC Woodworking",
    description: "Garden Flags",
  },
  {
    id: 53,
    xOffset: 20,
    yOffset: 23,
    name: "Penn State Extension Master Gardeners",
    description: "Plant Sale",
  },
  {
    id: 54,
    xOffset: 15,
    yOffset: 18,
    name: "Humble Habitats",
    description:
      "Nature inspired items including miniature houses, bird baths, feeders, bug motels, sculptures, planters, fountains, bird baths, nature inspired jewelry, occassionally rare plants for sale as well",
  },
  {
    id: 55,
    xOffset: 10,
    yOffset: 12,
    name: "All American Gutter Protection",
    description: "Gutter protection company offering free in-home estimates",
  },
  {
    id: 56,
    xOffset: 9,
    yOffset: 22,
    name: "Franklin Shade Tree Commission",
    description:
      "Displays of tree inscets, diseases, information concerning planting, culling, city tree removal",
  },
  {
    id: 57,
    xOffset: 12.5,
    yOffset: 26.5,
    name: "Knots & Folds",
    description:
      "Macrame plant hangers, dream catchers, wall hangings, bracelets, & earrings",
  },
  {
    id: 58,
    xOffset: 17,
    yOffset: 32,
    name: "",
    description: "",
  },
  {
    id: 59,
    xOffset: 22,
    yOffset: 37,
    name: "",
    description: "",
  },
  {
    id: 60,
    xOffset: 10,
    yOffset: 31,
    name: "Deets Sugar House",
    description:
      "Candy apples, dipped pretzel rods, handmade fudge, candies, nuts, coffees, & teas, fries, tenders, burgers, hot dogs, etc.",
  },
  {
    id: 61,
    xOffset: 10,
    yOffset: 36.5,
    name: "Deets Sugar House",
    description:
      "Candy apples, dipped pretzel rods, handmade fudge, candies, nuts, coffees, & teas, fries, tenders, burgers, hot dogs, etc.",
  },
  {
    id: 62,
    xOffset: 9.5,
    yOffset: 43,
    name: "",
    description: "",
  },
  {
    id: 63,
    xOffset: 10,
    yOffset: 49,
    name: "",
    description: "",
  },
  {
    id: 64,
    xOffset: 12,
    yOffset: 56,
    name: "",
    description: "",
  },
  {
    id: 65,
    xOffset: 8,
    yOffset: 65,
    name: "Cowboy Kettle Korn",
    description: "Maple glazed kettle korn & carmel corn",
  },
  {
    id: 66,
    xOffset: 15,
    yOffset: 8,
    name: "",
    description: "",
  },
  {
    id: 67,
    xOffset: 22,
    yOffset: 8,
    name: "Whitney's Crafts & Jewelry",
    description:
      "Sculpey clay fairy & gnome garden items & scenes, scupley clay suncatchers, floral wall décor, hats, headbands, handwoven wire jewelry",
  },
  {
    id: 68,
    xOffset: 30,
    yOffset: 9,
    name: "",
    description: "",
  },
  {
    id: 69,
    xOffset: 37,
    yOffset: 9,
    name: "",
    description: "",
  },
  {
    id: 70,
    xOffset: 44,
    yOffset: 9,
    name: "",
    description: "",
  },
  {
    id: 71,
    xOffset: 52,
    yOffset: 10,
    name: "Lamb's Ear Farm",
    description:
      "Perennials, houseplants, succulents, carnivorous, air plants, animal planters",
  },
  {
    id: 72,
    xOffset: 59,
    yOffset: 10,
    name: "",
    description: "",
  },
  {
    id: 73,
    xOffset: 66,
    yOffset: 10,
    name: "",
    description: "",
  },
  {
    id: 74,
    xOffset: 2,
    yOffset: 50,
    name: "",
    description: "",
  },
  {
    id: 75,
    xOffset: 2,
    yOffset: 30,
    name: "Doughnut Factory",
    description: "Mini gourmet doughnuts, bottled drinks",
  },
];
