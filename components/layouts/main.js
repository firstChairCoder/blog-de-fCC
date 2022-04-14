import Head from "next/head";
import { useRouter } from "next/router";
import { Box, Container } from "@chakra-ui/react";

import NavBar from "../navbar";
import Footer from "../footer";

const Main = ({ children }) => {
	const router = useRouter();
	return (
		<Box as="main" pb={8}>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<title> Joshua A. - Homepage</title>
			</Head>

			<NavBar path={router.asPath} />

			<Container maxW="container.md" pt={14}>
				{children}

				<Footer />
			</Container>
		</Box>
	);
};

export default Main;
