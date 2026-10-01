document.addEventListener('DOMContentLoaded', () => {
	const accordions = document.querySelectorAll('.accordion');

	accordions.forEach(accordion => {
		const toggle = accordion.querySelector('.accordion-control');
		const content = accordion.querySelector('.accordion-content');

		toggle.addEventListener('click', () => {
			const isOpen = accordion.classList.contains('open');

			accordions.forEach(otherAccordion => {
				if (otherAccordion !== accordion) {
					otherAccordion.classList.remove('open');
					otherAccordion.setAttribute('aria-expanded', 'false');
					const otherContent = otherAccordion.querySelector('.accordion-content');
					otherContent.setAttribute('aria-hidden', 'true');
					otherContent.style.maxHeight = null;
				}
			});

			accordion.classList.toggle('open');
			accordion.setAttribute('aria-expanded', String(!isOpen));
			content.setAttribute('aria-hidden', String(isOpen));
			content.style.maxHeight = isOpen ? null : content.scrollHeight + 'px';
		});
	});
});