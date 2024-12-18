import { useState } from "react";
import "./App.css";
import Bill from "./Components/Bill/Bill";
import Service from "./Components/Service/Service";

function App() {
  const [bill, setBill] = useState(0);
  const [myService, setMyService] = useState(0);
  const [friendsService, setFriendsService] = useState(0);
  let avg = (myService + friendsService) / 2;

  function resetAll() {
    setBill(0);
    setMyService(0);
    setFriendsService(0);
  }

  return (
    <>
      <div className="bg-blue-300 rounded-lg w-[75%] mx-auto p-4">
        <Bill bill={bill} setBill={setBill} />
        <Service myService={myService} setMyService={setMyService}>
          How did you like the service
        </Service>
        <Service myService={friendsService} setMyService={setFriendsService}>
          How did your friends like the service
        </Service>

        {bill ? (
          <>
            <h1 className="bg-blue-800 text-slate-100 w-[75%]  my-3 mx-auto rounded-lg  p-2 block">
              You will pay ${bill + avg} (${bill} + ${avg} tip)
            </h1>
            <button
              onClick={resetAll}
              className="bg-red-500 text-white p-2 rounded-lg w-[75%]"
            >
              Reset
            </button>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default App;
