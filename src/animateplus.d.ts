declare module 'https://cdn.jsdelivr.net/npm/animateplus@2/animateplus.js' {
  export default function animate(options: {
    elements: HTMLElement | HTMLElement[];
    easing?: string;
    duration?: number;
    delay?: number;
    transform?: string[];
  }): Promise<{ elements: HTMLElement[] }>;
}
