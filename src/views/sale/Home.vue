<template>
  <v-container style="background:#E5E5E5;color:white;height:100%">
    <v-col>
      <v-row>
        <v-card flat color="#E5E5E5">
          <div class="header-title">
            แสดงผล
          </div>
        </v-card>
      </v-row>
    </v-col>
    <v-col>
      <v-row> </v-row>
    </v-col>
    <!-- Summary section -->
    <v-row justify="center">
      <v-col lg="3" md="6" sm="12" cols="12">
        <StockCard :title="confirm" subtitle="คอนเฟิร์ม" />
      </v-col>

      <v-col lg="3" md="6" sm="12" cols="12">
        <StockCard :title="unconfirm" subtitle="ไม่คอนเฟิร์ม" />
      </v-col>

      <v-col lg="3" md="6" sm="12" cols="12">
        <StockCard :title="cancel" subtitle="ยกเลิก" />
      </v-col>

      <v-col lg="3" md="6" sm="12" cols="12">
        <StockCard :title="total" subtitle="ทั้งหมด" />
      </v-col>
    </v-row>
    <v-row>
      <v-col lg="6" md="6" sm="12" cols="12"> </v-col>
    </v-row>
    <v-row>
      <v-col lg="6" md="6" sm="12" cols="12">
        <!-- สถานะใบเสนอราคาล่าสุด -->
        <v-card>
          <v-data-table
            :headers="headers_latest_quotation"
            :items="Latest_quotation"
            :items-per-page="10"
            hide-default-footer
            mobile-breakpoint="0"
            class="elevation-1"
          >
            <!-- table top section -->
            <template v-slot:top>
              <v-toolbar flat>
                <v-toolbar-title class="header-table-title"
                  >สถานะใบเสนอราคาล่าสุด</v-toolbar-title
                >
              </v-toolbar>
            </template>
            <template v-slot:item="{ item }">
              <tr>
                <td>{{ item.quotation_code }}</td>
                <td>{{ item.customer_tax_invoices }}</td>
                <td>
                  <div
                    v-if="item.quotation_status == 'คอนเฟิร์ม'"
                    class="success--text "
                  >
                    {{ item.quotation_status }}
                  </div>
                  <div
                    v-else-if="item.quotation_status == 'ไม่คอนเฟิร์ม'"
                    class="warning--text "
                  >
                    {{ item.quotation_status }}
                  </div>
                  <div v-else class="error--text ">
                    {{ item.quotation_status }}
                  </div>
                </td>
              </tr>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
      <v-col lg="6" md="6" sm="12" cols="12">
        <!-- รายชื่อลูกค้าล่าสุด -->
        <v-card>
          <v-data-table
            :headers="headers_latest_customer_list"
            :items="Latest_customer_list"
            :items-per-page="10"
            hide-default-footer
            mobile-breakpoint="0"
            class="elevation-1"
          >
            <template v-slot:top>
              <v-toolbar flat>
                <v-toolbar-title class="header-table-title"
                  >รายชื่อลูกค้าล่าสุด</v-toolbar-title
                >
              </v-toolbar>
            </template>
            <template v-slot:item="{ item }">
              <tr>
                <td>{{ item.customer_code }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.created_at_date }}</td>
              </tr>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import StockCard from "@/components/cards/StockCard";
import api from "@/services/api";

export default {
  name: "Home",
  components: {
    StockCard
  },

  mounted() {
    this.loadDatas();

    this.$store.dispatch({
      type: "inputRoutepath",
      RT: this.$route.path
    });
  },

  data: () => ({
    confirm: "",
    unconfirm: "",
    cancel: "",
    total: "",

    Latest_quotation: [],
    headers_latest_quotation: [
      {
        text: "เลขที่ใบเสนอราคา",
        value: "quotation_code",
        sortable: false,
        align: "start"
      },
      {
        text: "ชื่อลูกค้า",
        value: "customer_tax_invoices",
        sortable: false,
        align: "start"
      },
      {
        text: "สถานะ",
        value: "quotation_status",
        sortable: false,
        align: "start"
      }
    ],

    Latest_customer_list: [],
    headers_latest_customer_list: [
      {
        text: "รหัสลูกค้า",
        value: "customer_code",
        sortable: false,
        align: "start"
      },
      { text: "ชื่อลูกค้า", value: "name", sortable: false, align: "start" },
      {
        text: "วันที่สร้าง",
        value: "created_at_date",
        sortable: false,
        align: "start"
      }
    ]
  }),
  methods: {
    async loadDatas() {
      let result = await api.getDashboard();
      this.total = result.data.result.header[0].total;
      this.confirm = result.data.result.header[1].confirm;
      this.unconfirm = result.data.result.header[2].unconfirm;
      this.cancel = result.data.result.header[3].cancel;
      this.Latest_quotation = result.data.result.latestquotation;
      this.Latest_customer_list = result.data.result.latestcustomer;
    }
  }
};
</script>

<style scoped></style>
