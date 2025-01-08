import React from "react"
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import { RiMailSendFill } from "react-icons/ri"

const Contact = () => {
  return (
    <div>
      <div
        className="mx-auto flex h-screen max-w-[1100px] flex-col items-center justify-center"
        id="contact"
      >
        <div className="mx-8 my-auto flex flex-col">
          <p className="mb-4 text-5xl font-bold text-gray-200 sm:text-5xl md:text-7xl">
            Let&apos;s keep in touch
          </p>
          <div className="my-7 flex flex-col justify-center gap-5 text-5xl text-violet-500 sm:flex-row">
            <a
              href="https://github.com/erjavaskivuori"
              className="button-hover flex items-center justify-center rounded-lg border border-violet-500 px-4 py-2 text-lg text-violet-500"
            >
              <AiFillGithub className="mr-2" /> Github
            </a>
            <a
              href="https://www.linkedin.com/in/erjavaskivuori/"
              className="button-hover flex items-center justify-center rounded-lg border border-violet-500 px-4 py-2 text-lg text-violet-500"
            >
              <AiFillLinkedin className="mr-2" /> LinkedIn
            </a>
            <a
              href="mailto:erja.vaskivuori@gmail.com"
              className="button-hover flex items-center justify-center rounded-lg border border-violet-500 px-4 py-2 text-lg text-violet-500"
            >
              <RiMailSendFill className="mr-2" /> Email
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
