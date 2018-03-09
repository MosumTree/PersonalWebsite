define(function(require, exports, module) {

    (function($) {

        //将Date型format成("yyyy年MM月dd日hh小时mm分ss秒");
        Date.prototype.format = function(format) {
            /*
             * eg:format="YYYY-MM-dd hh:mm:ss";
             使用方法:
             var testDate = new Date();
             var testStr = testDate.format("yyyy年MM月dd日hh小时mm分ss秒");
             alert(testStr);
             */
            var o = {
                "M+": this.getMonth() + 1, //month
                "d+": this.getDate(), //day
                "h+": this.getHours(), //hour
                "m+": this.getMinutes(), //minute
                "s+": this.getSeconds(), //second
                "q+": Math.floor((this.getMonth() + 3) / 3), //quarter
                "S": this.getMilliseconds() //millisecond
            }

            if (/(y+)/.test(format)) {
                format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
            }

            for (var k in o) {
                if (new RegExp("(" + k + ")").test(format)) {
                    format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
                }
            }
            return format;
        };

        //timeoutFun 空函数用来填充某些逻辑
        var timeoutFun = function() {};

        // 侦听整个页面input的focus和blur事件，使其在转场的时候失去焦点
        var inputFocus = {
            init: function() {
                $("input").on("focus blur", this.inputEvents);
            },

            inputEvents: function(e) {
                if (e.type === "focus") {
                    inputFocus.isFocus = true;
                    inputFocus.elem = this;
                } else {
                    inputFocus.isFocus = false;
                    inputFocus.elem = null;
                }
            },
            isFocus: false,
            element: null
        };

        $.extend($, {

            /*get device system type name*/
            getDeviceType: function() {
                if ($.os.android)
                    return "android";
                else if ($.os.ios)
                    return "ios";
                else if (!$.os.phone && !$.os.tablet)
                    return "windows";
            },

            isInWeChat:function(){
                return navigator.userAgent.indexOf('MicroMessenger') > -1; 
            },

            loadJS(url, callback) {
                var head = document.getElementsByTagName("head")[0];
                var script = document.createElement("script");
                script.src = url;
                var done = false;
                script.onload = script.onreadystatechange = function() {
                    if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
                        done = true;
                        callback();
                        script.onload = script.onreadystatechange = null;
                        head.removeChild(script);
                    }
                };
                head.appendChild(script)
                return;
            },
            
            //千分位,ttfund里的会给克数加小数点
            comdify(n){
                // 　　var re=/\d{1,3}(?=(\d{3})+$)/g;
                // 　　var n1=n.replace(/^(\d+)((\.\d+)?)$/,function(s,s1,s2){return s1.replace(re,"$&,")+s2;});
                // 　　return n1;

                var re=/\d{1,3}(?=(\d{3})+$)/g;
            　　var n1=n.replace(/^(\d+)((\.\d+)?)$/,function(s,s1,s2){return s1.replace(re,"$&,")+s2;});
            　　return n1;
            },
            fmoney: function(s,n) {
                if(s == 0 && n != 0){
                    if(n == 4)
                       return "0.0000";
                    else
                       return "0.00";   
                }

                if(isNaN(parseInt(s)) || s == "") return s;

                var unit = /%/.test(s) ? "%" : "";
    
                s = parseFloat(s);
    
                var assignMentflag = false;
                if (s < 0) {
                    s = -1 * s;
                    assignMentflag = true;
                }
                n = (n > 0 && n <= 20) ? n : (n == 0) ? 0 : 2;

                if(n == 0) return parseInt(s);
    
                if(assignMentflag)
                    s = (Math.ceil(Number(s) * Math.pow(10,n) - 0.0001) / Math.pow(10,n)).toFixed(n) + "";
                else
                    s = (Math.floor(Number(s) * Math.pow(10,n) + 0.0001) / Math.pow(10,n)).toFixed(n) + "";
    
        
                var l = s.split(".")[0].split("").reverse(),
                    r = s.split(".")[1];
                var t = "";
                for (var i = 0; i < l.length; i++) {
                    t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
                }
    
    
                if(assignMentflag)
                    return '-'+t.split("").reverse().join("") + "." + r+unit;
                else
                    return t.split("").reverse().join("") + "." + r+unit;
            },            

            
            
            getFormatMoney:function(d,n=2) {                
                return parseFloat(d).toFixed(n);
            },

            getFormatPrice:function(d,n=2) {
                return d < 0 ? (Math.ceil(Number(d) * Math.pow(10,n) - 0.0001) / Math.pow(10,n)).toFixed(n) : (Math.floor(Number(d) * Math.pow(10,n) + 0.0001) / Math.pow(10,n)).toFixed(n);
            },

            isEmpty: function(value, allowEmptyString) {
                return (value === null) || 
                (value === undefined) || 
                (!allowEmptyString ? value === '' : false) || 
                (this.isArray(value) && value.length === 0) || 
                (value == "(null)") || 
                (value == "--");
            },

            simplePageLink:function (target,current,parameters = "") {
                const tempLastPage = current.attr("id");
                const targetId = target.attr("id");
                target.data("lastpage",tempLastPage);
                location.href = location.origin + location.pathname + "#goPage=" + targetId + "&lastPage=" + tempLastPage + parameters;
                return false;
            },

            isInApp() {
                return (navigator.userAgent.toLowerCase()).indexOf("ttjj") > 0;
            },

            toFixed(val, num) {
                return (Math.floor(Number(val) * 100 + 0.01) / 100).toFixed(num);
            },
            
            unique(arr) {
                var result = [], hash = {};
                for (var i = 0, elem; (elem = arr[i]) != null; i++) {
                    if (!hash[elem]) {
                            result.push(elem);
                            hash[elem] = true;
                    }
                }
                return result;
            },

            mergeJsonObject(jsonbject1, jsonbject2) {
                var resultJsonObject={};
                
                for(var attr in jsonbject1){
                    resultJsonObject[attr]=jsonbject1[attr];
                }

                for(var attr in jsonbject2){
                    resultJsonObject[attr]=jsonbject2[attr];
                }
                
                return resultJsonObject;
            },

            

            

            splitDateTime(dateStr){
                var arr = dateStr.split(/[- :]/);
                return new Date(arr[0], arr[1] - 1, arr[2], arr[3], arr[4], arr[5]);
            },

            /*change page to another*/
            movePageTo: function(start, end, animate, callback, hoverBtn, isBack) {
                start.pageTo({
                    target: end,
                    type: animate,
                    hover: hoverBtn,
                    back: isBack,
                    callback: callback
                });
                return false;
            },

            height: function() {
                return (window.webviewHeight && window.webviewHeight / window.devicePixelRatio) || (document.documentElement.offsetHeight);
            },

            width:function(){
                return (window.webviewWidth && window.webviewWidth / window.devicePixelRatio) || (document.documentElement.offsetWidth);
            },

            relativeHeight:function(tempHeight){
                return this.width() / 375 * this.height() * tempHeight / 667;
                // return this.width() / 375 * tempHeight;
            },

            getBrowserVendor: function() {
                return (/webkit/i).test(navigator.appVersion) ? 'webkit' :
                    (/firefox/i).test(navigator.userAgent) ? 'Moz' :
                    (/trident/i).test(navigator.userAgent) ? 'ms' :
                    'opera' in window ? 'O' : '';
            },

            cookie: function(key, value, options) {

                var days, time, result, decode;

                if (arguments.length > 1 && String(value) !== "[object Object]") {

                    options = $.extend({}, options);

                    if (value === null || value === undefined) options.expires = -1;

                    if (typeof options.expires === 'number') {
                        days = (options.expires * 24 * 60 * 60 * 1000);
                        time = options.expires = new Date();

                        time.setTime(time.getTime() + days)
                    }

                    value = String(value);

                    return (document.cookie = [
                        encodeURIComponent(key), '=',
                        options.raw ? value : encodeURIComponent(value),
                        options.expires ? '; expires=' + options.expires.toUTCString() : '',
                        options.path ? '; path=' + options.path : '',
                        options.domain ? '; domain=' + options.domain : '',
                        options.secure ? '; secure' : ''
                    ].join(''))
                }

                options = value || {};

                decode = options.raw ? function(s) {
                    return s
                } : decodeURIComponent;

                return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
            },


            hideMask: function() {
                var loadingMaskUI = $("#_loadingMaskUI_");
                loadingMaskUI.css("display", "none");
                clearTimeout(timeoutFun);
            },

            hideMaskForce:function(){
                this.hideMask();
                return false;
            },

            initWeixinShare:function(event) {
                        
                var _url = window.location.href;
                if (_url.indexOf("#") > 0)
                    window.location.href = location.href;

        
                const tempTitle =   event["title"];
                const tempContent = event["content"];
                const tempUrl =     event["url"];
                const tempImgUrl =  event["imgUrl"];
        
                const wx_config = function (data) {
                    return {
                        appId: data.appId,
                        timestamp: data.timestamp,
                        nonceStr: data.nonceStr,
                        signature: data.signature,
                        jsApiList: [
                            'onMenuShareTimeline',
                            'onMenuShareAppMessage',
                            'onMenuShareQQ',
                            'onMenuShareWeibo'
                        ]
                    }
                };
        
                $.loadJS("https://fundsc.eastmoney.com/static/jweixin_20150119133544.js",function(){
                        const wx = window.wx;
                    
                        const wx_shareEvent = function () {
        
                            wx.onMenuShareTimeline({
                                title:  tempTitle,
                                desc:   tempContent,
                                link:   tempUrl,
                                imgUrl: tempImgUrl,
                                success: function () {},
                                cancel: function () {}
                            });
        
                            wx.onMenuShareAppMessage({
                                title:  tempTitle,
                                desc:   tempContent,
                                link:   tempUrl,
                                imgUrl: tempImgUrl,
                                type: '',
                                dataUrl: '',
                                success: function () {},
                                cancel: function () {}
                            });
        
                            wx.onMenuShareQQ({
                                title:  tempTitle,
                                desc:   tempContent,
                                link:   tempUrl,
                                imgUrl: tempImgUrl,
                                success: function () {},
                                cancel: function () {}
                            });
        
                            wx.onMenuShareWeibo({
                                title:  tempTitle,
                                desc:   tempContent,
                                link:   tempUrl,
                                imgUrl: tempImgUrl,
                                success: function () {},
                                cancel: function () {}
                            });
                        };
        
                        $.getJSON("https://fundhd.eastmoney.com/wx2?url=" + encodeURIComponent(tempUrl), function (data) {
                            wx.config(wx_config(data));
                            wx.ready(wx_shareEvent);
                        });
        
                })
        
            },

            /* 页面跳转，使用当前的目录 */
            replaceHtmlFilePath: function(htmlname){
                const origin = location.origin;
                const pathname = location.pathname;
                var path = "";
    
                if(/\.html$/i.test(pathname))
                    path = origin + pathname.replace(/(.*\/)(.+)\.html$/,function($0,$1,$2){
                        return $1 + htmlname+".html";
                    });
                else
                    path = origin + pathname + htmlname + ".html"
    
                return path;
            },

            judgFundColor:function(field){
                return field < 0 ? " fund_down" : field == 0 ? " fund_equal" : " fund_rise"; 
            }

        });

        $.extend($.fn, {

            pageTo: function(event) {
                // 如果在转场时有input的获焦状态，则取消
                if (inputFocus.isFocus) {
                    $(inputFocus.element).blur();
                    inputFocus.isFocus = false;
                    inputFocus.element = null;
                }

                if (event) {
                    if (event.target) {
                        pageToVars.current = this;
                        pageToVars.target = event.target;
                        pageToVars.type = event.type;
                        pageToVars.callback = event.callback;
                        pageToVars.hover = event.hover;
                        pageToVars.back = event.back;
                        pageToVars.start();
                    }
                }

            },

            removeCss: function(cssKey) {
                if (cssKey) {
                    this.css(cssKey, "");
                    if (this.css(cssKey) == null) {
                        this.removeAttr("style");
                    }
                } else {
                    this.removeAttr("style");
                }
                return this;
            }


        });

    })($);

});