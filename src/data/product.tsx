import type { Product } from "./types";
import BMJ from "../assets/imgs/OurMenu/BMJ.png";
import Rast from "../assets/imgs/OurMenu/RastChi.png";
import LettuceWrap from "../assets/imgs/OurMenu/KetoLettuceWrap.png";
import OldSch from "../assets/imgs/OurMenu/OldSchool.png";
import FrenchFries from "../assets/imgs/OurMenu/FrenchFries.png"
import MustardCup from "../assets/imgs/OurMenu/MustardCup.png"
import Blueberry from "../assets/imgs/OurMenu/blueberry.png"
import OJ from "../assets/imgs/OurMenu/OJ.png"
import BlueCheese from "../assets/imgs/OurMenu/BlueCheese.png"
import fourInBox from "../assets/imgs/OurMenu/fourInBox.png"

export const products: Product[] = [
    {
        id: 1,
        categoryId: 1,

        name: "Bacon Mushroom Jack",

        description: "Beef bacon with fresh sauteéd mushroom, cheddar cheese, and cremay mayonnaise.",

        image: BMJ,

        price: 220,
    },

    {
        id: 2,
        categoryId: 2,

        name: "Rastafari Chicken",

        description: "Crispy cheddar jalapeño bites, with chicken strips, and creamy Buffalo sauce.",

        image: Rast,

        price: 245,
    },

    {
        id: 3,
        categoryId: 3,

        name: "Keto Lettuce Wrap",

        description: "Pure beef burger embedded in fresh whole romaine lettuce with cheddar cheese. Served with our signature Buffalo sauce in a cup.",

        image: LettuceWrap,

        price: 205,
    },
    {
        id: 4,
        categoryId: 4,

        name: "Old School",

        description: "Pure beef burger patty, topped with our signature Buffalo sauce and cheddar cheese.",

        image: OldSch,

        price: 200,
    },
    {
        id: 5,
        categoryId: 5,

        name: "Large French Fries",

        description: "",

        image: FrenchFries,

        price: 40,
    },
    {
        id: 6,
        categoryId: 6,

        name: "Mustard Cup",

        description: "",

        image: MustardCup,

        price: 200,
    },
    {
        id: 7,
        categoryId: 7,

        name: "Blueberry Cheesecake",

        description: "",

        image: Blueberry,

        price: 200,
    },
    {
        id: 8,
        categoryId: 8,

        name: "Orange Juice",

        description: "",

        image: OJ,

        price: 70,
    },
    {
        id: 9,
        categoryId: 1,

        name: "Blue Cheese",

        description: "Crumbles of creamy French blue cheese top our famous burger patty with our signature mayonnaise sauce.",

        image: BlueCheese,

        price: 215,
    },
    {
        id: 10,
        categoryId: 1,

        name: "Blue Cheese",

        description: "Crumbles of creamy French blue cheese top our famous burger patty with our signature mayonnaise sauce.",

        image: BlueCheese,

        price: 215,
    },
    {
        id: 11,
        categoryId: 1,

        name: "Blue Cheese",

        description: "Crumbles of creamy French blue cheese top our famous burger patty with our signature mayonnaise sauce.",

        image: BlueCheese,

        price: 215,
    },
    {
        id: 12,
        categoryId: 1,

        name: "Blue Cheese",

        description: "Crumbles of creamy French blue cheese top our famous burger patty with our signature mayonnaise sauce.",

        image: BlueCheese,

        price: 215,
    },
    {
        id: 13,
        categoryId: 1,

        name: "Blue Cheese",

        description: "Crumbles of creamy French blue cheese top our famous burger patty with our signature mayonnaise sauce.",

        image: BlueCheese,

        price: 215,
    },
    {
        id: 14,
        categoryId: 1,

        name: "Blue Cheese",

        description: "Crumbles of creamy French blue cheese top our famous burger patty with our signature mayonnaise sauce.",

        image: BlueCheese,

        price: 215,
    },
    {
        id: 15,
        categoryId: 0,

        name: "4 In the Box",

        description: "4 200gm sandwiches with 4 hero fries and your choice of 4 drinks.",

        image: fourInBox,

        price: 215,
    },
];