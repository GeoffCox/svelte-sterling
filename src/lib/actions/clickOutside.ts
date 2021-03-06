export const clickOutside = (node: HTMLElement) => {
	const handleClick = (event: MouseEvent) => {
		const targetNode = event?.target as Node;
		if (targetNode && !node.contains(targetNode)) {
			node.dispatchEvent(new CustomEvent('click_outside'));
		}
	};

	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	};
};
