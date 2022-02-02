import type { NextPage } from 'next'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import { useSession, signIn, signOut } from 'next-auth/react'

const Home: NextPage = () => {
  const { data, status } = useSession()

  if (status === 'loading') return null

  return (
    <div>
      <Navbar />
      {
        data && (
          <>
            <Image src={`${data.user?.image}`} alt="" width={100} height={100}/>
            <p>{JSON.stringify(data)}</p>
            <button onClick={() => signOut()}>Salir</button>
          </>
        )
      }
    </div>
  )
}

export default Home
