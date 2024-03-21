import React from 'react'
import './EmblaCarousel.css'
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'

const EmblaCarousel = (props) => {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    return (
        <section className="embla w-fit h-fit m-5">
            <div className='flex items-center justify-center'>
                <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />

                <div className="embla__viewport bg-accent rounded-md" ref={emblaRef}>
                    <div className="embla__container">
                        {slides.map((index) => (
                        <div className="embla__slide" key={index}>
                            <div className="embla__slide__number">{index + 1}</div>
                        </div>
                    ))}
                    </div>
                </div>

                <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
            </div>

        </section>
    )
}

export default EmblaCarousel
