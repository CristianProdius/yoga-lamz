import { FC } from "react";

interface Review {
  author: string;
  username: string;
  content: string;
  date: string;
  avatar: string;
}

const ReviewsSection: FC = () => {
  const reviews: Review[] = [
    {
      author: "Jamie Kokot",
      username: "@staking",
      content: "I started going to the gym but had no idea what I was doing.",
      date: "22.03.2021",
      avatar: "/girl1.png",
    },
    {
      author: "Jamie Kokot",
      username: "@staking",
      content: "I started going to the gym but had no idea what I was doing.",
      date: "22.03.2021",
      avatar: "/girl1.png",
    },
    {
      author: "Jamie Kokot",
      username: "@staking",
      content: "I started going to the gym but had no idea what I was doing.",
      date: "22.03.2021",
      avatar: "/girl1.png",
    },
    {
      author: "Jamie Kokot",
      username: "@staking",
      content: "I started going to the gym but had no idea what I was doing.",
      date: "22.03.2021",
      avatar: "/girl1.png",
    },
    {
      author: "Jamie Kokot",
      username: "@staking",
      content: "I started going to the gym but had no idea what I was doing.",
      date: "22.03.2021",
      avatar: "/girl1.png",
    },
    {
      author: "Jamie Kokot",
      username: "@staking",
      content: "I started going to the gym but had no idea what I was doing.",
      date: "22.03.2021",
      avatar: "/girl1.png",
    },
    // Add more reviews as needed
  ];

  return (
    <section className="bg-[#f4f6ef] py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light mb-4">
            Over 200+ reviews
            <br />
            from our clients
          </h2>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-8 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="min-w-[380px] bg-[#e6ebe6] rounded-3xl p-8 flex flex-col snap-start"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={review.avatar}
                  alt=""
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-base font-medium">{review.author}</h3>
                  <p className="text-sm text-gray-600">{review.username}</p>
                </div>
              </div>

              <p className="text-base mb-auto leading-relaxed">
                &quot;{review.content}&quot;
              </p>

              <div className="mt-8 pt-6 border-t border-[#00000010]">
                <p className="text-sm text-gray-500">{review.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
