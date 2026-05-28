import React from 'react';
import { Navigation, MapPin, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MapViewProps {
  merchantName?: string;
  userName?: string;
  showControls?: boolean;
}

export function MapView({ merchantName, userName, showControls = true }: MapViewProps) {
  return (
    <div className="relative w-full h-[300px] bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden">
      {/* Map Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" viewBox="0 0 400 300">
          {/* Grid */}
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#94a3b8" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/* Roads */}
          <line x1="0" y1="100" x2="400" y2="100" stroke="#64748b" strokeWidth="4" />
          <line x1="200" y1="0" x2="200" y2="300" stroke="#64748b" strokeWidth="4" />
          <line x1="50" y1="150" x2="350" y2="180" stroke="#94a3b8" strokeWidth="2" />
          <line x1="100" y1="50" x2="150" y2="250" stroke="#94a3b8" strokeWidth="2" />
          
          {/* Route */}
          <path
            d="M 100 200 Q 120 180 150 170 Q 180 160 200 150 Q 230 130 280 120"
            fill="none"
            stroke="#6366f1"
            strokeWidth="3"
            strokeDasharray="8 4"
            className="animate-pulse"
          />
        </svg>
      </div>

      {/* Merchant Marker */}
      <div className="absolute top-[30%] left-[50%] transform -translate-x-1/2 flex flex-col items-center">
        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg border-2 border-white">
          <MapPin className="h-4 w-4 text-white" />
        </div>
        {merchantName && (
          <div className="mt-1 bg-white px-2 py-1 rounded-lg shadow-sm text-xs font-medium text-gray-700 whitespace-nowrap">
            {merchantName}
          </div>
        )}
      </div>

      {/* User Marker */}
      <div className="absolute bottom-[20%] right-[25%] transform -translate-x-1/2 flex flex-col items-center">
        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
          <MapPin className="h-4 w-4 text-white" />
        </div>
      </div>

      {/* Current Location Marker */}
      <div className="absolute top-[60%] left-[25%] transform -translate-x-1/2 flex flex-col items-center">
        <div className="relative">
          <div className="w-10 h-10 bg-primary/20 rounded-full animate-ping absolute" />
          <div className="w-6 h-6 bg-primary rounded-full relative flex items-center justify-center border-2 border-white">
            <div className="w-2 h-2 bg-white rounded-full" />
          </div>
        </div>
      </div>

      {/* Controls */}
      {showControls && (
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-2">
          <Button variant="secondary" size="icon" className="bg-white shadow-md">
            <Plus className="h-4 w-4" />
          </Button>
          <Button variant="secondary" size="icon" className="bg-white shadow-md">
            <Minus className="h-4 w-4" />
          </Button>
        </div>
      )}

      {/* Navigation Button */}
      {showControls && (
        <div className="absolute right-4 bottom-4">
          <Button size="icon" className="shadow-lg rounded-full w-12 h-12">
            <Navigation className="h-5 w-5" />
          </Button>
        </div>
      )}
    </div>
  );
}
