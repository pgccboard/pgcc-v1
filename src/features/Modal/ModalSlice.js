import { createAppSlice } from "../../app/createAppSlice";

const initialState = {
  modalDetails: {
    modalTitle: "",
    modalSubtitle: "",
    modalContent: "",
    modalButtons: [],
  },
  modalState: false,
};

export const modalSlice = createAppSlice({
  name: "modal",
  initialState,
  reducers: (create) => ({
    showModal: create.reducer((state, action) => {
      state.modalState = true;
      state.modalDetails = action.payload;
    }),
    hideModal: create.reducer((state) => {
      state.modalState = false;
      state.modalDetails = {
        modalTitle: "",
        modalSubtitle: "",
        modalContent: "",
        modalButtons: [],
      };
    }),
  }),
  selectors: {
    selectModalState: (state) => state.modalState,
    selectModalDetails: (state) => state.modalDetails,
  },
});

export const { showModal, hideModal } = modalSlice.actions;

export const { selectModalDetails, selectModalState } = modalSlice.selectors;
