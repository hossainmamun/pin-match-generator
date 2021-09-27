// pin generate interface 
const generate_btn = document.querySelector('#generate-btn');
const random_pin = document.querySelector('#random-pin');

// matching interface
const type_num = document.querySelector('#type-num');
const key_pad = document.querySelector('#key-pad');
const submit = document.querySelector('#submit');

// notify section 
const notify_section = document.querySelector('#notify-section');
const notify_fail = document.querySelector('#notify-fail');
const notify_success = document.querySelector('#notify-success');



// function for generate random num
const getPin = () => {
    const pin = Math.round(Math.random() * 10000);
    const pin_string = pin + '';
    if (pin_string.length === 4) {
        return pin;
    }
    else {
        // console.log('got 3 or less digit and calling again', pin)
        return getPin();
    }
}

// add event listener to generate button
generate_btn.addEventListener('click', () => {
    const show_pin = getPin();
    random_pin.value = show_pin
})

// add event listener to key_pad button
key_pad.addEventListener('click', (event) => {
    const keypad_value = event.target.innerText;
    console.log(typeof keypad_value)
    if (isNaN(keypad_value)) {
        if (keypad_value == "c") {
            type_num.value = '';
        }
        else if (keypad_value == "x") {
            function backSpace() {
                type_num.value = type_num.value.slice(0, type_num.value.length - 1)
                // console.log(type_num.value.length)
            }
        }
        backSpace()
    }
    else {
        const prev_num = type_num.value;
        const new_num = prev_num + keypad_value;
        if (type_num.value.length > 3) {
            alert('number length should be four');
            type_num.value = ''
        }
        else {
            type_num.value = new_num;
        }
    }
})

// submit btn add event listener
submit.addEventListener('click', () => {
    if (random_pin.value == '' || type_num.value == '') {
        alert('You Must Enter valid input');
    }
    else if (random_pin.value === type_num.value) {
        notify_section.style.display = 'block';
        notify_success.style.display = 'block';
        notify_success.style.color = 'green';
        notify_fail.style.display = 'none';
    }
    else {
        notify_section.style.display = 'block';
        notify_fail.style.display = 'block';
        notify_fail.style.color = 'red';
        notify_success.style.display = 'none';
    }
})