import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { GridItem } from "../components/grid-item";

import thumbFishWorkflow from "../public/images/contents/youtube-fish-workflow.jpg";
import thumbFinancialGoal from "../public/images/contents/blog-financial-goal.png";
import thumbHowToPriceYourself from "../public/images/contents/blog-how-to-price-yourself.jpg";
import thumb50xFaster from "../public/images/contents/youtube-50x-faster.jpg";

const Posts = () => (
	<Layout title="Posts">
		<Container>
			<Heading as="h3" fontSize={20} mb={4}>
				Popular Posts
			</Heading>

			<Section delay={0.1}>
				<SimpleGrid columns={[1, 2, 2]} gap={6}>
					<GridItem
						title="My Fish workflow"
						thumbnail={thumbFishWorkflow}
						href="https://www.youtube.com/watch?v=KKxhf50FIPI"
					/>
					<GridItem
						title="I stopped setting a financial goal for my SaaS"
						thumbnail={thumbFinancialGoal}
						href="https://blog.inkdrop.app/i-stopped-setting-a-financial-goal-for-my-saas-a92c3db65506"
					/>
				</SimpleGrid>
			</Section>

			<Section delay={0.5}>
				<SimpleGrid columns={[1, 2, 2]} gap={6}>
					<GridItem
						title="How to Price Yourself as a Freelance Developer"
						thumbnail={thumbHowToPriceYourself}
						href="https://blog.inkdrop.app/how-to-price-yourself-as-a-freelance-developer-3453dfd59d91"
					/>
					<GridItem
						title="I made my React Native app 50x faster"
						thumbnail={thumb50xFaster}
						href="https://www.youtube.com/watch?v=vj723NlrIQc"
					/>
				</SimpleGrid>
			</Section>
		</Container>
	</Layout>
);

export default Posts;
