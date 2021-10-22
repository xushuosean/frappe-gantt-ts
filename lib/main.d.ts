declare type Task = {
    name: string;
    start: string;
    end: string;
    id: string;
    progress?: number;
};
declare type GanttOptions = {
    view_mode?: string;
    draggable: boolean;
    resizeable: boolean;
    isPop: boolean;
    on_contextmenu: () => {};
};
export default class Gantt {
    constructor(wrapper: string | Element, tasks: Task[], options: GanttOptions);
    private setup_wrapper;
}
export {};
