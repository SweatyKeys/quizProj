
//question count |
let qCount= 1;
let qScore= 0;
let qSelect= 0;



//Question Content |
const questions= [
  
  {text: 'Which of these places is the world\'s largest producer of avocados?',
  answers: ['California', 'Chile', 'New Zealand', 'Mexico'],
  correct: 3,
  feedback: '',
  cFeedback: 'Mexico is the world\'s largest producer of avocados.'},
  
  {text:'What indicates a ripe pineapple?',
  answers:['When you can easily pull one \of it\'s leaves.', 'The pineapple will yield slightly to pressure.', 'The bottom of the pineapple will be gold.', 'The whole pineapple will have a gold color\, the bottom will smell sweet\, and the fruit will yield to soft pressure.'],
  correct: 3,
  feedback: '',
  cFeedback: 'The fruit will be gold all over, smell sweet at the bottom, and yield to soft pressure.'},

  {text: 'What indicates a ripe hass avocado?',
  answers:['Squeeze until it yields to pressure. If the pressure results in finger imprints, you\'re ready to guac!','The skin will be dark all over and will yield to light pressure.', 'As soon as they start to get a darker shade of green.', 'The fruit will have a dark green color where the stem once was.'],
  correct: 1,
  feedback: '',
  cFeedback: 'Ripe hass avocados will be dark all over and will yield to light pressure.'},

  {text:'Out of all the apricots that are commercially produced in the United States what percentage is contributed by California?',
  answers:['90-95%','75%', '45-50%', '60-65%'],
  correct: 0,
  feedback: '',
  cFeedback: 'California contributes 90-95% of all apricots produced in the United States.'},

  {text:'What are the indicators for a ripe grapefruit?',
  answers:['Sniff from the stem site. It should smell like sweet citrus.','The grapefruit should feel like a waterballon in your hand, and smell slightly vinegary.','It will feel kind of light, look kind of orangish, and looks like a balloon where its obtuse on one end, and tapers near the other end being more acute.', 'The fruit will have deep shades of red, will feel plump, and heavier than it looks. The fruit will have an oval with the top and bottom appearing more flat than round.'],
  correct: 3,
  feedback: '',
  cFeedback: 'Grapefruits with deep shades of red, shaped like an oval with both ends appearing flat are key features to look for. When holding it in your hand, it should feel heavier than it looks, which is a good sign the fruit will be nice and juicy!'},
  
  {text:'Which state is the largest producer of nectarines in the United States?',
  answers:['Georgia', 'California','Washington','South Carolina'],
  correct: 1,
  feedback: '',
  cFeedback: 'California is the largest producer of nectarines in the United States.'},

  {text:'What are the indicators for a ripe nectarine?',
  answers:['The skin looks kind of wrinkly and feels sticky. The smell is sweet.','The nectarine will be light in color, only yields to harder preussure, and may or may not have a light, sweet scent.','A deep yellow color and depending on variety, a hint of red. The fruit will be fragrant and while firm, yields to mild pressure.','It will feel like the flesh is going to break through the skin and seep through your hands.'],
  correct: 2,
  feedback: '',
  cFeedback: 'A ripe nectarine will have a deep yellow color, possibly a hint of red, and a sweet scent. It may have firm skin, but will yield to mild pressure.'},

  {text:'What are the indicators for a ripe Cantaloupe?',
  answers:['The melon will have a cream, tan or yellow rind, with some or most of the webbing raised. A sweet frangrance can be found at the blossom end of the mellon, feel heavier than it looks and the stem site will have small, round, button appearance.', 'The webbing of he cantaloupe will feel flat, and the rind will be extra firm. The color will be kind of dull with little to no scent.','The melon will have a tannish color, and some green. It will feel soft when pressing against the stem site.','Any melon that is tannish and not too soft.'],
  correct: 1,
  feedback: '',
  cFeedback: 'Pick cantaloupes that have a creamy, tan, or yellow rind with raised webbing and a small round button appearance at the stem site. As well, the melon will feel heavier than it appears, and have a sweet scent near the blossom end (opposite end of the stem site).'},

  {text:'True or false: Hawaii is the only U.S. state that comercially produces papaya?',
  answers:['True','False'],
  correct: 0,
  feedback: '',
  cFeedback: 'Hawaii is the only U.S. state to produce papya commercially.'},

  {text:'What are the indicators for a ripe apricot?',
  answers:['The fruit will have a bright orange color, feel somewhat soft, and be small in appearance.','The bigger the fruit the better. Make sure there there is a shade of red amongst its orange color, and it should feel firm and feel hard when pressure is applied.','Bigger the fruit the better, and as soft as possible without the skin breaking.'],
  correct: 1,
  feedback: '',
  cFeedback: 'Believe it or not, the smallest apricots, are a better pick than the biggest. Bright orange color, somewhat soft and small appearance are the best indicators for a ripe apricot.'},
  
];

