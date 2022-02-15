function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
}
function generatePin()  {
   const pin = getPin();
   document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function(event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if(isNaN(number)) {
         if(number == 'C') {
            calcInput.value = '';
        }
    }
   else {
    calcInput.value = calcInput.value + number;
   }
})

function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const successMsg = document.getElementById('success');
    const failMsg = document.getElementById('fail');

    if (pin == typedNumbers) {
        successMsg.style.display = 'block';
        failMsg.style.display = 'none';
    }
    else {
        failMsg.style.display = 'block';
        successMsg.style.display = 'none';
    }
}