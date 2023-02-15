import { saveToLocalStorageByName, getLocalStorage, removeFromLocalStorage } from "./localStorage.js";

// make getElementById  
let statusInput = document.getElementById('statusInput');
let amountEntry = document.getElementById('amountEntry');
let descEntry = document.getElementById('descEntry');
let dateEntry = document.getElementById('dateEntry');
let saveButton = document.getElementById('saveButton');
let injectSite = document.getElementById('injectSite');
let budgetInject = document.getElementById('budgetInject');


// set variables

// event listener to get inputs from user
saveButton.addEventListener('click', () =>{
    let date =  dateEntry.value.slice(5,10)
    let num = parseInt(GetBalance());
    
    if (statusInput.value === '1')
    {
    saveToLocalStorageByName(statusInput.value, amountEntry.value, descEntry.value, date, (num + parseInt(amountEntry.value)))
        
    }
    else if ( statusInput.value = '2')
    {
        saveToLocalStorageByName(statusInput.value, -(amountEntry.value), descEntry.value, date, (num - parseInt(amountEntry.value)))
        
    }

    
   CreateElements();
    


    // saveToLocalStorageByName(statusInput.value, amountEntry.value, descEntry.value, date, (num + parseInt(amountEntry.value)))
});

// function that takes input as income or expense add/subtract from total expense. create an element that
CreateElements();



function GetBalance(Num){

    let logBook = getLocalStorage();
    let count = 0;
    logBook.forEach(amount => {
        count += parseInt(amount.amount)
    });

    budgetInject.innerHTML = `$${count}`
    return count;
}



GetBalance();




function CreateElements(name){
    let logBook = getLocalStorage();
    const balance = GetBalance();
    injectSite.innerHTML = '';
    logBook.map(money => {
        
        let div = document.createElement('div');

        div.className = money.type  === '1' ? 'row createdElementDivOne' :' row createdElementDiv'
        



        let div1 = document.createElement('div');
        div1.className = 'col-3'
        let p = document.createElement('p')
        p.textContent = `$ ${money.amount}`
        p.className = 'createdReportElementText'

        let div2 = document.createElement('div');
        div2.className = 'col-2'
        let p2 = document.createElement('p')
        p2.textContent = money.date
        p2.className = 'createdReportElementText'

        let div3 = document.createElement('div');
        div3.className = 'col-3'
        let p3 = document.createElement('p')
        p3.textContent = money.description
        p3.className = 'createdReportElementTextDescription'

        let div4 = document.createElement('div');
        div4.className = 'col-2'
        let p4 = document.createElement('p')
        p4.textContent = '$' + money.total
        p4.className = 'createdReportElementText'
        
        let div5 = document.createElement('div')
        div5.className = 'col-1'
        let deleteBtn = document.createElement('button')
        deleteBtn.className = 'DeleteButton';
        deleteBtn.textContent = 'Del';
        deleteBtn.type = 'buton'
        deleteBtn.addEventListener('click', function() {
            removeFromLocalStorage(money.total);
            console.log(money.total)
            CreateElements();
        })

        injectSite.appendChild(div);
        div.appendChild(div1);
        div1.appendChild(p)
        div.appendChild(div2)
        div2.appendChild(p2)
        div.appendChild(div3)
        div3.appendChild(p3)
        div.appendChild(div4)
        div4.appendChild(p4)
        div.appendChild(div5)
        div5.appendChild(deleteBtn)
        
   

        // injectSite.appendChild(deleteBtn);
    })
    
}


