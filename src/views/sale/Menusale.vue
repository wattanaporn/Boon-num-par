<template>
  <v-container class="menu-sale">
    <div class="menu-core-sale">
      <div class="menu-title-sale">
        เลือกเมนู
      </div>
      <div class="menu-box-sale">
        <div class="menu-box-size-sale">
          <v-hover v-slot="{ hover }">
            <v-card
              :elevation="hover ? 16 : 2"
              :class="{ 'on-hover': hover }"
              class="mx-auto"
              height="150"
              max-width="215"
              @click="ChangePageHome"
            >
              <div class="menu-img">
                <img src="@/assets/sale-info.svg" />
              </div>
              <v-card-text
                class=" text-center black--text"
                @click="ChangePageHome"
              >
                <h3>ข้อมูลการขาย</h3>
              </v-card-text>
            </v-card>
          </v-hover>
        </div>

        <div class="menu-box-size-sale">
          <v-hover v-slot="{ hover }">
            <v-card
              :elevation="hover ? 16 : 2"
              :class="{ 'on-hover': hover }"
              class="mx-auto"
              height="150"
              max-width="215"
              @click="ChangePageEquipment"
            >
              <div class="menu-img">
                <img src="@/assets/Customizethesystem.svg" />
              </div>
              <v-card-text
                class=" text-center black--text"
                @click="ChangePageEquipment"
              >
                <h3>ปรับแต่งระบบ</h3>
              </v-card-text>
            </v-card>
          </v-hover>
        </div>

        <div class="menu-box-size-sale">
          <v-hover v-slot="{ hover }">
            <v-card
              :elevation="hover ? 16 : 2"
              :class="{ 'on-hover': hover }"
              class="mx-auto"
              height="150"
              max-width="215"
              @click="PageBack"
            >
              <div class="menu-img">
                <!-- <img src="@/assets/Customizethesystem.svg" /> -->
              </div>
              <v-card-text
                class=" text-center black--text"
                @click="PageBack"
              >
                <h3>ย้อนกลับ</h3>
              </v-card-text>
            </v-card>
          </v-hover>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
import api from "@/services/api";

export default {
  name: "Menusale",
  mounted() {
    if (api.isLoggedIn()) {
      this.$router.push({ name: "menusale" }).catch(() => {});
    }

    this.$store.dispatch({
      type: "inputRoutepath",
      RT: this.$route.path,
    });
  },
  data() {
    return {};
  },

  methods: {
    ChangePageHome() {
      this.$router.push({ name: "salehome" });
      window.location.reload();
    },
    ChangePageEquipment() {
      this.$router.push({ name: "saleEquipment" });
      window.location.reload();
    },
    PageBack() {
      this.$router.push({ name: "HomeMainAdmin" });
      window.location.reload();
    },
  },
};
</script>
<style lang="sass" scoped>
.v-card.on-hover.theme--dark
  background-color: rgba(#FFF, 0.8)
  >.v-card__text
    color: #000
</style>

<style scoped>
.pointer {
  cursor: pointer;
}
</style>
