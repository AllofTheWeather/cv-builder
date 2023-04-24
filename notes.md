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