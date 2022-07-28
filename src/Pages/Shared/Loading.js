import React from "react";

const Loading = () => {
  return (
    // <div
    //   style={{ height: "100px" }}
    //   className="h-screen flex justify-center items-center"
    // >
    //   <button className="btn loading">loading</button>
    // </div>
<div class="flex items-center justify-center ">
    <div class="w-24 h-24 border-l-2 border-gray-900 rounded-full animate-spin"></div>
</div>
  );
};

export default Loading;
