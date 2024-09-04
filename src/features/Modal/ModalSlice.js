import { createAppSlice } from "../../app/createAppSlice";

const initialState = {
  modalDetails: {
    modalTitle: "",
    modalSubtitle: "",
    modalContent: "",
    modalButtons: false,
  },
  showModal: false,
};

export const modalSlice = createAppSlice({
  name: "modal",
  initialState,
  reducers: (create) => ({
    showModal: create.reducer((state, action) => {
      state.showModal = true;
      state.modalDetails = action.payload;
    }),
    hideModal: create.reducer((state) => {
      state.showModal = false;
      state.modalDetails = {
        modalTitle: "",
        modalSubtitle: "",
        modalContent: "",
        modalButtons: false,
      };
    }),
  }),
  selectors: {
    selectShowModal: (state) => state.showModal,
    selectModalDetails: (state) => state.modalDetails,
  },
});

export const { showModal, hideModal } = modalSlice.actions;

export const { selectModalDetails, selectShowModal } = modalSlice.selectors;
