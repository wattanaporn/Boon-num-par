<template>
  <v-container style="background:#E5E5E5;color:white;height:100%">
    <v-col>
      <v-row>
        <v-card flat color="#E5E5E5">
          <div class="header-title">
            รายชื่อลูกค้าทั้งหมด
            <v-icon> keyboard_arrow_down</v-icon>
          </div>
        </v-card>
      </v-row>
    </v-col>
    <v-col>
      <v-row> </v-row>
    </v-col>
    <v-row>
      <v-col>
        <ModalCreateCustomers />
      </v-col>
    </v-row>
    <v-col>
      <v-row> </v-row>
    </v-col>
    <v-row>
      <v-col lg="12" md="12" sm="12" cols="12">
        <!-- รายชื่อลูกค้าทั้งหมด -->
        <v-card>
          <v-data-table
            :search="search"
            :headers="headers_table_customer"
            :items="table_customer"
            :items-per-page="10"
            mobile-breakpoint="0"
            class="elevation-1"
          >
            <!-- table top section -->
            <template v-slot:top>
              <v-toolbar flat>
                <v-toolbar-title
                  ><span class="header-table-title"
                    >รายชื่อลูกค้า</span
                  ></v-toolbar-title
                >
                <v-toolbar-title
                  ><span class="order">{{ total }}</span></v-toolbar-title
                >
                <v-spacer></v-spacer>
                <v-divider class="mx-4" inset vertical></v-divider>
                <v-text-field
                  v-model="search"
                  prepend-inner-icon="mdi-magnify"
                  label="ค้นหาชื่อลูกค้าบุคคล/บริษัท"
                  single-line
                  hide-details
                ></v-text-field>

                <!-- ปุ่มเรียง
                  <div>
                  <v-btn icon>
                    <svg
                      width="14"
                      height="12"
                      viewBox="0 0 14 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.128568 2.26839L2.31563 0.125478C2.48647 -0.0418526 2.7636 -0.0417991 2.93434 0.125478L5.12132 2.26839C5.39667 2.53812 5.20059 3.00001 4.81195 3.00001H3.5V11.5714C3.5 11.8081 3.30414 12 3.0625 12H2.1875C1.94586 12 1.75 11.8081 1.75 11.5714V3.00001H0.437935C0.0485329 3.00001 -0.146209 2.53758 0.128568 2.26839ZM6.5625 1.7143H13.5625C13.8041 1.7143 14 1.52243 14 1.28573V0.428584C14 0.191879 13.8041 1.34454e-05 13.5625 1.34454e-05H6.5625C6.32086 1.34454e-05 6.125 0.191879 6.125 0.428584V1.28573C6.125 1.52243 6.32086 1.7143 6.5625 1.7143ZM6.125 4.71429V3.85715C6.125 3.62045 6.32086 3.42858 6.5625 3.42858H11.8125C12.0541 3.42858 12.25 3.62045 12.25 3.85715V4.71429C12.25 4.951 12.0541 5.14287 11.8125 5.14287H6.5625C6.32086 5.14287 6.125 4.951 6.125 4.71429ZM6.125 11.5714V10.7143C6.125 10.4776 6.32086 10.2857 6.5625 10.2857H8.3125C8.55414 10.2857 8.75 10.4776 8.75 10.7143V11.5714C8.75 11.8081 8.55414 12 8.3125 12H6.5625C6.32086 12 6.125 11.8081 6.125 11.5714ZM6.125 8.14286V7.28572C6.125 7.04901 6.32086 6.85715 6.5625 6.85715H10.0625C10.3041 6.85715 10.5 7.04901 10.5 7.28572V8.14286C10.5 8.37957 10.3041 8.57143 10.0625 8.57143H6.5625C6.32086 8.57143 6.125 8.37957 6.125 8.14286Z"
                        fill="#C5C7CD"
                      />
                    </svg>
                  </v-btn>
                  Sort
                </div>

                <div>
                  <v-btn icon>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.4369 0H0.563154C0.0635131 0 -0.188604 0.606234 0.165419 0.960258L4.5 5.29549V10.125C4.5 10.3085 4.58955 10.4805 4.73993 10.5858L6.61493 11.8979C6.98484 12.1568 7.5 11.8944 7.5 11.437V5.29549L11.8347 0.960258C12.188 0.606937 11.9376 0 11.4369 0Z"
                        fill="#C5C7CD"
                      />
                    </svg>
                  </v-btn>
                  Filter
                </div> -->
              </v-toolbar>
            </template>
            <template v-slot:item="{ item }">
              <tr>
                <td>{{ item.customer_code }}</td>
                <td>
                  {{ item.name }}<br />
                  <span class="updateintable-font-color"
                    >update {{ item.update }}</span
                  >
                </td>
                <td>
                  {{ item.customer_tax_invoices }}
                  <br />
                  <span class="updateintable-font-color"
                    >update {{ item.update }}</span
                  >
                </td>
                <td>
                  {{ item.customer_type }}
                  <br />
                  <span class="updateintable-font-color"
                    >update {{ item.update }}</span
                  >
                </td>
                <td>
                  {{ item.created_at_date }} <br />
                  <span class="updateintable-font-color">
                    {{ item.created_at_datetime }}
                  </span>
                </td>
                <td>
                  <v-row>
                    <v-btn
                      @click="MonitorCustomer(item)"
                      fab
                      icon
                      outlined
                      small
                    >
                      <v-icon>visibility</v-icon>
                    </v-btn>
                    <v-btn @click="EditCustomer(item)" fab icon outlined small>
                      <v-icon>edit</v-icon>
                    </v-btn>
                    <v-btn
                      @click="DeleteCustomer(item)"
                      fab
                      icon
                      outlined
                      small
                    >
                      <v-icon>delete</v-icon>
                    </v-btn>
                  </v-row>
                </td>
                <td>
                  <!-- <v-btn icon>
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn> -->
                </td>
              </tr>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ModalCreateCustomers from "@/components/dialog/ModalCreateCustomers.vue";
