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
      <div style="text-align: left; margin-bottom: 0">
        <h2
          style="
            font-family: Arial, sans-serif;
            color: #666;
            margin: 5px 0;
            font-size: 16px;
            font-weight: bold;
          "
        >
          Checkout
        </h2>
        <hr class="divider header-divider" />
        <div class="info-box" style="margin-bottom: 0">
          <q-icon name="info" />
          Para que possamos concluir o pagamento, iremos lhe redirecionar para a
          instituição Finansystech
        </div>
      </div>
      <q-form @submit="onSubmit">
        <q-card-section class="section-spacing">
          <h3 class="section-title">Resumo da transação</h3>
          <q-card class="summary-card" flat bordered>
            <div class="transaction-summary">
              <div class="transaction-row">
                <span class="label" style="font-weight: normal"
                  >Data de Pagamento:</span
                >
                <span class="value">19/05/2024</span>
              </div>
              <hr class="divider" />
              <div class="transaction-row">
                <span class="label">Valor a pagar:</span>
              </div>
              <div class="transaction-row">
                <span
                  class="value large"
                  style="font-size: 24px; font-weight: bold"
                  >R$ 1.000,00</span
                >
              </div>
              <div class="transaction-row">
                <span class="label">Saldo em conta:</span>
                <span class="value">R$ 1.200,00</span>
              </div>
            </div>
          </q-card>
        </q-card-section>
        <q-card-section class="section-spacing">
          <h3 class="section-title">Dados do recebedor</h3>
          <q-card class="receiver-card" flat bordered>
            <div class="receiver-info">
              <div class="info-row">
                <span class="label">CPF:</span>
                <span class="value">***.567.410-**</span>
              </div>
              <div class="info-row">
                <span class="label">NOME:</span>
                <span class="value">Jonhatan Almeida da Cunha</span>
              </div>
              <div class="info-row">
                <span class="label">CHAVE PIX:</span>
                <span class="value">pixid@finansystech.com</span>
              </div>
            </div>
          </q-card>
        </q-card-section>
        <q-card-section class="section-spacing">
          <h3 class="section-title">Fonte de pagamento</h3>
          <q-card class="payment-source-card" flat bordered>
            <q-list class="q-py-sm">
              <q-item
                v-for="account in accounts"
                :key="account.value"
                clickable
                v-ripple
                class="account-item"
              >
                <q-item-section>
                  <q-radio
                    v-model="selectedAccount"
                    :val="account.value"
                    @click="selectAccount(account)"
                    class="account-radio"
                  >
                    {{ account.label }}
                  </q-radio>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card>
        </q-card-section>
        <q-card-section class="section-spacing">
          <h3 class="section-title">Forma de pagamento</h3>
          <q-card class="payment-method-card" flat bordered>
            <div class="payment-method-info">
              <span class="label">TIPO:</span>
              <span class="value">PIX</span>
            </div>
          </q-card>
        </q-card-section>
        <q-card-actions align="center" class="button-group">
          <q-btn
            type="submit"
            label="Concluir pagamento"
            color="primary"
            class="btn-confirm"
            style="color: black"
          />
          <div style="height: 5px"></div>

          <q-btn
            label="Cancelar"
            color="primary"
            flat
            class="btn-cancel"
            @click="cancel"
            style="color: black"
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
        { label: 'CONTA CORRENTE 12345-1', value: 'account1' },
        { label: 'CONTA POUPANÇA 12345-2', value: 'account2' },
      ],
      paymentMethods: [
        { label: 'PIX', value: 'pix' },
        { label: 'Boleto', value: 'boleto' },
        { label: 'Cartão de Crédito', value: 'credit' },
      ],
    };
  },
  methods: {
    onSubmit() {
      if (this.selectedAccount) {
        console.log(
          'Pagamento concluído:',
          this.selectedAccount,
          this.paymentMethods[0].value
        );
        this.$router.push('/checkout-2');
      } else {
        console.error('Selecione a conta e a forma de pagamento');
      }
    },
    cancel() {
      this.selectedAccount = null;
      console.log('Pagamento cancelado');
    },
    selectAccount(account) {
      this.selectedAccount = account.value;
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
.divider {
  border: none;
  height: 1px;
  background-color: #e0e0e0;
  margin: 3px 0;
}
.header-divider {
  margin-top: 5px;
  margin-bottom: 5px;
}
.transaction-summary,
.receiver-info,
.payment-method-info {
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 8px;
}
.transaction-row,
.info-row {
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
}
.section-title {
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 5px;
  margin-top: 0px;
}
.section-spacing {
  padding-top: 0px;
  margin-bottom: 0px;
}
.label {
  font-weight: bold;
  font-size: 14px;
}
.value {
  color: #666;
  font-size: 14px;
}
.value.large {
  font-size: 18px;
  font-weight: bold;
}
.info-box {
  display: flex;
  align-items: center;
  background-color: #e0f7fa;
  color: #006064;
  padding: 5px;
  border-radius: 5px;
  font-size: 14px;
  margin-bottom: 10px;
}
.info-box q-icon {
  margin-right: 5px;
}
.button-group {
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 10px;
}
.btn-confirm {
  background-color: #f0a500;
  color: black !important;
  border-radius: 5px;
  width: 100%;
  font-weight: bold;
  text-transform: none;
  font-size: 14px;
}
.btn-cancel {
  color: black !important;
  width: 100%;
  font-weight: bold;
  text-transform: none;
  border: 1px solid #f0a500;
  font-size: 14px;
}
.account-item {
  padding-left: 0;
  margin-bottom: 0;
}
.account-radio .q-radio__inner {
  margin-top: 0;
  margin-bottom: 0;
}
</style>
