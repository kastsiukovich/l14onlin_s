var userForm = document.querySelector('#start-question');
var avatarContainer = document.querySelector('.smiles');
var userData = ['Joe', 'avatar'];
var questionBox = document.querySelector('#box-questions');
var questionForm = document.querySelector('.quiz-form');
var correctAnswers = ['B', 'D', 'B', 'A', 'C'];
var resultContainer = document.querySelectorAll('.quiz__heading');

avatarContainer.addEventListener('click', function (e) {
   if (document.querySelectorAll('.show')) {
      document.querySelectorAll('.show').forEach(function (item) {
         item.classList.remove('show');
      })
   }
   // console.log(e.target.tagName)

   if (e.target.tagName === 'INPUT') {
      // console.log(e.target.previousElementSibling)
      e.target.previousElementSibling.firstElementChild.classList.add('show');
   }
   userForm.addEventListener('submit', function (e) {
      var activeAvatar = document.querySelector('input[name="question2"]:checked');
      var activeName = userForm.elements.question1.value;
      var activImg = activeAvatar.previousElementSibling.firstElementChild.src;
      userData = [activeName, activImg];

      console.log(userData)
      userForm.classList.add('quiz');
      questionBox.classList.remove('quiz');

      scrollingUp();

      e.preventDefault();
   })

   questionForm.addEventListener('submit', function (e) {
      var userInfo = document.querySelector('.name__user');
      var counter = 0;
      var starResult = 0;

      var userAnswer = [
         questionForm.element.q1,
         questionForm.element.q2,
         questionForm.element.q3,
         questionForm.element.q4,
         questionForm.element.q5,
      ]

      userAnswer.forEach(function (item, index) {
         if (item.value === correctAnswers[index]) {
            counter += 20;
            for (var i = 0; i < 4; i++) {
               var isChecked = item[i].checked;
               if (isChecked) {
                  item[i].parentElement.classList.add('correct')
               }
            }
         } else {
            for (var i = 0; i < 4; i++) {
               var isChecked = item[i].checked;
               if (isChecked) {
                  item[i].parentElement.classList.add('wrong');
               }
            }
         }
      })
      scrollingUp();
      e.preventDefault();
   })


   function scrollingUp() {
      window.scrollTo({
         top: 0,
         behavior: 'smooth'
      })
   }
}
)