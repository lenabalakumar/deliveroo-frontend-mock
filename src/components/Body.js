import React from "react";
import StarIcon from "@mui/icons-material/Star";
import { FiberManualRecord, CurrencyRupeeRounded } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { fakeAction } from "../features/restaurantSlice";
import { Link, useNavigate, Outlet } from "react-router-dom";

const ProductTile = ({
  restaurantID,
  restaurantName,
  restaurantImageURL,
  restaurantRating,
  restaurantRatingCount,
  restaurantDistance,
  restaurantDeliveryCharge,
  restaurantTimeTakenForDelivery,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div
      className="flex items-start justify-start w-64 flex-col relative m-2 hover:cursor-pointer"
      onClick={() => navigate(`/restaurants/${restaurantID}`)}
    >
      <p className="font-bold text-[12px] bg-gradient-to-r from-orange-700 to-rose-800 px-2 py-1 text-white font-WorkSans absolute top-4 left-2">
        Meal deals
      </p>
      <img
        src={restaurantImageURL}
        className="aspect-video object-cover h-40 w-full"
        alt="pizza"
      />
      <div className="h-10 w-20 rounded-full bg-white absolute flex justify-between flex-col py-1 items-center top-32 right-5 shadow-lg">
        <p className="text-[12px] font-bold">
          {restaurantTimeTakenForDelivery}
        </p>
        <p className="text-[11px]">min</p>
      </div>

      <div className="h-20 w-full flex items-start justify-between flex-col px-1 py-2 border-[0.5px] rounded-b-lg">
        <p className="font-WorkSans text-sm font-bold uppercase">
          {restaurantName}
        </p>
        <div className="flex flex-row justify-center items-center">
          <p className="font-WorkSans text-xs text-[#64aab3]">
            <span>
              <StarIcon
                style={{
                  color: "#64aab3",
                  fontSize: "14px",
                  marginRight: "2px",
                }}
              />
            </span>
            {restaurantRating} Very good
          </p>
          <p className="font-WorkSans text-xs px-1 text-[#636363]">
            ({restaurantRatingCount})
          </p>
        </div>
        <div className="flex flex-row items-start">
          <p className="font-WorkSans text-xs text-[#636363]">
            {restaurantDistance} Miles away
          </p>
          <div className=" h-full w-1/8 flex justify-center items-center mx-2">
            <FiberManualRecord style={{ fontSize: "6px" }} />
          </div>
          <p className="font-WorkSans text-xs text-[#636363]">
            <span>
              <CurrencyRupeeRounded
                style={{
                  fontSize: "14px",
                }}
              />
            </span>
            {restaurantDeliveryCharge} delivery
          </p>
        </div>
      </div>
    </div>
  );
};

const Body = () => {
  const restaurantDetails = useSelector(
    (state) => state.restaurantDetails.restaurantData
  );
  return (
    <div className="flex flex-row flex-wrap">
      {restaurantDetails.map((restaurant) => {
        return (
          <Link
            to={`/restaurants/${restaurant.restaurantID}`}
            key={Math.floor(Math.random() * 10000000).toFixed(0)}
          >
            <ProductTile
              restaurantID={restaurant.restaurantID}
              restaurantName={restaurant.restaurantName}
              restaurantImageURL={restaurant.restaurantImageURL}
              restaurantRating={restaurant.restaurantRating}
              restaurantRatingCount={restaurant.restaurantRatingCount}
              restaurantDistance={restaurant.restaurantDistance}
              restaurantDeliveryCharge={restaurant.restaurantDeliveryCharge}
              restaurantTimeTakenForDelivery={
                restaurant.restaurantTimeTakenForDelivery
              }
            />
          </Link>
        );
      })}
      <Outlet />
    </div>
  );
};

export default Body;
