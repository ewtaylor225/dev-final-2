var quotelist = [{
    id: 1,
    quote: "All these sea monster jokes are just Kraken me up"
  }, {
    id: 2,
    quote: "Thanks for explaining the word “many” to me, it means a lot"
  }, {
    id: 3,
    quote: "Shout out to the people that don’t know what the opposite of in is!"
  }, {
    id: 4,
    quote: "What was Forrest Gump’s email password? 1forrest1..."
  }, {
    id: 5,
    quote: "I want to be cremated as it is my last hope for a smoking hot body"
  }, {
    id: 6,
    quote: "To the guy who invented zero, thanks for nothing"
  }, {
    id: 7,
    quote: "A Mexican magician tells the audience he is going to disappear on the count of 3. He says, “uno, dos..” and then POOF he disappeared without a tres.."
  }, {
    if: 8,
    quote: "I saw a sign that said falling rocks, so I tried and it doesn’t.."
  }, {
    if: 9,
    quote: "Geology rocks, but Geography is where it’s at!"
  }, {
    if: 10,
    quote: "I would tell you an unemployment joke, but none of them work..."
  }, {
    if: 11,
    quote: "Can February March? No, but April May"
  }, {
    if: 12,
    quote: "People with bread fetishes do a lot of roll play..."
  }, {
    if: 13,
    quote: "My grandpa has the heart of the lion and a lifetime ban from the zoo.."
  }, {
    if: 14,
    quote: "Yesterday I accidentally swallowed some food coloring. The doctor says I’m okay, but I feel like I’ve dyed a little inside.."
  }, {
    if: 15,
    quote: "My friend drove his expensive car into a tree and found out how his Mercedes bends.."
  },

];

$(function() {

  $('#lghnow').hide();
  $('#lghnow').html(quotelist[Math.floor(Math.random() * 15)].quote);
  $('#lghnow').slideDown();

  $('button').css('cursor', 'pointer');

  $('#lghpls').on("click", function() {
    var random = Math.floor(Math.random() * 15);
    $('#lghnow').hide();
    $('#lghnow').html(quotelist[random].quote);
    $('#lghnow').slideDown().easeOutBound();

  });

});