// import common 					from 'common';
import FetchJsonp 		        from 'fetch-jsonp';
// import ShowLoadingMask      from 'loadingMask/showLoading';
class RequestModel{

    constructor(){}

	static commonParams = {}

    // recordError(requestUrl,requestParams,responseData){
	// 	const linkUrl = common.serverList.commonJsUrl + "/Enervite/Home/RecordError";
		
	// 	this.sendPostRequest({
	// 		"RequestUrl":		requestUrl,
	// 		"RequestParams":	requestParams,
	// 		"ResponseData":		responseData,
	// 		"ProjectName":		"RaisingLimitFund",
	// 		"PageLink":			encodeURIComponent(location.href)
	// 	},linkUrl)
	// }

    sendJsonpRequest(params,serverUrl){
		const _this = this;
		// const tempParams = $.mergeJsonObject(params,common.marketCommonParams);
		const tempParams = $.mergeJsonObject(params);

		return new Promise(function(resolve,reject){

			FetchJsonp(serverUrl + _this.objectToStr(tempParams) ,{
				timeout: 15000,
				jsonpCallback: 'callback'
			})
			.then(response => response.json())
			.then(json => { 
				
				resolve(json); 
			})
			.catch((ex) => {
				reject(ex)
			});

		});
	}

    sendPostRequest(params,serverUrl){
		const _this = this;
		const tempParams = $.mergeJsonObject(params);
		// console.log(tempParams)
		return new Promise(function(resolve,reject){

			fetch(serverUrl,{
				method: 'POST',
				body: _this.objToFormData(tempParams)
			})
			.then(response =>response.json())
			.then(json => resolve(json))
			.catch(ex=>reject(ex))

		});
	}

	sendGetRequest(params,serverUrl){
		const _this = this;
		const tempParams = $.mergeJsonObject(params);

		return new Promise(function(resolve,reject){
			fetch(serverUrl + _this.objectToStr(tempParams))
			.then(response => response.json())
			.then(json => {
				console.log(json)
				resolve(json);
			})
			.catch(ex => { reject(ex); })
		});
	}


	objToFormData(obj){
		var form = new FormData()

		for(let key in obj)
			form.append(key, obj[key])

		return form
	}

	objectToStr(obj){
		let form = "?";
		for(let key in obj){
			form = form + (key + "=" + obj[key] + "&");
		}

		return form.substr(0,form.length - 1);
	}

}

export default RequestModel;