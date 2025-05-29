import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

import product1 from '@/assets/home/sofa1.jpg'
import product2 from '@/assets/home/sofa2.jpg'
import product3 from '@/assets/home/sofa3.jpg'
import product4 from '@/assets/home/sofa4.jpg'

const products = [
  {
    id: 1,
    img: product1,
    title: 'Sold - Peter Hvidt and Orla Molgaard-Nielsen "Minerva" sofa daybed',
    price: '₹5,000',
  },
  {
    id: 2,
    img: product2,
    title: 'Sold - Peter Hvidt and Orla Molgaard-Nielsen "Minerva" sofa daybed',
    price: '₹5,000',
  },
  {
    id: 3,
    img: product3,
    title: 'Sold - Peter Hvidt and Orla Molgaard-Nielsen "Minerva" sofa daybed',
    price: '₹5,000',
  },
  {
    id: 4,
    img: product4,
    title: 'Sold - Peter Hvidt and Orla Molgaard-Nielsen "Minerva" sofa daybed',
    price: '₹5,000',
  },
]

const Product = () => {
  const navigate = useNavigate()

  const handleClick = (id: number) => {
    navigate(`/details/${id}`)
  }

  return (
    <section className="px-4 sm:px-6 md:px-12 py-12 bg-gray-50">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-left mb-8 sm:mb-10">
      Products
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          onClick={() => handleClick(product.id)}
          className="bg-white p-4 rounded-lg shadow-md text-center cursor-pointer hover:shadow-lg transition-shadow"
        >
          <div className="aspect-[4/3] w-full overflow-hidden mb-4">
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-full object-cover rounded"
            />
          </div>
          <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">
            {product.title}
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground">
            {product.price}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

  )
}

export default Product
