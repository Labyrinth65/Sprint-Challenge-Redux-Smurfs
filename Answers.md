1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

.map, .filter, .concat - object.assign

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions in Redux are packets of information that contain an action type and some data that we want associated with that action type. It is an object that has a type property and an optional payload property

Reducers calculate the new version of state based on the current state and a given Action. The best way to think about Reducers is as the make-up of our state. So when we create a reducer it can be described as the portion of state that it represents. Reducers are pure functions and they are the glue that bind together our Actions and our Store.

The store contains our state for our application. It is the single source of truth because redux sets up all shared UI data flow through the store using actions and reducers in a singular direction (never reducer -> action -> UI for example). All UI components listens to the store using connect or props from connect to make determinations on what data to change.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Component state is data accessible by the component, application state is data flowing through the store. If there is a UI piece that affects only one component, component state is a better solution, all else should go through application state

4.  What is middleware?

Middleware intercepts processes, runs a function at the intercept point, then (usually) continue the process. Sometimes middleware stops the process entirely. When this “process” is kicked off, there is normally some data that is flowing through different functions. With middleware, when we “intercept” the process, we are usually trying to do something with the data that is flowing with the process. Async flow for API calls is a good example

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Thunk is middleware that allows us to run async data flow. It changes our action creators by making them wait for thunk to do something before sending the actions to the reducer.

6.  Which `react-redux` method links up our `components` with our `redux store`?

Connect
