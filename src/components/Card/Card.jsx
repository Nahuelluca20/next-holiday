import {Flex, Stack, Text, HStack} from "@chakra-ui/react";

const Card = () => {
  return (
    <Stack
      bg={"brand.neutralWhite"}
      borderRadius={"20px 20px 60px 20px"}
      boxShadow={"2xl"}
      maxWidth={"800px"}
      mx={"20px"}
      p={"20px"}
    >
      <Flex alignItems={"center"} justifyContent="center">
        <Stack bgColor={"brand.neutralSmokeyGrey"} height={"1px"} width={"100%"} />
        <Stack>
          <Stack
            bgColor={"brand.primaryPurple"}
            borderRadius={"9999"}
            height={"60px"}
            width={"60px"}
          />
        </Stack>
        <Stack bgColor={"brand.neutralSmokeyGrey"} height={"1px"} width={"100%"} />
      </Flex>
      <HStack alignItems={"start"}>
        <Text color={"brand.primaryPurple"} fontSize={"45px"} fontWeight="extraBold">
          4
        </Text>
        <Text color={"brand.neutralOffBlack"} fontSize={"45px"} fontWeight="extraBold">
          Días Faltan
        </Text>
      </HStack>
      <Stack width="100%">
        <Text color={"brand.primaryPurple"} fontSize={"45px"} fontWeight="extraBold">
          Feriado:
        </Text>
        <Text
          color={"brand.neutralOffBlack"}
          fontSize={"25px"}
          fontWeight="extraBold"
          pr={"60px"}
          textAlign={"justify"}
        >
          Días Falt para el proximo feriado
        </Text>
      </Stack>
    </Stack>
  );
};

export default Card;
