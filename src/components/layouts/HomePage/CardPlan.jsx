import React, { useEffect, useState } from "react";
import { fetchRandomImage } from "../../../services/unsplash";
import DetailUser from "../../modal/DetailUser";

export default function CardPlan({ title, date }) {
  const [image, setImage] = useState("");
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  useEffect(() => {
    const getImage = async () => {
      try {
        const response = await fetchRandomImage(title);
        const imageUrl = response.data[0]?.urls?.regular;
        if (imageUrl) {
          setImage(imageUrl);
        } else {
          console.error("No valid image URL in the response");
        }
      } catch (error) {
        console.error("Error fetching image from Unsplash", error);
      }
    };

    getImage();
  }, [title]);

  const openDetailModal = () => {
    setIsDetailModalOpen(true);
  };

  const closeDetailModal = () => {
    setIsDetailModalOpen(false);
  };

  return (
    <div className="bg-white shadow-sm shadow-lightText rounded-lg">
      <img
        src={image}
        alt={title}
        className="w-full h-32 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-base font-medium text-darkText">{title}</h3>
            <p className="text-lightText">{date}</p>
          </div>
          <button
            onClick={openDetailModal}
            className="bg-primary text-white py-1  rounded-full w-1/3"
          >
            Detail
          </button>
        </div>
      </div>
      {isDetailModalOpen && <DetailUser closeModal={closeDetailModal} />}
    </div>
  );
}
