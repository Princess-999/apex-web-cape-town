
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { 
  MessageSquare, 
  FileSearch, 
  Lightbulb, 
  Layout, 
  Code, 
  Rocket,
  Upload,
  Calendar,
  ArrowRight
} from 'lucide-react';

const Process = () => {
  const steps = [
    {
      number: "01",
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Discovery Call",
      description: "We start with a detailed consultation to understand your business, goals, target audience, and requirements.",
      details: [
        "Identify business objectives",
        "Analyze target audience",
        "Discuss brand identity",
        "Set project goals and KPIs"
      ]
    },
    {
      number: "02",
      icon: <FileSearch className="h-8 w-8" />,
      title: "Research & Planning",
      description: "Our team conducts market research and creates a strategic plan tailored to your industry in Cape Town.",
      details: [
        "Competitor analysis",
        "Cape Town market research",
        "SEO keyword planning",
        "Technical requirements analysis"
      ]
    },
    {
      number: "03",
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Concept & Design",
      description: "We create wireframes and design mockups for your approval before any coding begins.",
      details: [
        "Information architecture",
        "Wireframe creation",
        "UI/UX design mockups",
        "Design review and approval"
      ]
    },
    {
      number: "04",
      icon: <Code className="h-8 w-8" />,
      title: "Development",
      description: "Our developers build your website with clean code, modern frameworks, and best practices.",
      details: [
        "Frontend development",
        "Backend implementation",
        "Responsive design coding",
        "SEO implementation",
        "Integration of features"
      ]
    },
    {
      number: "05",
      icon: <Layout className="h-8 w-8" />,
      title: "Content & Integration",
      description: "We populate your website with optimized content and integrate all required tools and APIs.",
      details: [
        "Content uploading",
        "Image optimization",
        "Third-party API integration",
        "Payment gateway setup",
        "Analytics implementation"
      ]
    },
    {
      number: "06",
      icon: <Rocket className="h-8 w-8" />,
      title: "Launch & Support",
      description: "We deploy your website and provide ongoing support to ensure everything runs smoothly.",
      details: [
        "Quality assurance testing",
        "Website deployment",
        "Performance optimization",
        "Training session",
        "Ongoing maintenance"
      ]
    }
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-white via-gray-50 to-blue-50">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our <span className="text-gradient">Development Process</span></h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              A streamlined approach to building websites that deliver results
            </p>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="relative">
              {/* Timeline line - visible on medium screens and up */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2"></div>
              
              {/* Steps */}
              <div className="space-y-12 relative">
                {steps.map((step, index) => (
                  <div key={index} className={`relative z-10 md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Step number and connector */}
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-capetown-blue text-white flex items-center justify-center font-bold shadow-lg">
                        {step.number}
                      </div>
                    </div>
                    
                    {/* Content box */}
                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        {/* Mobile step number - visible only on small screens */}
                        <div className="flex md:hidden items-center mb-4">
                          <div className="w-10 h-10 rounded-full bg-capetown-blue text-white flex items-center justify-center font-bold text-sm mr-3">
                            {step.number}
                          </div>
                          <h3 className="text-xl font-bold">{step.title}</h3>
                        </div>
                        
                        {/* Desktop heading - hidden on small screens */}
                        <h3 className="hidden md:block text-xl font-bold mb-3 flex items-center gap-2">
                          {index % 2 === 0 ? (
                            <>
                              {step.title}
                              <span className="text-capetown-blue">{step.icon}</span>
                            </>
                          ) : (
                            <>
                              <span className="text-capetown-blue">{step.icon}</span>
                              {step.title}
                            </>
                          )}
                        </h3>
                        
                        <p className="text-gray-600 mb-4">{step.description}</p>
                        <ul className={`space-y-1 text-sm text-gray-600 ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                          {step.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start gap-2">
                              <span className="text-capetown-blue flex-shrink-0 mt-1">•</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    {/* Spacer for opposite side */}
                    <div className="hidden md:block md:w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* File Upload Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Easy Client Collaboration</h2>
              <p className="text-lg text-gray-600">
                Streamlined tools to share assets and schedule meetings
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* File Upload Zone */}
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-center mb-6">
                  <Upload className="h-12 w-12 text-capetown-blue mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Share Your Brand Assets</h3>
                  <p className="text-gray-600">
                    Securely upload your logo, images, and brand guidelines
                  </p>
                </div>
                
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-capetown-blue transition-colors cursor-pointer">
                  <p className="text-gray-500 mb-2">Drag and drop files here, or click to browse</p>
                  <p className="text-xs text-gray-400">Supports JPG, PNG, PDF, AI, PSD up to 20MB</p>
                  
                  <Button className="mt-4 bg-capetown-blue hover:bg-capetown-blue/90">
                    Browse Files
                  </Button>
                </div>
              </div>
              
              {/* Calendar Integration */}
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-center mb-6">
                  <Calendar className="h-12 w-12 text-capetown-blue mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Schedule Your Consultation</h3>
                  <p className="text-gray-600">
                    Book a time that works for your team
                  </p>
                </div>
                
                <div className="text-center">
                  <p className="text-gray-500 mb-6">
                    Choose a convenient time for a discovery call or project review
                  </p>
                  
                  <Button className="w-full bg-capetown-orange hover:bg-capetown-orange/90">
                    View Available Times
                  </Button>
                  
                  <div className="mt-4 text-sm text-gray-500">
                    <p>Available Monday-Friday, 8:00 AM - 5:00 PM SAST</p>
                    <p className="mt-1">30-minute consultation calls are complimentary</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600">
                Common questions about our web development process
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                {
                  question: "How long does the website development process take?",
                  answer: "The timeline varies based on project complexity. A standard business website typically takes 4-6 weeks from kickoff to launch. E-commerce sites or custom applications may take 8-12 weeks."
                },
                {
                  question: "Do you help with website content?",
                  answer: "Yes, we offer content creation services including copywriting, photography, and video production. We can also optimize existing content for SEO and user experience."
                },
                {
                  question: "What happens after my website launches?",
                  answer: "We provide a 30-day support period for all new websites. After that, most clients choose one of our maintenance plans for ongoing updates, security, and optimization."
                },
                {
                  question: "Do you build websites for specific industries?",
                  answer: "We specialize in websites for Cape Town businesses across various sectors including hospitality, retail, professional services, and tourism. Each website is custom-designed for the specific industry."
                },
                {
                  question: "Can you update my existing website?",
                  answer: "Yes, we offer website redesign and improvement services. We'll assess your current site and recommend updates to improve performance, design, and functionality."
                },
                {
                  question: "Do you offer hosting and domain services?",
                  answer: "Yes, we provide reliable hosting optimized for South African audiences with servers in Cape Town, as well as domain registration and management services."
                }
              ].map((faq, index) => (
                <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-capetown-blue text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Begin your journey towards a stunning website that delivers results for your Cape Town business
            </p>
            <Button asChild size="lg" className="bg-white text-capetown-blue hover:bg-gray-100">
              <Link to="/contact" className="flex items-center gap-2">
                <span>Get Started</span>
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Process;
