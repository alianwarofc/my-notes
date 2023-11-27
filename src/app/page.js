import { PostButton } from "@/components/PostButton";
import { PostInput } from "@/components/PostInput";
import { Headers } from "@/components/Headers";
import { Footer } from "@/components/Footer";

async function getNotes(){
  const res = await fetch("https://devscale-mockapi.fly.dev/api/collections/notes/records?filter=(user='alianwar')",{
    cache: "no-store"
  })
  const data = await res.json();
  return data;
}

export default async function Page() {
const {items} = await getNotes();
console.log(items)

  return (
    <div className="max-w-xl m-auto">
      <Headers/>
      <PostInput/>
      <div className="space-y-3">{items.map(({id, content})=> {
        return <PostButton key={id} id={id} content={content}/>
      })}</div>
      <Footer/>
    </div>
  )
}
