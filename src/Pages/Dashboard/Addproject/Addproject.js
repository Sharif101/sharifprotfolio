import React from "react";
import { useState } from "react";

const Addproject = () => {
  const [project, setProject] = useState({});
  // console.log(project);

  const imageHostKey = process.env.REACT_APP_imagebb_key;
  // console.log(imageHostKey);

  let time = new Date();
  let [currentTime, setCurrentTime] = useState(time);
  // const [selectedImages, setSelectedImages] = useState([]);

  const handleaddproject = (event, img) => {
    event.preventDefault();

    // console.log(event.target.image);

    fetch("https://server-sharif101.vercel.app/allproject", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ ...project, img }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          // toast.success("Successfully added");
          alert("added");
          event.target.reset();
        }
      });
  };

  // --------------------
  const handleinptBlur = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    let time = new Date().toLocaleString();
    setCurrentTime(time);
    let newproject = { ...project, currentTime };
    newproject[field] = value;
    setProject(newproject);
  };

  // .......................
  // 👇 files is not an array, but it's iterable, spread to get an array of files
  // const [fileList, setFileList] = (useState < FileList) | (null > null);

  // const files = fileList ? [...fileList] : [];

  // const handleFileChange = (e) => {
  //   setFileList(e.target.files);
  // };

  // const handleUploadClick = () => {
  //   if (!fileList) {
  //     return;
  //   }

  //   // 👇 Create new FormData object and append files
  //   const data = new FormData();
  //   files.forEach((file, i) => {
  //     data.append(`file-${i}`, file, file.name);
  //   });

  const handleNewPostSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData();

    const tourImage = form.image.files[0];
    console.log("tourImage", tourImage);

    formData.append("image", tourImage);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData.data.url);
          const img = imgData.data.url;
          handleaddproject(event, img);
        }
      });
  };

  // -----------------------------------

  return (
    <div>
      <h4 className="form-title">Add Project Here!</h4>
      <form className="email-form" onSubmit={handleNewPostSubmit}>
        <input
          type="text"
          placeholder="Project Name"
          name="name"
          className="input input-bordered input-md w-full max-w-xs"
          required
          onBlur={handleinptBlur}
        />
        <input
          type="text"
          placeholder="Bulet point 1"
          name="li1"
          className="input input-bordered input-md w-full max-w-xs"
          required
          onBlur={handleinptBlur}
        />

        <input
          type="text"
          placeholder="Bulet point 2"
          name="li2"
          className="input input-bordered input-md w-full max-w-xs"
          required
          onBlur={handleinptBlur}
        />

        <input
          type="text"
          placeholder="Bulet point 3"
          name="li3"
          className="input input-bordered input-md w-full max-w-xs"
          // required
          onBlur={handleinptBlur}
        />
        <input
          type="text"
          placeholder="Project live link"
          name="live_link"
          className="input input-bordered input-md w-full max-w-xs"
          // required
          onBlur={handleinptBlur}
        />
        <textarea
          className="textarea textarea-bordered w-full max-w-xs"
          placeholder="Descripsion"
          name="message"
          type="text"
          required
          onBlur={handleinptBlur}
        ></textarea>

        {/* -------------------------- */}
        <input
          type="file"
          placeholder="Add pictures"
          name="image"
          className="input input-bordered input-md w-full max-w-xs"
          required
          multiple
          accept="image/png, image/gif, image/jpeg"
          // onBlur={handleinptBlur}
        />

        <button className="button-30 mb-6" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Addproject;
