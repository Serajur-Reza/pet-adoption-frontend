import React from "react";

type Props = {};

const PetsPage = (props: Props) => {
  return (
    <div>
      <div className="overflow-hidden rounded bg-white text-center text-slate-500 shadow-md shadow-slate-200 w-[300px]">
        {/*  <!-- Image --> */}
        <figure className="p-6 pb-0">
          <span className="relative inline-flex h-20 w-20 items-center justify-center rounded-full text-white">
            <img
              src="https://i.pravatar.cc/80?img=22"
              alt="user name"
              title="user name"
              width="80"
              height="80"
              className="max-w-full rounded-full"
            />
          </span>
        </figure>
        {/*  <!-- Body--> */}
        <div className="p-6">
          <header className="mb-4">
            <h3 className="text-xl font-medium text-slate-700">
              Nichole Jones
            </h3>
            <p className=" text-slate-400">Senior Designer</p>
          </header>
        </div>
        {/*  <!-- Action base sized with lead icon buttons  --> */}
        <div className="flex justify-end gap-2 p-6 pt-0">
          <button className="inline-flex h-10 flex-1 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded bg-emerald-50 px-5 text-sm font-medium tracking-wide text-emerald-500 transition duration-300 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-100 disabled:text-emerald-400 disabled:shadow-none">
            <span className="order-2">View</span>
          </button>
          <button className="inline-flex h-10 flex-1 items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
            <span className="order-2">Adopt</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PetsPage;
