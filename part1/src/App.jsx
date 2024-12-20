const Header = (course) => {
    return (
        <div>
            <p>{course.name}</p>
        </div>
    )
}

const Part = (props) => {
    return (
        <div>
            {0}
        </div>
    )
}

const Content = (props) => {
    return (
        <div>
            {props.part} {props.no_exs}
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
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14
  
    return (
      <div>
        <Header course={course} />
        <Content part={part1} no_exs={exercises1} />
        <Content part={part2} no_exs={exercises2} />
        <Content part={part3} no_exs={exercises3} />
        <Total total={exercises1 + exercises2 + exercises3} />
      </div>
    )
  }
  
  export default App