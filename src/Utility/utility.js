import axios from 'axios';

var HKRole= {
    ajaxCall: function(args) {
		var timeout = 120000;
		var data = args.data || {};
		let method = args.method.toLowerCase();

		let URL;
		if(args.newUrl) {
			URL = args.newUrl;
		} else {
			URL = config.baseURL + args.url;
		}

		if(method === "get") {
			return axios.get(URL, {headers:header},{withCredentials:true}, {timeout: timeout}).then(res=>{
					return new Promise(function(resolve, reject) {
						resolve(res);
					});
				}).catch(err=>{
					//console.log(err);
					if(err.response.status === 401){
            		}
				})
		}

		if(method === "post") {
			return axios.post(URL, data,{withCredentials:true}, {timeout: timeout}).then(res=>{
					return new Promise(function(resolve, reject) {
						resolve(res);
					});
				}).catch(err=>{
					//console.log(err);
					if(err.response.status === 401){
					
            		}
				})
		}
    },
    loggedIn: function() {
		let _cookie = this.Cookies.get('authtoken');
		let _localValue = this.Cookies.get('assumeId') || localStorage.getItem('isUserLoggedIn');
		let userStatus = !!(_localValue && _cookie)
		userStatus = userStatus !== 'false' ? userStatus : false;

		return userStatus;
	},
}