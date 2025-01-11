import React from "react"
import Card from "../components/Card.jsx"
import { HashLink } from "react-router-hash-link"

const Projects = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }
  return (
    <div
      className="flex min-h-full flex-col items-center justify-center bg-[#000000] py-28 text-white"
      id="projects"
    >
      <div className="mx-auto flex max-w-6xl flex-row items-center gap-12 px-10 md:flex-col-reverse md:gap-6">
        <div>
          <div className="p-2">
            <div className="my-3 text-gray-200">
              <h3 className="mb-5 text-4xl font-semibold">
                My <span>Projects</span>
              </h3>
              <p className="text-base md:text-lg">
                Both independently and with a team, I have developed various
                projects, through which I have learned a wide range of
                technologies and high quality code writing.
              </p>
              <p className="mt-3 text-base md:text-lg">
                Beyond that, I have learned other skills important in software
                development, such as design, testing, security, documentation
                and agile development methods.
              </p>
            </div>
          </div>

          <div className="mx-auto my-3 grid w-full grid-cols-1 gap-14 lg:grid-cols-2">
            <Card
              title="This portfolio"
              description={
                <>
                  This website is designed to both showcase and develop my
                  skills. Used technologies include <strong>JavaScript</strong>,
                  <strong> React</strong>, and <strong> Tailwind</strong>.
                </>
              }
              link="https://github.com/erjavaskivuori/portfolio"
              linkText="GitHub"
              openNew={true}
            />
            <Card
              title="TrainingHub"
              description={
                <>
                  Developed for Eficode Oy to organise internal trainings. In
                  the team of six students everyone was a full stack developer
                  and we used <strong>Scrum</strong> as our agile framework. The
                  technologies used included <strong>TypeScript</strong>,
                  <strong> React</strong>, <strong>Next.js</strong>,
                  <strong> Docker</strong>,<strong> PostgreSQL</strong> and
                  testing with <strong> Cypress</strong> and{" "}
                  <strong> Jest</strong>.
                </>
              }
              link="https://github.com/ohtutraininghub/traininghub"
              linkText="GitHub"
              link2="https://drive.google.com/file/d/1WEFORaSrj_9jUqsQE2XDSS4xvHjd-7wK/view?usp=sharing"
              linkText2="Diploma"
              openNew={true}
            />
            <div className="bg-gray flex flex-col justify-between rounded-lg p-6 shadow">
              <div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                  UI/UX Design Project
                </h5>
                <p className="mb-7 mt-3 font-normal text-gray-200">
                  Mobile application designed to make it easier to discover and
                  attend cultural activities. I used Miro to create the design.
                  Project was part of the course{" "}
                  <strong>Human Computer Interaction</strong>. The project
                  included multiple design iterations and research with users.
                </p>
              </div>
              <div>
                <HashLink
                  onClick={scrollToTop}
                  to="/design-project"
                  className="button-color button-hover mr-5 inline-flex items-center self-start rounded-lg px-3 py-2 text-center text-sm font-medium text-white"
                >
                  Read more
                  <svg
                    className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </HashLink>
              </div>
            </div>
            <Card
              title="Cyber Security Project"
              description={
                <>
                  Implemented independently for the course{" "}
                  <strong>Cyber Security Base</strong>. I learned more about
                  common security flaws, how to identify them and secure
                  applications from vulnerabilities. The created application
                  contains security issues, and I provided steps to fix them.
                  Used technologies included
                  <strong> Python</strong>,<strong> Flask</strong>,
                  <strong> HTML</strong> and <strong> SQLite</strong>.
                </>
              }
              link="https://github.com/erjavaskivuori/csb-project"
              linkText="GitHub"
              openNew={true}
            />
            <Card
              title="Library-app"
              description={
                <>
                  Web application that simulates library management and client
                  functionalities. Technologies included <strong>Python</strong>
                  ,<strong> Flask</strong>, <strong>PostgreSQL</strong> and
                  <strong> HTML/CSS</strong>. Programmed independently on the
                  course Database Application.
                </>
              }
              link="https://github.com/erjavaskivuori/tsoha-library"
              linkText="GitHub"
              openNew={true}
            />
            <Card
              title="Study-app"
              description={
                <>
                  Desktop application to manage university courses and tasks
                  related to them. Used technologies included{" "}
                  <strong>Python</strong>, <strong>Tkinter</strong> and
                  <strong> SQLite</strong>. Programmed independently on the
                  course Software Development Methods.
                </>
              }
              link="https://github.com/erjavaskivuori/ot-harjoitustyo"
              linkText="GitHub"
              openNew={true}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
