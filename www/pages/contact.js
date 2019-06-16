import React from "react";
import Layout from "../components/layout";
import Section from "../components/section";

class Contact extends React.Component {
	render() {
		return (
			<Layout
				title="Contact - Rafael Angeline"
				description="Get in touch with Rafael Angeline to talk about projects, questions and others. Contact me by e-mail and let me know about your next exciting project!."
			>
				<Section title="Get in touch." className="first white">
					<h1>
						<a href="mailto:me@rafaelangeline.com">
							me@rafaelangeline.com
						</a>
					</h1>
					<p>
						I love talking about projects, opportunities, new tech
						or whatever you think it's worth a conversation! Don't
						hesitate to get in touch :)
					</p>
				</Section>
				<style jsx>{`
					h1 {
						font-size: 48px;
						line-height: 1.1;
						margin: 100px 0 20px;
						letter-spacing: 0.8px;
					}

					p {
						margin: 0 0 130px;
					}

					a {
						text-decoration: underline;
						color: #555;
						transition: all 400ms ease-in-out;
						padding: 1px 2px;
					}

					a:hover {
						background: #3fc;
						color: #333;
					}

					@media (max-width: 700px) {
						h1 {
							font-size: 28px;
						}
					}

					@media (max-width: 400px) {
						h1 {
							font-size: 22px;
						}
					}

					@media (min-width: 1100px) {
						h1 {
							font-size: 63px;
						}
					}
				`}</style>
			</Layout>
		);
	}
}

export default Contact;
