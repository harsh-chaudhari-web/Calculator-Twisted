let display = document.getElementById('display');

        function clearDisplay() {
            display.value = '';
        }

        function deleteLast() {
            display.value = display.value.slice(0, -1);
        }

        function appendToDisplay(value) {
            display.value += value;
        }

        function calculateResult() {
            try {
                if (display.value.trim() === '143') {
                    display.value = 'I luv you 😏';
                } else if (display.value.includes('+')) {
                    display.value = 'Hello World 🫡';
                } else {
                    display.value = eval(display.value);
                }
            } catch (error) {
                display.value = 'Error';
            }
        }

        document.addEventListener('keydown', function(event) {
            const key = event.key;

            if (!isNaN(key)) { // If the key is a number
                appendToDisplay(key);
            } else if (key === '+') { // If the key is the plus sign
                appendToDisplay(key);
            } 
            else if (key === '-') { // If the key is the minus sign
                appendToDisplay(key);
            }  else if (key === '/') { // If the key is the divide sign
                appendToDisplay(key);
            }  else if (key === '*') { // If the key is the multiply sign
                appendToDisplay(key);
            } 
            else if (key === 'Enter') { // If the key is Enter
                calculateResult();
            } else if (key === 'Backspace') { // If the key is Backspace
                deleteLast();
            } else if (key === 'Escape') { // If the key is Escape (to clear the display)
                clearDisplay();
            }
        });