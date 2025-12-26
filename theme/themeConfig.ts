import type { ThemeConfig } from 'antd';

export const theme: ThemeConfig = {
  token: {
    colorPrimary: '#9013fe',
    colorPrimaryBg: "#fff",
  },
  components: {
    Menu: {
      itemColor: "#3E444C",
      itemActiveBg: "rgba(254, 213, 0, 0.2)",
      itemSelectedBg: "rgba(144, 19, 254, 0.2)",
      itemHoverBg: "rgba(144, 19, 254, 0.2)",
      itemHoverColor: "#9013FE",
      itemSelectedColor: "#9013FE",
      itemMarginBlock: 1,
      activeBarHeight: 8,
      subMenuItemSelectedColor: "#9013fe"

    },
    Input: {
      controlHeightLG: 45,
      borderRadius: 5,
      controlHeight: 45,
    },
    InputNumber: {
      controlHeightLG: 45,
      borderRadius: 5,
      controlHeight: 45,
    },
    DatePicker: {
      controlHeightLG: 45,
      borderRadius: 5,
      controlHeight: 45,
    },
    Select: {
      // colorTextPlaceholder: "#6B6B6B",
      // colorBorder: "#C4C4C4",
      controlHeightLG: 45,
      controlHeight: 45,
      borderRadius: 5,
      // borderRadiusLG:5,
      // colorBgContainer: "#F5F5F5",
      // fontSizeLG: 14,
    },
    Form: {
      labelColor: "#191919",
      labelFontSize: 14,
    },
    Button: {
      borderRadius: 8,
      controlHeight: 58,
      defaultHoverBorderColor: "#0E0B0A",
      padding: 18,
      colorBorder:"#9013fe",
    },
    Upload:{
      fontSize:14
    },
    Tabs: {
      itemColor: "#6c757d",
      fontSize: 14,
      fontWeightStrong: 700,
      colorText: "#6c757d",
      padding: 10,
      controlItemBgActive: "#9013fe0d",
      controlItemBgHover: "#9013fe0d"
      // itemHoverBg: "#9013fe0d"
    },
    Pagination: {
      colorBgTextActive: "#f9f5ff",
      colorPrimary: "#9013fe",
      colorTextDisabled: "rgba(0, 0, 0, 0.25)",
      // : "#f9f5ff"
      // colorText: "#9013fe"
    },
    Checkbox: {
      colorTextDisabled: "#9013fe",
    }
  }
};
