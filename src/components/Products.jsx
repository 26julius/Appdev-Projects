import { Link } from "react-router-dom";

const products = [
    { 
        id: 1, 
        name: 'Logitech MX Keys S', 
        description: 'With over 235 keyboards tested, we consider the Logitech MX Keys S the best everyday-use keyboard for most people. While this keyboard may not have the same performance or customization options as some gaming or enthusiast keyboards, it delivers a perfect mix of build quality, ease of use, and excellent typing quality.', 
        reviews: [
            { text: "Beautiful design and amazing quality!", author: "sida" },
            { text: "The craftsmanship is outstanding.", author: "nieb" },
            { text: "Feels great to type on!", author: "jj" }
        ]
    },
    { 
        id: 2, 
        name: 'Epomaker TH80 Pro', 
        description: 'At a mid-range price point, we recommend the Epomaker TH80 Pro. This compact wireless keyboard has plenty going for it, including impressive build quality and a choice between two attractive keycap themes to match your setup.', 
        reviews: [
            { text: "Beautiful design and amazing quality!", author: "Alex" },
            { text: "The craftsmanship is outstanding.", author: "Jordan" },
            { text: "Feels great to type on!", author: "Taylor" }
        ]
    },
    { 
        id: 3, 
        name: 'Logitech Signature K650', 
        description: 'Instead of mechanical or scissor switches, the budget-friendly Logitech Signature K650 uses rubber dome switches that offer a quiet typing experience, making it one of the best for office use, dorm rooms, or other shared working spaces.', 
        reviews: [
            { text: "Beautiful design and amazing quality!", author: "Alex" },
            { text: "The craftsmanship is outstanding.", author: "Jordan" },
            { text: "Feels great to type on!", author: "Taylor" }
        ]
    },
    { 
        id: 4, 
        name: 'Logitech Pebble Keys 2 K380s', 
        description: 'The best cheap keyboard weve tested is the Logitech Pebble Keys 2 K380s. This compact wireless keyboard punches well above its price point, making it a favorite among students and on-the-go professionals.', 
        reviews: [
            { text: "Beautiful design and amazing quality!", author: "Alex" },
            { text: "The craftsmanship is outstanding.", author: "Jordan" },
            { text: "Feels great to type on!", author: "Taylor" }
        ]
    },
    { 
        id: 5, 
        name: 'Logitech K480', 
        description: 'If you rely on mobile devices, like iPads, tablets, or phones—we recommend the Logitech K480. Its a compact unit that is very similar in design to our best cheap pick, the Logitech K380. ', 
        reviews: [
            { text: "Beautiful design and amazing quality!", author: "Alex" },
            { text: "The craftsmanship is outstanding.", author: "Jordan" },
            { text: "Feels great to type on!", author: "Taylor" }
        ]
    }
    ,
    { 
        id: 6, 
        name: 'Logitech G715', 
        description: 'In addition to being a great keyboard for everyday or office use, the Logitech G715 has excellent gaming performance that our top pick, the Logitech MX Keys S, lacks.', 
        reviews: [
            { text: "Beautiful design and amazing quality!", author: "Alex" },
            { text: "The craftsmanship is outstanding.", author: "Jordan" },
            { text: "Feels great to type on!", author: "Taylor" }
        ]
    }
    ,
    { 
        id: 7, 
        name: 'Keychron Q5 Max Q1 Max, Q2 Max, etc.', 
        description: 'Regardless of which size you choose, each model in the series shares the same outstanding build quality—with solid aluminum cases and double-gasket designs that lend a softer, almost springy typing feeling compared to many other prebuilt mechanical keyboards.  ', 
        reviews: [
            { text: "Beautiful design and amazing quality!", author: "Alex" },
            { text: "The craftsmanship is outstanding.", author: "Jordan" },
            { text: "Feels great to type on!", author: "Taylor" }
        ]
    }
    ,
    { 
        id: 8, 
        name: 'Logitech MX Mechanical', 
        description: 'The Logitech MX Mechanical is essentially a mechanical version of the Logitech MX Keys S. While its a good choice if youre already in a Logitech peripheral system, you can find much more satisfying mechanical keyboards cheaper, like the Epomaker TH80 Pro', 
        reviews: [
            { text: "Beautiful design and amazing quality!", author: "Alex" },
            { text: "The craftsmanship is outstanding.", author: "Jordan" },
            { text: "Feels great to type on!", author: "Taylor" }
        ]
    }
    ,
    { 
        id: 9, 
        name: 'Keychron B6 Pro', 
        description: 'The Keychron B6 Pro looks remarkably similar to the Logitech MX Keys S and is significantly more affordable.', 
        reviews: [
            { text: "Beautiful design and amazing quality!", author: "Alex" },
            { text: "The craftsmanship is outstanding.", author: "Jordan" },
            { text: "Feels great to type on!", author: "Taylor" }
        ]
    }
    ,
    { 
        id: 10, 
        name: 'SteelSeries Apex Pro TKL (2023)', 
        description: 'The SteelSeries Apex Pro TKL (2023) is a versatile gaming keyboard in the same price range as the Logitech G715 ', 
        reviews: [
            { text: "Beautiful design and amazing quality!", author: "Alex" },
            { text: "The craftsmanship is outstanding.", author: "Jordan" },
            { text: "Feels great to type on!", author: "Taylor" }
        ]
    }
];

export default function Products() {
    return (
        <div className="productsdiv">
            <h1>Product List</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <Link to={`/products/${product.id}`} state={product}>
                            <p>{product.name}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
