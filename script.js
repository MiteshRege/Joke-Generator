/*
NOTE  ::  INFORMATION ABOUT THE PROJECT=> 
chucknorris.io is a free JSON API for hand curated Chuck Norris facts.
url : 
Retrieve a random chuck joke in JSON format.
get https://api.chucknorris.io/jokes/random
Example response:

{
"icon_url" : "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
"id" : "V6kxJarVQ0C6UJbu8piAYQ",
"url" : "",
"value" : "yea whatever colten you would know Chuck Norris thing looks like wouldnt ya"
}
*/

const joke_elem  = document.getElementById("joke");
const jokeBtn = document.getElementById("joke-btn");
const xhr = new XMLHttpRequest();


const gettingJoke = ()=>{
    xhr.open('GET','https://api.chucknorris.io/jokes/random');
    xhr.onreadystatechange = function(){
        // console.log(this.status,this.readyState);
        if (this.readyState==4){
            if(this.status==200){
                // console.log(this.responseText);
                joke_elem.innerText=JSON.parse(this.responseText).value;
            }else{
                joke_elem.innerText="Something Went Wrong (Not Funny!!)";
            }
        }
        
    };

    xhr.send();

};

// Event Listeners
jokeBtn.addEventListener("click",gettingJoke);
document.addEventListener("DOMContentLoaded",gettingJoke);

