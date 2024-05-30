import axios from "axios";

export const ImageUploader = async (image: File) => {
  try {
    const formData = new FormData();
    formData.append(`image`, image);
    const { data } = await axios.post(
      `https://api.imgbb.com/1/upload?key=a33b5353bedffe0bca09a4ca1b2bf019`,
      formData
    );

    return data;
  } catch (error) {
    return error;
  }
};
