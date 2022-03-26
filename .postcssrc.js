// flex가 안 되는 버전은 -webkit-box, -ms-flexbox

module.exports = {
  plugins: [require("autoprefixer")],
};

// ESM => 브라우저 동작 용도
// CommonJS => node.js 동작 용도

// import autoprefixer from "autoprefixer"
// const autoprefixer = require("autoprefixer");

// export {plugins: [autoprefixer]}
