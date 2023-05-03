The browser outer component needs to be an inderiect parent of the navlink it pertains to

My application is strongly coupled maing it difficult to refactor as a multi oage app

The state object is confusing and should be integrated into the app component

I want to add extra pages to further develop the site - I need to think about user experience

Upon arrival at the site there needs to be a landing page explaining the site's purpose -> a call to action will redirect the user to the form page

Once the form has been completed, another call to action will allow the user to download their CV as a pdf open in new tab

There should also be a further bout page that explains how i made the site.

The tree will be as follows

main
    app
        home
        form
            preview (modal)
        about

The problem with this structure is that moving between pages resets the state. This means that all application logic must happen inside the form page. This makes the user experience extremely confusing since the form is long and complex and may require multiple visits/ trips around the site to complete. The state needs to be lifted up to the app level. The problem here is that

I'm going to use the useContext hook to mitigate the prop drilling problem. I'll store all the state and useState setters in an object which will be passed to the necassary child components using the user.context wrapper component.

I'm struggling to understand how to refactor the current state managment structure in the simplest and quickest way. I don't want to create breaking changes that are a pain to fix. I know i need to completely overhaul the current state managment system but I know it will be extremely difficult.

The layut of the CV needs refining. I need to add some custom classes to equally space the listed data



State: 

[
  {
    "name": "State",
    "value": [
      "{age: \"24\", firstName: \"Joe\", gender: \"Male\", jobTi…}"
    ],
    "subHooks": [],
    "hookSource": {
      "lineNumber": 24,
      "functionName": "App",
      "fileName": "http://127.0.0.1:5173/gh-pages-deployment/src/App.jsx?t=1682606206851",
      "columnNumber": 41
    }
  },
  {
    "name": "State",
    "value": [
      "{profficiency: 3, skill: \"HTML & CSS\"}",
      "{profficiency: 3, skill: \"JavaScript ES6\"}",
      "{profficiency: 2, skill: \"ReactJS\"}",
      "{profficiency: 2, skill: \"Git & Github\"}"
    ],
    "subHooks": [],
    "hookSource": {
      "lineNumber": 25,
      "functionName": "App",
      "fileName": "http://127.0.0.1:5173/gh-pages-deployment/src/App.jsx?t=1682606206851",
      "columnNumber": 47
    }
  },
  {
    "name": "State",
    "value": [
      "{grade: \"Second Class\", institution: \"BIMM Universi…}",
      "{grade: \"Merit\", institution: \"Shrewsbury College A…}",
      "{grade: \"B, C, B\", institution: \"Adams' Grammar Sch…}"
    ],
    "subHooks": [],
    "hookSource": {
      "lineNumber": 26,
      "functionName": "App",
      "fileName": "http://127.0.0.1:5173/gh-pages-deployment/src/App.jsx?t=1682606206851",
      "columnNumber": 45
    }
  },
  {
    "name": "State",
    "value": [
      "{addressLine1: \"57 Palatine Rd\", addressLine2: \"Wes…}"
    ],
    "subHooks": [],
    "hookSource": {
      "lineNumber": 27,
      "functionName": "App",
      "fileName": "http://127.0.0.1:5173/gh-pages-deployment/src/App.jsx?t=1682606206851",
      "columnNumber": 41
    }
  },
  {
    "name": "State",
    "value": [
      "{profficiency: 3, skill: \"HTML & CSS\"}",
      "{profficiency: 3, skill: \"JavaScript ES6\"}",
      "{profficiency: 2, skill: \"ReactJS\"}",
      "{profficiency: 2, skill: \"Git & Github\"}"
    ],
    "subHooks": [],
    "hookSource": {
      "lineNumber": 28,
      "functionName": "App",
      "fileName": "http://127.0.0.1:5173/gh-pages-deployment/src/App.jsx?t=1682606206851",
      "columnNumber": 39
    }
  }
]




The CV will consist of an integer number of pages of fixed size.

Document will contain all the data from the form in display order. The information will be separated into chunks of sufficiently small height that many will fit on one page. The height of each chuck will be variable based on the width of the pages. Once page width has been selected, the chunk components will be rendered and their heights will be stored in a ref. A ref is an object that holds a mutable value in its current property. You can place all sorts of values here, but in this post we will focus on DOM elements.

You can use the ref object to get a reference to a DOM element. This example uses the useRef hook for this.

const ref = useRef(null);

return <div ref={ref}>An item</div>;

The data from the document component will be sorted into page components based on height and order of appearance.

Pages will be an array of the data displayed on each page.

I may need to restyle the cv so that each section can be split at any point.

The section titles will be appended to the top element in each array - This means they will never be separated from their content