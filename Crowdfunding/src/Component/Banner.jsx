import BannerImage from '../assets/images/M1.webp';

function Banner() {
  return (
    <>
    <div className="relative w-full h-[500px] bg-gray-100">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-[500px]"
        style={{ backgroundImage: `url('${BannerImage}')` }}>
      </div>
      <div className="absolute inset-0 flex items-center justify-start text-white left-30">
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold">
            <span className="text-[#4663ac]">Need Funds</span> For Your Medical Treatment?
          </h1>
          <p className="mt-4">Don't worry you've come to the right platform.</p>
          <p className="mt-2 text-lg">With <span className="font-bold text-[#4663ac]">0%*</span> platform fee, you can raise funds too!</p>
          <button className="mt-6 bg-[#4663ac] px-6 py-3 text-lg rounded-full shadow-lg hover:bg-green-600">
            Start A Free Fundraiser
          </button>
        </div>
      </div>
      </div>
    </>
  )
}

export default Banner; 