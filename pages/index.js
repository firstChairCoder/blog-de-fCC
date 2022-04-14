import {
    Container,
    Box,
    Heading,
    Image,
    useColorModeValue,
    Button,
    Link,
    SimpleGrid,
    List,
    ListItem,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { IoLogoTwitter, IoLogoGithub } from "react-icons/io5";

import Section from "../components/section";
import Paragraph from "../components/paragraph";
import { BioSection, BioYear } from "../components/bio";
import Layout from "../components/layouts/article";
import { GridItem } from "../components/grid-item";
import thumbYouTube from "../public/images/links/youtube.png";

const Page = () => {
    return (
        <Layout>
            <Container>
                <Box
                    borderRadius="lg"
                    bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
                    p={3}
                    mb={6}
                    align="center"
                >
                    Hello, I&apos;m a front-end developer from Nigeria
                </Box>

                <Box display={{ md: "flex" }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Joshua A.
                        </Heading>
                        <p>Javascript Developer | Resident code flâneur</p>
                    </Box>

                    <Box
                        flexShrink={0}
                        mt={{ base: 4, md: 0 }}
                        ml={{ md: 6 }}
                        textAlign="center"
                    >
                        <Image
                            borderColor="whiteAlpha.800"
                            borderWidth={2}
                            borderStyle="solid"
                            maxWidth="100px"
                            display="inline-block"
                            borderRadius="full"
                            src="/images/coder.png"
                            alt="Profile Image"
                        />
                    </Box>
                </Box>

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Work
                    </Heading>
                    <Paragraph>
                        Joshua is a front-end developer who is fascinated with
                        all that JavaScript has done and can do when enployed by
                        the curious mind. When not working on real-life projects
                        or assisting colleagues at work on corporate and
                        personal projects, he is more likely than not, somewhere
                        out there, with a good book in his hand... and a cup of
                        tea closeby.
                    </Paragraph>

                    <Box align="center" my={4}>
                        <NextLink href="/works" scroll={false}>
                            <Button
                                rightIcon={<ChevronRightIcon />}
                                colorScheme="teal"
                            >
                                My portfolio
                            </Button>
                        </NextLink>
                    </Box>
                </Section>

                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Brief Bio
                    </Heading>
                    <BioSection>
                        <BioYear>1996</BioYear>
                        Born in Abuja, Nigeria.
                    </BioSection>
                    <BioSection>
                        <BioYear>2018</BioYear>
                        Completed my degree program in Electrical and
                        Electronics Engineering from Covenant University.
                    </BioSection>
                    <BioSection>
                        <BioYear>2019-2020</BioYear>
                        Worked in the private insurance sector while working
                        freelance by the side
                    </BioSection>
                    <BioSection>
                        <BioYear>2020-present</BioYear>
                        Worked in various capacities with React Native Nigeria
                        among others.
                    </BioSection>
                </Section>

                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        I ♥
                    </Heading>

                    <Paragraph>
                        Music, Basketball,{" "}
                        <Link
                            href="https://illust.odoruinu.net/"
                            target="_blank"
                        >
                            Armchair Psychology
                        </Link>
                        , Machine Learning, Reading
                    </Paragraph>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        Online presence
                    </Heading>
                    <List>
                        <ListItem>
                            <Link
                                href="https://github.com/firstChairCoder"
                                target="_blank"
                            >
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<IoLogoGithub />}
                                >
                                    @firstChairCoder
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link
                                href="https://twitter.com/firstChairCoder"
                                target="_blank"
                            >
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<IoLogoTwitter />}
                                >
                                    @firstChairCoder
                                </Button>
                            </Link>
                        </ListItem>
                    </List>

                    <SimpleGrid columns={[1, 2, 2]} gap={6}>
                        <GridItem
                            href="https://www.youtube.com/devaslife"
                            title="Dev as Life"
                            thumbnail={thumbYouTube}
                        >
                            My mentor&apos;s YouTube channel
                        </GridItem>
                    </SimpleGrid>

                    <Box align="center" my={4}>
                        <NextLink href="/posts" scroll={false}>
                            <Button
                                rightIcon={<ChevronRightIcon />}
                                colorScheme="teal"
                            >
                                Popular posts
                            </Button>
                        </NextLink>
                    </Box>
                </Section>
            </Container>
        </Layout>
    );
};

export default Page;
