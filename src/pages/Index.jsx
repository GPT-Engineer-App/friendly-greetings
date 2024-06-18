import { useEffect } from "react";
import { Container, Text, VStack, Image } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import scarraImage from "../assets/scarra.jpg";

const floatAnimation = keyframes`
  0% { transform: translate(0, 0); }
  25% { transform: translate(100px, -50px); }
  50% { transform: translate(0, -100px); }
  75% { transform: translate(-100px, -50px); }
  100% { transform: translate(0, 0); }
`;

const Index = () => {
  useEffect(() => {
    const audio = new Audio("https://www.youtube.com/watch?v=U06jlgpMtQs");
    audio.volume = 1.0;
    audio.play();
  }, []);

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="red.800" color="yellow.300">
      <VStack spacing={4}>
        <Text fontSize="2xl" fontWeight="bold">Prepare to be Shocked!</Text>
        <Image src={scarraImage} alt="William 'Scarra' Lee" boxSize="150px" animation={`${floatAnimation} 5s infinite`} />
      </VStack>
    </Container>
  );
};

export default Index;