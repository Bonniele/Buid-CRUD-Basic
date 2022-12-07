let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");
// form valation creating
form.addEventListener("submit",(e) =>{ //can call anything - e like a variable
    e.preventDefault(); //to get a solid click - count the clicks
    console.log("button clicked");
    formValidation();
});
//function - either success or fail
let formValidation =()=>{
    //failed state
    if(input.value ===""){
        window.alert("message can't be blank");
        console.log("fail");

    }else{
        //success
        //msg.innerHTML("Great");
        console.log("success");
        acceptData();

    }
}
//function to collect data
let data ={};
let acceptData=()=>{
    data["text"] = input.value;
    console.log(data);
    createPost();
};
//upload data to Post
let createPost =()=>{
    //template literals to define string - use back-ticks `-allow
    //variable in strings

    posts.innerHTML += `
    <div>
            <p>${data.text}</p>
            <span class="options">
              <i onClick="editPost(this)" class="fas fa-edit"></i>
              <i onClick="deletePost(this)" class="fas fa-trash-alt"></i> 
            </span>
    </div>
    `;
    input.value = ""; //reset the message box - set input to blank
}
//delete function
let deletePost =(e)=>{
    e.parentElement.parentElement.remove(); //call parentElment 2 times to reach to span

}
//edit function- return the text back to chat box to edit
let editPost =(e)=>{
    input.value = e.parentElement.previousElementSibling.innerHTML;//using previousESibling to read to <p>
    e.parentElement.parentElement.remove();

}