import React from "react";
import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";

type Props = {
  children: React.ReactNode;
};

const CommonLayout = (props: Props) => {
  const { children } = props;
  return (
    <div>
      {" "}
      <Navbar />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
};

export default CommonLayout;
