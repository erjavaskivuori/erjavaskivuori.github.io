import React from "react"
import FriendsView from "../../../assets/designProject/iteration3/prototype_friends.jpg"
import HomeViews from "../../../assets/designProject/iteration3/prototype_home_map.jpg"
import SavedView from "../../../assets/designProject/iteration3/prototype_saved.jpg"
import SearchView from "../../../assets/designProject/iteration3/prototype_search.jpg"
import ProfileView from "../../../assets/designProject/iteration3/protoype_profile.jpg"
import PrototypeCarousel from "./Carousel.jsx"

const images = [HomeViews, SearchView, SavedView, FriendsView, ProfileView]
const options = { loop: true }

const Prototype = () => {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center bg-black py-28 text-white"
      id="prototype"
    >
      <div className="flex max-w-4xl flex-row items-center px-10 md:flex-col-reverse">
        <div>
          <div className="p-2">
            <div className="my-3 text-gray-200">
              <h3 className="mb-5 text-4xl font-semibold">
                The <span>Prototype</span>
              </h3>
              <p>
                More info will be added about the prototype. Feel free to look
                through already in the mean time though!
              </p>
            </div>
          </div>
          <PrototypeCarousel images={images} options={options} />
        </div>
      </div>
    </div>
  )
}

export default Prototype
