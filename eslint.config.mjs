import nextVitals from "eslint-config-next/core-web-vitals"

const config = [...nextVitals, { ignores: ["lib/generated/**", ".next/**"] }]

export default config
