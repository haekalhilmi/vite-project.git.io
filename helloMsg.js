const helloMsg = (element) => {
  element.innerHTML = "Hello";
  element.addEventListener("click", () => alert("hello"));
};

const goodbyeMSg = (element) => {
  element.innerHTML = "Goodbye";
  element.addEventListener("click", () => alert("goodbye"));
};

export default helloMsg;
export { goodbyeMSg };
