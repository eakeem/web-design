 function ClearForm(){
           // document.getElementById("Fullname").value='';
           // document.getElementById("email").value='';
            //document.getElementById("inquiry").value='';
            document.getElementById("contactform").reset();


        }
         function hideptags(){
        let ptags= document.getElementsByTagName('p')
        for(let item of ptags){
           // item.style.visibility = 'hidden';//removes element, leaves space
            item.style.display = 'none';//removes elements and space
        }
    }
    $('#jquerybtn').click(function(){
        $('p').hide();
    })