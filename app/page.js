"use client"
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { useEffect, useRef } from 'react';
gsap.registerPlugin(Draggable);

export default function Home() {
  const draggableRef = useRef(null);

  useEffect(() => {
    if (draggableRef.current) {
      Draggable.create(draggableRef.current, {
        type: 'x,y',
        edgeResistance: 0.65,
        bounds: window,
        inertia: true, 
      });
    }
  }, []);
  
  return (
    <>
      <div className="container relative heroElem w-full pt-20 pb-40 m-auto flex justify-center text-center flex-col items-center z-1"
      >
        <p ref={draggableRef} className="text-xl mb-5">Hey, I'm Rahul.</p>
        <h1 className="heroTitle inline-block max-w-2xl lg:max-w-4xl  w-auto relative text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-10 font-bold heroShinyBg">
          I enjoy <span className="heroShiny1 text-fun-pink">building</span> and{" "}
          <span className="heroShiny2 text-fun-pink">designing</span> for the
          web.
          <img 
            className="
             sqD squiggle-hero-html w-16 top-[-90px] right-[5%] sm:top-[-90px] sm:right-[170px]"
            style={{ animationDelay: "0.1s" }}
            src="/images/doodles/hero/html.svg"
          />
          <img
            className="sqD squiggle-hero-nextjs hidden top-[75px] right-0 w-11"
            style={{ animationDelay: "0.2s" }}
            src="/images/doodles/hero/nextjs.svg"
          />
          <img
            className="sqD bottom-[-300px] -right-1/4 sm:right-[-20%] lg:bottom-[-310px] lg:right-[-120px] w-[400px]"
            style={{ animationDelay: "0.3s" }}
            src="/images/doodles/hero/rahul.png"
          />
          <img
            className="sqD hidden sm:block bottom-[-340px] left-[-180px]"
            style={{ animationDelay: "0.4s" }}
            src="/images/doodles/hero/coder.svg"
          />
          <img
            className="sqD hidden sm:block left-[100px] lg:left-[160px] bottom-[-150px]"
            style={{ animationDelay: "0.5s" }}
            src="/images/doodles/hero/js.svg"
          />
          <img
            className="sqD bottom-[-320px] right-[65%] sm:right-[45%]"
            style={{ animationDelay: "0.6s" }}
            src="/images/doodles/hero/dino.svg"
          />
          <img
            className="sqD right-[-60px] sm:right-0 bottom-[-180px] lg:[5%]"
            style={{ animationDelay: "0.7s" }}
            src="/images/doodles/hero/paintbrush.svg"
          />
          <img
            className="sqD squiggle-hero-pop1 hidden sm:block sm:top-[-130px] sm:left-[15%] lg:top-[-130px] lg:left-[120px]"
            src="/images/doodles/hero/pop1.svg"
          />
          <img
            className="sqD left-[-35px] bottom-[-85px] sm:bottom-[-100px] sm:left-5 opacity-40"
            style={{ animationDelay: "0.9s" }}
            src="/images/doodles/hero/code.svg"
          />
        </h1>
        
      </div>
    </>
  );
}