//Views(First, Question, Feedback, Result) |

function generateFirstView(){
  return `
    <div class= "startView">
      <h1 class= "start">Ready To Eat <br />Quiz</h1>
        <p class= "underline">Fruit Production and Ripeness Questions</p>
      <form>
         <input type= "button"  name= "start" value= "Start!" class= "startBttn">
       </form>
    </div>`;
}

function generateAnswers(ansArray){
  let output= '';
  for (var i = 0; i < questions[qSelect].answers.length; i++){
    output += `<li><input type= "radio" id="answer${i}" name= "answer" value= ${i} required>
            <label for= "answer${i}">${questions[qSelect].answers[i]}</label></li>`
  }
  return output;
}

function generateQuestionView() {
  return `<h1  class= "qView">Ready To Eat</h1>
    <div class= "qCount">
      <p class= "underline">Question ${qCount} of ${questions.length}</p>
      <p class= "underline">${qScore} Correct Answers</p>
    </div>
    <div class= "js-fruitQ">
      <p>${questions[qSelect].text}</p>
      <form>
        <fieldset>
          <legend>Answers</legend>
          <div class= "aSelect">
            <ul class= "answers">
            ${generateAnswers()}
            </ul>
          </div>
          <button class= "subButton chckNxt" type= "submit">Sumbit Answer</button>
        </fieldset>
      </form>`
}



function generateFeedback() {
  return `
<div class= "fdbkView">
    <p class= "fdbckView underline">${questions.feedback}</p>
    <p class= "cFeedback">${questions[qSelect].cFeedback}</p>
    <input type= 'button' class= "fdbckNext" value= "Next Question">
</div>`;

}


function generateResultView(){
  return `
  <div class= "resultView">
    <h1>Ready To Eat</h1>
      <h2>Final Score:</h2>
      <p class= "percScore">${qScore/questions.length * 100}% Correct!</p>
      <p class= "ansTotal">${qScore} out of ${questions.length} answers correct</p>
        <input type= "button" value= "Try Again?" class= "tryAgainBttn">  
  </div>`;
}

//render Start Page |
function startViewRender(){
  const firstView = generateFirstView();
  $('.container').html(firstView);
}

function questionViewRender(){
  const qView = generateQuestionView();
  $('.container').html(qView);
}


function feedbackRender(){
  const fdbckView = generateFeedback();
  $('.container').html(fdbckView);
}

function resultViewRender(){
  const resultView = generateResultView();
  $('.container').html(resultView);
}

//button handlers |
function handleStartButton() {
  $('.startBttn').on('click', function(event){
    $('.startView').remove();
    questionViewRender();
    handleSubmitButton();
    });
  
}

function handleSubmitButton() {
  $('form').on('submit', function(event){
    event.preventDefault();
    answerCheck();
    $('.qView').remove();
    feedbackRender();
    handleNextButton();
    checkNxtBttn();
    qCount +=1;
    qSelect +=1;
  });
}

function handleNextButton () {
  $('.fdbckNext').on('click', function(event){
    $('.fdbckView').remove();
    checkResults();
    
  });  
}

function handleRestartButton() {
  $('.tryAgainBttn').on('click', function(event){
   $('.resultView').remove();
   startViewRender();
   handleStartButton();
   qCount= 1;
   qScore= 0;
   qSelect= 0;
  })
}

//Check Answer, Check Results, check nxtButton |

function answerCheck(){
  const correct = `${questions[qSelect].correct}`;
  const checkAns= $('input[type= radio][name= answer]:checked').val();
    if (checkAns === correct) {
    questions.feedback= 'You are Correct!';
    qScore += 1;
    }
    else {
    questions.feedback= ' Ohhhh nooooo! That is incorrect!'
    }
  
}

function checkNxtBttn(){
  if (qCount == questions.length){
    $('.fdbckNext').attr('value', 'Finish Quiz');
  }
}


function checkResults(){
  
  if (qSelect < questions.length){
    questionViewRender();
    handleSubmitButton();
  }
  else {
    resultViewRender();
    handleRestartButton();
  }
}



//call back
function quizApp() {
  startViewRender();
  handleStartButton();
}

$(quizApp);




 
