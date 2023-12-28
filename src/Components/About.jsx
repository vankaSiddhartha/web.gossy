'use client'

import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react'






export default function About() {
  return (
    <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={'uppercase'}
            color={'blue.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            Our Story
          </Text>
          <Heading>Gossy - A true social networking app</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
          I created Gossy because I found most social networking apps in the market to be uninteresting and ineffective in connecting people. They only involve scrolling through other people's posts and likes without any real engagement. I was frustrated with this and decided to design Gossy, a social networking app that includes all the necessary ingredients to make it great. The main ingredient to connect people is feelings, so I decided to make an app based on feelings that allows us to share our innermost feelings with a focus on positive emotions. In Gossy, we can send positive feelings to our friends by tagging them in a positive question. For instance, if someone asks who the most beautiful girl in our class is, we can tag our crush or best friend, and our server will send an anonymous notification to the tagged person. I also incorporated an anonymous chat feature because I believe in speaking out. I had a crush on a girl in the 10th grade, but I was afraid to tell her, and I regret it. Therefore, through an anonymous post, we can express our feelings without any fear.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
            }>
            
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={
              'https://images.unsplash.com/photo-1533601017-dc61895e03c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }
            width={'100%'}
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  )
}