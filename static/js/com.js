var Com = (function Module(){
  var goback = function(){
    console.log(123)
    window.history.back(-1)
  }
  var getParams = function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
  }
  // 网络请求
  var ajax = function(url, params, callback0, callback1){
    console.log(url, params)
    axios.get(url, {
      params: params
    })
    .then(function(rs) {
        console.log(rs)
        // code为0处理一般成功情况
        if(rs.data.code === 0){
          callback0(rs.data.data)
        } else if(callback1){
          callback1(rs.data.data)  
        }
    })
    .catch(function(error){
      console.log('接口出错：' + url);
      console.log(error);
    })
  }
  var module = {
    goback: goback,
    getParams: getParams,
    ajax: ajax
  }
  return module
}())