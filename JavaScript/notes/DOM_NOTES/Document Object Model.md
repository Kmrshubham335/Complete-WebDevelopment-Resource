inner text=to concatenate the text with other html
inner html= we can add other html tag with this
but we don't use this because it give the vulnerable to Cross-Site Scripting

# Document Object Model

DOM to access the document and its elements.
The DOM is not a programming language.
The DOM is not part of the JavaScript language, but is instead a Web API used to build websites.
The DOM was designed to be independent of any particular programming language, making the structural representation of the document available from a single, consistent API.
JavaScript is the client-side scripting language that connects to
the DOM in an internet browser.

# DOM can be modified by client-side JavaScript.

Type the following into the console:
**document.body**
Output

<body>
<h1>Document Object Model</h1>
</body>
document is an object, body is a property of that object that we have
accessed with dot notation. Submitting document.body to the console
outputs the body element and everything inside of it.

###### The DOM Tree and Nodes

Element nodes
Text nodes
Comment nodes

###### Access Elements in the DOM

ID #demo getElementById()
Class .demo getElementsByClassName()
Tag demo getElementsByTagName()
Selector (single) querySelector()
Selector (all) querySelectorAll()

**How To Traverse the DOM**

The document object is the root of every node in the DOM. This object
is actually a property of the window object, which is the global, top-level
object representing a tab in the browser. The window object has access to
such information as the toolbar, height and width of the window, prompts,
and alerts. The document consists of what is inside of the inner
window.
Property        Gets
parentNode       Parent Node
parentElement   Parent Element Node

###### How To Modify Attributes, Classes, andStyles in the DOM
The hasAttribute() and getAttribute() methods are usually
used with conditional statements, and the setAttribute() and
removeAttribute() methods are used to directly modify the DOM.Modifying Classes
The class attribute corresponds to CSS class selectors. This is not to be
confused with ES6 classes, a special type of JavaScript function.
CSS classes are used to apply styles to multiple elements, unlike IDs which
can only exist once per page. In JavaScript, we have the className and
classList properties to work with the class attribute.

getAttribute():
Retrieve the value of a specified attribute on an element.
Syntax: element.getAttribute("attributeName").
setAttribute():
Set the value of a specified attribute on an element.
Syntax: element.setAttribute("attributeName", "value").
removeAttribute():
Remove a specified attribute from an element.
Syntax: element.removeAttribute("attributeName").