const About = () => {
    return (
<div className="w-full text-center py-12">
      <h2 className="text-3xl font-semibold text-gray-900">How Can Crowdfunding Help You</h2>
      <hr className="w-16 border-2 border-green-500 mx-auto my-4" />
      <p className="text-gray-700 max-w-3xl mx-auto px-4">
        When the cost of medical treatments takes a toll on you financially, harness the power of social networks through crowdfunding.
        Get tips, crowdfunding assistance & receive donations in times of medical emergencies.
      </p>
      
      <div className="mt-12 bg-[#e1f1fd] text-black py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="text-2xl font-bold">25000+</h3>
            <p className="text-lg">Patients Funded</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">24/7</h3>
            <p className="text-lg">Personalized Expert Assistance</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">30 Lakh+</h3>
            <p className="text-lg">Donor Community</p>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto mt-8 flex flex-col md:flex-row justify-center gap-6 text-center">
          <div className="flex flex-col items-center">
            <span className="text-4xl">📋</span>
            <p className="text-lg">Fast Review of Fundraisers</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl">💰</span>
            <p className="text-lg">Indian Tax Benefits</p>
          </div>
        </div>
      </div>
    </div>
    );
  };
  
  export default About;