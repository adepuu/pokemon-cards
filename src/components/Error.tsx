import errorImg from "../assets/error.webp"

const Error = () => {
  return (
    <div className='bg-dark w-80 min-h-screen flex flex-col items-center justify-center'>
      <>
        <img className='w-10/12' src={errorImg} alt='search-icon' />
        <p className='text-white text-2xl mt-4'>Something went wrong!!</p>
      </>
    </div>
  )
}

export default Error
