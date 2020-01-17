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
  // 网络请求get
  var get = function(url, params, callback0, callback1){
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
          callback1(rs.data)  
        }
    })
    .catch(function(error){
      console.log('接口出错：' + url);
      console.log(error);
    })
  }
   // 网络请求post
  var post = function(url, params, callback0, callback1){
    console.log(url, params)
    axios.post(url, params)
    .then(function(rs) {
        console.log(rs)
        // code为0处理一般成功情况
        if(rs.data.code === 0){
          var result = rs.data.data? rs.data.data : ''
          callback0(result)
        } else if(callback1){
          callback1(rs.data)  
        }
    })
    .catch(function(error){
      console.log('接口出错：' + url);
      console.log(error);
    })
  }

  var dialog = function(text){
    
    if(document.querySelector('.com-mask')){
      document.querySelector('.com-mask').style.display= 'block'
      }else {
        var loadingstr = '<div class="mask com-mask"><div class="alert"><div class="dialog"><div class="hd"><strong class="title">提示</strong></div><div class="bd">' + text + '</div><div class="ft"><div class="sure" onclick="Com._dialogClose()">确定</div></div></div></div></div>'
        document.body.insertAdjacentHTML('beforeend', loadingstr)
      }
        
        // {return document.querySelector('.com-mask')}

        
  }

  var _dialogClose=function(){
    document.querySelector('.com-mask').style.display= 'none'
  }

  var module = {
    goback: goback,
    getParams: getParams,
    get: get,
    post: post,
    dialog: dialog,
    _dialogClose: _dialogClose
  }
  return module
}())