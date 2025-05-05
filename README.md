# Mobile UI Sample

A React TypeScript application showcasing mock chart components for mobile UI development. This project provides simple mock implementations of common chart components that can be used as placeholders during development.

## Overview

This repository contains React components that mimic the API of popular charting libraries like Recharts. The components don't render actual charts, but provide the component structure so you can build your UI without waiting for the actual chart implementation.

## Chart Components

The library includes mock implementations for:

- **Bar Charts**: `<BarChart>`, `<Bar>`
- **Line Charts**: `<LineChart>`, `<Line>`
- **Area Charts**: `<AreaChart>`, `<Area>`
- **Pie Charts**: `<PieChart>`, `<Pie>`, `<Cell>`
- **Supporting Components**: 
  - `<XAxis>`, `<YAxis>`
  - `<CartesianGrid>`
  - `<Tooltip>`
  - `<Legend>`
  - `<ResponsiveContainer>`

## Project Structure

```
mobile-ui-sample/
├── src/
│   ├── components/
│   │   └── Chart.tsx      # Main chart components
│   ├── App.tsx            # Example usage
│   ├── App.css            # Styling for the app
│   ├── index.tsx          # Entry point
│   └── index.css          # Global styles
├── package.json           # Project dependencies
├── tsconfig.json          # TypeScript configuration
└── README.md              # This file
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/Algo-aKairos/mobile-ui-sample.git
   cd mobile-ui-sample
   ```

2. Install dependencies:
   ```
   npm install
   ```

## Usage

### Starting the Development Server

```
npm start
```

This will start the development server at [http://localhost:3000](http://localhost:3000).

### Example Usage

```jsx
import { 
  BarChart, Bar,
  XAxis, YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from './components/Chart';

function Example() {
  return (
    <div className="chart-container">
      <h3>Bar Chart Example</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart>
          <CartesianGrid />
          <XAxis />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
```

## Why Use This?

These chart components are designed to be placeholders that can be replaced with actual charting library implementations later without changing your component structure. Benefits include:

- Develop your UI without waiting for actual chart implementation
- Maintain consistent component structure when you switch to a production charting library
- Test layout and responsiveness with placeholder components
- Simplified API for quick development

## Future Improvements

- Add basic styling to make placeholder components more visually distinctive
- Support for more chart types (scatter, radar, etc.)
- Add prop validation similar to production chart libraries
- Simple animations to mimic production behavior

## License

MIT

## Author

Daniel Kairos Clinton 
