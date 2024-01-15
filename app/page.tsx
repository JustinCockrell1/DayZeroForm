import Image from 'next/image'
import FormContainer from './components/FormContainer'
import Modal from './components/Modal'

export default function Home() {
  return (
    <main>
    <div className='flex justify-center w-full min-h-screen items-center bg-black'>
      <div className='w-[320px] h-[768px] bg-background rounded-2xl overflow-hidden relative'>
        <FormContainer />
      </div>
    </div>
    </main>
  )
}
