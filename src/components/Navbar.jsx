import React from 'react'
import { Badge } from '@material-ui/core'
import {Search, ShoppingCartOutlined, PersonAdd, AccountCircle} from '@material-ui/icons'

const Navbar = ()=> {
  return (
    <header className="h-20 w-full px-12 py-4 lg:px-24 flex items-center gap-4" style={{backgroundColor: '#4d2f2f'}}>
      <div className="px-3 border-solid border-2 flex-1 width-4/5 max-w-sm h-8 bg-white flex justify-between items-center" style={{borderColor: "#b39068"}} >
        <input className="border-none flex-1 pl-2 .focus:border-white" placeholder="Search products"/>
        <Search className='text-gray-500 w-max text-sm'/>
      </div>
      <h1 className="uppercase text-2xl flex-1 text-center" style={{color:'#b39068'}}>Dùne</h1>
      <div className="flex-1 flex justify-end gap-4" style={{color:'#b39068'}}>
        <PersonAdd/>
        <AccountCircle/>
        <Badge badgeContent={4} color="primary">
          <ShoppingCartOutlined/>
        </Badge>
      </div>
    </header>
  )
}

export default Navbar
