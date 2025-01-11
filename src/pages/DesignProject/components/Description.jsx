import React from "react"

const Description = () => {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center bg-[#000000] py-28 text-white"
    >
      <div className="mx-auto flex max-w-6xl flex-row items-center gap-12 px-10 md:flex-col-reverse md:gap-6">
        <div>
          <div className="p-2">
            <div className="my-3 text-gray-200">
              <h3 className="mb-8 text-3xl font-semibold md:text-5xl">
                <span>UI/UX Design Project</span>
              </h3>
              <p className="my-5 text-sm text-gray-400 md:text-lg">
                Made in the course Human Computer Interaction at the University
                of Helsinki
              </p>
              <p className="text-base md:text-lg">
                During the course and the project I learned about:
              </p>
              <p className="mb-3 mt-4 text-base md:text-xl">
                💡 Applying user-centered methods in identifying problems and in
                designing interactive systems.
              </p>
              <p className="my-3 text-base md:text-xl">
                💡 Define usablity problems and present solutions.
              </p>
              <p className="my-3 text-base md:text-xl">
                💡 Design different user interfaces and justify design choises.
              </p>
              <p className="my-3 text-base md:text-xl">
                💡 Explain basic concepts related to human-computer interaction.
              </p>
              <p className="my-10 text-sm md:text-lg">
                For the project, I had to come up with a problem that I wanted
                to solve with the interactive application that I would design.
                As an active participant in cultural events myself, I have found
                that finding them requires using several different websites or
                apps. Therefore, I wanted to design an app that would allow you
                to search for cultural events in a centralised way and save both
                events and venues in your favourites. In addition, the app would
                allow you to see the events saved by friends and their reviews.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Description
