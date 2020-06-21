<template>
  <div>
    <mdb-navbar color="elegant">
      <span class="navbar-text white-text">
        Space War 
      </span>
    </mdb-navbar>
  </div>
</template>

<script>
import { mdbNavbar } from "mdbvue";
export default {
  name: "NavbarPage",
  components: {
    mdbNavbar,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
