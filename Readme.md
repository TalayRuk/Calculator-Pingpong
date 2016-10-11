### What is a main difference between the Node runtime environment and the browser?
1. ode does that in server side and browsers in client side. Node uses the same JavaScript engine which is the backbone of ChBrowsers have a built-in interpreter for Javascript, along with a bunch of libraries and a run-time environment for working with web pages. 

- Nodejs is an interpreter and environment for javascript which includes a bunch of libraries for using javascript as a general-purpose programming language, with an emphasis on asynchronicity and non-blocking operations. 
  Node actually runs the same interpreter as Google Chrome (V8), but provides a different set of libraries and a different run-time environment. It also includes a package management system (NPM) and a few language extensions you won't find standard in browsers (for example modules).
- the JS interpreter in Google Chrome and the JS interpreter in Nodejs are essentially the same. The difference is, in a browser your end goal is to modify stuff in a web page (text, graphics, stylesheets, etc), in Nodejs it's to run general purpose code that might do anything from 
  running a web server to manipulating files.rome
- Node doesn’t have a predefined “window” object cause it doesn’t have a window to draw anything.”Location” object is related to a particular url; that means it is for page specific. So, node doesn’t require that.	 
- Node doesn’t have “document” object (DOM), cause it never have to render anything in a page. The ”document”, which is also another predefined global variable in browsers, has the html which is rendered.
- Node has “global”, which is a predefined global object. It contains several functions that are not available in browsers, cause they are needed for server side works only.	 
- ”Require” object is predefined in Node which is used to include modules in the app.	 Browsers don’t have “require” predefined. You may include it in your app for asynchronous file loading.
- In Node everything is a module. You must keep your code inside a module.	 Moduling is not mandatory in client side JavaScript, i.e. in browsers.
- Node processes request object.	 Browsers processes response objects.

### What is npm? Why would we want to use it?
### What is gulp and what is it used for?
### What is a common use for environment variables?
### What is the difference between concatenation and minification?
### What is linting? Why is it useful in development?
  
