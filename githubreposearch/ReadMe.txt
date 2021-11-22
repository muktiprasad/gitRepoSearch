Notes:
It is a small application so I have not added Redux. Due to time constraint
 have not covered whole test. have added an indicator while fetching git repos.

There is a validation I have added for the textbox, if search text is
 not given

I have created a dropdown component, Result component, Search component,
 Loader component, Product thumbnail component to show git repos in result 
 container.

I have added few unit tests in App.test.js file

I have created a CSS file named ProductThumbnail.CSS

I have added a gif for progress indicator.

To Run application:

Just do a npm i , and then npm start. For testing use npm test.

If we want to integrate Redux:

For Redux, We can create a folder redux, create files like store.js, reducer.js
repoTypes.js, repoAction.js. We can add store in app.js using provider
From button we can dispatch an action to fetchRepos and in repoAction.js we can have
the api call and update the repos. in reducer as per action we can update data.

