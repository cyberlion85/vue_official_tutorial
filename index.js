Vue.component("todo-item", {
  props: ["todo"],
  template: "<li>{{ todo.text }}</li>",
});

var app7 = new Vue({
  el: "#app",
  data: {
    groceryList: [
      { id: 0, text: "qqq" },
      { id: 1, text: "ww" },
      { id: 2, text: "eeee?" },
    ],
  },
});
