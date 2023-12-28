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
import hand from '/images/poll.png'

export default function PollView() {
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
                Anonymous polls
              </Text>
              <br />{' '}
              <Text color={'blue.400'} as={'span'}>
                Tag someone
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
               Polls encouraged users to anonymously answer positive, uplifting questions about their friends, fostering a culture of affirmation and kindness within social networks. The app's polls aimed to celebrate and highlight the best qualities and attributes of individuals in a fun and supportive way.
            </Text>
                  
          </Stack>
        </Flex>
      </Stack>
    </>
  )
}
