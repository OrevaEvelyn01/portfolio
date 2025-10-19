"use client";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import React, { useRef } from "react";
import { FiLoader } from "react-icons/fi";
import { useState } from "react";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(form.current);
    const data = Object.fromEntries(formData);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        setMessage("Your message has been sent successfully ✅");
        e.target.reset();
      } else {
        setMessage(result.error || "Something went wrong ❌");
      }
    } catch (err) {
      console.error("Error:", err);
      setMessage("Failed to send message ❌");
    } finally {
      setLoading(false);
      setTimeout(() => setMessage(""), 3000);
    }
  };

  return (
    <div className=" min-h-dvh flex flex-col  items-center justify-center gap-10 py-15">
      <div className="shadow-lg rounded-lg w-[80%]  max-[970px]:w-[98%] flex items-center md:justify-center bg-purple-300">

        <div className=" flex flex-col md:grid md:grid-cols-3  rounded-lg text-[#Fffff0] text-sm  max-md:w-[100vw] max-[330px]:w-[80vw]  justify-center">
          <div className="flex  flex-col gap-7 bg-[#1a002e] m-2 rounded-lg p-7 max-sm:text-xs ">
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold pt-5">
                Contact Information
              </h2>
            </div>

            <div className=" flex  gap-4 items-center">
              <FaPhoneAlt className="text-[#Fffff0]" />

              <div className="flex flex-col">
                <span> +2348144583926</span>
                <span> +2349044631467</span>
              </div>
            </div>

            <div className=" flex  gap-4 items-center">
              <IoMdMail className="text-[#Fffff0] " />

              <span>orevaevelyn@gmail.com</span>
            </div>

            <div className=" flex  gap-4 items-center">
              <IoLocationSharp />
              <span>Kubwa, Abuja</span>
            </div>
          </div>

          <div className="md:col-span-2 text-black">
             <p className="text-center text-sm pt-3">{message}</p>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="w-[95%] flex flex-col justify-center py-10 px-14 gap-10"
            >
              <div className="grid md:grid-cols-2 gap-10 ">
                <div className="flex flex-col gap-1">
                  <label htmlFor="names"> Your Name</label>
                  <input
                    type="text"
                    id="names"
                    placeholder="Your name"
                    className=" bg-purple-300 outline-none border-0 border-b-1 w-full placeholder:text-base max-md:placeholder:text-sm "
                    name="name"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="emails"> Your Email</label>
                  <input
                    type="email"
                    id="emails"
                    placeholder="email@example.com"
                    className=" outline-none border-0 border-b-1 w-full placeholder:text-base max-md:placeholder:text-sm "
                    name="email"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="subect">Subject</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="message-subject"
                  className=" outline-none  border-0 border-b-1 w-full placeholder:text-base max-md:placeholder:text-sm  "
                  name="subject"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="message"> Message</label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Write your message"
                  className=" outline-none border-0 border-b-2 border-b-[#073f3f] w-full placeholder:text-base max-md:placeholder:text-sm "
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 text-white rounded-md bg-[#1a002e] flex items-center  justify-center"
              >
                {" "}
                {loading ? (
                  <FiLoader className="animate-spin text-2xl text-center " />
                ) : (
                  "Send message"
                )}
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
