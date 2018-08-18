// declare your functions here...
function paragraphSelector (){
  var p = $('p')
  return p[0]
}

function lastImageSelector(){
  return $('ul li img:last')
}

function ninjaBabySelector(){
  return $('#baby-ninja')
}

function divSelector(){
  return $('div.pics')
}

function firstListItem(){
  return $('#pic-list li img:first-child')
}
