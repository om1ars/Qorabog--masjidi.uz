import * as React from 'react'
import { useRef } from 'react'
import { useDimensions } from './use-dimensions'
import { MenuToggle } from './MenuToggle'
import { Navigation } from './Navigation'



export const Example = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  return (
    <nav>

    </nav>
  )
}
