<template>
  <div>
    <header>
      <h1>Contact Us</h1>
      <p>Get in Touch with Us</p>
    </header>

    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/priceList">Price List</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <li><router-link to="/index">index</router-link></li>
      </ul>
    </nav>

    <main>
      <section class="contact-details">
        <h2>Contact Information</h2>
        <ul>
          <li><strong>Name:</strong> Buvan</li>
          <li><strong>Email:</strong> mbuvan75@gmail.com</li>
          <li><strong>Phone Number:</strong> 0276717480</li>
        </ul>
      </section>

      <section class="contact-form">
        <h2>Contact Us</h2>
        <form @submit.prevent="submitForm">
          <label for="inquiry">Your Inquiry:</label>
          <textarea id="inquiry" name="inquiry" rows="4" v-model="inquiry" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </section>

      <!-- Slot for custom content -->
      <slot name="custom-slot"></slot>
    </main>

    <!-- Custom Component with Event -->
    <custom-component-with-event @custom-event="handleCustomEvent"></custom-component-with-event>
    <p>Received Event Data: {{ eventData }}</p>

    <!-- Custom Component with Slot -->
    <custom-component-with-slot>
      <template #custom-slot>
        <p>Slot example</p>
      </template>
    </custom-component-with-slot>

    <!-- Custom Clothing Item Component -->
    <custom-clothing-item :item="customItem"></custom-clothing-item>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      inquiry: '', // Data to be submitted
      eventData: '', // Event data received from the custom component
      customItem: { description: 'Custom T-Shirt' }, // Custom clothing item data
    };
  },
  methods: {
    submitForm() {
      // Emit a custom event with the inquiry data
      this.$emit('custom-event', this.inquiry);
    },
    handleCustomEvent(data) {
      // Handle the custom event data received from the child component
      this.eventData = data;
    },
  },
};
</script>

<style scoped>
/* CSS for the Contact component */
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

/* ... (Rest of your existing CSS) */
</style>


