import {Product} from "../types/product.tsx";

export const products: Product[] = [
    {
        name: "Purses",
        price: "$40",
        shortDescription: "Custom, hand-made purses with strap.",
        longDescription: `Custom hand made purse.  Can be made with various fabrics of the customer's choosing.`,
        productCardImg: "/products/purse/purse-productCard.JPG",
        productImgs: [
            "/products/purse/purse-productCard.JPG",
            "/products/purse/purse1-productImg.JPG",
            "/products/purse/purse2-productImg.png",
            "/products/purse/purse3-productImg.png"
        ],
    },
    {
        name: "Tote Bags",
        price: "$40",
        productCardImg: "/products/tote/tote-productCard.JPG",
        productImgs: [
            "/products/tote/tote-productCard.JPG",
        ],
        shortDescription: "Custom hand made tote bags",
        longDescription: `Custom hand made tote bag.  Can be made with various fabrics of the customer's choosing. Can add strap for an extra $10`,
        dimensions: new Map([
            ['Width', "15 inches"],
            ['Height', "11 inches"],
            ['Depth', "5 inches"],
        ])
    },
    {
        name: "Bingo Bags",
        shortDescription: "Custom, hand-made bags perfect for bingo.",
        longDescription: `Custom hand made bingo bags.  Can be made with various fabrics of the customer's choosing. Can add strap for an extra $10`,
        price: "$25",
        productCardImg: "/products/bingo-bag/bingo-bag-productCard.png",
        productImgs: [
            "/products/bingo-bag/bingo-bag-productCard.png",
            "/products/bingo-bag/bingo-bag1-productImg.png",
            "/products/bingo-bag/bingo-bag2-productImg.png",
            "/products/bingo-bag/bingo-bag3-productImg.png"
        ],
    },
    {
        name: "Large Bingo Bags",
        shortDescription: "Custom, large, hand-made bags perfect for bingo.",
        longDescription: `Custom hand made bingo bags.  Same dimensions as the tote bag.  Can be made with various fabrics of the customer's choosing. Can add strap for an extra $10`,
        price: "$40",
        productCardImg: "/products/large-bingo-bag/tote3-productImg.JPG",
        productImgs: [
            "/products/large-bingo-bag/tote2-productImg.JPG",
            "/products/large-bingo-bag/tote3-productImg.JPG",
        ],
        dimensions: new Map([
            ['Width', "15 inches"],
            ['Height', "11 inches"],
            ['Depth', "5 inches"],
        ])
    },
];
