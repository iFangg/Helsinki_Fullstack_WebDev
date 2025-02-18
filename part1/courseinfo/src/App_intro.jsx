const Hello = (props) => {
    console.log(props)
    return (
        <div>
            <p>Hello {props.name}, you are {props.age}</p>
        </div>
    )
}

const Footer = () => {
    return (
      <div>
        greeting app created by <a href='https://github.com/mluukkai'>ME?</a>
      </div>
    )
}


const App = () => {
    // console.log("hello from component")
    const now = new Date();
    const a = 10;
    const b = 20;
    // console.log(now, a + b);
    const name = 'Peter';
    const age = 10

    return (
      <div>
        <h1>Greetings, it is {now.toString()}</h1>
        <p>{a} plus {b} is {a + b}</p>
        <Hello name='Maya' age = {26 + 10} />
        <Hello name={name} age = {age} />
        <Footer />
      </div>
    )
  }
  
  export default App