**Classes**
- creating a component to take control of the div id using javascript class-based component
- classes are a way for you to blueprint objects in javascript: 
```
// Example:
(1)class (2)App (3)extends (4)React.(5)Component{
  // some code here
}
```
1. First a class keyword
2. Then name of the class
3. Extending a Component allows to pass props to a user defined class
4. Have acess to the React object using a [source code](https://unpkg.com/react@16/umd/react.development.js)
5. And inherit all the basic functionality of a Component into the class

**Render method**
- The render() function does not modify component state, it returns the same result each time it’s invoked
- and it does not directly interact with the browser.

**JSX**
- stands for JavaScript XML
- is a way to write HTML code in javascript

**React DOM**
- this [source code](https://unpkg.com/react-dom@16/umd/react-dom.development.js) that takes the component and renders them to the DOM
- then use a render method and inside pass in two parameters: 
  - the first is the class/component you want to render to the DOM, add it as a html tag
  - the second is going to where you want to put in the DOM using document.getElementById
  ```
  //  Example:
  ReactDOM.render(<App />, document.getElementById('app'));
  ```
- JSX is not supported in browser so you must use a tool called babel to transpile the code
- Transpilers, or source-to-source compilers, are tools that read source code written in 
  one programming language, and produce the equivalent code in another language. 

*Steps:*
 1. go to https://babeljs.io
 2. click on Setup
 3. click in the brower or scroll down to Usage
 4. grab the babel standalone script tags
 
 - can output dynamic content inside the components by using curly braces in between a html tag
 ```
 //  Example:
 <p>{Math.random() * 10}</p>
 ```
    
