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
      </div>
    </section>
  );
};

export default AboutPage;
