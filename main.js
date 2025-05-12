     let btn =document.getElementById('btn');
     let username = document.getElementById('username');
     let textarea =document.getElementById('textarea');
     let userInfo = document.getElementById('userInfo');
     let img = document.getElementById('img');
     let errorMessage =document.getElementById("error-message")
     btn.addEventListener("click", ()=>{
            if(username.length < 4){
              errorMessage.innerText= 'name must be longer than 4 characters'
            }else if(textarea.length < 6){
                errorMessage.innerText= 'name must be longer than 4 characters'
            }else if(img === '' || img === null){
                errorMessage.innerText= 'name must be longer than 4 characters'
            }
        })

     btn.addEventListener("click", ()=>{
        fetch('https://68219a01259dad2655afc15b.mockapi.io/post', {
            method: 'POST',
            body: JSON.stringify({
                username: username.value,
                textarea: textarea.value,
                img: img.value
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((json) => console.log(json));
     })
  
     
     fetch('https://68219a01259dad2655afc15b.mockapi.io/post')
      .then(response => response.json())
      .then((data) =>{
        data.forEach(element => {
            let text =document.createElement("h4");
            let post = document.createElement("p");
            let img = document.createElement("img");
            let del = document.createElement("button");
            let card = document.createElement("div");
            card.classList.add("card");
            text.innerText=`name is: ${element.username}`
            post.innerText= element.textarea;
            img.src=element.img;
            del.innerText="delete"
            del.classList.add("del-btn")
            card.appendChild(text);
            card.appendChild(post);
            card.appendChild(img);
            card.appendChild(del);
            userInfo.appendChild(card);
   
          del.addEventListener("click", ()=>{
          fetch(`https://68219a01259dad2655afc15b.mockapi.io/post/${element.id}`, {
            method: 'DELETE',
          })
        })
    })
})