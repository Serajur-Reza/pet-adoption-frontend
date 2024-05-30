"use client";

import { useCreatePetMutation } from "@/redux/api/apis/petApi";
import { ImageUploader } from "@/utils/imageUploader";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

type Props = {};

const CreatePetPage = (props: Props) => {
  const [files, setFiles] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [createPet] = useCreatePetMutation();

  console.log(files);

  const onSubmit = async (data: any) => {
    console.log(data);
    try {
      let arr = [];
      for (let i = 0; i < files?.length; i++) {
        const image = await ImageUploader(files[i]);
        if (image?.status !== 200) {
          throw new Error("Error uploading image");
        }
        console.log(image.data.display_url);
        arr.push(image.data.display_url);
      }

      const body = { ...data, age: Number(data.age), photos: arr };

      const res = await createPet(body);
      console.log(res);
      if (res.data?.id) {
        toast.success("created pet successfully");
      }
    } catch (error) {
      toast.error(error?.message || "update profile failed");
    }
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        id="content-4a"
        className="flex-1 overflow-auto"
      >
        {/* <div className="relative my-6">
          <CldUploadWidget uploadPreset="qmewgz4b">
            {({ open }) => {
              return <button onClick={() => open()}>Upload an Image</button>;
            }}
          </CldUploadWidget>
        </div> */}

        <div className="relative my-6">
          <input
            id="id-file01"
            type="file"
            name="id-file01"
            multiple
            accept="image/*"
            className="peer relative w-full border-b border-slate-200 px-4 py-2.5 pl-12 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400 [&::file-selector-button]:hidden"
            onChange={(e) => {
              //   const arr = [];
              //   for (let i = 0; i < e?.target?.files?.length; i++) {
              //     arr.push(e?.target?.files[i]);
              //   }
              setFiles(e?.target?.files);
            }}
          />
          <label
            for="id-file01"
            className="absolute -top-2 left-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:left-0 before:top-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
          >
            {" "}
            Upload a file{" "}
          </label>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-label="File input icon"
            role="graphics-symbol"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="absolute left-4 top-3 h-5 w-5 stroke-slate-400 text-slate-400 peer-disabled:cursor-not-allowed"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
            />
          </svg>
          <small className="absolute flex w-full justify-between px-4 py-1 text-xs text-slate-400 transition peer-invalid:text-pink-500">
            <span>The user can select multiple files</span>
          </small>
        </div>
        <div className="flex flex-col gap-6">
          {/*                <!-- Input field --> */}
          <div className="relative">
            <input
              id="id-b03"
              type="text"
              placeholder="Name"
              className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              {...register("name")}
            />
            <label
              htmlFor="id-b03"
              className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
            >
              Name
            </label>
          </div>
          {/*                <!-- Input field --> */}
          <div className="relative my-6">
            <input
              id="id-b13"
              type="text"
              placeholder="Breed"
              className="peer relative h-10 w-full rounded border border-slate-200 px-4 pr-12 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              {...register("breed")}
            />
            <label
              htmlFor="id-b13"
              className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
            >
              Breed
            </label>
          </div>

          {/*                <!-- Input field --> */}
          <div className="relative">
            <input
              id="id-b03"
              type="number"
              placeholder="Age"
              className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              {...register("age")}
            />
            <label
              htmlFor="id-b03"
              className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
            >
              Age
            </label>
          </div>
          {/*                <!-- Input field --> */}
          <div className="relative my-6">
            <input
              id="id-b13"
              type="text"
              placeholder="Location"
              className="peer relative h-10 w-full rounded border border-slate-200 px-4 pr-12 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              {...register("location")}
            />
            <label
              htmlFor="id-b13"
              className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
            >
              Location
            </label>
          </div>

          {/*                <!-- Input field --> */}
          <div className="relative">
            <input
              id="id-b03"
              type="text"
              placeholder="Description"
              className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              {...register("description")}
            />
            <label
              htmlFor="id-b03"
              className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
            >
              Description
            </label>
          </div>
          {/*                <!-- Input field --> */}
          <div className="relative my-6">
            <div className="relative my-6 md:w-60">
              <select
                id="id-01"
                required
                className="peer relative h-10 w-full appearance-none border-b border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-emerald-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                {...register("gender")}
              >
                <option value="FEMALE">Female</option>
                <option value="MALE">Male</option>
              </select>

              <label
                for="id-01"
                className="pointer-events-none absolute top-2.5 left-2 z-[1] px-2 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-pink-500  peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >
                Gender
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
          </div>

          {/*                <!-- Input field --> */}
          <div className="relative">
            <input
              id="id-b03"
              type="text"
              placeholder="Health Status"
              className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              {...register("health_status")}
            />
            <label
              htmlFor="id-b03"
              className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
            >
              Health Status
            </label>
          </div>
          {/*                <!-- Input field --> */}
        </div>

        {/*        <!-- Modal actions --> */}
        <div className="flex justify-center gap-2">
          <button className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
            <span>Create</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePetPage;
