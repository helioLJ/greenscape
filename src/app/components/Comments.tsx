'use client'
import { useState } from "react";
import { CommentForm } from "./CommentForm";

interface Review {
    comment: string
    date: string
    username: string
}

interface CommentsProps {
    data: Review[] | undefined
}

function getCurrentDate() {
    const currentDate = new Date();
  
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
  
    return `${year}-${month}-${day}`;
  }

export function Comments({ data }: CommentsProps) {
    const [reviews, setReviews] = useState<Review[] | undefined>(data);
    const formattedDate = getCurrentDate();

    function AddComment(newComment: string) {
        setReviews((prevState) => [
            ...(prevState as Review[]),
            {
              comment: newComment,
              date: formattedDate,
              username: "You",
            },
          ]);
    }

    return (
        <section className="w-1/2 text-right flex flex-col items-end">
            <h2 className="text-xl text-green-600 mb-5">See what people are talking about!</h2>
            {reviews?.map(review => (
                <div key={review.username} className="space-y-2 border border-zinc-500 rounded p-4 w-[400px] mb-4">
                    <p>{review.comment}</p>
                    <p className="text-zinc-500"><span className="font-bold">{review.username}</span> · {review.date}</p>
                </div>
            ))}

            <CommentForm AddComment={AddComment} />
        </section>
    )
}