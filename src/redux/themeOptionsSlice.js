import { createSlice } from "@reduxjs/toolkit";
import sideBar6 from "../assets/utils/images/sidebar/city1.jpg";

const initialState = {
  backgroundColor: "bg-color sidebar-text-light",
  headerBackgroundColor: "",
  enableMobileMenuSmall: "",
  enableBackgroundImage: false,
  enableClosedSidebar: false,
  enableFixedHeader: true,
  enableHeaderShadow: true,
  enableSidebarShadow: true,
  enableFixedFooter: true,
  enableFixedSidebar: true,
  colorScheme: "white",
  backgroundImage: sideBar6,
  backgroundImageOpacity: "opacity-06",
  enablePageTitleIcon: true,
  enablePageTitleSubheading: true,
  enablePageTabsAlt: true,
};

export const themeOptionsSlice = createSlice({
  name: "themeOptions",
  initialState,

  reducers: {
    setEnableBackgroundImage: (state, { payload }) => {
      state.enableBackgroundImage = payload;
    },
    setEnableFixedHeader: (state, { payload }) => {
      state.enableFixedHeader = payload;
    },
    setEnableHeaderShadow: (state, { payload }) => {
      state.enableHeaderShadow = payload;
    },
    setEnableSidebarShadow: (state, { payload }) => {
      state.enableSidebarShadow = payload;
    },
    setEnablePageTitleIcon: (state, { payload }) => {
      state.enablePageTitleIcon = payload;
    },
    setEnablePageTitleSubheading: (state, { payload }) => {
      state.enablePageTitleSubheading = payload;
    },
    setEnablePageTabsAlt: (state, { payload }) => {
      state.enablePageTabsAlt = payload;
    },
    setEnableFixedSidebar: (state, { payload }) => {
      state.enableFixedSidebar = payload;
    },
    setEnableClosedSidebar: (state, { payload }) => {
      state.enableClosedSidebar = payload;
    },
    setEnableMobileMenu: (state, { payload }) => {
      state.enableMobileMenu = payload;
    },
    setEnableMobileMenuSmall: (state, { payload }) => {
      state.enableMobileMenuSmall = payload;
    },
    setEnableFixedFooter: (state, { payload }) => {
      state.enableFixedFooter = payload;
    },
    setBackgroundColor: (state, { payload }) => {
      state.backgroundColor = payload;
    },
    setHeaderBackgroundColor: (state, { payload }) => {
      state.headerBackgroundColor = payload;
    },
    setColorScheme: (state, { payload }) => {
      state.colorScheme = payload;
    },
    setBackgroundImageOpacity: (state, { payload }) => {
      state.backgroundImageOpacity = payload;
    },
    setBackgroundImage: (state, { payload }) => {
      state.backgroundImage = payload;
    },
  },
});

export const {
  setEnableBackgroundImage,
  setEnableFixedHeader,
  setEnableHeaderShadow,
  setEnableSidebarShadow,
  setEnablePageTitleIcon,
  setEnablePageTitleSubheading,
  setEnablePageTabsAlt,
  setEnableFixedSidebar,
  setEnableClosedSidebar,
  setEnableMobileMenu,
  setEnableMobileMenuSmall,
  setEnableFixedFooter,
  setBackgroundColor,
  setHeaderBackgroundColor,
  setColorScheme,
  setBackgroundImageOpacity,
  setBackgroundImage,
} = themeOptionsSlice.actions;

export default themeOptionsSlice.reducer;
