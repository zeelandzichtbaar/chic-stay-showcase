import { MessageCircle, Shield, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import hostAvatar from "@/assets/host-avatar.jpg";

const HostSection = () => {
  return (
    <Card className="shadow-card">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={hostAvatar} alt="Host Maria" />
            <AvatarFallback>M</AvatarFallback>
          </Avatar>
          
          <div className="flex-1 space-y-3">
            <div>
              <h3 className="text-xl font-semibold">Hosted by Maria</h3>
              <p className="text-muted-foreground">Superhost · 4 years hosting</p>
            </div>
            
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-primary text-primary" />
                <span>127 reviews</span>
              </div>
              <div className="flex items-center gap-1">
                <Shield className="h-4 w-4 text-primary" />
                <span>Identity verified</span>
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              Welcome to my beautiful villa! I'm passionate about providing exceptional experiences 
              for my guests. I live nearby and am always available to help make your stay perfect.
            </p>
            
            <Button variant="outline" className="w-full">
              <MessageCircle className="h-4 w-4 mr-2" />
              Contact host
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HostSection;