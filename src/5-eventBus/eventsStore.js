import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const useEventsStore = create(
  devtools(
    immer((set) => ({
      events: {},
      subscribe: ({ event, id, callback }) => {
        console.log(
          "%c subscribe",

          "color:white;  background-color:violet",
          event
        );
        set((state) => {
          const eventListeners = state.events[event] || [];
          if (!eventListeners.find((e) => e.id === id)) {
            state.events = {
              ...state.events,
              [event]: [...eventListeners, { id, callback }],
            };
          }
        });
      },
      unsubscribe: ({ event, id }) => {
        console.log(
          "%c unsubscribe",

          "color:white;  background-color:red",
          event,
          id
        );
        set((state) => {
          state.events[event] = [
            ...(state.events[event]?.filter((cb) => cb.id !== id) || []),
          ];
        });
      },
      emit: (event, data) =>
        set((state) => {
          console.log("%c emit", "color:red", event);
          const eventListeners = state.events[event] || [];
          eventListeners.forEach(({ callback }) => callback(data));
          return state;
        }),
    })),

    { name: "eventsBus" }
  )
);

export default useEventsStore;
