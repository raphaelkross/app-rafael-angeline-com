import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

class SinglePost extends React.Component {

	constructor(props) {
		super(props);

		// Set ref so we may interact with content DOM node.
		this.contentRef = React.createRef();

		// Transform the content.
		this.state = {
			content: props.content.replace(/<script/g, '<hidden-script').replace(/<\/script/g, '</hidden-script'),
		};
	}

	componentDidMount() {
		// Store the content DOM node.
		const contentNode = this.contentRef.current;

		// Get all the scripts tags from content.
		const gistNodes = contentNode.querySelectorAll('.oembed-gist hidden-script');

		// Loop though scripts.
		[].forEach.call(gistNodes, async gistNode => {
			// Get the gist src.
			const src = gistNode.getAttribute('src');

			// Load the script content.
			try {
				const script = await fetch(src);
				const content = await script.text();

				// Get all the tag content from Gist.
				const re = /document\.write\('(.*)'\);?/g;

				let matches = [];

				let m;
				while (m = re.exec(content)) {
					matches.push( m[1].replace(/(\\n)|(\\)/g, '') );
				}

				// Add the elements to the document.
				matches.forEach( element => {
					// Append element.
					gistNode.parentNode.insertAdjacentHTML('afterbegin', element);
				});

			} catch( e ) {
				throw new Error( e );
			}
		});
	}

	categoriesList(categories) {
		if (!categories) {
			return null;
		}

		return (
			<React.Fragment>
				{"in "}
				{categories.map((category, index) => {
					// If it's the last item, do not render the comma.
					const last = index == categories.length - 1;

					return (
						<React.Fragment key={index}>
							<Link href={"/" + category.permalink}>
								<a>{category.name}</a>
							</Link>
							{last == false ? ", " : null}
						</React.Fragment>
					);
				})}
				<style jsx>{`
				`}</style>
			</React.Fragment>
		);
	}

	render() {
		return (
			<div className="post">
				<p className="date">{this.props.date}</p>
				<h2 className="title">{this.props.title}</h2>
				{this.props.thumbnail ? (
					<picture>
						<img
							src={this.props.thumbnail.src}
							alt={this.props.thumbnail.alt}
							title={this.props.thumbnail.title}
						/>
					</picture>
				) : null}
				<div
					className="content"
					ref={this.contentRef}
					dangerouslySetInnerHTML={{ __html: this.state.content }}
				/>
				<p className="post-details">
					Posted by <span>@{this.props.author_name}</span>{" "}
					{this.categoriesList(this.props.categories)}
				</p>
				<style jsx>{`

				`}</style>
				<style jsx global>{`

				`}</style>
			</div>
		);
	}
}

SinglePost.propTypes = {
	date: PropTypes.string.isRequired,
	thumbnail: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
	title: PropTypes.string.isRequired,
	permalink: PropTypes.string.isRequired,
	author_name: PropTypes.string.isRequired,
	categories: PropTypes.array.isRequired,
	content: PropTypes.string.isRequired,
};

export default SinglePost;
