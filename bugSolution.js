To fix this, you need to ensure that Tailwind is correctly configured in your framework's build process. This usually involves:

1. **Correctly configuring your Tailwind CSS config file (`tailwind.config.js`).**  Make sure it points to the correct paths and includes your content files.

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
2. **Adding the correct directives in your main CSS file (e.g., `globals.css` in Next.js).**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
3. **Running the Tailwind build process if necessary.**  Some frameworks require a post-build step or a specific command to generate the necessary CSS.

```javascript
// Example Next.js pages/index.js with corrected configuration
function HomePage() {
  return (
    <div className="bg-red-500 p-4">
      <h1>Hello, world!</h1>
    </div>
  );
}

export default HomePage;
```