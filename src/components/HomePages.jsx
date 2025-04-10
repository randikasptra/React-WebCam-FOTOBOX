import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import frame1 from '../assets/potobooth1.jpeg';
import frame2 from '../assets/potobooth2.jpeg';
import frame3 from '../assets/potobooth3.jpeg';

const frameImages = [frame1, frame2, frame3];



const HomePages = () => {
  const navigate = useNavigate();
  const [selectedFrame, setSelectedFrame] = useState(null);
  const [photoCount, setPhotoCount] = useState(3);

  const handleStart = () => {
    if (selectedFrame) {
      navigate('/take', { state: { frame: selectedFrame, count: photoCount } });
    } else {
      alert('Pilih frame dulu ya!');
    }
  };

  return (
    <div className="p-6 min-h-screen bg-pink-100">
      <h1 className="text-2xl font-bold mb-4 text-pink-700">Pilih Frame</h1>
      <div className="flex gap-4 mb-6">
        {frameImages.map((frame, index) => (
          <img
            key={index}
            src={frame}
            alt={`Frame ${index + 1}`}
            className={`w-32 h-32 object-cover border-4 rounded cursor-pointer ${
              selectedFrame === frame ? 'border-pink-500' : 'border-transparent'
            }`}
            onClick={() => setSelectedFrame(frame)}
          />
        ))}
      </div>

      <h2 className="mb-2 font-semibold text-pink-700">Jumlah Foto</h2>
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setPhotoCount(3)}
          className={`px-4 py-2 rounded font-semibold ${
            photoCount === 3 ? 'bg-pink-500 text-white' : 'bg-white border border-pink-300 text-pink-700'
          }`}
        >
          3 Foto
        </button>
        <button
          onClick={() => setPhotoCount(4)}
          className={`px-4 py-2 rounded font-semibold ${
            photoCount === 4 ? 'bg-pink-500 text-white' : 'bg-white border border-pink-300 text-pink-700'
          }`}
        >
          4 Foto
        </button>
      </div>

      <button
        onClick={handleStart}
        className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded font-bold transition-all duration-200"
      >
        Mulai Ambil Foto
      </button>
    </div>
  );
};

export default HomePages;
