"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface PhotoAttributes {
  title: string;
  description: string;
  image: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
}

interface Photo {
  id: number;
  attributes: PhotoAttributes;
}

interface ApiResponse {
  data: Photo[];
}

const Photos: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const token = process.env.NEXT_PUBLIC_STRAPI_API_KEY;
  const url = "https://dannisunday-api-72961c617c59.herokuapp.com";

  useEffect(() => {
    fetch(`${url}/api/photos?populate=image`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then((response) => response.json())
    .then((data: ApiResponse) => setPhotos(data.data))
    .catch((error) => console.error('Error fetching data:', error));
  }, [token]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {photos.map((photo) => (
        <div key={photo.id} className="overflow-hidden shadow-lg rounded-lg">
          <Image
            src={`${url}${photo.attributes.image.data.attributes.url}`}
            alt={photo.attributes.title}
            width={500}
            height={300}
            className="w-full h-auto"
          />
          <div className="px-6 py-4">
            <h3 className="text-gray-900 font-bold text-xl mb-2">{photo.attributes.title}</h3>
            <p className="text-gray-700 text-base">{photo.attributes.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Photos;
