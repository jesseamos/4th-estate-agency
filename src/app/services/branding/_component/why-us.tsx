import Image from "next/image";

export default function WhyUs() {
  return (
    <div className="text-[#66717B] flex gap-4 flex-col md:flex-row justify-between items-center md:text-base text-sm animate-fade-right">
      <div className="mb-2 w-full md:w-1/2">
      <h1 className="font-baskerville text-2xl w-full md:text-6xl md:max-w-[700px] md:leading-relaxed text-black text-[44px] leading-[1.0]">
          Why Choose 4th Estate For Content Marketing?
        </h1>
        <p className="md:max-w-[500px] text-[#66717B]  font-geist leading-loose mt-3 p-2">
          Los Angeles is a unique mix of cultures and trends. Your content
          marketing strategy must be just as diverse to win in this market.
          Here's what makes 4th Estate your perfect partner for conquering LA's
          content marketing scene:
        </p>
        <ul className="list-disc font-geist leading-loose pl-10">
          <li>
            <span>Deep LA Expertise</span>
          </li>
          <li>
            <span>Trusted by LA Businesses</span>
          </li>
          <li>
            <span>Engaging Videos</span>
          </li>
          <li>
            <span>Social Media Management</span>
          </li>
        </ul>
        <p className="md:max-w-[500px] text-[#66717B] leading-relaxed">
          We'll gladly connect you with testimonials and reviews from local
          clients who have thrived thanks to our LA-focused content marketing
          strategies.
        </p>
      </div>
      <Image
        src="/images/content-image.png"
        alt="content image"
        width={500}
        height={500}
        className="animate-fade-left hidden md:block"
      />
    </div>
  );
}
