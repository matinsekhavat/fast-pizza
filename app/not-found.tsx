import React from "react";
import GoBackButton from "./_ui/GoBackButton";

function NotFound() {
  return (
    <div className="max-w-3xl mx-auto">
      <p>this Page could not be found</p>
      <GoBackButton>go back</GoBackButton>
    </div>
  );
}

export default NotFound;
