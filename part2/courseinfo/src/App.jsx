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
            <p><strong>total of {props.total} exercises</strong></p>
        </div>
    )
}

const Course = ({ course }) => {
    const total = course.parts.reduce((s, p) => s + p.exs, 0)
    return (
        <div>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Total total={total} />
        </div>
    )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exs: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exs: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exs: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App