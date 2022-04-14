import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";

import Layout from "../components/layouts/article";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import thumbInkdrop from "../public/images/works/inkdrop_eyecatch.png";
import thumbWalknote from "../public/images/works/walknote_eyecatch.png";

const Works = () => {
	return (
		<Layout>
			<Container>
				<Heading as="h3" fontSize={20} mb={4}>
					Works
				</Heading>

				<SimpleGrid columns={[1, 1, 2]} gap={6}>
					<Section>
						<WorkGridItem
							id="rewordle"
							title="Rewordle"
							thumbnail={thumbInkdrop}
						>
							A Wordle clone with extra-sections for local
							Nigerian languages: Igbo, Yoruba and Hausa. Full
							localization support and i18n.
						</WorkGridItem>
					</Section>

					<Section delay={0.3}>
						<WorkGridItem
							id="netflicked"
							title="Netflicked"
							thumbnail={thumbWalknote}
						>
							A netflix clone with pixel perfect UI features
						</WorkGridItem>
					</Section>
				</SimpleGrid>
			</Container>
		</Layout>
	);
};

export default Works;
