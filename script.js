function print(){
    for(var i=0; i <arguments.length; i++){
        console.log(arguments[i]+" ");
    }
}

window.onload = function(){
    var count = 3;


//  generating random num (1000 to 9999)

    var randomBtn = document.getElementById("generate-random-number");
    randomBtn.addEventListener("click",function(){
        var randomNumber = Math.floor(Math.random() * (9999 - 1000 + 1) ) + 1000;
        document.getElementById("random-number-input").value = randomNumber;
        document.getElementById("random-number-submit").value = "";
        hideNotify();
    })


// entering the number

    var btnClass = document.getElementsByClassName("button");
    for(var i=0; i<btnClass.length; i++){
        btnClass[i].addEventListener("click",function(){
            var txt = this.innerText;
            
            if(txt>="0" && txt<="9"){
                document.getElementById("random-number-submit").value += txt;
            }
            else if(txt == "<"){
                var newNumber = document.getElementById("random-number-submit").value.slice(0, -1);
                document.getElementById("random-number-submit").value = newNumber;
            }
            else if(txt == "C"){
                document.getElementById("random-number-submit").value = "";
            }
            else{
              
            }
            print(document.getElementById("random-number-submit").value);
            hideNotify();
        })
    }

// submit btn action

    var submitBtn = document.getElementById("id-submit");
    submitBtn.addEventListener("click",function(){
        hideNotify()
        count--;
        var originalValue = document.getElementById("random-number-input").value;
        var submitValue = document.getElementById("random-number-submit").value;
        
        if(originalValue =="" || submitValue==""){
            notify("empty")
        }
        else if( submitValue == originalValue){
            notify("right");
            count=3;
        }else{
            notify("wrong")
        }
        
        if(count>=0){
            document.getElementById("id-left").innerText = count+" try left";
        }
        
    })


    function notify(id){
        var id = document.getElementById(id);
        id.style.display = "block";
    }

    function hideNotify(){
        var notify = document.querySelectorAll(".notify-section .notify");
        notify.forEach( (item) => { item.style.display = "none"; } )
    }
}
