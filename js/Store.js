let arrayOfFavorite;
let arrayOfCart;
let arrayOfCosts;
let totalCost;
let quantity;
if (!localStorage.arrayOfFavorite || !localStorage.arrayOfCart || !localStorage.arrayOfCosts) {
	arrayOfFavorite = []
	arrayOfCart = []
	arrayOfCosts = []
	totalCost = 0
	quantity = 0
} else {
	arrayOfFavorite = JSON.parse(localStorage.getItem('arrayOfFavorite'))
	arrayOfCart = JSON.parse(localStorage.getItem('arrayOfCart'))
	arrayOfCosts = JSON.parse(localStorage.getItem('arrayOfCosts'))
	totalCost = JSON.parse(localStorage.getItem('totalCost'))
	quantity = JSON.parse(localStorage.getItem('quantity'))
}

const saveInLocalF = () => {
	localStorage.setItem('arrayOfFavorite', JSON.stringify(arrayOfFavorite))
}
const saveInLocalC = () => {
	localStorage.setItem('arrayOfCart', JSON.stringify(arrayOfCart))
	localStorage.setItem('arrayOfCosts', JSON.stringify(arrayOfCosts))
	localStorage.setItem('totalCost', JSON.stringify(totalCost))
	localStorage.setItem('quantity', JSON.stringify(quantity))
	document.getElementById('totalCost').innerHTML = 'Total Cost:'+ String(totalCost) + '$'
	document.getElementById('quantity').innerHTML = 'Quantity of goods:' + String(localStorage.quantity)
}
const changeHeart = () => {
	document.querySelectorAll('.heart-to-favorite').forEach((item) => {
  		if (arrayOfFavorite.indexOf(item.id) !=-1) {
  			document.getElementById(item.id).style.background = "url('../img/Heart-in-cart-1.png')"
  		} else {
  			document.getElementById(item.id).style.background = "url('../img/Heart-in-cart.png')"
  		}
	})
}

const toFavorite = (clicked_id) => {
	if (arrayOfFavorite.indexOf(clicked_id) === -1) {
		arrayOfFavorite.push(clicked_id)
		document.getElementById(clicked_id).style.background = "url('../img/Heart-in-cart-1.png')"
		saveInLocalF()
	} else {
		arrayOfFavorite.splice(arrayOfFavorite.indexOf(clicked_id),1)
		document.getElementById(clicked_id).style.background = "url('../img/Heart-in-cart.png')"
		saveInLocalF()
	}
}

const toCart = (clicked_id) => {
	if (arrayOfCart.indexOf(clicked_id) === -1) {
		arrayOfCart.push(clicked_id)
		let Costs = {
			name: document.getElementById(clicked_id+'-name').innerHTML,
			price: Number(document.getElementById(clicked_id+'-name-price').innerHTML.slice(1)),
			count: 1,
			totalCount: Number(document.getElementById(clicked_id+'-name-price').innerHTML.slice(1))
			}
		arrayOfCosts[clicked_id] = Costs
		totalCost = Number(document.getElementById('totalCost').innerHTML.slice(11,-1))+Number(document.getElementById(clicked_id+'-name-price').innerHTML.slice(1))
		quantity +=1
		FillCart()
		saveInLocalC()
	} else {
		alert('Этот продукт уже добавлен в корзину')
	}
}

const createHTMLforPost = (id) => {
	return ` 
		<div class="minProduct" id = "${id+'min'}">
			<img src="img/image-${id[0]}.png" alt="">
			<p class = "minName-of-product" >${document.getElementById(id[0]+'-name').innerHTML}</p>
			<p class = "minPrice" >${document.getElementById(id[0]+'-name-price').innerHTML}</p>
			<div class="delete-element" id = "${id+'del'}" onclick = "DeletePost('${id+'del'}')">X</div>
		</div>
	`
}
const createHTMLforCart = (id) => {
	return ` 
		<div class="productInCart" id = "${id+'c'}">
			<img src="img/image-${id}.png" alt="">
			<p class="productInCart-name">${document.getElementById(id+'-name').innerHTML}</p>
			<p class="productInCart-price">${arrayOfCosts[id].price}$</p>
			<div class="productInCart-qounter">	
				<button id = "reduce" onclick = "toReduce('${id}')" class="productInCart-btn-delete">-</button>
				<p id = "${id+'-quantity'}" class="productInCart-quantity">${arrayOfCosts[id].count}</p>
				<button id = "enlarge" onclick = "toEnlarge('${id}')" class="productInCart-btn-add">+</button>
			</div>
			<div class="productInCart-totalCost">${arrayOfCosts[id].price*arrayOfCosts[id].count}$</div>
			<div id = "${id+'-cart'}" onclick = "DeleteCart('${id+'-cart'}')" class="productInCart-delete">X</div>
		</div>
	`
}

const FillPost = () => {
	document.querySelector('.elementS').innerHTML = ''
	if (arrayOfFavorite.length > 0) {
		arrayOfFavorite.forEach((item) => {
		 	document.querySelector('.elementS').innerHTML += createHTMLforPost(item) 
		})
	}
	saveInLocalF()
}
const FillCart = () => {
	
	document.querySelector('.elementsInCart').innerHTML = ''
	saveInLocalC()
	arrayOfCart.forEach((item) => {
		document.querySelector('.elementsInCart').innerHTML += createHTMLforCart(item)
		saveInLocalC()
	}) 
}
const toEnlarge = (id) => {
	arrayOfCosts[id].count +=1
	arrayOfCosts[id].totalCount += arrayOfCosts[id].price
	totalCost += arrayOfCosts[id].price
	quantity +=1
	FillCart()
	saveInLocalC()

}
const toReduce = (id) => {
	if (arrayOfCosts[id].count>1) {
		arrayOfCosts[id].count -=1
		arrayOfCosts[id].totalCount -= arrayOfCosts[id].price
		totalCost -= arrayOfCosts[id].price
		quantity -=1
		FillCart()
		saveInLocalC()
	}

}
const DeletePost = (idi) => {
	document.getElementById(idi.slice(0,2)+'min').classList.add('disappearance')
	setTimeout(() => {
		arrayOfFavorite.splice(arrayOfFavorite.indexOf(idi.slice(0,2)),1) 
		document.getElementById(idi.slice(0,2)+'min').classList.add('disappearance')
		saveInLocalF()
		FillPost()
		changeHeart()	 
	}, 700)
}
const DeleteCart = (idi) => {
	document.getElementById(idi.slice(0,1)+'c').classList.add('disappearance')
	setTimeout(() => {
		arrayOfCart.splice(arrayOfCart.indexOf(idi[0]),1)
		quantity-=arrayOfCosts[idi[0]].count
		totalCost = totalCost - arrayOfCosts[idi[0]].totalCount
		delete arrayOfCosts[idi[0]]
		document.getElementById(idi.slice(0,1)+'c').classList.add('disappearance')
		saveInLocalC()
		FillCart()
	},700)
}

$('.favorites').click(() => {
	$('main').css('filter','blur(5px)');
	$('.overplay').fadeIn();
	FillPost()
})
$('.close-popup').click(() => {
	$('.overplay').fadeOut();
	$('main').css('filter','none')
})
$('.cart').click(() => {
	$('main').css('filter','blur(5px)');
	$('.overplay-2').fadeIn();
	FillCart()
})
$('.close-popup-2').click(() => {
	$('.overplay-2').fadeOut();
	$('main').css('filter','none')
})

changeHeart()