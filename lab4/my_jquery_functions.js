$(document).ready(function(){
    //data for province combobox
  $.get("77_Province/allProvince.txt",function(data,status){
            var provinceData = data.split(".txt");
            $.each(provinceData, function(index,value){
            $("#province").append($("<option/>", {
                value: value,
                text: value
            })) ;   
            });
            });
   
});
function loadDoc() {
    //function for load province data
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var img = "<img src='/77_Province/sign/"+$("#province").val()+".png'>";
            document.getElementById("np").innerHTML = $("#province").val();
            document.getElementById("pic").innerHTML = img;
            document.getElementById("demo").innerHTML =this.responseText;
    }
  };
   
  xhttp.open("GET", "/77_Province/motto/"+ $("#province").val() +".txt", true);
  xhttp.send();
}
function cancel() {
    // event of cancel botton
    document.getElementById("myform").reset();
    
}
function submit() {
    // event of submit botton
    if(!$("#firstname").val().match(/^[A-Za-z]+$/))
    {
        alert("Firstname's incorrect ");
    }
    else if(!$("#lastname").val().match(/^[A-Za-z]+$/))
        {
            alert("Lastname's incorrect ");
        }
    else if($("#mydate").val() == "")
        {
            alert("Birthday's incorrect ");
        }
    else if($("#gender").val() == "")
        {
           alert("Gender's incorrect "); 
        }
        else if($("#province").val() == "")
        {
           alert("Province's incorrect "); 
        }
    else
    {
        //submit success
        checkType();
    }
function checkType()
    {
                var year = $("#mydate").val().split("-");
        var date = $()
		alert("Hello."+"\n"+$("#firstname").val()+"  " + $("#lastname").val());
        loadDoc();
        
        if((2017-parseInt(year[0])) < 13)
            {
                //kid's type
                $("body").css("background-image", "url(kid-bg.jpg)").css("font-family",'Itim', 'cursive');
            }
        else
            {
                if($("#gender").val() == "Male")
                    {
                        //female's type
                        $("body").css("background-image", "url(male-bg.jpg)").css("font-family",'Pattaya', 'sans-serif');
                    }
                else if($("#gender").val() == "Female")
                    {
                        //male's type
                       $("body").css("background-image", "url(female-bg.jpg)").css("font-family",'Athiti', 'sans-serif');
                    }
            }
    }
    
}

