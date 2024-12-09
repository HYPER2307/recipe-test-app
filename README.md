Here’s a template for the `README.md` file based on the provided requirements for the Car Dealer App:

---

# Car Dealer App - Frontend JS Engineer Test

This is a frontend application for a car dealer app built with Next.js. The application allows users to filter vehicles by type and model year, displaying the results on a separate page. The app is styled using Tailwind CSS.

## Features

- **Home Page (Filter Page)**: Allows users to select a vehicle make and model year.
- **Results Page**: Displays a list of vehicle models based on the selected make and model year.
- **Responsive Design**: The app is built to be fully responsive, providing an optimal user experience on different devices.
- **Error Handling**: Proper error handling is implemented for API data fetching issues.

## Technologies Used

- **Next.js**: For building the React-based application and handling static generation.
- **Tailwind CSS**: For styling and responsive design.
- **React Suspense**: Used to manage loading states.
- **Axios**: For making API requests to fetch vehicle makes and models.

## Setup Instructions

### Prerequisites

- **Node.js**: Ensure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).
- **npm** or **yarn**: A package manager to install dependencies.

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install dependencies:

   ```bash
   npm install
   # or if you're using yarn
   yarn install
   ```

3. Create a `.env.local` file in the root directory and add any necessary environment variables.

### Running the Application

To start the development server, run:

```bash
npm run dev
# or if you're using yarn
yarn dev
```

This will start the Next.js development server, and you can access the app at `http://localhost:3000`.

### Building the Application

To build the application for production, run:

```bash
npm run build
# or if you're using yarn
yarn build
```

To start the production server after building:

```bash
npm run start
# or if you're using yarn
yarn start
```

### Testing

To run tests, use the following command:

```bash
npm test
# or if you're using yarn
yarn test
```

### Linting and Formatting

To check the code with ESLint and Prettier, use:

```bash
npm run lint
# or if you're using yarn
yarn lint
```

To automatically fix linting issues, run:

```bash
npm run lint:fix
# or if you're using yarn
yarn lint:fix
```

## Folder Structure

src/: Contains most of application's code.
@types/: Presumably for TypeScript types.
app/: Likely for Next.js pages and components.
components/: For reusable UI components.
constants/: For constants like vehicle types or years.
hooks/: Custom React hooks.
redux/: Redux-related files.
services/: For API calls and services. # Project dependencies and scripts

## How the Application Works

1. **Home Page (Filter Page)**:

   - The home page allows users to filter vehicles based on make and model year.
   - The makes are fetched from the [NHTSA API](https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json).
   - Users can select the make from a dropdown and choose a model year from 2015 to the current year.

2. **Results Page**:

   - After selecting a make and year, users click the "Next" button, which navigates to a result page displaying the available vehicle models.
   - The vehicle models are fetched using the [NHTSA API](https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/{makeId}/modelyear/{year}?format=json).
   - The result page uses dynamic routing to display the models for the selected make and year.

3. **Static Paths**:

   - The result pages are statically generated using `generateStaticParams`, which fetches the makes and years and generates the paths for the results pages.

4. **Loading States**:
   - React's `Suspense` component is used to show a loading indicator while fetching data from the API.

## Configuration

### Environment Variables

The application requires an `.env.local` file for any necessary environment configurations. This file should be placed in the root directory and can contain keys like:

```
NEXT_PUBLIC_API_BASE_URL=<your-api-base-url>
```

## Screencast

[DEMO](https://www.loom.com/share/2931ffb6b2e5448581dd2535c84ec0ce?sid=b09a5116-8fe1-46a0-90b1-6514eae478ce)

## Conclusion

This application demonstrates the ability to build a frontend app using Next.js, fetch data from external APIs, and implement a responsive UI with Tailwind CSS. It also showcases best practices like static generation, error handling, and loading states with React Suspense.
