import Accomodation from "@/components/HomePage/Accomodation";
import Facilities from "@/components/HomePage/Facilities";
import Welcome from "@/components/HomePage/Welcome";
// import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Welcome />
      <Accomodation/>
      <Facilities/>
    </main>
  );
}
