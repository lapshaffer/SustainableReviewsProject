// JS front-end functionality for writing reviews
const submitReview = require('#submitReview');

submitReview.addeventListener('click', async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title');
    const content = document.querySelector('#content');
    const date = document.querySelector('#date');
    const companyId = document.querySelector('#companyId');
    const rating = document.querySelector('#rating').value;

    const review = await fetch('/api/reviews', {
        method: 'POST',
        body: {
            title: title,
            content: content,
            date_created: date,
            company_id: companyId,
            rating: rating
        },
        headers: { 'Content-type': 'application/json' }
    })

    if (review.ok) {
        // document.location.replace('/company')
    }
})