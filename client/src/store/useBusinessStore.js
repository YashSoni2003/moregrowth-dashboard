import { create } from "zustand";

const useBusinessStore = create((set) => ({
  businessData: null,
  formValues: null,
  setBusinessData: (data) => set({ businessData: data }),
  setFormValues: (values) => set({ formValues: values }),
}));
export default useBusinessStore;
