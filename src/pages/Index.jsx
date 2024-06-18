import { useEffect, useState, useRef } from "react";
import { Container, Text, VStack, Image } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import scarraImage from "../assets/scarra.jpg";
import sovietSymbolImage from "../assets/soviet-symbol.jpg";
import ipinfo from "ipinfo";
import geoip from "geoip-lite";
import DeviceAtlas from "deviceatlas-cloud-client";
import WURFL from "wurfl-js";

const floatAnimation = keyframes`
  0% { transform: translate(0, 0); }
  25% { transform: translate(100px, -50px); }
  50% { transform: translate(0, -100px); }
  75% { transform: translate(-100px, -50px); }
  100% { transform: translate(0, 0); }
`;

const Index = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);

  useEffect(() => {
    const audio = new Audio("https://www.youtube.com/watch?v=U06jlgpMtQs");
    audio.volume = 1.0;
    audio.play();

    // Fetch location data
    ipinfo((err, cLoc) => {
      if (err) {
        console.error("IPinfo error:", err);
      } else {
        console.log("IPinfo location:", cLoc);
      }
    });

    const geo = geoip.lookup("207.97.227.239");
    console.log("GeoIP location:", geo);

    // Fetch device data
    DeviceAtlas.getDeviceData()
      .then((data) => {
        console.log("DeviceAtlas data:", data);
      })
      .catch((err) => {
        console.error("DeviceAtlas error:", err);
      });

    const wurflData = WURFL.getDevice();
    console.log("WURFL data:", wurflData);
  }, []);

  const handleDragStart = (e) => {
    const img = imageRef.current;
    const rect = img.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleDrag = (e) => {
    if (e.clientX === 0 && e.clientY === 0) return; // Prevents the image from jumping to (0, 0) on drag end
    setPosition({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bgImage={`url(${sovietSymbolImage})`} bgSize="cover" color="yellow.300">
      <VStack spacing={4}>
        <Text fontSize="2xl" fontWeight="bold">Prepare to be Shocked!</Text>
        <Image
          src={scarraImage}
          alt="William 'Scarra' Lee"
          boxSize="150px"
          animation={`${floatAnimation} 5s infinite`}
          ref={imageRef}
          draggable
          onDragStart={handleDragStart}
          onDrag={handleDrag}
          style={{ position: "absolute", left: `${position.x}px`, top: `${position.y}px` }}
        />
      </VStack>
    </Container>
  );
};

export default Index;