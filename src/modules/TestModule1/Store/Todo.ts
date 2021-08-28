import { action, observable } from 'mobx';

class TodoStore {
    @observable
    count = 1;
    

    // 设置值
    @action
    setCount = () => {
        this.count++;
    }

    @action
    getCount = () => {
        return this.count 
    }
    // 如果有副作用的话请在这里处理

    // 如果涉及到多播操作也在这里处理

}

export default TodoStore

