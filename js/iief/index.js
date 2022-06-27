let name = "chuong";

(function hello() {
  console.log("my name is chuong");
})();

const handleOnclick = (event, data) => {
  const $ = document.querySelector.bind(document);
  const addressDom = $(`#btn-see-full-${data.id}`);
  const hasClicked = addressDom.classList.contains("clicked");

  if (hasClicked) {
    event.preventDefault();
  }
};
