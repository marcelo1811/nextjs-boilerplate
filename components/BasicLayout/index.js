import Navbar from "./Navbar"

const BasicLayout = (props) => {
  return (
    <div>
      <Navbar/>
      {props.children}
    </div>
  )
}
export default BasicLayout