import React from 'react'
import { DropdownMenu, MenuItem } from 'react-bootstrap-dropdown-menu';

class SettingsMenu extends React.Component {
    render() {
        return (
          <DropdownMenu  iconColor='#aabbcc'>
            <MenuItem text='edit profile' location='/simple' />
            <MenuItem text='manage product' location='/simple' />
            <MenuItem text='create product' location='/simple' />
            <MenuItem text='show and edit' location='/simple' />
            <MenuItem text='history' location='/simple' />
            <MenuItem text='pending approval' location='/simple' />
            <MenuItem text='signOut' location='/simple' />
          </DropdownMenu>
        )
      }
  }
  
  export default SettingsMenu;