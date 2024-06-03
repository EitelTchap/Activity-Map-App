import React, { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import './style.css';

const containerStyle = {
  width: '100%',
  height: '40vh',
  padding: '10px'
};

function Map({ activities, currentActivity }) {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!currentActivity) return;

    const loader = new Loader({
      apiKey: "AIzaSyCWofrr4HQR6w5bitNquTkPWpuv_WLBcLg", // Ensure this is your actual API key
      version: "weekly",
      libraries: ["places"]
    });

    loader.load().then(() => {
      if (mapRef.current) {
        const map = new google.maps.Map(mapRef.current, {
          center: {
            lat: parseFloat(currentActivity.latitude) || 51.45461,
            lng: parseFloat(currentActivity.longitude) || -2.58922
          },
          zoom: 12
        });

        activities.forEach(activity => {
          const isCurrent = activity.id === currentActivity.id;
          const iconSize = isCurrent ? 50 : 30;

          new google.maps.Marker({
            map,
            position: { lat: parseFloat(activity.latitude), lng: parseFloat(activity.longitude) },
            icon: {
              url: activity.mapIcon,
              scaledSize: new window.google.maps.Size(iconSize, iconSize),
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(iconSize / 2, iconSize)
            },
            title: activity.club
          });
        });
      }
    });
  }, [activities, currentActivity]);

  return (
    <div className="map" ref={mapRef} style={containerStyle}></div>
  );
}

export default React.memo(Map);