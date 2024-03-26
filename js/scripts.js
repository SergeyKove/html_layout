
$ (document).ready(function(){

	let menuField = $('#js-menuField');
	let menuFieldSlideButton = $('#js-slideMenu-button');

	menuFieldSlideButton.on('click', function(){
		menuField.slideToggle('slow');
	});
});
// $ (document).ready(function(){

// 	let emptyFieldElem = $('#js-deals-empty');
// 	let nameFieldElem = $('#js-name');
// 	let descriptionFieldElem = $('#js-description');

// 	let inputFormElem = $('#js-input-form');
// 	let uListDealElem = $('#js-list');

// 	inputFormElem.submit(function( event ) {
// 		event.preventDefault();
// 		let id = `f${(~~(Math.random()*1e8)).toString(16)}`; //генерим ИД

// 		let listDeal = 
// 			$(`
// 				<li class="deal js-deal js-deal_count">
// 					<article class="js-deal-article">
// 						<header class="deal-header">
// 							<h3 class="deal-list-heading">${nameFieldElem.val()}</h3>
// 							<button 
// 								class="remove-button js-remove-button" 
// 								type = "button" 
// 								aria-label="Удалить дело">
// 							</button>

// 							<button 
// 								class="slide-button js-slide-button" 
// 								type="button" aria-label="Свернуть описание дела" 
// 								aria-expanded="true"
// 								aria-controls="${id}">
// 							</button>
// 						</header>
// 						<p id="${id}" class="content js-content">${descriptionFieldElem.val()}</p>
// 					</article>
// 				</li>`);

// 		emptyFieldElem.hide(1500);

// 		listDeal.appendTo(uListDealElem);

//   		this.reset();
// 	});	

// //кнопка удаления
// 	uListDealElem.on('click','.js-remove-button', function(){
// 		$(this).parents(".js-deal").remove();
// 		if(!$(".js-deal").length){
// 			emptyFieldElem.show(1000);
// 		}
// 	});

// //кнопка сворачивания
// 	uListDealElem.on('click','.js-slide-button', function(){
// 		if ($(this).attr('aria-expanded') == 'true') {
// 			$(this).parents(".js-deal-article").find(".js-content").slideToggle("slow");

// 			// $(this).addClass("hiddenParagrath");
// 			$(this).toggleClass("hiddenParagrath");
// 			// $(this).parent().toggleClass("hiddenBorder");

// 			$(this).attr({'aria-label' : 'Развернуть описание дела', 'aria-expanded' : 'false'});
//         }
//         else {
// 			$(this).parents(".js-deal-article").find(".js-content").slideToggle("slow");

// 			$(this).toggleClass("hiddenParagrath");
// 			// $(this).parent().toggleClass("hiddenBorder");

// 			$(this).attr({'aria-label' : 'Свернуть описание дела', 'aria-expanded' : 'true'});
//         }
// 	});
// });