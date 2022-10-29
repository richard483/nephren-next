import { useState, useEffect } from "react";
import {
  AesBoxWrapper,
  CarouselWrapper,
  NavigationWrapper,
  SuperWrapper,
  TitleWrapper,
  Wrapper,
} from "./style";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { images } from "./image-data";
import Image from "next/image";

const variants = {
  enter: (direction) => {
    return {
      zIndex: 0,
      x: direction > 0 ? 150 : -150,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 150 : -150,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 1000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const Works = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(interval);
  });

  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div id="myWorks">
      <SuperWrapper>
        <TitleWrapper>My Works</TitleWrapper>
        <AesBoxWrapper pos="right">
          <Image
            src="/images/aesBorder.svg"
            alt="aes-box"
            width={500}
            height={500}
          />
        </AesBoxWrapper>
        <AesBoxWrapper pos="left">
          <Image
            src="/images/aesBorder.svg"
            alt="aes-box"
            width={500}
            height={500}
          />
        </AesBoxWrapper>
        <Wrapper>
          <CarouselWrapper>
            <NavigationWrapper onClick={() => paginate(-1)}>
              PREV
            </NavigationWrapper>
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                key={page}
                src={images[imageIndex]}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
              />
            </AnimatePresence>
            <NavigationWrapper onClick={() => paginate(1)}>
              NEXT
            </NavigationWrapper>
          </CarouselWrapper>
        </Wrapper>
      </SuperWrapper>
    </div>
  );
};

export default Works;
