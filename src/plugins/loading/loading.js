import Vue from 'Vue'
import loadComponent from '@/plugins/loading/loading.vue'
import maskComponent from '@/components/mask.vue'
import {
  modeList
} from '@/plugins/loading/const.js'

let Notification = function (vue, globalOption = {}) {
  let NotificationConstructor = vue.extend(loadComponent);
  let maskLayer = vue.extend(maskComponent);
  let self = {};
  const defOptions = {
    shade: true,
    mode: "line-spin-fade-loader"
  };
  self.instances = {};
  self.instancesVue = [];
  let seed = 0;

  self.open = function (options) {
    options = options || {};
    options = mergeJson(options, defOptions);
    if (options.shade == undefined) {
      options.shade = true;
    }
    let id = `notification_${new Date().getTime()}_${  seed++}`;
    options.id = id;
    options.layer = self;
    
    if (options.style == undefined) {
      options.style={name:"ball-scale-ripple",count:1,color:"#000"};
    }
    if(typeof options.style =="string")
    {
      if(modeList!=null||modeList!=undefined)
      {
        let newJson={name:options.style};
        let mode=queryJson(modeList,options.style);
        options.style=mergeJson(newJson,mode);
      }
    }
    if(typeof options.style =="object")
    {
      let mode=queryJson(modeList,options.style.name);
      options.style=mergeJson(options.style,mode);
    }

    let instance = new NotificationConstructor({
      data: options
    });
    instance.id = id;
    instance.vm = instance.$mount();
    self.instances[id] = {
      inst: instance
    };
    document.body.appendChild(instance.vm.$el);
    self.instancesVue[id] = {
      'mask': '',
      'main': instance.vm,
      'iframe': '',
    }
    if (options.shade) { //是否显示遮罩
      let maskInstance = new maskLayer({
        data: options
      });
      maskInstance.vm = maskInstance.$mount();
      document.body.appendChild(maskInstance.vm.$el);
      self.instancesVue[id].mask = maskInstance.vm;
    }
    return id;
    console.log(id);
  }
  return self;
}

/**
 * 合并json
 * @method mergeJson
 * @param  {[type]}  optons [description]
 * @param  {[type]}  def    [description]
 * @return {[type]}         [description]
 */
function mergeJson(options, def) {
  for (let key in def) {
    if (options[key] == undefined) {
      options[key] = def[key];
    }
  }
  return options;
}

/**
 * 查找json
 * @method queryJson
 * @param  {[type]}  data [description]
 * @param  {[type]}  key  [description]
 * @return {[type]}       [description]
 */
function queryJson(data,key){
  for(let item in data)
  {
    if(item==key){
      return data[item];
    }
  }
  return undefined;
}

export default {
  install(Vue, options) {
    Vue.prototype.$myName = '劳卜';
    Vue.prototype.$layer = Notification(Vue, {});
    Vue.prototype.showMyName = value => {
      console.log(data.a);
    };
  },
}
