Page({
  data: {
    name: "World",
    age: 18,
    students: [
      { id: "001", name: "张三", age: 17 },
      { id: "002", name: "李四", age: 21 },
      { id: "003", name: "王五", age: 16 }
    ],
    counter: 0    
  },
  handleBtnClickPlus(){
   this.setData({
     counter:this.data.counter + 1
   })
  },
   handleBtnClickMinus(){
    this.setData({
      counter:this.data.counter - 1
    })
  }
 
})