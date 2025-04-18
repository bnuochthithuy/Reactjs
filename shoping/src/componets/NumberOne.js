import React  from 'react'
import './App/App'
function NumberOne(props) {
  return (
      <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
        <img src={props.linkanh} height= "200px" width="200px"></img>
        <p>{props.tieude}</p>
        <p>Giá sản phẩm</p>
      </div>
  )
}
export default NumberOne
