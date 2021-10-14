

document.addEventListener("DOMContentLoaded", ()=>{
    const form = document.getElementById('github-form')
    form.addEventListener('submit', (e)=>formSubmit(e))

    })
function formSubmit(e){
        e.preventDefault();
        const userList=document.querySelector("#user-list")
        userList.innerHTML='';
        fetch(`https://api.github.com/search/users?q=${e.target[0].value}`, {
        method:"GET",
        headers:{
            "Accept": "application/vnd.github.v3+json"
        }
    }
    )
    .then(response => response.json())
    .then(response=> response.items.forEach(item =>displayUser(item)))
}
function displayUser(user){
    const userList = document.querySelector("#user-list")
    const li= document.createElement("li")
    const image = document.createElement("img");
    
    
    image.src = user.avatar_url
    const h3 = document.createElement("h3")
    h3.textContent = user.login
    
    h3.addEventListener("click", (event)=>displayRespositories(event))
    li.append(image, h3)
    userList.append(li)
    }


function displayRespositories(event){
    const userList = document.querySelector("#user-list")
    userList.innerHTML = ""
    event.preventDefault()
    
    
    //const reposList = document.getElementById('repos-list')
    fetch(`https://api.github.com/users/octocat/repos${event.target.textContent}/repos`, {
        method:"GET", 
        headers: {
            "Accept":"application/vnd.github.v3+json"
        }
    })
    .then(response => response.json())
    .then(response=>response.items.forEach(repo=>displayRespo(repo)))
}

function displayRespo(){
    const reposList = document.getElementById('repos-list')
    const li = document.createElement('li')
    li.textContent = repo.name
    reposList.append(li)
}