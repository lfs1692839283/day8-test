define(['mui'],(mui)=>{
	console.log('success');
	mui.ajax('/list',{
		data:{
			
		},
		dataType:'json',//服务器返回json格式数据
		type:'post',//HTTP请求类型
		timeout:10000,//超时时间设置为10秒；
		success:function(data){
			console.log(data);
		},
		error:function(xhr,type,errorThrown){
			
		}
	});
	
	
});