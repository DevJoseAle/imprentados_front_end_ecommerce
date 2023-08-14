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
                <Link href='/' className=' ml-4 flex lg:ml-0 gap-x-2'>
                    <p className='font-bold text-xl'>IMPRENTADOS CL</p>
                </Link>

                <MainNav data={stores}/>
                 <NavbarActions /> 
            </div>
        </Container>
        
    </div>  
  )
}

export default Navbar