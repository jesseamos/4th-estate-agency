import Wrapper from "@/app/components/wrapper";
import Image from "next/image";

export default function Achievements() {
  const achievements = [
    {
      amount: "200+",
      title: "Projects completed",
    },
    {
      amount: "500%",
      title: "Return on investment",
    },
    {
      amount: "30",
      title: "Countries served",
    },
    {
      amount: "100%",
      title: "5-star reviews",
    },
  ];

  return (
    <Wrapper className="flex flex-col w-full md:flex-row justify-around items-center gap-11 animate-fade-up">
      <Image
        src="/images/team-gang.png"
        alt="team image"
        width={500}
        height={500}
        className="animate-fade-right"
      />
      <div className="animate-fade-left">
        <div className="mb-8">
          <p className="font-baskerville text-5xl">
            We're only just getting started on our journey
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6  text-left">
          {achievements.map((achievement, index) => (
            <div key={index}>
              <h1 className="text-4xl">{achievement.amount}</h1>
              <p className="text-[#66717B] text-sm">{achievement.title}</p>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
