let burger = document.querySelector('.helloSpan'),
	sidebar = document.querySelector('.sidebar')


burger.addEventListener('click', () => {
	sidebar.classList.toggle('active')
	burger.classList.toggle('active')
})