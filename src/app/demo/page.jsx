"use client"
import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Lottie from 'lottie-react';
import Book from '@/context/Book.json'
import Cycle from '@/context/Cycle.json'


const LandingPage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const circleSize = 38 + scrollPosition * 0.28;

  const bookControls = useAnimation();
  const cycleControls = useAnimation();
  const textControls = useAnimation();

  const [cycleAnimationComplete, setCycleAnimationComplete] = useState(false);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const womanOffset = scrollPosition * 1.5;
    const cycleInitialX = -window.innerWidth;

    const animationCompleteWidth = window.innerWidth;

    const cycleAnimationWidth = window.innerWidth + cycleInitialX + scrollPosition;

    bookControls.start({ x: womanOffset });

    if (cycleAnimationWidth >= animationCompleteWidth) {
      cycleControls.start({ x: animationCompleteWidth - window.innerWidth });
      setCycleAnimationComplete(true);
    } else {
      cycleControls.start({ x: cycleInitialX + scrollPosition });
      setCycleAnimationComplete(false);
    }

     // Animate the text alongside the cycle animation
     if (cycleControls.current) { // Check if cycleControls is defined
      textControls.start({
        opacity: cycleAnimationComplete ? 1 : 0,
        x: cycleControls.current.x,
      });
    }
  }, [scrollPosition, bookControls, cycleControls, cycleAnimationComplete, textControls]);


  return (
    <>
      <div className="flex h-[2000px] relative">
        <div
          className="flex sticky top-0 hero-bg justify-center items-center"
          style={{ position: 'fixed', top: 0, height: '100vh' }}
        >
          <motion.div animate={bookControls} style={{ position: 'fixed' }}>
            <div className="flex justify-center align-middle">
              <Lottie animationData={Cycle} className="h-[600px]" />
              <div className="herotitle text-6xl text-center font-bold self-center">
                BIllIONBOOKS <br />
                <span className="text-5xl   text-blue-800 font-bold ">
                  GET YOUR BOOKS
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="circle-container"
            style={{
              position: 'fixed',
              top: 0,
              width: '100vw',
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1,
            }}
          >
            <motion.div
              className="w-0 h-0 bg-blue-800 rounded-full flex justify-center items-center"
              style={{ width: `${circleSize}px`, height: `${circleSize}px`, position: 'fixed' }}
              animate={cycleControls}
            >
              <Lottie animationData={Book} className="h-3/6" />
            </motion.div>
          </motion.div>

          {/* Add a motion.div for the text */}
          {/* <motion.div style={{ position: 'fixed' }} animate={textControls}>
            <div className="text-white text-xl font-bold">
              - 30 minutes in your table
            </div>
          </motion.div> */}
        </div>
      </div>

      <section className="">
        
      </section>
    </>
  );
};

export default LandingPage;
