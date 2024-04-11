import dayjs from "dayjs";
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ imageData }) => {
  return (
    <li className="flex flex-col overflow-hidden rounded-lg shadow-lg cursor-pointer hover:shadow-2xl focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-0 focus-within:ring-indigo-400">
      <Link
        to={`/images/${imageData.data[0].nasa_id}`}
        className="overflow-hidden bg-black h-96"
      >
        <div className="relative flex-shrink-0 w-full h-48 bg-gray-900">
          <span className="block overflow-hidden w-initial h-initial bg-none opacity-100 border-0 m-0 p-0 absolute inset-0">
            <img
              src={imageData.links[0].href}
              alt={imageData.data[0].title}
              className="absolute inset-0 box-border p-0 border-none m-auto block w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-cover object-center"
            />
          </span>
        </div>
        <div className="h-48 p-6 bg-black">
          <p className="text-sm font-medium text-cyan-700">
            {dayjs(imageData.data[0].date_created).format("YYYY-MM-DD")}
          </p>
          <div className="flex flex-col justify-between h-full">
            <p className="mt-2 hover:underline line-clamp-3">
              {imageData.data[0].title}
            </p>
            <Link
              to={`/images/${imageData.data[0].nasa_id}`}
              className="pb-4 text-primary-light lg:hover:underline"
            >
              DETAILS
            </Link>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default Card;
