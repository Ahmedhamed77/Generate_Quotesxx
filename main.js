const qoutes = [
    {
        quote: 'No pressure, no diamonds..',
        author: '-Thomas Carlyle'
    },
    {
        quote: 'Stay foolish to stay sane.',
        author: '-Maxime Lagacé'
    },
    {
        quote: 'When nothing goes right, go left.',
        author: '-Author'
    },
    {
        quote: 'Try Again. Fail again. Fail better.',
        author: '-Samuel Beckett'
    },
    {
        quote: 'Don’t tell people your plans. Show them your results..',
        author: '-Author'
    },
    {
        quote: 'Take the risk or lose the chance.',
        author: '-Author'
    },
    {
        quote: 'If you\'re not making mistakes, then you\'re not doing anything. I`m positive that a doer makes mistakes.',
        author: '-John Wooden'
    }
]

const qoutebtn = document.getElementById('btn-quote');
const qoute = document.querySelector('.box-quote');
const author = document.querySelector('.bot');

qoutebtn.addEventListener('click',function(){

    let random = Math.floor(Math.random() * qoutes.length);
    qoute.innerHTML = qoutes[random].quote;
    author.innerHTML = qoutes[random].author;
   
});