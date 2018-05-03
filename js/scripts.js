

	var horizontalMenu = document.getElementById('horizontalmenu');
	var frontButtons = document.getElementsByClassName("btn");
	var menuIconBtn = document.getElementsByClassName("menuicon");
	var contentCrew = document.getElementById('contentcrew');
	var contentFunds = document.getElementById('contentfunds');
	var crewHorizontalMenuBtn = document.getElementById('menuiconcrew');
	var fundsHorizontalMenuBtn = document.getElementById('menuiconfunds');
	var crewBtnClick = crewHorizontalMenuBtn.addEventListener('click' , crewBtnClicked);
	var fundsBtnClick = fundsHorizontalMenuBtn.addEventListener('click' , fundsBtnClicked);

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
			}, 300);
		}

			for (var i = 0 ; i < frontButtons.length ; i++) {
		 		frontButtons[i].addEventListener('click' , hideMenu );

			}

			// Horizontal Menu Menagment
		
			

			function crewBtnClicked() {
				contentFunds.style.display = ''
				contentFunds.style.display = 'none';
				contentCrew.style.display = '';
				contentCrew.style.display = 'flex';					
			}
			contentCrew.classList.add('fadein');
			crewBtnClick;

			function fundsBtnClicked() {
				contentCrew.style.display = ''
				contentCrew.style.display = 'none';
				contentFunds.style.display = '';
				contentFunds.style.display = 'flex';					
			}

			contentFunds.classList.add('fadein');
			fundsBtnClick;
