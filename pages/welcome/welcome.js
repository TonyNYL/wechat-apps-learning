Page({
  onTapJump:function(event){
    wx.redirectTo({
      url: '../post/post',
      success:function(){
        console.log("jump success")
      },
      fail:function(){
        console.log("fail success")
      },
      complete: function () {
        console.log("complete success")
      }
    });
  }
})