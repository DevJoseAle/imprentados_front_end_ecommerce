"use client"
import Container from './ui/container'
import Link from 'next/link'
import NavbarActions from './navbar-actions'
import Image from 'next/image'

const NavbarWithSearch = () => {


  return (
    <div className='bg-white'>
        <Container>
            <div className=' relative px-4 sm:px-6 lg:px-8 h-16 flex items-center'>
                <Link href='/' className=' ml-4 flex lg:ml-0 gap-x-2'>
                    <Image
                    src={'/logo.png'}
                    alt='logo'
                    width={150}
                    height={90}/>
                </Link>

                 <NavbarActions /> 
            </div>
        </Container>
        
    </div>  
  )
}

export default NavbarWithSearch