import React from 'react';

const AdditionalFeature = ({feature, addFeature}) => {
  return (
    <li>
      <button onClick={() => addFeature(feature)} className="button">Add</button>
      {feature.name} (+{feature.price})
    </li>
  );
};

export default AdditionalFeature;
