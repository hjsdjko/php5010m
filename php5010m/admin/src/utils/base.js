const base = {
    get() {
        return {
            url : "http://localhost:8080/php5010m/",
            name: "php5010m",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/php5010m/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于小程序的企业产品推广系统"
        } 
    }
}
export default base
