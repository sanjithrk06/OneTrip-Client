import { useEffect } from 'react';
import 'aos/dist/aos.css'; // AOS styles
import AOS from 'aos';

const Gallery = ({ images }) => {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);

  return (
    <section className="pt-12 bg-white pb-12">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex justify-center items-center">
          <div data-aos="fade-right" className="text-center">
            <h2 className="text-4xl text-black font-bold mb-4">Gallery</h2>
            <p className="text-lg text-gray-600">
              A gallery is a space where art and beauty converge, inviting us to pause and appreciate
              <br />
              the creativity of the human spirit.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6 mt-8">
          {Array.isArray(images) && images.length > 0 ? (
            images.map((imgSrc, index) => (
              <div key={index} className="overflow-hidden w-58 h-54 rounded-xl shadow-lg">
                <img className="w-full h-full" src={imgSrc} alt={`Gallery image ${index + 1}`} />
              </div>
            ))
          ) : (
            <p>No images available.</p>
          )}
        </div>
      </div>
    </section>
  );
};



export default Gallery;
