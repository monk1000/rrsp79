

	var newsButton = document.getElementById('news');
	var crewButton = document.getElementById('crew');
	var projectsButton = document.getElementById('projects');
	var fundsButton = document.getElementById('funds');
	var insuranceButton = document.getElementById('insurance');
	var downloadButton = document.getElementById('download');
	var contactButton = document.getElementById('contact');
	var showBackground = document.getElementById('contentbackground');
	var showVerticalMenu = document.getElementById('verticalmenu');
	
		function showBackgroundContent() {
			showBackground.style.left = '10%';
			showVerticalMenu.style.left = '0';
		}

		newsButton.addEventListener('click', showBackgroundContent);
		crewButton.addEventListener('click', showBackgroundContent);
		projectsButton.addEventListener('click', showBackgroundContent);
		fundsButton.addEventListener('click', showBackgroundContent);
		insuranceButton.addEventListener('click', showBackgroundContent);
		downloadButton.addEventListener('click', showBackgroundContent);
		contactButton.addEventListener('click', showBackgroundContent);


