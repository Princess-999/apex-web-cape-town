
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Search, ArrowRight, Calendar, User } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  image: string;
  featured?: boolean;
}

const Blog = () => {
  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "10 Essential Features Every Cape Town Business Website Needs in 2025",
      excerpt: "Discover the must-have elements that make local business websites stand out in the competitive Cape Town market.",
      category: "Web Design",
      date: "April 2, 2025",
      author: "Daniel van der Berg",
      image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhcGUlMjB0b3duJTIwYnVzaW5lc3N8ZW58MHx8MHx8fDA%3D",
      featured: true
    },
    {
      id: "2",
      title: "How AI is Transforming the Web Design Industry",
      excerpt: "Explore how artificial intelligence is changing website development and what it means for your business.",
      category: "Technology",
      date: "March 28, 2025",
      author: "James Peterson",
      image: "https://images.unsplash.com/photo-1677442135076-1c5d572f4a1c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWklMjB0ZWNobm9sb2d5fGVufDB8fDB8fHww"
    },
    {
      id: "3",
      title: "Local SEO Tips for Cape Town Tourism Businesses",
      excerpt: "Learn how to optimize your website to attract both local and international tourists to your Cape Town business.",
      category: "SEO",
      date: "March 15, 2025",
      author: "Nomsa Ndlovu",
      image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFibGUlMjBtb3VudGFpbnxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      id: "4",
      title: "The Psychology of Color in Web Design",
      excerpt: "Understand how color choices affect user behavior and can drive conversions on your website.",
      category: "Design",
      date: "March 10, 2025",
      author: "Thandi Khumalo",
      image: "https://images.unsplash.com/photo-1560807707-8cc77767d783?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sb3JzfGVufDB8fDB8fHww"
    },
    {
      id: "5",
      title: "Why Your Business Needs a Mobile-First Website",
      excerpt: "With over 70% of web traffic coming from mobile devices, here's why your site needs to prioritize mobile users.",
      category: "Web Development",
      date: "February 28, 2025",
      author: "James Peterson",
      image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8fDA%3D"
    },
    {
      id: "6",
      title: "5 Ways to Improve Your Website's Loading Speed",
      excerpt: "Slow websites lose visitors. Learn how to optimize your site for lightning-fast performance.",
      category: "Performance",
      date: "February 20, 2025",
      author: "Daniel van der Berg",
      image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2Vic2l0ZSUyMHNwZWVkfGVufDB8fDB8fHww"
    }
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-white via-gray-50 to-blue-50">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Web Design <span className="text-gradient">Insights</span></h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Expert tips and industry news for Cape Town businesses
            </p>
            
            {/* Search Bar */}
            <div className="max-w-lg mx-auto">
              <div className="relative">
                <Input 
                  type="text" 
                  placeholder="Search articles..." 
                  className="pl-10 pr-4 py-2"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-16 bg-white">
            <div className="container-custom">
              <h2 className="text-2xl font-bold mb-8">Featured Article</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                <div className="lg:col-span-3 h-[400px] overflow-hidden rounded-xl">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="lg:col-span-2 flex flex-col justify-center">
                  <Badge className="mb-3 inline-flex w-fit">
                    {featuredPost.category}
                  </Badge>
                  <h3 className="text-3xl font-bold mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-6">
                    <div className="flex items-center mr-4">
                      <Calendar size={14} className="mr-1" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center">
                      <User size={14} className="mr-1" />
                      <span>{featuredPost.author}</span>
                    </div>
                  </div>
                  <Button asChild className="w-fit bg-capetown-blue hover:bg-capetown-blue/90">
                    <Link to={`/blog/${featuredPost.id}`} className="flex items-center gap-2">
                      <span>Read Full Article</span>
                      <ArrowRight size={16} />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Recent Articles */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-2xl font-bold mb-8">Recent Articles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map(post => (
                <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <Link to={`/blog/${post.id}`} className="block h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </Link>
                  <div className="p-6">
                    <Badge className="mb-3">
                      {post.category}
                    </Badge>
                    <h3 className="text-xl font-bold mb-2 hover:text-capetown-blue transition-colors">
                      <Link to={`/blog/${post.id}`}>
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar size={14} className="mr-1" />
                        <span>{post.date}</span>
                      </div>
                      <Link 
                        to={`/blog/${post.id}`}
                        className="text-capetown-blue hover:text-capetown-blue/80 text-sm font-medium flex items-center"
                      >
                        Read More
                        <ArrowRight size={14} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button variant="outline">
                Load More Articles
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-capetown-blue text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-lg text-blue-100 mb-8">
                Get the latest web design tips and industry news delivered to your inbox
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 flex-grow"
                />
                <Button className="bg-white text-capetown-blue hover:bg-gray-100">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-blue-200 mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <h2 className="text-2xl font-bold mb-8">Browse by Category</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {["Web Design", "SEO", "Technology", "Business", "Performance", "Tutorials"].map((category, index) => (
                <Link 
                  key={index}
                  to={`/blog/category/${category.toLowerCase()}`}
                  className="bg-gray-50 hover:bg-gray-100 transition-colors p-4 rounded-lg text-center font-medium"
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
