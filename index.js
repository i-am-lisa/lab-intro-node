class SortedList {
  
    constructor() {
    this.items = [];
    this.length = this.items.length
  
    }


  add(item) {
    
    this.items.push(item)
    this.length++
    this.items.sort((a,b) => {
      return (a - b)
    })
    return this.items
  }

  get(pos) {
    
      if(this.items[pos] !== undefined) {
        return (this.items[pos])
      }
      else {
        throw new Error('OutOfBounds')
      }
  }

  max() {
    let max = 0;

    if (this.length == 0){
      throw new Error('OutOfBounds')
    }

    for (let i = 0; i < this.items.length; i++) {
       if(this.items[i] > max){
         max = this.items[i]
       }
    }
    return max;


  }

  min() {
    let min = Infinity;

    if (this.length == 0){
      throw new Error('OutOfBounds')
    }

    for (let i = 0; i < this.items.length; i++) {
       if(this.items[i] < min){
         min = this.items[i]
       }
    }
    return min;

  }

  sum() {
    if (this.length !== 0) {
      let sum = 0

      for (let i = 0; i < this.items.length; i++) {
        sum += this.items[i]
      }
   return sum;
    }
    else{
      return 0
    } 
  }

  avg() {
    if (this.length !== 0) {
      let average = 0

      for (let i = 0; i < this.items.length; i++) {
        average = this.sum() / this.items.length
      }
      return average;
    }
    else{
      throw new Error('EmptySortedList');
    } 

  }
}

module.exports = SortedList;
