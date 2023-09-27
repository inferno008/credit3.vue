<template>
    <div id="app">
      <!-- Component with Event -->
      <custom-component-with-event :event-name="eventName" @custom-event="handleCustomEvent"></custom-component-with-event>
      <p>Received Event Data: {{ eventData }}</p>
  
      <!-- Component with Slot -->
      <custom-component-with-slot>
        <template #custom-slot>
          <p>Slot example</p>
        </template>
      </custom-component-with-slot>
    </div>
  </template>
  
  <script>
  const { ref } = Vue;
  
  export default {
    name: 'index',
    setup() {
      // Event data
      const eventData = ref("");
  
      // Event handler to receive data from the custom component
      const handleCustomEvent = (data) => {
        eventData.value = data;
      };
  
      // Prop for the custom-component-with-event
      const eventName = ref("Emit Event");
  
      return {
        eventData,
        handleCustomEvent,
        eventName,
      };
    },
  };
  </script>
  
  <style>
  /* Add your styles here */
  </style>
  



