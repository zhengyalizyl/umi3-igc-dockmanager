import React from 'react'

function ProductCellRenderer(val:any) {
  return (
       <span>{val.node.group ? val.value : null}</span>
  )
}

export default ProductCellRenderer