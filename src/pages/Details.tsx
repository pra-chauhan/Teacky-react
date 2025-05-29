import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

import sofa1 from "../assets/home/sofa1.jpg";
import sofa2 from "../assets/home/sofa2.jpg";
import sofa3 from "../assets/home/sofa3.jpg";
import sofa4 from "../assets/home/sofa4.jpg";

// Dummy product data
const products = [
  {
    img: sofa1,
    title: 'Sold - Peter Hvidt and Orla Molgaard-Nielsen "Minerva" sofa daybed',
    price: "₹5000",
  },
  {
    img: sofa2,
    title: "Sold - Danish Modern Teak Sofa Daybed by Grete Jalk",
    price: "₹5000",
  },
  {
    img: sofa3,
    title: "Sold - Rare 1960s Scandinavian Walnut Sofa Set",
    price: "₹5000",
  },
  {
    img: sofa4,
    title: "Sold - Classic Mid Century Sofa with Modern Touch",
    price: "₹5000",
  },
];

const recommended = products;

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = products[parseInt(id || "0", 10)];

  if (!product) {
    return (
      <div className="p-10 text-red-600 text-center">Product not found.</div>
    );
  }

  return (
    <div className="bg-[#f8f4ed] py-10 px-4 sm:px-6 md:px-10 lg:px-20 max-w-screen-2xl mx-auto">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row gap-10 mb-16">
        {/* Left - Images */}
        <div className="flex-1">
          <img
            src={product.img}
            alt="Product"
            className="rounded-lg w-full max-h-[500px] object-cover"
          />
          <div className="flex gap-4 mt-4 overflow-x-auto pb-2">
            {[...Array(4)].map((_, i) => (
              <img
                key={i}
                src={product.img}
                alt={`Thumb ${i}`}
                className="w-20 h-20 flex-shrink-0 object-cover rounded border border-gray-300"
              />
            ))}
          </div>
        </div>

        {/* Right - Details */}
        <div className="flex-1">
          <button
            className="mb-4 text-sm text-gray-500 hover:underline"
            onClick={() => navigate(-1)}
          >
            ← Back
          </button>
          <h1 className="text-xl sm:text-2xl font-semibold mb-2">
            {product.title}
          </h1>
          <p className="text-lg sm:text-xl text-red-600 font-bold mb-2">
            {product.price}
          </p>
          <p className="text-blue-700 text-sm mb-4 cursor-pointer underline">
            Need Customized Services
          </p>

          <div className="mb-4">
            <h2 className="font-semibold mb-1">Overview:</h2>
            <p className="text-sm text-gray-600">
              Chakra Nesting Table, inspired by the arc's elegance, blends form
              and function. A simple rotation reveals or conceals your favorite
              items, offering beauty and versatility in one.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="font-semibold mb-1">Specifications:</h2>
            <ul className="list-disc list-inside text-sm text-gray-600">
              <li>Handcrafted in Indian Teak wood.</li>
              <li>
                Polished with premium matte-stained finish sealed with an
                oil-based lacquer for protection.
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="font-semibold mb-1">
              Details & Dimensions (in cm):
            </h2>
            <ul className="text-sm text-gray-600">
              <li>L-90 x W-90 x H-51</li>
              <li>L-80 x W-80 x H-41</li>
              <li>L-40 x W-40 x H-31</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <Button className="w-full sm:w-auto sm:min-w-[140px]">
              Add to Cart
            </Button>
            <Button className="w-full sm:w-auto sm:min-w-[140px] bg-black text-white hover:bg-gray-800">
              Buy Now
            </Button>
          </div>
        </div>
      </div>

      {/* Recommended Section */}
      <div>
        <h2 className="text-xl font-semibold mb-6">Recommended</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {recommended.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 shadow-sm text-center hover:shadow-md transition-shadow"
            >
              <img
                src={item.img}
                alt="Recommended Product"
                className="rounded mb-3 aspect-video w-full object-cover"
              />
              <p className="text-sm font-medium mb-1">{item.title}</p>
              <p className="font-semibold text-gray-800">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
