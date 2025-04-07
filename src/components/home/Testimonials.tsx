
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, MapPin } from 'lucide-react';

interface TestimonialProps {
  name: string;
  company: string;
  location: string;
  rating: number;
  quote: string;
  industry: string;
  imageSrc?: string;
}

const TestimonialCard = ({ name, company, location, rating, quote, industry, imageSrc }: TestimonialProps) => {
  return (
    <Card className="h-full card-hover">
      <CardContent className="p-6">
        {/* Rating Stars */}
        <div className="flex mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star 
              key={i} 
              size={16} 
              className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
            />
          ))}
        </div>
        
        {/* Quote */}
        <blockquote className="text-gray-700 mb-4">
          "{quote}"
        </blockquote>
        
        {/* Author */}
        <div className="flex items-center mt-4">
          <div className="flex-shrink-0 mr-3">
            {imageSrc ? (
              <img 
                src={imageSrc} 
                alt={name} 
                className="h-10 w-10 rounded-full object-cover"
              />
            ) : (
              <div className="h-10 w-10 rounded-full bg-capetown-blue/10 flex items-center justify-center text-capetown-blue font-semibold">
                {name.charAt(0)}
              </div>
            )}
          </div>
          <div>
            <p className="font-medium text-gray-900">{name}</p>
            <p className="text-sm text-gray-600">{company}</p>
            <div className="flex items-center mt-1 text-xs text-gray-500">
              <MapPin size={12} className="mr-1" />
              <span>{location}</span>
              <span className="mx-1">•</span>
              <span>{industry}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Testimonials = () => {
  const testimonials: TestimonialProps[] = [
    {
      name: "Sarah Johnson",
      company: "Ocean Blue Restaurant",
      location: "Sea Point",
      rating: 5,
      quote: "Apex Web Design transformed our outdated website into a stunning online menu that increased our bookings by 40%. Their local knowledge of Cape Town's restaurant scene was invaluable.",
      industry: "Hospitality"
    },
    {
      name: "Thabo Ndlovu",
      company: "Ndlovu Law Firm",
      location: "Gardens",
      rating: 5,
      quote: "As a law firm, our online presence needs to convey trust and professionalism. Apex delivered a website that perfectly balances these qualities, and their SEO work has brought us excellent clients.",
      industry: "Professional Services"
    },
    {
      name: "Michael van der Merwe",
      company: "Cape Construction",
      location: "Woodstock",
      rating: 4,
      quote: "Our construction business has grown by 65% since launching our new website. The project gallery and quote calculator Apex built for us has significantly increased our high-quality leads.",
      industry: "Construction"
    },
    {
      name: "Lerato Khumalo",
      company: "Shine Beauty Salon",
      location: "Khayelitsha",
      rating: 5,
      quote: "Apex didn't just build us a website; they built us a booking system that has revolutionized our salon. The team understood our unique needs in Khayelitsha and delivered beyond expectations.",
      industry: "Beauty"
    },
    {
      name: "David Peterson",
      company: "Atlantic Property Group",
      location: "Camps Bay",
      rating: 5,
      quote: "The property listing system that Apex designed for us has streamlined our entire business. Their understanding of what Cape Town property buyers look for online is exceptional.",
      industry: "Real Estate"
    },
    {
      name: "Amahle Nkosi",
      company: "Taste of Africa Tours",
      location: "City Centre",
      rating: 5,
      quote: "Our tour booking increased by 120% after launching our new website. The interactive maps and booking system are exactly what our international clients needed.",
      industry: "Tourism"
    }
  ];

  return (
    <div className="container-custom py-16">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-bold mb-4">What Our Cape Town Clients Say</h2>
        <p className="text-lg text-gray-600">Hear from local businesses who have transformed their online presence</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            {...testimonial}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
