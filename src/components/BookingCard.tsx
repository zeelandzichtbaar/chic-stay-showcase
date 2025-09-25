import { useState } from "react";
import { Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import BookingModal from "./BookingModal";

const BookingCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    <Card className="sticky top-6 shadow-card hover:shadow-card-hover transition-shadow duration-300">
      <CardHeader className="pb-4">
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold">€450</span>
          <span className="text-muted-foreground">per night</span>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Check-in/out dates */}
        <div className="grid grid-cols-2 gap-2">
          <div className="space-y-2">
            <Label htmlFor="checkin">Check-in</Label>
            <div className="relative">
              <Input 
                id="checkin" 
                placeholder="Add date"
                className="pl-10"
              />
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="checkout">Check-out</Label>
            <div className="relative">
              <Input 
                id="checkout" 
                placeholder="Add date"
                className="pl-10"
              />
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
          </div>
        </div>

        {/* Guests */}
        <div className="space-y-2">
          <Label htmlFor="guests">Guests</Label>
          <div className="relative">
            <Input 
              id="guests" 
              placeholder="1 guest"
              className="pl-10"
            />
            <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>
        </div>

        {/* Pricing breakdown */}
        <div className="space-y-3 pt-4">
          <div className="flex justify-between">
            <span>€450 × 5 nights</span>
            <span>€2,250</span>
          </div>
          <div className="flex justify-between">
            <span>Cleaning fee</span>
            <span>€75</span>
          </div>
          <div className="flex justify-between">
            <span>Service fee</span>
            <span>€180</span>
          </div>
          
          <Separator />
          
          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>€2,505</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button 
          className="w-full bg-hero-gradient hover:opacity-90 transition-opacity"
          onClick={() => setIsModalOpen(true)}
        >
          Reserve
        </Button>
      </CardFooter>
    </Card>
    </>
  );
};

export default BookingCard;