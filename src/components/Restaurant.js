import React, { createRef } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  InfoOutlined,
  DirectionsBike,
  LocalOffer,
  GroupRounded,
} from "@material-ui/icons";

function Restaurant() {
  const params = useParams();
  const restaurantData = useSelector(
    (state) => state.restaurantDetails.restaurantData
  );
  const [restaurant, setRestaurant] = React.useState([]);
  const scrollRef = React.useRef([]);

  React.useEffect(() => {
    const foundRestaurant = restaurantData.filter(
      (restaurant) => restaurant.restaurantID === params.restaurantID
    );
    setRestaurant(foundRestaurant);
    scrollRef.current = [
      ...Array(foundRestaurant[0].restaurantMenu.length).keys(),
    ].map((_, i) => scrollRef.current[i] ?? createRef());
  }, [params.restaurantID, restaurantData]);

  const scrollToElement = (index) => () => {
    scrollRef.current[index].current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className=" w-screen flex flex-col justify-center items-center py-2">
      {restaurant.map((item) => {
        return (
          <div
            key={Math.random() * 100000}
            className="h-60 flex flex-row items-start w-11/12"
          >
            <img
              alt={item.restaurantName}
              src={item.restaurantImageURL}
              className=" w-1/3 h-full aspect-video rounded-lg object-cover"
            />
            <div className="flex items-start justify-between h-full w-full mx-4">
              <div className="px-3 flex flex-col justify-between h-full">
                <p className=" text-4xl font-WorkSans font-bold">
                  {item.restaurantName}
                </p>
                <p className="text-sm">40 min · Chinese · Asian · Wings</p>
                <p className="text-sm">
                  3.8 Good(166) · 0.80 miles away · £1.50 delivery · £15.00
                  minimum
                </p>
                <div className="flex items-center flex-row">
                  <InfoOutlined
                    style={{
                      fontSize: "20px",
                      color: "#636363",
                      marginRight: "5px",
                    }}
                  />
                  <div>
                    <p className="text-sm font-WorkSans">Info</p>
                    <p className="text-[12px] font-WorkSans text-[#636363]">
                      Map, allergens and hygiene rating
                    </p>
                  </div>
                </div>
                <div className="flex items-center flex-row">
                  <DirectionsBike
                    style={{
                      fontSize: "20px",
                      color: "#636363",
                      marginRight: "5px",
                    }}
                  />
                  <div>
                    <p className="text-sm font-WorkSans">
                      Delivered by Ifood Chinese Take Away - Ilford
                    </p>
                    <p className="text-[12px] font-WorkSans text-[#636363]">
                      This means you won’t be able to follow your order or get
                      live updates
                    </p>
                  </div>
                </div>
                <div className="w-4/5 h-12 bg-[#f2623a] flex justify-center items-center rounded-md">
                  <LocalOffer
                    style={{
                      fontSize: "16px",
                      color: "white",
                      marginRight: "5px",
                    }}
                  />
                  <p className="text-white text-[12px] font-WorkSans">
                    10% off entire menu-For orders over £25. T&Cs apply
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-end justify-start">
                <div className="flex flex-row my-2">
                  <DirectionsBike
                    style={{
                      fontSize: "20px",
                      color: "#636363",
                      marginRight: "5px",
                    }}
                  />
                  <div className="flex flex-col">
                    <p className="text-sm font-WorkSans">
                      Deliver in around 40 min
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center w-40 h-8 rounded-md border hover:cursor-pointer hover:border-[#a8a8a8]">
                  <GroupRounded
                    style={{
                      fontSize: "16px",
                      color: "#2db3c2",
                      marginRight: "5px",
                      marginLeft: "5px",
                    }}
                  />
                  <p className="text-sm font-WorkSans">Start group order</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {restaurant.map((item) => {
        return (
          <nav
            className="flex flex-row items-center justify-start w-11/12 my-4 py-8 px-1 sticky top-0 bg-white border-t border-b"
            key={Math.random() * 10000}
          >
            {item.restaurantMenu.map((menu, i) => {
              return (
                <ul
                  className="bg-cyan-400 px-3 py-1 rounded-3xl font-WorkSans text-[12px] mx-1 hover:cursor-pointer shadow-lg text-white"
                  key={Math.random() * 100000}
                  onClick={scrollToElement(i)}
                >
                  {menu.restaurantMenuName}
                </ul>
              );
            })}
          </nav>
        );
      })}
      <div className="flex w-full items-start justify-center my-2">
        <div className="w-11/12 flex flex-row">
          <div className="w-2/3">
            {restaurant.map((item) => {
              return (
                <div key={Math.random() * 100000}>
                  {item.restaurantMenu.map((menu, i) => {
                    return (
                      <div key={Math.random() * 100000}>
                        <p
                          className="font-WorkSans font-bold text-lg mx-2 scroll-mt-24"
                          ref={scrollRef.current[i]}
                        >
                          {menu.restaurantMenuName}
                        </p>
                        <div className="flex flex-row flex-wrap">
                          {menu.restaurantMenuItems.map((menuItem) => {
                            return (
                              <div
                                className="h-16 w-5/12 flex my-2 mx-2 shadow-md p-2 items-start justify-center rounded-md border "
                                key={Math.random() * 100000}
                              >
                                <div className=" w-10/12 h-full flex flex-col justify-center items-start">
                                  <p className="font-WorkSans text-xs font-bold">
                                    {menuItem.restaurantMenuItem}
                                  </p>
                                  <p className="font-WorkSans text-[12px]">
                                    {menuItem.restaurantMenuItemPrice}
                                  </p>
                                </div>
                                <div className="w-2/12 h-full flex justify-center items-center bg-slate-300 rounded-lg hover:shadow-lg hover:cursor-pointer">
                                  <p className="text-[24px] font-WorkSans text-white">
                                    +
                                  </p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
          <div className="w-1/3 h-64  flex items-center bg-[#f0f0f0] justify-center p-2 flex-col sticky top-24">
            <div className="h-3/4 w-full bg-white flex items-center justify-center">
              <p className="font-WorkSans text-sm text-[#969696]">
                Shopping cart is empty
              </p>
            </div>
            <div className="h-1/4 w-full  flex items-end justify-center">
              <div className="w-4/5 h-4/5 bg-[#969696] flex items-center justify-center rounded-md hover:cursor-pointer">
                <p className="font-WorkSans text-sm text-white">
                  Go to checkout
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Restaurant;
