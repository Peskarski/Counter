import create from 'zustand';

export interface State {
  counter: number,
  increment(): void,
  decrement(): void,
}

export const useCounterStore = create((set) => ({
  counter: 0,
  increment: () => set((state: State) => ({ counter: state.counter + 1 })),
  decrement: () => set((state: State) => ({ counter: state.counter - 1 })),
}))