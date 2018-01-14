list of steps:

0) install node, npm, emacs
1) sudo npm i -g create-react-app
2) create-react-app searchypoo
3) npm start, see in browser
4) copy App to Query, js, css, put in an image an input and a button
5) import Query to App and render it
6) get an img url and put it in as an attr, breakout
7) connect a basic form as a controlled input
  i) make a state with a query
  ii) render this.state.query to the input
  iii) bind an onChange
  iv) make the onChange (follow exact instructions :)
  v) bind an onClick console.log to the button withe state.query
8) move the query handler to a prop function
  i) move the console.log to App
  ii) fake some data, import it
  iii) make a default state with no search results
  iv) after a query, render results instead of Query
  v) make a ul via map
  vi) refactor that into a component
9) style the thing.
10) put in other features (disable search, animate, routing, history, etc...)