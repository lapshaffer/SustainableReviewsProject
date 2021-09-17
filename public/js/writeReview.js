// JS front-end functionality for writing reviews
const submitReview = document.querySelector('#reviewSubmit');
const oneStar = document.querySelector('#one');
const twoStar = document.querySelector('#two');
const threeStar = document.querySelector('#three');
const fourStar = document.querySelector('#four');
const fiveStar = document.querySelector('#five');
var ratingDirections = document.querySelector('#ratingDirections');

oneStar && oneStar.addEventListener('click', ()=> {
    rating=1;
    twoStar.textContent='☆';
    threeStar.textContent='☆';
    fourStar.textContent='☆';
    fiveStar.textContent='☆';
    ratingDirections.style.display="none";
    console.log(rating)});
twoStar && twoStar.addEventListener('click', ()=> {
    rating=2; 
    twoStar.textContent='⭐';
    threeStar.textContent='☆';
    fourStar.textContent='☆';
    fiveStar.textContent='☆';
    ratingDirections.style.display="none";
    console.log(rating)});
threeStar && threeStar.addEventListener('click', ()=> {
    rating=3; 
    twoStar.textContent='⭐';
    threeStar.textContent='⭐';
    fourStar.textContent='☆';
    fiveStar.textContent='☆';
    ratingDirections.style.display="none";
    console.log(rating)});
fourStar && fourStar.addEventListener('click', ()=> {
    rating=4; 
    twoStar.textContent='⭐';
    threeStar.textContent='⭐';
    fourStar.textContent='⭐';
    fiveStar.textContent='☆';
    ratingDirections.style.display="none";
    console.log(rating)});
fiveStar && fiveStar.addEventListener('click', ()=> {
    rating=5; 
    twoStar.textContent='⭐';
    threeStar.textContent='⭐';
    fourStar.textContent='⭐';
    fiveStar.textContent='⭐';
    ratingDirections.style.display="none";
    console.log(rating)});


submitReview && submitReview.addEventListener('click', async (event) => {
    event.preventDefault();

    const content = document.querySelector('#reviewContent').value.trim();
    let path = document.location.pathname;
    path = path.split('/');
    companyId = path[path.length-1];
    console.log(companyId);

    const review = await fetch(`/api/review/${companyId}`, {
        method: 'POST',
        body: JSON.stringify({
            content: content,
            company_id: companyId,
            rating: rating
        }),
        headers: { 'Content-type': 'application/json' }
    });

    if (review.ok) {
        document.location.replace(`/company/${companyId}`);
    }
})