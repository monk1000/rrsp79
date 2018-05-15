

	var horizontalMenu = document.getElementById('horizontalmenu');
	var frontButtons = document.getElementsByClassName("btn");
	var menuIconBtn = document.getElementsByClassName("menuicon");

	var contentCrew = document.getElementById('contentcrew');
	var contentFunds = document.getElementById('contentfunds');
	var contentDownload = document.getElementById('contentdownload');
	var contentContact = document.getElementById('contentcontact');

	var crewHorizontalMenuBtn = document.getElementById('menuiconcrew');
	var fundsHorizontalMenuBtn = document.getElementById('menuiconfunds');
	var downloadHorizontalMenuBtn = document.getElementById('menuicondownload');
	var contactHorizontalMenuBtn = document.getElementById('menuiconcontact');

	var crewBtnClick = crewHorizontalMenuBtn.addEventListener('click' , crewBtnClicked);
	var fundsBtnClick = fundsHorizontalMenuBtn.addEventListener('click' , fundsBtnClicked);
	var downloadBtnClick = downloadHorizontalMenuBtn.addEventListener('click' , downloadBtnClicked);
	var contactBtnClick = contactHorizontalMenuBtn.addEventListener('click' , contactBtnClicked);

		function showHorizontalMenu() {
			horizontalMenu.style.top = '20vh';
		}

			for (var i = 0 ; i < frontButtons.length ; i++) {
		 	frontButtons[i].addEventListener('click' , showHorizontalMenu );
		 	frontButtons[0].addEventListener('click' , crewBtnClicked );
		 	frontButtons[1].addEventListener('click' , crewBtnClicked );
		 	frontButtons[2].addEventListener('click' , crewBtnClicked );
		 	frontButtons[3].addEventListener('click' , fundsBtnClicked );
		 	frontButtons[4].addEventListener('click' , crewBtnClicked );
		 	frontButtons[5].addEventListener('click' , downloadBtnClicked );
		 	frontButtons[6].addEventListener('click' , contactBtnClicked );
			}

		function hideMenu() {
			var menu = document.getElementById('menu');
			var mainmenu = document.getElementById('mainmenu');
			
			menu.classList.add('fadeout');

			setTimeout(function() {
				menu.style.display = '';
				menu.style.display = 'none';
				mainmenu.style.margin = '';
				mainmenu.style.margin = '0';
			}, 200);
		}

			for (var i = 0 ; i < frontButtons.length ; i++) {
		 		frontButtons[i].addEventListener('click' , hideMenu );
			}

			// Horizontal Menu Menagment
		
			function crewBtnClicked() {
				contentCrew.style.display = '';
				contentCrew.style.display = 'flex';
				contentFunds.style.display = '';
				contentFunds.style.display = 'none';
				contentDownload.style.display = '';
				contentDownload.style.display = 'none';	
				contentContact.style.display = '';
				contentContact.style.display = 'none';				
			}
			contentCrew.classList.add('fadein');
			crewBtnClick;

			function fundsBtnClicked() {
				contentCrew.style.display = '';
				contentCrew.style.display = 'none';
				contentFunds.style.display = '';
				contentFunds.style.display = 'flex';
				contentDownload.style.display = '';
				contentDownload.style.display = 'none';
				contentContact.style.display = '';
				contentContact.style.display = 'none';					
			}
			contentFunds.classList.add('fadein');
			fundsBtnClick;

			function downloadBtnClicked() {
				contentCrew.style.display = '';
				contentCrew.style.display = 'none';
				contentFunds.style.display = '';
				contentFunds.style.display = 'none';
				contentDownload.style.display = '';
				contentDownload.style.display = 'flex';
				contentContact.style.display = '';
				contentContact.style.display = 'none';					
			}
			contentDownload.classList.add('fadein');
			downloadBtnClick;

			function contactBtnClicked() {
				contentCrew.style.display = '';
				contentCrew.style.display = 'none';
				contentFunds.style.display = '';
				contentFunds.style.display = 'none';
				contentDownload.style.display = '';
				contentDownload.style.display = 'none';
				contentContact.style.display = '';
				contentContact.style.display = 'flex';					
			}
			contentContact.classList.add('fadein');
			contactBtnClick;

			var phoneRes = window.matchMedia("(max-width: 480px)");
			var tabletRes = window.matchMedia("(min-width: 481px)");
			var hamburgerBtn = document.getElementById('hamburgerbtn');
	

		function phoneScreen(phoneRes, tabletRes) {
		    if (phoneRes.matches ^ tabletRes.matches) { // If media query matches
		        function rollupHorizontalMenu() {
						if (horizontalMenu.style.display === "none" || horizontalMenu.style.display == '') {
							horizontalMenu.classList.add('fadein');
							horizontalMenu.style.display = "flex";
						} else {
							horizontalMenu.style.display = "none";
							horizontalMenu.classList.add('fadeout');
						}
				}
		
		// function tabletScreen(tabletRes) {
		//     if (tabletRes.matches || ) { // If media query matches
		//         function rollupHorizontalMenu() {
		// 				if (horizontalMenu.style.display === "none" || horizontalMenu.style.display == '') {
		// 					horizontalMenu.classList.add('fadein');
		// 					horizontalMenu.style.display = "flex";
		// 				} else {
		// 					horizontalMenu.style.display = "none";
		// 					horizontalMenu.classList.add('fadeout');
		// 				}
		// 		}

					hamburgerBtn.addEventListener('click' , rollupHorizontalMenu );

					for (var i = 0 ; i < menuIconBtn.length ; i++) {
				 		menuIconBtn[i].addEventListener('click' , rollupHorizontalMenu );
				 		menuIconBtn[0].addEventListener('click' , crewBtnClicked );
				 		menuIconBtn[1].addEventListener('click' , crewBtnClicked );
					 	menuIconBtn[2].addEventListener('click' , crewBtnClicked );
					 	menuIconBtn[3].addEventListener('click' , fundsBtnClicked );
					 	menuIconBtn[4].addEventListener('click' , crewBtnClicked );
					 	menuIconBtn[5].addEventListener('click' , downloadBtnClicked );
					 	menuIconBtn[6].addEventListener('click' , contactBtnClicked );
					}			
		    } 
		}


		phoneScreen(phoneRes, tabletRes); // Call listener function at run time
		