import React, { useEffect, useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import fakedata from '../../fakeData/Profile'

const TravelBanner = () => {
    const [places, setPlaces] = useState([])
    useEffect(()=>{
  const mainPagePhoto = fakedata.filter(fphoto => fphoto.front === 'frontphoto')
  setPlaces(mainPagePhoto)
  
    },[])
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
//   const {title, imgUrl} = props.mainTravelPhoto

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === places.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? places.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = places.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.title}
      >
        <img src={item.imgUrl} alt={item.title} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={places} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default TravelBanner;