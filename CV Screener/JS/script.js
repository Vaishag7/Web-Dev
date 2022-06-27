console.log('CV screener website')
const data = [
    {
        Name: 'John',
        Age: 18,
        Language: 'Python',
        Framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/76.jpg'

    },
    {
        Name: 'Mark',
        Age: 30,
        Language: 'Python',
        Framework: 'PHP',
        image: 'https://randomuser.me/api/portraits/men/77.jpg'

    },
    {
        Name: 'David',
        Age: 25,
        Language: 'c++',
        Framework: 'cframe',
        image: 'https://randomuser.me/api/portraits/men/78.jpg'

    },
    {
        Name: 'Robert',
        Age: 17,
        Language: 'Python',
        Framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/men/79.jpg'

    },
    {
        Name: 'Lori',
        Age: 27,
        Language: 'Javascript',
        Framework: 'NodeJS',
        image: 'https://randomuser.me/api/portraits/women/76.jpg'

    },
    {
        Name: 'Kevin',
        Age: 30,
        Language: 'Javascript',
        Framework: 'VueJS',
        image: 'https://randomuser.me/api/portraits/men/80.jpg'

    }
]

function cvIterator(profiles) {
    let nxtindex = 0;
    return {
        next: function () {
            return nxtindex < profiles.length ?
                { value: profiles[nxtindex++], done: false } :
                { done: true }
        }
    };

}

const candidate = cvIterator(data)
nextcv()
const next = document.getElementById('next')
next.addEventListener('click', nextcv);



function nextcv() {
    const currentcandidate = candidate.next().value;
    let image = document.getElementById('image')
    let profile = document.getElementById('profile')
    if (currentcandidate != undefined) {
        image.innerHTML = `<img src='${currentcandidate.image}'>`
        profile.innerHTML = `<ul class="list-group">
                            <li class="list-group-item">Name: ${currentcandidate.Name}</li>
                            <li class="list-group-item">${currentcandidate.Age} years old</li>
                            <li class="list-group-item">Primarily works on ${currentcandidate.Language}</li>
                            <li class="list-group-item">with ${currentcandidate.Framework} framework</li>
                        </ul>`

    }
    else{
        alert('End of applications')
        window.location.reload()
    }


}
