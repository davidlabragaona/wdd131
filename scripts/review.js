function incrementReview() {
    let count = Number(localStorage.getItem('totalReviews')) || 0;
    localStorage.setItem('totalReviews', ++count);
}

window.onload = (event) => {
    incrementReview();
}