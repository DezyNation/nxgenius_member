"use client";
import React, { useEffect } from "react";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import { Box, Heading, Text, Container } from "@chakra-ui/react";

const page = () => {
  // useEffect(() => {
  //   window.location.href = "/auth/xckvnalo"
  // }, [])

  return (
    <>
      <Navbar />
      <Container maxW="container.lg" py={{ base: 6, md: 10 }}>
        <Box>
          <Heading
            as="h1"
            size={{ base: "xl", md: "2xl" }}
            mb={{ base: 3, md: 5 }}
            textAlign={{ base: "center", md: "center" }}
          >
            Privacy Policy
          </Heading>
          <Text
            mb={{ base: 3, md: 4 }}
            textColor={"gray"}
            fontSize={{ base: "md", md: "md" }}
            textAlign="justify"
          >
            {process.env.NEXT_PUBLIC_BRAND_NAME} Technology Pvt. Ltd. built the {process.env.NEXT_PUBLIC_BRAND_NAME} platform as a Commercial
            salary processing and payment system for labors and contractors. This SERVICE is provided by {process.env.NEXT_PUBLIC_BRAND_NAME} Technology Pvt. Ltd. and
            is intended for use by registered companies to process payments for their workforce. This page is used to inform
            companies, labors, and contractors regarding our policies with the collection, use, and
            disclosure of Personal Information if anyone decided to use our
            Service. If you choose to use our Service, then you agree to the
            collection and use of information in relation to this policy. The
            Personal Information that we collect is used for providing and
            improving the Service, processing salary payments, maintaining compliance records, and facilitating seamless payment transactions. We will not use or share your information
            with anyone except as described in this Privacy Policy or as required by law. The terms
            used in this Privacy Policy have the same meanings as in our Terms
            and Conditions, which is accessible at {process.env.NEXT_PUBLIC_BRAND_NAME} unless otherwise
            defined in this Privacy Policy. We may change this Privacy Policy at
            any time by posting the revised Privacy Policy in the "Privacy
            Policy" section of the website. The revised Privacy Policy is
            effective immediately when posted on the website. It is the
            responsibility of each user to review the website and the Privacy
            Policy periodically to know about any revisions to this Policy. Your
            continued use of the platform will be considered as your
            acknowledgment and acceptance of the terms of the revised Privacy
            Policy.
          </Text>

          <Heading
            as="h2"
            size={{ base: "md", md: "lg" }}
            mt={{ base: 6, md: 10 }}
            mb={{ base: 2, md: 4 }}
          >
            Privacy Policy Changes
          </Heading>
          <Text
            mb={{ base: 3, md: 4 }}
            fontSize={{ base: "md", md: "lg" }}
            textAlign="justify"
          >
            We may change this Privacy Policy at any time by posting the revised
            Privacy Policy in the "Privacy Policy" section of the website. The
            revised Privacy Policy is effective immediately when posted on the
            website. It is the responsibility of each user to review the website
            and the Privacy Policy periodically to know about any revisions to
            this Policy. Your continued use of the website will be considered as
            your acknowledgment and acceptance of the terms of the revised
            Privacy Policy.
          </Text>

          <Heading
            as="h2"
            size={{ base: "md", md: "lg" }}
            mt={{ base: 6, md: 10 }}
            mb={{ base: 2, md: 4 }}
          >
            Data Controller
          </Heading>
          <Text
            mb={{ base: 3, md: 4 }}
            fontSize={{ base: "md", md: "lg" }}
            textAlign="justify"
          >
            The data controller in respect of our platform is {process.env.NEXT_PUBLIC_BRAND_NAME}, registered
            in India. Our platform collects and processes personal information of companies, labors, and contractors
            including but not limited to names, contact details, bank account information, identification documents,
            employment details, and salary information. All data is stored securely and used solely for the purpose
            of salary processing and payment facilitation. If you have any questions about this Privacy Policy you
            can contact the data controller by writing to {process.env.NEXT_PUBLIC_BRAND_NAME}, Guwahati,
            Hatigaon Puberun Path House No-2, Pincode - 781038, India or sending
            an email to info@1touch.online
          </Text>

          <Heading
            as="h2"
            size={{ base: "md", md: "lg" }}
            mt={{ base: 6, md: 10 }}
            mb={{ base: 2, md: 4 }}
          >
            Web Server Log Information
          </Heading>
          <Text
            mb={{ base: 3, md: 4 }}
            fontSize={{ base: "md", md: "lg" }}
            textAlign="justify"
          >
            We use secure third-party servers to host our platform. Our servers
            automatically log the IP address you use to access our platform as
            well as other information about your visit such as the pages
            accessed, transactions processed, the date and time of access,
            the source of your access to our platform (e.g. the website or URL
            (link) which referred you to our platform), and your browser version
            and operating system. This information is used to monitor platform performance,
            ensure security, and improve user experience.
          </Text>

          <Heading
            as="h2"
            size={{ base: "md", md: "lg" }}
            mt={{ base: 6, md: 10 }}
            mb={{ base: 2, md: 4 }}
          >
            Payments
          </Heading>
          <Text
            mb={{ base: 3, md: 4 }}
            fontSize={{ base: "md", md: "lg" }}
            textAlign="justify"
          >
            For salary disbursements and payment processing, bank account details, UPI information,
            and other payment credentials provided by labors and contractors will be securely transmitted
            to authorized payment gateways and financial institutions. Companies registering on our platform
            must provide valid business registration details and authorized signatory information. All financial
            transactions are encrypted and processed through secure, PCI-DSS compliant payment channels. We do not
            store complete bank account or card details on our servers.
          </Text>

          <Heading
            as="h2"
            size={{ base: "md", md: "lg" }}
            mt={{ base: 6, md: 10 }}
            mb={{ base: 2, md: 4 }}
          >
            Use of website server log information for IT security purposes
          </Heading>
          <Text
            mb={{ base: 3, md: 4 }}
            fontSize={{ base: "md", md: "lg" }}
            textAlign="justify"
          >
            Our third party hosting provider stores server logs to ensure
            network and IT security and so that the server and platform remain
            uncompromised. This includes analysing log files to help identify
            and prevent unauthorised access to our network, fraudulent transactions,
            the distribution of malicious code, denial of services attacks and other cyber attacks,
            by detecting unusual or suspicious activity. Given the sensitive nature of salary and
            financial data, we employ enterprise-grade security measures including encryption,
            regular security audits, and continuous monitoring to protect all user information.
          </Text>

          <Heading
            as="h2"
            size={{ base: "md", md: "lg" }}
            mt={{ base: 6, md: 10 }}
            mb={{ base: 2, md: 4 }}
          >
            Legal Requirements:
          </Heading>
          <Text
            mb={{ base: 3, md: 4 }}
            fontSize={{ base: "md", md: "lg" }}
            textAlign="justify"
          >
            We reserve the right to disclose your personal information as
            necessary to: (1) comply with the law or comply with legal process
            served on {process.env.NEXT_PUBLIC_BRAND_NAME}; (2) protect and defend the rights or property of
            {process.env.NEXT_PUBLIC_BRAND_NAME} and our users; (3) to ensure compliance with our Terms & Conditions and prevent
            fraudulent transactions or salary processing irregularities; (4) comply with labor laws,
            tax regulations, and financial reporting requirements; (5) facilitate salary payments through
            authorized financial institutions and payment partners. {process.env.NEXT_PUBLIC_BRAND_NAME}
            co-operates with law enforcement, tax authorities, labor departments, and other regulatory bodies to enforce
            laws, ensure compliance with labor regulations, and maintain the integrity of our platform. We reserve the
            right to report any information related to suspicion of illegal
            activity, fraud, or violation of labor laws to appropriate authorities for investigation and prosecution.
          </Text>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default page;
