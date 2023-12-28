import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import hand from '/images/getPolled.png';


export default function GetPolled() {
  return (
    <>
     
      <Stack bg={'yellow'} minH={'100vh'} direction={'column'} paddingTop={'150px'}>
        {/* Add paddingTop to Stack to avoid overlap with Navigation */}
        <Flex justifyContent="center" alignItems="center" flexDir={{ base: 'column-reverse', md: 'row' }}>
          <Stack p={8} flex={1}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text as={'span'} position={'relative'}>
                Getting polled by Friends
              </Text>
              <br />
              <Text color={'blue.400'} as={'span'}>
                By sharing in Instagram or Snapchat to find who flamed i.e taged you
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              Getting polled by friends was a delightful experience where they anonymously answered positive and affirming questions about you. Friends would receive questions tailored to celebrate your unique qualities, fostering a positive and uplifting atmosphere within the social network. It was a way for friends to express admiration and appreciation for each other in a fun and anonymous manner
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

