'use client'

import {
  Box,
  Heading,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  useColorModeValue,
  Container,
  VStack,
} from '@chakra-ui/react'

const BlogAuthor = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://firebasestorage.googleapis.com/v0/b/gossy-fbbcf.appspot.com/o/profile%2F3967356f-f042-49ab-90a1-4a011401db18?alt=media&token=23e5db4d-9aa8-462b-87b1-1e8c0b65634a"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString('en-GB')}</Text>
    </HStack>
  )
}


const BlogTags = (props) => {
  const { marginTop = 0, tags } = props

  return (
    <HStack spacing={2} marginTop={marginTop}>
      {tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        )
      })}
    </HStack>
  )
}





const Blogs= () => {
  return (
    <Container maxW={'7xl'} p="12">
      <Heading as="h1">Stories by Gossy</Heading>

      <Heading as="h2" marginTop="5">
        Latest article
      </Heading>
      <Divider marginTop="5" />
      <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
       <BlogTags tags={['Introduction', 'Product']}/>
        <Heading as="h2">📱 Introducing Gossy: Revolutionizing Social Networking with Positivity and Anonymity!</Heading>
        <Text as="p" fontSize="lg">
          Are you tired of the same old social media routine, endlessly scrolling through posts without any real connection? Meet Gossy – the game-changer in the social networking sphere. Developed from a place of frustration with the mundane, ineffective platforms dominating the market, Gossy was born to inject vibrancy, positivity, and authentic engagement into our online interactions
        </Text>
    
        <Text as="p" fontSize="lg">
          💬 Positive Tagging and Anonymity: Redefining Connection and Expression
Gossy breaks the mold by allowing users to spread positivity through tagged questions, celebrating friends and connections. Want to share a positive vibe? Tag a friend in a question highlighting their qualities anonymously! With our anonymous chat feature, speaking out without fear is now a reality. Whether it's addressing educational concerns or sharing heartfelt confessions, Gossy fosters a safe space for genuine expression.
        </Text>
        <Text as="p" fontSize="lg">
🎓 Gossy: Your Campus Companion for Confessions and Gossip
From navigating college life to expressing your thoughts freely, Gossy is your go-to platform. Confess feelings, share juicy gossip, or highlight issues anonymously—empowering users to voice opinions without constraints.
        </Text>
        <Text as={"p"} fontSize={"lp"}>
        Gossy isn’t just an app; it's a community-driven space designed to foster meaningful connections and genuine expression while celebrating positivity! Try Gossy today and experience social networking in a whole new light. ✨
        </Text>
         <BlogAuthor name="Vanka Siddhartha" date={new Date('2023-12-28T19:01:27Z')} />
      </VStack>
    </Container>
  )
}

export default Blogs