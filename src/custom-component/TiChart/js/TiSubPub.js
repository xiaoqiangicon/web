import TiEvent from './TiEvent';
/**
 * 回调机制
 */
var TiSubPub = {
	idUsed:0,
	idMap:{},
    subscribe: function(ev, callback) 
    {
    	this.idUsed+=1;
    	var id=this.idUsed;
        // 创建 _callbacks 对象，除非它已经存在了
        var calls = this._callbacks || (this._callbacks = {});
        // 针对给定的事件key 创建一个数组，除非这个数组已经存在
        // 然后将回调函数与id追加到这个数组中
        (this._callbacks[ev] || (this._callbacks[ev] = [])).push([id,callback]);
        this.idMap[id]=ev;
        
        //返回事件订阅id,可通过id取消订阅
        return id;
    },
    unsubscribe:function(id)
    {
    	var evType;
    	
    	//若查无此id,说明已经被取消订阅
    	if (!(evType=this.idMap[id])) return id;
    	
    	//清除id到事件名称的映射
    	
		//by start HGT:删除映射ID  l00071 20190428
		//this.idMap.splice(id,1);
		delete this.idMap[id];
		//end
		
    	var i,l;
		var length = this._callbacks[evType].length;
        for (i = 0,l = length; i < l; i++)
        {
        	//查找对应的回调
        	if (this._callbacks[evType][i][0]==id)
        	{
        		//清理回调
				//by start HGT:删除映射ID  l00071 20190428
        		this._callbacks[evType].splice(i,1);
				//delete this._callbacks[evType][i];
				//end
        		return id;
        	}
        }
    },
    publish: function() 
    {
        // 将arguments 对象转换为真正的数组
        var args = Array.prototype.slice.call(arguments, 0);
        if (!(args[1] instanceof Array)) args[1]=[args[1]];
        args[1].splice(0,0,args[0]);
        args=args[1];
        // 拿出第1 个参数，即事件名称
        var evType=args[0];
        
        //给事件盖时间戳
        var ev=new TiEvent(evType);
        args.splice(0,1,ev);
        // 如果不存在_callbacks 对象，则返回
        // 或者如果不包含给定事件对应的数组
        var list, calls, i, l;
        if (!(calls = this._callbacks)) return this;
        if (!(list = this._callbacks[evType])) return this;
        // 触发回调
        for (i = 0, l = list.length; i < l; i++) {
            var mesage = list[i];
            if( mesage && mesage[1]) {
                mesage[1].apply(this, args);
            }
            
		}
        return this;
    }
};
export default TiSubPub;
