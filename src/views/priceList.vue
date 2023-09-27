<template>
  <div>
    <header>
      <h1>Car Detailing Price List</h1>
      <p>Explore Our Competitive Prices</p>
    </header>

    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/priceList">Price List</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <li><router-link to="/index">index</router-link></li>
      </ul>
    </nav>

    <!-- List Rendering with v-for -->
    <h2>Service Price List</h2>
    <table>
      <thead>
        <tr>
          <th>Car Brand</th>
          <th>Model Type</th>
          <th>Interior Detailing</th>
          <th>Paint Works</th>
          <th>Additional Stickering</th>
          <th>Spare Parts</th>
        </tr>
      </thead>
      <tbody>
        <!-- Use v-for to loop through cars and render rows -->
        <tr v-for="(car, index) in cars" :key="index">
          <td>{{ car.brand }}</td>
          <td>{{ car.model }}</td>
          <td>{{ car.interiorDetailing }}</td>
          <td>{{ car.paintWorks }}</td>
          <td>{{ car.additionalStickering }}</td>
          <td>{{ car.spareParts }}</td>
        </tr>
      </tbody>
    </table>

    <!-- User Input with v-model -->
    <div>
      <label for="search">Search Car Brand:</label>
      <input type="text" id="search" v-model="search" placeholder="Enter a car brand">
    </div>

    <!-- Filtering cars based on user input -->
    <button @click="filterCars">Filter Cars</button>

    <!-- Display filtered cars -->
    <table v-if="filteredCars.length > 0">
      <thead>
        <tr>
          <th>Car Brand</th>
          <th>Model Type</th>
          <th>Interior Detailing</th>
          <th>Paint Works</th>
          <th>Additional Stickering</th>
          <th>Spare Parts</th>
        </tr>
      </thead>
      <tbody>
        <!-- Render filtered cars -->
        <tr v-for="(car, index) in filteredCars" :key="index">
          <td>{{ car.brand }}</td>
          <td>{{ car.model }}</td>
          <td>{{ car.interiorDetailing }}</td>
          <td>{{ car.paintWorks }}</td>
          <td>{{ car.additionalStickering }}</td>
          <td>{{ car.spareParts }}</td>
        </tr>
      </tbody>
    </table>

     <!-- Vue Component (Slot and Event) -->
     <custom-car-item
      v-for="(car, index) in cars"
      :key="index"
      :item="car"
      @custom-event="handleCustomEvent"
    >
      <!-- Define a slot for custom content -->
      <template #custom-slot="{ car }">
        <p>Car Brand: {{ car.brand }}</p>
        <p>Model Type: {{ car.model }}</p>
        <!-- Slot content from the HTML file -->
        <slot></slot>
      </template>
    </custom-car-item>

    <!-- Display slot content from the HTML file -->
    <custom-component-with-slot>
      <template #custom-slot>
        <p>Slot example</p>
      </template>
    </custom-component-with-slot>
  </div>
</template>

<script>
export default {
  name: 'PriceList',
  data() {
    return {
      cars: [
        { brand: 'Toyota', model: 'Camry', interiorDetailing: '$100', paintWorks: '$150', additionalStickering: '$50', spareParts: '$80' },
        { brand: 'Ford', model: 'Mustang', interiorDetailing: '$120', paintWorks: '$180', additionalStickering: '$60', spareParts: '$90' },
        { brand: 'Honda', model: 'Accord', interiorDetailing: '$110', paintWorks: '$160', additionalStickering: '$55', spareParts: '$85' },
        { brand: 'Chevrolet', model: 'Cruze', interiorDetailing: '$95', paintWorks: '$140', additionalStickering: '$45', spareParts: '$75' },
        { brand: 'BMW', model: '3 Series', interiorDetailing: '$130', paintWorks: '$200', additionalStickering: '$70', spareParts: '$100' },
        { brand: 'Audi', model: 'A4', interiorDetailing: '$125', paintWorks: '$190', additionalStickering: '$65', spareParts: '$95' }
      ],
      search: '',
      filteredCars: [],
    };
  },
  methods: {
    filterCars() {
      // Implement filtering logic based on user input (this.search)
      // Update this.filteredCars with the filtered cars
      const searchTerm = this.search.toLowerCase();
      this.filteredCars = this.cars.filter(car => car.brand.toLowerCase().includes(searchTerm));
    },
    handleCustomEvent(data) {
      // Handle the custom event data received from the child component
      // You can perform actions or update data based on the event
      console.log('Received custom event data:', data);
    },
  },
};
</script>

<style scoped>
  /* CSS for the PriceList component */
  header {
    background-color: #333;
    color: #fff;
    padding: 1rem;
    text-align: center;
  }

  nav ul {
    list-style-type: none;
    background-color: #444;
    text-align: center;
    padding: 1rem;
  }

  nav li {
    display: inline;
    margin: 0 1rem;
  }

  nav a {
    text-decoration: none;
    color: #fff;
  }

  .price-list {
    background-color: #fff;
    padding: 2rem;
    border-radius: 5px;
    margin: 2rem;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 1rem;
  }

  table th,
  table td {
    padding: 0.5rem;
    text-align: center;
    border: 1px solid #ccc;
  }

  table th {
    background-color: #333;
    color: #fff;
  }

  table tbody tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  p {
    text-align: center;
    margin-top: 1rem;
  }

  footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 1rem;
  }
</style>


 
  
  
  
  
  
  
  
  
  