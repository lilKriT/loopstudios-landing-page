/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, js}", "index.html"],
  theme: {
    extend: {
      colors: {
        white: "hsl(0, 0%, 100%)",
        black: "hsl(0, 0%, 0%)",
        darkGray: "hsl(0, 0%, 55%)",
        veryDarkGray: "hsl(0, 0%, 41%)",
      },
      fontSize: {
        base: "0.9375rem",
      },
      fontFamily: {
        alata: ["Alata", "sans-serif"],
        josefin: ["Josefin Sans", "sans-serif"],
      },
      backgroundImage: {
        girlDriving: "url(../images/desktop/image-hero.jpg)",
        girlDrivingM: "url(../images/mobile/image-hero.jpg)",
        deepEarth: "url(../images/desktop/image-deep-earth.jpg)",
        deepEarthM: "url(../images/mobile/image-deep-earth.jpg)",
        nightArcade: "url(../images/desktop/image-night-arcade.jpg)",
        nightArcadeM: "url(../images/mobile/image-night-arcade.jpg)",
        soccerTeam: "url(../images/desktop/image-soccer-team.jpg)",
        soccerTeamM: "url(../images/mobile/image-soccer-team.jpg)",
        theGrid: "url(../images/desktop/image-grid.jpg)",
        theGridM: "url(../images/mobile/image-grid.jpg)",
        fromAbove: "url(../images/desktop/image-from-above.jpg)",
        fromAboveM: "url(../images/mobile/image-from-above.jpg)",
        pocketBorealis: "url(../images/desktop/image-pocket-borealis.jpg)",
        pocketBorealisM: "url(../images/mobile/image-pocket-borealis.jpg)",
        curosity: "url(../images/desktop/image-curiosity.jpg)",
        curosityM: "url(../images/mobile/image-curiosity.jpg)",
        fishEye: "url(../images/desktop/image-fisheye.jpg)",
        fishEyeM: "url(../images/mobile/image-fisheye.jpg)",
      },
    },
  },
  plugins: [],
};