import api from "@/services/api";
export default {
  name: "Customer",
  components: {
    ModalCreateCustomers
  },
  mounted() {
    this.loadCustomers();
    this.$store.dispatch({
      type: "inputRoutepath",
      RT: this.$route.path
    });
  },

  data: () => ({
    search: "",
    total: "",
    table_customer: [],
    headers_table_customer: [
      {
        text: "รหัสลูกค้า",
        value: "customer_code",
        sortable: true,
        align: "start",
        color: "black"
      },
      { text: "ชื่อลูกค้า", value: "name", sortable: false, align: "start" },
      {
        text: "ชื่อออกใบกำกับภาษี",
        value: "customer_tax_invoices",
        sortable: false,
        align: "start"
      },
      {
        text: "ประเภทลูกค้า",
        value: "customer_type",
        sortable: false,
        align: "start"
      },
      {
        text: "วันเวลาที่สร้าง",
        value: "created_at_date",
        sortable: true,
        align: "start"
      },
      { text: "", value: "", sortable: false, align: "start" },
      { text: "", value: "", sortable: false, align: "start" }
    ]
  }),

  methods: {
    async loadCustomers() {
      let result = await api.getListallcustomers();
      this.table_customer = result.data.result;
      this.total = result.data.total;
    },

    async MonitorCustomer(item) {
      await this.$store.dispatch({
        type: "doEditBNPID",
        BNP_ID: item.customer_code
      });
      await this.$router.push({ name: "saleMonitorPersonltype" });
    },

    async EditCustomer(item) {
      await this.$store.dispatch({
        type: "doEditBNPID",
        BNP_ID: item.customer_code
      });
      await this.$router.push({ name: "saleEditPersoneltype" });
    },

    async DeleteCustomer(item) {
      this.$swal
        .fire({
          title: `ต้องการลบลูกค้ารายนี้ใช่หรือไม่ ?`,
          showDenyButton: true,
          confirmButtonText: `ยืนยัน`,
          denyButtonText: `ยกเลิก`
        })
        .then(async result => {
          if (result.isConfirmed) {
            let delCustomer = { customer_code: item.customer_code };
            let resultdel = await api.delCustomer(delCustomer);
            if (resultdel.data.response == "OK") {
              this.$swal.fire("ยืนยันการลบเรียบร้อย", "", "success");
              this.loadCustomers();
            }
          } else if (result.isDenied) {
            this.$swal.fire("ยกเลิกการลบ", "", "error");
          }
        });
    }
  }
};
</script>

<style scoped></style>
