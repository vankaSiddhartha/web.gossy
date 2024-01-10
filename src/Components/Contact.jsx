'use client'

import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from '@chakra-ui/react'
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from 'react-icons/md'
import swal from 'sweetalert';
import { BsInstagram, BsTwitterX, BsLinkedin,BsPerson } from 'react-icons/bs'
import { useState } from 'react'

export default function Contact() {

  const[name,setname] = useState('')
  const[mail,setMail] = useState('')
  const[message,setMessage] = useState('')

  function sendData(){
    if(name.trim()===""&&mail.trim()===""&&message.trim()===""){
      swal("Empty fields are not allowed", "Please fill the inputfileds", "error");
     return
    }
    const postData = {
  name: name,
  email: mail,
  message:message,
  type:"Contact"

};

fetch('https://gossy-fbbcf-default-rtdb.asia-southeast1.firebasedatabase.app/response.json', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(postData),
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    console.log('Data has been sent to Firebase!');
    swal("Good job!", "I will inform you with in 1 day", "success");
  })
  .catch(error => {
    
      swal("Error", error, "error");
  });
  }
  return (
    <Container bg="#9DC4FB" maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
          bg="#02054B"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}>
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>Contact</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                    Fill up the form below to contact
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Text
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdPhone color="#1970F1" size="20px" />}>
                        +91-8008649368
                      </Text>
                      <Text
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdEmail color="#1970F1" size="20px" />}>
                        infogossy@gmail.com
                      </Text>
                      <Text
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdLocationOn color="#1970F1" size="20px" />}>
                        Visakhapatnam (Dist.) Andhara Pradesh
                      </Text>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start">
                    <IconButton
                      aria-label="Instagram"
                      variant="ghost"
                      size="lg"
                       onClick={()=>window.open('https://www.instagram.com/gossylovesyou/', '_blank')}
                      isRound={true}
                      _hover={{ bg: '#0D74FF' }}
                      icon={<BsInstagram size="28px" style={{ color: 'white' }}></BsInstagram> }/>
                    <IconButton
                      aria-label="X"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                         onClick={()=>window.open('https://twitter.com/gossylovesyou', '_blank')}
                      _hover={{ bg: '#0D74FF' }}
                      icon={<BsTwitterX size="28px" style={{ color: 'white' }}></BsTwitterX>}
                    />
                    <IconButton
                      aria-label="Linkedin"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#0D74FF' }}
                      onClick={()=>window.open('https://www.linkedin.com/company/gossy-the-perfect-social-app/about/?viewAsMember=true', '_blank')}
                      icon={<BsLinkedin size="28px" style={{ color: 'white' }}></BsLinkedin>}
                    />
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none">
                            <BsPerson color="gray.800" />
                          </InputLeftElement>
                          <Input type="text" size="md" onChange={(e)=>{setname(e.target.value)}}/>
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Mail</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none">
                            <MdOutlineEmail color="gray.800" />
                          </InputLeftElement>
                          <Input type="text" size="md" onChange={(e)=>{setMail(e.target.value)}} />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: 'gray.300',
                          }}
                          onChange={(e)=>{setMessage(e.target.value)}}
                          placeholder="message"
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button variant="solid" bg="#0D74FF" color="white" _hover={{}} onClick={sendData}>
                          Send Message
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  )
}
