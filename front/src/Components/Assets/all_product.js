import wp1 from "./Photo/woman_parfum/wp1/img.png";
import wp2 from "./Photo/woman_parfum/wp2/img.png";
import wp3 from "./Photo/woman_parfum/wp3/img.png";
import wp4 from "./Photo/woman_parfum/wp4/img.png";

import mp1 from './Photo/man_parfum/mp1/img.png';
import mp2 from './Photo/man_parfum/mp2/img.png';
import mp3 from './Photo/man_parfum/mp3/img.png';
import mp4 from './Photo/man_parfum/mp4/img.png';

import wt1 from "./Photo/woman_toilet/wt1/img.png";
import wt2 from "./Photo/woman_toilet/wt2/img.png";
import wt3 from "./Photo/woman_toilet/wt3/img.png";
import wt4 from "./Photo/woman_toilet/wt4/img.png";

import mt1 from './Photo/man_toilet/mt1/img.png';
import mt2 from './Photo/man_toilet/mt2/img.png';
import mt3 from './Photo/man_toilet/mt3/img.png';
import mt4 from './Photo/man_toilet/mt4/img.png';

let all_product = [
    {
        id: 1,
        name: 'Miss Dior',
        type: 'parfum',
        category: 'women',
        image: wp1,
        new_price: 50.0,
        old_price: 80.5,
        description: "A floral fragrance with fresh notes of Italian mandarin, rose, and patchouli. Perfectly balanced between elegance and charm."
    },
    {
        id: 2,
        name: 'Versace Bright Crystal',
        type: 'parfum',
        category: 'women',
        image: wp2,
        new_price: 40.0,
        old_price: 70.5,
        description: "Bright, fresh, and sensual, featuring top notes of pomegranate and yuzu, heart notes of peony and magnolia, and a musky base."
    },
    {
        id: 3,
        name: 'Soul Of Mine',
        type: 'parfum',
        category: 'women',
        image: wp3,
        new_price: 67.0,
        old_price: 82.0,
        description: "An intimate blend of warm vanilla, soft musk, and delicate floral tones, perfect for those who appreciate a mysterious allure."
    },
    {
        id: 4,
        name: 'Prada Ocean Luna Rosa',
        type: 'parfum',
        category: 'women',
        image: wp4,
        new_price: 73.5,
        old_price: 100.0,
        description: "A fresh aquatic scent combining marine accords, bergamot, iris, and vetiver. Inspired by ocean waves and freedom."
    },
    {
        id: 5,
        name: 'Versace Pour Homme',
        type: 'parfum',
        category: 'men',
        image: mp1,
        new_price: 67.0,
        old_price: 82.0,
        description: "Mediterranean freshness with notes of bergamot, neroli, and cedarwood. A classic scent with a modern twist."
    },
    {
        id: 6,
        name: 'ZarkoPerfume MoLeCule №8',
        type: 'parfum',
        category: 'men',
        image: mp2,
        new_price: 70.0,
        old_price: 89.0,
        description: "Innovative molecular fragrance with crisp notes of citrus, light woods, and amber, designed to adapt uniquely to your skin."
    },
    {
        id: 7,
        name: 'BoisMontaigne Gris Montaigne',
        type: 'parfum',
        category: 'men',
        image: mp3,
        new_price: 50.5,
        old_price: 74.5,
        description: "A woody and spicy fragrance, rich in cardamom, sandalwood, and vetiver. Earthy yet refined."
    },
    {
        id: 8,
        name: 'Euphoria Men Calvin Klein',
        type: 'parfum',
        category: 'men',
        image: mp4,
        new_price: 73.5,
        old_price: 100.0,
        description: "A seductive blend of ginger, pepper, suede, and patchouli, creating a bold, modern, and masculine aroma."
    },
    {
        id: 9,
        name: 'Chanel Paris №5',
        type: 'toilet',
        category: 'women',
        image: wt1,
        new_price: 54.0,
        old_price: 80.5,
        description: "An iconic powdery floral with aldehydes, jasmine, rose, and sandalwood. A timeless classic for sophisticated women."
    },
    {
        id: 10,
        name: 'Anna Sui Secret Wish',
        type: 'toilet',
        category: 'women',
        image: wt2,
        new_price: 42.5,
        old_price: 55.5,
        description: "Fruity-floral fragrance featuring lemon, melon, pineapple, and black currant, creating a playful, fairy-tale scent."
    },
    {
        id: 11,
        name: 'Loewe Solo Ella',
        type: 'toilet',
        category: 'women',
        image: wt3,
        new_price: 40.0,
        old_price: 77.0,
        description: "Elegant blend of orange blossom, green apple, jasmine, and musk. Fresh and radiant, perfect for daytime wear."
    },
    {
        id: 12,
        name: 'Lanvin Blue Orchid',
        type: 'toilet',
        category: 'women',
        image: wt4,
        new_price: 64.5,
        old_price: 78.5,
        description: "Floral-fruity scent with notes of orchid, pear, blackcurrant, and vanilla. Delicate and luminous."
    },
    {
        id: 13,
        name: 'Valentino Uoma',
        type: 'toilet',
        category: 'men',
        image: mt1,
        new_price: 37.5,
        old_price: 80.5,
        description: "A sophisticated scent with notes of bergamot, leather, cedar, and roasted coffee. Warm, masculine, and bold."
    },
    {
        id: 14,
        name: 'Kenzo Pour Homme',
        type: 'toilet',
        category: 'men',
        image: mt2,
        new_price: 50.5,
        old_price: 68.0,
        description: "Fresh marine fragrance with notes of sea breeze, mint, pine, and sandalwood. Energetic and revitalizing."
    },
    {
        id: 15,
        name: 'Just Cavalli Wild Heart',
        type: 'toilet',
        category: 'men',
        image: mt3,
        new_price: 78.0,
        old_price: 100.0,
        description: "Wild and daring scent with spicy black pepper, leather, vetiver, and warm amber notes."
    },
    {
        id: 16,
        name: 'Mexx Black',
        type: 'toilet',
        category: 'men',
        image: mt4,
        new_price: 62.5,
        old_price: 69.6,
        description: "A fresh yet intense fragrance combining citrus, black pepper, patchouli, and cedarwood for a modern masculine aroma."
    }
]

export default all_product;
