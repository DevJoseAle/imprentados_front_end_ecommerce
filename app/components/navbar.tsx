import React from 'react'
import Container from './ui/container'
import Link from 'next/link'
import MainNav from './mainnav'
import getCategories from '@/actions/get-categories'
import getStores from '@/actions/get-stores'
import NavbarActions from './navbar-actions'

const Navbar = async() => {


  let stores = await getStores()

  return (
    <div className='border-b'>
        <Container>
            <div className=' relative px-4 sm:px-6 lg:px-8 h-16 flex items-center'>
               
                <MainNav data={stores}/>
               
            </div>
        </Container>
        
    </div>  
  )
}

export default Navbar