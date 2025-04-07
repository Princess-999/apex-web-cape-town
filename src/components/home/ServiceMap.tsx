
import React, { useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';

// This would be replaced with actual Google Maps API in production
const ServiceMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // This is a mock function - in production you would use Google Maps API
    const renderMap = () => {
      if (!mapRef.current) return;
      
      const mapCanvas = mapRef.current;
      
      // Set canvas with a background image of Cape Town
      mapCanvas.style.backgroundImage = "url('https://images.unsplash.com/photo-1576485375217-d6a95e34d043?q=80&w=1200&auto=format&fit=crop')";
      mapCanvas.style.backgroundSize = "cover";
      mapCanvas.style.backgroundPosition = "center";
      
      // Create service radius circle overlay
      const circleOverlay = document.createElement('div');
      circleOverlay.className = "absolute inset-0 rounded-lg";
      circleOverlay.style.background = "radial-gradient(circle at center, rgba(30, 58, 138, 0.1) 0%, rgba(30, 58, 138, 0.2) 50%, rgba(30, 58, 138, 0.3) 100%)";
      circleOverlay.style.border = "3px solid rgba(30, 58, 138, 0.3)";
      circleOverlay.style.boxShadow = "0 0 30px rgba(30, 58, 138, 0.3)";
      
      // Pin for Cape Town CBD
      const pinElement = document.createElement('div');
      pinElement.className = "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-capetown-orange";
      pinElement.innerHTML = `
        <div class="relative">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          <div class="bg-white text-capetown-blue text-xs px-2 py-1 rounded shadow absolute -top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
            Cape Town CBD
          </div>
          <div class="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-2 py-0.5 text-xs text-capetown-blue shadow-md whitespace-nowrap">
            20km radius
          </div>
        </div>
      `;
      
      // Service area locations
      const areas = [
        { name: "Sea Point", top: "40%", left: "20%" },
        { name: "Gardens", top: "35%", left: "47%" },
        { name: "Woodstock", top: "52%", left: "58%" },
        { name: "Observatory", top: "65%", left: "65%" },
        { name: "Claremont", top: "75%", left: "45%" },
        { name: "Muizenberg", top: "85%", left: "30%" },
        { name: "Hout Bay", top: "60%", left: "15%" }
      ];
      
      // Add area pins
      areas.forEach(area => {
        const areaPin = document.createElement('div');
        areaPin.className = "absolute text-capetown-blue";
        areaPin.style.top = area.top;
        areaPin.style.left = area.left;
        areaPin.innerHTML = `
          <div class="relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            <div class="bg-white text-capetown-blue text-xs px-1.5 py-0.5 rounded shadow-md absolute -top-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
              ${area.name}
            </div>
          </div>
        `;
        mapCanvas.appendChild(areaPin);
      });
      
      // Add the circle overlay and CBD pin to the map
      mapCanvas.appendChild(circleOverlay);
      mapCanvas.appendChild(pinElement);
    };
    
    renderMap();
  }, []);

  return (
    <div className="rounded-xl overflow-hidden shadow-lg">
      <div className="bg-white p-4">
        <h3 className="text-xl font-bold flex items-center gap-2 mb-2">
          <MapPin className="text-capetown-orange" size={20} />
          <span>Our Service Area</span>
        </h3>
        <p className="text-gray-600 text-sm">Proudly serving businesses within 20km of Cape Town CBD</p>
      </div>
      <div 
        ref={mapRef} 
        className="relative w-full h-[300px] md:h-[400px] bg-gray-200"
      ></div>
    </div>
  );
};

export default ServiceMap;
