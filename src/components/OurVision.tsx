import { forum, inter, roboto } from "@/ThemeSettings";
import Image from "next/image";
import { LuChevronRight } from "react-icons/lu";


const OurVision = () => {
    return (
        <section className={`px-[20px] md:px-[60px] lg:px-[150px] py-[30px] md:py-[60px] bg-secondary_color text-light_color ${inter.className} grid grid-cols-1 lg:grid-cols-2 gap-5`}>
            <div className="">
                <h2 className="text-[48px] md:text-[58px] lg:text-[68px] xl:text-[78px] leading-[58px] md:leading-[68px] lg:leading-[74px] xl:leading-[84px] uppercase font-[600] w-full md:w-[400px]">Our <span className="text-[48px] md:text-[68px]">++</span> <span className=" text-primary_color">Vision</span></h2>
                <p> 
                    <span className="block pt-[20px] pb-[10px] text-[17px] md:text-[22px] leading-[27px] md:leading-[36px] font-[300]">To be the most trusted and respected professional services firm recognized by our clients for delivering excellence.</span>

                    <span className="text-[17px] md:text-[22px] leading-[27px] md:leading-[36px] font-[300] ">We are committed to providing a high-quality service to our clients, and we are always looking for ways to improve. Our goal is to be the best in our industry and to provide our clients with the best possible service.</span>

                </p>
                <div className="flex items-center pt-[40px]">
                    <button className={`bg-primary_color mr-[30px] text-secondary_color rounded-full p-[10px]`}>
                        <LuChevronRight className="w-[40px] h-[40px] md:w-[80px] md:h-[80px] "  />
                    </button>
                    <div className="w-full h-[6px] md:h-[10px] bg-dark_gray/40 "></div>
                </div>
            </div>
            <div className="order-first md:order-last vission_image_wraper flex justify-end">
                <Image src="/vision.jpg" alt="Our Vision" width={500} height={500} />
            </div>
        </section>
    );
};

export default OurVision;