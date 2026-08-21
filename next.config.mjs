/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Keeps the barrel import in lucide-react from pulling the whole icon set
  // into any chunk that touches it.
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
}

export default nextConfig
