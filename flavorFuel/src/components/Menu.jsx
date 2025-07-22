import React from 'react';

const menuItems = [
  {
    name: "Butter Chicken",
    description: "Tender chicken in rich tomato and cream sauce",
    price: "₹450",
    image: "https://images.unsplash.com/photo-1728910107534-e04e261768ae?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
    {
      name: "Biryani Royal",
      description: "Fragrant basmati rice with tender lamb and spices",
      price: "₹550",
      image: "https://images.unsplash.com/photo-1701579231349-d7459c40919d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Paneer Makhani",
      description: "Cottage cheese in velvety tomato gravy",
      price: "₹380",
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop"
    },
    {
      name: "Tandoori Platter",
      description: "Mixed grilled specialties from our clay oven",
      price: "₹650",
      image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop"
    },
    {
      name: "Dal Maharaja",
      description: "Royal black lentils slow-cooked overnight",
      price: "₹320",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop"
    },
    {
      name: "Naan Assortment",
      description: "Freshly baked breads with garlic, butter & herbs",
      price: "₹180",
      image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&h=300&fit=crop"
    }
];

const Menu = () => {
  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Signature</span> Menu
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of authentic Indian dishes, 
            each prepared with the finest ingredients and traditional techniques.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <MenuItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const MenuItem = ({ item }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
      <div className="relative overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-200">
            {item.name}
          </h3>
          <span className="text-2xl font-bold text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
            {item.price}
          </span>
        </div>
        <p className="text-gray-600 leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default Menu;