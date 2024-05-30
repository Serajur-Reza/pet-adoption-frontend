import Image from "next/image";
import React from "react";

type Props = {};

const AboutPage = (props: Props) => {
  return (
    <section>
      <div className="container px-6 m-auto">
        <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
          <div className="col-span-4 md:col-span-8 lg:col-span-12">
            <h1 className="font-semibold text-lg">Mission</h1>

            <section className="mt-3 text-justify">
              our mission is to create a compassionate and connected world where
              every pet finds a loving home. We are dedicated to rescuing and
              rehabilitating abandoned and neglected animals, providing them
              with the care and support they need to thrive. Through our network
              of dedicated volunteers, foster homes, and community partners, we
              strive to match each pet with their perfect forever family. We
              believe that every animal deserves a second chance and are
              committed to promoting responsible pet ownership, educating the
              public, and advocating for the humane treatment of all animals.
              Together, we can make a difference, one adoption at a time.
            </section>
          </div>
        </div>

        <div className="flex justify-center items-center my-5">
          <h1 className="font-bold text-xl">The Team</h1>
        </div>

        <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
            {/*  <!--  Image --> */}
            <figure>
              <Image
                src="https://i.ibb.co/gZsJFKQ/radioactive.jpg"
                width={80}
                height={120}
                alt="card image"
                className="aspect-video w-full"
              />
            </figure>
            {/*  <!-- Body--> */}
            <div className="p-6">
              <header className="">
                <h3 className="text-xl font-medium text-slate-700">Mr.X</h3>
                <p className="text-sm text-slate-400"> Software Engineer</p>
              </header>
            </div>
          </div>

          <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
            {/*  <!--  Image --> */}
            <figure>
              <Image
                src="https://i.ibb.co/gZsJFKQ/radioactive.jpg"
                width={80}
                height={80}
                alt="card image"
                className="aspect-video w-full"
              />
            </figure>
            {/*  <!-- Body--> */}
            <div className="p-6">
              <header className="">
                <h3 className="text-xl font-medium text-slate-700">Mr.Y</h3>
                <p className="text-sm text-slate-400"> Moderator</p>
              </header>
            </div>
          </div>

          <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
            {/*  <!--  Image --> */}
            <figure>
              <Image
                src="https://i.ibb.co/gZsJFKQ/radioactive.jpg"
                width={80}
                height={80}
                alt="card image"
                className="aspect-video w-full"
              />
            </figure>
            {/*  <!-- Body--> */}
            <div className="p-6">
              <header className="">
                <h3 className="text-xl font-medium text-slate-700">Mr.Z</h3>
                <p className="text-sm text-slate-400"> Chief Executive</p>
              </header>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
