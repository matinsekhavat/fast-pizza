"use client";

function error(err: any) {
  console.log(err);
  return <div>{err}</div>;
}

export default error;
