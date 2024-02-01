document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('submit-recommendation');
    const recommendationText = document.getElementById('recommendation-text');
    const recommendationList = document.querySelector('.recommendation-list');

    submitButton.addEventListener('click', function () {
        const text = recommendationText.value.trim();
        if (text !== '') {
            const recommendation = document.createElement('div');
            recommendation.classList.add('recommendation-item');
            recommendation.innerText = text;
            recommendationList.appendChild(recommendation);
            recommendationText.value = '';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Get a reference to the "home" element by its id
    const homeElement = document.getElementById('home');
  
    // Add a click event listener to scroll to the top when "home" is clicked
    homeElement.addEventListener('click', function () {
      // Use smooth scrolling for a nice effect
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  });
  