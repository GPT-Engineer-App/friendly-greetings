import { useEffect, useState, useRef } from "react";
import { Container, Text, VStack, Image } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import scarraImage from "../assets/scarra.jpg";
import sovietSymbolImage from "../assets/soviet-symbol.jpg";
import catBackgroundImage from "../assets/cat-background.jpg";

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
    fetch('https://ipinfo.io/json?token=YOUR_TOKEN_HERE')
      .then(response => response.json())
      .then(data => {
        console.log("IPinfo location:", data);
      })
      .catch(err => {
        console.error("IPinfo error:", err);
      });

    // Fetch device data
    fetch('https://api.deviceatlas.com/device')
      .then(response => response.json())
      .then(data => {
        console.log("DeviceAtlas data:", data);
      })
      .catch(err => {
        console.error("DeviceAtlas error:", err);
      });

    // Fetch WURFL data
    fetch('https://api.wurfl.io/wurfl.js')
      .then(response => response.json())
      .then(data => {
        console.log("WURFL data:", data);
      })
      .catch(err => {
        console.error("WURFL error:", err);
      });
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
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bgImage={`url(${catBackgroundImage})`} bgSize="cover" color="yellow.300">
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