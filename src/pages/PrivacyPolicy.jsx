import { Box, Heading, Text } from "@chakra-ui/react";

const PrivacyPolicy = () => (
  <Box p={4}>
    <Heading as="h1" mb={4}>Privacy Policy</Heading>
    <Text mb={4}>
      This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
    </Text>
    <Heading as="h2" size="md" mb={2}>Information We Collect</Heading>
    <Text mb={4}>
      We may collect information about you in a variety of ways. The information we may collect on the Site includes:
    </Text>
    <Heading as="h3" size="sm" mb={2}>Location Data</Heading>
    <Text mb={4}>
      We may collect information about your device's location using IPinfo and GeoIP2.
    </Text>
    <Heading as="h3" size="sm" mb={2}>Browsing Data</Heading>
    <Text mb={4}>
      We use Google Analytics and Hotjar to track your browsing behavior on our site.
    </Text>
    <Heading as="h3" size="sm" mb={2}>Device Information</Heading>
    <Text mb={4}>
      We use DeviceAtlas and WURFL to collect information about the device you are using to access our site.
    </Text>
    <Heading as="h2" size="md" mb={2}>Use of Your Information</Heading>
    <Text mb={4}>
      Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience.
    </Text>
    <Heading as="h2" size="md" mb={2}>Contact Us</Heading>
    <Text mb={4}>
      If you have questions or comments about this Privacy Policy, please contact us at: [Your Contact Information]
    </Text>
  </Box>
);

export default PrivacyPolicy;