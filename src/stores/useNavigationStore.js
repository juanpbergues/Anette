import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';

export const useNavigationStore = create(
    persist(
        (set) => ({
          primary: '',
          secondary: '',

          setPrimary: (newUbication) => set(() => ({primary: newUbication})),
          setSecondary: (newUbication) =>
            set(() => ({secondary: newUbication})),
        }), {
          name: 'navigation-storage',
          storage: createJSONStorage(() => sessionStorage),
        },
    ),
);
