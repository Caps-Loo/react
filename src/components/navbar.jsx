function Navbar(props) { 
  // ({navValue}) kedua 2
  // (props) pertama 1
  return (
    <nav>
        {/* pertama 1 */}
        <p>{props.name}</p>
        <h2>{props.baby}</h2>
        <h2>{props.halo}</h2>
        <h2>{props.paragraf}</h2> 
        {/* pertama 1 */}

        {/* kedua 2 */}
        {/* <h1>Logo</h1>
        <ul>
          <li>Home</li>
          <li>{!navValue ? "About" : navValue}</li>
        </ul> */}
        {/* kedua 2 */}

    </nav>
  )
}

export default Navbar
