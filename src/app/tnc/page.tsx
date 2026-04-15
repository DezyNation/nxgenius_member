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
            Terms and Conditions
          </Heading>
          <Text
            mb={{ base: 3, md: 4 }}
            textColor={"gray"}
            fontSize={{ base: "md", md: "md" }}
            textAlign="justify"
          >
            {process.env.NEXT_PUBLIC_BRAND_NAME} Pvt. Ltd. (hereinafter referred to as "{process.env.NEXT_PUBLIC_BRAND_NAME}")
            operates a technology-driven platform providing HR sourcing, workforce management, and payroll processing services.

            The platform enables businesses to source talent, manage workforce data, and process salary and contractor payments
            through integrated systems. By accessing or using the platform, you agree to be bound by these Terms.

            {process.env.NEXT_PUBLIC_BRAND_NAME} acts as a facilitator of payroll processing and payment execution and does not
            act as an employer, contractor, or beneficiary in any employment relationship between companies and their workforce.

            The company is incorporated under the Companies Act, 2013, with its registered office at D-29, Sector 3,
            Noida, Gautam Buddha Nagar, Uttar Pradesh – 201301, India.
          </Text>

          <Heading
            as="h2"
            size={{ base: "md", md: "lg" }}
            mt={{ base: 6, md: 10 }}
            mb={{ base: 2, md: 4 }}
          >
            DEFINITIONS AND INTERPRETATION
          </Heading>
          <Text
            mb={{ base: 3, md: 4 }}
            fontSize={{ base: "md", md: "lg" }}
            textAlign="justify"
          >
            In these Terms of Use, unless the contrary intention appears and/or the context
            otherwise requires, the following terms shall have the meanings assigned to them:
            "Platform" means the web application and mobile application operated by {process.env.NEXT_PUBLIC_BRAND_NAME}
            for salary processing and payment facilitation; "Company" or "Registered Company" means
            any business entity, organization, or employer that registers on the Platform to process
            salaries and payments for their workforce; "Labor" means any worker, employee, or daily
            wage earner whose salary is processed through the Platform; "Contractor" means any
            independent contractor, freelancer, or service provider whose payments are processed
            through the Platform; "Services" means all salary processing, payment facilitation,
            record maintenance, compliance management, and related services provided through the
            Platform; "User" means any Company, Labor, or Contractor using the Platform; "Payment
            Information" includes bank account details, UPI IDs, payment preferences, and any other
            financial information provided for salary disbursement; "Applicable Law" includes all
            applicable Indian statutes, enactments, acts, laws, ordinances, rules, regulations,
            notifications, guidelines, and orders including but not limited to the Payment and
            Settlement Systems Act 2007, Income Tax Act 1961, Labor Laws, EPF & MP Act 1952, ESI
            Act 1948, Payment of Wages Act 1936, and any other relevant legislation; "INR" or "Rs"
            means Indian Rupees, the lawful currency of the Republic of India.
          </Text>

          <Heading
            as="h2"
            size={{ base: "md", md: "lg" }}
            mt={{ base: 6, md: 10 }}
            mb={{ base: 2, md: 4 }}
          >
            REGISTRATION AND ACCOUNT CREATION
          </Heading>
          <Text
            mb={{ base: 3, md: 4 }}
            fontSize={{ base: "md", md: "lg" }}
            textAlign="justify"
          >
            2.1. Companies must register on the Platform by providing accurate business information
            including business name, registration number, GST details (if applicable), registered
            address, authorized signatory details, and valid contact information. Companies are
            responsible for maintaining the confidentiality of their account credentials and for all
            activities under their account. 2.2. Labors and Contractors may be registered on the
            Platform either by themselves or by the Company they are associated with. Registration
            requires providing accurate personal information including full name, contact details,
            identification documents (Aadhaar, PAN, etc.), bank account details or UPI ID, and
            employment/contract details. 2.3. All Users must be at least 18 years of age to use the
            Platform. By registering, you represent and warrant that all information provided is
            accurate, current, and complete. 2.4. {process.env.NEXT_PUBLIC_BRAND_NAME} reserves the right to verify
            all information provided and may request additional documentation for KYC (Know Your
            Customer) compliance. We may suspend or terminate accounts that provide false, incomplete,
            or misleading information.
          </Text>

          <Heading
            as="h2"
            size={{ base: "md", md: "lg" }}
            mt={{ base: 6, md: 10 }}
            mb={{ base: 2, md: 4 }}
          >
            SERVICES PROVIDED
          </Heading>
          <Text
            mb={{ base: 3, md: 4 }}
            fontSize={{ base: "md", md: "lg" }}
            textAlign="justify"
          >
            3.1. {process.env.NEXT_PUBLIC_BRAND_NAME} provides integrated services including:
            (a) Talent sourcing and recruitment support;
            (b) Workforce data management;
            (c) Payroll processing and salary disbursement;
            (d) Contractor payment facilitation;
            (e) Reporting and compliance support.

            3.2. The platform enables companies to:
            (a) Manage employee and contractor records;
            (b) Initiate and process salary payments;
            (c) Track transaction history and generate reports.

            3.3. {process.env.NEXT_PUBLIC_BRAND_NAME} acts solely as a technology and payment facilitation platform and
            does not assume responsibility for employment terms, compensation agreements, or disputes.
          </Text>

          <Heading
            as="h2"
            size={{ base: "md", md: "lg" }}
            mt={{ base: 6, md: 10 }}
            mb={{ base: 2, md: 4 }}
          >
            PAYMENT PROCESSING AND TRANSACTIONS
          </Heading>
          <Text
            mb={{ base: 3, md: 4 }}
            fontSize={{ base: "md", md: "lg" }}
            textAlign="justify"
          >
            4.1. The platform facilitates salary and contractor payments on behalf of registered companies.

            4.2. Companies are solely responsible for:
            (a) Accuracy of beneficiary details;
            (b) Availability of sufficient funds;
            (c) Compliance with applicable labor and tax laws.

            4.3. {process.env.NEXT_PUBLIC_BRAND_NAME} processes transactions through authorized banking and payment partners
            and does not hold funds as a banking entity.

            4.4. Once a payment is successfully initiated and processed, it is considered final and irrevocable.

            4.5. {process.env.NEXT_PUBLIC_BRAND_NAME} shall not be liable for:
            (a) Incorrect transfers due to wrong details;
            (b) Delays caused by banking systems;
            (c) Disputes between companies and employees/contractors.
          </Text>

          <Heading
            as="h2"
            size={{ base: "md", md: "lg" }}
            mt={{ base: 6, md: 10 }}
            mb={{ base: 2, md: 4 }}
          >
            COMPANY OBLIGATIONS AND RESPONSIBILITIES
          </Heading>
          <Text
            mb={{ base: 3, md: 4 }}
            fontSize={{ base: "md", md: "lg" }}
            textAlign="justify"
          >
            5.1. Companies using the Platform agree to: (a) Comply with all applicable labor laws,
            tax regulations, and statutory requirements; (b) Pay accurate salaries as per employment
            contracts or agreements with Labors and Contractors; (c) Provide accurate information
            about all Labors and Contractors registered under their account; (d) Maintain proper
            employment records and documentation; (e) Deduct and remit applicable taxes (TDS,
            professional tax, etc.) as required by law; (f) Ensure timely payment of salaries;
            (g) Not use the Platform for any illegal, fraudulent, or unauthorized purposes. 5.2.
            Companies are solely responsible for their relationship with Labors and Contractors,
            including employment terms, work conditions, and dispute resolution. {process.env.NEXT_PUBLIC_BRAND_NAME} is
            merely a payment facilitation platform and is not a party to any employment or contractor
            agreements. 5.3. Companies must notify {process.env.NEXT_PUBLIC_BRAND_NAME} immediately of any unauthorized
            access to their account or any security breach. 5.4. Companies are responsible for
            maintaining the confidentiality of their account login credentials and shall be liable
            for all activities conducted through their account.
          </Text>

          <Heading
            as="h2"
            size={{ base: "md", md: "lg" }}
            mt={{ base: 6, md: 10 }}
            mb={{ base: 2, md: 4 }}
          >
            LABOR AND CONTRACTOR RESPONSIBILITIES
          </Heading>
          <Text
            mb={{ base: 3, md: 4 }}
            fontSize={{ base: "md", md: "lg" }}
            textAlign="justify"
          >
            6.1. Labors and Contractors agree to: (a) Provide accurate personal and payment
            information; (b) Keep their payment details updated; (c) Notify {process.env.NEXT_PUBLIC_BRAND_NAME} of any
            discrepancies in salary payments; (d) Maintain the security of their account credentials;
            (e) Not share their account access with unauthorized persons. 6.2. Labors and Contractors
            acknowledge that {process.env.NEXT_PUBLIC_BRAND_NAME} is only a payment facilitation platform and any disputes
            regarding salary amounts, employment terms, or work conditions must be resolved directly
            with the Company. 6.3. It is the responsibility of Labors and Contractors to ensure
            their bank account or UPI details are correct and active. {process.env.NEXT_PUBLIC_BRAND_NAME} is not liable
            for failed transactions due to incorrect or inactive payment details.
          </Text>

          <Heading
            as="h2"
            size={{ base: "md", md: "lg" }}
            mt={{ base: 6, md: 10 }}
            mb={{ base: 2, md: 4 }}
          >
            DATA PROTECTION AND PRIVACY
          </Heading>
          <Text
            mb={{ base: 3, md: 4 }}
            fontSize={{ base: "md", md: "lg" }}
            textAlign="justify"
          >
            7.1. {process.env.NEXT_PUBLIC_BRAND_NAME} collects, stores, and processes personal information including names,
            contact details, identification documents, bank account information, employment details,
            and salary information. This data is used solely for providing the Services and complying
            with legal requirements. 7.2. All data is stored on secure servers with appropriate
            encryption and security measures. We implement industry-standard security protocols to
            protect sensitive financial and personal information. 7.3. {process.env.NEXT_PUBLIC_BRAND_NAME} will not share
            user data with third parties except: (a) With payment gateways and financial institutions
            necessary for processing transactions; (b) When required by law or regulatory authorities;
            (c) To prevent fraud or investigate illegal activities; (d) With user consent. 7.4.
            Users can access, update, or request deletion of their personal data subject to legal
            and regulatory retention requirements. For more details, please refer to our Privacy Policy.
          </Text>

          <Heading
            as="h2"
            size={{ base: "md", md: "lg" }}
            mt={{ base: 6, md: 10 }}
            mb={{ base: 2, md: 4 }}
          >
            FEES AND CHARGES
          </Heading>
          <Text
            mb={{ base: 3, md: 4 }}
            fontSize={{ base: "md", md: "lg" }}
            textAlign="justify"
          >
            8.1. {process.env.NEXT_PUBLIC_BRAND_NAME} may charge fees for using the Platform and processing transactions.
            All applicable fees will be clearly communicated to Companies before they are charged.
            8.2. Fee structure may include: (a) Platform subscription fees; (b) Transaction processing
            fees; (c) Service charges for specific features. 8.3. All fees are non-refundable unless
            otherwise specified. {process.env.NEXT_PUBLIC_BRAND_NAME} reserves the right to modify the fee structure with
            prior notice. 8.4. Applicable taxes (GST, etc.) will be charged over and above the fees
            as per prevailing law.
          </Text>

          <Heading
            as="h2"
            size={{ base: "md", md: "lg" }}
            mt={{ base: 6, md: 10 }}
            mb={{ base: 2, md: 4 }}
          >
            COMPLIANCE AND LEGAL REQUIREMENTS
          </Heading>
          <Text
            mb={{ base: 3, md: 4 }}
            fontSize={{ base: "md", md: "lg" }}
            textAlign="justify"
          >
            9.1. Companies using the Platform must comply with all applicable laws including labor
            laws, minimum wage laws, payment of wages regulations, provident fund regulations, ESI
            regulations, tax laws, and any other relevant legislation. 9.2. Companies are responsible
            for maintaining statutory registers, making required statutory payments (PF, ESI, etc.),
            filing returns, and complying with all legal requirements related to their workforce.
            9.3. {process.env.NEXT_PUBLIC_BRAND_NAME} may report transactions to tax authorities and regulatory bodies as
            required by law. Companies must ensure all transactions are properly documented and
            reported. 9.4. The Platform may be used only for legitimate salary payments and not for
            money laundering, tax evasion, or any other illegal activities. Any suspicious activity
            will be reported to appropriate authorities.
          </Text>

          <Heading
            as="h2"
            size={{ base: "md", md: "lg" }}
            mt={{ base: 6, md: 10 }}
            mb={{ base: 2, md: 4 }}
          >
            PROHIBITED ACTIVITIES
          </Heading>
          <Text
            mb={{ base: 3, md: 4 }}
            fontSize={{ base: "md", md: "lg" }}
            textAlign="justify"
          >
            10.1. Users are strictly prohibited from: (a) Using the Platform for any illegal or
            unauthorized purpose; (b) Processing fraudulent or fictitious payments; (c) Providing
            false or misleading information; (d) Attempting to gain unauthorized access to the
            Platform or other users' accounts; (e) Interfering with or disrupting the Platform's
            operation; (f) Using the Platform to violate any laws or regulations; (g) Creating
            multiple accounts for fraudulent purposes; (h) Reverse engineering, decompiling, or
            attempting to extract source code from the Platform; (i) Using automated systems or bots
            to access the Platform. 10.2. Violation of these prohibitions may result in immediate
            account suspension or termination, and {process.env.NEXT_PUBLIC_BRAND_NAME} may report such activities to law
            enforcement authorities.
          </Text>

          <Heading
            as="h2"
            size={{ base: "md", md: "lg" }}
            mt={{ base: 6, md: 10 }}
            mb={{ base: 2, md: 4 }}
          >
            DISPUTES AND GRIEVANCES
          </Heading>
          <Text
            mb={{ base: 3, md: 4 }}
            fontSize={{ base: "md", md: "lg" }}
            textAlign="justify"
          >
            11.1. Any disputes regarding salary amounts, employment terms, or work-related matters
            must be resolved directly between the Company and the Labor/Contractor. {process.env.NEXT_PUBLIC_BRAND_NAME} is
            not responsible for mediating or resolving such disputes. 11.2. For technical issues,
            payment failures, or Platform-related grievances, users may contact our support team at
            info@1touch.online. We will make reasonable efforts to resolve genuine grievances within
            15 working days. 11.3. Users can escalate unresolved grievances to our grievance redressal
            officer whose contact details are available on the Platform.
          </Text>

          <Heading
            as="h2"
            size={{ base: "md", md: "lg" }}
            mt={{ base: 6, md: 10 }}
            mb={{ base: 2, md: 4 }}
          >
            LIMITATION OF LIABILITY
          </Heading>
          <Text
            mb={{ base: 3, md: 4 }}
            fontSize={{ base: "md", md: "lg" }}
            textAlign="justify"
          >
            12.1. {process.env.NEXT_PUBLIC_BRAND_NAME} provides the Platform on an "as is" and "as available" basis. We do
            not warrant that the Platform will be uninterrupted, error-free, or completely secure.
            12.2. {process.env.NEXT_PUBLIC_BRAND_NAME} shall not be liable for: (a) Any indirect, incidental, special, or
            consequential damages; (b) Loss of profits, revenue, or data; (c) Delays or failures in
            payment processing due to technical issues, bank delays, or force majeure events; (d)
            Disputes between Companies and their Labors/Contractors; (e) Incorrect payments made due
            to wrong information provided by users; (f) Unauthorized access to user accounts due to
            user negligence in maintaining account security. 12.3. Our maximum liability for any
            claims arising out of the use of the Platform shall be limited to the fees paid by the
            user to {process.env.NEXT_PUBLIC_BRAND_NAME} in the preceding three months.
          </Text>

          <Heading
            as="h2"
            size={{ base: "md", md: "lg" }}
            mt={{ base: 6, md: 10 }}
            mb={{ base: 2, md: 4 }}
          >
            INDEMNIFICATION
          </Heading>
          <Text
            mb={{ base: 3, md: 4 }}
            fontSize={{ base: "md", md: "lg" }}
            textAlign="justify"
          >
            13.1. Users agree to indemnify, defend, and hold harmless {process.env.NEXT_PUBLIC_BRAND_NAME}, its directors,
            officers, employees, and agents from any claims, losses, damages, liabilities, costs, and
            expenses (including legal fees) arising from: (a) Violation of these Terms and Conditions;
            (b) Violation of any applicable laws or regulations; (c) Infringement of any third-party
            rights; (d) Unauthorized or improper use of the Platform; (e) Any disputes between
            Companies and their Labors/Contractors.
          </Text>

          <Heading
            as="h2"
            size={{ base: "md", md: "lg" }}
            mt={{ base: 6, md: 10 }}
            mb={{ base: 2, md: 4 }}
          >
            ACCOUNT SUSPENSION AND TERMINATION
          </Heading>
          <Text
            mb={{ base: 3, md: 4 }}
            fontSize={{ base: "md", md: "lg" }}
            textAlign="justify"
          >
            14.1. {process.env.NEXT_PUBLIC_BRAND_NAME} reserves the right to suspend or terminate any user account at any
            time without prior notice if: (a) The user violates these Terms and Conditions; (b) The
            account is used for fraudulent or illegal activities; (c) False or misleading information
            is provided; (d) The user engages in activities that harm the Platform or other users;
            (e) Required by law or regulatory authorities. 14.2. Users may also terminate their
            account by providing written notice to {process.env.NEXT_PUBLIC_BRAND_NAME}. Upon termination, users remain
            liable for all outstanding obligations and fees. 14.3. Upon account termination, access
            to the Platform will be revoked, but transaction history and records may be retained as
            required by law or for audit purposes.
          </Text>

          <Heading
            as="h2"
            size={{ base: "md", md: "lg" }}
            mt={{ base: 6, md: 10 }}
            mb={{ base: 2, md: 4 }}
          >
            INTELLECTUAL PROPERTY RIGHTS
          </Heading>
          <Text
            mb={{ base: 3, md: 4 }}
            fontSize={{ base: "md", md: "lg" }}
            textAlign="justify"
          >
            15.1. All intellectual property rights in the Platform including software, design,
            content, trademarks, logos, and related materials are owned by {process.env.NEXT_PUBLIC_BRAND_NAME} or its
            licensors. Users are granted a limited, non-exclusive, non-transferable license to use
            the Platform solely for its intended purpose. 15.2. Users may not copy, modify,
            distribute, sell, or lease any part of the Platform or its content without prior written
            permission from {process.env.NEXT_PUBLIC_BRAND_NAME}. 15.3. Any feedback, suggestions, or ideas provided by
            users regarding the Platform may be used by {process.env.NEXT_PUBLIC_BRAND_NAME} without any obligation or
            compensation.
          </Text>

          <Heading
            as="h2"
            size={{ base: "md", md: "lg" }}
            mt={{ base: 6, md: 10 }}
            mb={{ base: 2, md: 4 }}
          >
            MODIFICATIONS TO TERMS
          </Heading>
          <Text
            mb={{ base: 3, md: 4 }}
            fontSize={{ base: "md", md: "lg" }}
            textAlign="justify"
          >
            16.1. {process.env.NEXT_PUBLIC_BRAND_NAME} reserves the right to modify these Terms and Conditions at any time.
            Updated Terms will be posted on the Platform with the effective date. 16.2. Continued
            use of the Platform after modifications constitutes acceptance of the updated Terms.
            Users who do not agree with the modifications should discontinue using the Platform.
            16.3. For material changes, we will make reasonable efforts to notify users through
            email or Platform notifications.
          </Text>

          <Heading
            as="h2"
            size={{ base: "md", md: "lg" }}
            mt={{ base: 6, md: 10 }}
            mb={{ base: 2, md: 4 }}
          >
            GOVERNING LAW AND JURISDICTION
          </Heading>
          <Text
            mb={{ base: 3, md: 4 }}
            fontSize={{ base: "md", md: "lg" }}
            textAlign="justify"
          >
            17.1. These Terms and Conditions shall be governed by and construed in accordance with
            the laws of India. 17.2. Any disputes arising out of or relating to these Terms or the
            use of the Platform shall be subject to the exclusive jurisdiction of the courts in
            Uttar Pradesh, India. 17.3. Users agree to submit to the personal jurisdiction of
            such courts and waive any objections to jurisdiction or venue.
          </Text>

          <Heading
            as="h2"
            size={{ base: "md", md: "lg" }}
            mt={{ base: 6, md: 10 }}
            mb={{ base: 2, md: 4 }}
          >
            MISCELLANEOUS
          </Heading>
          <Text
            mb={{ base: 3, md: 4 }}
            fontSize={{ base: "md", md: "lg" }}
            textAlign="justify"
          >
            18.1. If any provision of these Terms is found to be invalid or unenforceable, the
            remaining provisions shall continue in full force and effect. 18.2. Failure by {process.env.NEXT_PUBLIC_BRAND_NAME}
            to enforce any right or provision of these Terms shall not constitute a waiver of such
            right or provision. 18.3. These Terms constitute the entire agreement between {process.env.NEXT_PUBLIC_BRAND_NAME}
            and users regarding the Platform and supersede all prior agreements and understandings.
            18.4. Users may not assign or transfer their rights or obligations under these Terms
            without prior written consent from {process.env.NEXT_PUBLIC_BRAND_NAME}. 18.5. All notices and communications
            shall be sent to the contact details provided during registration or to the addresses
            specified on the Platform.
          </Text>

          <Heading
            as="h2"
            size={{ base: "md", md: "lg" }}
            mt={{ base: 6, md: 10 }}
            mb={{ base: 2, md: 4 }}
          >
            CONTACT INFORMATION
          </Heading>
          <Text
            mb={{ base: 3, md: 4 }}
            fontSize={{ base: "md", md: "lg" }}
            textAlign="justify"
          >
            For any questions, concerns, or grievances regarding these Terms and Conditions or the
            Platform, please contact us at: {process.env.NEXT_PUBLIC_BRAND_NAME} Pvt. Ltd., D-29, Sector 3, Noida, Gautam Buddha Nagar 201301, India. Email: info@1touch.online.
            By using the Platform, you acknowledge that you have read, understood, and agree to be
            bound by these Terms and Conditions.
          </Text>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default page;
