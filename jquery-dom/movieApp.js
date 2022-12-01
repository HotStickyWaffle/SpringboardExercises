$('form').on('submit', function (evt) {
    evt.preventDefault();
    const name = $('#movieName').val();
    const rating = $('#movieRating').val();

    // console.log(name.length)
    // console.log(rating)

    if (name.length < 2 && rating < 0 || rating > 10) {
        alert('Movie title must be at least 2 characters long and rating must be between o and 10')
    }
    else if (name.length < 2) {
        alert('Movie title must be at least 2 characters long')
    }
    else if (rating < 0 || rating > 10) {
        alert('Movie rating must be between 0 and 10')
    }
    else {
        $('ul').append(`<li>${name}: ${rating}     <button class="removeButton">Remove Movie</button></li>`)
    }
})

$('ul').on('click', '.removeButton', function (evt) {
    $(evt.target).parent().remove()
})

