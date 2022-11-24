import { makeAutoObservable } from "mobx"

class CounterStore {
  counter = 0;

  constructor() {
    makeAutoObservable(this)
}

  increment() { this.counter++; }

  decrement() { this.counter--; }
}

export default new CounterStore();