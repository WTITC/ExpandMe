import React, { useRef, useEffect, useState } from 'react';
import Globe from 'react-globe.gl'; 

// --- CONFIGURATION FOR GLOBE ---
const GOLD_COLOR = 'rgba(255, 215, 0, 0.9)'; // Opaque Gold for the top surface
const GOLD_SIDE_COLOR = 'rgba(255, 215, 0, 0.4)'; // Transparent Gold for the side
const ARC_COLOR = 'rgba(60, 150, 255, 0.7)'; // A subtle blue for the arcs
const MIDDLE_EAST_CENTER_LAT = 25; // Approximate center of the Middle East for arc convergence
const MIDDLE_EAST_CENTER_LNG = 50;

// Simplified GeoJSON polygon data for the Middle East/Arabian Peninsula (remains for highlight)
const middleEastPolygon = [{
    points: [
        { lat: 10, lng: 50 }, 
        { lat: 15, lng: 60 }, 
        { lat: 26, lng: 60 }, 
        { lat: 35, lng: 45 }, 
        { lat: 25, lng: 35 }, 
        { lat: 10, lng: 50 }
    ]
}];

// Data for arcs originating from different countries and ending in the Middle East
const globalConnections = [
    // North America
    { startLat: 38, startLng: -97, endLat: MIDDLE_EAST_CENTER_LAT, endLng: MIDDLE_EAST_CENTER_LNG }, // USA
    { startLat: 56, startLng: -106, endLat: MIDDLE_EAST_CENTER_LAT, endLng: MIDDLE_EAST_CENTER_LNG }, // Canada
    
    // South America
    { startLat: -14, startLng: -56, endLat: MIDDLE_EAST_CENTER_LAT, endLng: MIDDLE_EAST_CENTER_LNG }, // Brazil
    
    // Europe
    { startLat: 51, startLng: 9, endLat: MIDDLE_EAST_CENTER_LAT, endLng: MIDDLE_EAST_CENTER_LNG },  // Germany
    { startLat: 48, startLng: 2, endLat: MIDDLE_EAST_CENTER_LAT, endLng: MIDDLE_EAST_CENTER_LNG },  // France
    { startLat: 55, startLng: -3, endLat: MIDDLE_EAST_CENTER_LAT, endLng: MIDDLE_EAST_CENTER_LNG }, // UK
    
    // Africa
    { startLat: 6, startLng: 20, endLat: MIDDLE_EAST_CENTER_LAT, endLng: MIDDLE_EAST_CENTER_LNG }, // Central Africa
    { startLat: -22, startLng: 17, endLat: MIDDLE_EAST_CENTER_LAT, endLng: MIDDLE_EAST_CENTER_LNG }, // Southern Africa
    
    // Asia (excluding Middle East)
    { startLat: 20, startLng: 78, endLat: MIDDLE_EAST_CENTER_LAT, endLng: MIDDLE_EAST_CENTER_LNG }, // India
    { startLat: 35, startLng: 103, endLat: MIDDLE_EAST_CENTER_LAT, endLng: MIDDLE_EAST_CENTER_LNG }, // China
    { startLat: 36, startLng: 138, endLat: MIDDLE_EAST_CENTER_LAT, endLng: MIDDLE_EAST_CENTER_LNG }, // Japan
    { startLat: 4, startLng: 102, endLat: MIDDLE_EAST_CENTER_LAT, endLng: MIDDLE_EAST_CENTER_LNG }, // Malaysia/Indonesia
    
    // Oceania
    { startLat: -25, startLng: 133, endLat: MIDDLE_EAST_CENTER_LAT, endLng: MIDDLE_EAST_CENTER_LNG }, // Australia
];


const RotatingGlobe: React.FC = () => {
    const globeEl = useRef<any>();
    const [size, setSize] = useState({ width: 0, height: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    // 1. Calculate the size dynamically to fit the parent container
    useEffect(() => {
        if (containerRef.current) {
            // Set initial size
            setSize({
                width: containerRef.current.offsetWidth,
                height: containerRef.current.offsetHeight,
            });
            
            // Add a resize listener to make it responsive
            const handleResize = () => {
                setSize({
                    width: containerRef.current ? containerRef.current.offsetWidth : 0,
                    height: containerRef.current ? containerRef.current.offsetHeight : 0,
                });
            };
            window.addEventListener('resize', handleResize);
            
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    // 2. Set up initial view and rotation properties after mount/size change
    useEffect(() => {
        if (globeEl.current) {
            // Auto-Rotation
            globeEl.current.controls().autoRotate = true;
            globeEl.current.controls().autoRotateSpeed = 0.5;
            
            // Initial view focused on the Middle East
            globeEl.current.pointOfView({ lat: MIDDLE_EAST_CENTER_LAT, lng: MIDDLE_EAST_CENTER_LNG, altitude: 2.5 }, 4000);
        }
    }, [size]);

    return (
        <div ref={containerRef} className="w-full h-full">
            {/* Only render the globe if we have valid dimensions */}
            {size.width > 0 && size.height > 0 && (
                <Globe
                    ref={globeEl}
                    width={size.width}
                    height={size.height}
                    
                    // Globe Image and Background
                    globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                    backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
                    backgroundColor="rgba(0,0,0,0)" // Transparent background
                    
                    // --- GOLD HIGHLIGHT CONFIGURATION (UNCHANGED) ---
                    polygonsData={middleEastPolygon} 
                    polygonGeoJsonGeometry="points"
                    polygonAltitude={0.01}
                    polygonCapColor={() => GOLD_COLOR}
                    polygonSideColor={() => GOLD_SIDE_COLOR}
                    polygonStrokeColor={() => '#FFFFFF'}
                    
                    // --- ARC CONFIGURATION (NEW) ---
                    arcsData={globalConnections}
                    arcColor={() => ARC_COLOR}
                    arcAltitude={0.2} // Height of the arc above the globe
                    arcStroke={0.7} // Thickness of the arc line
                    arcDashLength={0.9} // Length of the dashed segments
                    arcDashGap={0.1} // Gap between dashed segments
                    arcDashAnimateTime={1000} // Animation time for dashes to travel
                />
            )}
        </div>
    );
};

export default RotatingGlobe;