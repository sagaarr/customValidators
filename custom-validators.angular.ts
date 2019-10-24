
/*  FOR any one field is required  */
oneFiled(group:FormGroup) {
  let cost = group.get('cost').value;
  let  retail = group.get('retail').value;
  if(retail !== '' && cost !== ''){
    console.log("Condition hit")
  }
console.log(cost);
console.log(retail)
  if(retail == '' || retail == null ){
    console.log("MID LEVEL")
    if(cost == '' || cost == null ){
      console.log("cost & retail both empty")
      return {'error':true}
    }
  }else if(retail == 0.00){
    console.log("else if(retail == 0.00)");
    if(cost == 0.00) {
      console.log("if(cost == 0.00)")
      return {'error':true}
    }
  }
}

/*       Confirm Password         */
