import React from 'react';
import ReactDOM from "react-dom/client"

// React element
const heading = <h1 id='head' className='heading'>Hello World from JSX !!</h1>
const img = <img src='https://images.pexels.com/photos/17896654/pexels-photo-17896654/free-photo-of-insomnia.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'></img>

const root = ReactDOM.createRoot(document.getElementById('root'));

// React component
// There are two types of component in react
// 1. Functional component : A js function return some pieces of jsx code is known as functional component
// 2.class based component : 
const Heading = () => {
    return <h1>This is a heading componenet</h1>
};

const Image = () => (
     <img src = 'https://images.pexels.com/photos/17896654/pexels-photo-17896654/free-photo-of-insomnia.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'/>
);

const Para = () => <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, molestiae!</p>;

function Footer(){
    return <h3>Footer component</h3>
};

const Container = () => {
    return <div id='conatiner'>
        {hello_10_times()}
        <Heading />
        <Image />
        <Para />
        <Footer />
    </div>
}

//We can inject js in component using {} braces below is an example of it
function hello_10_times(){
    return  <h1>Hello</h1>;
}

root.render(<Container/>);

