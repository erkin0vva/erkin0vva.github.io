function createDorama(title, director, duration) {
    const dorama = {
        title: title,
        director: director,
        duration: duration
    }

    return dorama; 
}

function averageDuration(doramas) {
    let avgDuration = 0;
    for(let i=0; i<doramas.length; i++) {
        avgDuration += doramas[i].duration;
    }

    avgDuration = avgDuration/doramas.length;

    return avgDuration;
}

let doramas = []
let tempDorama = createDorama("Connect", "Kung Woo Jung", 120);
doramas.push(tempDorama); 

tempDorama = createDorama("Island", "Kun Jeong Peo", 150);
doramas.push(tempDorama); 

let avgDurationOfDoramas = averageDuration(doramas);

// doramas.forEach(element => {
//     const winText = document.createElement(".win-text");
//     let docFragment = document.createDocumentFragment();
//     docFragment.appendChild(winText);


//     const title = document.createElement("p")
//     title.innerHTML = element.title;

//     winText.appendChild(title);
//     // const director = document.createElement("p")
//     // director.innerHTML - element.director;
//     // const duration = document.createElement("p")
//     // director.innerHTML - element.duration;
//     // document.querySelector(".title").innerHTML = element.title;
//     // document.querySelector(".director").innerHTML = element.director;
//     // document.querySelector(".duration").innerHTML = element.duration + " min";
//     document.querySelector(".win-text").appendChild(title);
//     document.querySelector(".win-text").appendChild(director);
//     document.querySelector(".win-text").appendChild(duration);


// });


// const director = document.createElement("p")
// director.innerHTML = element.director;
// const duration = document.createElement("p")
// director.innerHTML = element.duration;
// document.querySelector(".title").innerHTML = doramas[0].title;
// document.querySelector(".director").innerHTML = doramas[0].director;
// document.querySelector(".duration").innerHTML = doramas[0].duration + " min";

// document.querySelector(".title").innerHTML = doramas[1].title;
// document.querySelector(".director").innerHTML = doramas[1].director;
// document.querySelector(".duration").innerHTML = doramas[1].duration + " min";

document.getElementById("title").innerHTML = doramas[0].title;
document.getElementById("director").innerHTML = doramas[0].director;
document.getElementById("duration").innerHTML = doramas[0].duration + " min";

document.getElementById("title1").innerHTML = doramas[1].title;
document.getElementById("director1").innerHTML = doramas[1].director;
document.getElementById("duration1").innerHTML = doramas[1].duration + " min";



