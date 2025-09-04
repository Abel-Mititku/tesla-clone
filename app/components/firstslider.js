"use client";
import { Orbitron } from "next/font/google";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Weight } from "lucide-react";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "700"] });

export default function FirstSlide() {
  const slides = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const dots = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  useEffect(() => {
    const slideElements = slides.map((slide) => slide.current);
    const dotElemets = dots.map((dot) => dot.current);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Array.from(slideElements).indexOf(entry.target);

            dotElemets.forEach((dot) => {
              dot.classList.remove("active");
            });

            dotElemets[index].classList.add("active");
          }
        });
      },
      { threshold: 0.7 }
    );

    slideElements.forEach((slide) => observer.observe(slide));

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div className="[@media(max-width:500px)]:pt-[390px] [@media(min-width:500px)]:pt-[430px] overflow-x-scroll scrollbar-hide [@media(max-width:500px)]:ml-[8px] [@media(min-width:500px)]:ml-4 [@media(min-width:700px)]:ml-8">
      <div className="flex space-x-6 items-center h-[430px]">
        <div
          ref={slides[0]}
          className="h-[400px] w-[70%] rounded-lg shrink-0 [@media(max-width:500px)]:bg-[url('/assets/Homepage-Card-Cybertruck-Mobile-Dynamic-Asset.avif')] [@media(min-width:500px)]:bg-[url('/assets/Homepage-Card-Cybertruck-Desktop-Dynamic-Asset.avif')] bg-cover bg-top"
        >
          <div className="h-full w-full flex flex-col justify-between items-start">
            <div className="text-white text-sm m-[5px]">
              <p>Utility Truck</p>
            </div>

            <div className="flex flex-col">
              <div className="flex flex-col [@media(max-width:500px)]:ml-[10px] [@media(min-width:500px)]:ml-8">
                <p
                  className={`${orbitron.className} text-2xl font-bold text-white sm:text-4xl`}
                >
                  Cybertruck
                </p>
                <p className="text-white text-sm">
                  Cyberbeast Now Includes Luxe Package With FSD (Supervised) and
                  More
                </p>
              </div>
              <div className="flex justify-start w-full [@media(max-width:500px)]:ml-[10px] [@media(min-width:500px)]:ml-8 [@media(max-width:500px)]:mb-[10px] [@media(min-width:500px)]:mb-8 text-sm">
                <button className="bg-blue-500 w-[120px] rounded-md h-8 text-white mr-4">
                  Order Now
                </button>
                <button className="bg-white w-[120px] rounded-md h-8">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          ref={slides[1]}
          className="h-[400px] w-[70%] rounded-lg shrink-0 [@media(max-width:500px)]:bg-[url('/assets/Homepage-Card-Model-X-Mobile-US.avif')] [@media(min-width:500px)]:bg-[url('/assets/Homepage-Card-Model-X-Desktop-US.avif')] bg-cover bg-top"
        >
          <div className="h-full w-full flex flex-col justify-between items-start">
            <div className="text-white text-sm m-[5px]">
              <p>Luxury SUV</p>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col [@media(max-width:500px)]:ml-[10px] [@media(min-width:500px)]:ml-8">
                <p
                  className={`${orbitron.className} text-2xl font-bold text-white sm:text-4xl`}
                >
                  Model X
                </p>
                <p className="text-white text-sm">
                  Now Includes Luxe Package With FSD (Supervised) and More
                </p>
              </div>
              <div className="flex justify-start w-full [@media(max-width:500px)]:ml-[10px] [@media(min-width:500px)]:ml-8 [@media(max-width:500px)]:mb-[10px] [@media(min-width:500px)]:mb-8 text-sm">
                <button className="bg-blue-500 w-[120px] rounded-md h-8 text-white mr-4">
                  Order Now
                </button>
                <button className="bg-white w-[120px] rounded-md h-8">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          ref={slides[2]}
          className="h-[400px] w-[70%] rounded-lg shrink-0 [@media(max-width:500px)]:bg-[url('/assets/Homepage-Card-Model-S-Mobile-US.avif')] [@media(min-width:500px)]:bg-[url('/assets/Homepage-Card-Model-S-Desktop-US.avif')] bg-cover bg-top"
        >
          <div className="h-full w-full flex flex-col justify-between items-start">
            <div className="text-white text-sm m-[5px]">
              <p>Luxury Sedan</p>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col [@media(max-width:500px)]:ml-[10px] [@media(min-width:500px)]:ml-8">
                <p
                  className={`${orbitron.className} text-2xl font-bold text-white sm:text-4xl`}
                >
                  Model S
                </p>
                <p className="text-white text-sm">
                  Now Includes Luxe Package With FSD (Supervised) and More
                </p>
              </div>
              <div className="flex justify-start w-full [@media(max-width:500px)]:ml-[10px] [@media(min-width:500px)]:ml-8 [@media(max-width:500px)]:mb-[10px] [@media(min-width:500px)]:mb-8 text-sm">
                <button className="bg-blue-500 w-[120px] rounded-md h-8 text-white mr-4">
                  Order Now
                </button>
                <button className="bg-white w-[120px] rounded-md h-8">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          ref={slides[3]}
          className="h-[400px] w-[70%] rounded-lg shrink-0 [@media(max-width:500px)]:bg-[url('/assets/Homepage-Card-Model-3-Mobile-US.avif')] [@media(min-width:500px)]:bg-[url('/assets/Homepage-Card-Model-3-Desktop-US.avif')] bg-cover bg-top"
        >
          <div className="h-full w-full flex flex-col justify-between items-start">
            <div className="text-white text-sm m-[5px]">
              <p>Sports Sedan</p>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col [@media(max-width:500px)]:ml-[10px] [@media(min-width:500px)]:ml-8">
                <p
                  className={`${orbitron.className} text-2xl font-bold text-white sm:text-4xl`}
                >
                  Model 3
                </p>
                <a
                  href="#"
                  className="text-sm text-white underline decoration-white/70 hover:decoration-white/100"
                >
                  Lease From $299/mo for a Limited Time
                </a>
              </div>
              <div className="flex justify-start w-full [@media(max-width:500px)]:ml-[10px] [@media(min-width:500px)]:ml-8 [@media(max-width:500px)]:mb-[10px] [@media(min-width:500px)]:mb-8 text-sm">
                <button className="bg-blue-500 w-[120px] rounded-md h-8 text-white mr-4">
                  Order Now
                </button>
                <button className="bg-white w-[120px] rounded-md h-8">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          ref={slides[4]}
          className="h-[400px] w-[70%] rounded-lg shrink-0 [@media(max-width:500px)]:bg-[url('/assets/Homepage-Card-Model-Y-Mobile-US.avif')] [@media(min-width:500px)]:bg-[url('/assets/Homepage-Card-Model-Y-Desktop-US.avif')] bg-cover bg-top"
        >
          <div className="h-full w-full flex flex-col justify-between items-start">
            <div className="text-white text-sm m-[5px]">
              <p>Midsize SUV</p>
            </div>

            <div>
              <div className="flex flex-col [@media(max-width:500px)]:ml-[10px] [@media(min-width:500px)]:ml-8">
                <p
                  className={`${orbitron.className} text-2xl font-bold text-white sm:text-4xl`}
                >
                  Model Y
                </p>
                <a
                  href="#"
                  className="text-sm text-white underline decoration-white/70 hover:decoration-white/100"
                >
                  Lease From $399/mo for a Limited Time
                </a>
              </div>
              <div className="flex justify-start w-full [@media(max-width:500px)]:ml-[10px] [@media(min-width:500px)]:ml-8 [@media(max-width:500px)]:mb-[10px] [@media(min-width:500px)]:mb-8 text-sm">
                <button className="bg-blue-500 w-[120px] rounded-md h-8 text-white mr-4">
                  Order Now
                </button>
                <button className="bg-white w-[120px] rounded-md h-8">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex space-x-2 w-full justify-center absolute">
        <div
          ref={dots[0]}
          className="rounded-full bg-gray-300 w-[10px] h-[10px]"
        ></div>
        <div
          ref={dots[1]}
          className="rounded-full bg-gray-300 w-[10px] h-[10px]"
        ></div>
        <div
          ref={dots[2]}
          className="rounded-full bg-gray-300 w-[10px] h-[10px]"
        ></div>
        <div
          ref={dots[3]}
          className="rounded-full bg-gray-300 w-[10px] h-[10px]"
        ></div>
        <div
          ref={dots[4]}
          className="rounded-full bg-gray-300 w-[10px] h-[10px]"
        ></div>
      </div>
    </div>
  );
}
