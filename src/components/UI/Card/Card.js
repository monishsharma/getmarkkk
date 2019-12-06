
export default {
  data() {
    return {
      image1 : ''
    };
  },
  created() {
    this.getPost()
},
 computed: {
     call(){
         return this.$store.state.posts
     }
 },
  methods: {
    getPost() {
      this.$store.dispatch("GET_LEDGER");
    }

  },
 
 
};
