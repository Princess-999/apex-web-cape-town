
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/components/ui/use-toast';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { 
  Mail, 
  Phone, 
  MapPin,
  Clock,
  Send,
  MessageSquare
} from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name is required' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number' }),
  business: z.string().min(2, { message: 'Business name is required' }),
  businessType: z.string().min(1, { message: 'Please select your business type' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
  address: z.string().optional(),
  subscribe: z.boolean().default(false),
  captcha: z.string().min(1, { message: 'Please complete the CAPTCHA verification' })
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [captchaValue, setCaptchaValue] = useState('');

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      business: '',
      businessType: '',
      message: '',
      address: '',
      subscribe: false,
      captcha: ''
    },
  });

  function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    
    // Simulate form submission with delay
    setTimeout(() => {
      console.log('Form data:', data);
      
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
        variant: "default",
      });
      
      form.reset();
      setIsSubmitting(false);
    }, 1500);
  }

  const businessTypes = [
    { value: 'restaurant', label: 'Restaurant/Cafe' },
    { value: 'retail', label: 'Retail Store' },
    { value: 'hotel', label: 'Hotel/Accommodation' },
    { value: 'professional', label: 'Professional Services' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'education', label: 'Education' },
    { value: 'tourism', label: 'Tourism' },
    { value: 'other', label: 'Other' },
  ];

  // Simplified CAPTCHA for demo
  const generateCaptcha = () => {
    // In a real implementation, this would be a server-side generated CAPTCHA
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    return { equation: `${num1} + ${num2} = ?`, result: num1 + num2 };
  };

  const [captcha, setCaptcha] = useState(generateCaptcha());

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
    setCaptchaValue('');
    form.setValue('captcha', '');
  };

  const validateCaptcha = (value: string) => {
    return parseInt(value) === captcha.result;
  };

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-white via-gray-50 to-blue-50">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact <span className="text-gradient">Apex Web Design</span></h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Get in touch for a free consultation about your web design project
            </p>
          </div>
        </section>

        {/* Contact Info and Form */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Information */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 p-8 rounded-xl h-full">
                  <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-white p-3 rounded-full shadow-sm text-capetown-blue">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Email Us</h3>
                        <a href="mailto:info@apexwebdesign.co.za" className="text-capetown-blue hover:underline">
                          info@apexwebdesign.co.za
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-white p-3 rounded-full shadow-sm text-capetown-blue">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Call Us</h3>
                        <a href="tel:+27215550123" className="text-capetown-blue hover:underline">
                          +27 21 555 0123
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-white p-3 rounded-full shadow-sm text-capetown-blue">
                        <MessageSquare className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">WhatsApp</h3>
                        <a href="https://wa.me/27215550123" className="text-capetown-blue hover:underline">
                          +27 21 555 0123
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-white p-3 rounded-full shadow-sm text-capetown-blue">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Visit Us</h3>
                        <address className="not-italic text-gray-600">
                          123 Bree Street<br />
                          Cape Town, 8001<br />
                          South Africa
                        </address>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-white p-3 rounded-full shadow-sm text-capetown-blue">
                        <Clock className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Business Hours</h3>
                        <p className="text-gray-600">Monday-Friday: 8am-5pm SAST</p>
                        <p className="text-gray-600">Saturday: 9am-1pm SAST</p>
                        <p className="text-gray-600">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Your Name</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address</FormLabel>
                              <FormControl>
                                <Input placeholder="john@example.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input placeholder="+27 21 555 0123" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="business"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Business Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Your Business Name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="businessType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Business Type</FormLabel>
                            <Select 
                              onValueChange={field.onChange} 
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select your business type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {businessTypes.map((type) => (
                                  <SelectItem key={type.value} value={type.value}>
                                    {type.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Business Address (Optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="123 Main Street, Cape Town" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Message</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Tell us about your project and requirements..." 
                                className="min-h-[120px]"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      {/* CAPTCHA */}
                      <FormField
                        control={form.control}
                        name="captcha"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Verification</FormLabel>
                            <div className="flex gap-4 items-center">
                              <div className="bg-gray-100 p-3 rounded-md flex-grow">
                                <span className="font-medium">{captcha.equation}</span>
                              </div>
                              <Button 
                                type="button" 
                                variant="outline" 
                                onClick={refreshCaptcha}
                              >
                                Refresh
                              </Button>
                            </div>
                            <FormControl>
                              <Input 
                                placeholder="Enter the result" 
                                type="number"
                                {...field}
                                onChange={(e) => {
                                  field.onChange(e);
                                  setCaptchaValue(e.target.value);
                                }}
                                value={captchaValue}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      {/* Newsletter Checkbox */}
                      <FormField
                        control={form.control}
                        name="subscribe"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>
                                Subscribe to our newsletter for web design tips and special offers
                              </FormLabel>
                            </div>
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-capetown-blue hover:bg-capetown-blue/90"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            <Send size={16} />
                            Send Message
                          </span>
                        )}
                      </Button>
                    </form>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom text-center">
            <h2 className="text-2xl font-bold mb-8">Find Us in Cape Town</h2>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              {/* This would be replaced with an actual Google Map in production */}
              <div className="h-[400px] bg-gray-200 relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.2815060453636!2d18.4186423!3d-33.9201003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc676e59eeb0a1%3A0x61c7cb1c6d1ef557!2sBree%20Street%2C%20Cape%20Town%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1715160028844!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Apex Web Design Location"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
