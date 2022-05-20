const tutorials = [
  'What Does The This Keyword Mean?',
  'What Is The Constructor OO Pattern?',
  'Implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What Is NaN And How Can We Check For It',
  'What Is The Difference Between StopPropagation And PreventDefault?',
  'Immutable State And Pure Functions',
  'What Is The Difference Between == And ===?',
  'What Is The Difference Between Event Capturing And Bubbling?',
  'What Is JSONP?'
];

function titleCased() {
  const cased = tutorials.map((cb) => {
      const newCase = cb
          .split(' ')
          .map((word) => {
              return word.charAt(0).toUpperCase() + word.slice(1)
          })
          .join(' ')

      return newCase
  })
  return cased
}
