document.addEventListener("DOMContentLoaded", function() {
    var h=document.getElementById("country");
    var lookups=document.getElementById("lookup");

    
    var n=document.getElementById("check");
 
    lookups.addEventListener("click",function(){
        if (h.value == "")
        {
            document.getElementById("result").innerHTML="NO VALUE ENTERED";
        }
        else
        {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) 
    {
     alert(xhttp.responseText);
     document.getElementById("result").innerHTML=xhttp.responseText;
    }
  };
  xhttp.open("GET", "world.php?country="+h.value, true);
  xhttp.send();
        }
});

n.addEventListener("click",function(){
    h.value="";
    var x=document.getElementById("check").checked;
    console.log(x);
    if (x==true)
    {
         lookups.addEventListener("click",function(){
    var xmlhhttp = new XMLHttpRequest();
xmlhhttp.onreadystatechange = function() {
    if (xmlhhttp.readyState == 4 && xmlhhttp.status == 200) {
        document.getElementById("result").innerHTML=xmlhhttp.responseText;
        console.log(n.value);
    }
};
xmlhhttp.open("GET", "world.php?"+n.name+"="+n.value, true);
xmlhhttp.send();
});
        
    }
    else
    {
       lookups.addEventListener("click",function(){
        if (h.value == "")
        {
            document.getElementById("result").innerHTML="NO VALUE ENTERED";
        }
        else
        {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) 
    {
     alert(xhttp.responseText);
     document.getElementById("result").innerHTML=xhttp.responseText;
    }
  };
  xhttp.open("GET", "world.php?country="+h.value, true);
  xhttp.send();
        }
});
    }

});
});
