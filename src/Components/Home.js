import React from 'react';
import {
  Box,
  Heading,
  IconButton,
  Text,
  Flex,
  Image,
  Center,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { usePage } from './Navbar';
import { FaPlayCircle } from 'react-icons/fa';
import bg from '../assets/bulb.jpg';
import about from '../assets/aboutus.png';
import video from '../assets/video.mp4';
import biped from '../assets/biped.min.png';
import modbot from '../assets/modbot.jpeg';
import imitato from '../assets/imitato.min.png';
import Footer from './Footer';

function Home() {
  const { state, dispatch } = usePage();
  return (
    state.home && (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Box
          color="white"
          backgroundImage={bg}
          backgroundPosition="center"
          height="80vh"
          backgroundSize="cover"
          backgroundRepeat="none"
          position="relative"
        >
          <Box
            position="absolute"
            as={motion.div}
            initial={{ x: -250 }}
            animate={{ x: -10 }}
            transition={{ type: 'tween' }}
            top="40%"
            left="15%"
            width="15%"
          >
            <Heading>Welcome to Sandbox</Heading>
            <Text marginTop="1rem" fontSize="md">
              Sandbox is BITS Goa's Incubation Center which aims to foster
              innovative projects and ideas by providing State-of-the-Art
              facilities and guidance to the students.
            </Text>
            <Flex alignItems="center" marginTop="1rem">
              <a href={video} target="blank">
                <IconButton
                  fontSize="4xl"
                  colorScheme="none"
                  icon={<FaPlayCircle />}
                />
              </a>
              <Text marginLeft="1">Watch the video</Text>
            </Flex>
          </Box>
        </Box>
        <Center marginTop="2rem">
          <Flex width="60%">
            <Box>
              <Heading color="#364d59 " fontSize="6xl">
                About Us
              </Heading>
              <Text marginTop="2rem" fontSize="lg">
                If innovation makes you tick, if wanting to make a change in the
                society with your engineering skills is your dream, the Sandbox
                provides you with the perfect platform for it. Well-equipped
                with industry-standard facilities, the lab provides BITS
                Pilani’s students with a conducive environment to work upon the
                next world- changing idea. The best project ideas, practical
                enough to be incorporated into the industry and with the
                potential to make a difference are chosen through a selection
                procedure and the student teams get 24*7 access to the lab
                facility to make their ideas a reality.
                <br />
                <br />
                Set up with the aim to provide the best resources, to bridge the
                gap between academia and industry and to foster real- time
                problem-solving skills and learning in our students the Sandbox
                has seen it all - successful projects, patents and startups.
              </Text>
            </Box>
            <Image
              as={motion.img}
              src={about}
              marginTop="7rem"
              height="20rem"
              initial={{ x: -250 }}
              animate={{ x: -10 }}
              transition={{ type: 'tween' }}
            />
          </Flex>
        </Center>
        <Box textAlign="center" marginTop="6rem">
          <Heading color="#364d59 " fontSize="6xl">
            Projects
          </Heading>
          <br />
          <Text>
            A plethora of projects are presently being worked on in the Sandbox
            Labs.
          </Text>
          <br />
          <Flex justifyContent="center">
            <Box maxW="sm" borderWidth="1px" borderRadius="lg">
              <Image src={biped} height="18rem" width="25rem" maxWidth="100%" />
              <Box padding="2" textAlign="justify">
                <Text color="teal" fontSize="xl">
                  Biped{' '}
                </Text>
                <Text fontSize="lg">
                  Robots are robotic modules with high stability and degrees of
                  freedom, being developed for the purpose of traversing places
                  where neither humans nor bots with wheels can go.
                </Text>
              </Box>
            </Box>
            <Box maxW="sm" borderWidth="1px" marginLeft="2" borderRadius="lg">
              <Image
                src={modbot}
                height="18rem"
                width="25rem"
                maxWidth="100%"
              />
              <Box padding="2" textAlign="justify">
                <Text color="teal" fontSize="xl">
                  Modular Robots
                </Text>
                <Text fontSize="lg">
                  The project aims to build reconfigurable robots made up of
                  small modules which may have common or distinct functionality
                  based on the application.
                </Text>
              </Box>
            </Box>
            <Box maxW="sm" borderWidth="1px" marginLeft="2" borderRadius="lg">
              <Image
                src={imitato}
                height="18rem"
                width="25rem"
                maxWidth="100%"
              />
              <Box padding="2" textAlign="justify">
                <Text color="teal" fontSize="xl">
                  Imitato{' '}
                </Text>
                <Text fontSize="lg">
                  BIT Secure is a matchbox-sized handy gadget, which assures the
                  safety and security of personal belongings such as luggage,
                  purses containing valuables and more.
                </Text>
              </Box>
            </Box>
          </Flex>
          <br />
          <Text>
            View more{' '}
            <Text
              display="inline"
              cursor="pointer"
              onClick={() => dispatch('Projects')}
              color="#efba6c"
            >
              projects
            </Text>
          </Text>
        </Box>
        <Footer />
      </motion.div>
    )
  );
}

export default Home;
