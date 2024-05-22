/* eslint-disable react/prop-types */
import dayjs from 'dayjs'

function Card(props) {
    const {postedOn,title,company,type,experience,location,skills,job_link}=props
    const date1=dayjs(Date.now())
    const diffInDays=date1.diff(postedOn, 'day')

  return (
    <div className='mx-12 sm:mx-30 lg:mx-40 mb-4 '>
        <div className=' md:flex flex-wrap justify-between items-center  px-6 py-4 bg-zinc-200 rounded-md border border-black shadow-lg hover:border-blue-600 hover:translate-y-1 hover:scale-100  transition-all ease-in-out   duration-300'>
        <div className='flex flex-col flex-wrap items-start gap-3'>
            <h1 className='text-lg font-semibold'>{title}-{company}</h1>
            <p>{location} - {experience} - {type}</p>
            <div className='flex flex-wrap mb-5 items-center gap-2'>
                {skills.map((skill,index)=>(
                    <p className="text-neutral-600 py-1 px-2 rounded-md border border-black" key={index}>{skill}</p>
                ))}
            </div>
        </div>
        <div className='flex  items-center gap-4'>
            <p className='text-neutral-600'>Posted {diffInDays>1?`${diffInDays} days `:`${diffInDays} day`} ago </p>
            <a href={job_link}>
            <button className='p-2 bg-blue-600 text-white mt-2 rounded-md'>Apply</button>
            </a>
          
        </div>
        </div>
    </div>
  )
}

export default Card