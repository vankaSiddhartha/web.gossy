'use client'

import { ReactNode } from 'react'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import horse from '/horseVector.svg'
import {
  Box,
  Container,
  Flex,
  Img,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import hand from '/images/hoseLogo.png';
const Logo = (props) => {
    return (
   horse
  )

}

const ListHeader = ({ children }) => {

  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}


export default function Footer() {
   const [counterValue, setCounterValue] = useState(null);
     useEffect(() => {

      const fetchCounterValue = async () => {
      try {
        const response = await fetch('https://www.free-counters.org/count/djh3');
        if (!response.ok) {
          throw new Error(`Failed to fetch. Status: ${response.status}`);
        }
        const data = await response.text();
        const counterRegex = /<script.*?>.*?(\d+).*?<\/script>/; // Modify the regex based on the actual content structure
        const match = data.match(counterRegex);

        if (match && match.length > 1) {
          const value = match[1];
          setCounterValue(value); // Set the counter value in the state
        } else {
          console.log('Counter value not found.');
        }
      } catch (error) {
        console.error('Error fetching the content:', error);
      }
    };

    fetchCounterValue();
  }, []);
  return (
    <>
     <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Flex  alignItems="center">
                 <img src={hand} alt="Logo" height={50} width={50} />
                 <Text marginStart={2} fontWeight="bold" fontSize="xl">
      Gossy
    </Text>

            </Flex >
            <Text fontSize={'sm'}>© 2023 Vanka Siddhartha. All rights reserved</Text>
            <Text fontSize={'sm'}>Made with lust 💦 in Hostel room</Text>
          </Stack>
    


<Stack align={'flex-start'}>
  <ListHeader>Company</ListHeader>
  <Link to="/about">About</Link>
  <Link to="/careers">Careers</Link>
  <Link to="/contact">Contact</Link>

</Stack>
<Stack align={'flex-start'}>
  <ListHeader>Support</ListHeader>
  <Link to="/help-center">Help Center</Link>
  <Link to="/terms-of-service">Terms of Service</Link>
  <Link to="/privacy-policy">Privacy Policy</Link>

</Stack>
<Stack align={'flex-start'}>
  <ListHeader>Follow Us</ListHeader>
  <a href="https://www.twitter.com">Twitter</a>
  <a href="https://www.instagram.com">Instagram</a>
  <a href="https://www.linkedin.com">LinkedIn</a>
</Stack>
</SimpleGrid>
      </Container>
    </Box>
    
    </>
  )
}