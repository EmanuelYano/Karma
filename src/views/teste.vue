<template>
  <div>
    <v-container fluid grid-list-sm v-if="!editingNotAllowed">
      <v-layout justify-space-between row wrap>
        <v-flex v-for="(item, i) in informations" :key="i" :class="item.class">
          <v-list three-line light class="py-0 elevation-2">
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title class="font-weight-bold">{{item.title}}</v-list-tile-title>
                <v-list-tile-sub-title class="text--primary">{{item.subtitle}}</v-list-tile-sub-title>
                <v-list-tile-sub-title>{{item.value | currency}}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-flex>
      </v-layout>
      <v-layout justify-space-between row wrap>
        <v-flex xs12>
          <v-card class="mt-2 pt-2 elevation-3">
            <v-layout justify-space-between wrap px-3>
              <v-flex xs12 sm6>
                <v-radio-group label="Forma de Cálculo:" v-model="depreciation" row :readonly="budgetFinalized">
                  <v-radio label="Taxa de Depreciação (%)" value="true" class="ml-3"></v-radio>
                  <v-radio label="Vida Útil (mês)" value="false" class="ml-3"></v-radio>
                </v-radio-group>
              </v-flex>
              <v-flex xs12 sm6>
                <v-currency-field 
                  box
                  :readonly="budgetFinalized"
                  label="Percentual de Custos Indiretos + Lucro"
                  v-model="budget.inputsVariables[attachment].lucre"
                  v-bind="currency_config_percent">
                </v-currency-field>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout row wrap >
        <v-flex xs12 v-if="!budgetFinalized">
          <v-card v-if="show" class="mt-2 elevation-3">
            <v-layout justify-space-between wrap pa-3>
              <v-spacer />
              <v-icon @click="show = !show; input = {}">close</v-icon>
            </v-layout>
            <v-form v-model="validForm" ref="form" lazy-validation>
              <v-layout justify-space-between  wrap px-3 pt-4>
                <v-flex xs12 md4 py-0>
                  <v-autocomplete :items="filteredInputs" box :item-text="textDescription" v-model="input" label="Descrição / Especificação"
                    return-object :rules="inputRules"></v-autocomplete>
                </v-flex>
                <v-flex xs12 md2 py-0>
                  <v-text-field box v-model="input.unity" label="Unidade" title="Unidade" disabled :rules="inputRules"></v-text-field>
                </v-flex>
                <v-flex xs12 md2 py-0>
                  <v-text-field v-model="input.quantity" label="Quantidade" box type="number" :rules="inputRules"></v-text-field>
                </v-flex>
                <v-flex xs12 md2 py-0>
                  <v-text-field box v-model="input.lifetime" :label="labelDepreciation" type="number" :rules="inputRules"></v-text-field>
                </v-flex>
                <v-flex xs12 md2 py-0>
                  <v-currency-field 
                    box
                    label="Valor Unitário (R$)" 
                    v-bind="currency_config"
                    v-model="input.value"
                    :rules="inputRules">
                  </v-currency-field>
                </v-flex>
                <v-flex xs12 md2 offset-md10 py-0>
                  <v-btn color="success lighten-1"  large @click.stop.prevent="save();" block>Salvar</v-btn>
                </v-flex>
              </v-layout>
            </v-form>
          </v-card>
        </v-flex>
        <v-flex xs12 pt-4>
          <!-- TOOBAR MAIN -->
          <v-toolbar flat card color="grey lighten-3" class="elevation-1">
            <v-toolbar-title class="font-weight-light">Itens Selecionados</v-toolbar-title>
            <v-spacer />
            <v-text-field v-model="search" append-icon="search" label="Pesquisar" single-line hide-details></v-text-field>
            <v-spacer />
            <v-toolbar-items>
              <v-btn  slot="activator" color="info" round icon class="mb-2"
                @click="show = !show"
                v-if="!budgetFinalized">
                <v-icon>add</v-icon>
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <!-- TABELA -->
          <v-data-table :headers="headers" :search="search" rows-per-page-text="Registros por Página" :rows-per-page-items="[10, 30, 50, 100]"
            :items="selectedItems" class="elevation-1">
            <template slot="items" slot-scope="props">
              <td>{{ props.item.description }}</td>
              <td class="text-xs-center">{{ props.item.unity }}</td>
              <td class="text-xs-center">{{ props.item.quantity }}</td>
              <td class="text-xs-center">{{ props.item.value | currency }}</td>
              <td class="text-xs-center">{{ (props.item.value * props.item.quantity) | currency}}</td>
              <td class="text-xs-center">{{ props.item.lifetime }} {{depreciation == "true" ? " %" : " (meses)"}}</td>
              <td class="text-xs-center">{{ amountCalculate(props.item) | currency}}</td>
              <td class="text-xs-center" v-if="!budgetFinalized">
                <v-icon small class="mr-2" @click="editItem(props.item)">edit</v-icon>
                <v-icon small @click="openRemoveDialog(props.item)">delete</v-icon>
              </td>
              <td class="text-xs-center" v-else> - </td>
            </template>
            <template slot="pageText" slot-scope="props">
              {{ props.pageStart }} - {{ props.pageStop }} de {{ props.itemsLength }}
            </template>
            <template slot="no-data">
              <strong> {{footerDynamicText}} </strong>
            </template>
            <div slot="no-results" :value="true">
              <h3 class="text-xs-center">{{emptySearchText}} "{{ search }}".</h3>
            </div>
          </v-data-table>
        </v-flex>
      </v-layout>
    </v-container>
    <!-- TOTAIS -->
    
    <!-- Confirmação de remoção de itens -->
    <v-dialog v-model="removeDialog" persistent :overlay="true" max-width="500px" transition="dialog-transition">
      <v-toolbar class="elevation-1" card>
        <v-toolbar-title class="font-weight-light">
          {{removeDialogTitle}}
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn color="error" title="Cancelar" icon round flat @click.stop.prevent="removeDialog = false">
            <v-icon large>clear</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-card>
        <v-card-text>
          <p>Tem certeza que deseja excluir este item?</p>
        </v-card-text>
        <v-card-actions>
          <v-btn color="success lighten-1" class="mb-3" block outline round @click="deleteItem">Aceitar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-snackbar
      v-model="snackbar.visible"
      :color="snackbar.color"
      multi-line
      :timeout="snackbar.timeout"
      vertical
      right
      button
    >
      <strong>{{snackbar.title}}</strong>
      <v-btn
        dark
        flat
        @click="snackbar.visible = false"
      >
        Fechar
      </v-btn>
    </v-snackbar>
    <v-alert v-model="editingNotAllowed" color="warning" icon="priority_high" outline style="font-size: 18px !important" class="ma-5">
      <strong>A opção "Venda Variável" não está selecionada para "{{filter}}"!</strong> <br />Por isso não é possível fazer alterações nesta área.
    </v-alert>
  </div>
