
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Activity, CheckCircle, AlertTriangle, X } from 'lucide-react';

const WebsiteHealthCheck = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<null | {
    score: number;
    issues: string[];
    improvements: string[];
  }>(null);
  const [error, setError] = useState('');

  const validateUrl = (input: string) => {
    // Basic URL validation
    const pattern = /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;
    return pattern.test(input);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!url) {
      setError('Please enter a website URL');
      return;
    }
    
    if (!validateUrl(url)) {
      setError('Please enter a valid URL');
      return;
    }
    
    // Mock API call & analysis
    setLoading(true);
    setTimeout(() => {
      // Generate a random score between 45 and 85
      const score = Math.floor(Math.random() * 41) + 45;
      
      // Mock data based on score
      const mockIssues = [
        'Slow page loading time (3.5s)',
        'Missing meta descriptions',
        'Poor mobile responsiveness',
        'No SSL certificate',
        'Broken links detected',
        'Missing alt text on images'
      ];
      
      const mockImprovements = [
        'Optimize images to reduce page load time',
        'Implement responsive design for mobile users',
        'Add proper meta descriptions for better SEO',
        'Install SSL certificate for secure browsing',
        'Fix broken links to improve user experience',
        'Add alt text to images for accessibility'
      ];
      
      // Select random issues and improvements based on score
      const numIssues = Math.floor((100 - score) / 10);
      const selectedIssues = mockIssues
        .sort(() => 0.5 - Math.random())
        .slice(0, numIssues);
      
      const selectedImprovements = mockImprovements
        .sort(() => 0.5 - Math.random())
        .slice(0, numIssues);
      
      setResult({
        score,
        issues: selectedIssues,
        improvements: selectedImprovements
      });
      
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="rounded-xl bg-white shadow-lg p-6 md:p-8">
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2">Website Health Check</h3>
        <p className="text-gray-600">Enter your website URL to get an instant SEO evaluation</p>
      </div>
      
      {!result ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="www.yourwebsite.co.za"
              className="w-full p-3"
            />
            {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
          </div>
          <Button 
            type="submit" 
            disabled={loading}
            className="w-full bg-capetown-blue hover:bg-capetown-blue/90"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="animate-spin">
                  <Activity size={18} />
                </span>
                Analyzing...
              </span>
            ) : (
              'Analyze Now'
            )}
          </Button>
        </form>
      ) : (
        <div className="animate-fade-in">
          <div className="relative mb-6">
            <button 
              onClick={() => setResult(null)} 
              className="absolute -top-2 -right-2 p-1 bg-gray-200 rounded-full text-gray-600 hover:bg-gray-300"
            >
              <X size={16} />
            </button>
            
            <div className="flex items-center justify-center mb-4">
              <div className={`text-4xl font-bold ${
                result.score >= 70 ? 'text-green-600' : 
                result.score >= 50 ? 'text-amber-500' : 
                'text-red-600'
              }`}>
                {result.score}/100
              </div>
            </div>
            
            <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className={`h-full ${
                  result.score >= 70 ? 'bg-green-600' : 
                  result.score >= 50 ? 'bg-amber-500' : 
                  'bg-red-600'
                }`}
                style={{ width: `${result.score}%` }}
              ></div>
            </div>
          </div>
          
          {result.issues.length > 0 && (
            <div className="mb-4">
              <h4 className="font-semibold text-red-600 flex items-center gap-1 mb-2">
                <AlertTriangle size={16} />
                Issues Detected
              </h4>
              <ul className="text-sm space-y-1 text-gray-700">
                {result.issues.map((issue, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-red-600 mt-0.5">•</span>
                    <span>{issue}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {result.improvements.length > 0 && (
            <div className="mb-4">
              <h4 className="font-semibold text-green-600 flex items-center gap-1 mb-2">
                <CheckCircle size={16} />
                Recommendations
              </h4>
              <ul className="text-sm space-y-1 text-gray-700">
                {result.improvements.map((improvement, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">•</span>
                    <span>{improvement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="mt-6">
            <Button asChild className="w-full bg-capetown-orange hover:bg-capetown-orange/90">
              <a href="/contact">Get Full SEO Report</a>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WebsiteHealthCheck;
