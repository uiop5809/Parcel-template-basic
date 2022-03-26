// ES6, ES7, ES8이 ES5로 동작할 수 있도록
module.exports = {
  presets: ["@babel/preset-env"],
  // async, await 사용을 통해 함수가 정상적인 동작을 하는지 확인
  plugins: [["@babel/plugin-transform-runtime"]],
};
