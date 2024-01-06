import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className=" footer w-full bg-slate-900 text-white h-auto p-5 px-20">
    <div className="flex gap-3 justify-between my-3">
      <div className="gap-3 flex flex-col items-start">
        Artemis Docs
        <p>Enhance your productivity by using our services.</p>
        <p>On step away from efficiency</p>
        <button className="bg-myOrange rounded py-2 px-4  flex gap-2 my-3 hover:bg-sky-300 hover:text-slate-800 ">
          <Link to="upload">
            <p className="text-bold text-sky-100">Get Started</p>
          </Link>
          <span className="material-symbols-outlined text-sky-100">
            navigate_next
          </span>
        </button>
      </div>
      <div>
        <h3 className="mb-2 text-center">Quick links</h3>
        <ul className="flex gap-1 flex-col">
          <li>Home</li>
          <li>About</li>
          <li>Docs</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="w-[35%]">
        <h3 className="mb-4"> Talk To us</h3>
        <div>
          <form action="#" method="post" className="flex flex-col gap-2">
            <div className="flex  gap-2">
              <input
                type="text"
                placeholder="your name"
                className="text-sm rounded  py-2 px-3 text-black"
              />
              <input
                type="email"
                placeholder="your email"
                name=""
                id=""
                className=" text-sm rounded px-3 py-2 text-black"
              />
            </div>
            <textarea
              name=""
              id=""
              cols="5"
              rows="10"
              className="text-sm rounded h-20 p-3 text-black resize-none"
              placeholder="Your message"
            ></textarea>

            <button
              type="submit"
              className="bg-myOrange rounded py-2 px-3 w-20 text-sm hover:bg-sky-300 hover:text-slate-800 "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
    <hr></hr>
    <div className="my-5 text-center">
      ArtemisDocs By Artemis AI &copy; reserved 2023
    </div>
  </div>
  )
}

export default Footer