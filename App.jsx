// 1) --- JSX (HTML + JS Together) ---- //

# JSX is not HTML — it’s JavaScript syntax.

const isHot = true

return (
  <h2>{isHot ? "Hot Weather" : "Cool Weather"}</h2>
)

// 2) -------- Props (Data Flow) -------//

# Props = data passed to components

<Card name="Tenjeeb" temp = "37°C" condition="Hot"/> // Argument from parent component

// Child component

// 1st method
  const Card = ({name, temp, condition}) => {
  return (
    <div>
      I am a card component.
      <h3>The data from the parent are: {name}, {temp}, {condition}</h3>
    </div>
  )
}

// 2nd method
    const Card = (props) => {
  return (
    <div>
      I am a card component.
      <h3>The data from the parent are: {props.name}, {props.temp}, {props.condition}</h3>
    </div>
  )
}
