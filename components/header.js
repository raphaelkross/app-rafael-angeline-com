import React from "react";

class Footer extends React.Component {
	render() {
		return (
			<header>
				<div className="container">
					<ul>
						<li>
							<a href="#">
								<span>Home.</span>
							</a>
						</li>
						<li>
							<a href="#">
								<span>About.</span>
							</a>
							<ul>
								<li>
									<a href="#">
										<span>Facebook.</span>
									</a>
								</li>
								<li>
									<a href="#">
										<span>Twitter.</span>
									</a>
								</li>
								<li>
									<a href="#">
										<span>Github.</span>
									</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="#">
								<span>Projects.</span>
							</a>
						</li>
						<li>
							<a href="#">
								<span>Blog.</span>
							</a>
						</li>
						<li>
							<a href="#">
								<span>Contact.</span>
							</a>
						</li>
					</ul>
				</div>

				<style jsx>{`
					header {
						background: #222;
						font-family: -apple-system, BlinkMacSystemFont,
							"Segoe UI", Roboto, Helvetica, Arial, sans-serif,
							"Apple Color Emoji", "Segoe UI Emoji",
							"Segoe UI Symbol";
						position: fixed;
						top: 0;
						left: 0;
						width: 100%;
					}

					ul {
						display: flex;
						padding: 12px 0;
						margin: 0;
						list-style: none;
					}

					li {
						position: relative;
					}

					li > ul {
						display: none;
						position: absolute;
						top: 100%;
						left: -20px;
						width: 120px;
						background: #222;
						padding: 10px 20px;
					}

					li > ul a {
						padding: 10px 0;
						margin: 0;
					}

					li:hover > ul {
						display: block;
					}

					a {
						display: inline-block;
						padding: 20px 0;
						margin-right: 45px;
						font-size: 16px;
						color: #999;
						text-decoration: none;
					}

					a span {
						padding: 1px;
					}

					a:hover span,
					a:active span,
					a:focus span {
						background: #3fc;
						color: #222;
					}

					li:last-child a {
						margin-right: 0;
					}
				`}</style>
			</header>
		);
	}
}

export default Footer;
