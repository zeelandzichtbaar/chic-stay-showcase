import { MapPin, Star, Users, Bed, Bath, Wifi, Car, Coffee, Tv } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const PropertyDetails = () => {
  const amenities = [
    { icon: Wifi, label: "Free WiFi" },
    { icon: Car, label: "Free parking" },
    { icon: Coffee, label: "Kitchen" },
    { icon: Tv, label: "TV" },
  ];

  return (
    <div className="space-y-6">
      {/* Title and location */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Villa Serenity - Luxury Mediterranean Retreat</h1>
        <div className="flex items-center gap-1 text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>Costa Brava, Spain</span>
        </div>
      </div>

      {/* Rating and details */}
      <div className="flex items-center gap-6 text-sm">
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-primary text-primary" />
          <span className="font-semibold">4.9</span>
          <span className="text-muted-foreground">(47 reviews)</span>
        </div>
        
        <div className="flex items-center gap-4 text-muted-foreground">
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>8 guests</span>
          </div>
          <div className="flex items-center gap-1">
            <Bed className="h-4 w-4" />
            <span>4 bedrooms</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="h-4 w-4" />
            <span>3 bathrooms</span>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">About this place</h2>
        <p className="text-muted-foreground leading-relaxed">
          Escape to this stunning modern villa perched on the Mediterranean coast. With breathtaking sea views, 
          an infinity pool, and luxurious amenities, Villa Serenity offers the perfect setting for an 
          unforgettable vacation. The open-plan design seamlessly blends indoor and outdoor living, 
          creating a serene atmosphere ideal for relaxation and entertainment.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Located just minutes from pristine beaches and charming coastal towns, you'll have easy access 
          to local restaurants, shops, and attractions while enjoying complete privacy and tranquility.
        </p>
      </div>

      {/* Amenities */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">What this place offers</h2>
        <div className="grid grid-cols-2 gap-4">
          {amenities.map((amenity, index) => (
            <div key={index} className="flex items-center gap-3">
              <amenity.icon className="h-5 w-5 text-muted-foreground" />
              <span>{amenity.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;