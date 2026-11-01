/*
 * Images confirmed as AI-generated: each file carries C2PA content credentials
 * from the tool that made it (checked 1 Nov 2026). Add new AI images here so
 * they are labelled wherever they appear.
 */
export const AI_IMAGES = new Set<string>([
  "/images/food/bak-chor-mee.png",
  "/images/food/bubur-cha-cha.png",
  "/images/food/char-kway-teow.png",
  "/images/food/chicken-rice.png",
  "/images/food/chilli-crab.png",
  "/images/food/economy-rice.png",
  "/images/food/hokkien-mee.png",
  "/images/food/ice-kachang.png",
  "/images/food/kaya-toast.png",
  "/images/food/nasi-lemak.png",
  "/images/food/rojak.png",
  "/images/food/roti-john.png",
  "/images/food/satay.png",
  "/images/food/wanton-mee.png",
  "/images/blog/chicken-rice-sauces.jpg",
  "/images/blog/chicken-rice-set.jpg",
  "/images/blog/chicken-rice-stall.jpg",
  "/images/blog/economy-rice-counter.jpg",
  "/images/blog/economy-rice-gravy.jpg",
  "/images/blog/economy-rice-plate.jpg",
  "/images/trails/little-india/hero.jpg",
  "/images/trails/little-india/serangoon-road.jpg",
  "/images/trails/little-india/hindu-temple.jpg",
  "/images/trails/little-india/gelato.jpg",
  "/images/trails/little-india/haji-lane.jpg",
  "/images/trails/little-india/indian-sweets.jpg",
  "/images/trails/little-india/sultan-mosque.jpg",
]);

export const isAiImage = (src?: string | null): boolean => !!src && AI_IMAGES.has(src);
