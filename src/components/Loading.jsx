
export const Loading = () => {
  return (
    <div className='h-[100vh] w-[100%] absolute flex justify-center text-white top-0 overflow-hidden bg-[#000] z-10'>
        <div className="loadingContainer my-auto">
        <div className="loader"></div>
        <span className="flex -translate-y-[130px] translate-x-[85px] tracking-wider text-lg uppercase">loading</span>
        </div>
    </div>
  )
}
