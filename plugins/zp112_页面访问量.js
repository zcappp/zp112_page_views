function onInit({ exc, container, props }) {
    if (props.ph) container.innerText = props.ph
    exc(`$traffic.pagesum("${props.page || ""}")`, null, R => {
        container.innerText = R
    })
}

$plugin({
    id: "zp112",
    props: [{
        prop: "page",
        type: "text",
        label: "页面路径",
        ph: "默认当前页面"
    }, {
        prop: "ph",
        type: "text",
        label: "数据未加载时的提示语"
    }],
    onInit,
    css: '.zp112 { display: inline-block; }'
})