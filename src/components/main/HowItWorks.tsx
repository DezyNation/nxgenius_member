import {
  chakra,
  Container,
  Stack,
  HStack,
  VStack,
  Flex,
  Text,
  Image,
  Box,
} from "@chakra-ui/react";
const overviewList = [
  {
    id: 1,
    label: "Requirement Analysis",
    subLabel:
      "Define role requirements, competency frameworks, and hiring objectives aligned with business goals.",
  },
  {
    id: 2,
    label: "Talent Sourcing & Screening",
    subLabel:
      "Leverage multi-channel sourcing, passive candidate outreach, and structured evaluation pipelines to identify high-quality talent.",
  },
  {
    id: 3,
    label: "Candidate Delivery & Onboarding",
    subLabel:
      "Deliver pre-vetted candidates with detailed assessment reports and assist in seamless onboarding processes.",
  },
];

const OverviewSection = () => {
  return (
    <Container maxW="6xl" py={10}>
      <chakra.h2 fontSize="4xl" fontWeight="bold" textAlign="center" mb={2}>
        Our Talent Acquisition Process
      </chakra.h2>
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={{ base: 0, md: 3 }}
        justifyContent="center"
        alignItems="center"
      >
        <VStack
          spacing={4}
          alignItems="flex-start"
          mb={{ base: 5, md: 0 }}
          maxW="md"
        >
          {overviewList.map((data) => (
            <Box key={data.id}>
              <HStack spacing={2}>
                <Flex
                  fontWeight="bold"
                  boxShadow="md"
                  color="white"
                  bg="blue.400"
                  rounded="full"
                  justifyContent="center"
                  alignItems="center"
                  w={10}
                  h={10}
                >
                  {data.id}
                </Flex>
                <Text fontSize="xl">{data.label}</Text>
              </HStack>
              <Text fontSize="md" color="gray.500" ml={12}>
                {data.subLabel}
              </Text>
            </Box>
          ))}
        </VStack>
        <Image
          boxSize={{ base: "auto", md: "lg" }}
          objectFit="contain"
          src="/assets/images/layouts/project_screen.png"
          rounded="lg"
        />
      </Stack>
    </Container>
  );
};

export default OverviewSection;
