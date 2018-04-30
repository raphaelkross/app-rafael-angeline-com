import React from "react";

class Header extends React.Component {
	render() {
		return (
			<footer>
				<div className="widget">
					<h3>Contact.</h3>
					<p>
						Rafael Angeline<br />
						Send me your message<br />
						me [at] rafaelangeline.com
					</p>
				</div>

				<div className="widget">
					<h3>Location.</h3>
					<p>
						Magic Happens at<br />
						São Paulo, SP - Brazil
					</p>
				</div>

				<div className="widget">
					<h3>Stay in Touch.</h3>
					<p>
						Follow me on{" "}
						<a
							href="https://twitter.com/RafaelAngeline"
							className="twitter"
							target="_blank"
						>
							<span>Twitter</span>
						</a>,{" "}
						<a
							href="http://stackexchange.com/users/8383862/rafael-angeline"
							className="stackoverflow"
							target="_blank"
						>
							<span>StackOverflow</span>
						</a>,{" "}
						<a
							href="https://github.com/raphaelkross"
							className="github"
							target="_blank"
						>
							<span>Github</span>
						</a>,{" "}
						<a
							href="https://profiles.wordpress.org/rafaelangeline"
							className="wordpress"
							target="_blank"
						>
							<span>WordPress</span>
						</a>
					</p>
				</div>

				<p className="copy">
					© Copyright Rafael Angeline. Built by Rafael Angeline with
					React, Next.js and WordPress &lt;3
				</p>

				<style jsx>{`
					footer {
						font-family: -apple-system, BlinkMacSystemFont,
							"Segoe UI", Roboto, Helvetica, Arial, sans-serif,
							"Apple Color Emoji", "Segoe UI Emoji",
							"Segoe UI Symbol";
						display: flex;
						flex-wrap: wrap;
						justify-content: space-between;
						padding: 160px 0 30px;
						background: #fff;
					}

					.widget {
						flex-basis: 33.333%;
						width: 33.333%;
						padding: 0 60px 60px 0;
						box-sizing: border-box;
					}

					h3 {
						color: #333;
						font-size: 11px;
						margin: 0 0 45px 0;
					}

					p {
						font-size: 11px;
						line-height: 24px;
						letter-spacing: 0.3px;
						color: #777;
					}

					a {
						color: #777;
						text-decoration: underline;
						padding: 2px 0 2px 0;
					}

					a:hover,
					a:active,
					a:focus {
						background: #3fc;
						color: #333;
						text-decoration: none;
					}

					.copy {
						border-top: 1px solid #f6f6f6;
						margin: 60px 0 0;
						padding: 27px 0 0;
						flex-basis: 100%;
					}

					@media (max-width: 700px) {
						.widget {
							flex-basis: 100%;
							width: 100%;
						}
					}
				`}</style>
			</footer>
		);
	}
}

export default Header;
