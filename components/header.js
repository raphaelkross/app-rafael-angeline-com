import React from "react";
import { Link } from "../routes";

class Footer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			openModal: false
		};

		this.setModalState = this.setModalState.bind(this);
	}

	setModalState(event, value) {
		event.preventDefault();

		this.setState({
			openModal: value
		});
	}

	returnUl(items) {
		return (
			<ul>
				{items.map((item, index) => {
					return (
						<li key={index}>
							{item.external ? (
								<a
									href={item.href}
									target="_blank"
									rel="nofollow"
								>
									<span>{item.label}</span>
								</a>
							) : (
								<Link route={item.href}>
									<a>
										<span>{item.label}</span>
									</a>
								</Link>
							)}
							{item.children
								? this.returnUl(item.children)
								: null}
						</li>
					);
				})}
			</ul>
		);
	}

	render() {
		// Generate the menu itmes.
		const menuItems = this.props.items
			? this.returnUl(this.props.items)
			: null;

		return (
			<header>
				<div className="container">
					<nav>{menuItems}</nav>
					<div className="responsive-trigger">
						<a
							className="responsive-trigger-link"
							href="#"
							onClick={e => {
								this.setModalState(e, true);
							}}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="1"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="feather feather-menu"
							>
								<line x1="3" y1="12" x2="21" y2="12" />
								<line x1="3" y1="6" x2="21" y2="6" />
								<line x1="3" y1="18" x2="21" y2="18" />
							</svg>
						</a>
					</div>
				</div>

				<div
					className={
						"modal" + (this.state.openModal ? " visible" : "")
					}
				>
					<a
						className="modal-close"
						href="#"
						onClick={e => {
							this.setModalState(e, false);
						}}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="1"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="feather feather-x"
						>
							<line x1="18" y1="6" x2="6" y2="18" />
							<line x1="6" y1="6" x2="18" y2="18" />
						</svg>
					</a>
					<div>{menuItems}</div>
				</div>

				<style jsx global>{`
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
						z-index: 1000;
					}

					header .container {
						display: flex;
						justify-content: space-between;
						align-items: center;
					}

					header nav {
						flex-grow: 1;
					}

					header .responsive-trigger {
						margin-left: 10px;
						flex-grow: 0;
						flex-shrink: 1;
						display: none;
					}

					header .responsive-trigger-link {
						padding: 20px 10px;
						margin: 0;
					}

					header ul {
						display: flex;
						padding: 12px 0;
						margin: 0;
						list-style: none;
					}

					header li {
						position: relative;
					}

					header li > ul {
						display: none;
						position: absolute;
						top: 100%;
						left: -10px;
						width: 120px;
						background: #222;
						padding: 10px 20px;
					}

					header li > ul a {
						padding: 10px 0;
						margin: 0;
						display: block;
					}

					header li:hover > ul {
						display: block;
					}

					header a {
						display: inline-block;
						padding: 18px 10px;
						margin-right: 25px;
						font-size: 14px;
						color: #999;
						text-decoration: none;
					}

					header a span {
						padding: 1px;
					}

					header a:hover span {
						background: #3fc;
						color: #222;
					}

					header li:last-child a {
						margin-right: 0;
					}

					@media (max-width: 700px) {
						header .container {
							justify-content: flex-end;
						}

						header nav {
							display: none;
						}

						header .responsive-trigger {
							display: block;
						}
					}

					.modal {
						display: none;
						position: fixed;
						z-index: 100;
						top: 0;
						left: 0;
						width: 100%;
						height: 100vh;
						background: #222;

						padding: 20px;
						overflow-y: scroll;
						box-sizing: border-box;
					}

					.modal.visible {
						display: block;
					}

					.modal-close {
						padding: 20px;
						position: absolute;
						right: 0;
						top: 0;
						margin: 0;
					}

					.modal ul {
						display: block;
						margin: 35px 0px 0;
						padding: 0;
						text-align: center;
						position: static;
						width: 100%;
					}

					.modal ul a {
						padding: 20px 0;
						margin: 0;
						display: block;
						font-size: 16px;
					}

					.modal li > ul {
						margin: 0;
					}
				`}</style>
			</header>
		);
	}
}

export default Footer;
