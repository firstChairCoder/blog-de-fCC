import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import Paragraph from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
	return (
		<Layout title="Rewordle">
			<Container>
				<Title>
					Rewordle <Badge>2022</Badge>
				</Title>
				<Paragraph>
					A Wordle clone with extra-sections for local Nigerian
					languages: Igbo, Yoruba and Hausa. Full localization support
					and i18n.
				</Paragraph>
				<List ml={4} my={4}>
					<ListItem>
						<Meta>Website</Meta>
						<Link href="https://www.inkdrop.app/">
							https://www.inkdrop.app/{" "}
							<ExternalLinkIcon mx="2px" />
						</Link>
					</ListItem>
					<ListItem>
						<Meta>Platforms</Meta>
						<span>Windows, macOS, Linux, iOS, Android</span>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<span>NodeJS, React Native, Expo, React Native for Web</span>
					</ListItem>
					<ListItem>
						<Meta>Blogpost</Meta>
						<Link href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820">
							This is a dummy link to be changed! <ExternalLinkIcon mx="2px" />
						</Link>
					</ListItem>
				</List>

				<WorkImage src="/images/works/inkdrop_01.png" alt="Inkdrop" />
			</Container>
		</Layout>
	);
};
export default Work;
