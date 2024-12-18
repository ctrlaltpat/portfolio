import { MediaItem } from './types';

export const mediaItems: MediaItem[] = [
  {
    id: '1',
    title: 'Creative Coding: Audio Visualizer',
    description: 'An interactive audio visualizer built with Three.js and Web Audio API. The visualization responds to music frequencies in real-time.',
    type: 'video',
    url: '/media/audio-visualizer.mp4',
    coverImage: '/media/audio-visualizer-cover.jpg',
    date: '2024-01-15',
    tags: ['Creative Coding', 'Three.js', 'WebGL', 'Audio']
  },
  {
    id: '2',
    title: 'Skateboarding in London',
    description: 'Exploring London\'s best skate spots and capturing the vibrant skateboarding culture.',
    type: 'image',
    url: '/media/skateboarding.jpg',
    coverImage: '/media/skateboarding.jpg',
    date: '2023-12-20',
    tags: ['Skateboarding', 'Photography', 'London']
  },
  {
    id: '3',
    title: 'Pixel Art Animation',
    description: 'A collection of pixel art animations created for various game projects.',
    type: 'video',
    url: '/media/pixel-art.mp4',
    coverImage: '/media/pixel-art-cover.jpg',
    date: '2023-11-30',
    tags: ['Animation', 'Pixel Art', 'Game Development']
  },
  {
    id: 'snippet-1',
    title: 'React Custom Hook: useLocalStorage',
    description: 'A custom React hook that provides a way to persist state in localStorage with automatic JSON parsing/stringifying.',
    type: 'snippet',
    language: 'typescript',
    code: `import { useState, useEffect } from 'react';

function useLocalStorage<T>(key: string, initialValue: T) {
  // Get from local storage then
  // parse stored json or return initialValue
  const readValue = () => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(\`Error reading localStorage key "\${key}":\`, error);
      return initialValue;
    }
  };

  const [storedValue, setStoredValue] = useState<T>(readValue);

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.warn(\`Error setting localStorage key "\${key}":\`, error);
    }
  };

  return [storedValue, setValue] as const;
}

export default useLocalStorage;`,
    date: '2024-01-10',
    tags: ['React', 'TypeScript', 'Hooks', 'localStorage']
  },
  {
    id: 'snippet-2',
    title: 'Tailwind CSS Grid Layout',
    description: 'A responsive grid layout using Tailwind CSS that adapts from 1 to 3 columns based on screen size.',
    type: 'snippet',
    language: 'html',
    code: `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div class="bg-white rounded-lg shadow-md p-4">
    <h2 class="text-xl font-bold mb-2">Card 1</h2>
    <p class="text-gray-600">Some content here</p>
  </div>
  <!-- Repeat for other cards -->
</div>`,
    date: '2024-01-05',
    tags: ['HTML', 'Tailwind CSS', 'Responsive Design']
  },
  {
    id: 'snippet-3',
    title: 'Three.js Basic Scene Setup',
    description: 'A basic Three.js scene setup with camera, renderer, and a simple animation loop.',
    type: 'snippet',
    language: 'javascript',
    code: `import * as THREE from 'three';

// Create scene
const scene = new THREE.Scene();

// Create camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

// Create renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add a cube
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();`,
    date: '2023-12-28',
    tags: ['Three.js', 'JavaScript', '3D Graphics', 'WebGL']
  },
  {
    id: '4',
    title: 'Web Development Talk',
    description: 'A presentation on modern web development practices and emerging technologies.',
    type: 'video',
    url: '/media/web-dev-talk.mp4',
    coverImage: '/media/web-dev-talk-cover.jpg',
    date: '2023-10-15',
    tags: ['Web Development', 'Speaking', 'Tech']
  },
  {
    id: '5',
    title: 'Street Photography',
    description: 'Capturing the essence of urban life through street photography.',
    type: 'image',
    url: '/media/street-photo.jpg',
    coverImage: '/media/street-photo.jpg',
    date: '2023-09-25',
    tags: ['Photography', 'Urban', 'Art']
  },
  {
    id: '6',
    title: 'Electronic Music Production',
    description: 'Original electronic music tracks produced using various digital audio workstations.',
    type: 'audio',
    url: '/media/electronic-music.mp3',
    coverImage: '/media/electronic-music-cover.jpg',
    date: '2023-08-10',
    tags: ['Music', 'Production', 'Electronic']
  },
  {
    id: '7',
    title: 'Code Art Installation',
    description: 'An interactive art installation using code and motion sensors.',
    type: 'video',
    url: '/media/code-art.mp4',
    coverImage: '/media/code-art-cover.jpg',
    date: '2023-07-20',
    tags: ['Art', 'Interactive', 'Installation']
  },
  {
    id: '8',
    title: 'Gaming Stream Highlights',
    description: 'Best moments from various gaming streams and competitions.',
    type: 'video',
    url: '/media/gaming-highlights.mp4',
    coverImage: '/media/gaming-highlights-cover.jpg',
    date: '2023-06-15',
    tags: ['Gaming', 'Streaming', 'Entertainment']
  },
  {
    id: '9',
    title: 'Digital Art Collection',
    description: 'A series of digital artworks exploring various styles and techniques.',
    type: 'image',
    url: '/media/digital-art.jpg',
    coverImage: '/media/digital-art.jpg',
    date: '2023-05-01',
    tags: ['Digital Art', 'Creative', 'Design']
  }
];
