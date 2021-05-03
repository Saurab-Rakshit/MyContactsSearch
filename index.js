//Get input element
let filterInput = document.getElementById('filterInput');
//Add Event Listner
filterInput.addEventListener('keyup',filterNames);

//Function for filtering the names from list
function filterNames(){
    //console.log(1); //for inspecting keyup event is executing or not   
    
    //Get value of input from Search Box
    let filterValue = document.getElementById('filterInput').value.toUpperCase();
    // console.log(filterValue); //for inspecting that we are able to grab value from search box or not

    //Get Names from Ul
    let ul = document.getElementById('names');

    //Get li's from Ul, querySelectorAll() => using this we can select anything based on it's calss name / id / TagName
    let li = ul.querySelectorAll('li.collection-item')
    
    //Loop through all the "collection-item"
    for(let i=0;i<li.length;i++){
        let a = li[i].getElementsByTagName('a')[0];
        // If input is matching with list content 
        if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
            li[i].style.display = '';
        } else{
            li[i].style.display = 'none';
        }
    }
}
