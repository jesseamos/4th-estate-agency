"use client"
import { MapPin } from "lucide-react";
import HeroLayout from "../components/hero_section";
import Image from "next/image";
import InputForm from "../components/input_form";
import BrandBoost from "../components/brand_boost";
import Footer from "../components/footer";
import { useContactPage } from "../context/contactPageContext";
import Preloader from "../components/preloader";
import { toast } from "react-toastify";
import { useState } from "react";
import emailjs from "emailjs-com";
export default function ContactUs(){
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message:"",
    });
    const [loading, setLoading] = useState(false);
    
    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    const sendEstimationRequest = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault(); 
      console.log("heeelllo")
        setLoading(true);
    
        emailjs
          .send(
            "service_0x910ub",
            "template_ad32rx6",
            {
              phone: formData.phoneNumber,
              full_name: formData.firstName,
              last_name:formData.lastName,
              name:'website bot',
              email: formData.email,
              message: formData.message,
            },
            "8O6INJfQ1PcwMDJMh"
          )
          .then(
            (response) => {
              console.log("SUCCESS!", response.status, response.text);
              setLoading(false);
              setFormData({
                message:"",
                firstName: "",
                lastName:"",
                email: "",
                phoneNumber: "",
              });
              toast.success("Request sent successfully!");
            },
            (error) => {
              console.log("FAILED...", error);
              setLoading(false);
              toast.error("Failed to send request. Please try again.");
            }
          );
      };
    // const {contactPageData} = useContactPage()
    //    if (!contactPageData || !contactPageData.content || contactPageData.content.length == 0){
    //         return <Preloader/>
    //       }
    
    //       console.log("contact Page",contactPageData)
    return (
        <div>
            <HeroLayout backgroundImage="/images/bg_hero1.png">
                <h1 className="text-3xl md:text-8xl  font-baskerville">Get In Touch</h1>
            </HeroLayout>
            <div className="flex flex-col md:flex-row md:m-16 m-5 justify-center md:space-x-20 items-center animate-fade-up">
                <div className="animate-fade-right md:mb-0 mb-10">
                    <div>
                        <h1 className="font-baskerville md:text-5xl text-4xl md:mt-0 mt-3  max-w-[400px] pb-7">Let’s Level Up Your Brand Together</h1>
                        <p className="text-base text-[#66717B] pb-4">Our friendly team would love to hear from you.</p>
                        
                    </div>
                    <form onSubmit={sendEstimationRequest}>
                    <div className="flex flex-col md:flex-row gap-6 my-2  w-full">
                        <div>
                        <InputForm 
                            label="First Name" 
                            name="firstName"  // Pass correct name
                            placeholder="First Name" 
                            value={formData.firstName} 
                            onChange={handleChange} 
                        />
                        </div>
                        <div>
                       <InputForm label="Last Name" placeholder="Last Name" value={formData.lastName} onChange={handleChange} name="lastName"/> 
                        </div>
                    </div>
                    <div className="">
                    <InputForm label="Email" placeholder="you@company.com" value={formData.email} onChange={handleChange} name="email"/>
                    </div>
                    <div className="my-2">
                        <InputForm label="Phone Number" placeholder="+1 (555) 000-0000"  value={formData.phoneNumber} onChange={handleChange} name="phoneNumber"/>
                    </div>
                    <div>
                        <h3 className="text-sm text-[#66717B]">Message</h3>
                        <textarea placeholder="Leave us a message" className="w-full rounded p-2" value={formData.message} onChange={handleChange} name="message"/>
                    </div>
                    <div className="flex my-2 gap-2">
                        <input type="radio" className="grey"/>
                        <p className="text-md">You agree to our friendly <span className="underline">privacy policy.</span></p>
                    </div>
                    <button className="mt-6 px-6 py-3 bg-[#385065] text-white rounded-lg mb-3 md:mb-0 w-full " type="submit" >{loading ? "Loading...":"Send Message"}</button>
                    </form>
                </div>
                <div className="animate-fade-left">
                    <h3 className="text-base font-bold">Headquarters</h3>
                    <div className="md:flex items-center gap-3 md:gap-0 hidden">
                    <MapPin className="md:w-4 md:h-4 text-gray-400 w-8 h-8" />
                    <p className="text-base text-[#66717B] my-2 md:mb-0 ">218 S Tower Dr #207, Beverly Hills, CA 90211 - (Sun to Fri 8:00AM - 5:00PM PST)</p>
                    </div>
                    <p>
                      <MapPin className="w-4 h-4 text-gray-400 inline" />
                      <span>218 S Tower Dr #207, Beverly Hills, CA 90211 - (Sun to Fri 8:00AM - 5:00PM PST)</span>
                    </p>
                 <Image src="/images/location.png" alt="Location Image" height={500} width={600} className="md:my-0 my-6"/>
                </div>
            </div>
             <BrandBoost/>
            <Footer/>
        </div>
    )
}