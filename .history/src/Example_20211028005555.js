import * as React from 'react'
import { useRef } from 'react'
import { useDimensions } from './use-dimensions'
import { MenuToggle } from './MenuToggle'
import { Navigation } from './Navigation'
// import {MenuIcon  } from '@material-ui/icons'
import { Box, Divider, List, ListItem, ListItemIcon, ListItemText, Button, Drawer } from '@material-ui/core'
import { ArrowRight } from '@material-ui/icons'


const links = [
  {
    title: 'Menu',
    Link: '/menu'
  },
  {
    title: "Qur'oni Karim",
    link: '/quran'
  },
  {
    title: "Kurslar",
    link: '/courses'
  },
  {
    title: 'Hadislar',
    link: '/hadith'
  },
]


export const Example = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {links.map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <ArrowRight /> : <ArrowRight />}
            </ListItemIcon>
            <ListItemText primary={text.title} />
          </ListItem>
        ))}
      </List>
    </Box>
  );


  return (
    <nav>
  <div>
      {[ 'Meni bos' ].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
    </nav>
  )
}
