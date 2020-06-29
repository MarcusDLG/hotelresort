import React from "react";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";

const RoomsContainer = () => {
  return (
    <div>
      Hello from Rooms Container
      <RoomsFilter />
      <RoomsList />
    </div>
  );
};

export default RoomsContainer;
