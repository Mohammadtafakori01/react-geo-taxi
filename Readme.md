# React Geo Taxi 🚖🌍

[![NPM Version](https://img.shields.io/npm/v/@mohammadtafakori01/react-geo-taxi)](https://www.npmjs.com/package/@mohammadtafakori01/react-geo-taxi)
[![License](https://img.shields.io/github/license/mohammadtafakori01/react-geo-taxi)](LICENSE)

**React Geo Taxi** is a React-based package that provides an interactive map with taxi meter functionality. It allows users to search for locations, get their current position, and calculate distances with an animated taxi meter.

## **Features**
✅ Interactive map with OpenLayers  
✅ Search locations using OpenStreetMap's Nominatim API  
✅ Get current GPS location  
✅ Select origin and destination on the map  
✅ Automatically calculate and display distance  
✅ Live taxi meter with real-time fare calculation  

---


![Image](https://github.com/user-attachments/assets/faf7ffbf-1142-4e66-8ff3-d742546e8b39)---



## **Installation**
You can install the package using NPM:

```sh
npm install @mohammadtafakori01/react-geo-taxi
```

or using Yarn:

```sh
yarn add @mohammadtafakori01/react-geo-taxi
```

---

## **Usage**
### **Basic Example**
Import and use components in your React app:

```jsx
import React from "react";
import { MapWrapper } from "@mohammadtafakori01/react-geo-taxi";

const App = () => {
  return (
    <div>
      <h1>Taxi Service Map</h1>
      <MapWrapper />
    </div>
  );
};

export default App;
```

---

## **Components**
### **1. `MapWrapper`**
> A fully interactive map that allows users to pick origin and destination points and displays the calculated distance.

#### **Example Usage**
```jsx
import { MapWrapper } from "@mohammadtafakori01/react-geo-taxi";

const MyMapComponent = () => <MapWrapper />;
```

---

### **2. `SearchAndLocation`**
> Provides a search input and a button to get the user's current location.

#### **Example Usage**
```jsx
import { SearchAndLocation } from "@mohammadtafakori01/react-geo-taxi";

const MySearchComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <SearchAndLocation
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      handleSearch={() => console.log("Searching for:", searchQuery)}
      handleGetLocation={() => console.log("Getting location...")}
      isLocating={false}
    />
  );
};
```

---

### **3. `TaxiMeter`**
> A live taxi fare calculator that updates based on distance traveled.

#### **Example Usage**
```jsx
import { TaxiMeter } from "@mohammadtafakori01/react-geo-taxi";

const MyTaxiMeter = () => (
  <TaxiMeter meterofdistance={5000} permeter={8} />
);
```

---

## **Dependencies**
This package requires the following dependencies in your project:
- **React** (`>=18.0.0`)
- **OpenLayers** (`ol` `>=10.4.0`)
- **Styled-Components** (`>=6.1.15`)
Make sure you have them installed:
```sh
npm install react ol styled-components
```

---

## **Contributing**
Contributions are welcome! If you have suggestions or bug fixes, please open an issue or submit a pull request.

### **Steps to Contribute**
1. Fork the repository
2. Clone your fork:
   ```sh
   git clone https://github.com/mohammadtafakori01/react-geo-taxi.git
   ```
3. Create a new branch:
   ```sh
   git checkout -b feature-name
   ```
4. Make changes and commit:
   ```sh
   git commit -m "Add new feature"
   ```
5. Push your branch:
   ```sh
   git push origin feature-name
   ```
6. Open a pull request on GitHub.

---

## **License**
This project is licensed under the [MIT License](LICENSE).

---

## **Author**
📌 **Mohammad Tafakori**  
🔗 [GitHub](https://github.com/mohammadtafakori01)  
🔗 [NPM](https://www.npmjs.com/package/@mohammadtafakori01/react-geo-taxi)  
📧 Reach out for support or collaboration! 🚀

---

### **Star the Repo ⭐**
If you found this package useful, consider giving it a star on [GitHub](https://github.com/mohammadtafakori01/react-geo-taxi) ⭐!
```
