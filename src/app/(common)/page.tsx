import React from "react";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <section>
      <div className="container px-6 m-auto">
        <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
          <div className="col-span-4 md:col-span-8 lg:col-span-12">
            <h1 className="font-semibold flex align-center justify-center">
              {" "}
              Welcome to pet adoption system, where you can find quality animals
              to adopt.
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
