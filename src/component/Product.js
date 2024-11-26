import React, { useState, useRef } from 'react';
import meowSound from "../assets/sounds/meow-1.mp3";

const ProductCard = ({ product }) => {
    // Create a ref for the audio element
    const meowAudioRef = useRef(null);

    // Function to play the meow sound
    const playMeowSound = () => {
        if (meowAudioRef.current) {
            meowAudioRef.current.play();
        }
    };

    return (
        <div id='products' className="group my-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
            <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl group-hover:opacity-75 transition-all duration-300">
                <img
                    className="peer absolute top-0 right-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src={product.image1}
                    alt="product image"
                />
            </div>
            <div className="mt-4 px-5 pb-5">
                <h5 className="text-xl tracking-tight text-slate-900">{product.title}</h5>
                <div className="mt-2 mb-5 flex items-center justify-between">
                    <p>
                        <span className="text-3xl font-bold text-slate-900">₱{product.price}</span>
                    </p>
                </div>
                <button
                    className="flex items-center justify-center rounded-md bg-[#BEB7A4] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300"
                    onClick={() => {
                        playMeowSound(); // Play sound on click
                        console.log('Add to cart clicked!');
                    }}
                >
                    <img
                        src="https://cdn3.iconfinder.com/data/icons/cat-commerce-outline/120/cart-512.png"
                        alt="Cart Icon"
                        className="mr-2 h-6 w-6"
                    />
                    Add to cart
                </button>

                {/* Hidden audio element with imported audio */}
                <audio ref={meowAudioRef} src={meowSound} />
            </div>
        </div>
    );
};

const ProductComponent = () => {
    // Array of product data
    const products = [
        {
            id: 1,
            title: 'Multi Vitamin',
            image1: 'https://images-cdn.ubuy.co.in/634e4ba505dd642f102dfcb7-vetriscience-nucat-multi-vitamin-for.jpg',
            price: 449,
            breed: 'persian',
            age: 'kitten'
        },
        {
            id: 2,
            title: 'Vitamin Plus',
            image1: 'https://www.onlynaturalpet.com/cdn/shop/products/Feline_Ultimate_Daily_Senior_Vitamins_Jar_Front_1400x1400.jpg',
            price: 180,
            breed: 'siamese',
            age: 'adult'
        },
        {
            id: 3,
            title: 'Salmon',
            image1: 'https://www.sanal.nl/files/thumbnails/sc1581-multi-vitamin-salmon-cup-2020.350x400x1.jpg',
            price: 120,
            breed: 'maine-coon',
            age: 'kitten'
        },
        {
            id: 4,
            title: 'Natural',
            image1: 'https://petsegypt.com/web/image/product.template/3412/image_1024?unique=d2d47d5',
            price: 200,
            breed: 'bengal',
            age: 'adult'
        },
        {
            id: 5,
            title: 'Sanal Vitamin',
            image1: 'https://www.akvamex.cz/sanal-cat-vitamins-100tbl-60g--3.jpg',
            price: 70,
            breed: 'persian',
            age: 'senior'
        },
        {
            id: 6,
            title: 'Tasty Star',
            image1: 'https://petskyonline.com/cdn/products/e3fdcc1460f140e75a0bfa514127b076-sm.jpg',
            price: 150,
            breed: 'siamese',
            age: 'adult'
        },
        {
            id: 7,
            title: 'Cat Star',
            image1: 'https://www.petzonebd.com/wp-content/uploads/2022/08/CAT-STAR-TONIC.jpg',
            price: 55,
            breed: 'bengal',
            age: 'kitten'
        },
        {
            id: 8,
            title: 'Coat Tonic',
            image1: 'https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/Supplements_for_CatsCat_Star_Multivitami-Smart_Heart-64050-340505.jpg',
            price: 65,
            breed: 'maine-coon',
            age: 'senior'
        },
    ];

    // State for the selected breed and age filters
    const [selectedBreed, setSelectedBreed] = useState('');
    const [selectedAge, setSelectedAge] = useState('');

    // Function to filter the products
    const filteredProducts = products.filter((product) => {
        const breedMatch = selectedBreed ? product.breed === selectedBreed : true;
        const ageMatch = selectedAge ? product.age === selectedAge : true;
        return breedMatch && ageMatch;
    });

    return (
        <div className="max-w-6xl mx-auto px-5 py-10">
            {/* Heading */}
            <h1 className="text-4xl font-bold mb-8 text-left">Cat Vitamins</h1>

            {/* Filters */}
            <div className="flex flex-wrap gap-5 justify-start mb-10">
                {/* Breed Filter */}
                <div className="flex flex-col">
                    <label className="text-lg font-medium mb-2 text-start" htmlFor="breed">
                        Breed
                    </label>
                    <select
                        id="breed"
                        name="breed"
                        className="border border-gray-300 rounded-md p-2 w-52"
                        value={selectedBreed}
                        onChange={(e) => setSelectedBreed(e.target.value)}
                    >
                        <option value="">All Breeds</option>
                        <option value="persian">Persian</option>
                        <option value="siamese">Siamese</option>
                        <option value="maine-coon">Maine Coon</option>
                        <option value="bengal">Bengal</option>
                    </select>
                </div>

                {/* Age Filter */}
                <div className="flex flex-col">
                    <label className="text-lg font-medium mb-2 text-start" htmlFor="age">
                        Age
                    </label>
                    <select
                        id="age"
                        name="age"
                        className="border border-gray-300 rounded-md p-2 w-52"
                        value={selectedAge}
                        onChange={(e) => setSelectedAge(e.target.value)}
                    >
                        <option value="">All Ages</option>
                        <option value="kitten">Kitten</option>
                        <option value="adult">Adult</option>
                        <option value="senior">Senior</option>
                    </select>
                </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductComponent;
