import React from "react";

class Index extends React.Component {
	static async getInitialProps(props) {
		// Get params.
		const { query } = props;
		let { slug } = query;

		return {
			title: "Blog - Rafael Angeline",
			slug: slug
		};
	}

	render() {
		return <p>{this.props.slug}</p>;
	}
}

export default Index;
