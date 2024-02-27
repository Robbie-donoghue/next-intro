import Link from "next/link";
import Image from "next/image";
import myImage from "@/../public/ShipPainting.jpeg";
export default function Page(props) {
  console.log(props);
  return (
    <div>
      <h2 className="text-3xl font-bold underline">
        Ancient Japan, the history
      </h2>
      <p>Japan had the first recorded interaction with the west in 1542</p>
      <Image
        src={myImage}
        alt="old japanese painting  of ships docking"
        placeholder="blur"
      />
    </div>
  );
}
export const metadata = {
  title: "ancient-japan page",
  description: "ancient japan facts",
};
