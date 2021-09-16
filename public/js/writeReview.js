// JS front-end functionality for writing reviews
const submitReview = document.querySelector('#reviewSubmit');
const oneStar = document.querySelector('#one');
const twoStar = document.querySelector('#two');
const threeStar = document.querySelector('#three');
const fourStar = document.querySelector('#four');
const fiveStar = document.querySelector('#five');
var ratingDirections = document.querySelector('#ratingDirections');

oneStar.addEventListener('click', ()=> {
    rating=1;
    twoStar.style.display='none';
    threeStar.style.display='none';
    fourStar.style.display='none';
    fiveStar.style.display='none';
    ratingDirections.textContent=`Click to change rating.`
    console.log(rating)});
twoStar.addEventListener('click', ()=> {
    rating=2; 
    threeStar.style.display='none';
    fourStar.style.display='none';
    fiveStar.style.display='none';
    ratingDirections.textContent=`Click to change rating.`
    console.log(rating)});
threeStar.addEventListener('click', ()=> {
    rating=3; 
    fourStar.style.display='none';
    fiveStar.style.display='none';
    ratingDirections.textContent=`Click to change rating.`
    console.log(rating)});
fourStar.addEventListener('click', ()=> {
    rating=4; 
    fiveStar.style.display='none';
    ratingDirections.textContent=`Click to change rating.`
    console.log(rating)});
fiveStar.addEventListener('click', ()=> {
    rating=5; 
    console.log(rating)});


submitReview.addEventListener('click', async (event) => {
    event.preventDefault();

 /*    const title = document.querySelector('#title').value.trim(); */
    const content = document.querySelector('#reviewContent').value.trim();
    // const date = document.querySelector('#date');
    // const companyId = event.target.getAttribute('data-id');
    let path = document.location.pathname;
    path = path.split('/');
    companyId = path[path.length-1];
    console.log(companyId);
 /*    const rating = document.querySelector('#rating').value; */

    const review = await fetch(`/api/review/${companyId}`, {
        method: 'POST',
        body: JSON.stringify({
          /*   title: title, */
            content: content,
        /*     date_created: date, */
            company_id: companyId,
            rating: rating
        }),
        headers: { 'Content-type': 'application/json' }
    });

    if (review.ok) {
        document.location.replace(`/company/${companyId}`);
    }
})