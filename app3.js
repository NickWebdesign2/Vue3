//console.log('hello, vue')

const app = Vue.createApp({
  data(){
    return {
      showBooks: true,
      title: 'The Final Empire',
      author: "Brandon",
      age: 45
      x=0;
      y=0;
    }
  },
  return {
    url:"http://www.thenetninja.co.uk",
    showBooks: true,
    books:[

    ]
  }
  methods: {
    toggleShowBooks(){
      this.showBooks = !this.showBooks
    },
toggleFav(book){
  book.isFav = !book.isFav

}
    },
    computed: {
      filteredBooks(){
        return this.books.filter((book) => book.isFav)
      }
    }
  },
})

app.mount('app');
