import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: {
    container: { center: true },
    fontFamily: {
      playfair: "Playfair Display"
    },
    extend: {
      backgroundImage: {
        form: "url('/background.svg')",
      },
    },
  },
};
