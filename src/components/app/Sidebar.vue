<template>
  <ul class="sidenav app-sidenav" :class="{open: isOpen}">
    <router-link
      active-class="active"
      :exact="category.exact"
      tag="li"
      :to="category.path"
      :key="category.path"
      v-for="category in categories"
    >
      <!-- <a href="#" class="waves-effect waves-orange pointer">Счет</a> -->
      <a href="#" class="waves-effect waves-orange pointer">{{ category.title }}</a>
    </router-link>
    <!-- <li> 
      <a href="#" class="waves-effect waves-orange pointer">История</a>
    </li>
    <li>
      <a href="#" class="waves-effect waves-orange pointer">Планирование</a>
    </li>
    <li>
      <a href="#" class="waves-effect waves-orange pointer">Новая запись</a>
    </li>
    <li>
      <a href="#" class="waves-effect waves-orange pointer">Категории</a>
    </li>-->
  </ul>
</template>

<script>
export default {
  props: ["isOpen"],
  data() {
    return {
      categories: [
        { title: "Счёт", path: "/", exact: true },
        { title: "История", path: "/history" },
        { title: "Планирование", path: "/planning" },
        { title: "Новая запись", path: "/record" },
        { title: "Категории", path: "/categories" }
      ],
      isActive: false
    };
  }
};
</script>