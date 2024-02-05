import React, { useState, useEffect } from "react";
import { initialReviews } from "../mock-tool";

interface Review {
  id: number;
  productId: number;
  author: string;
  comment: string;
  gmail: string;
}

const Reviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>(() => {
    const storedReviews = localStorage.getItem('reviews');
    return storedReviews ? JSON.parse(storedReviews) : [];
  });

  useEffect(() => {
    localStorage.setItem('reviews', JSON.stringify(reviews));
  }, [reviews]);


  const [formData, setFormData] = useState({
    author: "",
    comment: "",
    gmail: "",
  });
  const [errors, setErrors] = useState({
    author: "",
    comment: "",
    gmail: "",
  });

  useEffect(() => {
    setReviews(initialReviews);
  }, []);

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData({ ...formData, [field]: value });
    setErrors({ ...errors, [field]: value.trim() ? "" : `required field*` });
  };

  const handleInputFocus = (field: keyof typeof formData) => {
    if (!formData[field]) {
      setErrors({ ...errors, [field]: `required field*` });
    }
  };

  const handleFormSubmit = () => {
    const { author, comment, gmail } = formData;

    if (!author.trim() || !comment.trim()) {
      setErrors({
        author: author.trim() ? "" : "Please enter Name",
        comment: comment.trim() ? "" : "Please enter Comment",
        gmail: "",
      });
      return;
    }

    if (gmail.trim() && !gmail.includes('@')) {
      setErrors({
        author: "",
        comment: "",
        gmail: "Invalid email format. Please enter a valid email.",
      });
      return;
    }

    const newReview: Review = {
      id: reviews.length + 1,
      productId: 1,
      author: formData.author,
      comment: formData.comment,
      gmail: formData.gmail,
    };

    setReviews([...reviews, newReview]);
    setFormData({ author: "", comment: "", gmail: "" });
    setErrors({ author: "", comment: "", gmail: "" });
  };

  return (
    <div className="reviews bg-gray-100 p-4">
      <h2 className="text-2xl font-bold mb-4">Reviews</h2>
      <form className="flex flex-col items-start justify-start gap-3">
        <div className="flex flex-row items-center justify-center gap-x-2">
          <input
            type="text"
            className={`border rounded p-2 w-full outline-none ${
              errors.author && "border-red-500"
            }`}
            placeholder="Name*"
            value={formData.author}
            onChange={(e) => handleInputChange("author", e.target.value)}
            onFocus={() => handleInputFocus("author")}
          />
          <input
            type="text"
            className={`border rounded p-2 w-full outline-none ${
              errors.gmail && "border-red-500"
            }`}
            value={formData.gmail}
            placeholder="Email*"
            onChange={(e) => handleInputChange("gmail", e.target.value)}
            onFocus={() => handleInputFocus("gmail")}
          />
        </div>
        {errors.author && (
          <div className="text-red-500 mb-2">{errors.author}</div>
        )}
        <textarea
          className={`border rounded p-2 w-full outline-none resize-none ${
            errors.comment && "border-red-500"
          }`}
          value={formData.comment}
          placeholder="Comment*"
          onChange={(e) => handleInputChange("comment", e.target.value)}
          onFocus={() => handleInputFocus("comment")}
        />
        {errors.comment && (
          <div className="text-red-500 mb-2">{errors.comment}</div>
        )}
        <br />
        <button
          type="button"
          className="bg-blue-500 text-white py-2 px-4 rounded button"
          onClick={handleFormSubmit}
        >
          Post review
        </button>
      </form>
      <div className="flex flex-col items-start justify-start gap-4 mt-10">
        {reviews.map((review: Review) => (
          <div
            key={review.id}
            className="mb-2 bg-white flex flex-col items-start justify-start shadow-md p-2 rounded-md"
          >
            <h1>{review.author}</h1>
            <h2>{review.comment}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
