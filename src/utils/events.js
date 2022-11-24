// 编辑器自定义事件
const events = {
    redirect(url) {
        if (url) {
            window.location.href = url
        }
    },

    alert(msg) {
        if (msg) {
            // eslint-disable-next-line no-alert
            alert(msg)
        }
    },

    mouseover(){
        console.log('111111')
    }
}

const mixins = {
    methods: events,
}

const eventList = [
    {
        key: 'redirect',
        label: '跳转事件',
        event: events.redirect,
        param: '',
    },
    {
        key: 'alert',
        label: 'alert 事件',
        event: events.alert,
        param: '',
    },
    {
        key: 'mouseover',
        label: 'mouseover 事件',
        event: events.mouseover,
        param: '',
    },
]

export {
    mixins,
    events,
    eventList,
}