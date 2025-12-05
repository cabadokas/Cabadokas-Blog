import { SocialLink, AffiliateProgram, BlogPost } from './types';

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'Twitter/X', url: 'https://x.com/Cabadokas', icon: 'fa-brands fa-x-twitter', color: 'bg-black' },
  { platform: 'Facebook', url: 'https://www.facebook.com/Cabadokas', icon: 'fa-brands fa-facebook', color: 'bg-blue-600' },
  { platform: 'Instagram', url: 'https://www.instagram.com/Cabadokas/#', icon: 'fa-brands fa-instagram', color: 'bg-pink-600' },
  { platform: 'TikTok', url: 'https://www.tiktok.com/@Cabadokas', icon: 'fa-brands fa-tiktok', color: 'bg-black' },
  { platform: 'YouTube', url: 'https://www.youtube.com/@Cabadokas', icon: 'fa-brands fa-youtube', color: 'bg-red-600' },
  { platform: 'Pinterest', url: 'https://www.pinterest.com/Cabadokas/', icon: 'fa-brands fa-pinterest', color: 'bg-red-700' },
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/Cabadokas', icon: 'fa-brands fa-linkedin', color: 'bg-blue-700' },
  { platform: 'Quora', url: 'https://www.quora.com/cabadokas', icon: 'fa-brands fa-quora', color: 'bg-red-800' },
  { platform: 'WhatsApp', url: 'https://www.whatsapp.com/Cabadokas', icon: 'fa-brands fa-whatsapp', color: 'bg-green-500' },
  { platform: 'Telegram', url: 'https://t.me/Cabadokas', icon: 'fa-brands fa-telegram', color: 'bg-blue-400' },
  { platform: 'Snapchat', url: 'https://www.snapchat.com/@cabadokas', icon: 'fa-brands fa-snapchat', color: 'bg-yellow-400' },
  { platform: 'Discord', url: 'https://discord.com/Cabadokas', icon: 'fa-brands fa-discord', color: 'bg-indigo-600' },
  { platform: 'Behance', url: 'https://www.behance.net/Cabadokas', icon: 'fa-brands fa-behance', color: 'bg-blue-500' },
  { platform: 'Dribbble', url: 'https://dribbble.com/Cabadokas', icon: 'fa-brands fa-dribbble', color: 'bg-pink-500' },
  { platform: 'Twitch', url: 'https://www.twitch.tv/Cabadokas', icon: 'fa-brands fa-twitch', color: 'bg-purple-600' },
];

export const AFFILIATE_PROGRAMS: AffiliateProgram[] = [
  { name: 'Amazon Associates', url: 'https://amazon.com' },
  { name: 'Digistore24', url: '#' },
  { name: 'Etsy Affiliate', url: '#' },
  { name: 'Sephora', url: '#' },
  { name: 'Ulta Beauty', url: '#' },
  { name: 'ClickBank', url: '#' },
  { name: 'ShareASale', url: '#' },
  { name: 'Awin', url: '#' },
  { name: 'Walmart', url: '#' },
  { name: 'Target', url: '#' },
  { name: 'AliExpress', url: '#' },
];

export const MOCK_BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: '10 Revolutionary Skincare Tips for 2025',
    excerpt: 'Discover the secrets to glowing skin with our comprehensive guide to modern dermatology and natural remedies.',
    content: 'Full content about skincare routines, importance of hydration, and recommended products...',
    image: 'https://picsum.photos/800/600?random=1',
    category: 'Beauty',
    date: 'Oct 24, 2023',
    affiliateLinks: [
      { label: 'Top Rated Moisturizer (Amazon)', url: 'https://amzn.to/4qUkcUx' },
      { label: 'Organic Face Serum', url: 'https://amzn.to/497NUz5' }
    ],
    tags: ['skincare', 'beauty', 'wellness']
  },
  {
    id: '2',
    title: 'The Ultimate Keto Diet Guide for Women',
    excerpt: 'How to effectively manage weight loss while maintaining energy levels tailored specifically for women\'s metabolism.',
    content: 'Detailed guide on Keto, meal prepping, and balancing hormones...',
    image: 'https://picsum.photos/800/600?random=2',
    category: 'Weight Loss',
    date: 'Oct 22, 2023',
    affiliateLinks: [
      { label: 'Keto Cookbook Bundle', url: 'https://amzn.to/497NUz5' }
    ],
    tags: ['diet', 'keto', 'weight loss']
  },
  {
    id: '3',
    title: 'Work From Home: Financial Independence for Women',
    excerpt: 'Explore legitimate ways to generate income online, from affiliate marketing to freelance design.',
    content: 'Strategies for passive income, setting up a home office, and leveraging social media...',
    image: 'https://picsum.photos/800/600?random=3',
    category: 'Finance',
    date: 'Oct 20, 2023',
    affiliateLinks: [
      { label: 'Start Your Blog Kit', url: '#' }
    ],
    tags: ['money', 'work from home', 'business']
  },
  {
    id: '4',
    title: 'Yoga for Mental Clarity and Stress Relief',
    excerpt: 'Simple daily routines to calm your mind and strengthen your body.',
    content: 'Step by step yoga poses...',
    image: 'https://picsum.photos/800/600?random=4',
    category: 'Health',
    date: 'Oct 18, 2023',
    tags: ['yoga', 'mental health', 'fitness']
  }
];

export const PRIVACY_POLICY_TEXT = `
1. Our Commitment to a Global Audience
We are committed to empowering women and girls globally. This policy is written to comply with the general requirements for all major advertising and affiliate networks, ensuring a trustworthy experience for our visitors worldwide.

2. Affiliate Disclosure (CRITICAL SECTION)
“Cabadokas” participates in various affiliate marketing programs. This means we may earn a small commission when you purchase a product through a link on our blog or app, at no additional cost to you.
Our affiliate programs include: Amazon Services LLC Associates Program, Digistore24, Etsy, Awin, ShareASale, EBay, Walmart, Target, AliExpress, Rakuten, CJ Affiliate, ClickBank, LOOKFANTASTIC, Sephora, Algo-affiliates, Ulta Beauty, and Nordstrom.

3. Google AdSense & Cookies
We use Google AdSense to serve advertisements on our sites. Google uses cookies to serve ads based on a user's prior visits to this website or other websites.

4. External Links and Social Media
“Cabadokas” maintains a strong presence across global social media platforms. When you click a social media icon, you leave our sites, and any data you share is governed by that platform's privacy policy.

5. Contact Us
If you have any questions about this Privacy Policy or your use of our sites, please contact us directly at cabadokas@zohomail.com or cabadokas@gmail.com.
`;