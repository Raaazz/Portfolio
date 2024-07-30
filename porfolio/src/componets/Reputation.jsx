import React from 'react'

const Reputation = ({img,name,desc,feedback}) => {
  return (
    <div className="flex  items-center  justify-center gap-4 w-full">
    <img
      src={img}
      alt="dummy"
      className="w-[80px] h-[80px] rounded-full"
    />
    <div className="flex flex-col gap-3 lg:gap-0 w-full">
      <div className="flex lg:gap-2.5 gap-3">
        <p className="font-normal text-wrap">{name}</p>
        <span className="font-normal text-nowrap">{desc}</span>
      </div>
      <p className="font-normal text-wrap">
        {feedback}
      </p>
    </div>
  </div>
  )
}

export default Reputation