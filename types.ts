export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  date: string;
  affiliateLinks?: { label: string; url: string }[];
  tags: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string; // FontAwesome class
  color: string;
}

export interface AffiliateProgram {
  name: string;
  url: string;
}

export enum PageView {
  HOME = 'HOME',
  BLOG = 'BLOG',
  PRIVACY = 'PRIVACY',
  CONTACT = 'CONTACT',
  DASHBOARD = 'DASHBOARD'
}