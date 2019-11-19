<template>
  <nav class="navbar orange lighten-1">
    <div class="nav-wrapper">
      <div class="navbar-left">
        <a href="#" @click.prevent="$emit('click')">
          <i class="material-icons black-text">dehaze</i>
        </a>
        <span class="black-text">{{ date | date("datetime") }}</span>
      </div>

      <ul class="right hide-on-small-and-down">
        <li>
          <a ref="dropdown" class="dropdown-trigger black-text" href="#" data-target="dropdown">
            USER NAME
            <i class="material-icons right">arrow_drop_down</i>
          </a>

          <ul id="dropdown" class="dropdown-content">
            <li>
              <router-link to="/profile" href="#" class="black-text">
                <i class="material-icons">account_circle</i>Профиль
              </router-link>
            </li>
            <li class="divider" tabindex="-1"></li>
            <li>
              <router-link to="/login?message=logout" class="black-text">
                <i class="material-icons">assignment_return</i>Выйти
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({
    dropdown: null,
    dateInterval: null,
    date: new Date()
  }),

  mounted() {
    this.dropdown = M.Dropdown.init(this.$refs.dropdown);
    this.dateInterval = setInterval(() => {
      this.date = new Date();
    }, 1000);
  },
  methods: {
    toggleSidebar() {
      this.isOpen = !this.isOpen;
    }
  },
  beforeDestroy() {
    if (this.dropdown && this.dropdown.destroy) {
      this.dropdown.destroy();
    }
    clearInterval(this.dateInterval);
  }
};
</script>