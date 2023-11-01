'use client'

import { useState } from "react"

interface CommentFormProps {
    AddComment: (newComment: string) => void
}

export function CommentForm({ AddComment }: CommentFormProps) {
    const [comment, setComment] = useState('');

    return (
        <div className="flex flex-col">
            <textarea
                className="block w-[400px] bg-gray-400 border border-zinc-500 rounded p-4 resize-none mb-4 placeholder:text-zinc-800"
                placeholder="Nice place!"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            />

            <button onClick={() => {
                if (comment) {
                    AddComment(comment)
                    setComment('')
                }
            }} className="self-end block text-white bg-blue-500 p-4 rounded w-48 text-center hover:bg-blue-600 transition-colors">
                Comment
            </button>
        </div>
    )
}