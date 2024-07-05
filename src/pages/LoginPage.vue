<template>
  <q-page class="flex flex-center" style="background-color: #f5f5f5">
    <q-card
      class="q-pa-md"
      style="
        width: 400px;
        border-radius: 10px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        background-color: white;
      "
    >
      <div class="text-center">
        <q-img
          src="~assets/my_bank.png"
          style="width: 70px; height: 70px"
          contain
        ></q-img>
        <h2
          style="
            font-family: Arial, sans-serif;
            color: #666;
            margin: 10px 0;
            font-size: 20px;
            font-weight: bold;
          "
        >
          MyBank
        </h2>
      </div>
      <q-form @submit="onSubmit">
        <div style="margin-bottom: 10px">
          <label
            for="agency"
            style="font-size: 14px; color: #666; font-weight: bold"
            >AGÊNCIA:</label
          >
          <q-input
            id="agency"
            v-model="agency"
            placeholder="0000"
            outlined
            style="margin-top: 5px"
          />
        </div>
        <div style="margin-bottom: 10px">
          <label
            for="account"
            style="font-size: 14px; color: #666; font-weight: bold"
            >CONTA:</label
          >
          <q-input
            id="account"
            v-model="account"
            placeholder="00000-00"
            outlined
            style="margin-top: 5px"
          />
        </div>
        <div style="margin-bottom: 10px">
          <label
            for="password"
            style="font-size: 14px; color: #666; font-weight: bold"
            >SENHA:</label
          >
          <q-input
            id="password"
            v-model="password"
            type="password"
            placeholder="Digite a senha"
            outlined
            style="margin-top: 5px"
          />
        </div>
        <div class="text-left" style="margin-bottom: 10px; margin-top: -10px">
          <q-btn
            flat
            label="Esqueceu sua senha?"
            color="primary"
            style="font-size: 12px; padding: 0; text-transform: none"
          />
        </div>
        <div class="text-center">
          <q-btn
            type="submit"
            label="Entrar"
            color="primary"
            style="
              background-color: #f0a500;
              color: black !important;
              border-radius: 5px;
              width: 100%;
              font-weight: bold;
              text-transform: none;
            "
          />
        </div>
      </q-form>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      agency: '',
      account: '',
      password: '',
    };
  },
  methods: {
    onSubmit() {
      console.log(this.agency, this.account, this.password);

      this.$router.push('/select-account');
    },
  },
};
</script>

<style scoped>
.q-page {
  background-color: #f5f5f5;
}
.q-card {
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
</style>
