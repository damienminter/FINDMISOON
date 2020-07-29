
// const myData = "datatemp.json";
// const crossOrigin = "https://cors-anywhere.herokuapp.com/";

// fetch(`${crossOrigin}${myData}`)
//   .then(response => response.json())
//   .then(data => console.log(data));

// Function to toggle between display / hidden (using bootstrap classes)
const toggleReadMore = () => {
    const moreText = document.querySelector('#myStory');
    const btn = document.querySelector('#readMoreBtn');
    if (moreText.className === 'd-none') {
        moreText.className = 'd-block';
        btn.textContent = 'Collapse'
    } else {
        moreText.className = 'd-none';
        btn.textContent = 'Learn More';
    }
}

// const showAlert = () => {
//     const div = `
//         <div class="alert alert-dismissible alert-info mt-4 fixed-top" id="dnaAlert">
//         <button type="button" class="close" id="dnaAlertBtn" data-dismiss="alert">&times;</button>
//         <h4 class="alert-heading">Free DNA tests</h4>
//         <p class="mb-0">Find family with free DNA tests by calling </a href="tel:+821074377543">010-7437-7543</a> </p>
//         </div>
//         `;

//     return div;
        
// }
    
    


// Event to fire show more toggle.
document.querySelector('#readMoreBtn').addEventListener('click', e => {
    e.preventDefault()
    toggleReadMore();
}); 


function showAlert() {

    const container = document.querySelector('.page_container');
    const div = `
        <div class="alert alert-dismissible alert-info mt-4 fixed-top" id="dnaAlert">
            <button type="button" class="close" id="dnaAlertBtn" data-dismiss="alert">&times;</button>
            <h4 class="alert-heading">Free DNA tests</h4>
            <p class="mb-0">Find family with free DNA tests by calling </a href="tel:+821074377543">010-7437-7543</a> </p>
        </div>
        `;

    container.insertAdjacentHTML("afterend", div);

}

function killAlert(el) {
    if (el.classList.contains("close")) {
        el.parentElement.remove();
    }
}


document.addEventListener('DOMContentLoaded', () => {
   
    setTimeout(showAlert,12000);

}); 

document.addEventListener('click', (e) => {
    console.log('other click working')
    const target = (e.target);
    killAlert(target)
})

// function displayDNAAlert() {
//     return setTimeout(doIt, 3000);
// };

// function doIt() {
//     const domObject = document.querySelector('.page_header').innerHTML
//     const displayDNA = showAlert();
//     domObject = displayDNA;
// };


// function removeDNAAlert() {
//     document.getElementById('dnaAlertbtn').addEventListener('click', () => {
console.log('button event working')

//     })
// }


