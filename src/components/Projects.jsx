import React from 'react';

const Projects = () => {
  return (
    <div
      className="flex min-h-full flex-col items-center justify-center bg-[#000000] py-28 text-white"
      id="projects"
    >
      <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 px-10 sm:flex-row md:gap-6">
        <div>
          <div className="p-2">
            <div className="my-3 text-gray-200">
              <h3 className="mb-5 text-4xl font-semibold">
                My <span>Projects</span>
              </h3>
              <p className="text-justify leading-7">
                Both independently and with a team, I have developed various
                projects, through which I have learned a wide range of
                technologies and high quality code writing. Beyond that, I have
                learned other skills important in software development, such as
                design, testing, security, documentation and agile development
                methods.
              </p>
            </div>
          </div>

          <div className="mx-auto my-3 grid w-full grid-cols-1 gap-14 lg:grid-cols-2">
            <div className="bg-gray flex flex-col justify-between rounded-lg p-6 shadow">
              <div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                  This portfolio
                </h5>
                <p className="mb-7 mt-3 font-normal text-gray-200">
                  This website is designed to both showcase and develop my
                  skills. Used technologies include <strong>JavaScript</strong>,
                  <strong> React</strong>, and
                  <strong> Tailwind</strong>.
                </p>
              </div>
              <a
                href="https://github.com/erjavaskivuori/portfolio"
                className="button-color button-hover inline-flex items-center self-start rounded-lg px-3 py-2 text-center text-sm font-medium text-white"
              >
                GitHub
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
              </a>
            </div>

            <div className="bg-gray rounded-lg p-6 shadow">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                TrainingHub
              </h5>
              <p className="mb-7 mt-3 font-normal text-gray-200">
                Developed for Eficode Oy to organise internal trainings. In the
                team of six students everyone was a full stack developer and we
                used <strong>Scrum</strong> as our agile framework. The
                technologies used included <strong>TypeScript</strong>,
                <strong> React</strong>, <strong>Next.js</strong>,
                <strong> Docker</strong>,<strong> PostgreSQL</strong>, and
                testing with
                <strong> Cypress</strong> and
                <strong> Jest</strong>.
              </p>
              <a
                href="https://github.com/ohtutraininghub/traininghub"
                className="button-color button-hover inline-flex items-center rounded-lg bg-violet-600 px-3 py-2 text-center text-sm font-medium text-white hover:bg-violet-800"
              >
                GitHub
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
              </a>
            </div>

            <div className="bg-gray rounded-lg p-6 shadow">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                Design in HCI
              </h5>
              <p className="mb-7 mt-3 font-normal text-gray-200">
                Mobile application designed to make is easier to discover and
                attend cultural activities. I used Miro for the design. Project
                was part of the course{' '}
                <strong>Human Computer Interaction </strong>
                (CSM13401) in the University of Helsinki.
              </p>
              <a
                href="/"
                className="button-color button-hover inline-flex items-center rounded-lg bg-violet-600 px-3 py-2 text-center text-sm font-medium text-white hover:bg-violet-800"
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
              </a>
            </div>

            <div className="bg-gray rounded-lg p-6 shadow">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                Cyber Security Project
              </h5>
              <p className="mb-7 mt-3 font-normal text-gray-200">
                During the project I learned how the OWASP top 10 security risks
                appear by creating an application containing security issues,
                and providing steps to fix them. Used technologies included
                <strong> Python</strong>,<strong> Flask</strong>,
                <strong> HTML</strong>, and
                <strong> SQLite</strong>.
              </p>
              <a
                href="https://github.com/erjavaskivuori/csb-project"
                className="button-color button-hover inline-flex items-center rounded-lg bg-violet-600 px-3 py-2 text-center text-sm font-medium text-white hover:bg-violet-800"
              >
                GitHub
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
              </a>
            </div>

            <div className="bg-gray rounded-lg p-6 shadow">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                Library-app
              </h5>
              <p className="mb-7 mt-3 font-normal text-gray-200">
                Web application programmed independently on the course Database
                Application. Technologies included
                <strong> Python</strong>,<strong> Flask</strong>,
                <strong> PostgreSQL</strong>, and
                <strong> HTML/CSS</strong>.
              </p>
              <a
                href="https://github.com/erjavaskivuori/tsoha-library"
                className="button-color button-hover inline-flex items-center rounded-lg bg-violet-600 px-3 py-2 text-center text-sm font-medium text-white hover:bg-violet-800"
              >
                GitHub
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
              </a>
            </div>

            <div className="bg-gray rounded-lg p-6 shadow">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                Study-app
              </h5>
              <p className="mb-7 mt-3 font-normal text-gray-200">
                Desktop application programmed independently on the course
                Software Development Methods. Used technologies included
                <strong> Python</strong>, <strong>Tkinter</strong>, and
                <strong> SQLite</strong>.
              </p>
              <a
                href="https://github.com/erjavaskivuori/ot-harjoitustyo"
                className="button-color button-hover inline-flex items-center rounded-lg bg-violet-600 px-3 py-2 text-center text-sm font-medium text-white hover:bg-violet-800"
              >
                GitHub
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
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
