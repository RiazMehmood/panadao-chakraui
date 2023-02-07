'use client'

import { Box, Flex, Text } from "@chakra-ui/react";
import CoreSubjects from "./coreSubjects";
import Nav from "./header";
import SpecializedTrack from "./specializedTrack";

export default function Home() {
  return (
    
      <Box bg="red.300" justifyContent='space-evenly' color="black" maxW='100%' maxH='100%' alignItems="center" pb='6'>
        <Nav/>
        <CoreSubjects/>
        <Flex align='center' justify="center">
        <Text fontSize="1.5rem" mt='5px' mb="5px">Specialized Tracks</Text>
        </Flex>
        <SpecializedTrack/>
      </Box>

  )
}
