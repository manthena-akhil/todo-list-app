let addbtn = document.querySelector(".add-btn");
let input = document.querySelector("input");
let tasklist = document.querySelector("ul")
addbtn.addEventListener( "click", function(){
    let tasktext = input.value;
    if(tasktext ===""){
        alert("Please enter the valid text");
        return;
    }
    let li = document.createElement("li");
    li.innerText = tasktext;
    input.value = "";
    
    let btn = document.createElement("button");
    btn.innerHTML ='<i class="fa-solid fa-trash"></i>';
    btn.classList.add("del-btn");
    li.append(btn);
    
    btn.addEventListener("click", function(){
        li.remove();
    })
    tasklist.append(li);

});