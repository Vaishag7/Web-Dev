//f7468441714f4a8ba02e0c1c94056abe
console.log('Hii')
let api = 'f7468441714f4a8ba02e0c1c94056abe'
let newsAccordion = document.getElementById('newsAccordion') ; 



let xhr = new XMLHttpRequest() ; 
xhr.open('GET', 'https://newsapi.org/v2/top-headlines?country=us&apiKey=f7468441714f4a8ba02e0c1c94056abe', true)
xhr.onload = function(){
    let obj = JSON.parse(this.responseText) ; 
    if(this.status==200){
        //console.log(obj) ;
        let articles = obj.articles ; 
        console.log(articles) 
        let newsHTML = "" ; 
        articles.forEach(function(element, index){
            //console.log(element, index)
            
            let news = `<div class="accordion" id="newsAccordion">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="heading${index}">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                            <b>Breaking News${index+1}: </b> ${element['title']}
                        </button>
                    </h2>
                    <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent="#newsAccordion">
                        <div class="accordion-body">
                            ${element['content']}. <a href="${element['url']}" target= "_blank">Read more here</a>
                        </div>
                    </div>
                </div>
            </div>`
            newsHTML+= news;

        }); 
        newsAccordion.innerHTML = newsHTML; 
            //console.log(articles[news])
        }
    
    else{
        console.log('Some error occured')
    }
}

    xhr.send()