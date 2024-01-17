function searchEmoji() {
    let inputValue = document.querySelector("#search_field");

    // console.log(inputValue);
    displayResult(inputValue);


}


function displayResult() {

    let parent = document.querySelector("#Search_result_container");
    // console.log(parent);

    emojiList.forEach((e) => {  

    let new_row = document.createElement("tr");
    let new_emoji = document.createElement("td");
    let new_aliases = document.createElement("td");
    let new_desc = document.createElement("td");

    new_emoji.innerText = e.emoji;
    new_aliases.innerText = e.aliases;
    new_desc.innerText = e.description;

    new_row.appendChild(new_emoji);
    new_row.appendChild(new_aliases);
    new_row.appendChild(new_desc);
    
    parent.appendChild(new_row);
    })
}

// console.log(emojiList);

document.querySelector("#search_field").addEventListener("keyup", searchEmoji);

window.onload = () => displayResult();