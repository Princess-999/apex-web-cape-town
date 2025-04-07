
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import QuoteBuilder from '@/components/services/QuoteBuilder';
import { 
  Globe, 
  ShoppingCart, 
  Search, 
  MoveUpRight, 
  Smartphone, 
  RefreshCw,
  Bot,
  BarChart,
  Rocket,
  Clock
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';

const ServiceCard = ({ icon, title, description, features, price, link, cta = "Learn More" }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  price: string;
  link: string;
  cta?: string;
}) => {
  return (
    <Card className="h-full flex flex-col card-hover">
      <CardHeader className="pb-4">
        <div className="text-capetown-blue mb-3">{icon}</div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-gray-600 mt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="font-medium text-sm text-gray-500 mb-2">Includes:</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm">
              <span className="text-green-500 mt-0.5">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex-col items-start border-t pt-4">
        <div className="mb-3">
          <p className="text-sm text-gray-500">Starting from</p>
          <p className="text-2xl font-bold text-capetown-blue">{price}</p>
        </div>
        <Button asChild className="w-full">
          <Link to={link}>{cta}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

const Services = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-white via-gray-50 to-blue-50">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Web Design Services for <span className="text-gradient">Cape Town</span> Businesses</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Comprehensive digital solutions tailored to help local businesses thrive online
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild className="bg-capetown-blue hover:bg-capetown-blue/90">
                <a href="#quote-builder">Get Custom Quote</a>
              </Button>
              <Button asChild variant="outline">
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-16 bg-white" id="web-design">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Core Services</h2>
              <p className="text-lg text-gray-600">
                Everything you need to establish and grow your digital presence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard 
                icon={<Globe size={36} />}
                title="Website Design & Development"
                description="Custom-designed, responsive websites that represent your brand and convert visitors."
                features={[
                  "Responsive design for all devices",
                  "SEO-friendly structure",
                  "Fast loading speed",
                  "Contact forms & maps",
                  "Social media integration"
                ]}
                price="R7,500"
                link="/contact"
                cta="Get a Quote"
              />
              
              <ServiceCard 
                icon={<ShoppingCart size={36} />}
                title="E-commerce Development"
                description="Online stores that make selling your products easy and secure."
                features={[
                  "Product catalog management",
                  "Secure payment integration",
                  "Inventory management",
                  "Order tracking system",
                  "Customer account portal"
                ]}
                price="R15,000"
                link="/contact"
                cta="Get a Quote"
              />
              
              <ServiceCard 
                icon={<Search size={36} />}
                title="SEO & Local Optimization"
                description="Get found by customers in Cape Town searching for your services."
                features={[
                  "Keyword research & optimization",
                  "Google My Business setup",
                  "Local citation building",
                  "On-page SEO optimization",
                  "Performance monitoring"
                ]}
                price="R2,500"
                link="/contact"
                cta="Get a Quote"
              />
            </div>
          </div>
        </section>
        
        {/* AI Features */}
        <section className="py-16 bg-gray-50" id="ai-features">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">AI-Powered Solutions</h2>
              <p className="text-lg text-gray-600">
                Smart features that engage visitors and automate your business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard 
                icon={<Bot size={36} />}
                title="AI Chatbots"
                description="24/7 customer service automation that qualifies leads and answers questions."
                features={[
                  "Custom chatbot development",
                  "Integration with your systems",
                  "Lead qualification flows",
                  "FAQ automation",
                  "Human handoff options"
                ]}
                price="R3,500"
                link="/contact"
                cta="Get a Quote"
              />
              
              <ServiceCard 
                icon={<MoveUpRight size={36} />}
                title="Quote Calculators"
                description="Interactive tools that help customers calculate costs and generate leads."
                features={[
                  "Custom pricing logic",
                  "User-friendly interface",
                  "Lead capture integration",
                  "Email quote delivery",
                  "Mobile-friendly design"
                ]}
                price="R4,500"
                link="/contact"
                cta="Get a Quote"
              />
              
              <ServiceCard 
                icon={<BarChart size={36} />}
                title="Business Intelligence"
                description="Data analytics tools that help you understand customer behavior."
                features={[
                  "Custom dashboard creation",
                  "User behavior tracking",
                  "Conversion tracking",
                  "Performance reporting",
                  "Competitor analysis"
                ]}
                price="R5,000"
                link="/contact"
                cta="Get a Quote"
              />
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Additional Services</h2>
              <p className="text-lg text-gray-600">
                Comprehensive solutions to support your digital growth
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Smartphone size={28} />,
                  title: "Mobile App Development",
                  description: "Native and cross-platform mobile applications."
                },
                {
                  icon: <RefreshCw size={28} />,
                  title: "Website Maintenance",
                  description: "Regular updates, security patches, and content changes."
                },
                {
                  icon: <Rocket size={28} />,
                  title: "Digital Marketing",
                  description: "Google Ads, social media campaigns, and email marketing."
                },
                {
                  icon: <Clock size={28} />,
                  title: "Website Audits",
                  description: "Comprehensive review of performance, SEO, and security."
                }
              ].map((service, index) => (
                <Card key={index} className="card-hover">
                  <CardContent className="pt-6">
                    <div className="text-capetown-blue mb-3">{service.icon}</div>
                    <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                    <Link 
                      to="/contact" 
                      className="text-capetown-blue hover:text-capetown-blue/80 text-sm font-medium inline-flex items-center"
                    >
                      Learn more
                      <MoveUpRight size={14} className="ml-1" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Builder */}
        <section className="py-16 bg-gray-50" id="quote-builder">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Build Your Custom Quote</h2>
              <p className="text-lg text-gray-600">
                Use our interactive tool to create a tailored website package
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <QuoteBuilder />
            </div>
          </div>
        </section>

        {/* Process Overview */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Process</h2>
              <p className="text-lg text-gray-600">
                A streamlined approach to delivering exceptional results
              </p>
            </div>
            
            <div className="relative">
              {/* Process line */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    step: "01",
                    title: "Discovery & Planning",
                    description: "We learn about your business, goals, and target audience to create a strategic plan."
                  },
                  {
                    step: "02",
                    title: "Design & Development",
                    description: "Our team creates a custom design and builds your website with careful attention to detail."
                  },
                  {
                    step: "03",
                    title: "Launch & Growth",
                    description: "We launch your site and provide ongoing support to help your business grow online."
                  }
                ].map((process, index) => (
                  <div key={index} className="relative z-10 flex flex-col items-center text-center">
                    <div className="bg-capetown-blue text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mb-4">
                      {process.step}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{process.title}</h3>
                    <p className="text-gray-600">{process.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <Button asChild>
                  <Link to="/process">View Full Process</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-capetown-blue text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Grow Your Business Online?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact us today for a free consultation and website quote tailored to your business needs.
            </p>
            <Button asChild size="lg" className="bg-white text-capetown-blue hover:bg-gray-100">
              <Link to="/contact">Get Started Now</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Services;
