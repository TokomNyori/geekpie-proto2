import Link from "next/link";
import React from "react";
import { Spotlight } from "../ui/Spotlight";
import { Button } from "../buttons/moving-border";
import dynamic from "next/dynamic";
import { globeConfig, sampleArcs } from "@/data/globeData";
import { StarsBackground } from "../ui/stars-background";
import { ShootingStars } from "../ui/shooting-stars";
import TailwindConnectBtn from "../buttons/tailwindConnectBtn";
import { IconBrandReact, IconCode } from "@tabler/icons-react";
import { HoverBorderGradient } from "@/components/buttons/hover-border-gradient";
import localFont from "next/font/local";
import clsx from "clsx";
const proxmaNova = localFont({
  src: [
    {
      path: "../../assets/fonts/proxima-nova/ProximaNovaBold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../assets/fonts/proxima-nova/ProximaNovaBoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../assets/fonts/proxima-nova/ProximaNovaSemibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../assets/fonts/proxima-nova/ProximaNovaSemiboldItalic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../assets/fonts/proxima-nova/ProximaNovaRegular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../assets/fonts/proxima-nova/ProximaNovaRegularItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../assets/fonts/proxima-nova/ProximaNovaLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../assets/fonts/proxima-nova/ProximaNovaLightItalic.otf",
      weight: "300",
      style: "italic",
    },
  ],
  display: "swap",
});

const proximaNovaCondensedBold = localFont({
  src: [
    {
      path: "../../assets/fonts/proxima-nova/ProximaNovaCondensedBold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});

const World = dynamic(() => import("../ui/globe").then((m) => m.World), {
  ssr: false,
});

const Scene = dynamic(() => import("@/components/test/Scene"), {
  ssr: false,
});

function Hero() {
  //dark:bg-grid-white/[0.2] bg-grid-black/[0.2]
  return (
    <div className="minxl:py:0 relative flex h-auto w-full flex-col-reverse items-center justify-between overflow-hidden rounded-md py-10 minxl:h-screen minxl:flex-row minxl:items-center minxl:justify-between">
      <ShootingStars />
      <StarsBackground />
      <Spotlight
        className="-top-10 left-0 minxl:-top-20 minxl:left-0"
        fill="white"
      />
      {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_-75%,black)]"></div> */}
      <div className="relative z-10 mt-2 w-full p-4 px-6 text-center minxl:ml-10 minxl:mt-0 minxl:px-8 minxl:text-start">
        <TailwindConnectBtn text="Introducing GeekPie" className="mb-4" />
        <h1
          className={clsx(
            `bg-gradient-to-b from-neutral-50 to-neutral-500 bg-clip-text py-1 text-4xl font-bold uppercase text-transparent md:text-[3.5rem] md:leading-none`,
            proxmaNova.className,
          )}
        >
          Cutting-Edge Apps. <br /> Stunning Design.
        </h1>
        <p className="mx-auto mb-5 mt-4 max-w-lg text-base font-normal text-neutral-200 md:text-lg minxl:mx-0">
          We craft web and mobile apps that deliver real results. No Calls. No
          BS. Just Results.
        </p>
        <Link className="" href={"#"}>
          <Button className="">Chat GeekPIe AI</Button>
        </Link>
      </div>
      <div className="relative mt-14 flex h-80 w-full items-start justify-center md:mt-0 md:h-[36rem] minxl:h-[100%]">
        {/* <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-20" /> */}
        <div className="absolute bottom-0 z-10 h-[21rem] w-full p-0 md:h-[95%] md:w-[95%] minxl:bottom-2 minxl:h-[95%] minxl:w-[95%]">
          <Scene />
        </div>
      </div>
      <div className="absolute bottom-2 z-30 mx-auto w-full text-center text-neutral-300 minxl:bottom-10">
        Backed by
        <IconCode className="mx-1 inline animate-pulse text-white" stroke={1} />
        Computer Science
      </div>
    </div>
  );
}

export default Hero;
