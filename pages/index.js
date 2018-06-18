import React from "react";
import Layout from "../components/layout";

class Index extends React.Component {
	render() {
		return (
			<Layout
				title="Rafael Angeline - Building Solutions with WordPress, Javascript, React"
				description="Rafael Angeline is a Senior Software Engineer that develops solutions with WordPress, React, Javascript and write thoughts about development tools."
			>
				<section>
					<div className="hero-banner" />
					<div className="container">
						<h1>
							Rafael Angeline<span>.</span>
						</h1>
						<h4>Handcrafted Solutions and Experiences.</h4>
					</div>
				</section>
				<style jsx>{`
					section {
						font-family: -apple-system, BlinkMacSystemFont,
							"Segoe UI", Roboto, Helvetica, Arial, sans-serif,
							"Apple Color Emoji", "Segoe UI Emoji",
							"Segoe UI Symbol";
						width: 100%;
						height: 100vh;
					}

					.container {
						display: flex;
						align-items: flex-start;
						flex-direction: column;
						justify-content: center;
						height: 100vh;
					}

					h1 {
						color: #fff;
						letter-spacing: -2px;
						font-size: 80px;
						font-weight: bold;
						margin: 0 0 20px;
						line-height: 1;
					}

					h1 span {
						color: #3fc;
					}

					h4 {
						font-size: 20px;
						color: rgba(255, 255, 255, 0.8);
						letter-spacing: 1px;
						font-weight: 600;
						text-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
						margin: 0;
						line-height: 1.3;
					}

					.hero-banner {
						position: absolute;
						width: 100%;
						height: 100vh;
						z-index: -1;
						background: url(static/img/banner.jpg) right center
							no-repeat #ccc;
						background-size: auto 105%;
						overflow: hidden;
						-webkit-transition: background 0.3s ease-in;
						-moz-transition: background 0.3s ease-in;
						-ms-transition: background 0.3s ease-in;
						-o-transition: background 0.3s ease-in;
						transition: background 0.3s ease-in;
					}

					.hero-banner:after {
						display: block;
						content: " ";
						position: absolute;
						top: 0;
						left: 0;
						height: 100%;
						width: 100%;
						background: transparent;
						background-image: linear-gradient(
							to bottom,
							rgba(0, 0, 0, 0.01),
							rgba(0, 0, 0, 0.7)
						);
						z-index: 20000;
					}

					@media (max-width: 320px) {
						h1 {
							font-size: 38px;
						}
					}
				`}</style>
			</Layout>
		);
	}
}

export default Index;
