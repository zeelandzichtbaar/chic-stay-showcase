import PropertyHero from "@/components/PropertyHero";
import PropertyDetails from "@/components/PropertyDetails";
import PropertyGallery from "@/components/PropertyGallery";
import BookingCard from "@/components/BookingCard";
import HostSection from "@/components/HostSection";
import ReviewsSection from "@/components/ReviewsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-6">
        <PropertyHero />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Property Details */}
          <div className="lg:col-span-2 space-y-8">
            <PropertyDetails />
            <PropertyGallery />
            <HostSection />
            <ReviewsSection />
          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-1">
            <BookingCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
