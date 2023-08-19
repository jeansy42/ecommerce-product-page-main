/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cus_Org: "hsl(26, 100%, 55%)",
        cus_P_Org: "hsl(25, 100%, 94%)",
        cus_VDB: "hsl(220, 13%, 13%)",
        cus_DGB: "hsl(219, 9%, 45%)",
        cus_LGB: "hsl(223, 64%, 98%)",
      },
      fontFamily: { Khumb: ["Kumbh Sans", "sans-serif"] },
    },
  },
  plugins: [],
};
