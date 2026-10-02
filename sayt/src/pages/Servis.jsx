import React from 'react'
import rasm from '../assets/image.png'
import rasm1 from '../assets/rasm1.jpg'

const Servis = () => {
  return (

    <div>
      <div className='my-4 mx-12'>
        <p className=' text-[#c9a84c]'>Servises</p>
        <div className='my-4'>
          <h1 className='text-5xl'>Откройте для себя полный <br /> спектр услуг, которые мы <br /> предлагаем для доставки</h1>
        </div>
        <div>
          <img className='w-310 h-125 my-16 mx-2.5' src={rasm} alt="" />
        </div>
      </div>

      <div>
        <div className='my-4 mx-12'>
          <p className='text-[#c9a84c] text-4xl'>FAQS</p>
          <br />
          <div>
            <h1 className='text-5xl ' >Часто задеваемые <br /> вопросы</h1>
          </div>
          <br />
          <div className='flex items-center'>
            <div>
              <p className='text-2xl text-[#494949]'>"Thank you very much Cicero for saving <br /> my time. With Cicero, the delivery of goods <br /> is faster even though it is  very far <br /> away. I also don't  need to be afraid <br /> and doubtful because Cicero  provides a <br /> place to store  my shipping documents  and <br /> makes  it easier with  excellent real-time trackiing”</p>
              <br />
              <h1 className='text-3xl'>ChiristinaMartha Tiahahu</h1>
            </div>
            <div>
              <img className='w-147 h-98 rounded-2xl mx-33.5' src={rasm1} alt="" />
            </div>
          </div>
        </div>

      </div>

      <footer className='text-white p-7 bg-[#C8A44E]'>
        <br />
        <hr className='bg-white' />
        <div className='flex justify-between m-10 p-15'>
          <div>
            <h1 className='text-white font-bold text-2xl'>INFORMATION</h1>
            <br />
            <h1 className='text-white '>Contact Us</h1>
            <br />
            <h1 className='text-white'>Our Address</h1>
            <br />
            <h1 className='text-white'>Privacy Policy</h1>
          </div>
          <div>
            <h1 className='text-white font-bold text-2xl'>SERVIES</h1>
            <br />
            <h1 className='text-white '>Spesial Offers</h1>
            <br />
            <h1 className='text-white '>SMS Servies</h1>
            <br />
            <h1 className='text-white'>Main Servies</h1>
          </div>
          <div>
            <h1 className='text-white font-bold text-2xl'>INTERNET</h1>
            <br />
            <h1 className='text-white '>Internet Servies</h1>
            <br />
            <h1 className='text-white '>Information</h1>
            <br />
            <h1 className='text-white'>Choose a Servies</h1>
          </div>
          <div>
            <h1 className='text-white font-bold text-2xl'>FOLLOW  US ON SOCIAL MEDIA</h1>
            <br />
            <h1 className='text-white'>Join Us</h1>
            <br />
            <h1 className='text-white'>Main Special</h1>
            <br />
            <h1 className='text-white'>Home </h1>
          </div>
        </div>
      </footer>

    </div>


  )
}

export default Servis
