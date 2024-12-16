import React from "react";

export default function Bill() {
  return (
    <>
      <div className="bg-slate-300 w-[75%] mx-auto px-4 pt-3 pb-2">
        <label htmlFor="billInput">How Much Was The Bill ?</label>
        <input
          id="billInput"
          type="number"
          className="w-[75%]  my-3 mx-auto rounded-lg  p-2 block focus:outline-none focus:border-red-500 focus:border-4 border-4 border-transparent"
          placeholder="Enter How Much Was The Bill...."
        />
      </div>
    </>
  );
}
