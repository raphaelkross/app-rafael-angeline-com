import React from "react";
import Layout from "../components/layout";
import Section from "../components/section";

class About extends React.Component {
	render() {
		return (
			<Layout
				title="About - Rafael Angeline"
				description="More about Rafael Angeline skills and technologies being used. Lives in São Paulo, Brazil - working most of the time with remote team to craft solutions."
			>
				<Section title="A bit about me." className="first white">
					<div
						className="about-grid"
						itemScope
						itemType="http://schema.org/Person"
					>
						<div>
							<div className="bubble-image">
								<img
									src="static/img/profile.jpg"
									title="Rafael Angeline"
									alt="Rafael Angeline Profile Picture"
									itemProp="image"
								/>
								<div className="gray" />
								<div className="green" />
							</div>
						</div>
						<div>
							<h3>
								About{" "}
								<span itemProp="name">Rafael Angeline</span>.
							</h3>
							<p>
								This is Rafael Angeline's about page, welcome!
								Living in{" "}
								<span
									itemProp="address"
									itemScope
									itemType="http://schema.org/PostalAddress"
								>
									<span itemProp="addressRegion">
										São Paulo
									</span>-{" "}
									<span itemProp="addressCountry">
										Brazil
									</span>
								</span>. I've had contact with software
								development when I was a young 11 years old
								boy. I’m {new Date().getFullYear() - 1994}{" "}
								now, so... it's been a while! :) I've studied Software
								Engineering at Maua University.
							</p>
							<h3>Professional.</h3>
							<p>
								First of all, I'm easy to work with; becoming a
								friend quickly! I have experience working{" "}
								<span className="tag">remotely</span> and using{" "}
								<span className="tag">agile</span> methods,
								where the product is actually delivered and
								improved!<br />
								<br />
								<span className="tag">WordPress</span> -{" "}
								<span className="tag">Javascript</span> -{" "}
								<span className="tag">React</span> -{" "}
								<span className="tag">Node</span> -{" "}
								<span className="tag">CSS</span> are one of many
								tools I use to do my job. That's a bit about
								Rafael, a friendly{" "}
								<span itemProp="jobTitle">
									Senior Software Engineer
								</span>{" "}
								:)
							</p>
						</div>
						<div className="speeches">
							<h3>Speeches.</h3>
							<ul>
								<li>
									<a
										href="https://2016.saopaulo.wordcamp.org/2016/11/25/wordpress-rest-api-e-web-apps-com-react-por-rafael-angeline/"
										target="_blank"
									>
										<span className="tag">2016</span>{" "}
										WordPress REST API and Web Apps with
										React - WordCamp SP
									</a>
								</li>
								<li>
									<a
										href="https://2017.saopaulo.wordcamp.org/session/criando-um-ambiente-de-alta-disponibilidade-para-wordpress-com-kubernetes/"
										target="_blank"
									>
										<span className="tag">2017</span> High
										Availability with WordPress & Kubernetes
										- WordCamp SP
									</a>
								</li>
								<li>
									<span className="tag">2018</span> React SP Master Class
								</li>
								<li>
									<span className="tag">2019</span> ¯\_(ツ)_/¯
									Coming soon...
								</li>
							</ul>
							<h3>Resume.</h3>
							<p>
								<a
									href="/static/rafael-angeline-resume.pdf"
									target="_blank"
								>
									Download Resume Now (PDF)
								</a>
							</p>
						</div>
					</div>
				</Section>
				<Section className="white">
					<div className="tools-grid">
						<div>
							<h3>User Experience</h3>
							<p>
								Users love interfaces that just work, are they
								easy to build? No, but I accept the challenge.
							</p>
						</div>

						<div className="head-image">
							<img
								src="static/img/antique-main.png"
								alt="Rafael Angeline research tool"
								title="The tools I use"
							/>
						</div>

						<div className="right-side">
							<h3>Cloud Services</h3>
							<p>
								I enjoy the challenges corporate services bring
								to the table.{" "}
								<strong>Docker & Kubernetes</strong> are
								friends!
							</p>
						</div>

						<div className="with-image">
							<img
								src="static/img/antique01.gif"
								alt="Rafael Angeline - JS, React, Node.JS"
								title="Javascript, React, Node.JS"
							/>
							<div>
								<h3>Javascript, React, Node.JS</h3>
								<p>
									I love Javascript! I use this stack a lot to
									build from web applications to mobile apps!
								</p>
							</div>
						</div>

						<div className="with-image right-side">
							<div>
								<h3>App Development</h3>
								<p>
									Android, iOS. With mobile apps you get
									closer to your customer, I'm used to design
									interfaces and code them all{" "}
								</p>
							</div>
							<img
								src="static/img/antique02.gif"
								alt="Rafael Angeline - App Development"
								title="App Development"
							/>
						</div>

						<div>
							<h3>Sketch and Framer</h3>
							<p>
								It's really cheaper & better to build a
								interactive prototype, before actually coding
								it. Customers always love it!
							</p>
						</div>

						<div className="right-side">
							<h3>WordPress</h3>
							<p>
								WordPress deserves a unique place here, from
								plugins to themes (and REST API), I can build
								the perfect solution.
							</p>
						</div>
					</div>
				</Section>

				<style jsx>{`
					.about-grid {
						display: grid;
						grid-template-columns: 180px 2fr 1fr;
						gap: 30px;
					}

					.about-grid p {
						margin-bottom: 30px;
					}

					.about-grid p:last-child {
						margin: 0;
					}

					.bubble-image {
						position: relative;
					}

					.bubble-image img {
						border-radius: 100%;
						max-width: 100%;
						height: auto;
						filter: grayscale(100%);
					}

					.bubble-image .gray {
						position: absolute;
						right: 0;
						bottom: 0;
						width: 70px;
						height: 70px;
						background: #fff;
						border-radius: 100%;
					}

					.bubble-image .green {
						position: absolute;
						right: 10px;
						bottom: 10px;
						width: 50px;
						height: 50px;
						background: #3fc;
						border-radius: 100%;
					}

					h3 {
						font-size: 16px;
						font-weight: 600;
						color: #777;
						letter-spacing: 0.3px;
					}

					ul {
						list-style: none;
						padding: 0;
						margin: 0 0 30px;
						font-size: 14px;
						line-height: 24px;
						letter-spacing: 0.3px;
						color: #777;
					}

					li {
						margin-bottom: 20px;
					}

					.about-grid .tag {
						display: inline-block;
						padding: 3px 4px;
						background: #eee;
						color: #333;
						border-radius: 2px;
						line-height: 1;
						margin-right: 5px;
						font-weight: 600;
					}

					a {
						color: #777;
						text-decoration: none;
						padding: 2px 0 2px 0;
					}

					a:hover {
						background: #3fc;
						color: #333;
						text-decoration: none;
					}

					.tools-grid {
						display: grid;
						grid-template-columns: 1fr 300px 1fr;
						grid-template-rows: 1fr 1fr 1fr;
						gap: 0 30px;
						box-sizing: border-box;
					}

					.head-image {
						grid-column: 2;
						grid-row: 1 / span 3;
						align-self: center;
					}

					.tools-grid img {
						max-width: 100%;
						height: auto;
					}

					.tools-grid .right-side {
						text-align: right;
					}

					.tools-grid .with-image {
						display: flex;
						justify-content: space-between;
						align-items: flex-start;
					}

					.tools-grid .with-image img {
						width: 100px;
						flex-basis: 100px;
						margin: 0 20px 0 0;
						flex-shrink: 0;
						flex-grow: 0;
					}

					.tools-grid .with-image.right-side img {
						margin: 0 0 0 20px;
					}

					.tools-grid h3 {
						margin: 20px 0 15px 0;
						line-height: 1.3;
					}

					.tools-grid p {
						margin: 0;
					}

					@media (max-width: 600px) {
						.tools-grid .right-side {
							text-align: left;
						}
					}

					@media (max-width: 900px) {
						.about-grid {
							grid-template-columns: 150px 1fr;
							grid-template-rows: 1fr auto;
							gap: 0 40px;
						}

						.about-grid .speeches {
							grid-column-start: 2;
						}

						.tools-grid {
							grid-template-columns: 1fr 200px 1fr;
						}

						.tools-grid .with-image img {
							display: none;
						}
					}

					@media (max-width: 600px) {
						.about-grid {
							grid-template-columns: 1fr;
							grid-template-rows: auto;
						}

						.about-grid .speeches {
							grid-column-start: 1;
						}

						.tools-grid {
							grid-template-columns: 1fr;
						}

						.tools-grid .with-image img {
							display: none;
						}

						.head-image {
							display: none;
						}

						.bubble-image .gray {
							width: 100px;
							height: 100px;
						}

						.bubble-image .green {
							width: 80px;
							height: 80px;
						}
					}
				`}</style>
			</Layout>
		);
	}
}

export default About;
