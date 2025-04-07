
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, ExternalLink, Layout, Search, Star, Zap } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WebsiteHealthCheck from '@/components/home/WebsiteHealthCheck';
import ServiceMap from '@/components/home/ServiceMap';
import ProjectCounter from '@/components/home/ProjectCounter';
import Testimonials from '@/components/home/Testimonials';

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden">
          <div className="container mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  Cape Town's Premier <span className="text-capetown-blue">Web Design</span> Agency
                </h1>
                <p className="text-xl mb-8 text-gray-600">
                  Transform your business with a modern, high-performing website that attracts customers and drives growth.
                </p>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <Button asChild size="lg" className="bg-capetown-blue hover:bg-capetown-blue/90">
                    <Link to="/contact">Get Free Consultation</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/portfolio">View Our Work</Link>
                  </Button>
                </div>
                <div className="mt-8 flex flex-col md:flex-row items-center justify-center lg:justify-start gap-6">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs text-white">
                          {String.fromCharCode(65 + i)}
                        </div>
                      ))}
                    </div>
                    <div className="text-sm text-gray-600">
                      <strong>200+</strong> Cape Town businesses
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <div className="text-sm text-gray-600">
                      <strong>4.9/5</strong> rating
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <WebsiteHealthCheck />
              </div>
            </div>
          </div>
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-orange-500/10 to-transparent rounded-full blur-3xl"></div>
        </section>

        {/* Services Overview */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Web Design Services for Cape Town Businesses</h2>
              <p className="text-lg text-gray-600">Everything you need to establish a powerful online presence</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <Layout size={36} />,
                  title: "Custom Website Design",
                  description: "Beautiful, responsive websites tailored to your brand and business goals.",
                  link: "/services#web-design"
                },
                {
                  icon: <Search size={36} />,
                  title: "SEO Optimization",
                  description: "Get found by local customers searching for your products and services.",
                  link: "/services#seo"
                },
                {
                  icon: <Zap size={36} />,
                  title: "AI-Powered Features",
                  description: "Chatbots, quote calculators, and other smart tools to engage visitors.",
                  link: "/services#ai-features"
                }
              ].map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-capetown-blue mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link 
                    to={service.link} 
                    className="inline-flex items-center text-capetown-blue hover:text-capetown-blue/80 font-medium transition-colors"
                  >
                    Learn more
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Button asChild variant="outline" size="lg">
                <Link to="/services" className="inline-flex items-center gap-2">
                  <span>View All Services</span>
                  <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Why Cape Town Businesses Choose Apex Web Design</h2>
                <div className="space-y-4">
                  {[
                    {
                      title: "Local Expertise",
                      description: "We understand the unique Cape Town market and customer preferences."
                    },
                    {
                      title: "Results-Driven Approach",
                      description: "Our websites are designed to convert visitors into customers."
                    },
                    {
                      title: "Technical Excellence",
                      description: "Fast, secure, and mobile-optimized websites built to modern standards."
                    },
                    {
                      title: "Ongoing Support",
                      description: "We're your long-term partner, not just a one-time service provider."
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-capetown-blue flex items-center justify-center mt-0.5">
                        <Check size={14} className="text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Button asChild className="bg-capetown-orange hover:bg-capetown-orange/90">
                    <Link to="/about">More About Our Company</Link>
                  </Button>
                </div>
              </div>
              <div className="md:order-last order-first">
                <ServiceMap />
              </div>
            </div>
          </div>
        </section>

        {/* Project Counter */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <ProjectCounter />
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials />

        {/* CTA Section */}
        <section className="py-20 bg-capetown-blue text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Online Presence?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Take the first step towards a website that works as hard as you do. Get a free consultation today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-capetown-blue hover:bg-gray-100">
                <Link to="/contact">Get Free Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                <Link to="/services" className="flex items-center gap-2">
                  <span>Explore Services</span>
                  <ExternalLink size={16} />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
