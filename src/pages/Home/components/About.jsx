import React from "react"
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import { RiMailSendFill } from "react-icons/ri"
import { TypeAnimation } from "react-type-animation"

const Home = () => {
  return (
    <div>
      <div
        className="mx-auto flex h-screen max-w-[1100px] flex-row items-center justify-center md:flex-col-reverse"
        id="home"
      >
        <div className="mx-8 my-auto flex-col">
          <p className="text-2xl font-bold text-gray-200 md:text-3xl">
            Hi there! I am
          </p>
          <p className="pt-3 text-4xl font-bold text-gray-200 md:text-6xl">
            Erja Vaskivuori
          </p>
          <h1 className="my-2 py-3 text-xl font-bold md:py-6 md:text-5xl">
            <TypeAnimation
              sequence={[
                "Software developer",
                1000,
                "Master's student in CS",
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <div className="flex items-center justify-center">
            <p className="text-xl font-bold text-gray-300 md:text-2xl">
              I am currently pursuing Master&apos;s degree in Computer Science
              and working with test automation. I have strong skillset and a lot
              of enthusiasm to learn more as a software developer.
            </p>
          </div>
          <div className="my-7 flex justify-start gap-5 text-3xl text-violet-500 md:text-5xl">
            <a
              href="https://github.com/erjavaskivuori"
              className="button-hover"
            >
              <AiFillGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/erjavaskivuori/"
              className="button-hover"
            >
              <AiFillLinkedin />
            </a>
            <a href="mailto:erja.vaskivuori@gmail.com" className="button-hover">
              <RiMailSendFill />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1R3q60-LtzDJViEb2_1deWuNHv5PbRwo3/view?usp=sharing"
              className="button-hover rounded-lg border border-violet-500 px-4 py-2 text-xs text-violet-500 md:text-xl"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
