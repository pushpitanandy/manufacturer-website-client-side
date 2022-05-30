import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2 className='text-4xl text-center font-bold'>Blogs</h2>
            <div className='bg-green-300 border-green-900 border-solid outline-4 rounded-md m-12 p-12'>
                <h3 className='text-2xl font-bold'>How can we improve the performance of a React Application?</h3>
                <p>There are several ways of optimizing the performance of a React Application. Some are listed below.</p>
                <ul>
                    <li>By using Chrome performance Tab to visualize how React components mount, update, and unmount.</li>
                    <li>React Developer Tools Profiler to collate timing information.</li>
                    <li>Memoization With React.memo() to wrap the contents which renders often.</li>
                    <li>Bundling And Minification - Code splitting.</li>
                    <li>Immutable data structure as it has on side effect.</li>
                </ul>
            </div>

            <div className='bg-pink-300 border-pink-900 border-solid outline-4 rounded-md m-12 p-12'>
                <h3 className='text-2xl font-bold'>What are the different ways to manage a state in a React application?</h3>
                <p>There are four types of states that need be to managed:</p>
                <ul>
                    <li>Local State</li>
                    <li>Global State</li>
                    <li>Server state</li>
                    <li>URL state</li>
                </ul>
                <p>Each state need to be managed differently.</p>
                <p>Local states in React are managed by using useState hook in one component.</p>
                <p>Global states are handled in multiple components as they are required to change data anywhere and any component.</p>
                <p>Server state comes from the external server. Whenever we fetch or update data in the database, We face the server state</p>
                <p>Data that exists on our URLs, including the pathname and query parameters. This is known as URL state. URL state is often missing as a category of state, but it is an important one.
                    In many cases, a lot of major parts of our application rely upon accessing URL state. </p>
            </div>
            <div className='bg-lime-300 border-lime-900 border-solid outline-4 rounded-md m-12 p-12'>
                <h1 className='text-2xl font-bold'>How does prototypical inheritance work</h1>
                <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.</p>
            </div>
            <div className='bg-blue-300 border-blue-900 border-solid outline-4 rounded-md m-12 p-12'>
                <h2 className='text-2xl font-bold'>What is a unit test? Why should write unit tests?</h2>
                <p>Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff. Unit testing allows software developers to actually think through the design of the software and what has to be done before they write the code. </p>
            </div>
            <div className='bg-red-300 border-red-900 border-solid outline-4 rounded-md m-12 p-12'>
                <h2 className='text-2xl font-bold'>How will you implement a search to find products by name in an array?</h2>
                <p>There are four methods to implement such task:</p>
                <ul>
                    <li>Using includes</li>
                    <li>Using indexOf</li>
                    <li>Using find</li>
                    <li>Using filter</li>
                </ul>
            </div>
        </div>
    );
};

export default Blogs;