"use client"

import React from 'react'
import { Box, Flex, Spacer, Image, Button, Modal, useDisclosure} from '@chakra-ui/react'
import History from './History'

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex justifyContent={"space-between"} py={6} alignItems={"center"}>
        <Box position={"relative"} aspectRatio={5 / 3} minHeight={20}>
            <Image src={"/log.png"} fill alt='github logo' sx={{ filter: "invert(1)" }} />
        </Box>
        <Box>
            <Button size='md' colorScheme='whatsapp' onClick={onOpen}>
                Search History
            </Button>
        </Box>

        {isOpen && <History isOpen={isOpen} onClose={onClose}/>}
    </Flex>
  )
}

export default Navbar