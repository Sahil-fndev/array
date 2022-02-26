// create a empty array
let arr = [];

// grab the button element
let pushBtn = document.getElementById("btn");



// event that act on button click grab array's size and array's item from user's input and push it into array
pushBtn.onclick = function () {
    let sizeOfArray = document.getElementById('arraysize').value; // get array size from input
    let arrayItem = document.getElementById('arrayitem').value; // get array items from input
    let userArray = document.getElementById('arrayOutput');
    let arraySize = document.getElementById('size');
    if (sizeOfArray == '' && arrayItem == '') {
        alert("Please fill Size of array and array of item");
    }

    else if (sizeOfArray == '') {
        alert('Please fill Size of array')
    }

    else if (arrayItem == '') {
        alert('Please fill array item')
    }
    else {

        // push array's items according to it's array's size
        for (let i = 0; i < sizeOfArray; i++) {
            if (arr.length < sizeOfArray) {
                arr.push(arrayItem);
                arr = [... new Set(arr)];
            }
            else {

                // if array's size limit exceed show this warning
                let info = document.getElementById('info');
                document.getElementById('warn').style.display = "block"
                info.textContent = "The array's size has reached its limit.";
            }
        }
        // it will show array to user on screen
        userArray.innerText = arr;
        arraySize.innerText = sizeOfArray;
    }
}


function getCurrentYear() {
    let date = new Date() ;
    document.getElementById('year').textContent = date.getFullYear();
}