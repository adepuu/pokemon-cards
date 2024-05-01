import searchImg from "../assets/search.webp"

const Loading: React.FC<{ isLoading?: boolean }> = ({ isLoading }) => {
  return (
    <div className='bg-dark w-80 min-h-screen flex flex-col items-center justify-center'>
      <>
        <img className='w-10/12' src={searchImg} alt='search-icon' />
        <p className='text-white text-2xl mt-4'>{`${
          !isLoading ? "Loading" : "Search"
        }...`}</p>
      </>
    </div>
  )
}

export default Loading
