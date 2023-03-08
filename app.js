const countValue = document.querySelector("#counter");

const increment = () => {
    // getting value from ui
    let value = parseInt(countValue.innerText);
    //updating value
    value = value +1;
    //setting value in ui
    countValue.innerText = value;


}

let value = 0;

let decrement = () => {
    let value = parseInt(countValue.innerText);

    value = value -1;

    countValue.innerText = value;
}