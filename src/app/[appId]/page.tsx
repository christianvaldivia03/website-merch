import Image from "next/image";
import Carousel from "./Carousel";

export default function Home() {
  return (
    <div className="bg-red-500">
        <div className="bg-green-500 w-[1200px] m-auto h-[500px] " >
        <Carousel />
        </div>
       
    </div>
  );
}
