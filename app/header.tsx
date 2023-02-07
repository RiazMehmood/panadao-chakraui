
import {
  Box,
  Flex,
  Text,
  Image,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box  p={'10px'} bg={useColorModeValue("red.400", "red.900")} px={4}>
        <Flex h={24} alignItems='center' justifyContent={"space-between"}>
          <Image
            src="logo.png"
            alt="Panaverse Dao"
            w={["80px", "80px", "176px"]}
            objectFit="cover"
            backgroundPosition="center"
            backgroundSize="cover"
            mt="5px"
            ml="-15px"
          />
          <Stack>
            <Box >
              <Text color="white" m='10px' fontSize={['20px','15px','40px']}>
                Certified Web 3.0 and Metaverse Developer
              </Text>
              <Text display={['none','flex','none','flex']} ml='10px' fontSize={["0.6rem", "0.rem", "1.2rem"]} lineHeight="10px" pb={'2px'}>
                Getting Ready for the Next Generation of the Internet
              </Text>
            </Box>
          </Stack>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
