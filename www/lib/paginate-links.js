/**
 * Create a pagination array while controlling the number of elements.
 *
 * @param current (int) The current page number.
 * @param pages   (int) The total amount of pages.
 * @param endSize (int) How many numbers on either the start and the end list edges.
 * @param midSize (int) How many numbers to either side of the current pages. Default 2.
 */
function paginateLinks(args) {
	// Get vars from args.
	const { current, pages, endSize, midSize } = args;

	// Store the pagination items.
	let links = [];

	// If no pages, return empty array.
	if (pages <= 0) {
		return [];
	}

	// If one page, return one item.
	if (current === 1 && pages === 1) {
		return [{ link: false, label: 1, page: 1, current: true }];
	}

	// Display first items, based on endSize.
	if (endSize > 0) {
		// Display all first items.
		for (let i = 1; i <= endSize; i++) {
			let link = {};

			// If it's same as current, return as current item.
			if (i == current) {
				link.link = false;
				link.current = true;
			}
			// else, it's an usual link.
			else {
				link.link = true;
				link.current = false;
			}

			// Add label and page.
			link.label = i;
			link.page = i;

			// Add it to our item array.
			links.push(link);
		}
	}

	// Add previous items and current.
	// Check if current is not covered by first step. We jump if current is 1.
	if (current + midSize > endSize && current != 1) {
		// Add ... separator when required.
		if (current - midSize > endSize + 1) {
			links.push({
				link: false,
				label: "...",
				current: false,
				page: false
			});
		}

		// Loop to build previous items.
		for (let i = current - midSize; i < current; i++) {
			// Skip if this is already covered by first step.
			if (i <= endSize) {
				continue;
			}

			let link = {};

			// If it's same as current, return as current item.
			if (i == current) {
				link.link = false;
				link.current = true;
			}
			// else, it's an usual link.
			else {
				link.link = true;
				link.current = false;
			}

			// Add label and page.
			link.label = i;
			link.page = i;

			// Add it to our item array.
			links.push(link);
		}
	}

	// Add next items (without current).
	for (let i = current; i <= current + midSize; i++) {
		// if i is the first item, skip it because was displayed at previous step;
		if (i == 1) {
			continue;
		}

		// stops when it will overlap the end of pagination.
		if (i >= pages) {
			break;
		}

		let link = {};

		// If it's same as current, return as current item.
		if (i == current) {
			link.link = false;
			link.current = true;
		}
		// else, it's an usual link.
		else {
			link.link = true;
			link.current = false;
		}

		// Add label and page.
		link.label = i;
		link.page = i;

		// Add it to our item array.
		links.push(link);
	}

	// Add separator if required...
	if (current + midSize < pages - endSize) {
		links.push({
			link: false,
			label: "...",
			current: false,
			page: false
		});
	}

	// Display final items. based on endSize.
	if (endSize > 0) {
		// Display all final items.
		for (let i = pages - endSize + 1; i <= pages; i++) {
			let link = {};

			// If it's same as current, return as current item.
			if (i == current) {
				link.link = false;
				link.current = true;
			}
			// else, it's an usual link.
			else {
				link.link = true;
				link.current = false;
			}

			// Add label and page.
			link.label = i;
			link.page = i;

			// Add it to our item array.
			links.push(link);
		}
	}

	// Return final result.
	return links;
}

export default paginateLinks;
