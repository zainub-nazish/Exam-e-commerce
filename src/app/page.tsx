import Image from "next/image";
import Hero from "@/components/Hero";
import Latest from "@/components/Latest";
import Box from "@/components/Box";
import Card from "@/components/Card";
import Paraimage from "@/components/Paraimage";
import Trending from "@/components/Trending";


function Home() {
  return (
    <div>

      <Hero />
      <Latest />
      <Box />
      <Card />
      <Paraimage/>
      <Trending />

    </div>
  )
}
export default Home
