import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import heroBanner from "@/assets/home/hero-banner.jpg";
import product1 from "@/assets/home/sofa1.jpg";
import product2 from "@/assets/home/sofa2.jpg";
import product3 from "@/assets/home/sofa3.jpg";
import product4 from "@/assets/home/sofa4.jpg";

import category1 from "@/assets/home/category1.jpg";
import category2 from "@/assets/home/category2.jpg";
import category3 from "@/assets/home/category3.jpg";
import category4 from "@/assets/home/category4.jpg";
import category5 from "@/assets/home/category5.jpg";
import category6 from "@/assets/home/category6.jpg";

import gallery1 from "@/assets/home/gallery1.jpg";
import gallery2 from "@/assets/home/gallery2.jpg";
import gallery3 from "@/assets/home/gallery3.jpg";
import gallery4 from "@/assets/home/gallery4.jpg";
import gallery5 from "@/assets/home/gallery5.jpg";
import gallery6 from "@/assets/home/gallery6.jpg";
import gallery7 from "@/assets/home/gallery7.jpg";
import gallery8 from "@/assets/home/gallery8.jpg";

const Home = () => {
  const navigate = useNavigate();

  const categories = [
    { img: category1 },
    { img: category2 },
    { img: category3 },
    { img: category4 },
    { img: category5 },
    { img: category6 },
  ];

  const gallery = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
    gallery8,
  ];

  const products = [
    { img: product1, title: 'Sold - Minerva sofa daybed', price: "₹5000" },
    { img: product2, title: 'Sold - Minerva sofa daybed', price: "₹5000" },
    { img: product3, title: 'Sold - Minerva sofa daybed', price: "₹5000" },
    { img: product4, title: 'Sold - Minerva sofa daybed', price: "₹5000" },
  ];

  return (
    <div className="overflow-x-hidden">
      <div className="w-full bg-cover bg-center min-h-[400px] md:min-h-[600px] flex items-center justify-center text-white" style={{ backgroundImage: `url(${heroBanner})` }}>
        <div className="text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold font-serif mb-4">
            Transform Your Space with <br /> Timeless Elegance
          </h1>
          <p className="text-base sm:text-lg max-w-xl mx-auto">
            Discover handcrafted, modern furniture designed to elevate your home. Built with precision. Styled for luxury. Made to last.
          </p>
        </div>
      </div>

      <section className="w-full px-4 sm:px-6 md:px-12 py-16 bg-white">
        <div className="text-center mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
            What are you looking for?
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-7xl mx-auto">
          {categories.map((category, index) => (
            <div
              key={index}
              onClick={() => navigate("/products")}
              className="bg-gray-100 rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 cursor-pointer"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={category.img}
                  alt={`Category ${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {["Best Sellers", "New Arrivals", "Home Decor"].map((section, i) => (
        <section key={i} className={`px-4 md:px-12 py-12 ${i % 2 === 1 ? "bg-gray-50" : ""}`}>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-left mb-10">{section}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white p-4 rounded-lg shadow-md text-center"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden mb-4">
                    <img
                      src={product.img}
                      alt={product.title}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <h3 className="font-semibold mb-2 text-sm md:text-base">{product.title}</h3>
                  <p className="text-muted-foreground text-sm">{product.price}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="px-4 md:px-12 py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-left mb-10">Gallery</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {gallery.map((img, index) => (
              <motion.img
                key={index}
                src={img}
                alt={`Gallery image ${index + 1}`}
                className="rounded-lg w-full aspect-[4/5] object-cover cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                onClick={() => navigate("/gallery")}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;