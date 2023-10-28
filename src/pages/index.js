
import axios from "axios";
import HomePage from "./Home";

// import Footer from "../components/Footer";


export default function Home({homepageContent,services,clients,blogs,products}) {

  return (
   
    <HomePage services={services} products={products} homepageContent={homepageContent.attributes} clients={clients.data} blogs={blogs} />
    
  
  )
}

export async function getStaticProps() {
  let homepageContent = {};
  let services={}
  let clients={}
  let blogs={}
  let products={}
  // var caseStudies={}

  // home page data api 
  await axios
    .get("https://flc-cms.onrender.com/api/header?populate=*")
    .then((res) => {
      homepageContent = res.data.data;
    })
    .catch((err) => {
      console.log(err.message);
    });

    // services list api 
    await axios
    .get("https://flc-cms.onrender.com/api/service-homes?populate=*")
    .then((res) => {
      services=res.data
    })
    .catch((err) => {
      console.log(err.message);
    });

    // clients and logo list api 
    await axios
    .get("https://flc-cms.onrender.com/api/client?populate=*")
    .then((res) => {
      
      clients=res.data
      
    })
    .catch((err) => {
      console.log(err.message);
    });

    // blogs data api 
    await axios
    .get("https://flc-cms.onrender.com/api/blogs?populate=*")
    .then((res) => {
     
      blogs = res.data.data;
    })
    .catch((err) => {
      console.log(err.message);
    });

    await axios
    .get("https://flc-cms.onrender.com/api/products?populate=*")
    .then((res) => {
    //  console.log('products detail file on home page',res.data.data)
      products = res.data.data;
    })
    .catch((err) => {
      console.log(err.message);
    });


  return {
    props: {
      homepageContent,
      services,
      clients,
      blogs,
      products
      // caseStudies,
    },
    revalidate: 3600, // Optional: specify the number of seconds after which to re-generate the page
  };
}
