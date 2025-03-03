import { MapPin } from "lucide-react";
import HeroLayout from "../components/hero_section";
import Image from "next/image";
import InputForm from "../components/input_form";
import BrandBoost from "../components/brand_boost";
import Footer from "../components/footer";
export default function ContactUs(){
    return (
        <div>
            <HeroLayout backgroundImage="/images/bg_hero1.png">
                <h1 className="text-3xl md:text-7xl  font-baskerville">Get In Touch</h1>
            </HeroLayout>
            <div className="flex flex-col md:flex-row md:m-16 m-5 justify-between items-center">
                <div>
                    <div>
                        <h1 className="font-baskerville text-4xl max-w-[350px] pb-7">Let’s Level Up Your Brand Together</h1>
                        <p className="text-sm text-[#66717B] pb-4">Our friendly team would love to hear from you.</p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-2 my-2  w-full">
                        <div>
                       <InputForm label="First Name" placeholder="First Name"/>
                        </div>
                        <div>
                       <InputForm label="Last Name" placeholder="Last Name"/> 
                        </div>
                    </div>
                    <div className="">
                    <InputForm label="Email" placeholder="you@company.com"/>
                    </div>
                    <div className="my-2">
                        <InputForm label="Phone Number" placeholder="+1 (555) 000-0000"/>
                    </div>
                    <div>
                        <h3 className="text-sm text-[#66717B]">Message</h3>
                        <textarea placeholder="Leave us a message" className="w-full rounded p-2"/>
                    </div>
                    <div className="flex my-2 gap-2">
                        <input type="radio"/>
                        <p className="text-xs ">You agree to our friendly <span className="underline">privacy policy.</span></p>
                    </div>
                    <button className="mt-6 px-6 py-3 bg-[#385065] text-white rounded-lg mb-3 md:mb-0 w-full">Send Message</button>
                </div>
                <div>
                    <h3 className="text-sm font-bold">Headquarters</h3>
                    <div className="flex items-center">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <p className="text-xs text-[#66717B] my-2">218 S Tower Dr #207, Beverly Hills, CA 90211 - (Sun to Fri 8:00AM - 5:00PM PST)</p>
                    </div>
                 <Image src="/images/location.png" alt="Location Image" height={500} width={500}/>
                </div>
            </div>
             <BrandBoost/>
            <Footer/>
        </div>
    )
}