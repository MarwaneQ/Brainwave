
function Section({className, children, id, crosses,crossesOffset, customPadding}) {
  return (
    <div className={`relative ${customPadding || `py-10 lg:py-16 xl:py-20 ${crosses ? 'lg:py-32 xl:py-40':''}${className || ''} `}`}>
      {children}
      <div className={`absolute top-0 left-5 w-0.25 bg-stroke-1 pointer-events-none h-full md:block lg:left-7.5 xl:left-10 `}/>
      <div className={`absolute top-0 left-5 w-0.25 bg-stroke-1 pointer-events-none h-full md:block lg:right-7.5 xl:right-10 `}/>

    </div>
  )
}

export default Section