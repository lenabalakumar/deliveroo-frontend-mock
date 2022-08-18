import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  restaurantData: [
    {
      restaurantID: Math.floor(Math.random() * 100000).toFixed(0),
      restaurantName: "German Doner Kebab",
      restaurantImageURL:
        "https://images.unsplash.com/photo-1619738566066-81c6d589c80c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGtlYmFifGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
      restaurantRating: 4.5,
      restaurantRatingCount: 545,
      restaurantDistance: 2.9,
      restaurantDeliveryCharge: 2.49,
      restaurantTimeTakenForDelivery: "10-15",
      restaurantMenu: [
        {
          restaurantMenuName: "Chinese set meals",
          restaurantMenuItems: [
            {
              restaurantMenuItem: "Roast chicken",
              restaurantMenuItemPrice: 6.8,
            },
            {
              restaurantMenuItem: "Roast Duck and Chicken with Fried Rice",
              restaurantMenuItemPrice: 6.3,
            },
            {
              restaurantMenuItem: "Roast Duck with Fried Rice",
              restaurantMenuItemPrice: 7.2,
            },
            {
              restaurantMenuItem: "Sweet and Sour Chicken with Chow Mein",
              restaurantMenuItemPrice: 8.1,
            },
            {
              restaurantMenuItem: "Roast chicken",
              restaurantMenuItemPrice: 4.2,
            },
          ],
        },
        {
          restaurantMenuName: "Appetisers",
          restaurantMenuItems: [
            {
              restaurantMenuItem: "Crispy Seaweed with Grated Scallop",
              restaurantMenuItemPrice: 3.2,
            },
            {
              restaurantMenuItem: "Roast chicken",
              restaurantMenuItemPrice: 6.8,
            },
            {
              restaurantMenuItem: "Roast Duck and Chicken with Fried Rice",
              restaurantMenuItemPrice: 6.3,
            },
            {
              restaurantMenuItem: "Roast Duck with Fried Rice",
              restaurantMenuItemPrice: 7.2,
            },
            {
              restaurantMenuItem: "Sweet and Sour Chicken with Chow Mein",
              restaurantMenuItemPrice: 8.1,
            },
            {
              restaurantMenuItem: "Roast chicken",
              restaurantMenuItemPrice: 4.2,
            },
          ],
        },
        {
          restaurantMenuName: "Indian cuisine",
          restaurantMenuItems: [
            {
              restaurantMenuItem: "Sweet and Sour Chicken with Chow Mein",
              restaurantMenuItemPrice: 8.1,
            },
            {
              restaurantMenuItem: "Crispy Seaweed with Grated Scallop",
              restaurantMenuItemPrice: 3.2,
            },
            {
              restaurantMenuItem: "Roast chicken",
              restaurantMenuItemPrice: 6.8,
            },
            {
              restaurantMenuItem: "Roast Duck and Chicken with Fried Rice",
              restaurantMenuItemPrice: 6.3,
            },
            {
              restaurantMenuItem: "Roast Duck with Fried Rice",
              restaurantMenuItemPrice: 7.2,
            },
            {
              restaurantMenuItem: "Sweet and Sour Chicken with Chow Mein",
              restaurantMenuItemPrice: 8.1,
            },
            {
              restaurantMenuItem: "Roast chicken",
              restaurantMenuItemPrice: 4.2,
            },
          ],
        },
        {
          restaurantMenuName: "Korean kimchi",
          restaurantMenuItems: [
            {
              restaurantMenuItem: "Sweet and Sour Chicken with Chow Mein",
              restaurantMenuItemPrice: 8.1,
            },
            {
              restaurantMenuItem: "Crispy Seaweed with Grated Scallop",
              restaurantMenuItemPrice: 3.2,
            },
            {
              restaurantMenuItem: "Roast chicken",
              restaurantMenuItemPrice: 6.8,
            },
            {
              restaurantMenuItem: "Roast Duck and Chicken with Fried Rice",
              restaurantMenuItemPrice: 6.3,
            },
            {
              restaurantMenuItem: "Roast Duck with Fried Rice",
              restaurantMenuItemPrice: 7.2,
            },
            {
              restaurantMenuItem: "Sweet and Sour Chicken with Chow Mein",
              restaurantMenuItemPrice: 8.1,
            },
            {
              restaurantMenuItem: "Roast chicken",
              restaurantMenuItemPrice: 4.2,
            },
            {
              restaurantMenuItem: "Crispy Seaweed with Grated Scallop",
              restaurantMenuItemPrice: 3.2,
            },
            {
              restaurantMenuItem: "Roast chicken",
              restaurantMenuItemPrice: 6.8,
            },
            {
              restaurantMenuItem: "Roast Duck and Chicken with Fried Rice",
              restaurantMenuItemPrice: 6.3,
            },
            {
              restaurantMenuItem: "Roast Duck with Fried Rice",
              restaurantMenuItemPrice: 7.2,
            },
            {
              restaurantMenuItem: "Sweet and Sour Chicken with Chow Mein",
              restaurantMenuItemPrice: 8.1,
            },
            {
              restaurantMenuItem: "Roast chicken",
              restaurantMenuItemPrice: 4.2,
            },
          ],
        },
        {
          restaurantMenuName: "Mexican chipotle",
          restaurantMenuItems: [
            {
              restaurantMenuItem: "Sweet and Sour Chicken with Chow Mein",
              restaurantMenuItemPrice: 8.1,
            },
            {
              restaurantMenuItem: "Sweet and Sour Chicken with Chow Mein",
              restaurantMenuItemPrice: 8.1,
            },
            {
              restaurantMenuItem: "Crispy Seaweed with Grated Scallop",
              restaurantMenuItemPrice: 3.2,
            },
            {
              restaurantMenuItem: "Roast chicken",
              restaurantMenuItemPrice: 6.8,
            },
            {
              restaurantMenuItem: "Roast Duck and Chicken with Fried Rice",
              restaurantMenuItemPrice: 6.3,
            },
            {
              restaurantMenuItem: "Roast Duck with Fried Rice",
              restaurantMenuItemPrice: 7.2,
            },
            {
              restaurantMenuItem: "Sweet and Sour Chicken with Chow Mein",
              restaurantMenuItemPrice: 8.1,
            },
            {
              restaurantMenuItem: "Roast chicken",
              restaurantMenuItemPrice: 4.2,
            },
          ],
        },
        {
          restaurantMenuName: "British sausage",
          restaurantMenuItems: [
            {
              restaurantMenuItem: "Sweet and Sour Chicken with Chow Mein",
              restaurantMenuItemPrice: 8.1,
            },
            {
              restaurantMenuItem: "Sweet and Sour Chicken with Chow Mein",
              restaurantMenuItemPrice: 8.1,
            },
            {
              restaurantMenuItem: "Sweet and Sour Chicken with Chow Mein",
              restaurantMenuItemPrice: 8.1,
            },
            {
              restaurantMenuItem: "Crispy Seaweed with Grated Scallop",
              restaurantMenuItemPrice: 3.2,
            },
            {
              restaurantMenuItem: "Roast chicken",
              restaurantMenuItemPrice: 6.8,
            },
            {
              restaurantMenuItem: "Roast Duck and Chicken with Fried Rice",
              restaurantMenuItemPrice: 6.3,
            },
            {
              restaurantMenuItem: "Roast Duck with Fried Rice",
              restaurantMenuItemPrice: 7.2,
            },
            {
              restaurantMenuItem: "Sweet and Sour Chicken with Chow Mein",
              restaurantMenuItemPrice: 8.1,
            },
            {
              restaurantMenuItem: "Roast chicken",
              restaurantMenuItemPrice: 4.2,
            },
            {
              restaurantMenuItem: "Crispy Seaweed with Grated Scallop",
              restaurantMenuItemPrice: 3.2,
            },
            {
              restaurantMenuItem: "Roast chicken",
              restaurantMenuItemPrice: 6.8,
            },
            {
              restaurantMenuItem: "Roast Duck and Chicken with Fried Rice",
              restaurantMenuItemPrice: 6.3,
            },
            {
              restaurantMenuItem: "Roast Duck with Fried Rice",
              restaurantMenuItemPrice: 7.2,
            },
            {
              restaurantMenuItem: "Sweet and Sour Chicken with Chow Mein",
              restaurantMenuItemPrice: 8.1,
            },
            {
              restaurantMenuItem: "Roast chicken",
              restaurantMenuItemPrice: 4.2,
            },
          ],
        },
      ],
    },
    {
      restaurantID: Math.floor(Math.random() * 100000).toFixed(0),
      restaurantName: "Italian delight",
      restaurantImageURL:
        "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFzdGF8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
      restaurantRating: 4.3,
      restaurantRatingCount: 112,
      restaurantDistance: 1.3,
      restaurantDeliveryCharge: 1.99,
      restaurantTimeTakenForDelivery: "5-10",
      restaurantMenu: [
        {
          restaurantMenuName: "Chinese set meals",
          restaurantMenuItems: [
            {
              restaurantMenuItem: "Roast chicken",
              restaurantMenuItemPrice: 6.8,
            },
          ],
        },
      ],
    },
  ],
  sortedRestaurantData: [],
};

const restaurantSlice = createSlice({
  name: "restaurantSlice",
  initialState: initialState,
  reducers: {
    fakeAction: (state, action) => {
      console.log("Fake action called");
    },
  },
});

export const { fakeAction } = restaurantSlice.actions;
export default restaurantSlice.reducer;
