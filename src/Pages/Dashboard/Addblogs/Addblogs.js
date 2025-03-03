import React, { useState } from "react";

const Addblogs = () => {
  const [blogs, setblogs] = useState({});
  console.log(blogs);

  let time = new Date();
  let [currentTime, setCurrentTime] = useState(time);

  const handleaddproject = (event, img) => {
    event.preventDefault();

    // console.log(event.target.image);

    fetch("https://server-sharif101.vercel.app/allblogs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(blogs),
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
    let newproject = { ...blogs, currentTime };
    newproject[field] = value;
    setblogs(newproject);
  };
  return (
    <div>
      <h4 className="form-title">Add Blogs Here!</h4>
      <form className="email-form" onSubmit={handleaddproject}>
        <input
          type="text"
          placeholder="Blogs Name"
          name="BlogName"
          className="input input-bordered input-md w-full max-w-xs"
          required
          onBlur={handleinptBlur}
        />
        <input
          type="text"
          placeholder="Reference link"
          name="reference_link"
          className="input input-bordered input-md w-full max-w-xs"
          // required
          onBlur={handleinptBlur}
        />
        <textarea
          className="textarea textarea-bordered w-full max-w-xs"
          placeholder="Description"
          name="blogDescriptions"
          type="text"
          required
          onBlur={handleinptBlur}
        ></textarea>

        <button className="button-30 mb-6" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Addblogs;
