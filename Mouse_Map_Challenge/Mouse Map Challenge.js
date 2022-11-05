document.addEventListener('mousemove', function (e) {
    let x = e.pageX;
    let y = e.pageY;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let r = (x / width) * 255;
    let b = (y / height) * 255;
    document.body.style.backgroundColor = `rgb(${r}, 0, ${b})`
})

//tried to add g value with diagnol, didn't quite work

// document.addEventListener('mousemove', function (e) {
//     let x = e.pageX;
//     let y = e.pageY;
//     let width = window.innerWidth;
//     let height = window.innerHeight;
//     let diagnolFull = Math.sqrt((width ** 2) + (height ** 2))
//     let r = (x / width) * 255;
//     let b = (y / width) * 255;
//     let diagnol = Math.sqrt((x ** 2) + (y ** 2));
//     let g = (diagnol / diagnolFull) * 255;

//     document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
//     console.log = `rgb(${r}, ${g}, ${b})`
// })