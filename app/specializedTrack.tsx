import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
  Heading,
  Button,
  Text,
} from "@chakra-ui/react";

export default function SpecializedTrack() {
  return (
    <SimpleGrid
      spacing={6}
      templateColumns="repeat(auto-fill, minmax(340px, 1fr))"
    >
      <Card>
        <CardHeader>
          <Heading size="md">
            {" "}
            Web 3.0 (Blockchain) and Metaverse Specialization
          </Heading>
        </CardHeader>
        <CardBody>
          <Text>
            Quarter III W3-351: Developing Smart Contracts and Planet-Scale Web
            3.0 Dapps 
          </Text>
          <Text>Quarter IV MV-361: Developing Planet-Scale Open Virtual
            and Augmented Metaverse Experiences</Text>
        </CardBody>
        <CardFooter>
          <Button>View here</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <Heading size="md">
            {" "}
            Artificial Intelligence (AI) and Deep Learning Specialization
          </Heading>
        </CardHeader>
        <CardBody>
          <Text>
            Quarter III AI-351: Developing Planet-Scale Intelligent APIs and
            Python Programming 
          </Text>
          <Text>Quarter IV AI-361: Deep Learning and MLOps</Text>
        </CardBody>
        <CardFooter>
          <Button>View here</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <Heading size="md">Cloud-Native Computing Specialization</Heading>
        </CardHeader>
        <CardBody>
          <Text>
            Quarter III CN-351: Certified Kubernetes Application Developer
            (CKAD) 
          </Text>
          <Text>Quarter IV CN-361: Developing Multi-Cloud APIs using CDK for
            Terraform</Text>
        </CardBody>
        <CardFooter>
          <Button>View here</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <Heading size="md">Ambient Computing and IoT Specialization</Heading>
        </CardHeader>
        <CardBody>
          <Text>
            Quarter III AC-351: Ambient Computing with Voice Assistants and
            Matter Devices 
          </Text>
          <Text>Quarter IV AC-361: Embedded Programming using C and
            Rust</Text>
        </CardBody>
        <CardFooter>
          <Button>View here</Button>
        </CardFooter>
      </Card>
    </SimpleGrid>
  );
}
