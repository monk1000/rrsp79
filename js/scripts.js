

	var horizontalMenu = document.getElementById('horizontalmenu');
	var frontButtons = document.getElementsByClassName("btn");
	var menuIconBtn = document.getElementsByClassName("menuicon");
	var contentSection = document.getElementById('contentbackground');

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
			}, 400);

		}

			for (var i = 0 ; i < frontButtons.length ; i++) {
		 	frontButtons[i].addEventListener('click' , hideMenu );
			}
			