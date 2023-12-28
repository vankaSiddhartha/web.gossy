import {
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import Navigation from './Navigation'
import hand from '/images/postDetails.png'

export default function PostDetail() {
  return (
    <>
     
 
      <Stack  minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex flex={1} justify={'center'} align={'center'}>
                    <Image
  alt={'Login Image'}
  objectFit={'cover'}
  src={hand}
  maxWidth={'80%'} 
/>
        </Flex>
           <Flex p={8} align={'center'} justify={'center'} flex={1}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text as={'span'} position={'relative'}>
                Like, comment, and view posts anonymously.
              </Text>
              <br />{' '}
              <Text color={'blue.400'} as={'span'}>
                Enjoy secrets secretly
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              Anonymity holds a unique power—the freedom to reveal without reservation, to share without fear of judgment. It's a space where secrets, confessions, and untold stories find sanctuary. Here, honesty reigns supreme, unburdened by the weight of identity. Anonymity invites raw, unfiltered truths to emerge, painting a mosaic of human experiences without the constraints of personal consequence. It's a canvas for whispers of the heart and revelations that yearn to be heard, a place where the vulnerability of secrets finds solace in the embrace of the unknown.
            </Text>
          </Stack>
        </Flex>
      </Stack>
    </>
  )
}
