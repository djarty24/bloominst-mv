import React from 'react';

function Member({ position, name, photo }) {
  return (
    <div className="rounded-lg flex flex-col justify-center items-center size-fit aspect-square">
      <img src={photo} alt={name} className="aspect-square mb-2 rounded-md" />
      <h3 className="text-lg font-semibold mb-1">{position}</h3>
      <p className="text-gray-700">{name}</p>
    </div>
  );
}

export default Member;
