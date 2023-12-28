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
import hand from '/images/AddFriend.png'

export default function AddFriend() {
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
                Find your friends
              </Text>
              <br />{' '}
              <Text color={'blue.400'} as={'span'}>
                create a friends list anonymously
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
             Finding friends was usually done through integrated social connections
            </Text>
          </Stack>
        </Flex>
      </Stack>
    </>
  )
}
