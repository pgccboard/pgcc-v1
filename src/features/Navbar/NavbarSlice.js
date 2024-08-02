import { createAppSlice } from "../../app/createAppSlice";

const initialState = {
  activeTab: "",
};

export const navbarSlice = createAppSlice({
  name: "navbar",
  initialState,
  reducers: (create) => ({
    setActiveTab: create.reducer((state, action) => {
      state.activeTab = action.payload;
    }),
  }),
  selectors: {
    selectActiveTab: (state) => state.activeTab,
  },
});

export const { setActiveTab } = navbarSlice.actions;

export const { selectActiveTab } = navbarSlice.selectors;
