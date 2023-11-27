"use client";

import { useState } from 'react'
import { useRouter } from 'next/navigation';

export const PostInput = () => {
  const router = useRouter();
  const [post, setPost] = useState("");

  async function createPost() {
      const res = await fetch("https://devscale-mockapi.fly.dev/api/collections/notes/records",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({content: post, user: "alianwar", additionalData:""})
      })
      const data = await res.json();
      console.log(data);
      router.refresh();
      setPost(" ");
    }

  return (
    <div className='p-3'>
      <div className='h-[110px] border-2 p-1 gap-1 border-amber-800 rounded-lg'>
        <input onChange={(e) => setPost(e.target.value)} placeholder='Ketik pesan...' className='textArea b-2 bg-yellow-100 rounded-lg' />
        <button onClick={createPost} className='bg-yellow-400 text-amber-700'>Post</button>
    </div>
    </div>
    
  )
}
