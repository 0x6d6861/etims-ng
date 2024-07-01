import {
  Text,
  Body,
  Button,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Tailwind,
  Column,
  Link,
} from "@react-email/components";
import * as React from "react";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

function InvoiceEmail(props) {
  return (
    <Html>
      <Head />
      <Preview>Netlify Welcome</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: "#2250f4",
                offwhite: "#fafbfb",
              },
              spacing: {
                0: "0px",
                20: "20px",
                45: "45px",
              },
            },
          },
        }}
      >
        <Body className="bg-offwhite text-base font-sans">
          <Img
            src={`https://i0.wp.com/damitechsolutions.com/damitech/wp-content/uploads/2023/08/etims.png?fit=300%2C114&ssl=1`}
            width="184"
            height="75"
            alt="Netlify"
            className="mx-auto my-20"
          />
          <Container className="bg-white p-45">
            <Section>
              <Row>
                <Text className="text-base">
                  Congratulations! You're joining over 3 million developers
                  around the world who use Netlify to build and ship sites,
                  stores, and apps.
                </Text>

                <Text className="text-base">Here's how to get started:</Text>
              </Row>
            </Section>

            <Section className="text-center">
              <Button className="bg-brand text-white rounded-lg py-3 px-[18px]">
                Go to your dashboard
              </Button>
            </Section>
          </Container>

          <Container className="mt-20">
            <Section>
              <Row>
                <Column className="text-right px-20">
                  <Link>Unsubscribe</Link>
                </Column>
                <Column className="text-left">
                  <Link>Manage Preferences</Link>
                </Column>
              </Row>
            </Section>
            <Text className="text-center text-gray-400 mb-45">
              Netlify, 44 Montgomery Street, Suite 300 San Francisco, CA
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

export default InvoiceEmail;
