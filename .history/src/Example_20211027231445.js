import * as React from 'react'
import { useRef } from 'react'
import { useDimensions } from './use-dimensions'
import { MenuToggle } from './MenuToggle'
import { Navigation } from './Navigation'



export const Example = () => {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)

  return (
    <nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
    >
      <motion.div className='background' variants={sidebar} />
      <Navigation toggle={() => toggleOpen()} />
      <MenuToggle toggle={() => toggleOpen()} />
    </nav>
  )
}
