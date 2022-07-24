const name = document.getElementById("name");
const phoneNumber = document.getElementById("phoneNumber");
const search = document.getElementById("search");
const list = document.getElementById("list");
const addButton = document.getElementById("addButton");
const searchButton = document.getElementById("searchButton");
const deleteButton = document.getElementById("deleteButton");
let resultList = []

addButton.addEventListener('click', function()
{
    resultList.push({name:name.value, phoneNumber:phoneNumber.value})
    renderedHTML(resultList)
    name.value = null
    phoneNumber.value = null
});
searchButton.addEventListener('click', function()
{
		if(search.value != null && search.value.length > 0)
        {
            let filterList = resultList.filter(result => 
            (
            result.name.toLowerCase().indexOf(search.value) !== -1
            || result.phoneNumber.toLowerCase().indexOf(search.value) !== -1))
    
    renderedHTML(filterList)
    }
    renderedHTML(resultList)
});
deleteButton.addEventListener('click', function()
{
	let result = []
    result = resultList.filter(function(element){
    return result.includes(element.phoneNumber) ? '' : result.push(element.phoneNumber)
});
    renderedHTML(result)
});
const renderedHTML = (data) => {
let ListHtml = []
data.sort((a, b) => a.name > b.name ? 1 : -1)
ListHtml = data.map(result => `<li class="list-item"><span>${result.name}</span><span>${result.phoneNumber}</span></li>`)
list.innerHTML = ListHtml.length > 0 ? ListHtml.join('') : 'No results'
}