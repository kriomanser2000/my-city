import React from 'react';
const Photos = () =>
{
  return (
    <div>
      <h1>Фотографії Кривого Рогу</h1>
      <img src={`${process.env.PUBLIC_URL}/kr1.jpg`} alt="Кривий Ріг" />
      <img src={`${process.env.PUBLIC_URL}/kr2.jpg`} alt="Кривий Ріг" />
      <img src={`${process.env.PUBLIC_URL}/kr3.jpg`} alt="Кривий Ріг" />
      <img src={`${process.env.PUBLIC_URL}/kr4.jpg`} alt="Кривий Ріг" />
    </div>
  );
};
export default Photos;