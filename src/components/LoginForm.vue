<template>
  <div
    v-if="showAlert"
    :class="alertClass"
    class="text-white text-center font-bold p-4 mb-4"
  >
    {{ alertMessage }}
  </div>
  <Form @submit="onSubmit" v-slot="{ errors }">
    <!-- Email -->
    <div class="mb-3">
      <label for="email" class="inline-block mb-2">Email</label>
      <Field
        id="email"
        name="email"
        type="email"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Enter Email"
      />
      <span class="text-red-600">{{ errors.email }}</span>
    </div>
    <!-- Password -->
    <div class="mb-3">
      <label for="password" class="inline-block mb-2">Password</label>
      <Field
        id="password"
        name="password"
        type="password"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Password"
      />
      <span class="text-red-600">{{ errors.password }}</span>
    </div>
    <button
      type="submit"
      class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700"
      :disabled="isSubmitting"
    >
      Submit
    </button>
  </Form>
</template>

<script>
import { ref } from 'vue';
import { Form, Field } from 'vee-validate';
import * as yup from 'yup';

export default {
  name: "LoginForm",
  setup() {
    const isSubmitting = ref(false);
    const showAlert = ref(false);
    const alertClass = ref("bg-blue-500");
    const alertMessage = ref("Please wait! We are logging you in.");

    const schema = yup.object({
      email: yup.string().required('Email is required').email('Invalid email format'),
      password: yup.string().required('Password is required').min(9, 'Password must be at least 9 characters').max(100, 'Password cannot exceed 100 characters'),
    });

    const onSubmit = (values) => {
      showAlert.value = true;
      isSubmitting.value = true;
      alertClass.value = "bg-blue-500";
      alertMessage.value = "Please wait! We are logging you in.";

      setTimeout(() => {
        alertClass.value = "bg-green-500";
        alertMessage.value = "Success! You are now logged in.";
        console.log(values);
      }, 2000);
    };

    return {
      schema,
      isSubmitting,
      showAlert,
      alertClass,
      alertMessage,
      onSubmit,
    };
  },
};
</script>
