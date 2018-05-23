import React from "react";
import Layout from "../components/layout";
import Section from "../components/section";

class Contact extends React.Component {
	render() {
		return (
			<Layout title="Contact - Rafael Angeline">
				<Section title="Get in touch." className="first">
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
						margin: 100px 0 40px;
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
				`}</style>
			</Layout>
		);
	}
}

export default Contact;
