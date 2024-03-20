import React from 'react';

function Member({ position, name, photo }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col justify-center items-center p-4 aspect-w-1 aspect-h-1">
      <img src={photo} alt={name} className="w-24 h-24 object-cover rounded-full mb-2" />
      <h3 className="text-lg font-semibold mb-1">{position}</h3>
      <p className="text-gray-700">{name}</p>
    </div>
  );
}

export default Member;
