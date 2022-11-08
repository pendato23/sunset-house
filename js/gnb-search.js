const gnbSearch = document.querySelector('.gnb-search')
const gnbSearchInput = gnbSearch.querySelector('.form-input')
const gnbSearchHistory = gnbSearch.querySelector('.search-history')
const deleteAllButton = gnbSearchHistory.querySelector('.search-history-header button')
const gnbSearchHistoryList = gnbSearchHistory.querySelector('ol')
const deleteButtonList = gnbSearchHistory.querySelectorAll('.delete-button')

function closeGnbSearchHistory(){
    gnbSearchHistory.classList.remove('is-active')
    window.removeEventListener('click', closeGnbSearchHistoryOnClickingOutside)
}

function openGnbSearchHistory(){
    if (gnbSearchHistoryList.children.length === 0){
        return
    }

    if ( !gnbSearchHistory.classList.contains('is-active')){
        window.addEventListener('click', closeGnbSearchHistoryOnClickingOutside)
    }
    gnbSearchHistory.classList.add('is-active')
    
}

function closeGnbSearchHistoryOnClickingOutside(e){
    if (!gnbSearch.contains(e.target)){
        closeGnbSearchHistory()
    }
}

gnbSearchInput.addEventListener('focus', openGnbSearchHistory)

function deleteAllSearchHistoryItems(){
    gnbSearchHistoryList.innerHTML = ''
    closeGnbSearchHistory()
}

deleteAllButton.addEventListener('click', deleteAllSearchHistoryItems)

function deleteSearchHistoryItem(e){
    e.stopPropagation()
    const itemToDelete = this.parentNode
    gnbSearchHistoryList.removeChild(itemToDelete)

    if(gnbSearchHistoryList.children.length === 0){
        closeGnbSearchHistory()
    }
}

deleteButtonList.forEach((button) => {
    button.addEventListener('click', deleteSearchHistoryItem)
})
