 let string="";
 
let buttons=document.querySelectorAll(".btn");
buttons.forEach((button)=>{
button.addEventListener("click",(ev)=>{
    if(ev.target.innerHTML=="="){
        string=eval(string);
         document.querySelector("#varsh").value=string;

    }
    else if(ev.target.innerHTML=="AC"){
        string="";
         document.querySelector("#varsh").value=string; 
    }

    
    else{
       
    string=string + ev.target.innerHTML;
    document.querySelector("#varsh").value=string; 
    }
    


})


})


