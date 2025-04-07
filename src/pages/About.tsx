
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { 
  Award, 
  Users, 
  Code, 
  Activity,
  CheckCircle
} from 'lucide-react';

const About = () => {
  const team = [
    {
      name: "Daniel van der Berg",
      title: "Founder & CEO",
      bio: "With over 15 years of experience in web development, Daniel founded Apex Web Design to help Cape Town businesses compete in the digital space.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2Zlc3Npb25hbCUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      name: "Thandi Khumalo",
      title: "Lead Designer",
      bio: "Thandi brings her award-winning design expertise to create beautiful, functional websites that capture each client's unique brand identity.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2Zlc3Npb25hbCUyMHdvbWFufGVufDB8fDB8fHww"
    },
    {
      name: "James Peterson",
      title: "Technical Lead",
      bio: "James oversees the technical aspects of all projects, ensuring websites are fast, secure, and built with clean, maintainable code.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2Zlc3Npb25hbCUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      name: "Nomsa Ndlovu",
      title: "SEO Specialist",
      bio: "Nomsa specializes in local SEO, helping Cape Town businesses rank higher in search results and attract more relevant traffic.",
      image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2Zlc3Npb25hbCUyMHdvbWFufGVufDB8fDB8fHww"
    }
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-white via-gray-50 to-blue-50">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About <span className="text-gradient">Apex Web Design</span></h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Cape Town's premier web design agency helping local businesses succeed online
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Founded in 2015, Apex Web Design was born out of a passion for helping Cape Town businesses establish a powerful online presence. We noticed that many local businesses were struggling to compete in the digital landscape, often relying on outdated websites that didn't reflect their true quality or potential.
                </p>
                <p className="text-gray-600 mb-4">
                  Starting with just three team members and a handful of clients, we've grown into one of Cape Town's most trusted web design agencies, serving over 200 businesses across various industries.
                </p>
                <p className="text-gray-600">
                  Our mission remains the same: to empower local businesses with beautiful, functional websites that drive real results. We combine technical expertise with deep knowledge of the Cape Town market to create digital experiences that truly resonate with local and international audiences.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8b2ZmaWNlfGVufDB8fDB8fHww" 
                  alt="Apex Web Design Office" 
                  className="rounded-lg shadow-lg object-cover w-full h-[400px]"
                />
                <div className="absolute -bottom-6 -right-6 bg-capetown-blue text-white p-4 rounded-lg shadow-lg">
                  <p className="font-bold">Est. 2015</p>
                  <p>Cape Town, South Africa</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
              <p className="text-lg text-gray-600">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <CheckCircle className="h-12 w-12" />,
                  title: "Quality & Excellence",
                  description: "We never compromise on quality. From design to development, we're committed to excellence in everything we do."
                },
                {
                  icon: <Users className="h-12 w-12" />,
                  title: "Client Partnership",
                  description: "We view our clients as partners. Your success is our success, and we're invested in your long-term growth."
                },
                {
                  icon: <Activity className="h-12 w-12" />,
                  title: "Results-Driven",
                  description: "We focus on creating websites that drive real business results - more leads, sales, and customer engagement."
                }
              ].map((value, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-md text-center">
                  <div className="text-capetown-blue mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-lg text-gray-600">
                The talented people behind Apex Web Design
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden group">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-capetown-blue font-medium mb-3">{member.title}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-capetown-blue text-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  number: "200+",
                  label: "Websites Launched"
                },
                {
                  number: "8+",
                  label: "Years in Business"
                },
                {
                  number: "15",
                  label: "Team Members"
                },
                {
                  number: "98%",
                  label: "Client Satisfaction"
                }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                  <div className="text-lg text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGFibGUlMjBtb3VudGFpbnxlbnwwfHwwfHx8MA%3D%3D" 
                  alt="Cape Town Landscape" 
                  className="rounded-lg shadow-lg object-cover w-full h-[400px]"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold mb-6">Why Choose Apex Web Design?</h2>
                <div className="space-y-4">
                  {[
                    {
                      title: "Local Expertise",
                      description: "We understand the Cape Town market and customer preferences better than anyone."
                    },
                    {
                      title: "Comprehensive Solutions",
                      description: "From design to development to marketing, we handle all aspects of your online presence."
                    },
                    {
                      title: "Proven Track Record",
                      description: "Our portfolio showcases successful projects across all major industries in Cape Town."
                    },
                    {
                      title: "Ongoing Support",
                      description: "We don't disappear after launch - we're here to support your long-term growth."
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-capetown-blue flex items-center justify-center mt-0.5">
                        <CheckCircle size={14} className="text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-4">Our Certifications & Recognition</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
              Industry accolades and certifications that validate our expertise
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                {
                  name: "Google Partner",
                  icon: <Award className="h-12 w-12" />
                },
                {
                  name: "WordPress Certified",
                  icon: <Code className="h-12 w-12" />
                },
                {
                  name: "Best of Cape Town",
                  icon: <Activity className="h-12 w-12" />
                },
                {
                  name: "W3C Validated",
                  icon: <CheckCircle className="h-12 w-12" />
                }
              ].map((cert, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="bg-white p-6 rounded-full shadow-md text-capetown-blue mb-4">
                    {cert.icon}
                  </div>
                  <h3 className="font-bold">{cert.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-capetown-blue text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Work With Us?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Let's create a website that helps your Cape Town business grow
            </p>
            <Button asChild size="lg" className="bg-white text-capetown-blue hover:bg-gray-100">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
