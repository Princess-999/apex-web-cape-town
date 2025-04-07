
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ExternalLink, ArrowRight } from 'lucide-react';

interface PortfolioItem {
  id: string;
  title: string;
  category: 'retail' | 'hospitality' | 'services' | 'professional';
  image: string;
  description: string;
  metrics: {
    traffic?: string;
    conversion?: string;
    ranking?: string;
  };
  link: string;
}

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const portfolioItems: PortfolioItem[] = [
    {
      id: "1",
      title: "Cape Harvest Restaurant",
      category: "hospitality",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
      description: "A modern, responsive website for a high-end Cape Town restaurant featuring online booking and digital menus.",
      metrics: {
        traffic: "+120%",
        conversion: "+45%",
        ranking: "#3 for 'Cape Town fine dining'"
      },
      link: "/portfolio/cape-harvest"
    },
    {
      id: "2",
      title: "Table Mountain Tours",
      category: "services",
      image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFibGUlMjBtb3VudGFpbnxlbnwwfHwwfHx8MA%3D%3D",
      description: "A tour booking platform with integrated payment processing and dynamic scheduling for a local tour operator.",
      metrics: {
        traffic: "+85%",
        conversion: "+60%",
        ranking: "#1 for 'Table Mountain guided tours'"
      },
      link: "/portfolio/table-mountain-tours"
    },
    {
      id: "3",
      title: "Ocean Blue Boutique",
      category: "retail",
      image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJvdXRpcXVlfGVufDB8fDB8fHww",
      description: "An e-commerce solution for a Sea Point clothing boutique with inventory management and secure payments.",
      metrics: {
        traffic: "+150%",
        conversion: "+70%",
        ranking: "#5 for 'Cape Town boutique fashion'"
      },
      link: "/portfolio/ocean-blue"
    },
    {
      id: "4",
      title: "Cape Law Associates",
      category: "professional",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGxhdyUyMGZpcm18ZW58MHx8MHx8fDA%3D",
      description: "A professional website for a law firm featuring client testimonials, case studies, and appointment booking.",
      metrics: {
        traffic: "+90%",
        conversion: "+55%",
        ranking: "#2 for 'Cape Town business attorneys'"
      },
      link: "/portfolio/cape-law"
    },
    {
      id: "5",
      title: "Sunrise Cafe",
      category: "hospitality",
      image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FmZXxlbnwwfHwwfHx8MA%3D%3D",
      description: "A vibrant website for a local cafe featuring online ordering, delivery integration, and loyalty program.",
      metrics: {
        traffic: "+110%",
        conversion: "+40%",
        ranking: "#4 for 'breakfast cafe Cape Town'"
      },
      link: "/portfolio/sunrise-cafe"
    },
    {
      id: "6",
      title: "African Treasures",
      category: "retail",
      image: "https://images.unsplash.com/photo-1544441465-87c875cae0a6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNvdXZlbmlyJTIwc2hvcHxlbnwwfHwwfHx8MA%3D%3D",
      description: "An e-commerce store for a souvenir shop targeting both local and international customers.",
      metrics: {
        traffic: "+200%",
        conversion: "+80%",
        ranking: "#1 for 'Cape Town souvenirs online'"
      },
      link: "/portfolio/african-treasures"
    },
    {
      id: "7",
      title: "Garden Route Properties",
      category: "professional",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D",
      description: "A real estate website with property listings, virtual tours, and agent profiles.",
      metrics: {
        traffic: "+130%",
        conversion: "+65%",
        ranking: "#3 for 'Cape Town luxury real estate'"
      },
      link: "/portfolio/garden-route"
    },
    {
      id: "8",
      title: "Cape Town Auto Repairs",
      category: "services",
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXV0byUyMHJlcGFpcnxlbnwwfHwwfHx8MA%3D%3D",
      description: "A service-focused website with online booking, service history tracking, and repair quotes.",
      metrics: {
        traffic: "+95%",
        conversion: "+50%",
        ranking: "#2 for 'car repair Cape Town'"
      },
      link: "/portfolio/auto-repairs"
    },
    {
      id: "9",
      title: "Khayelitsha Craft Market",
      category: "retail",
      image: "https://images.unsplash.com/photo-1528795259021-d8c86e14354c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNyYWZ0JTIwbWFya2V0fGVufDB8fDB8fHww",
      description: "An e-commerce platform for local artisans to sell their crafts to a global audience.",
      metrics: {
        traffic: "+180%",
        conversion: "+75%",
        ranking: "#1 for 'Cape Town handmade crafts'"
      },
      link: "/portfolio/craft-market"
    }
  ];
  
  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);
  
  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'retail', label: 'Retail' },
    { id: 'hospitality', label: 'Hospitality' },
    { id: 'services', label: 'Services' },
    { id: 'professional', label: 'Professional' }
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-white via-gray-50 to-blue-50">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our <span className="text-gradient">Portfolio</span></h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Explore our work for Cape Town businesses across various industries
            </p>
          </div>
        </section>

        {/* Portfolio Filter */}
        <section className="py-8 bg-white border-b">
          <div className="container-custom">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map(category => (
                <Button
                  key={category.id}
                  variant={activeFilter === category.id ? "default" : "outline"}
                  className={activeFilter === category.id ? "bg-capetown-blue" : ""}
                  onClick={() => setActiveFilter(category.id)}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <div key={item.id} className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
                    
                    {/* Category Badge */}
                    <Badge className="absolute top-4 left-4 bg-white/90 text-capetown-blue hover:bg-white">
                      {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                    </Badge>
                    
                    {/* Metrics - Appear on hover */}
                    <div className="absolute top-4 right-4 flex flex-col items-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.metrics.traffic && (
                        <Badge className="bg-green-500 hover:bg-green-600">
                          Traffic {item.metrics.traffic}
                        </Badge>
                      )}
                      {item.metrics.conversion && (
                        <Badge className="bg-blue-500 hover:bg-blue-600">
                          Conversion {item.metrics.conversion}
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  {/* Project Info */}
                  <div className="p-6 bg-white">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-capetown-blue transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {item.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <Link 
                        to={item.link} 
                        className="text-capetown-blue hover:text-capetown-blue/80 font-medium flex items-center gap-1"
                      >
                        View Case Study
                        <ArrowRight size={16} />
                      </Link>
                      <a 
                        href="#" 
                        className="text-gray-500 hover:text-capetown-blue transition-colors"
                        title="Visit Live Site"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-capetown-blue text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join Our Success Stories?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Let's create a website that drives results for your Cape Town business
            </p>
            <Button asChild size="lg" className="bg-white text-capetown-blue hover:bg-gray-100">
              <Link to="/contact">Start Your Project</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Portfolio;
