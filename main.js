// Get the HTML element with id 'unit-kg' and assign it to kgEl variable 
const kgEl = document.getElementById('unit-kg');

// Get the HTML element with id 'error' and assign it to errEl variable 
const errEl = document.getElementById('error');

// Declare the variables errorTime and resultTime without assigning any value to them.
let errorTime;
let resultTime;

// Declare a function named updateData
const updateData = () => {
    // Get the HTML element with id 'unit-lb' and assign it to lbsEl variable 
    const lbsEl = document.getElementById('unit-lb');
    
    // Check if the value of kgEl is less than 1 or not a number
    if (kgEl.value < 1 || isNaN(kgEl.value)) {
        // If true, display the error text and color in red
        errEl.style.display='block'
        errEl.innerText = 'Error: weight cannot be negative';
        errEl.style.color = 'red';
        
        // Clear the previous timeout if there was any
        clearTimeout(errorTime)
        
        // Set a new timeout of 1500ms to remove the error text and clear inputs after 1.5 seconds
        errorTime = setTimeout(() => {
            errEl.innerText = '';
            kgEl.value = '';
            lbsEl.value = '';
        }, 1500);
    } else {
        // If false, hide the error text
        errEl.style.display = 'none'
        
        // Convert kg to lbs and set the value of lbsEl to converted value rounded to 2 decimal places.
        lbsEl.value = (kgEl.value / 0.45359237).toFixed(2);

        // Clear the previous timeout if there was any
        clearTimeout(resultTime);

        // Set a new timeout of 10 seconds to clear the inputs after 10 seconds
        resultTime=setTimeout(() => {
            kgEl.value = '';
            lbsEl.value = '';
        }, 10000);
    }
}

// Add an event listener to kgEl that listens for any input and triggers the updateData function.
kgEl.addEventListener('input',updateData)
