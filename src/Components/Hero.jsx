import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import Navigation from './Navigation';
import hand from '/images/hand.png';
import PollView from './PollView';

export default function Hero() {
  return (
    <>
     

   <Stack bg={'yellow'} minH={'100vh'} direction={'column'} paddingTop={'150px'}>
        {/* Add paddingTop to Stack to avoid overlap with Navigation */}
        <Flex    marginLeft={{ base: 0, md: 60 }}  justifyContent="center" alignItems="center" flexDir={{ base: 'column-reverse', md: 'row' } }>
          <Stack p={8} flex={1}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text as={'span'} position={'relative'}>
                A new-age pseudonymous social network
              </Text>
              <br />
              <Text color={'blue.400'} as={'span'}>
                Confess your feelings
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              Gossy is more than a platform—it's a sanctuary of positivity! 🌟 It's a space where tagging friends in uplifting questions sparks smiles and spreads good vibes anonymously. 🌈 Speaking out fearlessly via anonymous chat ensures voices are heard without hesitation. 🗨️ And, sharing the heartbeat of our college with confessions and gossips fosters a vibrant community! 🎓✨
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Button
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Pre-register
              </Button>
              <Button rounded={'full'}>Became beta tester</Button>
            </Stack>
          </Stack>
          <Flex flex={1} justifyContent="center" alignItems="center">
            <Image
              alt={'Login Image'}
              objectFit={'cover'}
              src={hand}
              maxWidth="100%"
            />
          </Flex>
        </Flex>
      </Stack>
    </>
  );
}

