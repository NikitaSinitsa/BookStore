// function bookstore (){
//    const shelf = {
        // name: '',
        // edition: '',
        // author: '',
        // price: '',
        // language: ''
// 
//    }
//    
// }
// --------------------------------------------------------------------------------------------------------------------------------------------------------------
// function create(){
    // let forma = document.createElement('div');
// 
    // for(let i =0;i<4;i++){
        // let lableForm = document.createElement('lable');
        // lableForm.className = 'name'+i;
        // let paragraph = document.createElement('br');
        // let inputForm = document.createElement('input');
        // inputForm.className = 'Name'+i
        // forma.append(lableForm,paragraph,inputForm,paragraph)
// 
        // for (let j =0; j<4; j++){
// 
        // }
    // }
    // document.body.append(forma)
// }
// 
// create();
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------

function newsPapar (){
    let nameNewsPaper = prompt("Enter name of NewsPaper: ");
    let editionNewsPaper = prompt("Enter edition of NewsPaper: ");
    let priceNewsPaper = prompt("Enter price NewsPaper: ");
    let languageNewsPaper = prompt("Enter language of NewsPaper: ")
 
} 

function book (){
    let nameBook = prompt("Enter name of Book: ");
    let authorBook = prompt("Enter author of Book: ");
    let languageBook = prompt("Enter language of Book: ")
    let priceBook = prompt("Enter price Book: ");
}

function magazine(){
    let namemMgazine = prompt("Enter name of Magazine: ");
    let editionMagazine = prompt("Enter edition of Magazine: ");
    let priceMagazine = prompt("Enter price Magazine: ");
    let languageMagazine = prompt("Enter language of Magazine: ")
}

function createNewsButton(){
    let button = document.createElement('button')
    button.innerText = "Create a NewsPaper";
    button.id = "newsPaper";
    button.onclick = function() {newsPapar()};

    document.body.append(button)
}

function createBookButton(){
    let button = document.createElement('button')
    button.innerText = "Create a Book";
    button.id = "book";
    button.onclick = function() {book()};
    document.body.append(button)
 }

 function createMagazineButton(){
    let button = document.createElement('button')
    button.innerText = "Create a Magazine";
    button.id = "magazine";
    button.onclick = function() {magazine()};
    document.body.append(button)
 }

 function paragraph(){
     let paragraph = document.createElement('br');
     document.body.append(paragraph)
 }

createNewsButton(); paragraph(); createMagazineButton(); paragraph(); createBookButton(); paragraph();

function displayNewsPaper(){
    let newsPapersShelf = document.createElement('table');
    let trNewsPapers = document.createElement('tr');
    let tdNewsPapers = document.createElement('td');
    tdNewsPapers.innerHTML = 'NewsPapers'

    document.body.append(newsPapersShelf)
    newsPapersShelf.append(trNewsPapers)
    trNewsPapers.append(tdNewsPapers)

    let trNewsPapersData = document.createElement('tr')

    for (let i=0; i<4; i++){
        let newsPaperData = document.createElement('td');
        if(i=0){
            newsPaperData.innerText = nameNewsPaper;
        } else if(i=1){
            newsPaperData.innerHTML = editionNewsPaper;
        } else if(i=2){
            newsPaperData.innerText = priceNewsPaper;
        } else{
            newsPaperData.innerText = languageNewsPaper;
        }
        trNewsPapersData.append(newsPaperData)
    }

}

function displayBook(){
    let bookShelf = document.createElement('table');
    let trBook = document.createElement('tr');
    let tdBook = document.createElement('td');
    tdBook.innerHTML = 'Books'

    document.body.append(bookShelf)
    bookShelf.append(trBook)
    trBook.append(tdBook)

}

function displayMagazine(){
    let magazineShelf = document.createElement('table');
    let trMagazine = document.createElement('tr');
    let tdMagazine = document.createElement('td');
    tdMagazine.innerHTML = 'Magazine'

    document.body.append(magazineShelf)
    magazineShelf.append(trMagazine)
    trMagazine.append(tdMagazine)
    
}


displayNewsPaper(); displayBook(); displayMagazine();



















