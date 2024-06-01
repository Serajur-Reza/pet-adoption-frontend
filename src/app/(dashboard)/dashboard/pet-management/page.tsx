"use client";

import { useAllPetsQuery, useDeletePetMutation } from "@/redux/api/apis/petApi";
import { decodeToken } from "@/utils/authInfo";
import Image from "next/image";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ShowPetInfoModal from "./components/showPetInfoModal";
import EditPetInfoModal from "./components/editPetInfoModal";
import { useMyProfileQuery } from "@/redux/api/apis/userApi";
import CreateAdoption from "./components/createAdoption";

const PetsPage = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [isEditModal, setIsEditModal] = useState(false);
  const [createAdoptionModalShowing, setCreateAdoptionModalShowing] =
    useState(false);

  const [petData, setPetData] = useState();

  const [params, setParams] = useState<{ name: string; value: string }[]>([]);

  const { data: userInfo } = useMyProfileQuery({});

  const { data, isLoading } = useAllPetsQuery(params);

  const [deletePet] = useDeletePetMutation();

  const handleDeletePet = async (id: string) => {
    try {
      const res = await deletePet(id);
      if (res.data?.id) {
        toast.success("pet deleted successfully");
      }
    } catch (error) {
      toast.error(error?.message || "update profile failed");
    }
  };

  if (isLoading) {
    <div>Loading...</div>;
  }

  const searchHandler = (data: { name: string; value: string }) => {
    const query = [...params];

    const queryIndex = query?.findIndex((elem) => elem.name === data.name);
    if (queryIndex === -1) {
      query.push(data);
    } else {
      query.splice(queryIndex, 1, data);
    }
    setParams(query);
  };

  return (
    <>
      <div className="relative my-6">
        <input
          id="id-s03"
          type="search"
          name="id-s03"
          placeholder="Search here"
          aria-label="Search content"
          className="peer relative h-10 w-full rounded border border-slate-200 px-4 pr-12 text-sm text-slate-500 outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
          onChange={(e) =>
            searchHandler({
              name: "searchTerm",
              value: e.target.value,
            })
          }
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-4 top-2.5 h-5 w-5 cursor-pointer stroke-slate-400 peer-disabled:cursor-not-allowed"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
          aria-label="Search icon"
          role="graphics-symbol"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>

      <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        <div className="relative my-6 md:w-60">
          <select
            id="id-01"
            name="id-01"
            required
            className="peer relative h-10 w-full appearance-none border-b border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-emerald-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            onChange={(e) =>
              searchHandler({
                name: "gender",
                value: e.target.value,
              })
            }
          >
            <option value="" disabled selected></option>
            <option value="MALE">Male</option>
            <option value="FEMALE">Female</option>
          </select>

          <label className="pointer-events-none absolute top-2.5 left-2 z-[1] px-2 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-pink-500  peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
            Select an option
          </label>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="pointer-events-none absolute top-2.5 right-2 h-5 w-5 fill-slate-400 transition-all peer-focus:fill-emerald-500 peer-disabled:cursor-not-allowed"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-labelledby="title-01 description-01"
            role="graphics-symbol"
          >
            <title id="title-01">Arrow Icon</title>
            <desc id="description-01">Arrow icon of the select list.</desc>
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <div className="relative my-6 md:w-60">
          <select
            id="id-01"
            name="id-01"
            required
            className="peer relative h-10 w-full appearance-none border-b border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-emerald-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            onChange={(e) =>
              searchHandler({
                name: "size",
                value: e.target.value,
              })
            }
          >
            <option value="" disabled selected></option>
            <option value="BIG">Big</option>
            <option value="MEDIUM">Medium</option>
            <option value="SMALL">Small</option>
          </select>

          <label className="pointer-events-none absolute top-2.5 left-2 z-[1] px-2 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-pink-500  peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
            Select an option
          </label>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="pointer-events-none absolute top-2.5 right-2 h-5 w-5 fill-slate-400 transition-all peer-focus:fill-emerald-500 peer-disabled:cursor-not-allowed"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-labelledby="title-01 description-01"
            role="graphics-symbol"
          >
            <title id="title-01">Arrow Icon</title>
            <desc id="description-01">Arrow icon of the select list.</desc>
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="relative my-6">
          <input
            id="id-s03"
            type="search"
            name="id-s03"
            placeholder="Write special needs to filter"
            aria-label="Search content"
            className="peer relative h-10 w-full rounded border border-slate-200 px-4 pr-12 text-sm text-slate-500 outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            onChange={(e) =>
              searchHandler({
                name: "special_needs",
                value: e.target.value,
              })
            }
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-4 top-2.5 h-5 w-5 cursor-pointer stroke-slate-400 peer-disabled:cursor-not-allowed"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
            aria-label="Search icon"
            role="graphics-symbol"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
      </div>

      <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {data &&
          data?.length &&
          data?.map((item: any, index: number) => (
            <div
              className="overflow-hidden rounded bg-white text-center text-slate-500 shadow-md shadow-slate-200 w-[300px]"
              key={item?.id}
            >
              {/*  <!-- Image --> */}
              <figure className="p-6 pb-0">
                <span className="relative inline-flex h-20 w-20 items-center justify-center rounded-full text-white">
                  <Image
                    src={item?.photos?.length ? item?.photos[0] : ""}
                    alt="user name"
                    title="user name"
                    width={80}
                    height={80}
                    className="max-w-full rounded-full"
                  />
                </span>
              </figure>
              {/*  <!-- Body--> */}
              <div className="p-6">
                <header className="mb-4">
                  <h3 className="text-xl font-medium text-slate-700">
                    {item?.name}
                  </h3>
                  <p className=" text-slate-400">Type: {item?.type}</p>
                  <p className=" text-slate-400">Breed: {item?.breed}</p>
                  <p className=" text-slate-400">Size: {item?.size}</p>
                  <p className=" text-slate-400">Age: {item?.age}</p>
                  <p className=" text-slate-400">Location: {item?.location}</p>
                  <p className=" text-slate-400">
                    Description: {item?.description}
                  </p>
                </header>
              </div>
              {/*  <!-- Action base sized with lead icon buttons  --> */}
              <div className="flex justify-end gap-2 p-6 pt-0">
                <button
                  className="inline-flex h-10 flex-1 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded bg-emerald-50 px-5 text-sm font-medium tracking-wide text-emerald-500 transition duration-300 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-100 disabled:text-emerald-400 disabled:shadow-none"
                  onClick={() => {
                    setPetData(item);
                    setIsShowing(true);
                  }}
                >
                  <span className="order-2">View</span>
                </button>

                <button
                  className="inline-flex h-10 flex-1 items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
                  disabled={item?.isAdopted}
                  onClick={() => {
                    setPetData(item);
                    setCreateAdoptionModalShowing(true);
                  }}
                >
                  <span className="order-2">Adopt</span>
                </button>
              </div>

              {userInfo?.role === "ADMIN" && (
                <div className="flex justify-end gap-2 p-6 pt-0">
                  <button
                    className="inline-flex h-10 flex-1 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded bg-emerald-50 px-5 text-sm font-medium tracking-wide text-emerald-500 transition duration-300 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-100 disabled:text-emerald-400 disabled:shadow-none"
                    onClick={() => {
                      setPetData(item);
                      setIsEditModal(true);
                    }}
                  >
                    <span className="order-2">Update</span>
                  </button>
                  <button
                    className="inline-flex h-10 flex-1 items-center justify-center gap-2 whitespace-nowrap rounded bg-red-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-red-600 focus:bg-red-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-red-300 disabled:bg-red-300 disabled:shadow-none"
                    onClick={() => handleDeletePet(item?.id)}
                  >
                    <span className="order-2">Delete</span>
                  </button>
                </div>
              )}
            </div>
          ))}
        <ShowPetInfoModal
          petData={petData}
          isShowing={isShowing}
          setIsShowing={setIsShowing}
        />
        <EditPetInfoModal
          petData={petData}
          isShowing={isEditModal}
          setIsShowing={setIsEditModal}
        />
        <CreateAdoption
          petData={petData}
          isShowing={createAdoptionModalShowing}
          setIsShowing={setCreateAdoptionModalShowing}
        />
      </div>
    </>
  );
};

export default PetsPage;
