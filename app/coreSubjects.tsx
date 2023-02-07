"use client";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
} from "@chakra-ui/react";

import { useState } from "react";
import Link from "next/link";
export default function coreSub() {
  const [size, setSize] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = (newSize: string) => {
    setSize(newSize);
    onOpen();
  };

  return (
    <>
      <Card align="center" m="15px">
        <CardHeader>
          <Heading size="md">
            Core Courses (Common in All Specializations)
          </Heading>
        </CardHeader>
        <CardBody>
          <Text>
            Quarter I (Core) CS-101: Object-Oriented Programming using
            TypeScript
          </Text>
          <Text>
            Quarter II (Core) W2-201 Developing Planet-Scale Web 2.0 Serverless
            Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK)
            for Terraform
          </Text>
        </CardBody>
        <CardFooter>
          <Button
            colorScheme="blue"
            onClick={() => handleClick(size)}
            key={size}
            m={4}
          >
            Details
          </Button>
        </CardFooter>
      </Card>

      <Drawer onClose={onClose} isOpen={isOpen} size={size}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Box
              fontSize={["2xl", "2xl", "5xl"]}
              fontWeight="700"
              alignItems="center"
            >
              Core Courses (Common in All Specializations)
            </Box>
          </DrawerHeader>
          <DrawerBody>
            <Box>
              <Text color="green" fontSize={["1xl", "1xl", "2xl"]} pb="5px">
                Quarter I (Core) CS-101: Object-Oriented Programming using
                TypeScript Duration: 13 Weeks
              </Text>
              <Text as="p" pb="5px">
                <Text fontSize="20px">Course Description: </Text>We will start
                the program by learning the fundamentals of Object-Oriented
                programming using JavaScript and TypeScript. We will also
                understand the latest Web trends i.e. Web 3.0 and Metaverse
                concepts and try to understand their working from the
                perspective of the users.
              </Text>
              <Box>
                <Text color="green">Course Outline:</Text> HTML and CSS
                (Homework)
              </Box>
              <br />
              <Link
                style={{ color: "red" }}
                href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6"
              >
                Learn HTML by Hira Khan (Watch Recorded Videos)
              </Link>
              <br />
              <Link
                style={{ color: "red" }}
                href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob"
              >
                Learn CSS Intro by Hira Khan (Watch Recorded Videos)
              </Link>
              <br />
              <br />
              <Text color="green">Web 3.0 and Metaverse Theory </Text>
              <Link
                style={{ color: "red" }}
                href="https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit?usp=sharing"
              >
                Introduction to Panaverse DAO
              </Link>
              <br />
              <Link
                style={{ color: "red" }}
                href="https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit?usp=sharing"
              >
                Web 3.0 User Guide
              </Link>
              <br />
              <br />
              Complete Web 3 Assignments included in the Web 3 User Guide
              <br />
              <br />
              <Link
                style={{ color: "red" }}
                href="https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit?usp=sharing"
              >
                Virtual and Augmented Metaverse User Guide
              </Link>
              <br />
              <br />
              <Text color="green">
                Fundamentals of JavaScript (ECMAScript 2022 Language
                Specification)
              </Text>
              <br />
              <Link
                style={{ color: "red", paddingBottom: "10px" }}
                href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQdc0NSLknxmxBch5gLOqyo"
              >
                Learn JavaScript by Zeeshan Hanif (Watch Recorded Videos)
              </Link>
              <br />
              <br />
              <Link
                style={{ color: "red", paddingBottom: "10px" }}
                href="https://www.amazon.com/JavaScript-Beginner-Professional-building-interactive/dp/1800562527/ref=sr_1_4"
              >
                Chapters 2-6,13 of JavaScript from Beginner to Professional:
                Learn JavaScript quickly by building fun, interactive, and
                dynamic web apps, games,and pages
              </Link>
              <br />
              <br />
              <Link
                style={{ color: "red", paddingBottom: "10px" }}
                href="https://github.com/PacktPublishing/JavaScript-from-Beginner-to-Professional"
              >
                JavaScript Book Code
              </Link>
              <br />
              <br />
              <Link
                style={{ color: "red", marginBottom: "10px" }}
                href="https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md"
              >
                Getting Started Exercises with JavaScript and Node.js
              </Link>
              <br />
              <br />
              <Text color="green">
                Fundamentals of JavaScript and Node.js Quiz
              </Text>
              <br />
              <Text as="p" pb="8px">
                Topics Covered in the Quiz:
              </Text>
              Background of JavaScript and How to use JavaScript in Browser
              Variables, Primitive data types Analyzing and modifying data
              types, and Operators (Chapter 2 of JavaScript from Beginner to
              Professional)<br/><br/>
              <ol>
                <li>
                  Intro to Node.js, .mjs files, Modules, NPM, import, export,
                  and using external modules with npm: <Link style={{ color: "red" }} href="https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing">Link</Link> :           
                  How to accept user input in your Node.js JavaScript programs,
                  this will allow us to create interactive Node.js console
                  programs using prompt-sync library. The last example in this
                  presentation shows you how to use prompt-sync library in your
                  Node.js programs: <Link style={{ color: "red" }} href="
                  https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing">Link</Link> :
                  Note: After this point, we will do all our class work and
                  exercises using Node.js in .mjs files. We will also be able to
                  develop interactive Node.js console programs which will
                  greatly help the students to learn.
                </li>
                <li>
                  Using Arrays and Objects in Node.js Programs (chapter 3 of
                  JavaScript from Beginner to Professional)
                </li>
                <li>
                  Using if and if else statements, else if statements,
                  Conditional ternary operators, and switch statements in
                  Node.js programs (chapter 4 of JavaScript from Beginner to
                  Professional)
                </li>
                <li>
                  Using while loop, do while loop, for loop, for in, and for of
                  loop in Node.js (chapter 5 of JavaScript from Beginner to
                  Professional)
                </li>
                <li>
                  Using Basic functions, Function arguments, Return, Variable
                  scope in functions, Recursive functions, Nested functions,
                  Anonymous functions, and Function callbacks in Node.js
                  (chapter 6 of JavaScript from Beginner to Professional)
                </li>
                <li>
                  Using Concurrency, Callbacks, Promises, async / await, and
                  Event loop (chapter 13 of JavaScript from Beginner to
                  Professional)
                </li>
                <li>JavaScript promises, mastering the asynchronous</li>
              </ol>
              {/* https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-asynchronous-in-javascript
              New JavaScript Features in ECMAScript 2022 and 2021
              https://dev.to/brayanarrieta/new-javascript-features-ecmascript-2022-with-examples-4nhg
              Object-Oriented Programming with TypeScript Chapters 1-11 of
              Learning TypeScript: Enhance Your Web Development Skills Using
              Type-Safe JavaScript
              https://www.amazon.com/Learning-TypeScript-Development-Type-Safe-JavaScript/dp/1098110331/ref=sr_1_1
              Learning Repository https://github.com/panaverse/learn-typescript
              In Class Companion projects and articles for Learning TypeScript
              https://www.learningtypescript.com/ Homework Project
              https://github.com/panaverse/typescript-node-projects TypeScript
              for React Minimal TypeScript Crash Course For React With
              Interactive Code Exercises TypeScript Quizzes Fundamentals of
              TypeScript Quiz TypeScript Professional Proficiency Quiz
              Fundamentals of Version Control with Git (Recorded Videos) Version
              Control using Git and GitHub By Sir Zeeshan Hanif (Watch Recorded
              Videos) Chapters 1, 2, 3, and 4 Learn Version Control with Git: A
              step-by-step course for the complete beginner by Tobias Günther We
              will also cover these readings:
              https://help.github.com/articles/markdown-basics/
              http://stackoverflow.com/questions/5009600/difference-between-fork-and-branch-on-github
              http://stackoverflow.com/questions/3329943/git-branch-fork-fetch-merge-rebase-and-clone-what-are-the-differences
              https://git-scm.com/book/en/v2/Git-Branching-Rebasing
              http://git-scm.com/book/en/v2/Git-Branching-Remote-Branches#Tracking-Branches
              For practice: https://try.github.io/levels/1/challenges/1
              Homework:
              https://www.datacamp.com/courses/introduction-to-git-for-data-science
              Git Cheatsheet
              https://www.kdnuggets.com/2022/11/git-data-science-cheatsheet.html
              Git Quiz before the start of Quarter 2 Total Questions: 60, Total
              Time: 75 minutes Quarter II (Core) W2-201: Developing Planet-Scale
              Web 2.0 Serverless Cloud Apps and APIs using Next.js 13 and Cloud
              Development Kit (CDK) for Terraform Duration: 13 Weeks Course
              Description: The objective of this course is to teach participants
              to develop customer-facing planet-scale Websites, Full-Stack Apps
              and templates, Dashboards, and Muti-Cloud Serverless APIs. By the
              end of the quarter, the participants will be able to develop and
              deploy web platforms like Facebook, Shopify, etc. The technologies
              covered in this course will include Next.js 13, Figma, Tailwind
              CSS, Chakra UI, tRPC, QraphQL, Prisma, Cockroachdb Serverless
              (PostgreSQL Compatible), AWS Serverless Technologies, and Cloud
              Development Kit for Terraform (CDKTF). Course Outline: Next.js 13
              Web Development Next 13 Official Documentation Latest Learn React
              Official Website Learn Next.js 13 Learning Repo Next.js 13 using
              Chakra UI (Remote Zoom Class) Chakra UI Docs
              https://chakra-ui.com/getting-started CSS Flexbox Explained –
              Complete Guide to Flexible Containers and Flex Items
              https://www.freecodecamp.org/news/css-flexbox-complete-guide/
              UI/UX Design with Figma, TailwindCSS, and Chakra UI (Remote Zoom
              Class) Designing and Prototyping Interfaces with Figma: Learn
              essential UX/UI design principles by creating interactive
              prototypes for mobile, tablet, and desktop by Fabio Staiano Figma
              Design Kit for TailwindCSS Chakra UI Figma Kit API Routes with
              Next.js API Routes APIs with Next.js and tRPC Build a tRPC CRUD
              API Example with Next.js Stop building REST APIs for your Next.js
              apps, use tRPC instead
              https://brockherion.dev/blog/posts/stop-building-rest-apis-for-your-next-apps/
              SQL and Prisma Start from scratch with relational databases SQL
              For Beginners Video Tutorial Database Management Systems and SQL –
              Tutorial for Beginners Next.js 13 using TailwindCSS (Remote Zoom
              Class) Modern CSS with Tailwind, Second Edition by Noel Rappin AWS
              Application Composer (Remote Zoom Class) What is AWS Application
              Composer? Event-driven apps with AWS Application Composer Visually
              design and build serverless applications quickly Must Have: Create
              Free AWS Account AWS Free Tier Note: For AWS Free Tier you will
              need a credit or debit card. The easiest way for Pakistani
              students is to open a bank account with Meezan Bank. Open a Meezan
              Aasan Account if you have no earning proof. Meezan Bank will
              charge Rs. 1100 for ATM Debit Card and there is a requirement of
              Rs. 100 minimum deposit. The card will be delivered in a few
              weeks. Our students have reported that this Debit card works with
              AWS. Now you can create a virtual VISA Debit card through the
              NayaPay app (https://www.nayapay.com/ ) which can be used to
              create AWS/GCP/Azure accounts. This is good news for those
              students who find it difficult to create physical debit and credit
              cards from banks. You can also get a $300 credit
              https://pages.awscloud.com/adoptf90d_GLOBAL_POC-credits.html
              Multi-Cloud GraphQL Serverless API Development with Cloud
              Development Kit for Terraform (CDKTF) (Remote Zoom Class) Learn
              Multicloud Serverless API Development using CDK Terraform in Baby
              Steps Web 2.0 Projects Next.js Projects Styling Next.js Projects
              using TailwindCSS and Chakra UI Todo Full-Stack App Build a
              Twitter Clone Earn While You Learn Projects Build Full-Stack
              Next.js 13 Jamstack Templates You will be assigned to build a
              template which we will sell on Theme Forest and Panaverse DAO
              marketplace. The Panaverse DAO will receive 25% share on the sale
              of the template which will be used to manage the platform. An
              additional 15% will be spent on marketing the template. 60% of the
              revenues will be distributed to the developer through the
              Panaverse DAO in the form of Panaverse tokens. The Panaverse
              Full-Stack Template Standard Build QraphQL APIs You will be
              assigned to build APIs for which you will sell subscriptions on
              the Panaverse DAO Marketplace. The Panaverse DAO will receive 25%
              share on the sale of the template which will be used to manage the
              platform. An additional 15% will be spent on marketing the
              template. 60% of the revenues will be distributed to the developer
              through the Panaverse DAO in the form of Panaverse tokens. */}

              <Text pt="10px" fontSize="20px">Under Construction ":)"</Text>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
