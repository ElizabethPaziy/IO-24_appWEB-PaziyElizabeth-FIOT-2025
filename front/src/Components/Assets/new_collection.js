import wp1 from './Photo/woman_parfum/wp1/img.png';
import wp2 from './Photo/woman_parfum/wp2/img.png';
import mp1 from './Photo/man_parfum/mp1/img.png';
import mp4 from './Photo/man_parfum/mp4/img.png';
import mt2 from './Photo/man_toilet/mt2/img.png';
import mt3 from './Photo/man_toilet/mt3/img.png';
import wt3 from './Photo/woman_toilet/wt3/img.png';
import wt4 from './Photo/woman_toilet/wt4/img.png';
let new_collection = [
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
        name: 'Versace Pour Homme',
        type: 'parfum',
        category: 'men',
        image: mp1,
        new_price: 67.0,
        old_price: 82.0,
        description: "Mediterranean freshness with notes of bergamot, neroli, and cedarwood. A classic scent with a modern twist."
    },
    {
        id: 4,
        name: 'Euphoria Men Calvin Klein',
        type: 'parfum',
        category: 'men',
        image: mp4,
        new_price: 73.5,
        old_price: 100.0,
        description: "A seductive blend of ginger, pepper, suede, and patchouli, creating a bold, modern, and masculine aroma."
    },
    {
        id: 5,
        name: 'Kenzo Pour Homme',
        type: 'toilet',
        category: 'men',
        image: mt2,
        new_price: 50.5,
        old_price: 68.0,
        description: "Fresh marine fragrance with notes of sea breeze, mint, pine, and sandalwood. Energetic and revitalizing."
    },
    {
        id: 6,
        name: 'Loewe Solo Ella',
        type: 'toilet',
        category: 'women',
        image: wt3,
        new_price: 40.0,
        old_price: 77.0,
        description: "Elegant blend of orange blossom, green apple, jasmine, and musk. Fresh and radiant, perfect for daytime wear."
    },
    {
        id: 7,
        name: 'Lanvin Blue Orchid',
        type: 'toilet',
        category: 'women',
        image: wt4,
        new_price: 64.5,
        old_price: 78.5,
        description: "Floral-fruity scent with notes of orchid, pear, blackcurrant, and vanilla. Delicate and luminous."
    },
    {
        id: 8,
        name: 'Just Cavalli Wild Heart',
        type: 'toilet',
        category: 'man',
        image: mt3,
        new_price: 78.0,
        old_price: 100.0,
        description: "Wild and daring scent with spicy black pepper, leather, vetiver, and warm amber notes."
    },
]
export default new_collection
