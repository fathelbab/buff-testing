import type { Category } from "./types";
import offers from "../assets/imgs/OurMenu/offers.png";
import beef from "../assets/imgs/OurMenu/beef.png";
import chicken from "../assets/imgs/OurMenu/chicken.png";
import appetizers from "../assets/imgs/OurMenu/appetizers.png";
import dessert from "../assets/imgs/OurMenu/dessert.png";
import the100 from "../assets/imgs/OurMenu/the100.png";
import keto from "../assets/imgs/OurMenu/keto.png";
import drinks from "../assets/imgs/OurMenu/drinks.png";
import sauces from "../assets/imgs/OurMenu/sauces.png";
import buffstuff from "../assets/imgs/OurMenu/buffstuff.png";

export const categories: Category[] = [
    {
        id: 0,
        name: "Offers",
        tabName: "Offers",
        image: offers
    },
    {
        id: 1,
        name: "Beef Sandwiches",
        tabName: "Beef",
        image: beef,
    },

    {
        id: 2,
        name: "Chicken Sandwiches",
        tabName: "Chicken",
        image: chicken,
    },
    {
        id: 3,
        name: "Keto & Light",
        tabName: "Keto & Light",
        image: keto,
    },
    {
        id: 4,
        name: "The 100",
        tabName: "The 100",
        image: the100,
    },
    {
        id: 5,
        name: "Appetizers",
        tabName: "Appetizers",
        image: appetizers,
    },
    {
        id: 6,
        name: "Dips & Sauces",
        tabName: "Dips",
        image: sauces,
    },
    {
        id: 7,
        name: "Desserts",
        tabName: "Desserts",
        image: dessert,
    },
    {
        id: 8,
        name: "Drinks",
        tabName: "Drinks",
        image: drinks,
    },
    {
        id: 9,
        name: "Buff Stuff",
        tabName: "Buff Stuff",
        image: buffstuff,
    },
];