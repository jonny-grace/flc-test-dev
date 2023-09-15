import Link from 'next/link'
import React from 'react'
import Navbar from '../../components/Navbar'

const index = () => {
  return (
    
    <div className=' w-full overflow-x-hidde mb-16'><Navbar />
    <div
    className=" w-screen relative bg-gray-50 "
  >
  <div className="absolute inset-0 bg-gray-200 opacity-50"></div>
  
    <div
      className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:justify-center  lg:items-center lg:px-3"
    >
      <div className="max-w-xl text-center sm:text-left text-black">
        <h1 className="lg:text-7xl font-extrabold sm:text-5xl">
        beyond results
        </h1>
        <p className='mt-10 text-center  md:px-10'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
        euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
        veniam, quis nostrud</p>

        
        
      </div>
    </div>
  </div>

  <div class="mt-10 grid grid-cols-3 gap-10 px-32">
  <Link href='/internalCaseStudy' class="h-[400px] bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat">
  <div className="p-4 text-white">
  <p className='text-xl font-semibold text-left'>Retail</p>
   <h2 className="text-4xl font-bold mt-3">Ajmal Perfumes</h2>
 </div>
  </Link>

  <Link href='/internalCaseStudy' class="col-span-2 bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat">
  <div className="p-4 text-white">
  <p className='text-xl font-semibold text-left'>Electronics</p>
   <h2 className="text-4xl font-bold mt-3">Hisense FIFA 2022</h2>
 </div>
  </Link>

  <Link href="/internalCaseStudy" class="col-span-2 bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat">
  <div className="p-4 text-white">
  <p className='text-xl font-semibold text-left'>FMCG</p>
   <h2 className="text-4xl font-bold mt-3">Persil Gel</h2>
 </div>
  </Link>

  <Link href="/internalCaseStudy" class="h-[400px] bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat">
  <div className="p-4 text-white">
  <p className='text-xl font-semibold text-left'>F&B</p>
   <h2 className="text-4xl font-bold mt-3">Thryve</h2>
 </div>
  </Link>

</div>
<Link href="/internalCaseStudy">
<span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-black decoration-2 group-hover:underline font-medium w-full flex justify-center">
Load more
</span>
</Link>

    </div>
  )
}

export default index