import img1 from '../assets/abouthero.jpg';
import imgb from '../assets/aboutbook.jpg';
import imgc1 from '../assets/aboutcabinet1.jpg';
import imgc2 from '../assets/aboutcabinet2.jpg';

const About = () => {
  return (
    <div className="bg-[#f4f0e8] text-[#1c1c1c] font-sans">
      {/* Heading */}
      <div className="text-center py-12">
        <h1 className="text-4xl font-semibold">
          About <br /> Furniture with a Point of View
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {/* Top Section: Image + Right Text */}
        <div className="flex flex-col md:flex-row gap-8">
          <img
            src={img1}
            alt="Hero Image"
            className="w-full md:w-1/2 h-[350px] object-cover rounded-lg"
          />
          <div className="flex-1 flex items-center">
            <div>
              <h2 className="text-xl font-semibold mb-4">Every Piece Tells a Story</h2>
              <p className="text-sm">
                At Teacky Furniture, we don’t just make furniture — we create experiences. Every table, chair, and cabinet is a
                blend of soulful craftsmanship and modern style, built to transform everyday spaces into personal sanctuaries.
              </p>
            </div>
          </div>
        </div>

        {/* Our Story Paragraphs + Image Adjusted */}
        <div className="flex flex-col md:flex-row gap-8 mt-10">
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Story-</h2>
              <div className="flex flex-col lg:flex-row gap-6 text-sm">
                <p className="flex-1">
                  Founded with a vision to make beautiful, functional furniture accessible to all, Teacky began as a small
                  workshop with big dreams. What started with a few <br></br>tools and a deep passion for design has now grown<br></br> into a
                  trusted name in home and office furniture.
                </p>
                <p className="flex-1">
                  What started with a few tools and a deep passion for design has now grown into a trusted name in home and
                  office furniture. Yet, our core remains the same — handcrafted quality, honest materials, and a deep respect
                  for our customers.
                </p>
              </div>
            </div>

            {/* Adjusted Book Image to full height of cabinet */}
            <div className="mt-6 h-full">
              <img
                src={imgb}
                alt="Book Image"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Vertical Cabinet Image beside Paragraphs */}
          <div className="w-full md:w-[280px]">
            <img
              src={imgc1}
              alt="Cabinet Vertical"
              className="h-full min-h-[550px] w-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* What We Stand For + Cabinet Image side by side */}
        <div className="flex flex-col md:flex-row gap-8 mt-20 mb-24">
          {/* Left: Text Cards */}
          <div className="w-full md:w-[60%]">
            <h2 className="text-2xl font-semibold mb-6">What We Stand For-</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Timeless Design',
                'Timeless Design',
                'Timeless Design',
                'Timeless Design',
                'Timeless Design',
                'Timeless Design',
                
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow px-6 py-4 flex justify-between items-center"
                >
                  <span className="text-sm font-medium">{item}</span>
                  <button className="text-xl font-bold text-gray-400">+</button>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Cabinet Image */}
          <div className="w-full md:w-[40%]">
            <img
              src={imgc2}
              alt="Cabinet Image"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
