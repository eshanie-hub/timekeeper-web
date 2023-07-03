import Timeline from "./timeline";
import { Insight, Button, Heading } from "@/components/common";

const OurVision = () => {
  return (
    <>
      <div className="mt-[60px]">
        <Heading>Our Vision</Heading>
        <Heading sub>
          A highly portable and versatile plugin ecosystem which will enable fine-grained tracing in your Javascript source code
        </Heading>
      </div>

      <div className="pb-[200px] pt-[40px] overflow-hidden relative">
        <div className="absolute w-[2px] left-[calc(50%-1px)] bg-gradient-to-b from-black/10 to-transparent min-h-full"></div>
        <div className="absolute left-[calc(50%-1px)] min-h-full border-2 border-white border-dashed"></div>
        <div className="text-center pt-[30px] z-10 relative">
          <Timeline />
          <Button className="bg-white border-2 mx-auto mb-[80px]">
            Continue to growing
          </Button>
          <div className="md:ml-[2px] pt-[28px] w-full md:flex border-t-2 border-dashed justify-center">
            <Insight 
              info={"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."} 
              btnText={"Install Blizzard Release"}
            />
            <Insight 
              info={"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."} 
              btnText={"Explore Source Code"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default OurVision;