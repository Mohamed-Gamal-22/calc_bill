import React from "react";

export default function Service({ children, myService, setMyService }) {
  return (
    <>
      <div className=" p-4 py-1">
        <label htmlFor="billInput">{children}</label>
        <select
          value={myService}
          onChange={(e)=> setMyService(+e.target.value)}
          id="billInput"
          type="number"
          className="w-[75%]  my-3 mx-auto rounded-lg  p-2 block focus:outline-none focus:border-blue-500 focus:border-4 border-4 border-transparent"
          placeholder="Enter How did you like the service...."
        >
          <option value={0}>Dissatisfied (0%)</option>
          <option value={5}>It was okay (5%)</option>
          <option value={10}>It was Good (10%)</option>
          <option value={20}>Absolutely amazing (20%)</option>
        </select>
      </div>
    </>
  );
}
