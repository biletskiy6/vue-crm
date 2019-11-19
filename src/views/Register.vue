<template>
    <form class="card auth-card" @submit.prevent="submitForm">
        <div class="card-content">
            <span class="card-title">Домашняя бухгалтерия</span>
            <div class="input-field">
                <input
                        v-model.trim="email"
                        id="email"
                        type="text"
                        class="validate"
                        :class="{
            invalid:
              ($v.email.$dirty && !$v.email.required) ||
              ($v.email.$dirty && !$v.email.email)
          }"
                />
                <label for="email">Email</label>
                <small
                        v-if="$v.email.$dirty && !$v.email.required"
                        class="helper-text invalid"
                >Поле Email не должно быть пустым</small
                >
                <small
                        v-else-if="$v.email.$dirty && !$v.email.email"
                        class="helper-text invalid"
                >Введите корректный Email</small>
            </div>
            <div class="input-field">
                <input
                        v-model.trim="password"
                        id="password"
                        type="password"
                        class="validate"
                        :class="{
            invalid:
              ($v.password.$dirty && !$v.password.required) ||
              ($v.password.$dirty && !$v.password.minLength)
          }"
                />
                <label for="password">Пароль</label>
                <small
                        v-if="$v.password.$dirty && !$v.password.required"
                        class="helper-text invalid"
                >Введите пароль</small
                >
                <small
                        v-else-if="$v.password.$dirty && !$v.password.minLength"
                        class="helper-text invalid"
                >
                    Пароль должен быть {{ getMinPasswordLength() }} символов. Сейчас он
                    {{ password.length }}
                </small>
            </div>
            <div class="input-field">
                <input
                        v-model.trim="name"
                        id="name"
                        type="text"
                        class="validate"
                        :class="{ invalid: ($v.name.$dirty && !$v.name.required)}"
                />
                <label for="name">Имя</label>
                <small
                        v-if="$v.name.$dirty && !$v.name.required"
                        class="helper-text invalid">
                    Введите имя
                </small>
            </div>
            <p>
                <label>
                    <input v-model="agree" type="checkbox"/>
                    <span>С правилами согласен</span>
                </label>
            </p>
        </div>
        <div class="card-action">
            <div>
                <button class="btn waves-effect waves-light auth-submit" type="submit">
                    Зарегистрироваться
                    <i class="material-icons right">send</i>
                </button>
            </div>

            <p class="center">
                Уже есть аккаунт?
                <router-link to="/login">Войти!</router-link>
            </p>
        </div>
    </form>
</template>

<script>
  import {required, email, minLength} from "vuelidate/lib/validators";

  export default {
    data: () => ({
      email: "",
      password: "",
      name: "",
      agree: false
    }),
    validations: {
      email: {email, required},
      password: {required, minLength: minLength(6)},
      name: {required},
      agree: {checked: v => v}
    },
    methods: {
      submitForm() {
        if (this.$v.$invalid) {
          this.$v.$touch();
          return;
        }

        const formData = {
          email: this.email,
          password: this.password,
          name: this.name,
          agree: this.agree
        };

        this.$router.push("/");
      },
      getMinPasswordLength() {
        return this.$v.password.$params.minLength.min;
      }
    }
  };
</script>