import React from 'react';
import photoOne from "../img/raj.jpg";
import photoTwo from "../img/raj1.jpg";
import photoThree from "../img/raj2.jpg";
import photoFive from "../img/raj4.jpg";

const photos = [photoOne, photoTwo, photoThree, photoFive];

const Photos = () => {
  return (
    <section id='photos' className='mx-auto  w-full lg:w-[50%] p-6 flex flex-col gap-5'>
      <div className='pr-8 py-5 border-b border-gray-500 w-fit'>
        <h1 className='text-[30px] text-white'>My Photos</h1>
      </div>
      <div className='grid grid-cols-2 gap-2.5'>
        {photos.map((photo, index) => (
          <img key={index} src={photo} alt={`photo-${index}`} className='rounded-[4px]' />
        ))}
      </div>
    </section>
  );
};

export default Photos;
