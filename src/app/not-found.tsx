import React from "react";

type Props = {};

const NotFound = (props: Props) => {
  return (
    <>
      <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
        <div className="p-6">
          <h3 className="mb-4 text-xl font-medium text-center text-red-700">
            This page is not found
          </h3>
        </div>
      </div>
    </>
  );
};

export default NotFound;
