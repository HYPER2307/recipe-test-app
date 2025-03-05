# Recipe Finder App

This is a frontend application built with Next.js that allows users to search for recipes by query, cuisine type, and preparation time. Users can browse results, view recipe details, and navigate seamlessly through the app.

## Features

- **Search Page:**

  - Enter a recipe query (e.g., "pasta").
  - Select a cuisine type (Italian, Mexican, Chinese, etc.).
  - Specify a maximum preparation time in minutes.
  - "Next" button only enabled when at least one field is filled.

- **Recipes Page:**

  - Displays a list of recipes with titles and images.
  - Clicking a recipe navigates to the details page.
  - Server-side rendering with API response caching (1 minute).

- **Recipe Details Page:**

  - Shows the recipe title and ingredients list.
  - Displays optional details like preparation time, servings, and summary.

- **Responsive Design:** Fully responsive UI with Tailwind CSS.
- **Loading States:** Managed with React's `Suspense`.
- **Error Handling:** Proper handling for API errors or invalid inputs.

## Technologies Used

- **Next.js:** For server-side rendering and routing.
- **Tailwind CSS:** For styling and responsive design.
- **React Suspense:** For managing loading states.
- **Axios:** For API requests to Spoonacular.
- **ESLint & Prettier:** For code quality and consistency.

## Setup Instructions

### Prerequisites

- **Node.js:** Install from [nodejs.org](https://nodejs.org/).
- **npm** or **yarn:** A package manager to handle dependencies.

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file and add the Spoonacular API key:

   ```plaintext
   API_KEY=your_api_key_here
   NEXT_PUBLIC_API_URL=your_api_url_here
   ```

> Get your API key from [Spoonacular](https://spoonacular.com/food-api/docs#Authentication).

### Running the Application

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Access the app at [http://localhost:3000](http://localhost:3000).

### Building for Production

```bash
npm run build
npm run start
# or
yarn build
yarn start
```

### Testing

Run tests:

```bash
npm test
# or
yarn test
```

### Linting and Formatting

```bash
npm run lint
npm run lint:fix
# or
yarn lint
yarn lint:fix
```

## How the Application Works

1. **Search Page:**

   - Users fill out search fields and click "Next".
   - Navigation to the recipes page with query params.

2. **Recipes Page:**

   - Fetches recipes from the Spoonacular API.
   - Displays results with SSR and 1-minute caching.

3. **Recipe Details Page:**
   - Fetches detailed recipe info by ID.
   - Shows ingredients, prep time, servings, and more.

## API Integration

- **Search Recipes:**

```javascript
https://api.spoonacular.com/recipes/complexSearch?query={query}&cuisine={cuisine}&maxReadyTime={maxReadyTime}&apiKey=YOUR_API_KEY
```

- **Get Recipe Details:**

```javascript
https://api.spoonacular.com/recipes/{recipeId}/information?apiKey=YOUR_API_KEY
```

## Conclusion

This app showcases building a frontend with Next.js, integrating with an external API, and crafting a responsive UI using Tailwind CSS. It demonstrates best practices like SSR, caching, error handling, and loading states.

Let me know if you'd like any adjustments or enhancements! 🚀
