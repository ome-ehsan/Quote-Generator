const quote = document.querySelector('.quote');
const auth =  document.querySelector('.quoteAuth');
const button = document.querySelector('button');


const quotes = {
    0: {
      author: "-Charles Darwin",
      text: "The difference in mind between man and the higher animals, great as it is, certainly is one of degree and not of kind."
    },
    1: {
      author: "-George Orwell",
      text: "All animals are equal, but some animals are more equal than others."
    },
    2: {
      author: "-Franz Kafka",
      text: "Ape in a cage knows how to behave; man in freedom doesn’t."
    },
    3: {
      author: "-Mark Twain",
      text: "Man is the an animal. Or needs to."
    },
    4: {
      author: "-Douglas Adams",
      text: "Humans are not proud of their ancestors, and rarely invite them round to dinner."
    },
    5: {
      author: "-Voltaire",
      text: "If we believe absurdities, we shall commit atrocities."
    },
    6: {
      author: "-Jane Goodall",
      text: "The least I can do is speak out for those who cannot speak for themselves."
    },
    7: {
      author: "-William Shakespeare",
      text: "What a piece of work is man! How noble in reason, how infinite in faculty."
    },
    8: {
      author: "-H.G. Wells",
      text: "Man is the unnatural animal, the rebel child of nature."
    },
    9: {
      author: "-Bertrand Russell",
      text: "Man is a rational animal who always loses his temper when called upon to act in accordance with the dictates of reason."
    }
  };


button.addEventListener('click', function(){

    const randNum = Math.floor(Math.random() * Object.keys(quotes).length);
    let qt = quotes[randNum].text;
    let qtAuth = quotes[randNum].author;
    console.log(qt);
    quote.innerText = qt;
    auth.innerText = qtAuth;
})
