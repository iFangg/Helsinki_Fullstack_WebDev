const Header = (course) => {
    return (
        <div>
            <h1>{course.name}</h1>
        </div>
    )
}

const Part = (props) => {
    return (
        <div>
            {props.part} {props.no_exs}
        </div>
    )
}

const Content = (props) => {
    console.log(props)
    return (
        <div>
            <Part part={props.parts[0].name} no_exs={props.parts[0].exs}/>
            <Part part={props.parts[1].name} no_exs={props.parts[1].exs}/>
            <Part part={props.parts[2].name} no_exs={props.parts[2].exs}/>
        </div>
    )
}

const Total = (props) => {
    return (
        <div>
            <p>Number of exercises = {props.total}</p>
        </div>
    )
}

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exs: 10
            },
            {
                name: 'Using props to pass data',
                exs: 7
            },
            {
                name: 'State of a component',
                exs: 14
            }
        ]
    }

  
    return (
      <div>
        <Header name={course.name} />
        <Content parts={course.parts} />
        <Total total={course.parts[0].exs + course.parts[1].exs + course.parts[2].exs} />
      </div>
    )
  }
  
  export default App