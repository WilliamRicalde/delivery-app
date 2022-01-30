import type { NextPage } from 'next'

import { Button } from '@nextui-org/react'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <Button>Hola mundo</Button>
    </div>
  )
}

export default Home
