<template>
  <div>
    <form @submit.prevent="AddTweet">
      <div
        class=" d-flex flex-column justify-content-center align-items-center mt-3"
      >
        <div class="col-md-4">
          <mdb-input
            placeholder="Username"
            class="mb-3 mt-0"
            required
            v-model="form.name"
          >
            <span class="input-group-text md-addon" slot="prepend">Name</span>
          </mdb-input>
        </div>
        <div class="col-md-4">
          <div class="md-form input-group">
            <div class="input-group-prepend">
              <span class="input-group-text md-addon">Tweet</span>
            </div>
            <textarea
              class="md-textarea form-control"
              aria-label="With textarea"
              required
              v-model="form.comment"
            ></textarea>
          </div>
        </div>
        <button type="submit" class="btn btn-elegant">Submit</button>
      </div>
    </form>
    <div class="" v-if="!isLoader">
      <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between" v-for="l in list" :key="l._id">
          <!-- <div class="md-v-line"></div> -->
          <i
            class="fas fa-user-tie mr-4  pr-3"
            style="border-right: 1px solid green"
          >
            {{ l.name }}</i
          >
          <span> {{ l.comment }} </span>
          <span class=""> {{ new Date(l.date).toLocaleString() }} </span>
        </li>
      </ul>
    </div>
    <div v-else>
      <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { getTweets, addTweet } from "../apis/apis";
import { mdbInput } from "mdbvue";
export default {
  components: {
    mdbInput,
  },
  data() {
    return {
      form: {},
      list: [],
      isLoader: true,
    };
  },
  methods: {
    async getTweetList() {
      try {
        const tweets = await axios.get(getTweets);
        // console.log(tweets);
        this.list = tweets.data;
        this.isLoader = false;
      } catch (error) {
        console.log(error);
        alert(error);
      }
    },
    async AddTweet() {
      try {
        this.isLoader = true;
        const { name, comment } = this.form;
        const add = await axios.post(addTweet, { name, comment });
        this.list.unshift(add.data);
        this.isLoader = false;
        console.log(add);
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getTweetList();
  },
};
</script>

<style></style>
