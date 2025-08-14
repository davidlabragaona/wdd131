const visits = document.querySelector("#visits");

function incrementReview() {
    let count = Number(localStorage.getItem('totalReviews')) || 1;
    updateVisits(count);
    localStorage.setItem('totalReviews', ++count);
}

function updateVisits(count) {
    let text = (count > 1) ? `You have visited this page ${count} times.` : 'This is your first review.';
    visits.textContent = text;
}

incrementReview();