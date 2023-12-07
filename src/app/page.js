"use client"

import { Button, ButtonGroup } from '@chakra-ui/react';
import { Container, Text } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import { useState } from 'react';
import Profile from './components/Profile';

export default function Home() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState();

  return (
    <Container maxW='container.lg'>
      <Navbar />
      <Text fontSize={"2xl"} textAlign={"center"} my={4}>
        Search users on Github
      </Text>
      <Searchbar setData={(response) => setData(response)} setLoading={setLoading}/>
      <Profile data={data} />
    </Container>
  );
}
