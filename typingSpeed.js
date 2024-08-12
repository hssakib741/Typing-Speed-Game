const quotes = [
    "Life is Beautiful.",
    "It is rightly said that the time is most precious than money. Money once lost can be regained sooner or later, but time once lost is lost forever. There is a famous saying that time and tide wait for none.",
    "I have a cure for insomnia. It’s probably worth millions of dollars but I’m giving it to you free. It isn’t warm milk or chamomile tea. It’s list making. List stuff from your life like all your teachers or all the live music you’ve seen or all the Paul Newman movies you’ve watched.",
    "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
    "Using technology to teach students has several advantages such as creating a more engaged environment, improving collaboration, having more scope to connect with the students, etc. Technology also allows teachers to explain complicated theories and concepts to students using attractive visuals, which in turn helps students to learn and understand better.",
    "If you want to live a happy life, tie it to a goal, not to people or things.",
    "I use public transport to travel. So that means I have to get up early to catch the bus. I prefer using an AC bus as the route to my work is quite long and the hot weather becomes quite intolerable.",
    "Turn your wounds into wisdom.",
    "I have a pet rabbit. Its name is Bunnie. It is brown in colour and white patches on one eye and both the ears. It is soft and furry.",
    "I have a best friend of fourteen years. We went to the same school. While we have been friends since grade 1, we became best friends in high school.",
    "A skill that I want to learn is coding. It is a skill that has a lot of demand in the job market right now. Furthermore, coding is also an integrated part of different kinds of jobs, all of which have scope for many job opportunities.",
    "The only way to do great work is to love what you do.",
    "My favorite dish is pizza. Its main component is a flat soft bread which can be thin or thick depending on choice. The bread is then covered by a sauce, predominantly ketchup, followed by ingredients such as chicken, beef, bell peppers, olives and many others depending on the choice.",
    "A time when I worked really hard for something was during my last board exam. It was my graduating exam from school and therefore had a lot of value to it. Besides, every board exam is very important in a student’s life.",
    "While the internet has definitely taken over many different fields of media and broadcasting, including the radio, it is too bold to claim that the development of the internet will lead to radio becoming obsolete.",
    "You're not defined by your past; you're prepared by it. You're stronger, more experienced, and you have greater confidence.",
    "There is a good playground in our school. It is just close to the school. It has green grass looking like green velvet all round the ground.",
    "We all agree that in today’s fast life it is essential to keep ourselves fit and active. Therefore we must set up a proper routine to complete our daily work so that we have some time for ourselves too.",
    "Last year I went to Cox’s Bazar with my parents and my sister. It was during the end of winter, so the weather there was quite perfect. However, the beach was quite sunny, of course. We did a lot of activities such as jet skiing, kayaking, and parasailing.",
    "A prerequisite of my exercise routine is waking up early in the morning at 6 am. After that I go for a quick twenty-minute run. When I get back, I shower and then have a banana that gives me energy to do yoga for the next forty minutes.",
    "The last day when I was able to spend time with my entire family was a time when I was extremely happy. It was during the holiday last year and that was the last time I had each and every one of my siblings together at our parents’ house.",
    "The only way to achieve the impossible is to believe it is possible."

];

    let startTime;
    let timerInterval;   
    
//Element selection

const startButton = document.getElementById('startButton');
const quoteElement = document.getElementById('quote');
const resultElement = document.getElementById('result');
const textInput = document.getElementById('textInput');
const timedisplay = document.getElementById('timedisplay');

startButton.addEventListener('click', () => {
    textInput.disabled = false;
    textInput.value = '';
    resultElement.textContent=""

    textInput.focus();
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];

    startTime=Date.now()
    timerInterval=setInterval(updateTimer, 1000)
    
}); 

function updateTimer() {
    const elapsedTime = (Date.now() - startTime)/1000
    const minutes= Math.floor(elapsedTime/60);
    const seconds= Math.floor(elapsedTime % 60);

    timedisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

textInput.addEventListener('input', () => {
    const inputText = textInput.value;
    const quoteText = quoteElement.textContent;
    if (inputText === quoteText) {
        clearInterval(timerInterval);
        const elapsedTime = (Date.now() - startTime)/1000
        const minutes= Math.floor(elapsedTime/60);
        const seconds= Math.floor(elapsedTime % 60);
        const wpm = Math.round((inputText.split(' ').length / elapsedTime) * 60);
        resultElement.textContent = `You finished in ${minutes}:${seconds < 10 ? '0' : ''}${seconds} minutes with a typing speed of ${wpm} wpm.`;
        textInput.disabled = true;
        return;
    }
});