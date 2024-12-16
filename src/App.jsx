import { useState } from "react";
import "./App.css";
import Bill from "./Components/Bill/Bill";
import Service from "./Components/Service/Service";
import FriendsService from "./Components/FriendsService/FriendsService";

function App() {
  const [myService, setMyService] = useState(0);
  const [friendsService, setFriendsService] = useState(0);

  return (
    <>
      <div className="container mx-auto p-4">
        <Bill />
        <Service myService={myService} setMyService={setMyService} />
        <FriendsService
          friendsService={friendsService}
          setFriendsService={setFriendsService}
        />
      </div>
    </>
  );
}

export default App;
