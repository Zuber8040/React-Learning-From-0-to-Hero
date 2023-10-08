import React from 'react'
import ReactDOM from 'react-dom/client'
const heading = React.createElement("h1",{
    className:"title",
},"Hello from Heading  ;( ");


// Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class “title”)

/*
const heading1 = React.createElement(
    'h1',
    {
        className:'h1tag'
    },"This is h1-Tag"
);

const heading2 = React.createElement(
    "h2",
    {
        className:'h2-tag'
    },"this is h2-tag"
);

const heading3 = React.createElement(
    "h3",{
        className:"h3-tag"
    },"This is h3-tag"
)

const divHead = React.createElement(
   'div',
   {
    className:'title'
   },[heading1,heading2,heading3]
)
*/


// Create the same element using JSX

/*
const heading1 = (<h1>Hello from Heading 1 </h1>);
const heading2 = (<h2>Hello from Heading 2 </h2>)
const heading3 = (<h3>Hello from Heading 2 </h3>)

const divHead = (
    <div className='title'>
        {heading1}
        {heading2}
        {heading3}
    </div>
)

*/

/*

const Heading1 = ()=>{
    return <h1>heading 1</h1>
}

const DivHead=()=>{
    return <Heading1/>

}

*/



/*


 Create a Header Component from scratch using Functional Components with JSX
 Add a Logo on left
 Add a search bar in middle
 Add User icon on right
 Add CSS to make it look nice
*/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<DivHead/>);