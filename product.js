filterSelection("all");

function filterSelection(c) {
    var x,i;
    x= document.getElementsByClassName("product");
    console.log(x);
    
    if (c=="all") c= "" ;

    for( i=0; i<x.length; i++)
    {
        remove(x[i], "show");
        if( x[i].className.indexOf(c) >-1) 
        {add(x[i], "show"); 
         console.log(x[i].className.split(" ")); }
        //  else{
        //    const para= document.querySelector('p');
        //    para.textContent='No items found!'
        //  }

    }

}


function add(element,name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2=name.split(" ");
    for(i=0; i<arr2.length;i++) 
    {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
          }
        }
}
      
      function remove(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
          while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
          }
        }
        element.className = arr1.join(" ");
      }

    

