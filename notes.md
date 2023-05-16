Issues

My application is too strongly coupled making it difficult to refactor as a multi page app

The state object is confusing and should be integrated into the app component

I want to add extra pages to further develop the site - I need to think about user experience

Upon arrival at the site there needs to be a landing page explaining the site's purpose -> a call to action will redirect the user to the form page

Once the form has been completed, another call to action will allow the user to download their CV as a pdf open in new tab

There should also be a further about page that explains how i made the site.

The router tree will be as follows

main
    app
        home
        form
            preview (modal)
        about

The problem with this structure is that moving between pages resets the state. This means that all application logic must happen inside the form page. This makes the user experience extremely confusing since the form is long and complex and may require multiple visits/ trips around the site to complete. The state needs to be lifted up to the app level.

I'm going to use the useContext hook to mitigate the prop drilling problem. I'll store all the state and useState setters in an object which will be passed to the necassary child components using the user.context wrapper component.

I'm struggling to understand how to refactor the current state managment structure in the simplest and quickest way. I don't want to create breaking changes that are a pain to fix. I know i need to completely overhaul the current state managment system but I know it will be extremely difficult.

The layut of the CV needs refining. I need to add some custom classes to equally space the listed data

The CV will consist of an integer number of pages of fixed size.

Document will contain all the data from the form in display order. The information will be separated into chunks of sufficiently small height that many will fit on one page. The height of each chunck will be variable based on the width of the pages. Once page width has been selected, the chunk components will be rendered and their heights will be stored in a ref. A ref is an object that holds a mutable value in its current property. You can place all sorts of values here, but in this post we will focus on DOM elements.

You can use the ref object to get a reference to a DOM element. This example uses the useRef hook for this.

const ref = useRef(null);

return <div ref={ref}>An item</div>;

The data from the document component will be sorted into page components based on height and order of appearance.

Pages will be an array of the data displayed on each page.

I may need to restyle the cv so that each section can be split at any point.

The section titles will be appended to the top element in each array - This means they will never be separated from their content



I'm wondering if there might be simpler way to hande the page formatting. Perhaps a chunk centric approach to the state data structure.

I see no reason why the data can't be separated into chunks to begin with. I just need to make sure the styling isn't affected.

The benefit of chunking the form data upon storage is that I can assign unique id's which can be referenced throught the handling of the data. This will make the height query simpler and may indeed be the only way to acheive this.

I can make the application more weakly coupled by passing all the data from the form to the formatting as one large array of objects rather than lots of smaller data structures.

Im deliberating passing the data through not as JSX, but as JSON, also sending premade style classes as string through alongside the form data. This would mean the styling could be taken care of at the form end rather than the formatting which strongly couples the two processes more than would be desired however, it allows the data to be sent as JSON which improves the ease of data comprehension and state managment.

   ||
   ||
  \  /
   \/

I could use a style key system which simplifies the styling options on the form end down to a series of keys which unlock premade custom classes on the format end. This reduces the strength of coupling between the two components. The problem here is that I'm not sure wether the height query will work on the components that are being rendered.

The organisation of the data will be determined by height queries which take place after the data has been read creating cricular logic.
I need to implement a read only approah that doesn't modify the state.

Perhaps initialising some split point variables which reference the index at which the chunks need to be rendered on the next page.

These could be generated during the render of each chunk component.

Each page component will require access to the split pointers therefore, they will need to be passed down as props with getters and setters

each page component will have a property 'firstChunk' and 'lastChunk' which will determine which set of chunks it renders. This means it is imperative that each chunk has a unique id. The problem here is that the flow of data is top down, so it is difficult for the chunks to determine where they are rendered on page. Instead, the page should determine how many chunks it recieves.



Currently, my data is organised so that it can be split into chunks that fill the page. A chunk's height varies depending on it's contents. Each chunk stores its height in it's local state using a reference and a document query. A running sum of




The current problem is the strong coupling between document, page, chunk and it's children. The data flow is strongly affected by the child components which requires a circular logic that is proving extremely tricky.

I have opted to pass chunk data through props, storing them in a lifted up state in document. Any state changes will re-render the whole family of components. The main difficulty is to do with the height referencing of the chunk components. It is paramount to the functionality of the document that these heights be accessible by the parents, requiring lifted state through two generations of component.

On point I need to recognise is the heights of the components. Chunks and pages are fundamentally different because one has its height determined by its children, and its position in the dom determined by its height, the other has its height determined by the user, and its positin is pre determined. The unknown factor in creating the pages is the quantity to be rendered. It makes more sense for the page logic to take place in it's parent component and be passed down via state.

It makes sense for all data to be structured in page -> chunk format, and sent to each component separatly. This ensures every component recieves only the data it requires to operate and nothiung more.