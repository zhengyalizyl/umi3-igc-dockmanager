import React from 'react';

function ProductCellRenderer(props: any) {
  if (props.node.group) {
    return <span> {props.value}</span>;
  }

  return null;
}

export default ProductCellRenderer;