</template>

<script>
  import AnalyticalWorksheetService from "../../service/AnalyticalWorksheetService.js";
  import Currency from '../../utils/Currency'
  import Headers from '../../data/headers/AttachmentHeaders'
  import ModuleFiveService from '../../service/ModuleFiveService'
  import ProductService from "../../service/ProductService.js";
  import SheetDefaultData from '../../data/sheet/SheetDefaultData'
  import {mapState} from "vuex";

  export default {
    name: "attachmentVariable",
    data: () => ({
      currency_config: Currency.real,
      currency_config_percent: Currency.percent,
      // TIPO de CÁLCULO //
      depreciation: "false",
      removeDialog: false,
      removeDialogTitle: "Excluir Item",
      dialog: false,
      emptyRecordsText: "Nenhum registro encontrado",
      emptySearchText: "Nenhuma registro encontrado para",
      headers: [],
      index: -1,
      inputRules: [
        v => !!v || 'Campo obrigatório',
      ],
      isEditing: false,
      loading: false,
      loadingRecordsText: "Carregando registros...",
      search: "",
      show: false,
      selectedItems: [],
      snackbar: {
        visible: false,
        title: "",
        color: "",
        timeout: 6000
      },
      input: {},
      filteredInputs: [],
      validForm: true,
    }),
    props:{
      attachment: String,
      filter: String,
      inputsVariables: Object
    },
    computed: {
      amountFinal(){
        return this.amountMonthly + (this.amountMonthly * this.percents / 100)
      },
      amountMonthly() {
        let amount = ModuleFiveService.getAmountMonthly(this.selectedItems, this.depreciation)
              
        return amount
      },
      editingNotAllowed(){
        return this.inputsVariables && this.inputsVariables[this.attachment].has ? false : true
      },
      footerDynamicText() {
        let text = this.loading ? this.loadingRecordsText : this.emptyRecordsText;
        return text;
      },
      formTitle() {
        return this.isEditing ? "Editar Item" : "Novo Item";
      },
      informations(){
        return [
          {
            class: "xs12 md4",
            title: "Sub-Total",
            subtitle: "",
            value: this.subTotalOfAttachment
          },
          {
            class: "xs12 md4",
            title: "Total Mensal Estimado",
            subtitle: "",
            value: this.amountMonthly
          },
          {
            class: "xs12 md4",
            title: "Valor Final",
            subtitle: `Lucro + Tributação: ${this.percents} %`,
            value: this.amountFinal
          }
        ]
      },
      labelDepreciation(){
        if(this.depreciation=="false")
          return "Vida Útil (mês)"
        
        return "Taxa de Depreciação (%)"
      },
      percents(){
        if(!this.inputsVariables)
          return 0

        return this.inputsVariables[this.attachment].lucre + this.inputsVariables.tributes
      },
      subTotalOfAttachment() {
        return ModuleFiveService.getSubTotalOfAttachment(this.selectedItems)
      },
      ...mapState({budgetFinalized: state => state.budget.budgetFinalized}),
      ...mapState({budget: state => state.budget.budget}),
    },

    created() {
      this.depreciation = "false",
      this.initialize();
    },
    async beforeMount() {
      this.selectedItems = this.inputsVariables[this.attachment].items
      this.depreciation = this.inputsVariables[this.attachment].depreciation.toString()
      await this.getHeaders()
    },
    methods: {
      amountCalculate(item){
        return ModuleFiveService.amountCalculate(item, this.depreciation)
      },
      checkDuplicateRecord() {
        if (this.selectedItems.length > 0) {
          for (const inp of this.selectedItems) {
            if (inp._id == this.input._id) return false;
          }
        }
        return true;
      },
      async deleteItem() {
        if(this.budgetFinalized)
          return
        if (this.loading) return;
        try {
          this.loading = true;
          this.selectedItems.splice(this.selectedItems.indexOf(this.input), 1);
          this.showAlert("Item excluído com sucesso!!!", "success");
        } catch (error) {
          this.showAlert("Erro ao excluir este item!!!", "error");
          console.log(error);
        } finally {
          this.loading = false;
          this.removeDialog = false;
          this.initialize();
          this.$refs.form.resetValidation()
        }
      },
      async editItem(item) {
        if (this.loading) return;
        try {
          this.loading = true;
          this.isEditing = true;
          this.show = true
          this.index = this.selectedItems.indexOf(item);
          this.input = this.selectedItems[this.selectedItems.indexOf(item)];
          this.dialog = true;
        } catch (error) {
          console.log(error);
        } finally {
          this.loading = false;
        }
      },
      getHeaders() {
        this.headers = Headers.getHeaders();
      },
      async initialize() {
        this.loading = true;
        try {
          this.input = Object.assign({});
          this.snackbar = {visible: false, title: "", color: ""}
          this.filteredInputs = await ProductService.getByCategory({
            type: this.filter
          });
          this.isEditing = false
        } catch (error) {
          console.log(error);
        } finally {
          this.loading = false;
        }
      },
      openRemoveDialog(item) {
        this.input = item;
        this.removeDialog = true;
      },
      async save() {
        if(this.budgetFinalized)
          return 

        if (!this.$refs.form.validate()) return;
        if (this.loading) return;
        this.loading = true;
        let type = "success"
        let message = ""
        try {
          if (this.isEditing) {
            this.loading = true;
            this.selectedItems[this.index] = this.input;
            message = "Item alterado com sucesso";
          } else {
            if (this.checkDuplicateRecord()) {
              this.selectedItems.push(this.input);
              message = "Item salvo com sucesso";
            } else {
              message = "Item já adicionado";
              type = "warning"
            }
          }
          this.showAlert(message, type);
          this.loading = true;
        } catch (error) {
          this.showAlert("Erro ao salvar este item", "error");
          console.log(error);
        } finally {
          this.dialog = false;
          this.initialize();
          this.loading = false;
          this.input = {}
          this.$refs.form.resetValidation()
        }
      },
      async setBudgetInputsVariables() {
        let bud = this.$store.getters.getBudget
        if(bud.inputsVariables != this.inputsVariables){
          bud.inputsVariables = Object.assign({}, this.inputsVariables)
          await this.$store.commit("SET_BUDGET", bud);
        }
      }, // setBudgetInputsVariables() //
      showAlert(message, color) {
        this.snackbar.title = message;
        this.snackbar.color = color;
        this.snackbar.visible = true;
      }, //showAlert()
      textDescription: item => `${item.description} - ${item.stamp} - ${item.unity}`,
    },
    watch:{
      depreciation: {
        handler: function() {
          this.headers[5].text = this.depreciation == "true" ? "Taxa de Depreciação (%)" : "Vida Útil (mês)"
          this.inputsVariables[this.attachment].depreciation = this.depreciation
        },
        deep: true
      },
      inputsVariables: {
        handler: function() {
          this.setBudgetInputsVariables()
        },
        deep: true
      },
      selectedItems: {
        handler: function() {
          this.inputsVariables[this.attachment].items = this.selectedItems
        },
        deep: true
      }
    }
  };

</script>

<style>
</style>