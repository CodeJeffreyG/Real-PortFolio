import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        action="https://getform.io/f/6d4157c4-a92e-4878-b84a-1e9c9b55487f"
        method="POST"
        className="flex flex-col max-w-[800px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#2E4C78] text-gray-300">
            Contact
          </p>

          <p className="text-gray-300 py-4">
            Submit the form below or shoot me an email -
            jeffreygrahambusiness@gmail.com
          </p>
        </div>

        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name=""
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />

        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>

        <button className="text-white border-2 hover:border-[#2E4C78] hover:text-white hover:bg-[#2E4C78] px-4 py-3 my-8 mx-auto flex items-center">
          send message
        </button>
      </form>
    </div>
  );
};

export default Contact;
