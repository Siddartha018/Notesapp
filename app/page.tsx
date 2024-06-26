import Todos from "@/components/Todos";
import Image from "next/image";
import { getData } from "@/actions/todoActions";

export default async  function Home() {
  const data = await getData();
  return (
    <main className="flex  items-center justify-between ">
     <Todos todos={data} user={1}/>
    </main>
  );
}
