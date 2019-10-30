function shoppingListItems() {
  $("#js-shopping-list-form").submit(function(event) {
    event.preventDefault();
    let userInput = $("#shopping-list-entry").val();
    console.log("user input = " + userInput);
    $('.shopping-list').append(addNewItem(userInput));

    $("input#shopping-list-entry").val(" ");
  });

}

function addNewItem(userInput){
    return `<li><span class="shopping-item">${userInput}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`
  };

  function deleteListItem(){
	$('.shopping-list').on('click', '.shopping-item-delete', function(event){
		event.preventDefault();
		$(event.currentTarget).closest('li').remove();
	})
}

function markAsChecked(){
	$('.shopping-list').on('click', '.shopping-item-toggle', function(event){
		event.preventDefault();
		$(event.currentTarget).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');

	})
}

  shoppingListItems();
  deleteListItem();
  markAsChecked()

