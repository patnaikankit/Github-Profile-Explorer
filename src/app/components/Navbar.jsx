import React from 'react'
import { Box, Flex, Spacer, Image, Button } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <Flex justifyContent={"space-between"} py={6} alignItems={"center"}>
        <Box position={"relative"} aspectRatio={5 / 3} minHeight={20}>
            <Image src={"/Github-log.png"} fill alt='github logo' sx={{ filter: "invert(1)" }} />
        </Box>
        <Box>
            <Button size='md' colorScheme='whatsapp'>
                Search History
            </Button>
        </Box>
    </Flex>
  )
}

export default Navbar