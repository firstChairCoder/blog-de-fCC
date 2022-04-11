import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
	global: props => ({
		body: {
			bg: mode("#F0E7DB", "#202023")(props),
		},
	}),
};

const components = {
	Heading: {
		variants: {
			"section-title": {
				textDecoration: "underline",
				fontSize: 20,
				textUnderlineOffset: 6,
				textDecorationColor: "#525252",
				textDecorationThickness: 4,
				marginTop: 3,
				marginBottom: 4,
			},
		},
	},
	Link: {
		baseStyle: props => ({
			color: mode("#3D7AED", "#FF63C3")(props),
			textUnderlineOffset: 3,
		}),
	},
};

const fonts = {
	heading: "'M PLUS Rounded 1c'",
};

const colors = {
	grassTeal: "#88CCCA",
};

const config = {
	initialColorMode: "dark",
	useSystemColorMode: false,
};

const theme = extendTheme({ config, styles, components, fonts, colors });
export default theme;
