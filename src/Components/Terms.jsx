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






export default function Terms() {
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
          <Heading>Terms and Services</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
    Welcome to Gossy! Before you start using our platform, please read and agree to the following terms and conditions:
     <br/><br/>

    1. **Acceptance of Terms:** By accessing or using the Gossy app, you agree to abide by these terms and services. If you do not agree with any part of these terms, you may not use our services.

    <br/><br/>

    2. **User Conduct:** 
        <br/>- Users must be respectful and refrain from posting content that is offensive, discriminatory, or infringes on the rights of others.
        <br/>- Users are responsible for their interactions and content shared on Gossy. Any misuse or abuse may result in the termination of their account.

    <br/><br/>

    3. **Privacy and Data Security:** 
        <br/>- We prioritize user privacy and protect personal information according to our Privacy Policy. Your data is secure and confidential.
        <br/>- Users are responsible for maintaining the security of their accounts and must not share their login credentials.

    <br/><br/>

    4. **Content Guidelines:** 
        <br/>- Users may not post content that is illegal, infringes on intellectual property rights, or violates any laws or regulations.
        <br/>- Gossy reserves the right to remove any content that violates these guidelines.

    <br/><br/>

    5. **Anonymous Features:** 
        <br/>- Anonymous features, including chats and postings, are meant for constructive communication. Misuse of anonymity for harassment or spreading false information is prohibited.

    <br/><br/>

    6. **Termination:** Gossy reserves the right to terminate accounts or restrict access to the platform for users who violate these terms and services.

    <br/><br/>

    7. **Modifications:** Gossy may update or modify these terms and services. Users will be notified of any changes, and continued use of the platform constitutes acceptance of the updated terms.

    <br/><br/>

    8. **Disclaimer of Warranties:** Gossy provides its services "as is" and does not guarantee the accuracy, reliability, or availability of the platform.

    <br/><br/>

    9. **Contact Information:** For any queries or concerns regarding these terms and services, please contact [infogossy@gmail.com].

    <br/><br/>

    By using Gossy, you agree to these terms and services. Thank you for being a part of our community!
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