import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import villaInterior from "@/assets/villa-interior-1.jpg";
import villaBedroom from "@/assets/villa-bedroom.jpg";
import villaKitchen from "@/assets/villa-kitchen.jpg";
import villaPool from "@/assets/villa-pool.jpg";
import villaBathroom from "@/assets/villa-bathroom.jpg";

const images = [
  { src: villaInterior, alt: "Modern living room" },
  { src: villaBedroom, alt: "Master bedroom" },
  { src: villaKitchen, alt: "Fully equipped kitchen" },
  { src: villaPool, alt: "Pool area" },
  { src: villaBathroom, alt: "Luxury bathroom" },
];

const PropertyGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">Photo gallery</h3>
      
      {/* Main image viewer */}
      <div className="relative h-80 rounded-xl overflow-hidden mb-4">
        <img 
          src={images[currentIndex].src} 
          alt={images[currentIndex].alt}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
        
        <Button 
          variant="secondary" 
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
          onClick={prevImage}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        <Button 
          variant="secondary" 
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
          onClick={nextImage}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Thumbnail grid */}
      <div className="grid grid-cols-5 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`relative h-16 rounded-lg overflow-hidden transition-all duration-200 ${
              index === currentIndex 
                ? 'ring-2 ring-primary scale-105' 
                : 'opacity-70 hover:opacity-100 hover:scale-105'
            }`}
          >
            <img 
              src={image.src} 
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default PropertyGallery;