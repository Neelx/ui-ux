const CampSite = () => {
  return(
    <div>
      Neelxxxx area 1
    </div>
  )
}

const Camp = () => {
  return (
    <section className='border-2 border-green-500 2x1:max-contianer
    relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20'>
      <div className='hiide-scrollbar flex h-[340px] w-full items-start
      justiffy-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[600px]'>
        <CampSite/>

      </div>
    </section>
  )
}

export default Camp
