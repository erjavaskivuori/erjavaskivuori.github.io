import React from "react"
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from "./CarouselButtons.jsx"
import useEmblaCarousel from "embla-carousel-react"

const PrototypeCarousel = (props) => {
  const { images, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="mx-auto max-w-3xl">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="-ml-[1rem] flex touch-pan-y touch-pinch-zoom gap-4">
          {images.map((image, index) => (
            <div
              className="flex flex-[0_0_auto] items-center justify-center"
              key={index}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="h-[25vh] w-auto rounded-md object-contain md:h-[55vh] md:rounded-2xl"
              />
            </div>
          ))}
          <div></div>
        </div>
      </div>

      <div className="mt-7 grid grid-cols-[auto_1fr] justify-between gap-4">
        <div className="grid grid-cols-2 items-center gap-2">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  )
}

export default PrototypeCarousel
