// Stock images for Ahununu Express website
export const stockImages = {
  // Logistics and delivery images with Ethiopian context
  logistics: {
    truck: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d8?w=800&q=80', // Delivery truck in Addis Ababa
    warehouse: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=800&q=80', // Modern warehouse interior
    packages: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=800&q=80', // Packaged goods
    airplane: 'https://images.unsplash.com/photo-1606768666853-403c07a7a1db?w=800&q=80', // Ethiopian Airlines cargo plane
    shipping: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=800&q=80', // Shipping containers in Djibouti port
    delivery: 'https://images.unsplash.com/photo-1556742049-0cfed4f6d45e?w=800&q=80', // Delivery person with package
    logistics_network: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80', // Network visualization
    express_delivery: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d8?w=800&q=80', // Express delivery bike
    distribution: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=800&q=80', // Distribution center
    last_mile: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d8?w=800&q=80' // Last mile delivery
  },
  
  // Ethiopian cultural elements and landmarks
  ethiopian: {
    patterns: 'https://images.unsplash.com/photo-1573246123716-6b1782e5a7a3?w=400&q=80', // Traditional Ethiopian fabric patterns
    culture: 'https://images.unsplash.com/photo-1573246123716-6b1782e5a7a3?w=400&q=80', // Ethiopian coffee ceremony
    landscape: 'https://images.unsplash.com/photo-1594212699904-0c7c6e980e2b?w=800&q=80', // Simien Mountains
    traditional_art: 'https://images.unsplash.com/photo-1573246123716-6b1782e5a7a3?w=400&q=80', // Ethiopian cross
    addis_ababa: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d8?w=800&q=80', // Addis Ababa skyline
    lalibela: 'https://images.unsplash.com/photo-1594212699904-0c7c6e980e2b?w=800&q=80', // Rock-hewn churches
    market: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=800&q=80' // Mercato market
  },
  
  // Business and professional with Ethiopian context
  business: {
    team: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80', // Diverse professional team
    office: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80', // Modern office in Africa
    handshake: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80', // Business handshake
    meeting: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80', // Business meeting
    success: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80', // African business success
    entrepreneur: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=800&q=80', // Ethiopian entrepreneur
    partnership: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80' // Business partnership
  },
  
  // Technology and innovation in logistics
  technology: {
    tracking: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80', // GPS tracking system
    mobile_app: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80', // Mobile app interface
    digital: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80', // Digital logistics dashboard
    innovation: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80', // Innovation in Africa
    drone: 'https://images.unsplash.com/photo-1579829366248-204de6dabf43?w=800&q=80', // Delivery drone technology
    automation: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=800&q=80', // Warehouse automation
    iot: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80' // Internet of Things in logistics
  }
};

// Image preloader utility
export class ImagePreloader {
  constructor() {
    this.loadedImages = new Map();
    this.loadingPromises = new Map();
  }

  async loadImage(url) {
    if (this.loadedImages.has(url)) {
      return this.loadedImages.get(url);
    }

    if (this.loadingPromises.has(url)) {
      return this.loadingPromises.get(url);
    }

    const promise = new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        this.loadedImages.set(url, img);
        this.loadingPromises.delete(url);
        resolve(img);
      };
      img.onerror = () => {
        this.loadingPromises.delete(url);
        reject(new Error(`Failed to load image: ${url}`));
      };
      img.src = url;
    });

    this.loadingPromises.set(url, promise);
    return promise;
  }

  async preloadImages(imageUrls) {
    const promises = imageUrls.map(url => this.loadImage(url));
    try {
      await Promise.all(promises);
      console.log('All images preloaded successfully');
    } catch (error) {
      console.warn('Some images failed to preload:', error);
    }
  }

  getImage(url) {
    return this.loadedImages.get(url);
  }
}

// Create global image preloader instance
export const imagePreloader = new ImagePreloader();

// Preload essential images
const essentialImages = [
  stockImages.logistics.truck,
  stockImages.logistics.packages,
  stockImages.logistics.warehouse,
  stockImages.business.team,
  stockImages.technology.tracking
];

// Auto-preload essential images
imagePreloader.preloadImages(essentialImages);

export default stockImages;
