

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

			frontButtons[1].addEventListener('click' , crewBtnClicked );
			
			

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
			

			