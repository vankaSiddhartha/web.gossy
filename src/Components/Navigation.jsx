import {
  Flex,
  Button,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Icon,
    CloseButton,
  DrawerHeader,
  DrawerBody,
  Box,
} from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';

import { Text } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import logo from '/images/logoFinal.png';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
} from 'react-icons/fi'


export default function Navigation() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const flexStyles = {
   
    px: 4,
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: "none", // Set boxShadow to none explicitly
  };


  return (
    <>
      <Flex bg={'yellow'} position={'fixed'} width={'100%'}{...flexStyles} >
        <IconButton
      icon={<HamburgerIcon fontSize="24px" />} // Adjust fontSize for the icon size
      onClick={onOpen}
      variant="ghost"
      height={12} // Increase the height to change the overall button size
      width={12} // Increase the width to change the overall button size
      color="current"
      aria-label="Menu"
    />
        <Box
       
          w="1000px"
          h="150px"
          background={`url(${logo})`}
          backgroundSize="contain"
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
        />
        <Button
          display={{ base: 'none', md: 'inline-flex' }}
          bg="black"
          color="white"
          _hover={{ bg: 'gray.800' }}
          rounded="full"
        >
          Download
        </Button>
      </Flex>

      {/* Drawer for mobile view */}
<Drawer placement="left" onClose={onClose} isOpen={isOpen} >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader bg={'yellow.400'}>Menu</DrawerHeader>
            <DrawerBody bg={'yellow.400'}>
              {/* Replace these Box components with your actual navigation links */}
               <Text fontWeight="bold" fontSize="xl">
  I'm too lazy to code the menu section, but you can find all the website links at the bottom. I love you
</Text>
          
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}
