export interface Attraction {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  category: AttractionCategory;
  location: string;
  rating: number;
  reviewCount: number;
  image: string;
  images: string[];
  highlights: string[];
  visitingInfo: {
    hours: string;
    price: string;
    duration: string;
    bestTime: string;
  };
  coordinates: { lat: number; lng: number };
  tags: string[];
  featured: boolean;
}

export type AttractionCategory =
  | "nature"
  | "culture"
  | "history"
  | "gastronomy"
  | "adventure"
  | "heritage";

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  endDate?: string;
  time: string;
  location: string;
  category: EventCategory;
  image: string;
  price: string;
  featured: boolean;
  tags: string[];
}

export type EventCategory =
  | "festival"
  | "culture"
  | "gastronomy"
  | "music"
  | "sports"
  | "heritage";

export interface Route {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  difficulty: "easy" | "moderate" | "challenging";
  distance: string;
  stops: RouteStop[];
  image: string;
  category: string;
  highlights: string[];
  color: string;
}

export interface RouteStop {
  order: number;
  name: string;
  description: string;
  duration: string;
  image: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  width: number;
  height: number;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export interface Stat {
  label: string;
  value: string;
  icon: string;
}
