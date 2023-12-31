import Link from "next/link";
import Navbar from "../../components/Navbar";
import axios from "axios";
const index = ({contact,footer}) => {

  const ourOffice = footer.data.attributes

  return (

    <>
    <Navbar />
    <div className="  p-4 md:mx-40 mt-40 mb-10 font-inter">
      <h1 className="text-4xl font-gothamBold mb-10">{contact.title}</h1>
      <p className=" xl:text-sm mr-20  mb-16">
        {contact.description}
      </p>
      <div className="flex flex-col sm:flex-row gap-48">
        <div className="w-full sm:w-1/2 pr-4 ">
          
          <form className=" flex flex-col ">
            <div className="mb-7 text-gray-600">
              <label htmlFor="help-text" >
                How can we help?
              </label>
              <input
                type="text"
                id="help-text"
                className="block w-full mt-1 p-2 py-10 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-7 text-gray-600">
              <label htmlFor="name" >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="block w-full mt-1 p-2 border border-gray-300 rounded"
              />
            </div>
            <label className=" text-gray-600" htmlFor="company-email" >
              Company Email
            </label>
            <input
              type="email"
              id="company-email"
              className="block w-full mt-1 p-2 border border-gray-300 rounded"
            />
            <div className=" mt-6 flex justify-end"><button
              type="submit"
              className=" bg-black text-white py-2  rounded mt-4 w-32"
            >
              Submit
            </button></div>
            
          </form>
        </div>
        <div className="w-full sm:w-1/2 pl-4">
          <h2 className="text-xl xl:text-[20px] font-semibold mb-14">our offices:</h2>
          <div className="mb-9">
            <h3 className="text-sm font-semibold text-gray-600  mb-4">{ourOffice && ourOffice.usa}:</h3>
           <p className=" w-[300px] text-sm text-gray-500">
            {ourOffice && ourOffice.uaeAddress}
           </p>
          </div>
          <div className="mb-9">
            <h3 className="text-sm font-semibold text-gray-600  mb-4">{ourOffice && ourOffice.ksa}:</h3>
           <p className=" w-[300px] text-md text-gray-600">
           {ourOffice && ourOffice.ksaAddress}
           </p>
          </div>
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-600  mb-4">{ourOffice && ourOffice.india}:</h3>
            <p className=" w-[300px] text-md text-gray-600">{ourOffice && ourOffice.indiaAddress}</p>
          </div>
        </div>
      </div>
    </div>
    <div className=" py-8" style={{background:'#E6E6E6'}}>
        <div className="container xxl:w-[1004px]">
          <h1 className="text-xl px-10 md:px-32 xxl:text-[47px] font-semibold text-start mb-4">
            {contact.footer}
          </h1>
          <div className="flex px-10 md:px-32 justify-start">
            <button  className="text-gray-900 text-lg py-2  rounded hover:text-gray-600">
              <Link className=" underline" href="/joinOurTeam">Join our team</Link>
            </button>
          </div>
        </div>
      </div> 
    </>
  ); 
};

export default index;


export async function getStaticProps() {
  var contact = {};
  var footer = {};
  const apiUrl = process.env.APIURL;
  await axios
  .get(`${apiUrl}/contact?populate=*`)
    .then((res) => {
      contact = res.data.data.attributes;
    })
    .catch((err) => {
      console.log(err.message);
    });

    await axios
    .get(`${apiUrl}/footer?populate=*`)

    .then((res) => {
      footer = res.data;
    })
    .catch((err) => {
      console.log(err.message);
    });
  return {
    props: {
      contact,
      footer
    
    },
    revalidate: 3600, 
  };
}