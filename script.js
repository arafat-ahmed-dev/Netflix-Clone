// JavaScript to toggle answers when questions are clicked
const questions = document.querySelectorAll('.question');
questions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const otherAnswers = document.querySelectorAll('.answer');
        otherAnswers.forEach(otherAnswer => {
            if (otherAnswer !== answer) {
                otherAnswer.style.display = 'none';
            }
        });
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});