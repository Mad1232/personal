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
