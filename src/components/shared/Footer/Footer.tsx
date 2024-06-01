import React from "react";
import { FaFacebook, FaLinkedin, FaGoogle } from "react-icons/fa";

export default function Footer() {
  const date = new Date();
  return (
    <>
      {/*    <!-- Component: Three Columns Footer --> */}
      <footer className="w-full text-slate-500">
        {/*      <!-- Main footer --> */}
        <div className="pt-16 pb-12 text-sm border-t border-slate-200 bg-slate-100">
          <div className="container px-6 mx-auto">
            <div className="grid gap-6 sm:grid-cols-6  md:grid-cols-12 lg:grid-cols-12">
              <nav
                className="col-span-2 md:col-span-6 lg:col-span-6"
                aria-labelledby="footer-product-3"
              >
                <h3
                  className="mb-6 text-base font-medium text-slate-700"
                  id="footer-product-3"
                >
                  Contact
                </h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <a className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600">
                      Email : abc@def.com
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600">
                      Cell : 123
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600">
                      Social Media Links
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <div className="flex gap-2">
                      <FaFacebook />
                      <FaLinkedin />
                      <FaGoogle />
                    </div>
                  </li>
                </ul>
              </nav>
              <nav
                className="col-span-2 md:col-span-4 lg:col-span-6"
                aria-labelledby="footer-about-3"
              >
                <h3
                  className="mb-6 text-base font-medium text-slate-700"
                  id="footer-about-3"
                >
                  Copyright and Terms and Services
                </h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <a className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600">
                      Terms of Service
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600">
                      &#169; {date.getFullYear()}, All rights reserved
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </footer>
      {/*    <!-- End Three Columns Footer --> */}
    </>
  );
}
