const gnbSearch = document.querySelector('.gnb-search')
const gnbSearchInput = gnbSearch.querySelector('.form-input')
const gnbSearchHistory = gnbSearch.querySelector('.search-history')
const closeAllSearchHistoryButton = gnbSearchHistory.querySelector('.search-history-header button')
const gnbSearchHistoryList = gnbSearchHistory.querySelector('ol')

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
        gnbSearchHistory.classList.remove('is-active')
        window.removeEventListener('click', closeGnbSearchHistoryOnClickingOutside)
    }
}

gnbSearchInput.addEventListener('focus', openGnbSearchHistory)

function deleteAllGnbSearchHistoryItems(){
    gnbSearchHistoryList.innerHTML = ''
    gnbSearchHistory.classList.remove('is-active')
}

closeAllSearchHistoryButton.addEventListener('click', deleteAllGnbSearchHistoryItems)