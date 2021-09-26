import HotRecharge from "../service/hotrecharge";


function fun(){
  console.log("Start");
  const hotrecharge = new HotRecharge({email: "0774799307", password: '7790'},);

  hotrecharge.checkZesaMeter("1025325261").then(function(data){
    console.log(data);
  });
}
fun();
// hotrecharge.pinLessRecharge(10, '0713700601').then(function (data) {
//   console.log(data);
// });
