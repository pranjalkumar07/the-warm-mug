export interface ReviewSummary {
  rating: number;
  maxRating: number;
  totalReviews: number;
  source: string;
  sourceUrl: string;
  highlights: string[];
  testimonials: {
    theme: string;
    text: string;
    aspect: string;
    stars: number;
  }[];
}

export const REVIEWS_DATA: ReviewSummary = {
  rating: 4.9,
  maxRating: 5.0,
  totalReviews: 13,
  source: "Google Reviews",
  sourceUrl: "https://www.google.com/maps/place/The+warm+mug/@28.6073818,77.4333133,17z/data=!3m1!4b1!4m6!3m5!1s0x390cef0019ccc1b1:0x2cd39eefb1a48083!8m2!3d28.6073771!4d77.435882!16s%2Fg%2F11zgpzmj1d",
  highlights: [
    "Mango Matcha & Blueberry Matcha",
    "Signature Cold Coffee & Cappuccino",
    "Creamy White & Mix Sauce Pasta",
    "Tasty and Crispy Grilled Sandwiches",
    "Polite and Friendly Staff",
    "Cozy 24-Hour Vibe"
  ],
  testimonials: [
    {
      theme: "Signature Beverages",
      text: "The Mango Matcha and Blueberry Matcha are incredible! Distinct layers, fresh flavors, and easily the best matcha experience in Greater Noida.",
      aspect: "Matcha & Coffee",
      stars: 5
    },
    {
      theme: "Cold Coffee & Comfort",
      text: "Their signature Cold Coffee with thick whipped cream and chocolate drizzle is pure perfection. Perfect spot for late night coffee craving.",
      aspect: "Cold Coffee",
      stars: 5
    },
    {
      theme: "Hospitality & Atmosphere",
      text: "Polite and friendly staff who make you feel right at home. The vibe is casual, warm, and inviting with great music and lighting.",
      aspect: "Staff & Ambiance",
      stars: 5
    },
    {
      theme: "Quick Bites & Food",
      text: "Super tasty and crispy sandwiches paired with rich mix sauce pasta. Affordable prices and delicious quality every single visit.",
      aspect: "Food & Pasta",
      stars: 5
    }
  ]
};
