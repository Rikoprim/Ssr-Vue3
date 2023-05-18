import { createSSRApp } from "vue";

export function createApp() {
  return createSSRApp({
    data: () => ({ count: 1 }),
    template: `
      <main class="d-flex flex-column justify-content-center align-items-center min-vh-100 bg-dark">
        <div class="container">
          <h1 class="text-white mb-3">Counter</h1>

          <p class="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          
          <div class="d-flex justify-content-start align-items-center">
            <button type="button" class="btn btn-light" @click="decrementCounter">➖</button>
            <h4 class="text-white fw-bold mx-4">{{ count }}</h4>
            <button type="button" class="btn btn-info" @click="incrementCounter">➕</button>
          </div>
        </div>
      </main>
    `,
    methods: {
      decrementCounter() {
        if (this.count > 1) {
          this.count--;
        }
      },
      incrementCounter() {
        this.count++;
      },
    },
  });
}
