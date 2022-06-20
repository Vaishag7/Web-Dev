console.log('This is a library website')


function Book(name, author, type){
    this.name = name; 
    this.author = author; 
    this.type = type;  
}
//book has to be displayed
function Display(){

} 

//add methods to display prototype
Display.prototype.add = function (book){
    console.log('Adding to UI')
    tablebody = document.getElementById('tablebody')
    let uistring = `
                    <tr>
                        
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`;
    tablebody.innerHTML += uistring
    
} ; 


Display.prototype.clear = function(){
    let libraryform = document.getElementById('libraryForm') ; 
    libraryform.reset() ;    

} 
Display.prototype.validate = function(book){
    if(book.name.length<2 || book.author.length<2){
        return false
    }
    else{
        return true;
    }
}

Display.prototype.show = function(type,message){
    let message = document.getElementById('message') ; 
    message.innerHTML = `
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div> `
}

//add submitevent listener 
let libraryform = document.getElementById('libraryForm') ; 
libraryform.addEventListener('submit', libraryformsubmit) ; 

function libraryformsubmit(e){
    console.log('You have submitted the form') ; 
    
    let name = document.getElementById('name').value ; 
    let author = document.getElementById('author').value ; 

    let science = document.getElementById("science") ; 
    let maths = document.getElementById("maths") ; 
    let biographies = document.getElementById("biographies") ; 
    let type ; 
    if(science.checked){
        type = science.value ;
    }
    else if(maths.checked){
        type = maths.value;
    }
    else if(biographies.checked){
        type = biographies.value;
    }

    let book = new Book(name, author, type); 
    let display = new Display() ; 
    if (display.validate(book)){
        display.add(book) ; 
        display.clear() ; 
        display.show('success');
    }
    else{
        display.show('error')
    }
    
    
    console.log(book) ; 
    e.preventDefault() ; 
}
