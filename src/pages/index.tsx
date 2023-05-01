import { type NextPage } from 'next';
import Head from 'next/head';
import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  ListItem,
  Text,
  UnorderedList,
  useColorMode,
} from '@chakra-ui/react';

const title = 'Next.js, TypeScript, Chakra UI starter template';

const Home: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={title} />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Flex
        as='main'
        mt='64px'
        mx='auto'
        w='85%'
        alignItems='center'
        flexDirection='column'
        gap='24px'
      >
        <Box as='section' textAlign='center'>
          <Heading fontSize='4xl'>📎 NexCha</Heading>
          <Text mt='4px'>
            My personal Next.js, TypeScript, Chakra UI starter template.
          </Text>
        </Box>

        <Box as='section'>
          <Heading fontSize='2xl'>✅ Packed with:</Heading>
          <UnorderedList mt='12px'>
            <ListItem>TypeScript</ListItem>
            <ListItem>Chakra UI</ListItem>
            <ListItem>Path aliases @/</ListItem>
            <ListItem>ESLint + Prettier (of course)</ListItem>
            <ListItem>Husky + Lint staged</ListItem>
          </UnorderedList>
        </Box>

        <Button colorScheme='pink' onClick={toggleColorMode}>
          Switch theme to {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>

        <Link href='https://github.com/up2dul/nexcha-starter' isExternal>
          Open GitHub repository
        </Link>
      </Flex>
    </>
  );
};

export default Home;
