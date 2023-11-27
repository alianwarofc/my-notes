"use client";

import { useRouter } from "next/navigation";
import { Input } from "postcss";
import { useState } from "react";
import { headers } from "../../next.config";

export const PostButton = ({id, content }) => {
  const router = useRouter();
  const [onEdit , setOnEdit] = useState(false)
  const [currentContent, setCurrentContent] = useState(content);



  async function handleDelete() {
  await fetch(`https://devscale-mockapi.fly.dev/api/collections/notes/records/${id}`,{
      method: "DELETE",
    });
    router.refresh();
  }

  async function handleUpdate() {
    const res = await fetch(`https://devscale-mockapi.fly.dev/api/collections/notes/records/${id}`,{
      method: "PATCH",
      headers: {
        "Content-Type": "appplication/json",
      },
      body: JSON.stringify({content , currentContent})
    })
    const data = await res.json;
    setOnEdit(false);
    router.refresh();
  }


  return (
    <div className="flex gap-2 p-2 border-2 border-amber-800 rounded-lg">
      {onEdit ? <input value={currentContent} onChange={(e) => setCurrentContent(e.target.value)} className="textArea b-2 bg-yellow-100 rounded-lg"/> : <div>{currentContent}</div> }
        {onEdit ? <button className="text-xs bg-yellow-400 text-amber-700 p-1 rounded-lg" onClick={handleUpdate}>Update</button> : <button className="text-xs bg-yellow-400 text-amber-700 p-1 rounded-lg" onClick={() => setOnEdit(true)}>Edit</button> }
        <button className="text-xs bg-yellow-400 text-amber-700 p-1 rounded-lg" onClick={handleDelete}>Delete</button>
    </div>
  )
}
