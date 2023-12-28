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






export default function Policy() {
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
            Gossy❤️
          </Text>
          <Heading>Privacy Policy</Heading>
           <Text color={'gray.500'} fontSize={'lg'}>
    Information Collection and Use

    We may compilation information such as names, profile, and user-generated content when you register an account or use our services. This information is used to personalize your experience, provide customer support, and improve our app's features.

    <br/><br/>

    


    Security

    We prioritize the security of your personal information and employ industry-standard measures to protect it from unauthorized access or disclosure.

    <br/><br/>



    Children's Privacy

    Our services do not address anyone under the age of 13. We do not knowingly collect personal information from children under 13. If we discover that a child under 13 has provided us with personal information, we will delete it immediately.

    <br/><br/>

    Changes to This Privacy Policy

    We reserve the right to update our Privacy Policy periodically. You will be notified of any changes by posting the new Privacy Policy on this page.

    <br/><br/>

    Contact Us

    If you have any questions or suggestions about our Privacy Policy, please contact us at [Contact Email/Support].

    <br/><br/>

    By using Gossy, you agree to the terms outlined in this Privacy Policy.
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
              'https://images.unsplash.com/photo-1694459189433-57991eee60b1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }
            width={'100%'}
               objectFit={'cover'}
           
          />
        </Flex>
      </SimpleGrid>
    </Container>
  )
}