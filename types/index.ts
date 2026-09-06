export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  price: string;
  icon: string;
}

export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: string;
}

export interface NavLink {
  label: string;
  href: string;
}
