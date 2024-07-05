<template>
  <q-page class="flex flex-center" style="background-color: #f5f5f5">
    <q-card
      class="q-pa-md"
      style="
        width: 450px;
        border-radius: 10px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        background-color: white;
      "
    >
      <div class="q-mb-md" style="text-align: left">
        <h2
          style="
            font-family: Arial, sans-serif;
            color: #666;
            margin: 10px 0;
            font-size: 20px;
            font-weight: bold;
          "
        >
          Selecione sua conta
        </h2>
        <hr class="divider header-divider" />
      </div>
      <q-form @submit="onSubmit">
        <q-card-section>
          <q-list class="q-mb-md" style="padding: 0">
            <div
              v-for="account in accounts"
              :key="account.id"
              class="q-pb-md account-container"
              :style="{
                marginBottom:
                  accounts.indexOf(account) < accounts.length - 1
                    ? '20px'
                    : '0',
              }"
            >
              <q-card class="account-card">
                <q-card-section>
                  <div class="account-header">
                    {{ account.agency }} | {{ account.number }}
                  </div>
                  <q-item
                    v-for="(type, index) in account.types"
                    :key="type.name"
                    clickable
                    v-ripple
                    class="account-item"
                  >
                    <q-item-section>
                      <q-radio
                        v-model="selectedAccount"
                        :val="`${account.id}-${type.name}`"
                        @click="selectAccount(account, type)"
                        class="q-my-sm account-radio"
                      >
                        <div class="account-info">
                          <div class="account-type">{{ type.name }}</div>
                          <div class="account-balance">
                            Saldo em conta: {{ type.balance }}
                          </div>
                        </div>
                      </q-radio>
                      <hr
                        v-if="index < account.types.length - 1"
                        class="divider compact-divider"
                      />
                    </q-item-section>
                  </q-item>
                </q-card-section>
              </q-card>
            </div>
          </q-list>
        </q-card-section>
        <q-card-actions align="center" class="button-group">
          <q-btn
            type="submit"
            label="Continuar"
            color="primary"
            class="btn-continue"
          />
          <q-btn
            label="Cancelar"
            color="primary"
            flat
            class="btn-cancel"
            @click="cancel"
          />
        </q-card-actions>
      </q-form>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      selectedAccount: null,
      accounts: [
        {
          id: 1,
          agency: 'Ag 1234',
          number: 'CC 298474-4',
          types: [
            { name: 'Conta Corrente', balance: 'R$ 1200,00' },
            { name: 'Conta Poupança', balance: 'R$ 0,00' },
          ],
        },
        {
          id: 2,
          agency: 'Ag 4321',
          number: 'CC 123123-4',
          types: [{ name: 'Conta Corrente', balance: 'R$ 300,00' }],
        },
      ],
    };
  },
  methods: {
    selectAccount(account, type) {
      this.selectedAccount = `${account.id}-${type.name}`;
    },
    onSubmit() {
      if (this.selectedAccount !== null) {
        console.log('Conta selecionada:', this.selectedAccount);
        this.$router.push('/checkout-1');
      } else {
        console.error('Nenhuma conta selecionada');
      }
    },
    cancel() {
      this.selectedAccount = null;
      console.log('Seleção cancelada');
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
.account-container {
  padding-bottom: 0;
  margin-bottom: 20px;
}
.account-card {
  border: 1px solid #e0e0e0;
  box-shadow: none;
  margin-bottom: 5px;
}
.account-header {
  font-weight: bold;
  padding-bottom: 5px;
}
.account-item {
  padding-left: 10px;
  margin-bottom: 0;
}
.account-radio .q-radio__inner {
  margin-top: 0;
  margin-bottom: 0;
}
.account-info {
  display: flex;
  flex-direction: column;
}
.account-type {
  font-weight: bold;
}
.account-balance {
  color: #666;
}
.divider {
  border: none;
  height: 1px;
  background-color: #e0e0e0;
  margin: 10px 0;
}
.compact-divider {
  margin: 5px 0;
}
.header-divider {
  margin-top: 10px;
}
.button-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.btn-continue {
  background-color: #f0a500;
  color: black !important;
  border-radius: 5px;
  width: 100%;
  font-weight: bold;
  text-transform: none;
}
.btn-cancel {
  color: black;
  width: 100%;
  font-weight: bold;
  text-transform: none;
  border: 1px solid #f0a500;
}
</style>
