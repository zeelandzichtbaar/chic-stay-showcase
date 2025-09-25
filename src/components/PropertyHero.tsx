import { ArrowLeft, Heart, Share } from "lucide-react";
import { Button } from "@/components/ui/button";
import villaHero from "@/assets/villa-hero.jpg";

const PropertyHero = () => {
  return (
    <div className="relative h-[70vh] overflow-hidden rounded-2xl">
      <img 
        src={villaHero} 
        alt="Luxury villa with infinity pool"
        className="w-full h-full object-cover"
      />
      
      {/* Header with navigation */}
      <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-10">
        <Button variant="secondary" size="icon" className="bg-background/80 backdrop-blur-sm">
          <ArrowLeft className="h-4 w-4" />
        </Button>
        
        <div className="flex gap-2">
          <Button variant="secondary" size="icon" className="bg-background/80 backdrop-blur-sm">
            <Share className="h-4 w-4" />
          </Button>
          <Button variant="secondary" size="icon" className="bg-background/80 backdrop-blur-sm">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
    </div>
  );
};

export default PropertyHero;