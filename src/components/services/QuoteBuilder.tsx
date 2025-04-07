
import React, { useState, useEffect } from 'react';
import { 
  Slider as ShadcnSlider,
  SliderRange,
  SliderThumb,
  SliderTrack 
} from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { ArrowRight, Check } from 'lucide-react';

const QuoteBuilder = () => {
  const [pages, setPages] = useState(5);
  const [aiFeatures, setAiFeatures] = useState(false);
  const [seoIntensity, setSeoIntensity] = useState(1); // 0 for Basic, 1 for Pro
  const [totalPrice, setTotalPrice] = useState(0);
  
  // Base prices in ZAR
  const PAGE_PRICE = 1200;
  const AI_FEATURE_PRICE = 3500;
  const SEO_BASIC_PRICE = 2500;
  const SEO_PRO_PRICE = 5000;
  
  useEffect(() => {
    // Calculate total price
    const pagesPrice = pages * PAGE_PRICE;
    const aiPrice = aiFeatures ? AI_FEATURE_PRICE : 0;
    const seoPrice = seoIntensity === 0 ? SEO_BASIC_PRICE : SEO_PRO_PRICE;
    
    setTotalPrice(pagesPrice + aiPrice + seoPrice);
  }, [pages, aiFeatures, seoIntensity]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-ZA', {
      style: 'currency',
      currency: 'ZAR',
      minimumFractionDigits: 0
    }).format(price);
  };
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <div className="mb-6 text-center">
        <h3 className="text-2xl font-bold mb-2">Website Quote Builder</h3>
        <p className="text-gray-600">Customize your website package to get an instant price estimate</p>
      </div>
      
      <div className="space-y-8">
        {/* Number of Pages */}
        <div className="space-y-3">
          <div className="flex justify-between">
            <Label htmlFor="pages" className="text-base font-medium">Number of Pages</Label>
            <span className="font-bold">{pages} {pages === 1 ? 'page' : 'pages'}</span>
          </div>
          <ShadcnSlider
            id="pages"
            min={3}
            max={15}
            step={1}
            value={[pages]}
            onValueChange={(values) => setPages(values[0])}
            className="py-2"
          />
          <p className="text-sm text-gray-500">
            {formatPrice(pages * PAGE_PRICE)}
          </p>
        </div>
        
        {/* AI Features */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="ai-features" className="text-base font-medium">AI Features</Label>
              <p className="text-sm text-gray-500">Chatbot & Quote Calculators</p>
            </div>
            <Switch
              id="ai-features"
              checked={aiFeatures}
              onCheckedChange={setAiFeatures}
            />
          </div>
          {aiFeatures && (
            <p className="text-sm text-gray-500">
              {formatPrice(AI_FEATURE_PRICE)}
            </p>
          )}
        </div>
        
        {/* SEO Intensity */}
        <div className="space-y-4">
          <Label className="text-base font-medium">SEO Intensity</Label>
          <div className="grid grid-cols-2 gap-4">
            <Card 
              className={`cursor-pointer border-2 transition-all ${
                seoIntensity === 0 
                  ? 'border-capetown-blue ring-2 ring-capetown-blue/20' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => setSeoIntensity(0)}
            >
              <CardHeader className="p-4">
                <CardTitle className="text-lg flex items-center justify-between">
                  <span>Basic SEO</span>
                  {seoIntensity === 0 && (
                    <span className="bg-capetown-blue text-white p-1 rounded-full">
                      <Check size={16} />
                    </span>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <ul className="text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">•</span>
                    <span>Meta tags optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">•</span>
                    <span>Google Analytics setup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">•</span>
                    <span>Basic keyword optimization</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="p-4 pt-2 border-t">
                <p className="text-capetown-blue font-bold">
                  {formatPrice(SEO_BASIC_PRICE)}
                </p>
              </CardFooter>
            </Card>
            
            <Card 
              className={`cursor-pointer border-2 transition-all ${
                seoIntensity === 1 
                  ? 'border-capetown-blue ring-2 ring-capetown-blue/20' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => setSeoIntensity(1)}
            >
              <CardHeader className="p-4">
                <CardTitle className="text-lg flex items-center justify-between">
                  <span>Pro SEO</span>
                  {seoIntensity === 1 && (
                    <span className="bg-capetown-blue text-white p-1 rounded-full">
                      <Check size={16} />
                    </span>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <ul className="text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">•</span>
                    <span>Everything in Basic</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">•</span>
                    <span>Local SEO optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">•</span>
                    <span>Content strategy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">•</span>
                    <span>Monthly performance report</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="p-4 pt-2 border-t">
                <p className="text-capetown-blue font-bold">
                  {formatPrice(SEO_PRO_PRICE)}
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Total Price */}
      <div className="mt-8 p-4 bg-gray-50 rounded-lg border">
        <div className="flex items-center justify-between mb-1">
          <span className="font-medium">Estimated Total:</span>
          <span className="text-2xl font-bold text-capetown-blue">
            {formatPrice(totalPrice)}
          </span>
        </div>
        <p className="text-xs text-gray-500 mb-3">One-time development cost excluding VAT</p>
        <Button asChild className="w-full bg-capetown-orange hover:bg-capetown-orange/90">
          <a href="/contact" className="flex items-center justify-center gap-2">
            <span>Request Detailed Quote</span>
            <ArrowRight size={16} />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default QuoteBuilder;
