function saveToLocalStorageByName(entryType, amountEntry, descriptionInput, dateInput, totalInput){

    let favorites = getLocalStorage();
    let storedObject = {type: entryType, amount: amountEntry, description:descriptionInput, date: dateInput, total: totalInput}

    favorites.push(storedObject);


    localStorage.setItem('LogBook', JSON.stringify(favorites));
}


function getLocalStorage(){

    let localStorageData = localStorage.getItem('LogBook');

    if(localStorageData == null){
        return [];
    }


    return JSON.parse(localStorageData);
}


function removeFromLocalStorage(balance){
    let log = getLocalStorage('LogBook');
    
    log.forEach(element => {
        if (element.total === balance )
        {
            log.splice(log.indexOf(element), 1)
            console.log(log.indexOf(element))
        }
    });
    localStorage.setItem('LogBook', JSON.stringify(log));
}

export {removeFromLocalStorage, getLocalStorage, saveToLocalStorageByName};