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
       <Heading as="h2" marginTop="5">
        Latest articles
      </Heading>
        
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center">
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%">
            <Box textDecoration="none" _hover={{ textDecoration: 'none' }}>
              <Image
                borderRadius="lg"
                src={
                  'https://firebasestorage.googleapis.com/v0/b/gossy-fbbcf.appspot.com/o/profile%2FGoo.png?alt=media&token=425a9174-dced-4973-9fd9-1544a22d4924'
                }
                alt="some good alt text"
                objectFit="contain"
              />
            </Box>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                'radial(orange.600 1px, transparent 1px)',
                'radial(orange.300 1px, transparent 1px)',
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>
          <BlogTags tags={['Social marketing', 'Product']} />
          <Heading marginTop="1">
            <Text textDecoration="none" _hover={{ textDecoration: 'none' }}>
              Establishing Gossy's Online Presence: A Comprehensive Guide for Twitter, Instagram, and LinkedIn
            </Text>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg">
            In today's digital era, building a robust online presence is indispensable for businesses and individuals alike. Whether you're an entrepreneur, a professional, or an aspiring influencer, platforms like Twitter, Instagram, and LinkedIn offer unparalleled opportunities to connect, engage, and thrive in your respective domain. In this blog post, we'll delve into crafting a compelling online presence for Gossy across these three major social media platforms.
          </Text>
          <BlogAuthor name="Vanka Siddhartha" date={new Date('2024-01-09T19:53:37Z')} />
        </Box>
      </Box>
     
 <Heading as="h1" marginTop={10}>Stories by Gossy</Heading>

    
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