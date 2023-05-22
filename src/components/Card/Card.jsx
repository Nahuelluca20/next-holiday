import {Flex, Stack, Text, HStack, useMediaQuery, Image} from "@chakra-ui/react";

import Arrow from "./icon-arrow.svg";

const Card = ({dayDiff, nextHolidayName}) => {
  const [isSmallerThan400] = useMediaQuery("(max-width: 400px)");

  return (
    <Stack
      bg={"brand.neutralWhite"}
      borderRadius={"20px 20px 60px 20px"}
      boxShadow={"2xl"}
      maxWidth={"800px"}
      minW={{lg: "800px"}}
      mt={"50px"}
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
            p={"10px"}
            width={"60px"}
          >
            <Image src={Arrow} />
          </Stack>
        </Stack>
        <Stack
          bgColor={"brand.neutralSmokeyGrey"}
          display={["block", "none"]}
          height={"1px"}
          width={"100%"}
        />
      </Flex>
      <HStack alignItems={"start"}>
        <Text
          color={"brand.primaryPurple"}
          fontSize={isSmallerThan400 ? "30px" : "45px"}
          fontWeight="extraBold"
        >
          {dayDiff}
        </Text>
        <Text
          color={"brand.neutralOffBlack"}
          fontSize={isSmallerThan400 ? "30px" : "45px"}
          fontWeight="extraBold"
        >
          Días Faltan
        </Text>
      </HStack>
      <Stack pb={"40px"} pt={"20px"} width="100%">
        <Text
          color={"brand.primaryPurple"}
          fontSize={isSmallerThan400 ? "30px" : "45px"}
          fontWeight="extraBold"
        >
          Feriado:
        </Text>
        <Text
          color={"brand.neutralOffBlack"}
          fontSize={isSmallerThan400 ? "20px" : "25px"}
          fontWeight="extraBold"
          pr={"60px"}
          textAlign={"justify"}
        >
          {nextHolidayName}
        </Text>
      </Stack>
    </Stack>
  );
};

export default Card;
