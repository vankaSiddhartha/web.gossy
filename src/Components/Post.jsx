import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import Navigation from './Navigation';
import hand from '/images/Post.png';


export default function Post() {
  return (
    <>
     
      <Stack bg={'yellow'} minH={'100vh'} direction={'column'} paddingTop={'150px'}>
        {/* Add paddingTop to Stack to avoid overlap with Navigation */}
        <Flex justifyContent="center" alignItems="center" flexDir={{ base: 'column-reverse', md: 'row' }}>
          <Stack p={8} flex={1}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text as={'span'} position={'relative'}>
              Post anonymously and confess secrets
              </Text>
              <br />
              <Text color={'blue.400'} as={'span'}>
                Post end-to-end encrypted anonymous post
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            End-to-end encryption secures communication by encoding information in a way that only the sender and intended recipient can access, ensuring privacy and preventing third-party interception. It safeguards data throughout its entire journey, from sender to receiver, without intermediaries deciphering the content.
            </Text>
          </Stack>
          <Flex flex={1} justifyContent="center" alignItems="center">
          <Image
  alt={'Login Image'}
  objectFit={'cover'}
  src={hand}
  maxWidth={'80%'} 
/>

          </Flex>
        </Flex>
      </Stack>
   
    </>
  );
}

