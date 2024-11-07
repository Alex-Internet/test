let listStudents = [
	{
		name: 'Илья',
		lastname: "Иванов",
		surname: "Олегович",
		birthday: new Date(1994, 5, 12),
		faculty: "Экономика",
		studyStart: 2010,
	},
	{
		name: 'Оля',
		lastname: "Студентова",
		surname: "Александровна",
		birthday: new Date(1991, 11, 18),
		faculty: "Экономика",
		studyStart: 2011,
	},
	{
		name: 'Татьяна',
		lastname: "Иванова",
		surname: "Олеговна",
		birthday: new Date(1997, 4, 1),
		faculty: "Информатика",
		studyStart: 2016,
	}
]
for (const studyObj of listStudents) {
	console.log(studyObj);
};

// // Настраиваем форму поиска
// const formSearch = document.createElement('form');
// formSearch.classList.add('search-header__body');
// // Выводим форму поиска
// document.body.append(formSearch);

// // Настраваем поле вода поиска для формы поиска
// let inputSearch = document.createElement('input');
// inputSearch.classList.add('search-header__input');
// inputSearch.type = 'search';
// inputSearch.value = '';
// inputSearch.name = 'query';
// inputSearch.autocapitalize = 'on';
// inputSearch.autocomplete = 'on';
// inputSearch.placeholder = 'Поиск по наименованию товаров';
// inputSearch.title = 'Поиск по наименованию товаров на сайте';
// // Добавлем в форму поиска поле вода поиска
// formSearch.append(inputSearch);
// // Вешаем функцию на событие input
// inputSearch.oninput = function (e) {
// 	if (inputSearch.value !== '') {
// 		inputSearchClear.classList.add('search-header__input_active');
// 	} else {
// 		inputSearchClear.classList.remove('search-header__input_active');
// 	}
// 	return true;
// }
// // Настраваем кнопку сброса текста в поле вода поиска для формы поиска
// let inputSearchClear = document.createElement('button');
// inputSearchClear.classList.add('search-header__input_clear', '_icon-circle-xmark');
// inputSearchClear.type = 'text';
// inputSearchClear.title = 'Очистить строку поиска';
// // Вешаем функцию на событие click
// inputSearchClear.onclick = function (e) {
// 	if (target.classList.contains('search-header__input_active')) {
// 		inputSearchClear.classList.remove('search-header__input_active');
// 		inputSearch.value = ''
// 	}
// 	return true;
// }
// // Добавлем в форму поиска кнопку сброса текста в поле вода поиска для формы поиска
// formSearch.append(inputSearchClear);

// // Настраваем кнопку поиска для формы поиска
// let buttonSearch = document.createElement('button');
// buttonSearch.classList.add('search-header__button', '_icon-search');
// buttonSearch.type = 'submit';
// buttonSearch.title = 'Найти';
// // Добавлем в форму поиска кнопку поиска
// formSearch.append(buttonSearch);







// // function getStrong(text = '') {
// // 	return `<strong>${text}</strong>`
// // }
// // function printProduct(productName = '', count = 0, price = 0) {
// // 	let totalPrice = count * price
// // 	document.write(`<h3>${getStrong(productName)}</h3><hr>`)
// // 	document.write(`
// // 		<p>
// // 			количество: ${getStrong(count)} шт.,
// // 			цена: ${getStrong(price)} руб.,
// // 			стоимость: ${getStrong(totalPrice)} руб.
// // 		</p>`)
// // 	return totalPrice
// // }

// // let total = 0
// // total = total + printProduct('51205 подшипник ART', 3, 644) // 1932
// // total = total + printProduct('51205 подшипник CRAFT', 2, 314) // 628

// // let counter = 0

// // // Заголовок
// // let title = document.createElement('h1')
// // title.textContent = 'Заголовок страницы'
// // // title.textContent = 'Заголовок новой страницы'

// // // Список
// // let list = document.createElement('ul')
// // counter++
// // let listItem1 = document.createElement('li')
// // listItem1.textContent = `Элемент ${counter}`
// // counter++
// // let listItem2 = document.createElement('li')
// // listItem2.textContent = `Элемент ${counter}`
// // counter++
// // let listItem3 = document.createElement('li')
// // listItem3.textContent = `Элемент ${counter}`
// // list.append(listItem1, listItem2, listItem3)

// // // текстовое поле
// // let formInput = document.createElement('form')
// // let textInput = document.createElement('input')
// // let inputValue = 'aaa'
// // textInput.placeholder = 'Введите имя'
// // textInput.type = 'text'
// // textInput.classList.add("input")

// // // Кнопка
// // let action = document.createElement('button')
// // action.textContent = 'Кнопка'

// // // добавляем событие click на кнопку button
// // action.onclick = function () {
// // 	// let input = textInput.value
// // 	textInput.value = input
// // 	counter++
// // 	console.log(input);
// // 	console.log(counter);
// // 	title.textContent = 'Клик по кнопке'
// // 	title.classList.add("green")
// // 	list.classList.add("listGreen")
// // 	let listItem = document.createElement('li')
// // 	listItem.textContent = `Элемент ${counter}`
// // 	list.append(listItem)
// // }


// // // Вывод
// // // document.body.prepend(title)
// // document.body.append(title)
// // document.body.append(list)
// // document.body.append(formInput)
// // document.body.append(textInput)
// // document.body.append(action)