import React, { useState } from 'react';
import BigCardModal from '../components/BigCardModal';
import Map from '../components/Map';
import Slider from '../components/Slider';
import activities from '../components/Activities';
import Wrapper from '../components/Wrapper';

function Discover() {
  const [selectedActivity, setSelectedActivity] = useState(activities[0]);

  const handleActivitySelect = (activity) => {
    setSelectedActivity(activity);
  };

  return (
    <Wrapper>
      <div>
        <Map activities={activities} currentActivity={selectedActivity} />
      </div>
      
      <div>
        <Slider onSelect={handleActivitySelect} />
      </div>

      <BigCardModal activity={selectedActivity} />
    </Wrapper>
  );
}

export default Discover;
