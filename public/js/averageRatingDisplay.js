const ratingDisplay = document.getElementById("average-rating-num");

let path = document.location.pathname;
    path = path.split('/');
    companyId = path[path.length-1];

const displayRating = async () => {
    const result = await fetch(`/api/company/${companyId}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    const companyData = await result.json();
    const companyAvgReview = companyData.avg_rating;
    ratingDisplay.innerHTML = `${companyAvgReview}`;
};

displayRating();