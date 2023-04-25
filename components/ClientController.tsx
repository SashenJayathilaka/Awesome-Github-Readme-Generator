"use client";

import { useCallback, useState } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import ClientOnly from "./ClientOnly";
import HeroSection from "./HeroSection";
import HowItWorks from "./HowItWorks";
import MiddleChoose from "./MiddleChoose";

type Props = {};

function ClientController({}: Props) {
  const [isShow, setIsShow] = useState(true);

  const particlesInit = useCallback(async (engine: any) => {
    console.log(engine);

    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    await console.log(container);
  }, []);

  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              directions: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 6,
              straight: false,
            } as any,
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      {isShow ? (
        <ClientOnly>
          <HeroSection setIsShow={setIsShow} />
          <HowItWorks />
        </ClientOnly>
      ) : (
        <ClientOnly>
          <MiddleChoose />
        </ClientOnly>
      )}
    </>
  );
}

export default ClientController;
